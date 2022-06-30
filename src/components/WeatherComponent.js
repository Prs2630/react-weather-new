import React from 'react';
import { WeatherIcons } from '../App';

export const WeatherInfoIcons = {
    sunset: "/icons/temp.jpg",
    sunrise: "/icons/temp.jpg",
    humidity: "/icons/humidity.jpg",
    wind: "/icons/wind.jpg",
    pressure: "/icons/pressure.jpg",
};
const WeatherinfoComponent = (props) => {
    const { name, value } = props
    return (
        <div className='InfoContainer'>
            <img className="InfoIcon" src={WeatherInfoIcons[name]} alt="icon" />
            <span className='InfoLabel'>
                {value}
                <span>{name}</span>

            </span>

        </div>
    )
}

const WeatherComponent = (props) => {
    const { weather } = props
    const isDay = weather?.weather[0].icon?.includes('d')//if its day show sunset else sunrise
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }//convert hours into minutes
    return (
        <>
            <div className='weatherCondition'>
                <span className='condition'><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}</span>
                {/* convertinfg temp in celsious */}
                <img className='weatherIcon' src={WeatherIcons[weather?.weather[0].icon]} alt="weatherlogo" />
            </div>
            <span className='location'>{`${weather?.name},${weather?.sys.country}`}</span>
            <span className='weatherinfo'>weather info</span>
            <div className='weatherInfoContainer'>


                <WeatherinfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
                <WeatherinfoComponent name="humidity" value={weather?.main?.humidity} />
                <WeatherinfoComponent name="wind" value={weather?.wind?.speed} />
                <WeatherinfoComponent name="pressure" value={weather?.main?.pressure} />
            </div>
        </>

    )
}

export default WeatherComponent