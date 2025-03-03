import React from "react";


export const CiescoRefer = () => {
  const Refer = [
    {
      src1: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/logo.svg?v=1714142588&width=148&height=38&crop=center",
      title: "Earn  ",
      title2: "money with Ciseco",
      para: "with Ciseco you will get a freeship & saving combo,etc.",
      btn1: "Discover more",
      btn2: "Savings  Combo",
      src2: "https://cdn.shopify.com/s/files/1/0874/8928/2359/files/ciseco_img_with_text_1.png?v=1714173835&width=1000&height=711&crop=center",
      italic: "free",
    },
  ];
  return (
    <>
      <div className="CiescoRefer-container">
        {Refer.map((refVal, index) => (
          <div className="container-refer" key={index}>
            <div className="content-ref">
              <div className="logo-img">
                <img src={refVal.src1} alt="logo" />
              </div>
              <h2>
                {refVal.title}{" "}
                <span>
                  <i>{refVal.italic}</i>
                </span>{" "}
                {refVal.title2}
              </h2>
              <p>{refVal.para}</p>
              <div className="btn-content">
                <button>{refVal.btn1}</button>
                <button className="combo-btn">{refVal.btn2}</button>
              </div>
            </div>
            <div className="img-ref">
              <img src={refVal.src2} alt=" ref-img" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
