// grab the mongoose module
var mongoose = require('mongoose');

// define our race model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Race', {
    name      : {type : String, default: ''},
    state     : {type : String, default: ''},
    website   : {type : String, default: ''},
    date      : {type : Date, default: Date.now()},
    done      : {type: Boolean, default: false}
});
