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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05zNlZIY296ZVdWQmUwM2ZYVEl2SzhQQkZOb05KUFZOMGlHcVFDQlNVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEZzUThhRDUyeEdranRZZGNCdXV4Z0x1RFBYS3NZcUd6Q1oyVHU2dU93TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ3R3RmZhLzFRTnBsa2lSUUNZR3Z1K3lyTG5Mem9ma0ROR1o3ZnhEdDJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTTZXekxCTGVOT0xEQSszTEdkTUx3NXVZUkJyMXVTM3h3ZGVSZ2gyWTBNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIWFR4UWhPSW1mRlpQSXU5MHIxdUViblBldFlGc1U1QUZsYnVteDRGMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJqanRmUGIxMk85bHdVN2M1RWlNRDZteHF4M0c5V09xVGZGQ1Y5R0JnUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NmdXJrOUFZYnZmOWJFUUZneGlNOWZFaTVNT3d2QUlXQVJlajh5SnJHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1lkUlNxMHkrKzdodjAzS0lrajIwQVJkaFNUK1dGdmt0dXREbHl2TE5Ccz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBhbHd5eGFUL2JIMEkreDVvRnZialV2MERoSWN1RHdGMTMwWGZacTBOeElOcThhNzhBSjVtd0J2UWU1Mm96S2FuQ3JMTXdTeGdsUEJhalFVSHBmZmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJlTTN6QmhRYm8rRVVwdGROK3daSkZHb1BBUXZTekVYRTN5SjhlQVNsWklzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEzMjcxOTczQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk3N0I2MkI0OENDMUM4RTEwRUZCQTdBREY0RTY1NDUzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAwNjgzMjB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNYcGl6TGlNVDZ5UDFwQTRrbmU4amciLCJwaG9uZUlkIjoiZWVjMzU1OGQtYTA1Ny00YThmLWIyMTctOWU5NzlhMmRkYWUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR5V2NRL3lMRU4renVIWWlnb3d6a25rTnR3cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBOGNRZG1zUUtNQ1hvRnhsMFNodVFqSmRVWUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDhHN0JKN1YiLCJtZSI6eyJpZCI6Ijk0NzEzMjcxOTczOjg1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QklxuXG5cblxuXG7wnZCKXG5cblxuXG5cbvCdkIhcblxuXG5cblxu8J2QjVxuXG5cblxuXG7wnZCAXG5cblxuXG5cbvCdkITwnZCN8J2QgyFcIiMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ083ZHY3c0RFTS9SbUxRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlcxRDhQcURyTnQ3azBIaDVqWm14Y3BPRW4xa2tjVnpXR05td3JkWkhKRm89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImkxdVM1YTF1TVl1WjNHZWtxdWF0Z2p3ejVIK0IrNmdVODE0ZFR0QXhLT21YYUR2aUxVNUFQanZaZHZrbUQ3TmhyZmV5K1hIS3ZLVHJyMGM0REVBRkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTRWxTRTltTGl1Ly9vbnRQazNCV1NEc1JMdnZXejlpd3ZOR2JsSTlidjFNUGN2QnJOcGVTdXpQalA4TnFYQVhLdi9LcWQ2OWVuVTBxYVlXUW1DamJpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzEzMjcxOTczOjg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ0US9ENmc2emJlNU5CNGVZMlpzWEtUaEo5WkpIRmMxaGpac0szV1J5UmEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwNjgzMTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRnZLIn0="
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
