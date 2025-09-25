const express = require('express');
const router = express.Router();
const{
    getApplications,
    addApplication,
    updateApplication,
    deleteApplication,
} = require ('../controllers/applicationController');

router.get('/',getApplications);
router.post('/',addApplication);
router.put('/:id',updateApplication);
router.delete('/:id',deleteApplication);

module.exports= router;