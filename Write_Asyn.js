const fs = require('fs');

const data = "This is normal data that has to be written in the file.";

try{
    fs.writeFile('./Asyn read&write/input.txt',data, 'utf8', (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Data is written successfully into file."+data);
        }
    });
}catch(err){
    console.error(err);
}