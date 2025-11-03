import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox(){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "0122597e3b277ceb72da0d40065c283c"
    
    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q={city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_ike,
            weather: jsonResponse.main.weather[0].description,
        };
        console.log(result);
    }

    let [city, setCity] = useState("");

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return(
        <div className='SearchBox'>
            <h3>Search For the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit' >SEARCH</Button>
            </form>
        </div>
    );
}