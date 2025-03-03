import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



export const Carausel = () => {

  const navigate = useNavigate();

  const handleExplore = (e) => {
    e.preventDefault()
    navigate("/item")
  };
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="carousel-box">
              <p>In this Season , Find the Best</p>
              <h1>Exclusive Collection for everyone</h1>
              <div className="btn">
                <button onClick={handleExplore}>
                  Explore Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <img
              src="./src/assets/png/funky-cool-asian-senior-woman-fashionable-clothes-dancing-while-going-shopping-sales-holdi.jpg"
              alt="img-1"
              width="100%"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-box">
              <p>In this Season , Find the Best</p>
              <h1>Exclusive Collection for everyone</h1>
              <div className="btn">
                <button onClick={handleExplore}>
                  Explore Now <FaArrowRightLong />
                </button>
              </div>
            </div>

            <img
              src="./src/assets/png/surprised-man-showing-mobile-screen-shopping-bag-standing-against-yellow-background.jpg"
              alt="shp-3"
              width="100%"
              height="100%"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div className="carousel-box">
              <p>In this Season , Find the Best</p>
              <h1>Exclusive Collection for everyone</h1>
              <div className="btn">
                <button onClick={handleExplore}>
                  Explore Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <img
              src="./src/assets/png/young-dreamy-woman-thinking-buying-new-things-holding-shopping-bags-smiling-standing-against.jpg"
              alt="image-4"
              width="100%"
            />
            <div className="carousel-caption"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
