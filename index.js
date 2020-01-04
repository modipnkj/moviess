var mongoose = require('mongoose');
var express = require('express');
var Schema = mongoose.Schema;
var app = express();
mongoose.connect('mongodb://localhost/moviezz_db', { useNewUrlParser: true });

var movieschema = new mongoose.Schema({
    movie_name: String,
    movie_img: String,
    movie_summary: String
});

var movie_data = mongoose.model('moviezz', movieschema);



app.get('/showData', (req, res) => {
    movie_data.find()
        .then(doc=>{  
            res.json(doc)
        })
        .catch(err=>{
            res.json(err)
        })
});


app.get('/saveData', (req, res) => {
    movie_data.insertMany([{
        movie_name: "Harry Potter and the Order of the Phoenix",
        movie_img: "https://bit.ly/2IcnSwz",
        movie_summary: "Harry Potter and Dumbledore's warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore's authority at Hogwarts and discredit Harry."
    }, {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        movie_img: "https://bit.ly/2tC1Lcg",
        movie_summary: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed."
    }, {
        name: "Avengers: Endgame",
        movie_img: "https://bit.ly/2Pzczlb",
        movie_summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    }])
    .then(result=>{
        res.json(result)
    })
    .catch(err=>{
        res.json(err)
    })
    
});


var port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}.......`));





