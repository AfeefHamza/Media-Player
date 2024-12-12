import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getSingleCategoryAPI, getVideoAPI, updateCategoryAPI } from '../Services/allAPI'



function View({addVideoResponse,deleteVideoResponseFromCat,setupdateCatFromView}) {
  
  const [allVideos,setallVideos]=useState([])
  const [deleteVideoResponse,setdeleteVideoResponse]=useState("")
  console.log(allVideos);
  
  useEffect(() => {
   getAllVideos()
  }, [addVideoResponse,deleteVideoResponse,deleteVideoResponseFromCat])
  
  const getAllVideos=async ()=>
  {
    try
    {
      const result=await getVideoAPI()
      
      if(result.status>=200 && result.status<300)
      {
        setallVideos(result.data)
      }
    }
    catch (err)
    {
      console.log(err);
    }
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
  }
  const dropCategoryvideo=async (e)=>
  {
    const {videoDetails,categoryId} = JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(`Video Details : ${videoDetails}, Category id: ${categoryId}`);

    try
    {
      const {data} = await getSingleCategoryAPI(categoryId)
      console.log(data);

      const updatedCategoryAllVideos=data.allVideos.filter(item=>item.id!=videoDetails.id)
      console.log(updatedCategoryAllVideos);


      const {id,categoryName}=data

      const response= await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryAllVideos})
      console.log(response);
      setupdateCatFromView(response)
      const result = await addVideoAPI(videoDetails)
      console.log(result);

      getAllVideos()
      
      

      
      
    }
    catch (err)
    {
      console.log(err);
      
    }
    
  }
  return (
    <>
      <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryvideo(e)} className='p-5 gap-3'>
       {
        allVideos?.length > 0 ?

        allVideos?.map(video=>(
          <Col  lg={4} sm={6} xs={12} key={video.id} >
          <VideoCard videoDetails={video}
          setdeleteVideoResponse={setdeleteVideoResponse}
          deleteVideoResponseFromCat={deleteVideoResponseFromCat}
          />
          </Col>
        ))
        :
        <div className='text-danger text-center'> 
        Nothing To Display
        </div>
       }
      </Row>
    </>
  )
}

export default View