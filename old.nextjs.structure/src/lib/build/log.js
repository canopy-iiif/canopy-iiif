const charm = require("charm")();

function log(
  string,
  color = "blue",
  options = { bright: false, dim: false, underscore: false }
) {
  charm.pipe(process.stdout);

  if (options?.bright) charm.display("bright");
  if (options?.dim) charm.display("dim");
  if (options?.underscore) charm.display("underscore");

  charm.foreground(color).write(string).display("reset");
  charm.end();
}

function logResponse(string, response, success = true) {
  if (success) {
    log(`✓ `, "yellow", { dim: true });
    log(`${string}`, "yellow");
    log(` ➜ ${response.status}\n`, "yellow", { dim: true });
  } else {
    log(`✗ `, "red", { dim: true });
    log(`${string}`, "red");
    log(` ➜ ${response.status}\n`, "red", { dim: true });
  }
}

module.exports = { log, logResponse };
