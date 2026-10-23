import jwt from 'jsonwebtoken'


export let authMiddleWare =(req ,res ,next)=>{
  
    try{

       const token = req.cookies?.token;

       if(!token){
          return res.status(401).json({message: 'Please Login First'})
       }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

         req.userId = decoded.id;

         next();

    }catch(err){
        return res.status(401).json({message: 'Invalid Or Expired Token'})
    }
}