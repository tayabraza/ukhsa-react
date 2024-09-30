
function SunriseSunset({sunTimes}){

    if ( sunTimes?.sunrise ) {

        return (

            <div className="weather-card sunrise-sunset">

                <p>Sunrise: { sunTimes.sunrise }</p>
                <p>Sunset: { sunTimes.sunset }</p>

            </div>

        )

    }

}

export default SunriseSunset;