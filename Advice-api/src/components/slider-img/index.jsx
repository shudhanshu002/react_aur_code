import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function Slider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([]);
    const [currentSlide , setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data) {
                setImages(data);
                setLoading(false);
            }
        } catch(e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if(url!="") fetchImages(url);
    },[url])

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide-1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1? 0: currentSlide +1)
    }

    if (loading) {
        return <div>Loading data ! Please wait</div>;
      }
    
      if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
      }

  return (
    <div className='container'>
      <BsArrowLeftCircleFill 
      onClick={handlePrevious}
      className='arrow arrow-left'
      />
      {images && images.length
        ? images.map((imageItem , idx)=> (
            <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={
                currentSlide === idx 
                ? "current-image"
                : "current-image hide-current-image"
            }
            />
        )) : null}

        <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicator">
        {images && images.length? 
        images.map((_, idx) => (
            <button
            key={idx}
            className= {
                currentSlide === idx
                ? "current-indicator"
                : "current-indicator inactive-indicator"
            }
            onClick={() => setCurrentSlide(idx)}
            ></button>
        )) : null}
      </span>
    </div>
  )
}

export default Slider
