import mongoose from 'mongoose';

const authSchema = new mongoose.Schema( {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    address: {type: String},
    age: {type: String},
    phone: {type: String},
    DlicencePic: {type: String},
    area: {type: String},
    nidPic: {type: String},
    profilePic: {type: String},
    carInfo: {
        vehicalName: {type: String},
        modelNo: {type: String},
        palateNo: {type: String}
    },
    password: {type: String},
    vehicalType: {type: String}
});

export default authSchema;