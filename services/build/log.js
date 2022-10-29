const charm = require("charm")();

function log(string, dim) {
  const display = dim ? "dim" : "reset";
  charm.pipe(process.stdout);
  charm.display(display);
  charm.foreground("green");
  charm.write(string).end();
}

module.exports = { log };
