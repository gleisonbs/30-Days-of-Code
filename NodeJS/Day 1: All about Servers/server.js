const http = require('http')
const fs = require('fs')

const getPort = () => {
    let port = parseInt(process.argv[2])
    const lowerBoundPort = 1024
    const upperBoundPort = 65535
    if (Number.isInteger(port) && port >= lowerBoundPort && port <= upperBoundPort)
        return port
    
    return 3325
}

const host = '127.0.0.1'
const port = getPort()

const server = http.createServer((request, response) => {

    // Serve HTML
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (error, data) => {
        if (error)
            throw error
        response.end(data)
    })

    // Serve JSON
    // let jsonResponse = {
    //     status: 200,
    //     message: 'succesful',
    //     result: [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ],
    //     code: 2000
    // }
    // response.end(JSON.stringify(jsonResponse))

    // Serve PDF
    // response.writeHead(200, {"Content-Type": "application/pdf"});
	// fs.readFile('myPdf.pdf', (error, data) => {
	// 	if (error)
    //      response.json({'status':'error', msg: error});
	// 	else
	// 		response.end(data);
    // })
    
    // Serve audio
    // response.writeHead(200, {'Content-Type': 'audio/mp3'});
    // fs.exists('myMp3.mp3', function(exists) {
	// 	if (exists) {
	// 		const rstream = fs.createReadStream('audio.mp3');
	// 		rstream.pipe(response);
	// 	}
	// 	else
	// 		response.end("Its a 404");
    // })
    
    // Serve video
    // response.writeHead(200, {'Content-Type': 'video/mp4'});
    // fs.exists('myVideo.mp4', function(exists) {
	// 	if (exists) {
	// 		const rstream = fs.createReadStream('myVideo.mp4');
	// 		rstream.pipe(response);
	// 	}
	// 	else
	// 		response.end("Its a 404");
	// })
})

server.listen(port,host, (error) => {  
    if (error) {
        console.log(`Error occured : ${error}`);
        return
    }
  
    console.log(`Server is listening at ${host}:${port}`);
})
