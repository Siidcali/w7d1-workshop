const {buildDB} = require('./db/populateDataBase')
const express=require('express')
const { Cheese } = require('./models/Cheese')
const { User, Board } = require('./models')
const app=express()
buildDB()

app.get('/feta',async (req,res) =>{
    const queryed= await Cheese.findOne({where:{title:'Feta'}})
    let {title,description}=queryed
    let payload={
        title: title,
        description: description
    }
    res.send(payload)
})

app.get('/search',async (req,res)=>{
    if (req.query.Cheese){
        let Cheese=req.query.Cheese
        Cheese=Cheese[0].toUpperCase() +Cheese.slice(1);
        const info=await Cheese.findAll({where:{title:Cheese}})
        res.send(info)
    }
})

app.get('/search',async (req,res)=>{
    if (req.query.user){
        let u=req.query.User
        u=u[0].toUpperCase() +u.slice(1);
        const info=await u.findAll({where:{title:User}})
        res.send(info)
    }
})


app.get('/search',async (req,res)=>{
    if (req.query.board){
        let b=req.query.board
        b=b[0].toUpperCase() +b.slice(1);
        const info=await b.findAll({where:{title:Board}})
        res.send(info)
    }
})


app.listen(3000,()=>{
    console.log('Testing Testing 123 @ http://localhost:3000')
})