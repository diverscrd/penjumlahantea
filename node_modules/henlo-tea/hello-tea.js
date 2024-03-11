const cowsay = require  ('cowsay')
const emoji = require ('emoji-random-list')
function helloTea() {
    console.log(cowsay.say({text: "Hello", f: "tea"}))
    console.log(emoji.random({n: 1,  group:  'Food & Drink'})[0])
}

module.exports = helloTea