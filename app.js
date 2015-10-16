// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var googleTranslate = require('google-translate')('AIzaSyBvp-GAZZpZEihZGXnsrVVLVYmQijXnTqI');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('index.html', {root: './'})
});

app.post('/translate', function(req, res) {
console.log(req.body) 
    googleTranslate.translate(req.body.phrase, req.body.currentLanguage, req.body.toThisLanguage, function(err, translate) {
        res.send(translate.translatedText)
    })
})

app.get('/quizpage', function(req, res) {
    res.sendFile('/quiz.html', {root: './public/html'})
})

app.post('/startquiz', function(req, res) {
    console.log(req.body)
    googleTranslate.translate(req.body.randomWord,      req.body.nativeLanguage, req.body.testLanguage, function(err, translate) {
        res.send(translate.translatedText)
    })
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
