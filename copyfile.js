const fs = require('fs');
const stream  = require('stream');

// const copy = (src, dest, cb) => {
//   fs.createReadStream(src)
//   .pipe(fs.createWriteStream(dest))
//   .on('finish', cb)
// }

// fs.writeFileSync('src.txt', 'コピー元のファイルだよ！')
// copy('src.txt', 'dest.txt', () => console.log('コピーDONE！'))

// const readStream = fs.createReadStream('src.txt')
// readStream
//   .on('readable', () => {
//     console.log('readable')
//     let chunk
//     // 現在読み込み可能なデータをすべて読み込む
//     while((chunk = readStream.read()) !== null) {
//       console.log(`chunk: ${chunk.toString()}`)
//     }
//   })
//   .on('end', () => console.log('end'))


// classで実装したもの
// 読み込み
class HelloReadableStream extends stream.Readable { 
  constructor(options) { 
    super(options) 
    this.languages = ['JavaScript', 'Python', 'Java', 'C#'] 
  } 

  _read(size) { 
    console.log('_read()') 
    let language 
    while ((language = this.languages.shift())) { 
      // push()でデータを流す 
      // ただし、push()がfalseを返したらそれ以上流さない 
      if (!this.push(`Hello, ${language}!\n`)) { 
        console.log('読み込み中断') 
        return 
      } 
    } 
    // 最後にnullを流してストリームの終了を通知する 
    console.log('読み込み完了') 
    this.push(null) 
  } 
} 

// 書き込み
class DelayLogStream extends stream.Writable { 
  constructor(options) { 
    // objectMode: trueを指定するとオブジェクトをデータとして流せる 
    super({ objectMode: true, ...options }) 
  } 

  _write(chunk, encoding, callback) { 
    console.log('_write()') 
    // messageプロパティ（文字列）、delayプロパティ（数値）を含むオブジェクトが 
    // データとして流れてくることを期待 
    const { message, delay } = chunk 
    // delayで指定した時間（ミリ秒）だけ遅れてmessageをログに出す 
    setTimeout(() => { 
      console.log(message) 
      callback() 
    }, delay) 
  } 
} 


const readStream = new HelloReadableStream()
readStream
  .on('readable', () => {
    console.log('readable')
    let chunk
    // 現在読み込み可能なデータをすべて読み込む
    while((chunk = readStream.read()) !== null) {
      console.log(`chunk: ${chunk.toString()}`)
    }
  })
  .on('end', () => console.log('end'))