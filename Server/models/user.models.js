import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  mobileNumber: {
    type: Number,
  },
  firstName: { type: String },
  lastName: { type: String },
  adress: { type: String },
  profile: { type: String },
});

export default mongoose.model("Userauth", UserSchema);
