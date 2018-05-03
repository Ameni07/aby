var mLab = require('mongolab-data-api')('eHvVf79XL2VF8oJgLRY2LStPG1n94os7');
var options = {
  database: 'peopletot',
  collectionName: 'peopletot',
  //query: '{ "key": "value" }'
};
 // db size
 
var service = {};

service.getdoc = getdoc;
module.exports = service;

function getdoc(lastdoc) {
 // db size
 var size;
 //k=last nbtot
 var k;
mLab.listDocuments(options, function (err, data) {
  size=data.length; //=> [ { _id: 1234, ...  } ] 
  var lastdoc=data[size-1];
  k=lastdoc;});
    return k;
}

