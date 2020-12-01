var n = require("fs").readFileSync("input.txt", "UTF-8").split("\n").map(x => parseInt(x)); p1 = ""; p2 = "";
for (var a = 0; a < n.length; a++) {
  for (var b = 0; b < n.length; b++) {
    if (n[a] + n[b] == 2020) { p1=(n[a] * n[b]) }
    for (var c = 0; c < n.length; c++) {
      if (n[a] + n[b] + n[c] == 2020) { p2=(n[a] * n[b] * n[c]) }
    }
  }
}
console.log("Part1: " + p1 + "\nPart2: " + p2)
