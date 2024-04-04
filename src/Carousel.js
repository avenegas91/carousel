import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  const leftIconHidden = currCardIdx === 0 ? "hidden" : "";
  const rightIconHidden = currCardIdx === total - 1 ? "hidden" : "";

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  };

  //Added a goBackwards function to fix left arrow
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }


  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward} //Changed from goForward to goBackward
          data-testid="left-arrow"
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

export default Carousel;
