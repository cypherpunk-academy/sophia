import fs from "fs";
import path from "path";

const directoryPath = path.join(__dirname, "/text/de");
export const text = fs
  .readdirSync(directoryPath)
  .filter((filename) => path.extname(filename) === ".md")
  .map((filename) => {
    const filePath = path.join(directoryPath, filename);
    return fs.readFileSync(filePath, "utf8");
  });

export default null;
