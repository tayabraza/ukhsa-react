import { useState } from "react";
import '../assets/search.css';

function SearchBar({sendCity}) {

    const [city, setCity] = useState('');

    const handleSearch = () => {

        if  (city.trim() !== '') {

                sendCity(city);

        }

    }

    return (

        <form onSubmit={ event => event.preventDefault() }>
            <div className="group">
                <input value={city} onChange={event => setCity(event.target.value)} onKeyUp={ event => event.key === "Enter" ? handleSearch() : null} placeholder="Enter city name" />
                <button type="button" onClick={handleSearch}><i className="fa fa-search"></i> Search</button>
            </div>
        </form>

    )

}

export default SearchBar;