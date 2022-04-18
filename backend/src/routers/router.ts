import express from 'express';
import { names } from '../assets/sets';
import { formatTxt } from '../functions/functions';
import { MyUser } from '../types/types';
import { poFunction } from './poRouter';
import { barataFunction } from './barataRouter';
import { bolaFunction } from './bolaRouter';
const myRouter = express.Router();


myRouter.get('/', (req: any, res: any) => {
    res.json({
      bola: 333,
      pwd: "AMAZING GET REQUEST"
    });
  });
  
myRouter.get('/po', poFunction);
myRouter.get('/barata', barataFunction);
myRouter.get('/bola', bolaFunction);

/*
myRouter.post('/barata', (req: any, res: any) => {
    let body = req.body;
    //console.log(body);

    let nick = req.query.nickGet;

    let ff = names.filter(function(obj){
        if(formatTxt(obj.nickname) == formatTxt(nick)){
            return true;
        }
        return false;
    });
    let fullName = (ff.length  == 1) ? ff[0].name : null;
    let wasUserFound:boolean = (ff.length  == 1) ? true:false;
    nick = (wasUserFound)? nick:null;
    res.json({
        timestamp: new Date(),
        getRequest:req.query,
        bodyRequest: body,
        wasUserFound:wasUserFound,
        fullName: fullName,
        nickname:nick
    });
});
*/

export {myRouter};