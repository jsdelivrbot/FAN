$(document).on('ready', function() {
    let isCreated = false;
    let newCharacter = {
        name: 'patrick',
        photo: 'https://pbs.twimg.com/profile_images/784404948700262400/xENRN2IK.jpg',
        scores: [],
        match: '',
        matchPhoto: ''
    };
    let scoreArr = [];
    let isPosted = false;
    let chosenBar;
    let chosenId;
    let chosenQuestion;
    let isQchosen = false;
//pops out profile from left upon completion
    let popOutLeft = (id, direction) => {
        $('#'+id).css({
            'width': '250px',
            'border': '1px solid white',
            'opacity': '.5',
            'border-top-right-radius': '10%',
            'border-bottom-right-radius': '10%'
        });
        $('#'+id).css('background-color', 'rgba(255,255,255, 0)');
        $('#'+id).children().css('margin-'+direction, '0px');
    }
//pops out match from left upon completion
    let popOutRight = (id, direction) => {
        $('#'+id).css({
            'width': '250px',
            'border': '1px solid white',
            'opacity': '.5',
            'border-top-left-radius': '10%',
            'border-bottom-left-radius': '10%'
        });
        $('#'+id).css('background-color', 'rgba(255,255,255, 0)');
        $('#'+id).children().css('margin-'+direction, '0px');
    }
//pops back in
    let popIn = (id, direction, radiusTop, radiusBottom) => {
        $('#'+id).css({
            'width': '5px',
            'border': 'none',
            'opacity': '1',
            radiusTop: '0%',
            radiusBottom: '0%'
        });
        $('#'+id).css('background-color', 'rgba(255,255,255, 1)');
        $('#'+id).children().css('margin-'+direction, '-250px');
    }
//fades in a glow over the bar filters
    let waitGlowFunc = (num, time, px, str) => {
      let waitGlow3 = setTimeout(function() {
        $('#q'+num).css('box-shadow', '0px 0px '+px+'px '+str+'px');
      }, time);
    }
//fades in and out over all the bar filters in a wave pattern
    let allGlow = () => {
      //left side
      waitGlowFunc('0', 000, 200, 20);
      waitGlowFunc('2', 100, 175, 1);
      waitGlowFunc('3', 200, 175, 1);
      waitGlowFunc('4', 300, 125, 1);
      waitGlowFunc('5', 400, 200, 1);
      waitGlowFunc('2', 500, 0, 0);
      waitGlowFunc('3', 600, 0, 0);
      waitGlowFunc('4', 700, 0, 0);
      waitGlowFunc('5', 800, 0, 0);
      waitGlowFunc('0', 800, 0, 0);
      //right side
      waitGlowFunc('0B', 000, 200, 20);
      waitGlowFunc('2B', 100, 175, 1);
      waitGlowFunc('3B', 200, 175, 1);
      waitGlowFunc('4B', 300, 125, 1);
      waitGlowFunc('5B', 400, 200, 1);
      waitGlowFunc('2B', 500, 0, 0);
      waitGlowFunc('3B', 600, 0, 0);
      waitGlowFunc('4B', 700, 0, 0);
      waitGlowFunc('5B', 800, 0, 0);
      waitGlowFunc('0B', 800, 0, 0);
    }

    $('#q1').on('click', function() {
            popIn('q1', 'left', 'border-top-left-radius', 'border-bottom-left-radius');
    });

    $('#q1B').on('click', function() {
            popIn('q1B', 'right', 'border-top-right-radius', 'border-bottom-right-radius');
    });

    $('#post, #photo').css('margin-bottom', '443px');
    $("#wrapper").css('opacity', '0');
    $("#wrapper").toggleClass("toggled");
    let wait = setTimeout(function() {
        $("#wrapper").css('opacity', '1');
    }, 1000);
//creates the post button once initial user info has been entered
    $(document).on('keypress', function(e) {
        if (e.which == 13) {
            e.preventDefault();
        }
        if ($('#name-input').val() !== '' && $('#photo-input').val() !== '' && !isCreated) {
            let postInfo = $('<div id="postData">POST</div>');
            postInfo.appendTo('body');
            isCreated = true;
            $('#postData').animate({ 'bottom': "150px" }, 'slow');
        }
    });

    $('.all-box-left, .all-box-right').css('cursor', 'default');
    let isToggled = false;
    let id = 'q';
    let leftOrRight = 'left';
//controls all toggle click functionality of the filter bars
    let type = (qId, curId, question) => {
        let lastChar = qId.substr(qId.length - 1);
        let chooseToggle = () => {
          if (lastChar === 'x') {
            if (leftOrRight !== 'left') {
              $('#sidebar-wrapper').toggleClass('right-slide');
            }
            $("#wrapper").toggleClass("toggled");
            leftOrRight = 'left';
          } else if (lastChar === 'B') {
            if (leftOrRight !== 'right') {
              $('#sidebar-wrapper').toggleClass('right-slide');
            }
            $("#wrapper").toggleClass("toggled");
            leftOrRight = 'right';
          }
        }
        if (!isToggled) {
            $('#match1').text(question);
            chooseToggle();
            isToggled = true;
            isQchosen = false;
            id = qId;
        } else {
            if (id === curId) {
                chooseToggle();
                isToggled = false;
                isQchosen = false;
            } else {
                $('#match1').html(question);
                isQchosen = true;
                isToggled = true;
                id = qId;
            }
        }
    }
//function to dictate all hover actions
    let hoverState = (id, question, height, width) => {
      $('#'+id).css({ 'width': width+'px', 'color': 'white' });
      if (!isQchosen) {
        $('.sidebar-nav').css('margin-top', height+'px');
      }
      if (isToggled && !isQchosen) {
          $('#match1').html(question);
      }
    }

    $("#q2-hover-box").on('mouseenter', function() {
      hoverState('q2', 'Lovely to touch, this is always on your mind.', '40', '13');
    });
    $("#q3-hover-box").on('mouseenter', function() {
      hoverState('q3', 'The times of darkness are really tough.', '90', '12');
    });
    $("#q4-hover-box").on('mouseenter', function() {
      hoverState('q4', 'The high of it is always reasonable in moderation.', '140', '11');
    });
    $("#q5-hover-box").on('mouseenter', function() {
      hoverState('q5', 'Existential anxiety is important.', '190', '10');
    });

    $("#q2-hover-boxB").on('mouseenter', function() {
      hoverState('q2B', 'You are just as important.', '40', '13');
    });
    $("#q3-hover-boxB").on('mouseenter', function() {
      hoverState('q3B', 'Commitment to fighting injustice requires danger.', '90', '12');
    });
    $("#q4-hover-boxB").on('mouseenter', function() {
      hoverState('q4B', 'Wealth is inherently wrong.', '140', '11');
    });
    $("#q5-hover-boxB").on('mouseenter', function() {
      hoverState('q5B', 'Your body can go fuck itself.', '190', '10');
    });

    $("#q0-hover-box").on('mouseenter', function() {
        $('#left-light').css('opacity', '1');
        if (!isQchosen) {
          $('.sidebar-nav').css('margin-top', '-10px');
        }
        if (isToggled && !isQchosen) {
            $('#match1').html('You like being alone more than with others.');
        }
    });
    $("#q0-hover-boxB").on('mouseenter', function() {
        $('#right-light').css('opacity', '1');
        if (!isQchosen) {
          $('.sidebar-nav').css('margin-top', '-10px');
        }
        if (isToggled && !isQchosen) {
            $('#match1').html('I aim for hoe status.');
        }
    });

    $("#q0-hover-box").on('mouseleave', function() {
        $('#left-light').css('opacity', '0');
    });
    $("#q0-hover-boxB").on('mouseleave', function() {
        $('#right-light').css('opacity', '0');
    });

    $(".all-box-left, .all-box-right").on('mouseleave', function() {

        $('.questions, .questionsB').css({ 'width': '2px', 'opacity': '1' });
    });
//parent function to the type function
    let clickBar = (id, question) => {
      $(document).on('click', id, function() {
          chosenBar = $(this);
          chosenId = chosenBar.attr('id');
          chosenQuestion = question;
          if (isPosted) {
              type(id, chosenId, chosenQuestion);
          }
      });
    }

    clickBar('div#q2-hover-box', 'Lovely to touch, bodies always on your mind.');
    clickBar('div#q3-hover-box', 'The times of darkness are also soothing.');
    clickBar('div#q4-hover-box', 'The high of it is always reasonable in moderation.');
    clickBar('div#q5-hover-box', 'Existential anxiety is important.');
    clickBar('div#q0-hover-box', 'You like being alone more than with others.');

    clickBar('div#q2-hover-boxB', 'You are just as important.');
    clickBar('div#q3-hover-boxB', 'Commitment to fighting injustice requires danger.');
    clickBar('div#q4-hover-boxB', 'Wealth is inherently wrong.');
    clickBar('div#q5-hover-boxB', 'Your body can go fuck itself.');
    clickBar('div#q0-hover-boxB', 'I aim for hoe status.');


    $('#friend-finder').on('mouseleave', function() {
        $('#button-hover').css('opacity', 0);
    });
    $('#friend-finder').on('mouseenter', function() {
        $('#button-hover').css('opacity', 1);
        $('button').css('cursor', 'pointer');
    });
//enables filter toggle functionality after the post button has begin clicked
//user may begin survey
    $(document).on('click', 'div#postData', function() {
        $('.all-box-left, .all-box-right').css('cursor', 'pointer');
        isPosted = true;
        newCharacter.name = $('#name-input').val().trim();
        newCharacter.photo = $('#photo-input').val().trim();
        $('#name-input').css({'width': '0', 'margin-left': '250px', 'opacity': '0'});
        $('#photo-input').css({'width': '0', 'margin-right': '268px', 'opacity': '0'});
        $('#postData').fadeOut();
        $('<div id="instruct"></div>').appendTo('body');
        $('#instruct').html('Toggle filters for compatibility analysis<br>Double Click To Lock In Question');
        $('#instruct').fadeTo(1000, 1);

        allGlow()
    });
//functionality for each button/answer chosen
//post sent after 10 questions have been answered
    $('.all-buttons').on('click', function(e) {
        e.preventDefault();
        allGlow();
        $('#q1').children().fadeOut('slow');
        isQchosen = false;
        isToggled = false;
        let answer = $(this);
        let ansNumber = answer.attr('data-num');
        scoreArr.push(ansNumber);
        $("#wrapper").toggleClass("toggled");
        let chosenId = $(this).attr('id');
        chosenBar.css('pointer-events', 'none');
        newCharacter.scores = scoreArr;
        if (newCharacter.scores.length > 9) {
            newCharacter.scores = newCharacter.scores.toString();
            $.post("/api/friends", newCharacter)
                .done(function(req, res) {
                    popOutLeft('q1', 'right');
                    popOutRight('q1B', 'left');
                    let divName = $('<div id="div-name" class="stats"></div>');
                    divName.html("Name: " + req.name).appendTo('#q1');
                    let imgPhoto = $('<img id="img-photo" class="stats">');
                    imgPhoto.attr('src', req.photo).appendTo('#q1');
                    let divMatch = $('<div id="div-match" class="stats"></div>');
                    divMatch.html("Friend Match: " + req.match).appendTo('#q1B');
                    let matchPhoto = $('<img id="match-photo" class="stats">');
                    matchPhoto.attr('src', req.matchPhoto).appendTo('#q1B');
                    $('.stats').css('opacity', '1');
                    $('#instruct').html('');
                    let a = $('<a id="results" href="/results"></a>').html('Click Here to View All Friends');
                    a.appendTo('#instruct');
                });
        }
    });

});
