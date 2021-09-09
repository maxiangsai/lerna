#!/usr/bin/env node

"use strict";

/* eslint-disable import/no-dynamic-require, global-require */
const importLocal = require("import-local");

if (importLocal(__filename)) {
  // 优先调用本地的lerna命令
  require("npmlog").info("cli", "using local version of lerna");
} else {
  // 进入同目录下的index.js
  require(".")(process.argv.slice(2));
}
