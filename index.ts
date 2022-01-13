import p_json from './package.json'
import express from 'express';
import WeatherSyncer from './db';


const app = express();
const PORT = 8000;

app.get('/', (req: any, res: { send: (arg0: string) => any; }) => res.send('Express + TypeScript Server'));
app.get('/healthz', (req: any, res: { send: (arg0: string) => any; }) => res.send(`Product version - ${p_json.version}`))
app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
  new WeatherSyncer().getWeather()

});
