import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";
import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const root = dirname(fileURLToPath(new URL("./", import.meta.url)));
const publicDir = join(root, "../public");

function copyDir(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

copyDir(scramjetPath, join(publicDir, "scram"));
copyDir(epoxyPath, join(publicDir, "epoxy"));
copyDir(baremuxPath, join(publicDir, "baremux"));

console.log("Static assets prepared in public/ for GitHub Pages.");
