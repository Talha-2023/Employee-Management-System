import User from "./model/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

const userRegister = async () => {
  try {
    await connectToDatabase(); // Ensure this is awaited

    const hashPassword = await bcrypt.hash("adminTalha", 10);
    console.log("Password hashed successfully:", hashPassword);

    const newUser = new User({
      name: "Talha",
      email: "talha05@admin.com",
      password: hashPassword,
      role: "admin",
    });

    await newUser.save();
    console.log("User registered successfully:", newUser);
  } catch (error) {
    console.error("Error during user registration:", error);
  }
};

userRegister();
