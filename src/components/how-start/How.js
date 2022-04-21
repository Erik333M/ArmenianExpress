import React from 'react'
import { GiArchiveRegister } from 'react-icons/gi';
import { FaShoppingBag } from 'react-icons/fa';
import { BsShop } from 'react-icons/bs';
import "./How.css"

const How = () => {
    const data = [
        {
            icone:<GiArchiveRegister/>,
            desc:"Register and get an individual address in the USA, Russia, Great Britain, China and UAE (Dubai) for free"
        },
        {
            icone:<FaShoppingBag/>,
            desc:"Use the shipping addresses that you have got while shopping online"
        },
        {
            icone:<BsShop/>,
            desc:"Get your orders in Armenia and in Artsakh"
        }
    ]

    return (
        <div className="how-start">
            <h1>How to start</h1>
            <p>How to make online purchases and get fast and secure in Armenia?</p>
            <div className="icons-div">
            {data.map((e,index) =>{
                return <div key={index}>
                    {e.icone}
                    <p>
                        {e.desc}
                    </p>
                </div>
            })}
            </div>
        </div>
    )
}

export default How