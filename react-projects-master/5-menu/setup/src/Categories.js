import React from 'react';

/*index = [0,1,2,3];
categories = ["All", "Breakfast", "Lunch", " Shakes"];
categoryResult = []*/

const Categories = ({categories, filterItems}) => {

  // category represent each item of allCategories array après réduction des item pour éviter la répétition  
  return <div className="btn-container">
    {categories.map((category, index) => {
      return <button
      type="button"
      className="filter-btn"
      key={index}
      onClick={() => filterItems(category)}

      >
        {category}
      </button>
    })}
  </div>
};

/* older solution 
<button className="filter-btn" onClick={()=> filterItems('all')}>all</button>
    <button className="filter-btn" onClick={()=> filterItems('breakfast')}>breakfast</button>
    */
export default Categories;