import React, { useEffect, useState } from 'react'
import { themeContext } from "../../../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './Help.css'
import PageTitle from '../../../Components/Loader/Other/PageTitle';
import { API_URL4007 } from '../../../Service/ApiService';
import { Add } from '@mui/icons-material';
export default function Help() {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [tickets,setTickets]=useState([])
  const navigate=useNavigate();
  const handleBack=()=>{
    navigate(-1)
  }

  const getTickect=()=>{
    const token = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('user_id');

fetch(`${API_URL4007}getSupport?user_id=${userId}`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch support data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Support data:', data);
    setTickets(data?.response)
    // Update state or UI here
  })
  .catch(error => {
    console.error('Error:', error);
  });

  }

  useEffect(()=>{
    getTickect()
  },[])

  return (
    <div className='help-main-container'>
      <div className='new-hel-tittt'>
        <PageTitle title={'Help & Support'} />
      </div>
      <div data-aos="fade-up" className="uploaddd-sp" onClick={()=>navigate('/Support')}>
                  <button class="upload-btn-sp" >
                    <Add className="icon" />
                    Add Ticket
                  </button>
                </div>
      <div>

          <div>
            {tickets?.map((item,index)=>(
          <div className="support-card" key={index}>
      <img
        src="/assets/support.png"
        alt="Support"
        className="support-card-image"
      />
      <div className='sup-hori'>
      <h2 className="support-card-title">{item?.Name}</h2>
      <p className="support-card-description">
        {item?.Description}
      </p>
      </div>
      {item?.status==="open" ?(
      <button className="support-card-button">Open</button>
    ):item?.status==="close" ?(
      <button className="support-card-button">Close</button>
    ):null}
    </div>
    ))}
          </div>
      </div>
     {/* <div className="edit-profile-flex-start-007">
            <div className="left-arrow-main-007"
            onClick={handleBack}
             style={{backgroundColor:darkMode ? "#2C2C2E" : " #d8d8df"}}>
              <div className="edit-profile-left-arrow-007">
                <img src={require("../../../Assets/rightwel.png")} alt="" />
              </div>
            </div>
            <div className="edit-profile-title-007">Help & Support</div>
          </div> */}
             {/* <div data-aos="fade-up" className='help-content-holder'  style={{backgroundColor:darkMode ? "#2C2C2E" : " #d8d8df"}}>


            <div className='help-content-1' onClick={()=>navigate('/Support')}>
              <div className='help-text-1'>Support</div>
              <div className='hlp-arrow-icon-1'>
                <img src='/assets/backwel.png' alt="" />
              </div>
            </div>

          </div> */}
    </div>
  )
}
