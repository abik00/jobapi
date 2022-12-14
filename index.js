const express =require("express")
const cors=require("cors")
const app=express()
app.use(cors())
const port=process.env.PORT || 9000
const apiData=require("./data.json")


app.get('/',(req,res)=>{
    res.send('hello i am live')
})

app.get("/job",(req,res)=>{
    res.send(apiData)


})

app.listen(port,()=>{
    console.log('i am live')
})