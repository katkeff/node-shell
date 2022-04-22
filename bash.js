const pwd = require('./pwd');
const ls = require('./ls');

const prompt = require("prompt-sync")({ sigint: true });

const err = 'invalid prompt'
const file = prompt("prompt > ")
  if (file === 'ls') {
    console.log(ls.toString())
  } else if (file === 'pwd') {
    pwd()
  } else {
    throw err
  }

