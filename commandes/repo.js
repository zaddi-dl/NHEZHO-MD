const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, nomAuteurMessage } = commandeOptions;

    // Set timezone to GMT
    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Message content
    let infoMsg = `
*AVAILABLE REPO AND GROUPS* 
╭─────────────────
│❍╭─────────────
│❍│▸ *CHANNEL* : https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E
│❍│▸ *GROUP* : https://chat.whatsapp.com/Lcw1jJCMa6a82RDEW5XM1j
│❍│▸ *REPO* : https://github.com/caseyweb/CHARITY-MD-V2
│❍│▸ *YTUBE* : https://www.youtube.com/@Caseyrhodes01
╰──────────────────
    `;

    let menuMsg = `
     MADE EASY BY CASEYRHODES 🍀
❍────────────────────❍`;

    try {
        // Send message without using any bot image
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    title: "𝐇𝐀𝐍𝐒 MD WHATSAPP BOT",
                    body: "MADE BY 𝐇𝐀𝐍𝐒 TZ",
                    thumbnailUrl: "https://files.catbox.moe/81hhl0.jpg", // Static bot image URL
                    sourceUrl: "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E",
                    mediaType: 1
                }
            }
        }, { quoted: ms });
    } catch (error) {
        console.error("❌ Error sending GitHub info:", error);
        repondre("❌ Error sending GitHub info: " + error.message);
    }
});
