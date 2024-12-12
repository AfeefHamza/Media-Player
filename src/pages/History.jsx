import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'


function History() {

    const [historyVideos,sethistoryVideos]=useState([])
    console.log(historyVideos);
    

  useEffect(() => {
    getHistoryVideos()
  }, [])
  


    const getHistoryVideos=async ()=>
    {
     try
     {
      const result= await getHistoryAPI()
      if(result.status>=200 && result.status<300)
        {
          sethistoryVideos(result.data)
        }
     }
     catch (err)
     {
      console.log(err);
     }
    }

    const deleteHistory=async (videoId)=>
    {
      try
      {
        await deleteHistoryAPI(videoId)
        getHistoryVideos()
      }
      catch (err)
      {
        console.log(err);
        
      }

    }
  return (
    <>
    <div className='mt-5 container d-flex justify-content-between'>
    <h4 className='text-warning'>Watch History</h4>
    <Link to={'/home'} >Back to <i className="fa-solid fa-house fa-lg"></i> </Link>

    </div>

    
    <div className='container'>
      {
        historyVideos?.length > 0?
        <table class="table table-bordered border-black ">
        <thead>
            <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Link</th>
                <th>Date</th> 
                <th>...</th>
            </tr>
        </thead>
        <tbody>
       {
        historyVideos?.map(video=>(
          
          <tr key={video?.id}>
            <td>{video?.id}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.youtubeUrl}>{video?.youtubeUrl}</a></td>
            <td>{video?.formattedDate}</td>
            <td><button onClick={()=>deleteHistory(video?.id)} className='btn '><i style={{color:"red"}} className="fa-solid fa-trash"></i></button></td>
          </tr>
           
        
        ))
       }
       </tbody>
    </table>
        :
        <div className='text-danger text-center'> 
        No Videos Watched Yet
        </div>
      }
    

      
    </div>
    </>
  )
}

export default History