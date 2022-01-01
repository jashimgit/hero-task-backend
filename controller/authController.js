import bcrypt from 'bcrypt';
import Auth from '../model/authModel';

export const handleSignup = async (req,res)=> {
    const {body} = req;

    // create new user
    const user = new Auth(body);
    console.log(user);
}

