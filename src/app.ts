import Jimp from "jimp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { pixelValuesArray, pixelValuesDict } from "@config/config";

const argv = yargs(hideBin(process.argv)).parse();

if (argv._.length < 1) {
  console.error("Please provide an input file.");
  process.exit(1);
} else {
  
}