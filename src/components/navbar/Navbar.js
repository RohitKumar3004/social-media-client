import React from 'react'
import "./Navbar.scss"
import Avtar from '../avtar/Avtar'
import { useNavigate } from 'react-router-dom'
import {AiOutlineLogout} from 'react-icons/ai'
import {useDispatch, useSelector} from 'react-redux'
import { setLoading } from '../../redux/slices/appConfigSlice'
import { axiosClient } from '../../utils/axiosClient'
import { KEY_ACCESS_TOKEN, removeItem } from '../../utils/localStorageManager'

function Navbar() {
  const navigate = useNavigate();
  const myProfile = useSelector(state => state.appConfigReducer.myProfile);
  const dispatch = useDispatch();
  async function handelLogoutClicked() {
  try {
    await axiosClient.post('/auth/logout');
    removeItem(KEY_ACCESS_TOKEN);
    navigate('/login')
  } catch (error) {
    
  }
}

  return (
    <div className='Navbar'>
    
          <div className="container">
              <h2 className='banner  hover-link' onClick={()=>navigate("/")}>Social Media</h2>
              <div className="right-side">
                  <div className="profile hover-link"  onClick={()=>navigate(`/profile/${myProfile?._id}`)}>
                      <Avtar src={myProfile?.avatar?.url}/>
          </div>
          <div className="logout hover-link" onClick={handelLogoutClicked}>
            <AiOutlineLogout />
          </div>
              </div> 
          </div>
    </div>
  )
}

export default Navbar