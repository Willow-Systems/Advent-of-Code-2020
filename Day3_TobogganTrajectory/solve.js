var forest = require("fs").readFileSync("input.txt", "UTF-8").split("\n"); forest.pop();
var x=0,y=0;t=0;

function move(right, down) {
  x+=right; y += down
  x = (x >= forest[0].length) ? (x%forest[0].length) : x
  if (y > forest.length) { return }
  if (forest[y][x] == "#") { t += 1 }
}

function findtrees(right, down) {
  t=0; x=0; y=0;
  while (y < forest.length-1) {
    move(right,down);
  }
  return t
}

console.log("Part 1: " + findtrees(3,1));
console.log("Part 2: " + (findtrees(1,1) * findtrees(3,1) * findtrees(5,1) * findtrees(7,1) * findtrees(1,2)))
