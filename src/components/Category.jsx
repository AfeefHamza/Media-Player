import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import { all } from 'axios';
import VideoCard from './VideoCard';







function Category({setDeleteVideoResponseFromCat,updateCatFromView}) {

  const [categoryName,setCategoryName]=useState("")
  console.log(categoryName);

  const [allCategory,setAllCategory]=useState([])
  console.log(allCategory);
  



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategory()
  }, [updateCatFromView])
  


  const addCategory=async()=>{
    try{
          const result= await addCategoryAPI({categoryName,allVideos:[]})
          console.log(result.data);
          getAllCategory()
          handleClose()
          

          
          
    }catch(err){
             console.log(err);
 
     }
   }
   const getAllCategory=async ()=>
   {
    try
     {
      const result = await getCategoryAPI();
      setAllCategory(result.data); 
    } 
    catch (err) 
    {
      console.error(err);
    }

   }
   const deleteCategory=async(categoryId)=>
   {
    try
    {
      const result= await deleteCategoryAPI(categoryId)
      // console.log(result.data);
      
      getAllCategory()
    }
    catch (err)
    {
      console.log(err);
      
    }
   }
   const dropVideo=async(e,categoryId)=>
   {
      const videoId=e.dataTransfer.getData("videoId")
      console.log(`Video Dragged With The Id ${videoId} and dropped in The Category with the id ${categoryId}`);



      try
      {
       const {data}=await getSingleVideoAPI(videoId)
       console.log(data);

       const selectedCategory=allCategory?.find(category=>category.id==categoryId)
       selectedCategory.allVideos.push(data)
       
       console.log(selectedCategory);


       await updateCategoryAPI(categoryId,selectedCategory)
       getAllCategory()

       const response= await deleteVideoAPI(videoId)
       setDeleteVideoResponseFromCat(response)
       
      }
      catch (err)
      {
        console.log(err);
        
      }
      
   }
   const dragOverCategory=(e)=>
   {
      e.preventDefault()
   }
   const videoDragStarted=(e,videoDetails,categoryId)=>
   {
      const shareData={videoDetails,categoryId}
      // console.log(videoDetails,categoryId);

      e.dataTransfer.setData("shareData",JSON.stringify(shareData))
      
   }
  return (
    <>
    <div className="d-flex justify-content-between w-100">
      <h3 className='text-info'>All Category</h3>
      <button onClick={handleShow}  className='btn btn-warning fw-bold rounded-circle'>+</button>
    </div>

    { allCategory?.length > 0 ?

      allCategory?.map(category=>(
        <div droppable={true} onDrop={(e)=>dropVideo(e,category?.id)} onDragOver={(e)=>dragOverCategory(e)} className='d-flex flex justify-content-between  border border-3 rounded border-white p-2 mt-3'>
        <div>
        <h4  className="text-warning">{category.categoryName}</h4>
        <button onClick={()=>deleteCategory(category.id)} className='btn'><i style={{color:"red"}} className="fa-solid fa-trash"></i></button>
        </div>
        <div className='row mt-2'>
         {
          category.allVideos?.length > 0 && 
          category.allVideos?.map(video=>(
            <div draggable={true} onDragStart={(e)=>videoDragStarted(e,video,category.id)} key={video?.id} className='col-lg-6'>

            <VideoCard videoDetails={video} insideCategory={true}/>
            
            </div>
          ))
         }

        </div>
        </div>
      ))
      
        :
           <div className='text-danger fw-bold mt-3'>No category Added yet
      </div>

    }



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title className='text-warning fw-bold'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border border-3 border-info p-3 rounded'>
            <FloatingLabel controlId="category" label="Category" className="mb-3">
              <Form.Control onChange={(e)=>setCategoryName(e.target.value)}  type="text" placeholder="Category" />
            </FloatingLabel>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addCategory}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>



    </>
  )
}

export default Category