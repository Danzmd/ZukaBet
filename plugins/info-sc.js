/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Lagi Nyari Sc Ya Kak? 

Nih Link Sc Nya Dibawah :

Pm ownernya kak kalo mau scnya

_*DANZBOT*_`
conn.sendBut(m.chat, esce, wm3, 'OWNER', 'OWNER', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['owner']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
