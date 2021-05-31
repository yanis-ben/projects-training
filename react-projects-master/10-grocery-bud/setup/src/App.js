import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {

  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false); // permet de retourner dans l'input pour modifier le name
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false, 
    msg: "", 
    type:""
  });

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!name){
      //display alert
      showAlert(true, "please enter value", "danger");
      //setAlert({show: true, msg: "please enter value", type:"danger"})
    }
    else if (name && isEditing){
      //deal with edit
      setList(
        list.map((item) => {
        if(item.id === editId){
          return {...item, title: name}
        }
        return item
      })
      );
      setName("");
      showAlert(true, "item was changed", "success");
      setEditId(null);
      setIsEditing(false);
    }
    else{
      //show alert
      showAlert(true, "item added to the list", "success");

      const newItem = {id: new Date().getTime().toString(),
      title: name};
      setList([...list,newItem]); // ...list permet de rajouter newItem dans la list des items
      setName(""); // clear le input après le submit
    }
  }

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({show, msg, type});
  }

  const clearList = () => {
    showAlert(true, "the list is cleared", "danger");
    setList([]); // vider la list
  }

  const removeItem = (id) => {
    showAlert(true, "the item is deleted cleared", "danger");
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
   
  }, [list])

  return ( 
    <section className="section-center">

      <form className="grocery-form" onSubmit={handleSubmit}>

        {alert.show && <Alert {...alert} removeAlert={showAlert}/>} {/*... a permi de récupérer la valeur de alert show: true, msg: "hello", type:"" */}

        <h3>Grocery Bud</h3>

        <div className="form-control">
            <input 
              input="text" 
              className="grocery" 
              placeholder="e.g.eggs" 
              value={name} 
              onChange={(e) => setName(e.target.value)}/>
            <button type="submit" className="submit-btn">{isEditing ? "edit" : "submit"}</button>
        </div>
      </form> 

      {List.length > 0 && (
        <div className="grocery-container">
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
      )}
      
    </section>
    )
}

export default App
