'use strict';
const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { compare, semver } = require('../helpers');
const data = require('./data');
const {
  ChromeToNode,
  ChromeToSamsung,
  ChromeToAndroid,
  ChromeToElectron,
  SafariToIOS,
  SafariToPhantomJS,
} = require('./mapping');

for (const [key, module] of Object.entries(data)) {
  const { chrome, ie, safari } = module;

  const map = function (mapping, version, targetKey) {
    if (module[targetKey]) return;
    const source = semver(version);
    for (const [from, to] of mapping) {
      if (compare(source, '<=', from)) {
        module[targetKey] = to;
        return;
      }
    }
  };

  if (!module.edge && ie && key !== 'web.immediate') {
    module.edge = '12';
  }

  if (chrome) {
    if (!module.edge) {
      module.edge = String(Math.max(chrome, 74));
    }
    if (!module.opera) {
      module.opera = String(chrome <= 23 ? 15 : chrome <= 29 ? 16 : chrome - 13);
    }
    if (key.startsWith('es')) {
      map(ChromeToNode, chrome, 'node');
    }
    map(ChromeToSamsung, chrome, 'samsung');
    map(ChromeToAndroid, chrome, 'android');
    map(ChromeToElectron, chrome, 'electron');
  }

  if (safari) {
    map(SafariToIOS, safari, 'ios');
    map(SafariToPhantomJS, safari, 'phantom');
  }
}

writeFileSync(resolve(__dirname, '../data.json'), JSON.stringify(data, null, '  '));
writeFileSync(resolve(__dirname, '../modules.json'), JSON.stringify(Object.keys(data), null, '  '));
