let numberingobj=require('./commands/numbering');
let nonemptobj=require('./commands/n_empt_num');
let breakfileobj=require('./commands/break')

module.exports={
    utilsobj:{
        "-n":numberingobj.numberingkey,//numbering
        "-b":nonemptobj.nonemptnumkey,//non-empty numbering
        "-s":breakfileobj.breakkey//break big line to single line
    },
    utils:["-s","-n","-b"],
    builtin:[">",">>"]
}