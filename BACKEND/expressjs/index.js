const express= require("express");
const app = express();
// console.dir(app);
let port = 8080;

app.get("/",(req,res)=>{
        console.log("hey it is /");
})
app.get("/apple",(req,res)=>{
        console.log("hey it is apple");
})

