import express from 'express';

interface Person {
    name: string;
    nickname: string;
}

let names: Person[] = [{
    name: '竹本 爽史',
    nickname: 'そうし'
  }, {
    name: '渕上 敬太',
    nickname: 'ふっちー'
  }, {
    name: '横浜 海斗',
    nickname: 'かいと'
  }, {
    name: '窪田 浩之',
    nickname: '窪田'
  }, {
    name: '小西 洋太朗',
    nickname: 'コニー'
  }, {
    name: 'COSTA HYGISON',
    nickname: 'BOLA'
  }, {
    name: 'Nittayawan Sukhumpat',
    nickname: 'ポー'
  }, {
    name: 'Onggo Barata',
    nickname: 'Barata'
  }, {
    name: '金城 愛梨',
    nickname: 'アイリス'
  }, {
    name: '久米 夏弥',
    nickname: 'ナツ'
  }, {
    name: '佐藤 貴子',
    nickname: 'たかこ'
  }, {
    name: '坂井田 逸斗',
    nickname: '坂井田'
  }, {
    name: '長谷川 茉奈',
    nickname: 'ハセ'
}];

function nicknameToName(persons: Person[], nickname: string) {
    let result: string = '';
    for (let person of persons)
        if (nickname === person.nickname)
            result = person.name;
    return result
}

function barataFunction(req: express.Request, res: express.Response){
    let nickname: string = nicknameToName(names, req.query.name as string);
    if (nickname === '') {
        res.sendStatus(404)
    } else {
        res.json(nickname);
    }
}



export {barataFunction};