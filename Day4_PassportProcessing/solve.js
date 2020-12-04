var pps = require("fs").readFileSync("input.txt", "UTF-8").split("\n");
var requiredFields = ["byr","iyr","eyr","hgt","hcl","ecl","pid"], passports = [], cache = "", p1 = 0, p2 = 0;

function hasAllRequiredFields(passport) {
  var ok = true;
  passport = passport.split(" ").map(x => x.substr(0,x.indexOf(":")))
  requiredFields.forEach((item, i) => {
    ok = (passport.includes(item)) ? ok : false
  });
  if (ok) { p1++ }
  return ok
}

function validatePassport(passport) {
  var ok = true
  ok = (hasAllRequiredFields(passport)) ? ok : false
  passport.split(" ").forEach((item, i) => {
    ok = (validateAttributePair(item)) ? ok : false
  });
  return ok
}

function validateAttributePair(pair) {
  var entry = pair.split(":")[0], value = pair.split(":")[1];
  var validator = {
    "byr": v => (v >= 1920 && v <= 2002),
    "iyr": v => (v >= 2010 && v <= 2020),
    "eyr": v => (v >= 2020 && v <= 2030),
    "hgt": v => validateHeight(v),
    "hcl": v => (v.substr(0,1) == "#" && (v.substr(1).match(/^[0-9a-zA-Z]+$/) != null) && v.length == 7),
    "ecl": v => (["amb","blu","brn","gry","grn","hzl","oth"].includes(v)),
    "pid": v => ((! isNaN(v)) && v.length == 9),
    "cid": v => true
  }
  return validator[entry](value)
}

function validateHeight(value) {
  if (value.substr(-2) == "cm") { return (value.replace("cm","") >= 150 && value.replace("cm","") <= 193) }
  if (value.substr(-2) == "in") { return (value.replace("in","") >= 59 && value.replace("in","") <= 76) }
  return false
}

pps.forEach((line) => {
  if (line == "") {
    p2 = (validatePassport(cache.trim())) ? p2+1 : p2
    cache = ""
  } else {
    cache += " " + line
  }
});

console.log("Part 1: " + p1 + "\nPart 2: " + p2)
