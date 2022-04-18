import express from 'express';
import { MyUser } from "./src/types/types";
import { myRouter} from "./src/routers/router";
var cors = require('cors');


const app = express();
const port:number  = 8080;


app.use(express.json());
app.use(cors());
app.use('/', myRouter);
app.listen(port, () => {});
