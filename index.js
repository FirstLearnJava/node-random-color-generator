import randomColor from 'randomColor';
import chalk from 'chalk';

const ThirtyOneHashes = '###############################';
const luminosity = process.argv[2];
const hue = process.argv[3];

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});
console.log(luminosity);
console.log(hue);
console.log(chalk.hex(color)(ThirtyOneHashes));
console.log(chalk.hex(color)(ThirtyOneHashes));
console.log(chalk.hex(color)(ThirtyOneHashes));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)(`#####       ${color}       #####`));
console.log(chalk.hex(color)('#####                     #####'));
console.log(chalk.hex(color)(ThirtyOneHashes));
console.log(chalk.hex(color)(ThirtyOneHashes));
console.log(chalk.hex(color)(ThirtyOneHashes));
