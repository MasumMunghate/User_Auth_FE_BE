import UserSchema from "../models/user.models.js";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
  try {
    const { email, password, username, profile } = req.body;
    if (!email || !password || !username || !profile) {
      return res.status(400).json({ msg: "All Feilds are required" });
    }

    const emailFind = await UserSchema.findOne({email:email});
    if (emailFind) {
     return res.status(400).json({ msg: "Email Already Exist" });
    }
    const usernameFind = await UserSchema.findOne({username:username});
    if (usernameFind) {
      return res.status(400).json({ msg: "Please Provide Unique Username" });
    }
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const addUser = new UserSchema({
      username,
      email,
      password:hashedPassword,
      profile,
    });
    await addUser.save();
    return res.status(200).json({ msg: " User Addes Successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};


export const registerMail = async (req, res) => {};

export const authenticates = async (req, res) => {};

export const login = async (req, res) => {

};

export const username = async (req, res) => {};

export const generateOTP = async (req, res) => {};

export const verifyOTP = async (req, res) => {};
export const createResetSession = async (req, res) => {};
export const updateUser = async (req, res) => {};
export const resetpassword = async (req, res) => {};
