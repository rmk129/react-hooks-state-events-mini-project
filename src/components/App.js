import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS)
const [category, setCategory] = useState("All")

function removeTasks(input){
  setTasks(tasks.filter((task)=> task.text !== input))
 }
 
 
 const filteredTasks = tasks.filter((task)=> {
     return task.category === category || category === "All" 
 })


const [details, setDetails] = useState("")
const [formOptions, setFormOptions] = useState("Code")

function handleDetailsChange(event){
  setDetails(event.target.value)
}

function handleFormOptions(event){
  setFormOptions(event.target.value)
}

function onTaskFormSubmit(event, taskObject){
  event.preventDefault();
      
      setTasks([...tasks, {text:taskObject.details, category:taskObject.formOptions }])
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryState={category} setCategory={setCategory} CATEGORIES={CATEGORIES} />
      <NewTaskForm details={details} formOptions={formOptions} CATEGORIES={CATEGORIES}
      handleDetailsChange={handleDetailsChange} handleFormOptions={handleFormOptions}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList filteredTasks={filteredTasks} removeTasks={removeTasks} />
    </div>
  );
}

export default App;
