import React from 'react'
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { FaBoxOpen } from 'react-icons/fa';
import { MdOutlineBackHand } from 'react-icons/md';
import { BsCardChecklist } from 'react-icons/bs';
import { GiJigsawBox } from 'react-icons/gi';
import { AiOutlineUserSwitch } from 'react-icons/ai';


import "./Services.css"

const Services = () => {
    return (
        <div className="services shadow-box">
            <div>
                <h1>SMART<span style={{color:'black'}}> SERVICES</span></h1>
                <p>
                    <span>Before arriving parcels to our USA or China warehouse, you can order the following SMART Services.</span>
                </p>
            </div>
                <div className="text-div">
                    <div><MdOutlinePhotoCamera/> <span> Photo outside</span></div>
                    <div><FaBoxOpen/><span>Photo inside</span></div>
                    <div><MdOutlineBackHand/><span>Stop</span></div>
                    <div><BsCardChecklist/><span>Check the order</span></div>
                    <div><GiJigsawBox/><span>Do not repack</span></div>
                    <div><AiOutlineUserSwitch/><span>Change the Recipient</span></div>
                    <a href="/" className="btn">More</a>
                </div>

        </div>
    )
}

export default Services