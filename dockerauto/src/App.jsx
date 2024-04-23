import React ,{ useState,useEffect } from 'react' ;
// import React from 'react'
import { Link } from "react-router-dom"
import Navbar from './Navbar';
import axios from 'axios';
import Live from './Live';
// import getstart from './getstart';
// import Getstart from './routers/Getstart';
import {TypeAnimation} from 'react-type-animation'
// import Navbar from './Navbar'
// import Dashboard from './Dashboard',

function App() {
  const [data,setData]=useState([{}])
  const [showPopup, setShowPopup] = useState(false);
  const [processedData, setProcessedData] = useState('');
  
  




  // const fetchAPI=async () =>{

  //   const response =await axios.get("http://127.0.0.1:5000/running");
  //   console.log(response.data.Id);
  //   console.log(response.data.name);

  // };
  // useEffect(()=>{
  //   fetchAPI();
  // },[]);


  const [inputValue, setInputValue] = useState('');  
  const handleClick = () => {
      console.log('Button clicked!');
      console.log('Submitted value:', inputValue);
      
      fetch('http://127.0.0.1:5000/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: inputValue })
      });
      



      // Add your logic here
    };
  const handlevalue =(p) => {
      //console.log(p.target.value)
      setInputValue(p.target.value);

  }




   // Poll every 5 seconds
    
  





  return (
    <div className='p-1 h-screen ' style={{backgroundImage: "url('/background.jpg')"}}>
      {/* <h1>hellow this is home </h1> */}
      
      
      <div className='flex justify-between items-center h-24  mx-auto px-5 text-white'>
        <img src="src\assets\dockerimg.png" class="h-8 mr-2" alt="Image" />
        <h1 className=' w-full  text-3xl font-bold text-green-600 '  >Docker Automation</h1>
        <Navbar/>
        {/* <ul className='flex text-gray-700 '>
          <li className='p-4'>dashboard</li>
          <li className='p-4'>PulledImage</li>
          <li className='p-4'>RunningImage</li>

        </ul> */}
        
        
      </div>
      <div className='mt-40 max-w-7xl mx-auto  place-content-end flex  font-bold text-5xl' >
          <span className='text-green-600'>Seamless Docker_ </span>
          <TypeAnimation className='text-purple-800'
            sequence={[
              // Same substring at the start will only be typed once, initially
              ' Automated!',
              1000,
              ' Streamlined!',
              1000,
              ' Effortless!',
              1000,
              
            ]}
          speed={50}
          wrapper='span'
            // style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
        
      </div >
      <div className="mt-5 max-w-7xl mx-auto  place-content-end flex ">
        <Link to='/Start'>
          <button  onClick={handleClick} className="justify-center bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500   hover:to-purple-400 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-xl">
          Get Started
          </button>
        </Link>
    
      </div>      
      {/* <div className="mt-8 max-w-md mx-auto p-4 flex flex-col items-center">
      <input
        className="border border-gray-300 focus:border-blue-500 rounded-3xl px-5 py-5 w-full mb-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-2xl"
        type="text"
        onChange={handlevalue}
        placeholder="Enter Image Name"
        
      />
      <button  onClick={handleClick} className="justify-center bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500   hover:to-purple-400 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-xl">
        Pull Image
      </button>
      
      <Live/>
      </div>  */}
      
      
      
    </div>
  )
}

export default App