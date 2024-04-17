const fs = require('fs');

fs.readFile('./Asyn read&write/input.txt', 'utf-8', (err, data)=>{
    if(err){
        console.error(err);
    }else{
        console.log("data is : "+data);
    }
});