'use strict';

var chalk = require('chalk');

function sayHelloFn(msg) {
    console.log(chalk.blue(msg));
}

function letsHaveLunchFn(msg) {
    console.log(chalk.red(msg));
}

module.exports = {
    hello: sayHelloFn,
    lunch: letsHaveLunchFn
};
