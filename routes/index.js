const express=require('express');
const router=express.Router();

const controller=require('../controller/main');

router.get('/',controller.home);
router.get('/remove',controller.remove);
router.post('/addhabit',controller.addhabit);
router.get('/action',controller.action);
router.get('/habit',controller.habit);

module.exports=router;
