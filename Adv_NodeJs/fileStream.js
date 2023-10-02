
import {promises as fsPromises} from "fs";
// fs.mkdirSync("first");
// fs.writeFileSync('first/bio.txt',"please attend the class properly");
// fs.appendFileSync('first/bio.txt',"helloji");
// fs.readFile('first/bio.txt',"UTF-8",(err,data)=>{
//     console.log(data);
// });
// fs.rename('first/bio.txt','first/file1.txt',(err)=>{
//     console.log("renamed");
// });
// fs.rmdir('first',(err)=>{
//     if(err){
//     console.log("error",err);
//     }
//     else{
//     console.log("deleted");
//     }
// });

// fs.unlink('first/file1.txt',(err)=>{
//     if(err){
//     console.log("error",err);
//     }
//     else{
//     console.log("deleted");
//     }
// });

(async()=>
{
    try{
        await fsPromises.rmdir("first",{recursive:true});
        console.log("Dir deleted");
    }
    catch(err){
        console.log(err);
    }
})();