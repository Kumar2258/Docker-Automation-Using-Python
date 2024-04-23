import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar'
// import DataTable from 'react-data-table-component';
import MUIDataTable from "mui-datatables";
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
function pulled() {
  

    useEffect(() => {
        fetch('http://127.0.0.1:5000/pulled')  // Assuming your Flask app serves the data at this endpoint
            .then(response => response.json())
            .then(data => {
                setImages(data);
            })
            .catch(error => {
                console.error('Error fetching Docker images:', error);
            });
    },[] );



  // const columns = ["Image Name", "Image Id", "Created"];
  const columns = [
    {
      name: 'Image Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'Image Id ',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Created ',
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
            <ButtonGroup variant="contained" color="secondary" aria-label="Basic button group">
              <Button onClick={() => handleRunAction(rowIndex)}>Run</Button>
              
              <Button onClick={() => handleRemoveAction(rowIndex)}>Remove</Button>
            </ButtonGroup>
          );
        },
      },
    },
  ];
  

  const handleRunAction = (rowIndex) => {
    // Perform action on row click
    
    console.log('Button clicked!');
    console.log('Submitted value:', String(images[rowIndex][0]));
    let data = String(images[rowIndex][0]);
    
    
    

    // console.log(typeof dataa)
    fetch('http://127.0.0.1:5000/pullrun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data:data})
      });
    // You can implement your custom action logic here
  };
  // const [data, setImages] = useState([]);
  const handleRemoveAction = (rowIndex) => {
    
    // Perform action on row click
    console.log('Clicked row index:', rowIndex);
    // You can implement your custom action logic here
  };
  const [images, setImages] = useState([]);
  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  //  ];
  const options = {
    filterType: 'checkbox',
  };

  return (
    <div className='  p-36 flex-col items-center '>
        <Navbar/>
        {/* <h1>hello</h1> */}
        <div className=' font-bold text-5xl '>
          
          <MUIDataTable
            title={"Pulled Images"}
            data={images}
            columns={columns}
            options={options}
          />
        </div>

        
    </div>
  )
}

export default pulled