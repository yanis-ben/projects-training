import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// synch avec la data pour éviter de créer les boutton à la main et les mettres en dur..
const allCategories = ["all", ...new Set(items.map((item)=> item.category))]; // permet de récupérer toute les gategory disponible dans items
console.log(allCategories);
function App() {
  
  const [menuItems, setMenuItem] = useState(items)
  const [categories, setCategories] = useState(allCategories)


  //on filtre la liste des items, 
  const filterItems = (category) => {

    if(category === "all"){
      setMenuItem(items);
      return;
    }

   // filtrer la liste des items sur le input category"string"
   const newItems = items.filter((item) => item.category === category);
   // setMenuItems permet de mettre à jour la liste des items après l'avoir filtrer pour les récupérer par category
   setMenuItem(newItems);

  }

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2 >Our menu</h2>
          
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu item={menuItems}/>
      </section>
    </main>
  )
}
export default App;



