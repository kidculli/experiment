const tinyurl = require("tinyurl");
const testJSON = JSON.stringify(require("./test.json"));
const lzma = require("json-url")("lzma");

async function test() {
  const compressed = await lzma.compress(testJSON);
  console.log(compressed.length);
  const result = await tinyurl.shorten(
    `http://localhost:8000?t=${new Date().getTime()}&q=${compressed}`
  );
  //console.log(compressed);
  console.log(result);
  //const decompressed = await lzma.decompress(compressed);
  //console.log(decompressed);
}

setInterval(test, 500);
