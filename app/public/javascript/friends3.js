$(document).on('ready', function() {
    let isCreated = false;
    let newCharacter = {
        name: 'patrick',
        photo: 'https://pbs.twimg.com/profile_images/784404948700262400/xENRN2IK.jpg',
        scores: [],
        match: ''
    };
    let scoreArr = [];
    let isPosted = false;
    let chosenBar;
    let chosenId;
    let chosenQuestion;
    let isQchosen = false;

    // let createPopup = (match) => {
    //     let pop = $('<div id="popup"></div>');
    //     pop.appendTo('body');
    //     $('#popup').css({
    //         'position': 'absolute',
    //         'width': '500px',
    //         'height': '35px',
    //         'zIndex': '10',
    //         'top': '0',
    //         'left': '35%',
    //         'margin-top': '300px',
    //         'background-color': 'rgba(255,255,255, .5)',
    //         'border': '1px solid white',
    //         'opacity': '.3'
    //     });
    //     $('#display-match').html(match);
    // }

    let popOut = (id, direction, radiusTop, radiusBottom) => {
        $('#'+id).css({
            'width': '250px',
            'border': '1px solid white',
            'opacity': '.5',
            radiusTop: '10%',
            radiusBottom: '10%'
        });
        $('#'+id).css('background-color', 'rgba(255,255,255, 0)');
        $('#'+id).children().css('margin-'+direction, '0px');
    }

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
    let type = (qId, curId, question) => {
        let lastChar = qId.substr(qId.length - 1);
        let chooseToggle = () => {
          if (lastChar === 'x') {
            if (leftOrRight !== 'left') {
              $('#sidebar-wrapper').toggleClass('right-slide');
            }
            // $('#sidebar-wrapper').toggleClass('left-slide');
            $("#wrapper").toggleClass("toggled");
            leftOrRight = 'left';
          } else if (lastChar === 'B') {
            if (leftOrRight !== 'right') {
              $('#sidebar-wrapper').toggleClass('right-slide');
            }
            // $('#sidebar-wrapper').toggleClass('left-slide');
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

    let hoverState = (id, question, height) => {
      $('#'+id).css({ 'width': '15px', 'color': 'white' });
      // $('#'+id).toggleClass("toggleBar");
      if (!isQchosen) {
        $('.sidebar-nav').css('margin-top', height+'px');
      }
      if (isToggled && !isQchosen) {
          $('#match1').html(question);
      }
    }

    $("#q2-hover-box").on('mouseenter', function() {
      hoverState('q2', 'Lovely to touch, this is always on your mind.', '40')
    });
    $("#q3-hover-box").on('mouseenter', function() {
      hoverState('q3', 'The times of darkness are really tough.', '90')
    });
    $("#q4-hover-box").on('mouseenter', function() {
      hoverState('q4', 'The high of it is always reasonable in moderation.', '140')
    });
    $("#q5-hover-box").on('mouseenter', function() {
      hoverState('q5', 'Existential anxiety is important.', '190')
    });

    $("#q2-hover-boxB").on('mouseenter', function() {
      hoverState('q2B', 'Lovely to touch, this is always on your mind.', '40')
    });
    $("#q3-hover-boxB").on('mouseenter', function() {
      hoverState('q3B', 'The times of darkness are really tough.', '90')
    });
    $("#q4-hover-boxB").on('mouseenter', function() {
      hoverState('q4B', 'The high of it is always reasonable in moderation.', '140')
    });
    $("#q5-hover-boxB").on('mouseenter', function() {
      hoverState('q5B', 'Existential anxiety is important.', '190')
    });

    $("#q0-hover-box").on('mouseenter', function() {
        $('#left-light').css('opacity', '1');
        if (!isQchosen) {
          $('.sidebar-nav').css('margin-top', '-10px');
        }
        if (isToggled && !isQchosen) {
            $('#match1').html('You like being alone more than with others');
        }
    });
    $("#q0-hover-boxB").on('mouseenter', function() {
        $('#right-light').css('opacity', '1');
        if (!isQchosen) {
          $('.sidebar-nav').css('margin-top', '-10px');
        }
        if (isToggled && !isQchosen) {
            $('#match1').html('You like being alone more than with others');
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

    let clickBar = (id, question, css) => {
      $(document).on('click', id, function() {
          chosenBar = $(this);
          chosenId = chosenBar.attr('id');
          chosenQuestion = question;
          if (isPosted) {
              type(id, chosenId, chosenQuestion);
          }
          css;
      });
    }

    let css3 = $('#q3').css({ 'width': '13px', 'color': 'white' });
    let css4 = $('#q4').css({ 'width': '11px', 'color': 'white' });
    let css5 = $('#q5').css({ 'width': '9px', 'color': 'white' });
    let css0 = $('#left-light').css('opacity', '1');

    clickBar('div#q2-hover-box', 'Lovely to touch, this is always on your mind.');
    clickBar('div#q3-hover-box', 'The times of darkness are really tough.', css3);
    clickBar('div#q4-hover-box', 'The high of it is always reasonable in moderation.', css4);
    clickBar('div#q5-hover-box', 'Existential anxiety is important.', css5);
    clickBar('div#q0-hover-box', 'You like being alone more than with others.', css0);

    clickBar('div#q2-hover-boxB', 'Lovely to touch, this is always on your mind.');
    clickBar('div#q3-hover-boxB', 'The times of darkness are really tough.', css3);
    clickBar('div#q4-hover-boxB', 'The high of it is always reasonable in moderation.', css4);
    clickBar('div#q5-hover-boxB', 'Existential anxiety is important.', css5);
    clickBar('div#q0-hover-boxB', 'You like being alone more than with others.', css0);


    $('#friend-finder').on('mouseleave', function() {
        $('#button-hover').css('opacity', 0);
    });
    $('#friend-finder').on('mouseenter', function() {
        $('#button-hover').css('opacity', 1);
        $('button').css('cursor', 'pointer');
    });

    let waitGlowFunc = (num, time, px, str) => {
      let waitGlow3 = setTimeout(function() {
        $('#q'+num).css('box-shadow', '0px 0px '+px+'px '+str+'px');
      }, time);
    }

    $(document).on('click', 'div#postData', function() {
        $('.all-box-left, .all-box-right').css('cursor', 'pointer');
        isPosted = true;
        newCharacter.name = $('#name-input').val().trim();
        newCharacter.photo = $('#photo-input').val().trim();
        $('#name-input').fadeOut();
        $('#photo-input').fadeOut();
        $('#postData').fadeOut();
        $('<div id="instruct"></div>').appendTo('body');
        $('#instruct').html('Toggle filters for compatibility analysis');
        $('#instruct').fadeTo(1000, 1);
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
    });

    $('.all-buttons').on('click', function(e) {
        e.preventDefault();
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
        if (newCharacter.scores.length > 4) {
            newCharacter.scores = newCharacter.scores.toString();
            $.post("/api/friends", newCharacter)
                .done(function(req, res) {
                    popOut('q1', 'right', 'border-top-right-radius', 'border-bottom-right-radius');
                    popOut('q1B', 'left', 'border-top-left-radius', 'border-bottom-left-radius');
                    let divName = $('<div id="div-name" class="stats"></div>');
                    divName.html("Name: " + req.name).appendTo('#q1');
                    let imgPhoto = $('<img id="img-photo" class="stats">');
                    imgPhoto.attr('src', req.photo).appendTo('#q1');
                    let divMatch = $('<div id="div-match" class="stats"></div>');
                    divMatch.html("Friend Match: " + req.match).appendTo('#q1');
                    $('.stats').css('opacity', '1');
                });
        }
    });

    // $(document).on('click', 'div.noclick', function(event){
    //    event.preventDefault();
    // });

    // $('#q1-contain').on('mouseenter', function() {
    //   popOut();
    // });
    // $('#q1-contain').on('mouseleave', function() {
    //   if ($('#q1').children().length < 1){
    //     popIn();
    //   }
    // });

    // $('.all-box, #q0-hover-box').toggleClass('noclick');
});
