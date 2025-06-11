//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURMM3lyVlFaN2FKSHRGN05yU083eXJWZzhvendrVS9Td1pJV0Fob1JYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFpCQmZLdFBaeUxjS1JZb0p1SVE1OG5MOU1NWjZUS0ZteUFZVWQzNXdWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UDZJbmozcjU0VFBwRXlTWWhFQkpiUDBJcUtWajFYSE9IWVQ5YUplSFhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjc3hIaE9WbkI3UFo0TFN4dlNIKzJGbTB5QVp6bkV1QVh3WjVpNllvMEh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJZXYzZlpzNXNja29vYW9wOHBhWk1KbThaaEdueUplazMwREdkU1g1bmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCb0hFUkZwbzY5NFZSTHZva2dyRDBPVDFKZ3FnVlVsRlJkbHlYUG1lUWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0YvZUNkaFAySHdUY0p3Q1VSSkpxSmI1M3FhdGlmdHZhMkFGVENHNGRrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUg0WGRXMktYNmJ6cDcyeEhZMUNiYmNLK2drbWh1R2dKeEx2REdCeEhHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEvQjNOdHFXV0NDWkJKZUY3elRtRHdVQlIyMnRsOUxPU3o0OXZTVVBZTHlQUFh2SjlsWWVIZjE1dUJUMUFGbUlwVi83eUZ4dDE1eTlpbnp2NXBoeGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJIRk85TFVpK1IyVldlOGs4amNkbFQ0WnZBQmdyN09YQ2x4Y1AySmc2RVJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKaGpNYjFTOVFwLWd3YjdfZlVMNGRRIiwicGhvbmVJZCI6ImU1YzIyYjY1LWZmNGUtNDNmNy05NmVkLWE1YTFmMGQwNzJlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMTVBRTluelM1Sm9HK0FjMnAvRUdFeTRWZEk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmNNWGpZMkIvUHVicGo5dmVaZWpMMzQ0aldJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhKM1RCSzRZIiwibWUiOnsiaWQiOiI5NDc0MzM2MzIzMDo4NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYzNzU1MDQ4MjI3MDU3Ojg0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTURKcGIwRUVQYjlvOElHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMis3eDRMbVVZcStXYUFSbWE1WU9vZVJraElrNmlWMEljRmR2TWhBcWFtRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU09qdDFDTndHV1pZV25sbTNoL2c1NHJqZW9tYTVyelBodmNiY0VpWUJZcFlLQTJaQmRvTTNXcVJWSGt6WFV0bDJFaGN6N3V1MVVVaXAxQU94RjBpQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IndTc2VJcC9tbWNjemp5QVY1MC9wOUxTeWJBMERSWWd2UEllaXk4anZWbkhaOXFxN2RoOGhrMURLNnc1Y2ZCbEprTnI5TmFmMWtveHk0SGZFbjlpc2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDMzNjMyMzA6ODRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHZ1OGVDNWxHS3ZsbWdFWm11V0RxSGtaSVNKT29sZENIQlhieklRS21waCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NjE0MzQxLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || "github token without ghp_",
    GITHUB_USERNAME: process.env.GITHUB_USERNAME || "github username",
    SUDO: process.env.SUDO ? process.env.SUDO.split(",") : ["94717775628", "94758775628"],
    PORT: process.env.PORT || "8000",
    SESSION_DIR: process.env.SESSION_DIR || "session",
    FOOTER: process.env.FOOTER || "> QUEEN ANJU XPRO\n> Developed by Mr. Rashmika\n> GitHub Repository: github.com/Mrrashmika/QUEEN_ANJU_xPro\n\ud83c\udf1f Premium Version | Advanced Features | Secure & Reliable \ud83c\udf1f\n\u00a9 2025 QUEEN ANJU XPRO. All rights reserved." 
  };
  
