import React from 'react'
import './Follow.css'

 const Follow = () => {
        return ( 
            <div className='shadow-box' style={{marginTop:"50px"}}>
                <div className='first-div'>
                    <div className="flex-div text-div">
                        <h1>TRACK</h1>
                        <h1 className='second-word'> YOUR PARCEL</h1>
                    </div>
                    <span>
                    Insert the tracking number and track the delivery process.
                    </span>
                </div>
                <div className='search-div'>
                    <input placeholder="1z81rf250331989368"/>
                    <button>
                        <span>Search</span>
                    </button>
                </div>
            </div>
        )

        }

export default Follow