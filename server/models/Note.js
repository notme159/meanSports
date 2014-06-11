var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
    dateCreated: {type:Date, required:'{PATH} is required!', default: Date.now},
    dateModified: {type:Date, default: Date.now},
    noteName: {type:String, required:'{PATH} is required!'},
    noteContent: {type:String, required:'{PATH} is required!'}
});

var Note = mongoose.model('Note', noteSchema);

function createDefaultNotes() {
    Note.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
          Note.create({noteName: 'Welcome1', noteContent: 'Training lounge announcements1'});
          Note.create({noteName: 'Welcome2', noteContent: 'Training lounge announcements2'});
          Note.create({noteName: 'Welcome3', noteContent: 'Training lounge announcements3'});
        }
    });
}

exports.createDefaultNotes = createDefaultNotes;