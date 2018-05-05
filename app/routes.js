// grab the nerd model we just created
var Race = require('./models/race');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/races', function(req, res) {
            console.log("inside GET /api/races");

            // use mongoose to get all races in the database
            Race.find(function(err, races) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                console.log("Error?? " + err);
                console.log(races);
                res.json(races); // return all races in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        app.post('/api/races', function(req, res){
            console.log("inside POST /api/races");
            console.log(req.body);

            // use mongoose to create a race in the database
            var newRace = new Race({ name: 'The Best One' });
            newRace.save(function (err, newRace) {
                if (err) return console.error(err);
                console.log("You saved a new race: " + newRace);
            });

        });

        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
