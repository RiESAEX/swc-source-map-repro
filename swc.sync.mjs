import { transformSync } from "@swc/core";
import { readFileSync, writeFileSync } from "fs";

function tr(name) {
  const content = readFileSync(name, "utf8");
  let o = transformSync(content, { sourceMaps: true, filename: name });
  writeFileSync(name.replace("./src", "./sync-dist"), o.code);
  writeFileSync(name.replace("./src", "./sync-dist") + ".map", o.map);
}
["./src/browser.js", "./src/preamble.js"].forEach(tr);
