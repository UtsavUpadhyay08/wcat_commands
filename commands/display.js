let fs=require('fs');
let path=require('path');

function display(filePath){
    if(filePath===undefined){
        console.log("Please enter correct path");
        return;
    }
    else{
        let isfile=fs.lstatSync(filePath).isFile();
        if(fs.existsSync(filePath) && isfile){
            let content=fs.readFileSync(filePath,{ encoding: 'utf8', flag: 'r' });
            return content;
            // console.log(content);
        }
        else{
            console.log("Please enter correct path");
            return;
        }
    }
}

module.exports={
    displaykey:display
}