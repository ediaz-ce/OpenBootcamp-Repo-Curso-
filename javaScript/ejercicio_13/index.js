import * as op from './modulos/controller.js'
import chalk from 'chalk'
let sum1 = op.suma(1,2);
let sum2 = op.suma(4,5);
let total = op.multiplica(sum1, sum2);
console.log(chalk.green(total));
