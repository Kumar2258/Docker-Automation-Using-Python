import React ,{ useState,useEffect }from 'react'

import Navbar from '../Navbar'
function Start() {


  const [data,setData]=useState([{}])
  const [showPopup, setShowPopup] = useState(false);
  const [processedData, setProcessedData] = useState('');
  
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



  return (
    <div className='p-4'>
        
        {/* Start */}
        <Navbar/>

        <div className="mt-44 max-w-md mx-auto p-4 flex flex-col items-center">
            <input
            className="border border-gray-300 focus:border-blue-500 rounded-3xl px-5 py-5 w-full mb-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-2xl"
            type="text"
            onChange={handlevalue}
            placeholder="Enter Image Name"
            
            />
            <button onClick={handleClick}  className="justify-center bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500   hover:to-purple-400 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-xl">
            Pull Image
            </button>
      
      </div>
    </div>
  )
}

export default Start