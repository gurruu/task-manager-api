const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter)

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task=require('./models/task')

const main= async()=>{
  const task = Task.findById("621e1932eb31a6af552bd3c2");
  const user=await task.populate('owner')
    console.log(user.owner)
  
}

// main()

