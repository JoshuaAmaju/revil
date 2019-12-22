import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const plugins = [typescript(), commonjs(), terser()];

export default {
  input: "src/index.ts",
  output: [
    {
      format: "umd",
      name: "scribe",
      file: pkg.browser
    },
    {
      format: "es",
      name: "scribe",
      file: pkg.module
    },
    {
      format: "cjs",
      name: "scribe",
      file: pkg.main
    }
  ],
  plugins
};
