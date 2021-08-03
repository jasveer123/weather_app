const express = require("express")

require("../scr/dbs/connection");
const Report = require("../scr/models/mens")
const app= express()
const port = process.env.PORT || 3000;
app.use(express.json());


app.post("/mens", async (req, res)=>{
    try{
        const addingreports = new Report(req.body)
            console.log(req.body);
            const insertMm= await addingreports.save();
            res.send(insertMm);

            addingreports.save();
        
       
    }catch(e){
         res.send(e);
    }
    
})
app.get("/mens/:id", async (req, res)=>{
    try{   
        const _id=req.params.id
           const getsReport= await Report.findById({_id});
            res.status(201).send(getsReport);  
    }catch(e){
         res.status(400).send(e);
    }
    
})

app.patch("/mens/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
        const getMen = await Report.findByIdAndUpdate(_id,req.body)
        res.send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})

//app.get("/" , async (req,res)=>{

//    res.send("hello from jasveer");
//})

app.listen(port,()=>{
    console.log(`connection is live on the port ${port}`);
})