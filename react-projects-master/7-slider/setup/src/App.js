import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0 ){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0);
    }
    
  }, [index, people])
  
  // changement automatique toute les 3s
  /*
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    },3000);
    // clean up
    return () => clearInterval(slider);
  }, [index]);
  
  
  */


  const {id, image, name, title, quote} = people[index];
  return (
    <section className="section">

    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>

    <div className="section-center">

        <div className="btn-container">


              {people.map((person, personIndex) => {

                return (
                  <button  
                      key={person.id}
                      onClick={()=>setIndex(personIndex)} 
                      >
                        {name}
                  </button>)
                })}
        </div>

          <article className= "activeSlide" key={id}>
            {people.map((person, index) =>{
                return(
                  <div>

                    <img src={person.image} alt={person.name} className="person-img" />
                    <h4>{name}</h4>
                    <p className="title">{person.title}</p>
                    <p className="text">{person.quote}</p>
                  </div>
                )
              
            })}
          </article>
     
      
    </div>
  </section>
    );
}

export default App;
