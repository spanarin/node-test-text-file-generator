const fs = require('fs');

const MAX_CHUNKS = 100000 // 100K -> ~20Mb (133ms), 10M -> ~2Gb (13350 ms, 13s), 20M -> ~4Gb (58142 ms, 58s)
const delimeter = '%\n'
let chunk

const start = performance.now()

const writableStream = fs.createWriteStream('quotes.txt');
for (let i = 0; i < MAX_CHUNKS; i++) {
    chunk = getRandomQuote() + delimeter
    writableStream.write(chunk);
}
writableStream.end()

const end = performance.now()

console.log(`Processed for ${Number.parseFloat(end - start).toPrecision(6)} milliseconds`)


// helpers
function getRandomQuote() {
    const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda, beatae explicabo unde labore voluptatibus doloribus, debitis maxime est error eveniet, quaerat dicta aperiam illo porro soluta ad alias praesentium!`
    const max = lorem.length
    const min = 150

    let len = Math.random()*(max - min) + min
    return lorem.slice(0, len) + "\n"
}