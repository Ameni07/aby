var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Ameni:123@ds119738.mlab.com:19738/peoplein";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("peoplein");
  dbo.collection("peoplein").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

        function Controller(PeopletotService) {
            var vm = this;
    
            vm.nbtot = null;
    
            initController();
    
            function initController() {
                // get current user
                vm.nbtot=PeopletotService.getdoc().nbtot;
               
                
            }
        }
    
    })();