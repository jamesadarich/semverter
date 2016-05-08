export class SemanticVersion {

  public major: number = 0;
  public minor: number = 0;
  public patch: number = 0;
  public build: string;
  public semanticTags: { [id: string]: number };

  public constructor(versionString: string) {

    let versionParts = versionString.split("+")[0].split(".");

    let patchString = versionParts[2];

    if (patchString) {
      this.patch = parseInt(patchString);

      if (this.patch.toString() !== patchString) {
        throw new Error("patch must be a postirive integer.");
      }
      else if (this.patch < 0) {
        throw new Error("patch must be greater than or equal to 0.");
      }
    }

    this.build = versionString.split("+")[1];
  }

  public toString(): string {
    return this.major + "." + this.minor + "." + this.patch;
  }
}
