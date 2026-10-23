
import mongoose from 'mongoose';
import employHoursSheet from '../model/empluyHoursDatabase.js';

export const gettingAllHours = async (req, res) => {
  try {
    const allEmployHours = await employHoursSheet.find({
      owner: req.userId
    });

    res.json(allEmployHours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatingOrAddingHours = async (req, res) => {
  try {
    const employID = Number(req.params.id);
    const date = req.body.date;
    const hours = Number(req.body.hours);

    const allEmployHours = await employHoursSheet.findOneAndUpdate(
      {
        owner: req.userId,
        employID,
        date
      },
      {
        $set: { hours },
        $setOnInsert: {
          owner: req.userId,
          employID,
          date
        }
      },
      {
        upsert: true,
        new: true,
        runValidators: true
      }
    );

    res.json(allEmployHours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const TotalMonthlyHours = async (req, res) => {
  try {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');

    const thisMonthStart = `${year}-${month}-01`;
    const nextMonth = new Date(year, now.getMonth() + 1, 1);
    const thisMonthEnd = nextMonth.toISOString().slice(0, 10);

    const totalMonthlyHours = await employHoursSheet.aggregate([
      {
        $match: {
          owner: new mongoose.Types.ObjectId(req.userId),
          date: {
            $gte: thisMonthStart,
            $lt: thisMonthEnd
          }
        }
      },
      {
        $group: {
          _id: null,
          TotalHours: { $sum: '$hours' }
        }
      }
    ]);

    res.json(totalMonthlyHours[0]?.TotalHours ?? 0);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletingHoursHistory = async (req, res) => {
  try {
    const deletedEmploy = await employHoursSheet.deleteMany({
      owner: req.userId,
      employID: Number(req.params.id)
    });

    res.json(deletedEmploy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
