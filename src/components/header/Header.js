import React from 'react'
import { VscSearch } from 'react-icons/vsc';
import arm from "../../assets/images/ArmenianExpress.png"
import "./Header.css"

const Header = () => {
    const links = ["Import","Export","Corporate","Wholesale Request"," Smart Solutions "]
    return (
        <div style={{width:"100%",height:"50px"}} className="header-container">
            <div className="header-navbar">
                <div>
                    <div className="logo-div">
                        <img src={arm} alt="express"/>
                    </div>
                </div>
                <div className="links-div">
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