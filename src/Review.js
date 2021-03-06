import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]
  
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    })
  }
  
  
  return (
    <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn">
        <FaChevronLeft onClick={prevPerson}/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight />
      </button>
      <button className="random-btn">
        surprise me and teach me to code
      </button>
    </div>
    </article>
  )
};

export default Review;
