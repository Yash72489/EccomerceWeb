import React from 'react'

 export const Offers = () => { 
    const Offer = [
      {
        title: "Collection",
        para: "Give the Gift of Choice",
        btn: "See Collection",
        src: "./src/assets/jpg/—Pngtree—vector free buckle cartoon basketball_4582800.png",
      },
      {
        title: "Collection",
        para: "Give the Gift of Choice",
        btn: "See Collection",
        src: "./src/assets/jpg/pngwing.com (5).png",
      },
      {
        title: "Collection",
        para: "The latest from top brands",
        btn: "See Collection",
        src: "./src/assets/jpg/pngwing.com (6).png",
      },
    ];
  return (
    <>
      <div className="Offer-Section">
        <div className="title-discover">
          <h1>
            Discover more. <span> Good things are waiting for you!</span>
          </h1>
        </div>
        <div className="cards-offers">
          {Offer.map((cardoff, index) => (
            <div className="card-structure" key={index}>
              <div className="card-filled">
                <span>
                  <p>{cardoff.title}</p>
                  <h1>{cardoff.para}</h1>
                </span>
                <div className="btn-offer">
                  <button>{cardoff.btn}</button>
                </div>
              </div>
              <div className="card-img">
                <img src={cardoff.src} alt="img-offers" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

