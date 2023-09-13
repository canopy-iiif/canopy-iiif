const charm = require("charm")();

function log(string, color = "blue") {
  charm.pipe(process.stdout);
  color === "yellow" && charm.display("dim").foreground(color).write("➜ ");
  charm.display("reset").foreground(color).write(string);
  charm.end();
}

module.exports = { log };
