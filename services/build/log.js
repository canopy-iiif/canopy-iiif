const charm = require("charm")();

function log(string, display = "reset") {
  charm.pipe(process.stdout);
  charm.display(display);
  charm.foreground("green").write(string).end();
}

module.exports = { log };
