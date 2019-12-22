import pkg from "./package.json";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript";

const plugins = [commonjs(), typescript()];

export default [
  {
    input: "src/index.ts",
    output: {
      format: "umd",
      name: "scribe"
      //   file: pkg.browser
    }
  },
  {
    input: "src/index.ts",
    output: {
      format: "es",
      name: "scribe"
      //   file: pkg.module
    }
  },
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      name: "scribe"
      //   file: pkg.module
    },
    plugins
  }
];
