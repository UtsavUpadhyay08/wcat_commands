#!/usr/bin/env node
let inputArr=process.argv.slice(2);
let displayobj=require('./commands/display');
let utilityobj=require('./utility');
let fs=require('fs');

let commands=[];
let files=[];
let utils=utilityobj.utils;
let builtin=utilityobj.builtin;
let utilsobj=utilityobj.utilsobj;

for(let i=0;i<inputArr.length;i++){
    if(utils.includes(inputArr[i])) commands.push(inputArr[i]);
    else if(!builtin.includes(inputArr[i])) files.push(inputArr[i]);
}

if(commands.includes("-b") && commands.includes("-n")){
    console.log("Numbering and non empty numbering cannot be applied together");
}
else{
    commands.sort();
    commands.reverse();
    let result="";
    for(let i=0;i<files.length;i++){
        if(commands.length===0) result+=displayobj.displaykey(files[i]);
        for(let j=0;j<utils.length;j++){
            if(commands.includes(utils[j])){
                result=utilsobj[utils[j]](files[i]);
                fs.writeFileSync(files[i],result);
            }
        }    
        if(result!==undefined) console.log(result);
    }
}
