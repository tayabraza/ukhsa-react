import { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import SunriseSunset from "./SunriseSunset";

function WeatherPage() {

    const [weather, setWeather] = useState('');
    const [sunTimes, setSunTimes] = useState({sunrise: '', sunset: ''});
    const year = new Date().getFullYear();
    const API_KEY = '357151a9076740db97e222030240909';

    async function getWeather(city){

        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`);
            const data = await res.json();
    
            setWeather(data);
            setSunTimes({
                sunrise : data.forecast.forecastday[0].astro.sunrise,
                sunset : data.forecast.forecastday[0].astro.sunset
            });
    
        } catch (error) {
            console.error(error);
        }
    }


    return (

        <>
            <header>
                <h1 className="title">Airport Terminal Monitoring App</h1>
            </header>

            <main>
                <SearchBar sendCity={getWeather} />
                <div className="weather-group">
                    <CurrentWeather weather={weather} />
                    <SunriseSunset sunTimes={sunTimes} />
                </div>
            </main>

            <footer>
                <p>Copyright &copy; { year }</p>
            </footer>

        </>

    )

}

export default WeatherPage;