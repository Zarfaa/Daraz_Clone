import { RequestHandler } from "express";
import Users from "../../../models/users";
import bcrypt from 'bcrypt'

const loginController : RequestHandler= async (req, res) => {

  const { email, password } = req.body;

  try {
    
    const existingUser = await Users.findOne({
      email
      
    });

    //console.log(existingUser);

    if (!existingUser) {
      return res.status(403).send("Invalid Credentials");
    }

    const passwordMatched = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatched) {

      return res.status(403).send("Invalid Credentials");

    }

    return res.json({

      message: "Login Successfully",

      data: {

        user: existingUser,

      }

    });

  } catch (error) {

    console.log(Error);

  };

};

export default loginController;