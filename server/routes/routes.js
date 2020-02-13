const express = require('express');
const router = express.Router();
const path = require('path');

const Task = require('../models/tasks.js');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname));
    /*
    Task.find({},(err,tasks) =>{
        if(err) { console.log("Error present index.js"); throw err;}
        res.render("index", {
            title: 'CRUD API',
            tasks: tasks
        });
    })*/
})

router.post('/add', (req,res)=>{
    let body = req.body;
    body.status = false;
    Task.create(body, (err, task) => {
        if (err) throw err;
        res.redirect('/');
    })
    
})

router.get('/turn/:id', (req,res) => {
    let id = req.params.id;
    Task.findById(id, (err,task) =>{
        if (err) throw err;
        task.status = !task.status;
        task.save() //Promise
            .then(() => {
                res.redirect('/')
            })
    })
})

router.get('/edit/:id', (req,res) => {
    let id = req.params.id;
    Task.findById(id, (err,task) =>{
        if (err) throw err;
        console.log(task);
        task.status = !task.status;
        task.save() //Promise
            .then(() => {
                res.redirect('/')
            })
    })
})

router.get('/delete/:id', (req,res) => {
    let id = req.params.id;
    /*model.findById(id, (err,task) =>{
        if (err) throw err;
        
        task.delete() //Promise
            .then(() => {
                res.redirect('/')
            })
    })*/
    Task.remove({_id: id}, (err,task) => {
        if (err) throw err;
        res.redirect('/');
    })
})


module.exports = router;