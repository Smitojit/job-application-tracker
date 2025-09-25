const mongoose=require('mongoose');

const applicationSchema=new mongoose.Schema({
    company:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum:['applied','interviewing','rejected','offer'],
        default: 'applied',
    },
    dateApplied:{
        type: Date,
        default: Date.now,
    },
    notes:{
        type: String,
    },
}, {
    timestamps: true
});

module.exports=mongoose.model('Application',applicationSchema);