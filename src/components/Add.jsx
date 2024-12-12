import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';


function Add({setaddVideoResponse}) {
  //add video details creating state to hold 
  const [videoDetails,setvideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
  // console.log(videoDetails);
  const[isInvalidUrl,setisInvalidUrl]=useState(false)
  


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    const getEmbedUrl=(url)=>{
      if(url.includes('v='))
      {
          const videoId=url.split('v=')[1].slice(0,11)
          console.log(videoId);

          setvideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
          setisInvalidUrl(false)
      }
      else
      {
        setisInvalidUrl(true)
        setvideoDetails({...videoDetails,youtubeUrl:""})
      }
    }

    const uploadData=async()=>
    {
      const {caption,imageUrl,youtubeUrl}=videoDetails
      if (caption && imageUrl && youtubeUrl)
      {
        try
        {
          const result= await addVideoAPI(videoDetails)
          
          if(result.status>=200 && result.status<300)
          {
            setaddVideoResponse(result.data)
            handleClose()
            toast.success(`${result.data.caption} Successfully Added To The Collection`)
          }
          
        }
        catch (err)
        {
          console.log(err);
          
        }
        
      }
      else
      {
          toast.warning("Please Enter The Fields Completely")
      }
    }





  return (

    
    <>
        <div className='d-flex align-items-center'>
        <h3 className='text-warning fw-bold fs-4'>Upload New Video <button onClick={handleShow} className='btn btn-warning rounded-circle fs-5 '>+</button></h3>

        </div> 
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please Enter The Details...</p>
         <div className='border border-info p-3 rounded'>

            
         <FloatingLabel  controlId="caption" label="Caption" className="mb-3">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Enter Caption Here..." />
        </FloatingLabel>

        <FloatingLabel  controlId="image" label="Image URL"className="mb-3">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Enter Image URL Here..." />
        </FloatingLabel>

        <FloatingLabel controlId="url" label="Youtube URL"className="mb-3">
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="Enter Youtube URL Here..." />
        </FloatingLabel>
        { isInvalidUrl &&
          <div className='text-danger mb-5'>
          Invalid URL
        </div>
        }

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={uploadData} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>   
    </>
  )
}

export default Add