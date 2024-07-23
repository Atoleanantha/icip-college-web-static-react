import Carousel from 'react-bootstrap/Carousel';
import Iciplogo from '../../images/carousel_img/icip logo.jpg';
import clg from '../../images/carousel_img/Amrt.jpg';

function CustomCarousel() {
  return (
    <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Iciplogo}
          alt="ICIP"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Iciplogo}
          alt="COLLEGE"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Iciplogo}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
