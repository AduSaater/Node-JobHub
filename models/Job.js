const mongoose = require('mongoose');
const JobSchema = new mongoose({
title: {
    type: String, 
    require: true,
},
location: {
    type: String, 
    require: true,
},
description: {
    type: String, 
    require: true,
},
agentName: {
    type: String, 
    require: true,
},
salary: {
    type: String, 
    require: true,
},
period: {
    type: String, 
    require: true,
},
contract: {
    type: String, 
    require: true,
},
hiring: {
    type: Boolean, 
    require: true,
    default: true
},
requirements: {
    type: Array, 
    require: true,
},
imageUrl: {
    type: String, 
    require: true,
},
agentId: {
    type: String, 
    require: true,
},
},
{timestamps: true}
);
module.exports = mongoose.model('Job', JobSchema);