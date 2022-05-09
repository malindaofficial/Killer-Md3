//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94761905764']
global.premium = ['94761905764']
global.ownernomer = '94767003520'
global.ownername = 'Sandun Mihiranga'
global.botname = 'Queen Elina'
global.footer = 'Saduwa Bot Inc.'
global.ig = 'https://github.com/Sandun-Mihiranga2'
global.region = 'Srilanka , Kurunegala'
global.sc = 'https://github.com/Sandun-Mihiranga2/Queen-Elina'
global.myweb = 'wa.me/94761905764'
global.packname = 'Saduwa Bot'
global.author = 'Dark Saduwaツ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'සාර්ථකය!.',
    admin: 'මෙම විධානය ඇඩ්මින් සදහා පමණක් වලංගු වේ!',
    botAdmin: 'පළමුව Bot ඇඩ්මින් වරයෙකු ලෙස පත් කරන්න!',
    owner: 'මෙම විධානය Owner සදහා පමණි!',
    group: 'මෙම විධානය සමූහ සදහා පමණි!',
    private: 'මෙම විධානය Private Chat සදහා පමණි!',
    bot: 'මෙම විධානය Bot සදහා පමණි',
    wait: 'මදක් රැදී සිටින්න...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
