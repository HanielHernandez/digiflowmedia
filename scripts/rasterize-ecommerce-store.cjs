const fs = require("fs");
const path = require("path");
const sharp = require(path.join(
  __dirname,
  "../node_modules/.pnpm/sharp@0.35.3_@types+node@20.19.43/node_modules/sharp"
));

const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/ecommerce-store.svg");
const fontPath = path.join(root, "public/fonts/Inter-Variable.ttf");
const outPath = path.join(root, "public/ecommerce-store.png");

const b64 = fs.readFileSync(fontPath).toString("base64");
let svg = fs.readFileSync(svgPath, "utf8");

svg = svg.replace(
  /font-family="[^"]*"/g,
  'font-family="Inter, sans-serif"'
);

svg = svg.replace(
  /(<svg[^>]*>)/,
  `$1<defs><style>@font-face{font-family:"Inter";src:url(data:font/ttf;base64,${b64}) format("truetype");font-weight:100 900;font-style:normal;}</style></defs>`
);

sharp(Buffer.from(svg))
  .resize(720, 560)
  .png()
  .toFile(outPath)
  .then(() => console.log("Wrote", outPath))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
