import p_json from './package.json'
import express from 'express';


const app = express();
const PORT = 8000;

app.get('/', (req: any,res: { send: (arg0: string) => any; }) => res.send('Express + TypeScript Server'));
app.get('/healthz', (req:any, res: { send: (arg0: string) => any; }) => res.send(`Версия проекта - ${p_json.version}`))
app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
