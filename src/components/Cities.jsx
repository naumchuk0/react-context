import { useState } from "react"
import './Cities.css';

export default function Cities() {
    const cities = [
        {name: "Odesa", area: "162.42"},
        {name: "Lviv", area: "148.95"},
        {name: "Kyiv", area: "835.58"},
        {name: "Rivne", area: "88"},
    ]
    
    return (
        <div class="center">
            <ul>
                {cities.map(i => 
                    <li class="cities">{i.name} - {i.area} km^2</li>
                )}
            </ul>
        </div> 
    )
}