import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  // const image = [
  //   "https://travelpassionate.com/wp-content/uploads/2018/05/The-Eiffel-Tower-and-vintage-carousel-on-a-winter-evening-in-Paris-France.-min.jpg",
  //   "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/003/410/slideshow/986f00e4bd879ccbbaad6c8e9af33479/ireland-tour-half-penny-bridge-dublin-2014.jpg",
  //   "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/018/827/slideshow/b59b569d5bcc98065a569582e06c9489/munich-salzburg-vienna-tour-germany-munich-marienplatz.jpg",
  //   "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/003/527/slideshow/cc9eb1c71019a95f57017dc03a94bfb7/rome-tour-fountain-pantheon.jpg",
  //   "https://annaeverywhere.com/wp-content/uploads/2021/10/where-to-stay-in-Warsaw-1.jpg",
  // ];

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">₹{price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? `show less` : `read more`}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not Interested!
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
