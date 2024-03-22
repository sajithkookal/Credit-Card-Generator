import React from "react";
import './Cards.css';

const Cards = (props) => {
  const { name, number, expMonth, expYear, cvc } = props;

  return (
    <div className='container'>
      <div className='cardContainer'>
        <div className='innerCardContainer'>

          {/* Credit Card - Front */}
          <div className='cardFront'>
            <div className='frontCardContainer'>
              <div className='upperLine'>
                <span className='dot' />
                <span className='circleOutline' />
              </div>
              <div>
                <div className='cardNumber'>
                  {number ? number : '0000 0000 0000 0000'}
                </div>
                <div className='lowerLine'>
                  <p>{name ? name.toUpperCase() : 'JANE APPLESEED'}</p>
                  <p>{`${expMonth ? expMonth : '00'}/${expYear ? expYear : '00'
                    }`}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Credit Card - Back */}
          <div className='cardBack'>
            <div id="black">

            </div>
            <div className='backCardContainer'>
              <p>{cvc ? cvc : '000'}</p>
            </div>
            <div>
            <div className="rectangles">
              <div id="r1"></div>
              <div id="r2"></div>
              <div id="r3"></div>
            
            </div>
            <div className="rectangles">
              <div id="r11"></div>
              <div id="r12"></div>
              <div id="r13"></div>
              <div id="r14"></div>
      
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cards;