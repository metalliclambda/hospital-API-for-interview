const Hospital = require('../models/hospital');


module.exports = async () => {
    let hospitals = await Hospital.find();
    if (!hospitals.length > 0) {
        Hospital.create({
            name: 'Apollo Hospitals',
            _id: '1' , 
            psychiatrists : ['1' , '2' ,'3' , '4' , '5']
        })
        Hospital.create({
            name: 'Jawaharlal Nehru Medical College and Hospital',
            _id: '2' ,
            psychiatrists : ['6','7','8','9','10']
        })
        Hospital.create({
            name: 'Indira Gandhi Institute of Medical Sciences (IGIMS)',
            _id: '3' ,
            psychiatrists : ['11','12','13','14','15']
        })
        Hospital.create({
            name: 'AIIMS - All India Institute Of Medical Science',
            _id: '4' ,
            psychiatrists : ['16','17','18','19','20']
        })
    }
}