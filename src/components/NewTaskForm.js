import React from "react";

function NewTaskForm({CATEGORIES, details, formOptions, handleDetailsChange, handleFormOptions, onTaskFormSubmit}) {
 
  const optionsWIthoutAll = CATEGORIES.filter((category)=> category !== "All" )
  const displayedOptions = optionsWIthoutAll.map((option)=> {
   return <option key={option}>{option}</option>
  })

  

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={details} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormOptions} value={formOptions}>
          {displayedOptions/* render <option> elements for each category here */}
        </select>
      </label>
      <input onClick={(event)=>onTaskFormSubmit(event, {details, formOptions})} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
