import { transform } from "@swc/core";
import { readFileSync,writeFileSync } from "fs";

function tr(name) {
  const content = readFileSync(name, "utf8");
  transform(content, { sourceMaps: true, filename: name }).then((o) => {
    writeFileSync(name.replace("./src","./dist"),o.code);
    writeFileSync(name.replace("./src","./dist")+".map",o.map);
  });
}
[
  "./src/browser.js",
  "./src/preamble.js",
].forEach(tr);
