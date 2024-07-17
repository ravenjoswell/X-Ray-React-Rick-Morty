import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../App.css"
import "../Buttons.css"





function HomePage(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };

    const navToHuluLatest = () => {
      window.open("https://www.hulu.com/series/d76d6361-3fbf-4842-8dd7-e05520557280", "_blank")
    }


    return (
    
      <div className="home-page-container"> {/* Container for the entire page */}
      <Carousel 
          activeIndex={index} 
          onSelect={handleSelect} 
          className="carousel-fullscreen" // Custom class for full-screen Carousel
      >
          <Carousel.Item>
              <img
                  className="carousel-item-one"
                  src="https://wallpapers.com/images/hd/rick-and-morty-monster-in-portal-xa7xpemdj47yvoqk.webp"
                  alt="First slide"
              />
              <Carousel.Caption>
                  <button className="hulu-button" onClick={navToHuluLatest}>Watch Latest Season Now</button>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="carousel-item-two"
                  src="https://wallpapers.com/images/hd/rick-and-morty-running-away-from-monster-zu00ajsq4eiq48fs.webp"  // Specify the URL for your second slide here
                  alt="Second slide"
              />
              <Carousel.Caption>
                <div className="slide-two-desc">
              <h1 className="show-description">Embark on Mind-Bending Adventures with Rick and Morty</h1>
                <h3 className="show-description">
                    A hilariously dark sci-fi comedy! Join eccentric scientist Rick and his grandson Morty as they traverse dimensions, encountering bizarre creatures and navigating the complexities of family life.
                </h3>
                </div>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    
  </div>
);
}


export default HomePage