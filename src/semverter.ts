import * as Commander from "commander";
import * as FileSystem from "fs";
import { SemanticVersion } from "./semantic-version";

const semverter = new Commander.Command();

const semverterVersion = FileSystem.readFileSync("./package.json").toJSON().version;

semverter
  .version(semverterVersion)
  .option("-p, --patch", "Iterate the patch version number")
  .parse(process.argv);


let packageJson = FileSystem.readFileSync("./package.json").toJSON();

const version = new SemanticVersion(packageJson.version);

if (semverter["patch"]) {
  version.patch++;
}

packageJson.version = version.toString();

FileSystem.writeFileSync("./package.json2", JSON.stringify(packageJson, null, 3));
