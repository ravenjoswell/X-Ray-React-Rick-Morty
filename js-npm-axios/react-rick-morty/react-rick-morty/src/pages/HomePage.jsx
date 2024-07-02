import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';





function HomePage(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };

    return (
        
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
            className="homepageslideone"
            src=""
            alt="first slide"
        
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="homepageslidetwo"
            src=""
            alt="second slide"
        
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}


export default HomePage