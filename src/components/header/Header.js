import React from 'react'
import { VscSearch } from 'react-icons/vsc';

import "./Header.css"

const Header = () => {
    const links = ["Import","Export","Corporate","Wholesale Request"," Smart Solutions "]
    return (
        <div style={{width:"100%",height:"50px"}} className="header-container">
            <div>
                <div>
                    <div style={{width:"70px",height:"40px",backgroundColor:"red"}}></div>
                </div>
                <div>
                    {links.map((e,i) => {
                        return <span key={i}>
                            {e}
                        </span>
                    })}
                    <VscSearch/>
                </div>
            </div>
        </div>
    )
}

export default Header