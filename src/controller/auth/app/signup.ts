import { RequestHandler } from "express";
import  bcrypt from 'bcrypt';
import Users from "../../../models/users";

const signupController : RequestHandler = async (req, res) => {

  const { fullName, email, password, phoneNumber, gender, dateOfBirth } = req.body;

  try {

    const hashedPass = await bcrypt.hash(password, 8);

    const newUser = await Users.create({
        userName: fullName,
        email,
        password: hashedPass,
        phoneNumber, 
        gender,
        dateOfBirth

    });

    return res.json({

      message: "User created successfully",

      data: newUser

    });

    
  } catch (error) {

    console.log("Error", error);

  }; 

};

export default signupController;