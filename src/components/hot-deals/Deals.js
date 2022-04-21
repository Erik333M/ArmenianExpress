import React from 'react'
import data from "./FakeData"
import "./Deals.css"

const Deals = () => {
    return (
        <div style={{margin:"70px 0"}}>
            <h1>HOT DETAILS</h1>
            <div className="shadow-box flex" style={{flexWrap:"wrap"}}>
                {data.map((e,index) => {
                    return <div key={index} className="img-div">
                        <img src={e.img} alt={`img-${index+1}`}/>
                        <p>{e.name}</p>
                        <p className="price">{e.price}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Deals