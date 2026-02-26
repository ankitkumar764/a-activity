// // ---------------1111111111-get-method to find data_docuents


// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 9000;
// app.use(express.json());

// // ======================== CONNECT__TO__MONGOOSE:::

// mongoose.connect("mongodb://localhost:27017/Flipkart")   // make sure that the mongodb is running & url is correct
// .then(()=> console.log("MongoDB connected successfully"))
// .catch((error)=> console.log("MongoDB connection failed :- " , error))

// // empty schema (ony for fetching)
// const userSchema = new mongoose.Schema({});


// // collection name   (we can say that model = collection)
// const user = mongoose.model("users",userSchema);  // here user is collection name that has been in server && userSchema is the schema means blueprint of our data


// app.get("/", (req, res) => {
//   res.send("Express server is running on 3000 port");
// });

// app.get("/users", async (req,res)=>{
//     try{
//         // 1. fetch all users from database
//         const data = await user.find({});
//         res.json(data);
//     }
//     catch(error){
//         res.status(500).json({error : error.message})
//     }
// })

// app.listen(9000, () => {
//   console.log("Server started on port 3000");
// });
















// // 222222222222222--------------------->THIS_IS_FOR_POST_DATA_ON_YOUR_DATABASE_VIA_NODEJS---------------->>>>>>>
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 5002;

// app.use(express.json());

// // ================== CONNECT TO MONGODB ==================

// // Yaha "MyNewDatabase" naam ka database banega
// mongoose.connect("mongodb://localhost:27017/MyNewDatabase")
// .then(() => console.log("MongoDB connected successfully"))
// .catch((error) => console.log("MongoDB connection failed:", error));


// // ================== SCHEMA ==================

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   }
// });


// // ================== MODEL ==================

// const User = mongoose.model("User", userSchema);
// // Collection name automatically "users" ho jayega


// // ================== ROUTES ==================

// // Home Route
// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });


// // ✅ POST - Insert Data
// app.post("/users", async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json({
//       message: "User added successfully",
//       data: newUser
//     });
//   } catch (error) {
//     res.status(400).json({
//       error: error.message
//     });
//   }
// });


// // ✅ GET - Fetch All Users
// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({
//       error: error.message
//     });
//   }
// });


// // ================== START SERVER ==================

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });








// --------------------------------PRACTICE_METHOD_HETU_________________
const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Practice")
.then(()=>{console.log("Successfully connected")})
.catch((error)=>{console.log("error id thst ",error)})

const userSchema=new mongoose.Schema({
  name:String,
  age:Number,
})

const user=mongoose.model("users",userSchema);

app.post("/sender",async (req,res)=>{
  const newUser=await user.create(req.body);
  res.json(newUser)
})

app.listen(2100,()=>{
  console.log("server is successfully runing on port 2100")
})



