import React from 'react'
import landingimg from '../assets/music.gif.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/setting.png'
import categories from '../assets/category.png'
import history from '../assets/historyy.png'
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
    <div className='container mt-5'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-6'>
          <h3 style={{fontFamily:"Dancing Script",fontSize:"4rem"}}>Welcome To <span className='text-success'>Media Player</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore necessitatibus, voluptates quibusdam repellat nemo culpa et mollitia temporibus omnis. Architecto, unde quam! Quam reprehenderit quasi impedit tempora rerum doloremque laudantium!</p>

          <Link to={'/home'}><button className='btn btn-info'>Get Started</button></Link>
        </div>
        <div className='col-lg-6'>
          <img className='w-100 ms-5' src={landingimg} alt="" />
        </div>

      </div>

    </div>
    <div className='container mt-5'>
      <h3 className='mb-3 fs-2' style={{fontFamily:"Dancing Script", fontSize:"3 rem"}}>Features</h3>

     <div className='row'>
      <div className='col-lg-4'>
      <Card style={{ width: '22rem',height:'400px' }}>
      <Card.Img variant="top" src={settings} style={{height:'250px',padding:"20px"}} />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload,view and remove videos
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4'>
      <Card style={{ width: '22rem',height:'400px' }}>
      <Card.Img variant="top" src={categories} style={{height:'250px',padding:"20px"}} />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Users can categorize the videos by drag and drop feature
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className='col-lg-4'>
      <Card style={{ width: '22rem',height:'400px' }}>
      <Card.Img variant="top" src={history} style={{height:'250px',padding:"20px"}} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all videos
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>

     </div>
      
    </div>
    <div className='ms-5 mt-5 row border border-2 border-white rounded container '>

      <div className='col-lg' style={{width:'500px'}}>
      <h3 className='mt-5 text-warning'>Simple Fast and Powerful</h3>

        <p className='text-white mt-5'><span className='fs-5'>Play Everything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam facere eum rerum in unde delectus cupiditate voluptates.</p>

        <p className='text-white'><span className='fs-5'>Categorize Video: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam facere eum rerum in unde delectus cupiditate voluptates.</p>

        <p className='text-white'><span className='fs-5'>Manage History: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam facere eum rerum in unde delectus cupiditate voluptates.</p>
      </div>

      <div className='col-lg ms-5 mt-5 mb-5'>
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qN3wfuPYTI4?si=rzbmhJfONqPgyVL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>

    </div>
    </>
  )
}

export default Landing