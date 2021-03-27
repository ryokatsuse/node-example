'use strict'

module.exports = function fibnacci(n) {
  return n <= 1 ? n : fibnacci((n -1) + fibnacci(n - 2))
}