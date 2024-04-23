import React ,{ useState,useEffect } from 'react'
import Navbar from '../Navbar'
import MUIDataTable from "mui-datatables";
import { Button } from '@mui/material';



function Running() {
  const [images, setImages] = useState([]);
  console.log("images->",images);
  console.log("setImages->",setImages);
  const [counter, setCounter] = useState(0);
  const handleStopAction = (rowIndex) => {
    // Perform action on row click
    setCounter(counter => counter + 1);
    console.log('Button clicked!');
    console.log('Submitted value:', String(images[rowIndex][0]));
    let data = String(images[rowIndex][0]);
    
    
    // console.log(typeof dataa)
    fetch('http://127.0.0.1:5000/runstop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data:data})
      });
    // You can implement your custom action logic here
  };




    useEffect(() => {
        fetch('http://127.0.0.1:5000/containers')  // Assuming your Flask app serves the data at this endpoint
            .then(response => response.json())
            .then(data => {
                setImages(data);
            })
            .catch(error => {
                console.error('Error fetching Docker images:', error);
            });
    },[counter]);
    const columns = [
      {
        name: 'Container Name',
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: 'Container Id ',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'State ',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'Action', // Custom column for action button
        options: {
          filter: false,
          sort: false,
          empty: true, // This ensures the action button can be placed in empty cells
          customBodyRenderLite: (dataIndex, rowIndex) => {
            return (
                <Button variant="contained" color="secondary" onClick={() => handleStopAction(rowIndex)}>Stop</Button>
                
            );
          },
        },
      },
    ];

    
  // const [images, setImages] = useState([]);
  const options = {
    filterType: 'checkbox',
  };


  return (
    <div className='className=p-36 h-full flex-col items-center '>
        <Navbar/>
        <h1>This is Running page </h1>
        <div className=' p-36 flex-col items-center '>
           <h1>{images}</h1>
          
          <MUIDataTable
            title={"Running Containers"}
            data={images}
            columns={columns}
            options={options}
          />
        
        </div>
    </div>
  )
}

export default Running