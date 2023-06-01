import React from "react";

function CategoryFilter({CATEGORIES, setCategory, categoryState}) {

  function handleClick(category){
      setCategory(category.category)
}

  const displayedCategories = CATEGORIES.map((category)=> {
    const classNa = category === categoryState ? "selected" : null;
     return (<button onClick={()=>handleClick({category})} className={classNa} key={category}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayedCategories/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
