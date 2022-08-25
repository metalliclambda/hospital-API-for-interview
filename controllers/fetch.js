const Patient = require('../models/patient');
const Hospital = require('../models/hospital');

module.exports.getFetch = async (req , res , next)=>{
    let result = {};
    let {hospitalId} = req.body;
    let allData = await Patient.find({hospitalId : hospitalId}).populate('hospitalId');
    

    let hospital = await Hospital.findOne({_id : hospitalId}).populate('psychiatrists').lean();
    
    let drCount = hospital.psychiatrists.length;
    let patientCount = allData.length;
    
    let psychiatristsDetails = hospital.psychiatrists.slice();
    
    for(let i=0 ; i < psychiatristsDetails.length ; i++){
        let id = psychiatristsDetails[i]._id;
        let count = allData.filter( (p) => {
            return p.psychiatristId == id
        });        
        psychiatristsDetails[i].patientsCount = count.length;
    }

    result.hospitalName = hospital.name;
    result.totalPsychiatristCount = drCount;
    result.totalPatientsCount = patientCount;
    result.psychiatristDetails = psychiatristsDetails;

    res.json(result)
}