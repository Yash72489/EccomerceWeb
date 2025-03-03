import React from 'react'

 export const Step = () => {
    const BoxSteps = [
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/ciseco_HIW1img.png?v=1714173835&width=200&height=200&crop=center",
        span: "Step 1",
        title: "Filter & Discover",
        para: "Smart Filtering and suggestions",
        textcenter: "Make it easy to find",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/ciseco_HIW2img.png?v=1714173835&width=200&height=200&crop=center",
        span: "Step 2",
        title: "Add to Bag",
        para: "Easily select the correct items and",
        textcenter: "add them to the cart",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/ciseco_HIW3img.png?v=1714173835&width=200&height=200&crop=center",
        span: "Step 3",
        title: "Fast shipping",
        para: "The carrier will confirm and ship ",
        textcenter: "quickly to you.",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/ciseco_HIW4img.png?v=1714173835&width=200&height=200&crop=center",
        span: "Step 4",
        title: "Enjoy the product",
        para: "Having fun Enjoy your 5-star ",
        textcenter: "quickly product.",
      },
    ];
  return (
    <>
      <div className="Steps-container">
        <div className="h-line"></div>
        <div className="box-container-steps">
          {BoxSteps.map((Steps, index) => (
            <div className="box-Card" key={index}>
              <div className="img-box">
                <img src={Steps.src} alt="img-step" />
              </div>
              <div>
                {" "}
                <span>{Steps.span}</span>
              </div>
              <h2>{Steps.title}</h2>
              <div className="text-box">
                <p>{Steps.para}</p>
                <p className="text">{Steps.textcenter}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="h-line"></div>
      </div>
      =
    </>
  );
}

