/*

  !- Credits By SazxOfficial
  https://wa.me/6285820169622
  
*/

require('./settings');
const fs = require('fs');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const FileType = require('file-type');
const { exec } = require('child_process');
const { say } = require('cfonts')
const { Boom } = require('@hapi/boom');

const { default: WAConnection, generateWAMessageFromContent, 
prepareWAMessageMedia, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestWaWebVersion, proto, PHONENUMBER_MCC, getAggregateVotesInPollMessage } = require('@whiskeysockets/baileys');

const pairingCode = true
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const DataBase = require('./source/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./source/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, randomToken } = require('./library/function');
const { welcomeBanner, promoteBanner } = require("./library/welcome.js")

async function startingBot() {
const store = await makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState('session');
const { version } = await axios.get("https://raw.githubusercontent.com/nstar-y/Bail/refs/heads/main/src/Defaults/baileys-version.json").then(res => res.data)
	
const Sky = await WAConnection({
version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
browser: ['ios', 'Chrome', '10.15.7'],
printQRInTerminal: !pairingCode, 
logger: pino({ level: "silent" }),
auth: state,
generateHighQualityLinkPreview: true,     
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By RafatharCode'
}}})
	
if (pairingCode && !Sky.authState.creds.registered) {
let phoneNumber
phoneNumber = await question(chalk.blue.bold('Masukan Nomor WhatsApp :\n'))
phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
let code = await Sky.requestPairingCode(phoneNumber);
code = code.match(/.{1,4}/g).join(" - ") || code
await console.log(`${chalk.blue.bold('Kode Pairing')} : ${chalk.white.bold(code)}`)
}
	
Sky.ev.on('creds.update', await saveCreds)

Sky.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect, receivedPendingNotifications } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.connectionLost) {
console.log('Connection to Server Lost, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('Connection closed, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart Required...');
startingBot()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection Timed Out, Attempting to Reconnect...');
startingBot()
} else if (reason === DisconnectReason.badSession) {
console.log('Delete Session and Scan again...');
startingBot()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Close current Session first...');
startingBot()
} else if (reason === DisconnectReason.loggedOut) {
console.log('Scan again and Run...');
exec('rm -rf ./session/*')
process.exit(1)
} else if (reason === DisconnectReason.Multidevicemismatch) {
console.log('Scan again...');
exec('rm -rf ./session/*')
process.exit(0)
} else {		
Sky.end(`Unknown DisconnectReason : ${reason}|${connection}`)
}}
if (connection == 'open') {
const ownerNumber = "6282260875548"; // Ganti dengan nomor owner utama (tanpa +)
const ownerJid = `${ownerNumber}@s.whatsapp.net`;
const ownerName = `${namaOwner}`; // Ganti dengan nama pemilik bot
const botNumber = `${Sky.user.id.split(":")[0]}@s.whatsapp.net`;
const currentDate = new Date();
const formattedDate = `${currentDate.toLocaleDateString()}`;
const formattedDate2 = `${currentDate.toLocaleTimeString()}`;
const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });

// Mengirim pesan ke nomor bot
Sky.sendMessage(
    botNumber, 
    {
        text: `🌟 *#- Bot Sudah Aktif 🟢* 🌟

📢 *Jangan lupa subscribe ke YouTube Developer!*  
👉 https://www.youtube.com/@rafatharcode444
💡 Dapatkan pembaruan terbaru tentang script ini!


✅ *Pemilik Bot:*
- 👑 *Pemilik:* ${ownerName} 
- 🤖 *Owner Pengguna:* ${ownerNumber}
- 📌 *Nomor Bot:* ${botNumber}

📌 *Informasi Bot:*
- ✨ *Nama:* ${namaOwner}
- 🤖 *Owner:* ${owner}
- 📅 *Tanggal:* ${formattedDate}
- 🕛 *Waktu:* ${formattedDate2}
- 📆 *Hari:* ${dayOfWeek}

📣 *Link Grup WhatsApp:*  
🔗 Bergabung Grup:\nhttps://chat.whatsapp.com/HXNIKehdsac53obygXOEAC

📣 *Link Channel WhatsApp:*  
🔗 Ikuti Channel:\nhttps://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s

⚙️ *#- RafatharCode Botz Version Pribadi*`
    }
);

// Mengirim pesan notifikasi kepada pemilik utama (owner)
Sky.sendMessage(
    ownerJid, 
    {
        text: `🔔 *Notifikasi Bot Aktif* 🔔

Halo RafatharCode, bot dengan nomor ${botNumber} sudah aktif!

✅ *Pemilik Bot:*

👑 *Pemilik:* ${ownerName} 
🤖 *Owner Pengguna:* ${ownerNumber}
📌 *Nomor Bot:* ${botNumber}
📅 *Tanggal:* ${formattedDate}
🕛 *Waktu:* ${formattedDate2}
📆 *Hari:* ${dayOfWeek}

Pastikan semuanya berjalan dengan baik, terima kasih!`
    }
);

try {
    // Mencoba mengikuti newsletter
    Sky.newsletterFollow("120363318521671268@newsletter");
} catch (error) {
    // Penanganan error saat mengikuti newsletter
    console.error("Terjadi kesalahan saat mengikuti newsletter:", error.message || error);
}
console.log(chalk.magenta.italic(`RafatharCide Botz Connected ✓\n\n`))
		} else if (receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
		}
	});

await store.bind(Sky.ev)	
await Solving(Sky, store)
	
Sky.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(Sky, message, store);
})

Sky.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 
Sky.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})
	
Sky.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await Sky.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await Sky.profilePictureUrl(n, 'image');
} catch {
profile = 'https://img102.pixhost.to/images/294/559933293_sazxofficial.jpg';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await Sky.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await Sky.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await Sky.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await Sky.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return Sky

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});