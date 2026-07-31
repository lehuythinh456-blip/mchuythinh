import sharp from "sharp";
import { readdir, rename } from "node:fs/promises";
import path from "node:path";

const targets = [
  { dir: "public/images/portrait", maxWidth: 1600, quality: 82 },
  { dir: "public/images/portfolio", maxWidth: 1400, quality: 78 },
];

for (const { dir, maxWidth, quality } of targets) {
  const files = await readdir(dir);
  for (const file of files) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const inputPath = path.join(dir, file);
    const outExt = ".jpg";
    const outName = file.replace(/\.(jpe?g|png)$/i, outExt);
    const tmpPath = path.join(dir, `tmp-${outName}`);

    const image = sharp(inputPath).rotate();
    const meta = await image.metadata();
    const pipeline =
      meta.width && meta.width > maxWidth
        ? image.resize({ width: maxWidth })
        : image;

    await pipeline.jpeg({ quality, mozjpeg: true }).toFile(tmpPath);

    const finalPath = path.join(dir, outName);
    await rename(tmpPath, finalPath);
    if (finalPath !== inputPath) {
      const { unlink } = await import("node:fs/promises");
      await unlink(inputPath).catch(() => {});
    }
    console.log(`optimized ${inputPath} -> ${finalPath}`);
  }
}
