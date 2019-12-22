import pkg from "./package.json";
import flow from "rollup-plugin-flow";
import commonjs from "@rollup/plugin-commonjs";

const plugins = [commonjs(), flow()];

export default [
  {
    input: "src/index.umd.js",
    output: {
      format: "umd",
      name: "scribe"
      //   file: pkg.browser
    }
  },
  {
    input: "src/index.js",
    output: {
      format: "es",
      name: "scribe"
      //   file: pkg.module
    }
  },
  {
    input: "src/index.js",
    output: {
      format: "cjs",
      name: "scribe"
      //   file: pkg.module
    },
    plugins
  }
];
