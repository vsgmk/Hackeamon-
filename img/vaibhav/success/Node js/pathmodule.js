const path = require('path')
const a1=path.basename('/foo/bar/baz/asdf/quux.html');
const a2=path.dirname('/foo/bar/baz/asdf/quux')
console.log(a1);
console.log(a2);
const a3= path.extname(__filename);
console.log(a3);
