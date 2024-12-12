import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI, saveWatchHistory } from '../Services/allAPI';


function VideoCard({videoDetails,setdeleteVideoResponse,insideCategory}) {
  // console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>
    { 
      const {caption,youtubeUrl}=videoDetails

      const localTime=new Date()
      console.log(localTime);
      const formattedDate=localTime.toLocaleString()
      console.log(formattedDate);
      
    
      const historyData={caption,youtubeUrl,formattedDate}
      
      try
      {
        await saveWatchHistory(historyData)
      }
      catch (err)
      {
        console.log(err);

      }      

      

      
      
      setShow(true);

    }

  const deleteVideo=async(videoId)=>{
    try
    {
      const result = await deleteVideoAPI(videoId)
      setdeleteVideoResponse(result.data)

    }
    catch (err)
    {
      console.log(err);
      
    }
  }
  const dragVideostarted=(e,videoId)=>
  {
    console.log(`On drag started with video id: ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)


      
  }
  return (
    <>
<Card style={{ width: '12rem' }} draggable={true} onDragStart={(e)=>dragVideostarted(e,videoDetails?.id)} >
      <Card.Img onClick={handleShow} style={{height:"178px"}} variant="top" src={videoDetails?.imageUrl} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content '>
            <h5>{videoDetails?.caption}</h5>
            { !insideCategory &&
              <button onClick={()=>deleteVideo(videoDetails?.id)} className='ms-2'><i style={{color:"red"}} className="fa-solid fa-trash"></i></button>
            }
        </Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}  size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="770" height="377" src={`${videoDetails?.youtubeUrl}`} title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard