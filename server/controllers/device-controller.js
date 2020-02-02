const Device = require('../models/devices.js');

const deviceCtrl = {}

deviceCtrl.getDevices = async (req,res) => {
    const devices = await Device.find();
    res.json(devices);
}

deviceCtrl.getDeviceById = async (req,res) => {
    const device = await Device.findById(req.params.id);
    res.json(device)
}

deviceCtrl.createDevice = async (req,res) => {
    const device = new Device(req.body);
    console.log(req.body);
    if(device.type != "" && device.description != "" ) {
        await device.save();
        res.json({status: "Device Saved"});          
    } else {
        //res.json({status: "Device Saved"});      
    }
    
}

deviceCtrl.updateDeviceById = async (req,res) => {
    const id = req.params.id;
    const device = {
        type : req.body.type,
        description: req.body.description,
        value: req.body.value,
    };
    await Device.findByIdAndUpdate(id, {$set:device}, {new : true});
    res.json({status: "Device Updated"});
}

deviceCtrl.removeDevices = async (req,res) => {
    await Device.remove();
    res.json({status: "All Devices RemovedData"});
}

deviceCtrl.removeDeviceById = async (req,res) => {
    await Device.findByIdAndRemove(req.params.id);
    res.json({status: "All Devices RemovedData"});
}

module.exports = deviceCtrl;