const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const name = process.argv.slice(2);


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(`SELECT * FROM famous_people WHERE last_name = '${name}'`, (err, result) => {
    if (err){
      return console.error("error running query", err);
    }

    console.log(result.rows);
    client.end();
  });
});



// // function to capture ARGV return ARGV

//Build he query where value is ARGV

// run the query

// display the result
