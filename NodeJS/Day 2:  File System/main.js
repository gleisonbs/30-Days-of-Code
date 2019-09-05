const fs = require('fs')

console.log(process.cwd())

const filepath = '.'

// WRITE TO FILE -------------------------------------------------------------
const newFileContents = 'This is a new file writen with node.js'
fs.writeFile(`${filepath}/newFile.txt`, newFileContents, (err) => {
    if (err)
        throw err
    console.log('File saved Async')
})

fs.writeFileSync(`${filepath}/newFile.txt`, newFileContents)
console.log('File saved Sync')
// WRITE TO FILE -------------------------------------------------------------

// APPEND TO FILE -------------------------------------------------------------
const newLine = '\nLine appended with node.js'
fs.appendFile(`${filepath}/newFile.txt`, newLine, (err) => {
    if (err)
        throw err
    console.log('New line appended Async')
})

fs.appendFileSync(`${filepath}/newFile.txt`, newLine)
console.log('New line appended Sync')
// APPEND TO FILE -------------------------------------------------------------

// READ FROM FILE -------------------------------------------------------------
fs.readFile(`${filepath}/newFile.txt`, (err, data) => {
    if (err)
        throw err

    console.log(`A Content: ${data}`)
})

const fileContents = fs.readFileSync(`${filepath}/newFile.txt`)
console.log(`S Content: ${fileContents}`)
// READ FROM FILE -------------------------------------------------------------

// RENAME FILE -------------------------------------------------------------
fs.rename('newFile.txt', 'myFile.txt', (err) => {
    if (err)
        throw err
    console.log('File renamed succesfully Async')
})

//fs.renameSync('newFile.txt', 'myFile.txt')
//console.log('File renamed succesfully Sync')
// RENAME FILE -------------------------------------------------------------

// DELETE FILE -------------------------------------------------------------
if (fs.existsSync('myFile.txt')) {
    console.log('The file exists')
    fs.unlink('myFile.txt', (err) => {
        if (err)
            throw err
        console.log('File deleted succesfully Async')
    })
}

// fs.unlinkSync('myFile.txt')
// console.log('File deleted succesfully Sync')
// DELETE FILE -------------------------------------------------------------