import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'




function Home() {

  const [addVideoResponse,setaddVideoResponse]=useState("")
  const [deleteVideoResponseFromCat,setDeleteVideoResponseFromCat]=useState("")
  const [updateCatFromView,setupdateCatFromView]=useState("")

  

  return (
    <>
    <div className='container my-5 d-flex justify-content-between'>
      <Add setaddVideoResponse={setaddVideoResponse}/>
      <Link to={'/history'} className='text-warning text-decoration-none fw-bold fs-4 me-5'>Watch History</Link>
    </div>

    <div className='row container my-5'>

      <div className='col-lg-6'>
        <h3 className='ms-5'>All Videos</h3>
        <View addVideoResponse={addVideoResponse} deleteVideoResponseFromCat={deleteVideoResponseFromCat} setupdateCatFromView={setupdateCatFromView}/>

      </div>

      <div className='col-lg-6'>
      <Category setDeleteVideoResponseFromCat={setDeleteVideoResponseFromCat} updateCatFromView={updateCatFromView}/>
      </div>

    </div>

    </>
  )
}

export default Home