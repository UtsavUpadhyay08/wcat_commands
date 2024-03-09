let fs=require('fs');
let path=require('path');

function numbering(filePath){
    if(filePath===undefined){
        console.log("Please enter correct path");
        return;
    }
    else{
        let isfile=fs.lstatSync(filePath).isFile();
        if(fs.existsSync(filePath) && isfile){
            let content=fs.readFileSync(filePath,{ encoding: 'utf8', flag: 'r' });
            return numberingfun(content);
        }
        else{
            console.log("Please enter correct path");
            return;
        }
    }
}

function numberingfun(content){
    let contentarr=content.split('\n');
    for(let i=0;i<contentarr.length;i++){
        contentarr[i]=`${i+1} `+contentarr[i];
    }
    contentarr=contentarr.join('\n');
    return contentarr;
    // console.log(contentarr);
}

module.exports={
    numberingkey:numbering
}