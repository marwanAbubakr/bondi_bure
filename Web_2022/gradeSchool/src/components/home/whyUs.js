import React from 'react'
import BgImge from '../../images/choosing-bg.jpg'
import { BsPenFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'

const whyUs = () => {
  return (
    <div className='why-us'>
      <img src={BgImge} alt='' />
      <div className='container'>
        {/* <div className='row'>
          <div class='col-sm-4'>
            <h5 class='card-title'>
              <span>
                <BsPenFill />
              </span>
              ALL COURSES
            </h5>
            <div class='specifies'>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                accusantium, officiis minima vel quas sequi exercitationem magni
                aut, cumque incidunt soluta nobis cupiditate provident fugiat
                deleniti corporis, fugit harum at?
              </h2>
            </div>
          </div>
        </div> */}
        <div class='row'>
          <div class='col-sm-4  '>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>
                  <span>
                    <BsPenFill />
                  </span>
                  ALL COURSES
                </h5>
                <p class='card-text'>
                  Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                  In mollis eros a posuere imperdiet. Donec maximus elementum
                  ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula
                  libero.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>
                  <span>
                    <BsPenFill />
                  </span>
                  ALL COURSES
                </h5>
                <p class='card-text'>
                  Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                  In mollis eros a posuere imperdiet. Donec maximus elementum
                  ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula
                  libero.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-4'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>
                  <span>
                    <BsPenFill />
                  </span>
                  ALL COURSES
                </h5>
                <p class='card-text'>
                  Curabitur id eros vehicula, tincidunt libero eu, lobortis mi.
                  In mollis eros a posuere imperdiet. Donec maximus elementum
                  ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula
                  libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default whyUs
