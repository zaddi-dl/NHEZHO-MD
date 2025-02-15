const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
zokou({
  'nomCom': "number",
  'aliases': ['checknum', 'validate', 'numinfo', "valid"],
  'reaction': '📞',
  'categorie': 'General'
}, async (_0xc42b14, _0x51608, _0x500c77) => {
  const {
    repondre: _0x4c7cba,
    arg: _0x5e5043,
    ms: _0x1de4a5
  } = _0x500c77;
  try {
    if (!_0x5e5043 || _0x5e5043.length === 0x0) {
      return _0x4c7cba("Please enter a phone number to validate.");
    }
    const _0x1e9ee7 = _0x5e5043.join(" ");
    const _0x3ce845 = await fetch('https://tajammalmods.xyz/Validater.php?num=' + _0x1e9ee7);
    const _0x32a97d = await _0x3ce845.json();
    if (_0x32a97d.valid) {
      const _0xc26e32 = _0x32a97d.carrier;
      const _0x1a89c7 = _0x32a97d.country;
      const _0x170eb7 = _0x32a97d.international_format;
      const _0x12ba84 = _0x32a97d.national_format;
      const _0x1cc3bd = _0x32a97d.line_type === 0x1 ? "Mobile" : "Landline";
      const _0x1fc765 = _0x32a97d.location;
      const _0x2b5ef8 = _0x32a97d.time_zones[0x0];
      await _0x4c7cba("Phone Number Validation:\n\n*Carrier:* " + _0xc26e32 + "\n*Country:* " + _0x1a89c7 + "\n*International Format:* " + _0x170eb7 + "\n*National Format:* " + _0x12ba84 + "\n*Line Type:* " + _0x1cc3bd + "\n*Location:* " + _0x1fc765 + "\n*Time Zone:* " + _0x2b5ef8 + "\n\n> *POWERED BY FLASH-MD*");
    } else {
      await _0x4c7cba("The phone number is invalid!");
    }
  } catch (_0x4ae688) {
    _0x4c7cba("There was an error processing your request. Please try again later.");
  }
});
zokou({
  'nomCom': "tech",
  'reaction': '📰',
  'categorie': 'News'
}, async (_0x23cfcf, _0x5d2c66, _0x3eadaf) => {
  const {
    repondre: _0x6c74f5,
    ms: _0x430260
  } = _0x3eadaf;
  try {
    const _0x1c5787 = await axios.get("https://fantox001-scrappy-api.vercel.app/technews/random");
    const _0x530892 = _0x1c5787.data;
    const {
      thumbnail: _0x1f79b5,
      news: _0x2169c4
    } = _0x530892;
    const _0x5aa232 = "*TECH NEWS*\n\n" + _0x2169c4 + "\n\n*Powered*";
    await _0x5d2c66.sendMessage(_0x23cfcf, {
      'image': {
        'url': _0x1f79b5
      },
      'caption': _0x5aa232
    }, {
      'quoted': _0x430260
    });
  } catch (_0x52491a) {
    console.error("Error fetching tech news:", _0x52491a);
    await _0x6c74f5("Sorry, there was an error retrieving the news. Please try again later.\n" + _0x52491a);
  }
});
zokou({
  'nomCom': "pair",
  'reaction': '📡',
  'categorie': 'User   '
}, async (chat, message, context) => {
  const {
    repondre: respond,
    arg: args,
    ms: meta
  } = context;

  try {
    if (!args || args.length === 0) {
      return respond("Usage example: .pair 255734980103.");
    }
    
    await respond("Retrieving your pairing code..... One moment please!!!");
    
    const encodedNumber = encodeURIComponent(args.join(" "));
    const apiUrl = "https://andbad-qr-k71b.onrender.com/pair?number=" + encodedNumber;
    const apiResponse = await axios.get(apiUrl);
    const responseData = apiResponse.data;

    if (responseData && responseData.code) {
      const pairingCode = responseData.code;
      const messageContent = "Your pairing code is: *" + pairingCode + "*\nUse it to link your WhatsApp within the next minute before it expires.\nHappy bot deployment!!!\n\n> *POWERED BY andbad*";
      
      await respond(messageContent);
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (error) {
    console.error("Error retrieving the API response:", error.message);
    respond("Error retrieving the API response.");
  }
});
zokou({
  'nomCom': "mail",
  'aliases': ['tempmail', 'temp'],
  'reaction': '📧',
  'categorie': "General"
}, async (_0x15d59a, _0x4afeec, _0xfb2be5) => {
  const {
    repondre: _0x389c8d,
    prefixe: _0x1348c1,
    ms: _0xd52df1
  } = _0xfb2be5;
  try {
    const _0x30ee20 = Math.random().toString(0x24).substring(0x2, 0xc);
    const _0x231d8d = _0x30ee20 + "@1secmail.com";
    await _0x4afeec.sendMessage(_0x15d59a, {
      'text': "Your temporary email is: " + _0x231d8d + "\n\nYou can use this email for temporary purposes. I will notify you if you receive any emails."
    }, {
      'quoted': _0xd52df1
    });
    const _0x1e54ea = _0x49a817 => {
      const _0x34f8c3 = /(https?:\/\/[^\s]+)/g;
      return _0x49a817.match(_0x34f8c3);
    };
    const _0x2584e2 = async () => {
      try {
        const _0x52ad21 = await fetch("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x30ee20 + "&domain=1secmail.com");
        const _0x14f845 = await _0x52ad21.json();
        if (_0x14f845 && _0x14f845.length > 0x0) {
          for (const _0x473566 of _0x14f845) {
            const _0x344bd6 = await fetch("https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x30ee20 + "&domain=1secmail.com&id=" + _0x473566.id);
            const _0x4784a4 = await _0x344bd6.json();
            const _0x4ce790 = _0x1e54ea(_0x4784a4.textBody);
            const _0x392106 = _0x4ce790 ? _0x4ce790.join("\n") : "No links found in the email content.";
            await _0x4afeec.sendMessage(_0x15d59a, {
              'text': "You have received a new email!\n\nFrom: " + _0x4784a4.from + "\nSubject: " + _0x4784a4.subject + "\n\n" + _0x4784a4.textBody + "\n\nLinks found:\n" + _0x392106
            }, {
              'quoted': _0xd52df1
            });
          }
        }
      } catch (_0x43267d) {
        console.error("Error checking temporary email:", _0x43267d.message);
      }
    };
    const _0x3b8e24 = setInterval(_0x2584e2, 0x7530);
    setTimeout(() => {
      clearInterval(_0x3b8e24);
      _0x4afeec.sendMessage(_0x15d59a, {
        'text': "Your temporary email session has ended. Please create a new temporary email if needed."
      }, {
        'quoted': _0xd52df1
      });
    }, 0x927c0);
  } catch (_0x1730b7) {
    console.error("Error generating temporary email:", _0x1730b7.message);
    await _0x4afeec.sendMessage(_0x15d59a, {
      'text': "Error generating temporary email. Please try again later."
    }, {
      'quoted': _0xd52df1
    });
  }
});
zokou({
  'nomCom': "gpt2", // Command name
  'reaction': '📡', // Reaction emoji
  'categorie': 'AI' // Category
}, async (context, user, params) => {
  const {
    respond: respondFunction,
    ms: messageService,
    arg: args
  } = params;

  // Check if there are arguments provided
  if (!args || !args[0]) {
    return respondFunction("YES!\n _I'm listening to you._");
  }

  try {
    // Join the arguments into a single string
    const userMessage = args.join(" ");
    // Fetch response from the AI API
    const response = await fetch('http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=' + encodeURIComponent(userMessage));
    const data = await response.json();
    
    // Send the AI's response back to the user
    await respondFunction(data.cnt);
  } catch (error) {
    // Handle any errors that occur during the fetch
    respondFunction("Something went wrong...");
  }
});

const Groq = require('groq-sdk');

zokou({
  'nomCom': "gpt2", // Command name
  'reaction': '📡', // Reaction emoji
  'categorie': 'AI' // Category
}, async (context, user, params) => {
  const {
    respond: respondFunction,
    ms: messageService,
    arg: args
  } = params;

  // Check if there are arguments provided
  if (!args || !args[0]) {
    return respondFunction("YES!\n _I'm listening to you._");
  }

  try {
    // Join the arguments into a single string
    const userMessage = args.join(" ");
    // Initialize Groq client
    const client = new Groq.Client({ apiKey: global.key.groq });
    // Fetch response from the Groq API
    const response = await client.query(userMessage);
    
    // Send the AI's response back to the user
    await respondFunction(response.data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    await respondFunction("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "dalle",
  'aliases': ["dall", "dal"],
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x2c97cc, _0x338749, _0x49b5cd) => {
  const {
    repondre: _0x6162b8,
    arg: _0x34188f,
    ms: _0x3ce799
  } = _0x49b5cd;
  try {
    if (!_0x34188f || _0x34188f.length === 0x0) {
      return _0x6162b8("Please enter the necessary information to generate the image.");
    }
    const _0x5bb7e1 = _0x34188f.join(" ");
    const _0x3ed3ee = "https://widipe.com/dalle?text=" + _0x5bb7e1;
    _0x338749.sendMessage(_0x2c97cc, {
      'image': {
        'url': _0x3ed3ee
      },
      'caption': "*Powered by FLASH-MD*"
    }, {
      'quoted': _0x3ce799
    });
  } catch (_0x119122) {
    console.error('Erreur:', _0x119122.message || "Une erreur s'est produite");
    _0x6162b8("Oops, an error occurred while processing your request");
  }
});
zokou({
  nomCom: "gpt",
  aliases: ["chatgpt"],
  reaction: "🤖",
  categorie: "AI",
  desc: "Fetches AI responses from the Gemini API based on a provided prompt."
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    if (!arg || arg.length === 0) {
      return repondre("Please provide a prompt for the Gemini AI.");
    }

    // Join the arguments into a single string
    const question = arg.join(" ");
    
    // Fetch response from the Gemini API
    const response = await fetch("https://www.noobs-api.000.pe/dipto/gemini?prompt=" + encodeURIComponent(question));
    
    if (!response.ok) {
      return repondre("Failed to get a response from the Gemini AI. Please try again later.");
    }

    const data = await response.json();
    
    if (data && data.dipto) {
      const result = data.dipto;
      await repondre(result);
    } else {
      await repondre("Could not retrieve a response from Gemini AI. Please try again later.");
    }
  } catch (error) {
    console.error(error);
    await repondre("There was an error processing your request. Please try again later.");
  }
});
zokou({
  'nomCom': "gemini",
  'reaction': '🤗',
  'categorie': 'AI'
}, async (_0x266164, _0x1eb32c, _0x2c2713) => {
  const {
    repondre: _0x5e569a,
    arg: _0xea7c04,
    ms: _0x458533
  } = _0x2c2713;
  try {
    if (!_0xea7c04 || _0xea7c04.length === 0x0) {
      return _0x5e569a("Hello am *FLASH-MD.* an AI developed by ANDBAD.\n\n What help can I offer you today?");
    }
    const _0x1a05b7 = _0xea7c04.join(" ");
    const _0x1665a8 = await fetch('https://widipe.com/gemini?text=' + _0x1a05b7);
    const _0x449374 = await _0x1665a8.json();
    if (_0x449374 && _0x449374.result) {
      const _0x17c283 = _0x449374.result;
      const _0x2c0cf9 = _0x17c283.match(/```([\s\S]*?)```/);
      const _0x4f713e = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FOLLOW 🤍 CHANNEL",
          'url': "https://whatsapp.com/channel/"
        })
      }];
      if (_0x2c0cf9) {
        const _0x36bcc4 = _0x2c0cf9[0x1];
        _0x4f713e.unshift({
          'name': 'cta_copy',
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 COPY YOUR CODE",
            'id': "copy_code",
            'copy_code': _0x36bcc4
          })
        });
        const _0x4efcb4 = generateWAMessageFromContent(_0x266164, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x17c283
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *POWERED BY ANDBAD*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x4f713e
                })
              })
            }
          }
        }, {});
        await _0x1eb32c.relayMessage(_0x266164, _0x4efcb4.message, {
          'messageId': _0x4efcb4.key.id
        });
      } else {
        const _0x156368 = generateWAMessageFromContent(_0x266164, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': _0x17c283
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "> *POWERED BY ANDBAD*"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': _0x4f713e
                })
              })
            }
          }
        }, {});
        await _0x1eb32c.relayMessage(_0x266164, _0x156368.message, {
          'messageId': _0x156368.key.id
        });
      }
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x545d02) {
    console.error("Error getting response:", _0x545d02.message);
    _0x5e569a("Error getting response.");
  }
});
zokou({
  'nomCom': "calc",
  'aliases': ["cal", "calculate"],
  'reaction': '🔢',
  'categorie': "General"
}, async (_0x5921a6, _0x2e3a02, _0x54cc6d) => {
  const {
    repondre: _0x42ce14,
    arg: _0x3c1020,
    ms: _0x55e6b8
  } = _0x54cc6d;
  if (!_0x3c1020 || _0x3c1020.length === 0x0) {
    return _0x42ce14("Please insert math calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  const _0xa0ab30 = _0x3c1020.join(" ");
  const _0x6127e3 = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0xa0ab30);
  const _0xa91128 = await _0x6127e3.json();
  await _0x42ce14(_0xa91128.result);
  console.log(_0xa91128.completion);
});
zokou({
  'nomCom': "best-wallp",
  'aliases': ['bestwal', "best", 'bw'],
  'reaction': '🙌',
  'categorie': "PICS"
}, async (_0x163980, _0x17dc05, _0x2ec021) => {
  const {
    repondre: _0xb20711,
    arg: _0x3f486a,
    ms: _0x169974
  } = _0x2ec021;
  const _0x1c95dd = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x5d5bc4 = await _0x1c95dd.json();
  const _0x4353fb = _0x5d5bc4.urls.regular;
  let _0x492d96 = {
    'image': {
      'url': _0x4353fb
    },
    'caption': "*POWERED BY ANDBAD-MD*"
  };
  return await _0x17dc05.sendMessage(_0x163980, _0x492d96, {
    'quoted': _0x169974
  });
});
zokou({
  'nomCom': "random",
  'reaction': '🥂',
  'categorie': "PICS"
}, async (_0x22529c, _0x1dbc66, _0x20d62d) => {
  const {
    repondre: _0xe28fec,
    arg: _0x294980,
    ms: _0x22b058
  } = _0x20d62d;
  const _0x61dcc3 = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
  const _0x58610f = await _0x61dcc3.json();
  const _0x16084b = _0x58610f.urls.regular;
  let _0x1870da = {
    'image': {
      'url': _0x16084b
    },
    'caption': "*POWERED BY ANDBAD*"
  };
  return await _0x1dbc66.sendMessage(_0x22529c, _0x1870da, {
    'quoted': _0x22b058
  });
});
zokou({
  'nomCom': "nature",
  'reaction': '🦗',
  'categorie': "PICS"
}, async (_0x46a77f, _0x517574, _0x500ffb) => {
  const {
    repondre: _0x133c43,
    arg: _0xd6357f,
    ms: _0x121316
  } = _0x500ffb;
  const _0x3168c1 = await fetch('https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc');
  const _0x753750 = await _0x3168c1.json();
  const _0x37756c = _0x753750.urls.regular;
  let _0x2df8b4 = {
    'image': {
      'url': _0x37756c
    },
    'caption': "*POWERED BY ANDBAD*"
  };
  return await _0x517574.sendMessage(_0x46a77f, _0x2df8b4, {
    'quoted': _0x121316
  });
});
zokou({
  'nomCom': "time",
  'aliases': ["now", "live", "moment"],
  'reaction': '⌚',
  'categorie': "General"
}, async (_0xb00379, _0x5206a1, _0x335312) => {
  const {
    repondre: _0x10e76d,
    arg: _0x11f077,
    ms: _0x35801f
  } = _0x335312;
  try {
    if (!_0x11f077 || _0x11f077.length === 0x0) {
      return _0x10e76d("Enter the name of the country you want to know its time and date");
    }
    const _0x54401d = _0x11f077.join(" ");
    const _0x92fada = await fetch("https://levanter.onrender.com/time?code=" + _0x54401d);
    const _0x23f003 = await _0x92fada.json();
    const _0x129939 = _0x23f003.result[0x0].name;
    const _0x38f95e = _0x23f003.result[0x0].time;
    const _0x3332e9 = _0x23f003.result[0x0].timeZone;
    await _0x10e76d("Live Time in *" + _0x129939 + "* Stats:\n\n*Date & Time:* " + _0x38f95e + "\n*TimeZone:* " + _0x3332e9 + "\n\n> *POWERED BY ANDBAD-MD*");
  } catch (_0x5b8cd2) {
    _0x10e76d("That country name is incorrect!");
  }
});
zokou({
  'nomCom': "lines",
  'reaction': '🫵',
  'categorie': "Fun"
}, async (_0x57baf4, _0x1f839f, _0x52b256) => {
  const {
    repondre: _0x4d8435,
    arg: _0x9a8b05,
    ms: _0x35c275
  } = _0x52b256;
  const _0x1f27e0 = await fetch("https://api.maher-zubair.tech/misc/lines");
  const _0x3ec766 = await _0x1f27e0.json();
  await _0x4d8435(_0x3ec766.result);
  console.log(_0x3ec766.completion);
});
zokou({
  'nomCom': "insult",
  'reaction': '💀',
  'categorie': 'Fun'
}, async (_0x7345fc, _0x4f2a4b, _0x2ebea8) => {
  const {
    repondre: _0x50c4be,
    arg: _0x55cf64,
    ms: _0x5932d2
  } = _0x2ebea8;
  const _0x4e2b6d = await fetch("https://api.maher-zubair.tech/misc/insult");
  const _0x56e5d4 = await _0x4e2b6d.json();
  await _0x50c4be(_0x56e5d4.result);
  console.log(_0x56e5d4.completion);
});
zokou({
  'nomCom': "enhance",
  'reaction': '💥',
  'categorie': "User"
}, async (_0x2402f6, _0x1d0654, _0x3df495) => {
  const {
    repondre: _0x402ace,
    arg: _0x103214,
    ms: _0x4960a2
  } = _0x3df495;
  try {
    if (!_0x103214 || _0x103214.length === 0x0) {
      return _0x402ace("Please enter the Url of the image you want to enhance!");
    }
    const _0x14303b = _0x103214.join(" ");
    const _0x430f88 = "https://api.maher-zubair.tech/maker/enhance?url=" + _0x14303b;
    _0x1d0654.sendMessage(_0x2402f6, {
      'image': {
        'url': _0x430f88
      },
      'caption': "*Enhanced by ANDBAD*"
    }, {
      'quoted': _0x4960a2
    });
  } catch (_0x5e2f4b) {
    console.error('Erreur:', _0x5e2f4b.message || "Une erreur s'est produite");
    _0x402ace("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': 'dare',
  'reaction': '😁',
  'categorie': "Fun"
}, async (_0x441810, _0x49f70e, _0x5560e8) => {
  const {
    repondre: _0x14aa8f,
    arg: _0x242526,
    ms: _0x34b160
  } = _0x5560e8;
  const _0x5ce1af = await fetch("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
  const _0x197195 = await _0x5ce1af.json();
  await _0x14aa8f(_0x197195.result);
  console.log(_0x197195.completion);
});
zokou({
  'nomCom': "truth",
  'reaction': '🤩',
  'categorie': 'Fun'
}, async (_0x52257e, _0x544d31, _0x279cb5) => {
  const {
    repondre: _0x42fdef,
    arg: _0x20906f,
    ms: _0x53e8da
  } = _0x279cb5;
  const _0x57946c = await fetch('https://shizoapi.onrender.com/api/texts/truth?apikey=shizo');
  const _0x27a10a = await _0x57946c.json();
  await _0x42fdef(_0x27a10a.result);
  console.log(_0x27a10a.completion);
});
zokou({
  'nomCom': "applenews",
  'reaction': "🗞️",
  'categorie': "NEWS"
}, async (_0x144eea, _0x26a27f, _0x45bc33) => {
  const {
    repondre: _0x307696,
    arg: _0x1070ac,
    ms: _0x3bfa44
  } = _0x45bc33;
  try {
    const _0x44935c = await fetch('https://api.maher-zubair.tech/details/ios');
    const _0x3271b7 = await _0x44935c.json();
    if (_0x3271b7 && _0x3271b7.status === 0xc8 && _0x3271b7.result) {
      const _0x4c0027 = _0x3271b7.result;
      const _0x38b364 = "\n*APPLE NEWS:*\n\n\n- *Title:* " + _0x4c0027.title + "\n\n- *Description:* " + _0x4c0027.desc.split("\n")[0x0] + "...\n- *Read More:* " + _0x4c0027.link + "\n\n\n> Powered by *©ANDBAD*";
      const _0x3c13a7 = _0x4c0027.images.find(_0x5d3e5c => _0x5d3e5c && _0x5d3e5c !== 'https://images.macrumors.com/images-new/1x1.trans.gif');
      if (_0x3c13a7) {
        await _0x26a27f.sendMessage(_0x144eea, {
          'image': {
            'url': _0x3c13a7
          },
          'caption': _0x38b364.trim()
        }, {
          'quoted': _0x3bfa44
        });
      } else {
        await _0x26a27f.sendMessage(_0x144eea, {
          'text': _0x38b364.trim()
        }, {
          'quoted': _0x3bfa44
        });
      }
    } else {
      await _0x307696("No news data found.");
    }
  } catch (_0x4a8b91) {
    console.error("Error fetching Apple news:", _0x4a8b91);
    await _0x307696("There was an error fetching the news. Please try again later.");
  }
});
zokou({
  'nomCom': 'nasanews',
  'reaction': "🗞️",
  'categorie': 'NEWS'
}, async (_0x35ed94, _0x4cf3db, _0x329470) => {
  const {
    repondre: _0x137d3b,
    arg: _0x2d055d,
    ms: _0x85e6ab
  } = _0x329470;
  try {
    const _0x1fd2f2 = await fetch("https://api.maher-zubair.tech/details/nasa");
    const _0x519fed = await _0x1fd2f2.json();
    if (_0x519fed && _0x519fed.status === 0xc8 && _0x519fed.result) {
      const _0x25ee7e = _0x519fed.result;
      const _0x500db0 = "\n* NASA NEWS:*\n\n\n- *Title:* " + _0x25ee7e.title + "\n\n- *Date:* " + _0x25ee7e.date + "\n\n- *Description:* " + _0x25ee7e.explanation.split("\n")[0x0] + "...\n\n\n> Powered by *©ANDBAD*";
      const _0x223fd9 = _0x25ee7e.url;
      if (_0x223fd9) {
        await _0x4cf3db.sendMessage(_0x35ed94, {
          'image': {
            'url': _0x223fd9
          },
          'caption': _0x500db0.trim()
        }, {
          'quoted': _0x85e6ab
        });
      } else {
        await _0x4cf3db.sendMessage(_0x35ed94, {
          'text': _0x500db0.trim()
        }, {
          'quoted': _0x85e6ab
        });
      }
    } else {
      await _0x137d3b("No news data found.");
    }
  } catch (_0x34d753) {
    console.error("Error fetching NASA news:", _0x34d753);
    await _0x137d3b("There was an error fetching the news. Please try again later.");
  }
});
zokou({
  'nomCom': "population",
  'reaction': "🗞️",
  'categorie': "NEWS"
}, async (_0x4af97c, _0x41a8e8, _0x2de4a5) => {
  const {
    repondre: _0xccbea2,
    arg: _0x2207e3,
    ms: _0x3529fc
  } = _0x2de4a5;
  try {
    const _0x3a8ab8 = await fetch("https://api.maher-zubair.tech/details/population");
    const _0x3c2f41 = await _0x3a8ab8.json();
    if (_0x3c2f41 && _0x3c2f41.status === 0xc8 && _0x3c2f41.result) {
      const _0x5d6e9b = _0x3c2f41.result;
      const _0x157f0b = "*WORLDWIDE POPULATION DATA:*\n\n\n- *Total Population:* " + _0x5d6e9b.current.total + "\n- *Male Population:* " + _0x5d6e9b.current.male + "\n- *Female Population:* " + _0x5d6e9b.current.female + "\n- *Births This Year:* " + _0x5d6e9b.this_year.births + "\n- *Deaths This Year:* " + _0x5d6e9b.this_year.deaths + "\n- *Births Today:* " + _0x5d6e9b.today.births + "\n- *Deaths Today:* " + _0x5d6e9b.today.deaths + "\n\n\n> *Powered by © CASEYRHODES XMD*";
      await _0xccbea2(_0x157f0b);
    } else {
      await _0xccbea2("No population data found.");
    }
  } catch (_0x4b7f0) {
    console.error("Error fetching population data:", _0x4b7f0);
    await _0xccbea2("There was an error fetching the population data. Please try again later.");
  }
});
zokou({
  'nomCom': 'jokes',
  'reaction': '🤩',
  'categorie': "Fun"
}, async (_0x34ca3d, _0x261a9b, _0x1033a6) => {
  const {
    repondre: _0x2fa695,
    arg: _0x3775a1,
    ms: _0x21734f
  } = _0x1033a6;
  try {
    const _0xb540d6 = await fetch("https://api.popcat.xyz/joke");
    if (!_0xb540d6.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x559bd6 = await _0xb540d6.json();
    await _0x2fa695(_0x559bd6.joke);
    console.log(_0x559bd6.joke);
  } catch (_0x141b35) {
    console.error("Error fetching joke:", _0x141b35.message);
    await _0x2fa695("Failed to fetch a joke. Please try again later.");
  }
});
zokou({
  'nomCom': "advice",
  'reaction': "🗨️",
  'categorie': "Fun"
}, async (_0xa2de23, _0x27275c, _0x1bc249) => {
  const {
    repondre: _0x39478b,
    arg: _0x5a5068,
    ms: _0x219512
  } = _0x1bc249;
  try {
    const _0xe783d7 = await fetch("https://api.adviceslip.com/advice");
    const _0x100640 = await _0xe783d7.json();
    const _0x2f9050 = _0x100640.slip.advice;
    await _0x39478b("*Here is an advice for you:* \n" + _0x2f9050);
  } catch (_0x5a0490) {
    console.error("Error:", _0x5a0490.message || "An error occurred");
    _0x39478b("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "trivia2",
  'reaction': '🤔',
  'categorie': 'Fun'
}, async (_0x3204f7, _0x204d8e, _0x88bd02) => {
  const {
    repondre: _0x579330,
    prefixe: _0x43b20f,
    ms: _0x2a0f96
  } = _0x88bd02;
  try {
    const _0x5759c9 = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    if (_0x5759c9.status !== 0xc8) {
      return _0x579330("Invalid response from the trivia API. Status code: " + _0x5759c9.status);
    }
    const _0x5ea735 = await _0x5759c9.json();
    if (_0x5ea735 && _0x5ea735.results && _0x5ea735.results[0x0]) {
      const _0x282619 = _0x5ea735.results[0x0];
      const _0x347101 = _0x282619.question;
      const _0x327083 = _0x282619.correct_answer;
      const _0x539989 = [..._0x282619.incorrect_answers, _0x327083].sort();
      const _0x91ed12 = _0x539989.map((_0x105c45, _0x25f458) => _0x25f458 + 0x1 + ". " + _0x105c45).join("\n");
      await _0x204d8e.sendMessage(_0x3204f7, {
        'text': "Here's a trivia question for you: \n\n" + _0x347101 + "\n\n" + _0x91ed12 + "\n\nI will send the correct answer in 10 seconds..."
      }, {
        'quoted': _0x2a0f96
      });
      setTimeout(async () => {
        await _0x204d8e.sendMessage(_0x3204f7, {
          'text': "The correct answer is: " + _0x327083
        }, {
          'quoted': _0x2a0f96
        });
      }, 0x2710);
    } else {
      throw new Error("Invalid response format from the trivia API.");
    }
  } catch (_0x2a37bd) {
    console.error("Error getting trivia:", _0x2a37bd.message);
    await _0x204d8e.sendMessage(_0x3204f7, {
      'text': "Error getting trivia. Please try again later."
    }, {
      'quoted': _0x2a0f96
    });
  }
});
zokou({
  'nomCom': "inspire",
  'reaction': '✨',
  'categorie': "General"
}, async (_0x4045c5, _0x5ba7da, _0x15450e) => {
  const {
    repondre: _0x36323f,
    arg: _0x2ee1f0,
    ms: _0x3c40b6
  } = _0x15450e;
  try {
    const _0x5e67cb = await fetch("https://type.fit/api/quotes");
    const _0x3e14ca = await _0x5e67cb.json();
    const _0x131cb9 = Math.floor(Math.random() * _0x3e14ca.length);
    const _0x472c18 = _0x3e14ca[_0x131cb9];
    await _0x36323f("*Here is an inspirational quote for you:* \n\"" + _0x472c18.text + "\" - " + _0x472c18.author);
  } catch (_0x2104fa) {
    console.error("Error:", _0x2104fa.message || "An error occurred");
    _0x36323f("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt4",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0xc0c6a0, _0x46f59f, _0x4455ed) => {
  const {
    repondre: _0x5488f8,
    arg: _0x5610c3,
    ms: _0x1a7054
  } = _0x4455ed;
  try {
    if (!_0x5610c3 || _0x5610c3.length === 0x0) {
      return _0x5488f8("Please ask a question.");
    }
    const _0x1c4393 = encodeURIComponent(_0x5610c3.join(" "));
    const _0x320c11 = "https://samirxpikachuio.onrender.com/gpt?content=" + _0x1c4393;
    const _0x2913f8 = await axios.get(_0x320c11);
    const _0x823fc2 = _0x2913f8.data;
    if (_0x823fc2 && _0x823fc2.message && _0x823fc2.message.content) {
      const _0x790fb0 = _0x823fc2.message.content;
      const _0x46fe6a = _0x790fb0.match(/```([\s\S]*?)```/);
      const _0x16ed68 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "FOLLOW 🤍 CHANNEL",
          'url': 'https://whatsapp.com/channel/'
        })
      }];
      if (_0x46fe6a) {
        const _0x5b3b89 = _0x46fe6a[0x1];
        _0x16ed68.unshift({
          'name': "cta_copy",
          'buttonParamsJson': JSON.stringify({
            'display_text': "📋 COPY RESULTS",
            'id': 'copy_code',
            'copy_code': _0x5b3b89
          })
        });
      }
      const _0x8338c9 = generateWAMessageFromContent(_0xc0c6a0, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': _0x790fb0
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': "> *POWERED BY CASEYRHODES XMD*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': _0x16ed68
              })
            })
          }
        }
      }, {});
      await _0x46f59f.relayMessage(_0xc0c6a0, _0x8338c9.message, {
        'messageId': _0x8338c9.key.id
      });
    } else {
      throw new Error("Invalid response format from the GPT API.");
    }
  } catch (_0x2bb69a) {
    console.error("Error getting GPT response:", _0x2bb69a.message, _0x2bb69a.response?.["data"] || "No additional data");
    _0x5488f8("Error getting response from GPT.");
  }
});
zokou({
  'nomCom': "bard",
  'aliases': ["gptbard"],
  'categorie': 'AI'
}, async (_0x4f24eb, _0x27f4a8, _0x492252) => {
  const {
    ms: _0xb9b090,
    repondre: _0x4713e9,
    arg: _0xf6258e
  } = _0x492252;
  if (!_0xf6258e[0x0]) {
    _0x4713e9("Please provide a query for Bard. Example: `bard What is the capital of Tanzania?`");
    return;
  }
  try {
    await _0x27f4a8.sendMessage(_0x4f24eb, {
      'text': "Interacting with Bard... Please wait a moment."
    }, {
      'quoted': _0xb9b090
    });
    const _0x1b7633 = _0x492252.nomAuteurMessage || "defaultUser";
    const _0x49d701 = _0xf6258e.join(" ");
    const _0x28dd58 = "https://api.guruapi.tech/ai/gpt4?username=" + _0x1b7633 + '&query=' + encodeURIComponent(_0x49d701);
    const _0x381f5c = await fetch(_0x28dd58);
    const _0x5c94fd = await _0x381f5c.json();
    if (!_0x5c94fd.msg) {
      _0x4713e9("No response received from Bard. Please try again later.");
      return;
    }
    const _0x5013c0 = _0x5c94fd.msg;
    const _0x5294e2 = [{
      'name': 'cta_url',
      'buttonParamsJson': JSON.stringify({
        'display_text': "FOLLOW 🤍 CHANNEL",
        'url': "https://whatsapp.com/channel/"
      })
    }];
    const _0x38e3dc = generateWAMessageFromContent(_0x4f24eb, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': _0x5013c0
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "> *POWERED BY CASEYRHODES XMD*"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': _0x5294e2
            })
          })
        }
      }
    }, {});
    await _0x27f4a8.relayMessage(_0x4f24eb, _0x38e3dc.message, {
      'messageId': _0x38e3dc.key.id
    });
  } catch (_0x4237ef) {
    _0x4713e9("A fatal error has occurred... \n " + _0x4237ef.message);
  }
});
