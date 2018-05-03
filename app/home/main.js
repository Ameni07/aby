
var mLab = require('mongolab-data-api')('eHvVf79XL2VF8oJgLRY2LStPG1n94os7');
var s;
var options = {
  database: 'peopletot',
  collectionName: 'peopletot',
  //query: '{ "key": "value" }'
};
 // db size
 var size;
 //k=last nbtot
 var k;
mLab.listDocuments(options, function (err, data) {
  size=data.length; //=> [ { _id: 1234, ...  } ] 
  var lastdoc=data[size-1];
  s=lastdoc;
  
});

console.log(s); 