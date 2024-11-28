"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*⭕𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝙼𝙳 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴 ⭕* 🙏 \n\n ' + "𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝙼𝙳 𝙸𝚂 𝙲𝙰𝙽𝚃 𝚂𝙻𝙴𝙴𝙿⏰⭕";
    let d = '                                                                           𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 𝚃𝙴𝙲𝙷🍀';
    let varmess = z + d;
    var mp4 = 'https://files.catbox.moe/nk1ppr.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
