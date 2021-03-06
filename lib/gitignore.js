'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = dir => {
  if (_fs2.default.existsSync(_path2.default.join(dir, '.gitignore'))) {
    const content = _fs2.default.readFileSync(_path2.default.join(dir, '.gitignore'), 'utf8');
    return content.split('\n').map(line => line.trim()).filter(line => line && line[0] !== '#');
  }
  return [];
};