const chalk = require('chalk')

console.log(chalk.bgRed('Hello YSE!!!'))
console.log(chalk.green('Hello YSE!!!'))

const lat = process.argv[2]
const lat = process.argv[3]

const cities = require('cities')
if (lat && lng){
    console.log(ctites.gps_lookup(lat,lng))
}