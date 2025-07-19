import {useState} from 'react'
import {FaStar} from "react-icons/fa"
import "./style.css"

function Index({noOfStarts = 5}) {

  const [rating , setRating] = useState(0);
  const [hover , setHover] = useState(0);

  function handleClick(currIdx) {
    setRating(currIdx);
  }

  function handleMouseMove(currIdx) {
    setHover(currIdx);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className='star-rating'>
      {[...Array(noOfStarts)].map((_ , i) => {
        i += 1;

        return (
          <FaStar
          key = {i}
          className={i <= (hover || rating) ? "active" : "inactive"}
          onClick={() => handleClick(i)}
          onMouseMove={() => handleMouseMove(i)}
          onMouseLeave={() => handleMouseLeave()}
          size={50}
          />
        )
      })}
    </div>
  )
}

export default Index
