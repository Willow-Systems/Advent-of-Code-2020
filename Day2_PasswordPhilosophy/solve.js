var p = require("fs").readFileSync("input.txt", "UTF-8").split("\n").map(x => x.replace(/ /g,",").replace(":","")); p.pop();
var p1 = 0; p2 = 0;
p.forEach((item, i) => {
  item = item.split(",");
  var o = (item[2].match(new RegExp(item[1], "g"))||[]).length;
  var low = item[0].split("-")[0]; high = item[0].split("-")[1];
  if (o >= low && o <= high) { p1++ }
  if (item[2][low-1] == item[1] ^ item[2][high-1] == item[1]) { p2++ }
});
console.log("Part 1: " + p1 + "\nPart 2: " + p2)
