import authSchema from '../schema/authSchema';


import mongoose from 'mongoose';


const Auth = mongoose.model('Auth', authSchema);

export default Auth;