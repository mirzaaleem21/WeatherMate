import React from 'react';

const  WeatherCard =({err,city,temperature,description,country})=>{
    console.log(city);
    return (
    <>
        <div id="location">
              {err && <p>{err}</p>}
                {city && <p>{city}</p>}
                {country && <p> {country}</p>}
                
            </div>
                <div id="temp">
                    <img id="temp-icon" src="./icons/sun.svg" alt=""></img>
                    <p><span id="temp-value"> {temperature && <p>{temperature}<span id="temp-unit" >&#8451;</span></p>}</span> </p>
                </div>

                <div id="climate">
                    { <p> {description && <p>{description}</p>} </p> }
                    <p></p>
                </div>
                </>
    )
}

export default WeatherCard;