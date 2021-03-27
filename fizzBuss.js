const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

// fizzBuzzを生成する関数
function createFizzBuzz(until) {
  process.nextTick(() => _emitFizzBuzz(eventEmitter, until))
  return eventEmitter
}

// fizzBuzzを実行する関数
async function _emitFizzBuzz(eventEmitter, until) {
  eventEmitter.emit('start')
  let count = 1
  while (count <= until) {
    await new Promise(resolve => setTimeout(resolve, 100))
    if(count % 15 === 0) {
      eventEmitter.emit('FizzBuzz', count)
    } else if (count % 3 === 0) {
      eventEmitter.emit('Fizz', count)
    } else if (count % 5 === 0) {
      eventEmitter.emit('Buzz', count)
    } 
    count += 1
  }
  eventEmitter.emit('end')
}

function startListener() {
  console.log('start')
}

function fizzListener(count) {
  console.log('Fizz', count)
}

function bazzListener(count) {
  console.log('Buzz', count)
}

function fizzBazzListener(count) {
  console.log('fizzBaz', count)
}

function endLisen() {
  console.log('end')
  this
  .off('start', startListener)
  .off('Fizz', fizzListener)
  .off('Buzz', bazzListener)
  .off('FizzBuzz', fizzBazzListener)
  .off('end', endLisen)
}

createFizzBuzz(40)
  .on('start', startListener)
  .on('Fizz', fizzListener)
  .once('Buzz', bazzListener)
  .on('FizzBuzz', fizzBazzListener)
  .on('end', endLisen)