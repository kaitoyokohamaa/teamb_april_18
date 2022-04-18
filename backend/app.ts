import express from 'express';
import { memberInfo } from './src/types';
import { memberNames } from './src/members';

const app = express.Router()
const port: number = 3000

let names: memberInfo[] = memberNames;

app.get('/', (req: any, res: any) => {
    if (req.query['nickname']) {
        for (let i: number = 0; i < names.length; i++) {
            if (req.query['nickname'] === names[i].nickname) {
                res.json({
                    name: names[i].name,
                    country: names[i].country
                })
            }
        }
        res.json({
            message: 'Nickname does not Exist!'
        })
    } else if (req.query['fullname']){
        for (let i: number = 0; i < names.length; i++) {
            if (req.query['fullname'] === names[i].name) {
                res.json({
                    nickname: names[i].nickname,
                    country: names[i].country
                })
            }
        }
        res.json({
            message: 'Fullname does not Exist!'
        })
    } else if (req.query['country']){
        let temp = [];
        for (let i: number = 0; i < names.length; i++) {
            if (req.query['country'] === names[i].country) {
                temp.push(names[i].name);
            }
        }
        if (temp.length > 0) {
            res.json({
                people: temp
            })
        } else {
            res.json({
                message: 'No member is from that country'
            })
        }
    } else {
        res.json({
            message: 'Please enter nickname or fullname or country'
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})