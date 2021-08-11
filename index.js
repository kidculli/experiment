const tinyurl = require("tinyurl");
const testJSON = JSON.stringify(require("./test.json"));
const lzma = require("json-url")("lzma");

async function test() {
  const compressed = await lzma.compress(testJSON);
  console.log(compressed.length);
  const result = await tinyurl.shorten(`http://localhost:8000?q=${compressed}`);
  //console.log(compressed);
  console.log(result);
}

test();
