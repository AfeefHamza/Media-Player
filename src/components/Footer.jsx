import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    
   <div className='ms-5 ps-5 d-flex gap-5 mt-5' style={{height:'250px'}}>
    <div style={{width:'600px'}}>
    <h4><i className="fa-solid fa-video me-2 "></i>Media Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur praesentium tenetur magnam earum facere eius, dicta temporibus fuga quod neque rerum dolores laudantium ducimus.tenetur magnam earum facere eius, dicta temporibus </p>
    <p>Code Licensed Luminar</p>
    <p>Currently v5.3.2</p>
    </div>
    <div className='d-flex flex-column'>
      <h5>Links</h5>
      <Link to={''} style={{textDecoration:"none",color:"white"}}>Landing
      </Link>
      <Link to={''} style={{textDecoration:"none",color:"white"}}>Home
      </Link>
      <Link to={''} style={{textDecoration:"none",color:"white"}}>History
      </Link>

    </div>
    <div className='d-flex flex-column'>
      <h5>Guides</h5>
      <Link to={''} style={{textDecoration:"none",color:"white"}}>React
      </Link>
      <Link to={''} style={{textDecoration:"none",color:"white"}}>React Bootstrap
      </Link>
      <Link to={''} style={{textDecoration:"none",color:"white"}}>React Router
      </Link>

    </div>

    <div className='d-flex flex-column'>
      <h5>Contact Us</h5>
      <div className='d-flex'>
      <input className='form-control' type="text" placeholder='Enter The Email:' />
      <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className='d-flex justify-content-between mt-5'>

        <a href="" className='text-white fs-5'><i className="fa-brands fa-facebook"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-twitter"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-instagram"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-linkedin"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-brands fa-github"></i></a>
        <a href="" className='text-white fs-5'><i className="fa-solid fa-phone"></i></a>




        



      </div>
      
    </div>

    
   </div>
   <div className='text text-center text-white'>
  Copyright © Aug batch 2024, Media Player, Built with React
  </div>
   </>
   
   
  )
}

export default Footer