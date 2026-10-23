import employDatabase from '../model/employesDatabase.js'
import  mongoose from 'mongoose'

export const gettingEmploy = async (req, res) => {
    try {

        // Get only employees belonging to the logged-in user
        const allEmployes = await employDatabase.find({
            owner: req.userId
        });

        // Send those employees to the frontend
        res.json(allEmployes);

    } catch (error) {

        // Return an error if something goes wrong
        res.status(500).json({
            message: error.message
        });
    }
};
export const SingleEmployDetail = async (req, res) => {
    try {

        // Find an employee using their employee ID
        // AND the currently logged-in user's ID
        const singleEmployeDetails = await employDatabase.findOne({
            id: Number(req.params.id),
            owner: req.userId
        });

        // If the employee doesn't exist or belongs
        // to another employer, return 404
        if (!singleEmployeDetails) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }

        // Send the employee details to the frontend
        res.status(200).json(singleEmployeDetails);

    } catch (error) {

        // Handle unexpected server or database errors
        res.status(500).json({
            message: error.message
        });
    }
};
export const addingNewEmploy = async (req, res) => {
    try {

        // Create a new employee using the frontend data
        const addedemploy = await employDatabase.create({

            ...req.body,

            // Get the logged-in user's ID from JWT middleware
            // Never trust an owner ID sent by the frontend
            owner: req.userId

        });

        // Return the newly created employee
        res.status(201).json(addedemploy);

    } catch (error) {

        // Return an error if employee creation fails
        res.status(500).json({
            message: error.message
        });
    }
};


export const updatingEmploy = async (req, res) => {
    try {
        const updatedEmploy = await employDatabase.findOneAndUpdate(
            {
                id: Number(req.params.id),
                owner: req.userId
            },
            {
                id: Number(req.body.id),
                name: req.body.name,
                hourleyWage: Number(req.body.hourleyWage),
                shiftType: req.body.shiftType,
                jobRole: req.body.jobRole,
                email: req.body.email,
                PhoneNo: req.body.PhoneNo,
                joiningDate: req.body.joiningDate
            },
            { new: true, runValidators: true }
        );

        if (!updatedEmploy) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }

        res.json(updatedEmploy);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const deletingEmploy = async (req, res) => {
    try {

        // Delete only if employee ID and logged-in owner match
        const deletedEmploy = await employDatabase.deleteOne({
            id: Number(req.params.id),
            owner: req.userId
        });

        // If no employee was deleted, return 404
        if (deletedEmploy.deletedCount === 0) {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }

        // Employee deleted successfully
        res.status(200).json({
            message: 'Employee deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};