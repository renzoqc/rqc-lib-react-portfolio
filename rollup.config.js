import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import json from "@rollup/plugin-json";
import { visualizer } from "rollup-plugin-visualizer";
import fs from "fs";
import { terser } from 'rollup-plugin-terser';
import svgr from "@svgr/rollup";

const arrayIndex = [];

function getDirectories(path) {
  fs.readdirSync(path).filter(function (folderOrFile) {
    let isDir = fs.statSync(path + "/" + folderOrFile).isDirectory();

    if (isDir) {
      getDirectories(path + "/" + folderOrFile);
    } else {
      const currentDir = path + "/" + folderOrFile;
      if (!currentDir.includes("examples")) {
        if (currentDir.includes("index.ts")) {
          arrayIndex.push(currentDir);
        }

        if (
          currentDir.includes("configs") ||
          currentDir.includes("helpers") ||
          currentDir.includes("assets")
        ) {
          if (
            !folderOrFile.includes(".scss") &&
            !folderOrFile.includes(".svg") &&
            !folderOrFile.includes(".d.")
          ) {
            arrayIndex.push(currentDir);
          }
        }
      }
    }
  });
}

getDirectories("src");

export default {
  input: arrayIndex,
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs({
      transformMixedEsModules: true,
    }),
    // typescript({ useTsconfigDeclarationDir: false, outDir: process.cwd() + '/build' }),
    typescript({
      tsconfig: "./tsconfig.build.json",
      declaration: true,
      declarationDir: "build",
    }),
    postcss({
      extract: true,
      modules: false,
      minimize: true,
      config: { path: "./postcss.config.js" },
    }),
    json(),
    image(),
    copy({
      targets: [
        { src: "src/assets/scss", dest: "build/" },
        { src: ["src/assets/icons/**/*.svg", "!**/*.tsx"], dest: "build/" },
        { src: ["src/assets/icons/*.svg"], dest: "build/" },
      ],
      flatten: false,
    }),
    svgr(),
    terser(),
    visualizer(),
  ],
  external: ["react", "react-dom"],
};
