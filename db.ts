import axios from "axios";
import pgp from 'pg-promise';



let citiesList: Array<string> = ['Moscow', 'Sankt-Peterburg', 'Kazan', 'Nizhniy Novgorod']


setInterval(()=> {for (let city of citiesList) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=877b59e2e991f956d0394235b7de8467`)
    .then((response:any)=>{
        console.log(response.data.name)
        console.log(Math.round(response.data.main.temp - 273.15))
        console.log(response.data.main.pressure)
        console.log(response.data.main.humidity)
    })
    .catch((error:object)=>{
        console.error(error)
    })
}}, 3600000)
