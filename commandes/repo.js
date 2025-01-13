const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
*AVAILABLE REPO AND GROUPS* 
╭─────────────────
│❍╭─────────────
│❍│▸ *CHANNEL* 
│❍⁠⁠⁠⁠│▸ *GROUP* 
│❍│▸ *REPO*
│❍⁠⁠⁠⁠╰──────────────
│❍│▸ *CHANNEL* : https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E
│❍│▸ *GROUP* : https://chat.whatsapp.com/Lcw1jJCMa6a82RDEW5XM1j
│❍│▸ *REPO* : https://github.com/caseyweb/CHARITY-MD-V2
│❍⁠⁠⁠⁠│▸ *YTUBE* : https://www.youtube.com/@Caseyrhodes01
│❍⁠⁠⁠⁠╰──────────────
╰──────────────────\n
  `;
    
let menuMsg = `
     MADE EASY BY CASEYRHODES 🍀

❍────────────────────❍`;

   try {
      await zk.sendMessage(destination, {
        'text': messageContent,
        'contextInfo': {
          'externalAdReply': {
            'title': "😊 Stay Updated with HansTz",
            'body': "Tap here for the latest updates!",
            'thumbnailUrl': "https://files.catbox.moe/wz7jmo.jpg",
            'mediaType': 1,
            'renderLargerThumbnail': true,
            'mediaUrl': "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E",
            'sourceUrl': "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E"
          }
        }
      });
    } catch (error) {
      console.error("❌ Error sending GitHub info:", error);
      repondre("❌ Error sending GitHub info: " + error.message);
    }
  });
});
