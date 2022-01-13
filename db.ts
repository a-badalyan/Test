import axios from "axios";
const pgp = require('pg-promise')()


export default class WeatherSyncer {
    cn: object = {
        host: 'localhost',
        port: 5432,
        database: 'weather',        // Наименование БД
        user: 'artem',              // Имя пользователя СУБД 
        password: '12345',          // Пароль пользователя СУБД
    };

    db: object;

    cities: Array<string> = ['Moscow', 'Sankt-Peterburg', 'Kazan', 'Nizhniy Novgorod'];

    constructor() {
        this.db = pgp(this.cn)
    }
    getWeather(db: any = this.db): any {
        setInterval(() => {
            for (let city of this.cities) {
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=877b59e2e991f956d0394235b7de8467`)
                    .then((response: any) => {
                        db.none('INSERT INTO weather(city, temperature, pressure, humidity, dateandtime) VALUES($1, $2, $3, $4, now())',
                            [response.data.name, Math.round(response.data.main.temp - 273.15), response.data.main.pressure, response.data.main.humidity]);
                        console.log('Сведения внесены в базу данных')
                    })
                    .catch((error: object) => {
                        console.error(error)
                    })
            }
        }, 10000)
    }
}