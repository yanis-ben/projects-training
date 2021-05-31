import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [paragraphes,setParagraphes] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault(); // c'est pour les formulaire, 
    let amount = parseInt(count);

    if(count <= 0){
      amount = 1;
    }
    if(count > 8 ){
      amount = 8
    }

    setParagraphes(data.slice(0,amount));
  }

  return (
  <section className="section-center">

    <h3 className="titre">lorem ipsum project setup</h3>

    <form className="lorem-form" onClick={handleSubmit}>
      <label htmlFor="amount">paragraphs: </label>
      <input type="number" name="amount" 
      value={count}
      onChange={(e) => setCount(e.target.value)} 
      />
      <button type="submit" className="btn">generate</button>
    </form>

    <article className="lorem-text">
      {paragraphes.map((item,index) => {
        return <p key={index}>{item}</p>
      })}
    </article>

  </section>
    )
}

export default App;
