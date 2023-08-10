const mongooose =require('mongoose')

 

const UserSchema = new mongooose.Schema({

    Name:String,

    Email:String,

    Password:String,

    Phnumber:Number,

    Role:String,

})
const UserModel = mongooose.model("Users",UserSchema)

module.exports=UserModel