const { stitchSchemas } = require('@graphql-tools/stitch');
const loginType = require('./login');
const registerType = require("./register")


module.exports = stitchSchemas({
    subschemas: [
      loginType,
      registerType
    ]
  });
