import { useState } from 'react';
import { IconCaretBackOutline, IconCaretForwardOutline } from '../common/Icons';

import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(true);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const dotBtnHandler = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='slider'>
      <div onClick={goToPrevious} className='left-arrow'>
        <IconCaretBackOutline />
      </div>
      <div onClick={goToNext} className='right-arrow'>
        <IconCaretForwardOutline />
      </div>
      <div
        className='slide-wrapper'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            className='slide'
            src={image}
            onClick={() => setFullScreen((prev) => !prev)}
          />
        ))}
      </div>
      <div className='circle-btn-wrapper'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`circle-btn ${index === currentIndex && 'active'}`}
            onClick={() => dotBtnHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
