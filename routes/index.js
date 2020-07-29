const express =require('express');
const actions = require('../methods/actions');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello World');
});

router.get('/Dashboard',(req,res)=>{
    res.send('Dashboard Requested');
});

router.post('/adduser',actions.addNew);
router.post('/authenticate',actions.authenticate);
router.get('/getinfo',actions.getInfo);

module.exports=router;