DESTINATION_DIR="$1"
PACKAGE_NAME=$(find dist/ -type f -name '*tgz' | sed 's/.*\///')

npm run build

cp package.json dist/
node <<EOF
//Read data
const fs = require('fs');
var data = require('./dist/package.json');

//Manipulate data
data.scripts.prepare = ""
fs.writeFileSync('./dist/package.json', JSON.stringify(data, null, 2));
EOF

cd dist
npm pack

cd "../../$DESTINATION_DIR"
npm install "../rqc-lib-react-portfolio/dist/$PACKAGE_NAME"