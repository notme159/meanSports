var mongoose = require('mongoose');

// check schema required jestli netreba
var noteSchema = mongoose.Schema({
    dateCreated: {type:Date, required:'{PATH} is required!', default: Date.now},
    dateModified: {type:Date, default: Date.now},
    name: {type:String, required:'{PATH} is required!'},
    content: {type:String, required:'{PATH} is required!'}
});
var Note = mongoose.model('Note', noteSchema);

function createDefaultNotes() {
    Note.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            //Note.create({dateCreated: new Date('10/15/2013'), dateModified: new Date('10/16/2013'), name: 'Welcome', content: 'Welcome to note everywhere! If you..'});
            Note.create({name: 'Welcome', content: 'Welcome to note everywhere! If you..'});
        }
    });
}

exports.createDefaultNotes = createDefaultNotes;