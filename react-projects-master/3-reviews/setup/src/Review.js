import React, { useState, useEffect } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(1);
  const {id, name, job, image, text} = people[index];

  const checkIndex = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0){
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex =  index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex)
    });
  };

  // changement automatique tout les 3s
  /*useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    },1000);
    // clean up
    return () => clearInterval(slider);
  }, [index]);*/
  return (
  <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className='quote-icon'>
          <FaQuoteRight />
          </span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='button-container'>
          <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
          </button>
        </div>

      <button className="random-btn">
        suprise me
      </button>
  </article>)

}

export default Review;
