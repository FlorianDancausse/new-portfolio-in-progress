// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import { join } from "path";
import karmaJasmine from "karma-jasmine";
import karmaChromeLauncher from "karma-chrome-launcher";
import karmaJasmineHtmlReporter from "karma-jasmine-html-reporter";
import karmaCoverage from "karma-coverage";

export default function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    plugins: [
      karmaJasmine,
      karmaChromeLauncher,
      karmaJasmineHtmlReporter,
      karmaCoverage,
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: join(process.cwd(), "./coverage/portfolio"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
      check: {
        global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100,
        },
      },
    },
    reporters: ["progress", "kjhtml", "coverage"],
    browsers: ["Chrome"],
    restartOnFileChange: true,
  });
}
