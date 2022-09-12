/* 
    // Поключаем модуль калькулятора
    const Calc = require('calc-js').Calc; 

    //process.argv - содержит массив 
    const [,, a, b] = process.argv;

    console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
*/

/* 
    // Пдключем модуль PATH
    const path = require('path');

    console.log(path.resolve('deteUtils.js'));
*/

/* */
//fs module
const path = require('path');
const fs = require('fs').promises;
// fs.readFile('./data.txt', 'utf8', (error, data) => {
//     if(error) {
//         console.log(error)
//     }
//     console.log(data);
// });

// (async () => {
//     const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
//     console.log(data);
// })();

// (async () => {
//     const data = await fs.readFile('./data.txt', 'utf8')
//     console.log(data);
// })();

(async () => {
    try{ 
        const data = await fs.readFile('./data.txt', 'utf8')
        console.log(data);

        const newContent = `${data} school`;
        await fs.writeFile('./data1.txt', newContent, 'utf8');
        
        //await fs.rename('./dateUtils.js', 'dateUtilsName.js');

    } catch(error) {
        console.log(error)
    }
})();