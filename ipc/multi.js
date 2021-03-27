'use strict'

const { fork, setupMaster } = require('cluster')

console.log('メインプロセス', process.pid)

setupMaster({exec: `${__dirname}/web-app`})

const cpuCount = require('os').cpus().length
console.log(cpuCount)
for (let i = 0; i < cpuCount; i++) {
  const sub = fork()
  console.log('サブプロセス', sub.process.pid)
  sub.send(3000)
  sub.on('message', ({pid, response}) => {
    console.log(process.pid, `${pid}が${response}を返します`)
  })
}
