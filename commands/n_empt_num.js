let fs=require('fs');
let path=require('path');

function nonemptnum(filePath){
    if(filePath===undefined){
        console.log("Please enter correct path");
        return;
    }
    else{
        let isfile=fs.lstatSync(filePath).isFile();
        if(fs.existsSync(filePath) && isfile){
            let content=fs.readFileSync(filePath,{ encoding: 'utf8', flag: 'r' });
            return nonemptnumfun(content);
        }
        else{
            console.log("Please enter correct path");
            return;
        }
    }
}

function nonemptnumfun(content){
    let contentarr=content.split('\n');
    let num=1;
    for(let i=0;i<contentarr.length;i++){
        let current_string=contentarr[i].trim();
        if(current_string!=""){ 
            contentarr[i]=`${num} `+contentarr[i];
            num++;
        }
    }
    contentarr=contentarr.join('\n');
    return contentarr;
    // console.log(contentarr);
}

module.exports={
    nonemptnumkey:nonemptnum
}