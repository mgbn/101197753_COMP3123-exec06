const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: {
            values: ['HIGH', 'LOW', 'MEDUIM'],
            message: '{VALUE} is not supported,Value can be HIGH, LOW or MEDUIM'
        },
    },

    dateAdded: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;



//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated