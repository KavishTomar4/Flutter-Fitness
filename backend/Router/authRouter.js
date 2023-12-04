let express = require('express');
let router = express.Router();
let yogaModel = require('../Models/yogaModel')
let yogas = require('../yogas.json')

router.get('/', async(req, res)=>{

  
    let i = await yogaModel.find();
    

    res.json({yogaData : i});
})

router.post('/getyoga', async(req, res)=>{
   
    //console.log(req.body)
    let wordArray = req.body.yoganame.split('-')

    let word = ''
    if(wordArray[0] !== 'adho' || wordArray !== 'baddha'){
        for(let i = 0; i < wordArray.length; i++){
            word += wordArray[0].charAt(0).toUpperCase() + wordArray[0].slice(1);
        }

        let yoga = await yogaModel.findOne({name: word})
        res.json({yogaType: yoga})
    }

    
})


module.exports = router;