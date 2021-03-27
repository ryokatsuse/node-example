const http = require('http')

// サーバーオブジェクト（EventEmitterのインスタンス生成）
const server = http.createServer()

// requestイベントのリスナ登録
server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Hello World!')
  res.end()
})


// listeningイベントのリスナ登録
server.on('listening', () => {})

server.on('error', err => {})

server.on('close', () => {})

server.listen(8000)

