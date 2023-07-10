import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName:{
    type: String,
    required: true,
    maxlenght:30

    },

  email: {
    type: String,
    required: true,
    unique: true,

    maxlenght:30
  },
  password:
   {
    type: String,
    required: true,
    minlength: 8
  },
  phoneNumber:{
    type: String,
    required: true,
    minlength: 7,
    maxlength: 15

  },
  gender:{
    type: String,
    enum: ['Male', 'Female', 'Others']
  },
  dateOfBirth:{
    type: Date
  }
  
},

{
  timestamps:true

});

const Users = mongoose.model("Users", userSchema);

export default Users;