import React from 'react'
import Flags from 'country-flag-icons/react/3x2'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p>Select Language</p>
                <div className="lang-div">
                    <Flags.US className="us-flag"/>
                     <span>English</span>
                </div>
            </div>
            <ul class="list-unstyled link-list">
                <li><a href="/en/pages/onexprime">PRIME Membership</a></li>
                <li><a href="/en/pages/pickuppoints">Pickup Points</a></li>
                <li><a href="/en/pages/12">Our story</a></li>
                <li><a href="/en/shops">Shops</a></li>
                <li><a href="/en/account/dropify">ONEX Dropify</a></li>
                <li> <a href="/en/pages/buyforme"> Buy for me </a> </li>
                <li><a href="/en/onextrack">Track Order</a></li>
                <li><a href="https://blog.onex.am" target="_blank">Blog</a></li>
            </ul>
            <div style={{textAlign:"left"}}>
                <span ><b>Service center</b></span><br />
                <span >MON - SAT 09:00 - 19:00</span><br /><br />
                <span ><b>ARMENIAN EXPRESS SMART WALL</b></span><br />
                <span >MON - SAT 09:00 - 21:00</span><br />
                <span >SUN 12:00 - 18:00</span><br /><br />
                <p>
                    <a href="/" style={{color: "#5dba2f",fontFamily:" inheri;",textDecoration:"none"}}>
                        Contact us 
                    </a>
                </p>
                <p><a href="" style={{color: "#5dba2f",fontFamily:" inheri;",textDecoration:"none"}}> (+374) 60 750 350</a></p>
                <p>
                </p>

            </div>
        </div>
    )
}

export default Footer