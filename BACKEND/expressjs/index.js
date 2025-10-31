const express= require("express");
const app = express();
// console.dir(app);
let port = 8080;
app.listen(port,()=>{
        console.log(`this app is listening to ${port}`);
})
// app.get("/",(req,res)=>{
//         res.send(("hey,i am happy "));
// })
// app.get("/:username/:password",(req,res)=>{
//         console.log(req.params);
// })
app.get(("/search"),(req,res)=>{
         let {username} = req.query;
         let {password} = req.query;
        res.send(`this are the search result: ${username} and password ${password}`);
}) 

