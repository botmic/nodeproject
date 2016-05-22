var express = require('express');

var eventRouter = express.Router();

var eventsData = [{
    name: "event 1",
    time: "1PM"
},{
    name: "event 2",
    time: "4PM"
}];

eventRouter.route('/')
    .get(function(req, res) {
        res.render('events', { 
        list: ['first eve', 'second eve', 'third eve'],
        nav: [{Link: 'Services', Text: 'Services'}, 
              {Link: 'Portfolio', Text: 'Portfolio'},
              {Link: 'About', Text: 'About'},
              {Link: 'Team', Text: 'Team'},
              {Link: 'Contact', Text: 'Contact'},
              {Link: 'Events', Text: 'Events'}],
        events: eventsData
        });
    });
    
eventRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('event', { 
        list: ['first eve', 'second eve', 'third eve'],
        nav: [{Link: 'Services', Text: 'Services'}, 
              {Link: 'Portfolio', Text: 'Portfolio'},
              {Link: 'About', Text: 'About'},
              {Link: 'Team', Text: 'Team'},
              {Link: 'Contact', Text: 'Contact'},
              {Link: 'Events', Text: 'Events'}],
        events: eventsData[id]
    });
});
    
module.exports = eventRouter;