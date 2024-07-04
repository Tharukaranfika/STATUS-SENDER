//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0I3dVBRMTF5T2dvMnhLKzM5dTZxWUZNSVlaYThIRFliNkZKdXdWSWVGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTV3eGVYSlJPa2Irb1QxdWROWm5EWXBtMlQvYU51cmtVWFloaHd5bEEzcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTDFqN2hpZEZmdGVvRFN2L1ZIYWdDWmZHcHIwdk9mZkp1TE1SZXBqZ0h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbjN3bjFqYzBLSW5rQ1FxaE1ObTZtM3BlVEpaLzV2Q3VGNytFN1FHcHdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHdGVvVXRxNldUcmg3N1pENWs3WnpldFF5TUpPREZraVhzeUVicWdXRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRCOFljQ0lDM1lpRUpRa3BIU2FidmN1N0tnU2Zwb2gvdXIrU1NKNW5qUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZzU3VlYXVlYUZQUUdxbjdZeWtxb2ZnQzNHdGJYVmVSazMwWVFvS1lYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEt2QlNodk9sUWdqR2N4TStKbjlyRWxxYjFHcVhMVEdaYVgwNGpkT3JtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxCYW5ubjlrYWRESmZMSDRzNzYzMmo1Tm5rT1lSUVowOW4xTXZ2QzZ6YUNjQ1FJaXdZelZyREs3NnNKRFZlUmV0WlIwNnRjRWd5eml4eGNQRGNzV0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiI4c2l4and6d3V1a1ZuRlU1Zk1zSWV0SHYraDF1cUlsRk5QZVV6MjA1NGRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxQnRfbzEybVJ3MmFKc1F1eEVWRlRBIiwicGhvbmVJZCI6IjNhY2MxMjI1LTlkYjctNDc2OS05NWM3LTYzZWY3OTIyMjVjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3SEVoOTlvbFE4YjBhRkJjL1RwTTFPUU1oZm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjU0eXJ3L0h5N3BnNTZiTHpBZTBRTkpVbDRRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUV0VKQzhOIiwibWUiOnsiaWQiOiI5NDcxMzI3MTk3Mzo4NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCS8J2Qk/CdkIDwnZCT8J2QlPCdkJJcblxuXG5cblxu8J2QilxuXG5cblxuXG7wnZCIXG5cblxuXG5cbvCdkI1cblxuXG5cblxu8J2QgFxuXG5cblxuXG7wnZCE8J2QjfCdkIMhXCIjIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPM2R2N3NERU8zTW1MUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXMUQ4UHFEck50N2swSGg1alpteGNwT0VuMWtrY1Z6V0dObXdyZFpISkZvPSIsImFjY291bnRTaWduYXR1cmUiOiJ6dFpMUkhPUGFhVFF1Tmwrb2oyaktoanBkYnRCNHR3T2VGRVp6MjBDM2l6cjBMY1d6Q3VubGZ1a0VwbHBGdXl5U2liMWs2RGdxOHRoekxZRllES2NDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYnVHZ085ell3ajIwRUJvNWlDN1hCdmpTdlRvZU01cWdGNEQzTmVyMGo2NlMwQ2N4UG1GUFpOMkEvYjBSSk1lOXplMWtxYTh4SHEyMUZLcSsyQUZhQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMzI3MTk3Mzo4NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWdFEvRDZnNnpiZTVOQjRlWTJac1hLVGhKOVpKSEZjMWhqWnNLM1dSeVJhIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMDY3NzA1fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
