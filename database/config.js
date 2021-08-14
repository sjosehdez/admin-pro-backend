const mongoose = require('mongoose');
//user: mean_user
//password: Sr415CCaga50CIaM
//mongodb+srv://mean_user:Sr415CCaga50CIaM@cluster0.ttlfm.mongodb.net/hospitaldb
//Retorna una promesa
const dbConnection = async () =>{
//?authSource=admin&replicaSet=atlas-fzvhkx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });        
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }

}

module.exports = {
    dbConnection
}