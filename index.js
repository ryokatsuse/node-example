// setTimeout(
//   () => console.log('1秒経過しました。'),
//   1000
// )

// console.log('setTimeout()を実行しました')
const { rejects } = require('assert');
const { resolve } = require('path');
const process = require('process');

// fs.readdir(
//   'foo',
//   (err, files) => {
//     console.log('fs.redeeir実行結果')
//     console.log('err', err)
//     console.log('files', files)
//   }
// )
// function parseJSONSync(json) {
//   try {
//     return JSON.parse('{ "name": "Tanaka" }')
//   } catch(err) {
//     console.error('エラーをキャッチ', err)
//   }
// }
// parseJSONSync()

// 非同期jsonparse
// function parseJSONSync(json, callback) {
//   setTimeout(() => {
//     try {
//       callback(null, json.parse(json))
//     } catch (err) {
//       callback(err)
//     }
//   }, 1000)
// }
// parseJSONSync('不正', (err, result) => console.log('parse結果', err, result))


// function parse(json) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         resolve(JSON.parse(json))
//       } catch (err) {
//         reject(err)
//       }
//     }, 1000)
//   })
// }

// const fulfilled = parse('{ "name": "Tanaka", "age": 26 }')
// const rejected = parse('不正なjson')
// console.log('********************* Promise生成直後 ******************')
// console.log(fulfilled)
// console.log(rejected)
// setTimeout(() => {
//   console.log('********************* 1秒後　 ******************')
//   console.log(fulfilled)
// console.log(rejected)
// }, 1000)

// function* generatorfunc() {
//   console.log('ジェネレータ開始')
//   console.log('yield1')
//   yield 1
//   console.log('yield2')
//   yield 2
//   console.log('yield3')
//   yield 3
//   console.log('ジェネレータ終了')
//   return 'ジェネレータ関数戻り値'
// }

// const gene = generatorfunc()
// gene.next()
// gene.next()

// ジェネレータ関数で非同期プログラミング


function parseJSONSync(json, callback) {
  setTimeout(() => {
    try {
      callback(null, json.parse(json))
    } catch (err) {
      callback(err)
    }
  }, 1000)
}
function* parseJson(json) {
  try {
    const result =  yield parseJSONSync(json)
    console.log('パース結果', result)
  } catch (err) {
    console.log('エラーをキャッチ', err)
  }
}


