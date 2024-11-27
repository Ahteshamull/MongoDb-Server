const express = require("express");
const DbConnect = require("./Db/DbConfig");
const todoModel = require("./Model/todoModel");
const app = express();
const port = 3000;
app.use(express.json());

DbConnect();

// Note: Post method Create Todo

app.post("/create-todo", async (req, res) => {
  let { task } = req.body;
  let createTodo = new todoModel({
    task,
  });
  await createTodo.save();
    return res.status(200).send({ msg: "Task Send Successfully",Data:createTodo });
});


// Note: Get method All Todo

app.get("/get-all-todo", async(req, res) => {
  let getallTodo =  await todoModel.find({})
    return res.status(200).send({
        success: "Data Fetch Successfully",Data:getallTodo
    })
})

// Note: Get method Single Todo

app.get("/single-todo/:id", async (req, res) => {
    let { id } = req.params
    let singleTodo = await todoModel.findOne({ _id: id })
    return res.status(200).send({ msg: "Single Todo Patch", Data: singleTodo });
})

// Note: Delete method Delete Todo

app.delete("/delete-todo/:id", async (req, res) => {
    let {id} =req.params
    let deleteTodo = await todoModel.findOneAndDelete({_id:id })
    return res.status(200).send({msg:"Todo Delete Successfully",Data:deleteTodo})
})

// Note: Patch method Update Todo

app.patch("/update-todo/:id", async(req, res) => {
    let { id } = req.params
  let { task} =req.body
    let updateTodo = await todoModel.findOneAndUpdate({ _id: id },{task:task},{new:true})
    return res.status(200).send({msg:"Updated Todo Successfully",Data: updateTodo})
})




app.use((req, res) => {
  return res.status(404).send("404 Not Found");
});
app.listen(port, () => {
  console.log("Server Is Running");
});
