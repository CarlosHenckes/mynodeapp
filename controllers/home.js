const request = require('request');

module.exports = function (app) {
    
        var HomeController = {
            index: function (req, resp) {

                request('https://beeringapi.herokuapp.com/beer', { json: true }, (err, res, body) => {
                    if (err) { return console.log(err); }
                    resp.render('home/index', {beers:body});
                  });                
            }
        };
        return HomeController;
    };