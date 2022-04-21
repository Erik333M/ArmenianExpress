import React from 'react'
import "./Wall.css"

const Wall = () => {
    return (
        <div className="shadow-box">
            <div className="flex-div">
                <h1>
                    ARENIAN EXPRESS 
                </h1>
                <h1 className="smart"> SMART WALL</h1>
            </div>
            
            <p>
            ARENIAN EXPRESS SMART WALL differs from other similar solutions in the world with its innovations and functionality. Powered by artificial intelligence and data analytics, the "SMART WALL" can literally talk to the user, giving personalized advice, getting to know the new ARENIAN EXPRESS services, and more. The system is getting more and more sophisticated every day thanks to the data it receives from users.
            </p>
            <a href="/" className="btn" style={{padding: "20px 50px 20px 50px"}}>More</a>
        </div>
    )
}

export default Wall