import express from 'express';
import db from '../lib/dbh';

function createTable(){
    let query = "CREATE TABLE jira(data JSON);";
    //query = "CREATE TABLE jira_data (date VARCHAR(20), total VARCHAR(255), backlog VARCHAR(255), in_progress VARCHAR(255), in_check VARCHAR(255), on_review VARCHAR(255), done VARCHAR(255), total_progress_rate VARCHAR(255), eng_progress_rate VARCHAR(255), date_to_all_in VARCHAR(255), outstanding VARCHAR(255), wip VARCHAR(255), ideal_progress_rate VARCHAR(255), num_testers VARCHAR(255), additional_testers VARCHAR(255))";
    let createDbhTable = db.query(query, function(err){
        if(err) {console.log(err);} 
    });
}

function insertData(){
    let jiradata = [{date:1}];// When I am trying to import it does not work 😭, so I just copy and paste the intire arr
    for(let myJson of jiradata){
        let jsonObj = myJson;
        let date = jsonObj.date;
        let jsonStr = JSON.stringify(jsonObj);

        let query = "INSERT INTO jira (date, data) VALUES ('"+date+"', '"+jsonStr+"')";
        let selectDbhData = db.query(query, (err,result)=>{
            if(err) {console.log(err);} 
        }); 
    }
}
function getData(){
    let query = "SELECT * FROM jira";
    let selectDbhData = db.query(query, (err,result)=>{
        if(err) {console.log(err);} 
        //res.send(result);
    }); 
}
function bolaFunction(req: express.Request, res: express.Response){
    //res.set('Access-Control-Allow-Origin', '*');
    console.log("-Request made-");
    //insertData();
    let query = "SELECT * FROM jira";
    let selectDbhData = db.query(query, (err,result)=>{
        if(err) {console.log(err);} 
        
        let jiraDataArr = result.map(function(myDbhRow:any){
            let jsonData = JSON.parse(myDbhRow.data);
            return jsonData;
        });
        
        res.send(jiraDataArr);
    }); 
}



function bolaFunction1(req: express.Request, res: express.Response){
    let data = {};
    let bodyObj = req.body;
    let getObj = req.query;
    res.json({
        request: "GET",
        type:"Bola Request",
        getObj: getObj,
        bodyObj: bodyObj,
        data:data,
    });
}

export {bolaFunction};