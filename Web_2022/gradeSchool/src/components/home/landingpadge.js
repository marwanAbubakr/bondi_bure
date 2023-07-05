import React from 'react'
import video from '../../images/course-video.mp4'
const LandingPadge = () => {
  return (
    <div className='landing-padge'>
      <video className='video-bg' muted loop src={video} autoPlay />
      <div className='caption'>
        <h6>GRADUATE SCHOOL OF MANAGEMENT</h6>
        <h2>
          <span>your</span> classrom
        </h2>
        <button>discover more</button>
      </div>
    </div>
  )
}

export default LandingPadge
