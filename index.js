// const express = require('express');    ---- can use directly
import express from "express";

const app = express();
app.use(express.json()); // above exress 4 we can use it directly no need for body-parser to install.
const PORT = 5111;

app.all("/", (req, res)=> { 
    res.send("I am sending response");
});

app.listen(PORT, () =>{
    console.log(`Server is Started at : ${PORT}`);
});

const todos = [
{
    id: 1,
    title: 'Task1',
    completed: true
}, 
{
    id: 2,
    title: 'Task2',
    completed: true
}, 
{
    id: 3,
    title: 'Task3',
    completed: true
}
]
// Read
app.get('/todos',(req,res)=>{
    res.json(todos);
})
// Create
app.post('/todos',(req,res)=> {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
        message: 'new todo added'
    })
})
// update
app.put('/todos/:id', (req, res) => {
    const updatedData = req.body;
    const id = Number(req.params.id); 
    const dataIndex = todos.findIndex(x => x.id === id);
    if(dataIndex !== -1){
        todos[dataIndex] = {
            id: id,
            ...updatedData
        }
    }
    res.json({
        message: 'Data updated for   ' + id
    })
})
// delete
app.delete('/todos/:id',(req, res) => {
    const id = Number(req.params.id);
    const dataIndex = todos.findIndex(x => x.id === id);
    if (dataIndex !== -1) {
        todos.splice(dataIndex,1);
    }
    res.json({
        message: 'Todo Deleted with id  ' + id
    })
})
