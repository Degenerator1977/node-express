let snowflake = require('snowflake-sdk');
let conn = snowflake.createConnection({
  account: 'terramarnetworks',
  username: 'RGRAHAM',
  password: 'Bebechou1988',
  region: 'eu-central-1'
});

conn.connect(function(err, conn) {
  if (err) {
    console.error('Unable to connect: ' + err.message);
  } else {
    console.log('Successfully connected as id: ' + conn.getId());
  }
});
