import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String, // typeof -> type으로 수정
      min: 2,
      max: 100,
      required: true, // 올바르게 설정되어 있음
    },
    email: {
      type: String, // typeof -> type으로 수정
      required: true,
      max: 100,
      unique: true,
    },
    password: {
      type: String, // typeof -> type으로 수정
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user", // 기본 값을 "user"로 설정하였습니다. 필요에 따라 변경 가능
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
