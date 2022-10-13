const express = require('express');
const app = express();
const noteModel = require('../models/NotesModel');
//TODO - Create a new Note

//http://mongoosejs.com/docs/api.html#document_Document-save


//Postman JSON
// {
//     "noteTitle": "Today",
//     "noteDescription": "Todays first note",
//     "priority": "LOW"

// }

app.post('/notes', async (req, res) => {
    // Validate request

    if (!req.body.noteTitle) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note

    let newNote = new noteModel(req.body)
    try {
        await newNote.save()
        console.log("Note Saved")
        res.status(200).send(newNote)
    } catch (err) {
        console.log("ERROR: Note Saved " + err)
        res.status(500).send(err)
    }
});



//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note

    try {
        await noteModel.find({}, function (err, note) {
            if (err) return res.send(err);
            return res.status(400).send({
                message: note
            });
        })
    } catch (err) {
        console.log("ERROR: Retrieved " + err)
        res.status(500).send(err)
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request

    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try {
        await noteModel.findOne({ _id: req.params.noteId }, function (err, note) {
            if (err) return res.send(err);
            return res.status(400).send({
                message: note
            });
        })
    } catch (err) {
        console.log("ERROR: Retrieved " + err)
        res.status(500).send(err)
    }
});



//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try {
        await noteModel.findByIdAndUpdate(req.params.noteId, req.body, function (err, note) {
            if (err) res.send(err);
            return res.status(400).send({
                message: note
            });
        })
    } catch (err) {
        console.log("ERROR: Retrieved " + err)
        res.status(500).send(err)
    }
});



//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        await noteModel.deleteOne({ _id: req.params.noteId }, function (err, note) {
            if (err) res.send(err);
            return res.status(400).send({
                message: note
            });
        })
    } catch (err) {
        console.log("ERROR: Retrieved " + err)
        res.status(500).send(err)
    }
});



module.exports = app