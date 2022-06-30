import React from 'react'

const CityComponent = (props) => {
    const{ setCity,fetchWeather}=props
    return (
        <div className='CityComponent'>
            <>
                <img className='weatherlogo' src="/icons/perfect-day (1).jpg" alt="weather logo" />
                <span className='CityLabel'>
                    <label >Find weather of your city</label>
                </span>
                <form className='searchbox'onSubmit={fetchWeather} >
                    <input className='input' type="text" placeholder='City' onChange={(e)=>setCity(e.target.value)} />
                    <button className='button' type='submit'>Search</button>
                </form>

            </>
        </div>
    )
}

export default CityComponent;