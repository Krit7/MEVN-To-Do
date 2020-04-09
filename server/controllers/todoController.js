const Todo = require('../models/todo')

//Form Validation MiddleWare
validateInput=(req,res,next)=>{
    const title=req.body.title
    const description = req.body.description
    const date =(new Date()).toString().split(' ').splice(1,3).join(' ')
    const priority = req.body.priority

    if( title && description && date && priority){
        next();
    }else{
        res.redirect()
    }
}

//Get All ToDos
getTodos = (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log(err)
        } else {
            res.send(todos)
        }
    })
}


//Get Todo
getTodo = (req,res)=>{
    const todoID=req.params.id
    Todo.findById(todoID,(err,todo)=>{
        if(err){
            console.log(err)
        }else{
            res.send(todo)
        }
    });
}

//Add todo


//Delete Todo

//Edit Todo


module.exports = {
    getTodos,
    getTodo
}