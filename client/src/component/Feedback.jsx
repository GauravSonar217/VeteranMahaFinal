import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../media/jpg/pic1.jpg";
import pic2 from "../media/jpg/pic2.jpg";
import pic3 from "../media/jpg/pic3.jpg";
import pic4 from "../media/jpg/pic4.jpg";
import quote from "../media/svg/quote.svg";
import quoteright from "../media/svg/btmquto.svg";

function Feedback() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
      <Carousel.Item className="slide">
        <div className="employeeImg">
          <img src={pic1} alt="Card Image" />
        </div>
        <h3>Ayo Ogunseinde</h3>
        <h5>Fashion Model</h5>
        <p>
          <img src={quote} alt="" /> We had a great time collaboraring with the
          Filament team. They have my high recommendation!{" "}
          <img src={quoteright} alt="" />
        </p>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <div className="employeeImg">
          <img src={pic2} alt="Card Image" />
        </div>
        <h3>Aiony Haust</h3>
        <h5>Product Manager</h5>
        <p>
          <img src={quote} alt="" /> The team drastically improved our product's
          user experience & increased our business outreach.
          <img src={quoteright} alt="" />
        </p>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <div className="employeeImg">
          <img src={pic3} alt="Card Image" />
        </div>
        <h3>Ian Dooley</h3>
        <h5>Online Teacher</h5>
        <p>
          <img src={quote} alt="" /> I absolutely loved working with the
          Filament team. Complete experts at what they do!
          <img src={quoteright} alt="" />
        </p>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <div className="employeeImg">
          <img src={pic4} alt="Card Image" />
        </div>
        <h3>Rafaella Mendes</h3>
        <h5>Sale Manager</h5>
        <p>
          <img src={quote} alt="" /> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Possimus, numquam facere quod blanditiis pariatur
          minima. Mollitia soluta quas
          <img src={quoteright} alt="" />
        </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default Feedback;
