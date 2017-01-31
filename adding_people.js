const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
}
});


// var query = knex.column('first_name','last_name','birthdate').select().from('famous_people');
var firstName = process.argv[2];
var lastName = process.argv[3];
var birthDate = process.argv[4];



knex.insert([{first_name: firstName,last_name: lastName, birthdate: birthDate}])
.into('famous_people')
  .then(function(id){
    console.log(id);
  })
.finally(function(){
  knex.destroy();
});




