const fs = require('fs')

// Find the pattern 'man' ---------------------------------------------------------------------------------------------------------
const txtFile = 'data.txt'
const myText = fs.readFileSync(txtFile).toString()
const manPattern = /man/gim
const txtMatches = myText.match(manPattern)
const txtPatternOcurrences = txtMatches.length

console.log(`${txtPatternOcurrences} ocurrences of the man pattern in ${txtFile}`)

// Find html tags -----------------------------------------------------------------------------------------------------------------
const htmlFile = 'data.html'
const myHtml = fs.readFileSync(htmlFile).toString()
const tagPattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim
const htmlMatches = myHtml.match(tagPattern)
const htmlPatternOcurrences = htmlMatches.length

console.log(`${htmlPatternOcurrences} ocurrences of the tag pattern in ${htmlFile}`)

// Validate Email -----------------------------------------------------------------------------------------------------------------
const email = 'gleison@gmail.com'
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const isValidEmail = email.match(emailPattern)
console.log(`The email address ${email} is ${isValidEmail ? 'valid' : 'invalid'}`)

// Validate Hexadecimal -----------------------------------------------------------------------------------------------------------
const hex = 'ffFF21'
const hexPattern = /^[a-fA-F0-9]+$/g
const isValidHexadecimal = hex.match(hexPattern)
console.log(`The hexadecimal ${hex} is ${isValidHexadecimal ? 'valid' : 'invalid'}`)
