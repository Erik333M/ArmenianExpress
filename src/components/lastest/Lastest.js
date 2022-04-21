import React from 'react'
import women from "../../assets/images/woman.jpg"
import cosmetics from '../../assets/images/cosmetics.jpg'
import gift from '../../assets/images/gift.jpg'
import "./Lastest.css"

const Lastest = () => {
    const data = [
        {
            id:1,
            img:women,
            desc:"Shopping without customs fee"
        },
        {
            id:2,
            img:cosmetics,
            desc:"Everything skin care"
        },
        {
            id:3,
            img:gift,
            desc:"Gifts for all"
        }
    ]
    return (
        <div className="lastest">
            <div>
                <h1>Latest from our blog</h1>
                <p>We constantly share interesting materials that will be your guide while shopping online</p>
            </div>
            <div className="card-div">
                {
                    data.map((e) => {
                        return <div key={e.id} className="cards">
                            <img src={e.img} alt="none" width="300" height="200"/>
                            <div className="white-div">
                                <span>{e.desc}</span>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="btn-div">
                <button>More</button>
            </div>
        </div>
    )
}

export default Lastest