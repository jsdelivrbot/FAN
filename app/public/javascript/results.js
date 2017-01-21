$(document).on('ready', function() {

$('<div id="title-results">Friend Directory</div>').appendTo('body');

  $.get("/api/friends")
    .done(function(req, res) {
      console.log(req);
      req.forEach(function(person){
        let scoreString = person.scores.toString();
        let id = $('<div id='+person.id+' class="id"></div>');
        id.html('<strong>ID</strong>: ' + person.id).appendTo('body');
        let name = $('<div id='+person.name+' class="name"></div>');
        name.html('<strong>Name</strong>: ' + person.name).appendTo('body');
        let photo = $('<div id='+person.photo+' class="photo"></div>');
        photo.html('<strong>Photo</strong>: ' + person.photo).appendTo('body');
        let score = $('<div id='+scoreString+' class="score"></div>');
        score.html('<strong>Score</strong>: ' + scoreString).appendTo('body');
        let match = $('<div id='+person.match+' class="match"></div>');
        match.html('<strong>Match</strong>: ' + person.match).appendTo('body');
        let matchPhoto = $('<div id='+person.matchPhoto+' class="match-photo"></div>');
        matchPhoto.html('<strong>Match Photo</strong>: ' + person.matchPhoto).appendTo('body');
      });
    });
});
