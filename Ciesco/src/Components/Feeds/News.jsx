import React from 'react'
import { Link } from 'react-router-dom';

 export const News = () => {
    const NewsCard = [
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/articles/ciseco_news_7_7351d4ac-46a7-4c4f-9cf2-838fe93099af.webp?v=1714807908&width=1600&height=1392&crop=center",
        date: " Sun Mar 31 2024",
        spring: "Life Style",
        title: "5 new year’s resolutions for 2024 Crucial Event",
        desc: "In the morning, consistency is key. To keep your internal clock balanced and your circadian rhythm stabilized, try waking up at the same time every day.",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/articles/ciseco_news_4.webp?v=1714179356&width=2000&height=1327&crop=center",
        date: " Sun Mar 31 2024",
        spring: "Simple",
        title: "Certified cruelty-free: we've joined Leaping Bunny",
        desc: "Since day one, our mission has been to create the highest-quality products at approachable prices. We’re excited to announce that we are now Leaping Bunny certified as a cruelty-free brand.",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/articles/pexels-photo-325717.webp?v=1714116666&width=2000&height=1333&crop=center",
        date: " Sun Mar 31 2024",
        spring: "Summer",
        title: "Everything you need to know about Eye Stick 2.0",
        desc: "We like to think of our Eye Stick as our secret weapon. It’s ultra-portable, offers a cooling and refreshing sensation to wake you up during the day",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/articles/pexels-photo-1445416_b89bac16-625c-47bb-af08-c2b0fed508d9.webp?v=1714116669&width=2000&height=1371&crop=center",
        date: " Sun Mar 31 2024",
        spring: "Companies",
        title: "Crafting a design system for a multiplanetary future",
        desc: "Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0874/8928/2359/articles/ciseco_news_8.webp?v=1714807952&width=2000&height=1333&crop=center",
        date: " Thu Apr 18 2024",
        spring: "Animations",
        title: "Introducing Animaginary: High performance web animations",
        desc: "To make this possible, we needed to squeeze every drop of performance out of the browser possible. And so Animaginary was born.",
      },
    ];
  return (
    <>
      <div className="container-news">
        <div className="title-news">
          <h1>NEWS</h1>
          <p>
            <Link to="/" className="link">
              Home
            </Link>{" "}
            /<span className="spann">News</span>
          </p>
        </div>
        <div className="container-cards">
          <div className="card-Newscontent">
            {NewsCard.map((News,index) => (
              <div className="content-cardd"  key={index}>
                <div className="img-content">
                  <img src={News.src} alt="img" />
                </div>
                <div className="date-spring">
                  <span>{News.date}</span> &nbsp;
                  <span className='txt-spring'>{News.spring}</span>
                </div>
                <h2>{News.title}</h2>
                <p>{News.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

