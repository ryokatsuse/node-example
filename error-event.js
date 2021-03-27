const events = require('events')

try {
  new events.EventEmitter()
  // .on('error', err => console.log('erroriベント'))
  .emit('error', new Error('エラー'))
} catch(err) {
  console.log('catch')
} 