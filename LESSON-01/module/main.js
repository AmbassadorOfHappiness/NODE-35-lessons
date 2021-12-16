const { log } = require('./module');

// import('./module.mjs').then(result => {
//     const { info } = result;
//     info('ESModule JS')
// })

//---САМОВЫЗЫВАЮЩАЯ ФУНКЦИЯ------
(async () => {
    const result = await import('./module.mjs');
    const { info } = result;
    info('ESModule JS');
})()
//---САМОВЫЗЫВАЮЩАЯ ФУНКЦИЯ------

log('Common JS')
console.log('HELLO')
