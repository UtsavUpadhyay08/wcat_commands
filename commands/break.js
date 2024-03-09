let fs=require('fs');
let path=require('path');

function breakfile(filePath){
    if(filePath===undefined){
        console.log("Please enter correct path");
        return;
    }
    else{
        let isfile=fs.lstatSync(filePath).isFile();
        if(fs.existsSync(filePath) && isfile){
            let content=fs.readFileSync(filePath,{ encoding: 'utf8', flag: 'r' });
            return breakfun(content);
        }
        else{
            console.log("Please enter correct path");
            return;
        }
    }
}

function breakfun(content){
    let contentarr=content.split('\n');
    let new_content=[]
    for(let i=0;i<contentarr.length;i++){
        let current_string=contentarr[i].trim();
        if(current_string!==""){
            new_content.push(contentarr[i]);
        }
    }
    contentarr=new_content.join('\n\n');
    return contentarr;
    // console.log(contentarr);
}

module.exports={
    breakkey:breakfile
}