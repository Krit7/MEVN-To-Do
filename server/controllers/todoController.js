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
addTodo=(req,res)=>{
    const newTodo=req.body.todo
    Todo.create(newTodo,(err,addedTodo)=>{
        if(err){
            console.log(err)
        }
    })
}

//Delete Todo
deleteTodo=(req,res)=>{
    const todoID=req.params.id
    // const todoID=req.body.todoID
    Todo.findByIdAndDelete(todoID,(err,deletedTodo)=>{
        if(err){
            console.log(err)
        }
    })
}


//Edit Todo
editTodo= (req,res)=>{
    const todoID=req.params.id
    // const todoID=req.body.todoID
    const newTodo=req.body.todo
    Todo.findByIdAndUpdate(todoID,newTodo,(err,editedTodo)=>{
        if(err){
            console.log(err)
        }else{
            console.log(editedTodo)
        }
    });
}


module.exports = {
    getTodos,
    getTodo,
    editTodo,
    addTodo,
    deleteTodo,
}