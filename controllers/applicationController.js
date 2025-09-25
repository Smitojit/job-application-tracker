const Application= require('../models/Application');

const getApplications = async (req,res)=>{
    try{
        const applications=await Application.find();
        res.json(applications);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

const addApplication =async (req,res)=>{
    const{company,position,status,notes}=req.body;

    try{
        const application=new Application({
            company,
            position,
            status,
            notes,
        });
        const savedApp = await application.save();
        res.status(201).json(savedApp);
    } catch(error){
        res.status(400).json({message:error.message});
    }
};
const updateApplication = async(req,res)=>{
    try{
        const updatedApp=await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
         );
         if(!updatedApp) return res.status(404).json({message:"Application not found"});
         res.json(updatedApp);
        }catch(error){
        res.status(400).json({message:error.message});
    }
};

const deleteApplication = async(req,res)=>{
    try{
        const deleteApp= await Application.findByIdAndDelete(req.params.id);
        if(!deleteApp) return res.status(404).json({message:"Application not found"});
        res.json({message:"Application deleted succesfully"});
    }catch (error){
        res.status(500).json({message:error.message});
    }
};

module.exports={
    getApplications,
    addApplication,
    updateApplication,
    deleteApplication,
};