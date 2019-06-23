const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('---------------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('---------------------------------------');
console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({
  dir: '/Users/idion',
  name: 'path',
  ext: '.js',
}));
console.log('path.normalize():', path.normalize('///Users/////idion'));
console.log('---------------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('/'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('---------------------------------------');
console.log('path.relative():', path.relative('/Users/idion', '/Users/idion/WorkSpace/JavaScript/NodejsTextbook/node_feature/node_built_in_object'));
console.log('path.join():', path.join(__dirname, '..', '..', '/Users', '.', '/Idion'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'Users', '.', '/Idion'));