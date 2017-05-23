import React from 'react'
import './ThingList.css'
import Thing from './Thing'

const ThingList = (props) => {
    return (
        <ul className="ThingList">
           { 
               Object.keys(props.things)
               .map(key => <Thing thing={} />) 
            } 
        </ul>
    )
}

export default ThingList