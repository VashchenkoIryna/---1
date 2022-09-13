const readline = require('readline');
const fs = require('fs').promises;
const {program} = require('commander');
require('colors');

program.option(
    '-f, --file [type]',
    'file for saving game results',
    'results.txt',
);

program.parse(process.argv);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
const logFile = program.opts().file; //выводит имя файла results.txt 
const mind = Math.floor(Math.random() * 10) + 1; // получем раномное число

// Проверка числа 
const isValid = value => {
    //если не использовать isNaN() то возращает не true false а NaN
  if (isNaN(value)) { 
    console.log('Введите число!'.red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log('Число должно быть в диапазоне 1 до 10'.red);
    return false;
  }
  return true;
};

//Добовляем текст в файл results.txt 
const log = async data => {
    try{
        await fs.appendFile(logFile, `${data}\n`);
        console.log(`Удалось сохранить результат в файл ${logFile}`.green)
    } catch(error) {
        console.log('Упсс'.red);
    }
};

const game = () => {
    rl.question(
        'Введите число от 1 до 10, чтобы угадать задуманное: '.yellow,
        value => {
            let a = +value;
            if(!isValid(a)) {
                game();
                return;
            }
            count += 1;
            if(a === mind) {
                console.log('Поздравляю Вы угадали число за %d шага(ов)'.green, count);
                log(
                    `${new Date().toLocaleDateString()}: Поздравляю Вы угадали число за ${count} шага(ов)`
                ).finally(() => rl.close());
                return;
            }
            console.log('Вы не угадали еще попытка'.red);
            game();
        },
    );
};
game();