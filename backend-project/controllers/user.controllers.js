import UserSchema from "../models/user.models.js";
import bcrypt from "bcrypt";
// import jwt from "json-web-token";

export const Register = async (req, res) => {
    try {
        const {name, email, password, confirmPassword} = req.body;
    if(!name || !email || !password || !confirmPassword) {
        return res.status(401).json({ success: false, message: "All fields are required.."})
    }

    if (password !== confirmPassword) {
        return res.status(401).json({ success: false, message: "password is not matched."})
    }

    const isEmailExist = await UserSchema.findOne({email: email});

    if(isEmailExist) {
        return res.status(401).json({ success: false, message: "This email is already exist, please use different email"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("password", hashedPassword)

    const newUser = new UserSchema({
        name: name,
        email: email,
        password: hashedPassword,
    })

    await newUser.save();
    return res.status(200).json({ success: true, message: "Registration Successfull..."})
    } catch (error) {
        return res.status(500).json({ success: false, message: error})
    }
}

// export const Login = async (req, res) => {
//     try {
//         const {email, password} = req.body;
//     if(!email || !password) {
//         return res.status(401).json({ success: false, message: "All fields are required"})
//     }

//     const user = await UserSchema.findOne({email: email})

//     if(!user) {
//         return res.status(401).json({ success: false, message: "user is not exist, enter correct email"})
//     }

//     const isPassCorrect = await bcrypt.compare(password, user.password)
//     if(!isPassCorrect) {
//         return res.status(401).json({ success: false, message: "Password is wrong"})
//     }

//     const token = jwt.sign({user: user._id}, process.env.JWT_SECRET)

//     res.cookie("token", token)

//     return res.status(200).json({ success: true, message: "login successfull"})
//     } catch (error) {
//         return res.status(401).json({ success: false, message: error})
//     }
// }