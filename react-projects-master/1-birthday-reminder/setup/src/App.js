import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,setPeople] = useState([]);
  return <main>
    <section className="container">
    <h3>{people.length} Birthday today</h3>
    <List people={people}/>
    <button onClick={() => setPeople(data)}>clear all</button>
    </section>
    
  </main>
  
}

export default App;
