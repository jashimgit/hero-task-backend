import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectWithDB = () => {
    const uri =    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.vewnd.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      };

      mongoose
    .connect(uri, options)
    .then(() => console.log("Connected to DB"))
    .catch((e) => console.log(e));
}


export default connectWithDB;
