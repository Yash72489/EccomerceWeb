import React from 'react'
import { logo } from '../../assets/src/image';

 export const Advetise = () => {
  return (
    <>
      <div className="container-advertise">
        <div className="container-field">
          <div className="color-container">
            <div className="img-content">
              <img src="./src/assets/png/pngwing.com (7).png" alt="img-skate" />
            </div>
            <div className="content-products">
                <img className="ciesco-logo" src={logo} alt="logo" />
              <h2>Special offer in <i>kids</i> products</h2>
              <p>Fashion is a form of self-expression and autonomy at a particular period and place.</p>
              <div className="btn-Discover">
                <button>Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
