import React from 'react'
import './Main.css'
import Follow from './follow/Follow'
import Lastest from './lastest/Lastest'
import How from './how-start/How'
import Shopping from './shopping-methods/Shopping'
import Services from './smart-services/Services'
import Deals from './hot-deals/Deals'
import Wall from './smart-wall/Wall'

 const Main = () => {
    return (
        <div className="home">
            <Follow/>
            <Lastest/>
            <How/>
            <Shopping/>
            <Services/>
            <Wall/>
            <Deals/>
        </div>
    )
}

export default Main
