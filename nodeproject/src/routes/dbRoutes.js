var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [{
    name: "event 1",
    time: "1PM"
},{
    name: "event 2",
    time: "4PM"
}];

dbRouter.route('/AddEventData')
    .get(function(req, res) {
        //res.send("Succesfull route test");
        
        var url = 'mongodb://localhost:27017/eventsApp';        
        mongodb.connect(url, function(err, db) {
           var collection = db.collection('events1');
           collection.insertMany(eventsData, function(err, results) {
               // Will run after all inserted
               res.send(results);
               db.close();
           });
        });
});
module.exports = dbRouter;