
import { useState } from 'react';
import './App.css';
import Cards from './Cards';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [holderName, setHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvc, setCVC] = useState('')
  const [cardNumberValue, setCardNumberValue] = useState('')
  const [error, setError] = useState(false);
 

  function monthTextChange(e) {
    let month = e.target.value;
    let firstDigit = month.charAt(0);
    
    if (month.length > 2) {
      if (firstDigit != 0) {
        return;
      } else {
        setExpMonth(month.substring(1));
        return;
      }

    }
    if (month.length === 1) {
      month = `0${month}`;
      setExpMonth(month);
      return;
    }
    setExpMonth(month);

  }

  var yearTextChange = (e) => {
    let year = e.target.value;
    let firstDigit = year.charAt(0);
    if (year.length > 2) {
      if (firstDigit != 0) {
        return;
      } else {
        setExpYear(year.substring(1));
        return;
      }
    }
    if (year.length === 1) {
      year = `0${year}`;
      setExpYear(year);
      return;
    }
    setExpYear(year);

  }

  var onChangeCardNumber = (e) => {
    let cNumber = e.target.value;
    if (cNumber.length > 16) {
      return;
    }
    setCardNumberValue(cNumber);
    cNumber = cNumber.replace(/(\d{4})/g, '$1 ');
    setCardNumber(cNumber);
  }


  var cvcTextChange = (e) => {
    let cvc = e.target.value;
    if (cvc.length > 3) {
      return;
    }
    setCVC(cvc);
  }

  function handleClick() {

    setError(true);
    console.log("truesss")
    console.log(holderName.length)
    console.log(cardNumber.length)
    console.log(expMonth.length)
    console.log(expYear.length)
    console.log(cvc.length)
    if(holderName.length !== 0 && !cardNumber.length < 16 &&
       expMonth.length === 2 && expYear.length === 2 && cvc.length === 3){
        console.log("true")
        toast("Details added successfully");
    }
  }
  return (
    <div id="mainDiv">

      <div className="AppLeft">
        <div id='cardDiv'>
          <Cards
            name={holderName}
            number={cardNumber}
            expMonth={expMonth}
            expYear={expYear}
            cvc={cvc} />
        </div>
        <svg id='svgMain' xmlns="http://www.w3.org/2000/svg" >
          <path d="M0 0H400V903H0V0Z" fill="url(#paint0_linear_2_50)" />
          <path d="M0 0H400V903H0V0Z" fill="url(#paint1_radial_2_50)" fillOpacity="0.2" />
          <defs>
            <linearGradient id="paint0_linear_2_50" x1="-35.5" y1="-149" x2="635.495" y2="1449.56" gradientUnits="userSpaceOnUse">
              <stop offset="0.171237" stopColor="#3B0E46" stopOpacity="0.98" />
              <stop offset="0.233073" stopColor="#380C4A" />
              <stop offset="0.25376" stopColor="#3B0E46" />
              <stop offset="0.277227" stopColor="#3D0F42" />
              <stop offset="0.315832" stopColor="#441436" />
              <stop offset="0.350216" stopColor="#33254E" />
              <stop offset="0.386028" stopColor="#2B2D59" />
              <stop offset="0.415202" stopColor="#292654" />
              <stop offset="0.442183" stopColor="#271F4F" />
              <stop offset="0.508969" stopColor="#240D37" />
              <stop offset="0.589617" stopColor="#22052D" />
              <stop offset="0.801339" stopColor="#22052D" />
              <stop offset="0.968006" stopColor="#22052D" />
              <stop offset="0.968106" stopColor="#22052D" />
            </linearGradient>
            <radialGradient id="paint1_radial_2_50" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210.559 221.006) rotate(-37.852) scale(136.086 77.7416)">
              <stop stopColor="#4E1A45" />
              <stop offset="0.142857" stopColor="#45142B" />
              <stop offset="0.285714" stopColor="#45142B" />
              <stop offset="0.428571" stopColor="#3D0E12" />
              <stop offset="0.571429" stopColor="#3D0D0F" />
              <stop offset="0.714286" stopColor="#3D0D0F" />
              <stop offset="0.857143" stopColor="#3D0D0F" />
              <stop offset="1" stopColor="#3C0D0D" />
            </radialGradient>
          </defs>
        </svg>

      </div>
      <div className="AppRight">
        <div id='inputDiv'>
          <label>CARDHOLDER NAME</label>
          <input placeholder='e.g. Jane Appleseed' onChange={e => setHolderName(e.target.value)}></input>
          {error && holderName.length == 0 ? <label className='errorLabel'>Name required</label> : ""}


          <label>CARD NUMBER</label>
          <input type="number" value={cardNumberValue} placeholder='e.g. 1234 5678 9123 0000' onChange={onChangeCardNumber}></input>
          {error && cardNumber.length < 16 ? <label className='errorLabel'>Card number required(16 digit)</label> : ""}
          <div className='horizDiv'>
            <div id='exDate' >

              <div className='bottomInput'>
                <label>EXP. DATE(MM/YY)</label>
              </div>

              <div className='horizDiv'>
                <input id='month' className='bottom' value={expMonth} type="number" placeholder='MM' onChange={monthTextChange}></input>

                <input id='year' className='bottom' value={expYear} type="number" placeholder='YY' onChange={yearTextChange}></input>
              </div>

            </div>
            <div id='cvcDiv' className='bottomInput'>
              <label>CVC</label>
              <input type="number" value={cvc} placeholder='e.g. 123' onChange={cvcTextChange}></input>
            </div>

          </div>
          {error && expMonth.length == 0 ? <label className='errorLabel'>Month required</label> : ""}
          {error && expMonth.length > 2 ? <label className='errorLabel'>Month not in correct format</label> : ""}
          {error && expYear.length == 0 ? <label className='errorLabel'>Year required</label> : ""}
          {error && expYear.length > 2 ? <label className='errorLabel'>Year not in correct format</label> : ""}
          {error && cvc.length == 0 ? <label className='errorLabel'>CVC required</label> : ""}
          {error && cvc.length != 3 ? <label className='errorLabel'>CVC not in correct format</label> : ""}
          <button id='submitBtn' onClick={handleClick}>Confirm</button>
        </div>

      </div>
      <ToastContainer />
    </div>

  );
}

export default App;
