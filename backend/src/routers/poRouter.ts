import express from 'express';
function poFunction(req: express.Request, res: express.Response){
    res.json({
        po: "Testing router..."
    });
}



export {poFunction};