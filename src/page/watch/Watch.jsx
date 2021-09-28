import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './watch.scss'

const Watch = () => {
  //create new URL and locate it 
  const location = useLocation()
  const movie = location.movie
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>

      <video
        autoPlay
        progress
        controls
        src={movie.video}
        className="video"
        ></video>
    </div>
  )
}

export default Watch
