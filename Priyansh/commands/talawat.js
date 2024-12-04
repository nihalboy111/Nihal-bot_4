/**

* @author Zeeshan Altaf

* @warn Do not edit code or edit credits

* @Dont Change This Credits Otherwisw Your Bot Lol

*/

module.exports.config = {

  name: "talawat",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "Zeeshan Altaf",

  description: "Dont Change This Credit OtherWise Your Bot Is Lol",

  commandCategory: "random audio",

  usages: "Zeeshan Altaf",

  cooldowns: 5,

  dependencies: {

    "request":"",

    "fs-extra":"",

    "axios":""

  }

};



module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

const axios = global.nodemodule["axios"];

const request = global.nodemodule["request"];

const fs = global.nodemodule["fs-extra"];

   var hi = ["بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ                   قرآن کہتا ہے ‏                                      اور ہم نے محمدﷺ کو تمام جہانوں کیلئے رحمت بنا کر بھیجا"];

  var know = hi[Math.floor(Math.random() * hi.length)];

  var link = [

   "https://drive.google.com/uc?id=1-9idslRZAmPWrktKMRWywsOGTrhJwufn",



   "https://drive.google.com/uc?id=1-cSfVhLzFR7-2OEqi_r_h7WPwyztNbX9",



   "https://drive.google.com/uc?id=1zkzDYqsYys7idKeV3sxtDBO2zYLcce78",



   "https://drive.google.com/uc?id=1-h4QAwp0fbOuiI02wBWHgnlZ67OcntXh",



   "https://drive.google.com/uc?id=1-2Npr1WfC5U_vUtX-ocRbs-92WfeO3C4",



   "https://drive.google.com/uc?id=1zs5vmoljY7MS8pfNf6_HidfucP0-Qvu_",



   "https://drive.google.com/uc?id=1EkEL_ci9pCAVdqLed23EI-Wk_xem6jnn",



   "https://drive.google.com/uc?id=1-CIHqFkF6Zj3IJ6u4OuN5Z_rBL02ICba",



   "https://drive.google.com/uc?id=1-CoomuQjCU0lzpVf87E0zBQrR-S9nHVj"];

     var callback = () => api.sendMessage({body:` ✨ ${know} 🌸 

    *ADMIN MIAN AMIR`,attachment: fs.createReadStream(__dirname + "/cache/26.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/26.mp3"));    

      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/26.mp3")).on("close",() => callback());

   };