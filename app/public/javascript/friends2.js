$(document).on('ready', function() {
    let isCreated = false;
    let newCharacter = {
        name: 'patrick',
        photo: 'https://pbs.twimg.com/profile_images/784404948700262400/xENRN2IK.jpg',
        scores: [],
        match: ''
    };

    let createPopup = (match) => {
        let pop = $('<div id="popup"></div>');
        pop.appendTo('body');
        $('#popup').css({
            'position': 'absolute',
            'width': '500px',
            'height': '35px',
            'zIndex': '10',
            'top': '0',
            'left': '35%',
            'margin-top': '300px',
            'background-color': 'rgba(255,255,255, .5)',
            'border': '1px solid white',
            'opacity': '.3'
        });
        $('#display-match').html(match);
    }

    $('#q1').on('click', function() {
            popIn();
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
    $('.all-box-left').css('cursor', 'default');
    let isToggled = false;
    let id = 'q';
    let type = (qId, curId, question) => {
        if (!isToggled) {
            $('#match1').text(question);
            $("#wrapper").toggleClass("toggled");
            isToggled = true;
            id = qId;
        } else {
            if (id === curId) {
                $("#wrapper").toggleClass("toggled");
                isToggled = false;
            } else {
                $('#match1').html(question);

                isToggled = false;
                id = qId;
            }
        }
    }

    $("#q2-hover-box").on('mouseenter', function() {
        $('#q2').css({ 'width': '15px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '40px');
        if (isToggled) {
            $('#match1').html('Lovely to touch, this is always on your mind.');
        }
    });

    $("#q3-hover-box").on('mouseenter', function() {
        $('#q3').css({ 'width': '13px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '90px');
        if (isToggled) {
            $('#match1').html('The times of darkness are really tough.');
        }
    });

    $("#q4-hover-box").on('mouseenter', function() {
        $('#q4').css({ 'width': '11px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '140px');
        if (isToggled) {
            $('#match1').html('The high of it is always reasonable in moderation');
        }
    });

    $("#q5-hover-box").on('mouseenter', function() {
        $('#q5').css({ 'width': '9px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '190px');
        if (isToggled) {
            $('#match1').html('Existential anxiety is important');
        }
    });

    $("#q0-hover-box").on('mouseenter', function() {
        $('#left-light').css('opacity', '1');
        $('.sidebar-nav').css('margin-top', '-10px');
        if (isToggled) {
            $('#match1').html('You like being alone more than with others');
        }
    });

    $("#q0-hover-box").on('mouseleave', function() {
        $('#left-light').css('opacity', '0');
    });

    $(".all-exit, .all-box").on('mouseleave', function() {
        $('.questions').css({ 'width': '2px', 'opacity': '1' });
    });

    // $(document).on('click', 'div.noclick', function(event){
    //    event.preventDefault();
    // });
    let chosenBar;
    let scoreArr = [];


        //1st left bar
    $(document).on('click', 'div#q2-hover-box', function() {
        chosenBar = $(this);
        let current2 = chosenBar.attr('id');
        let question2 = 'Lovely to touch, this is always on your mind.';
        if (isPosted) {
            type('q2-hover-box', current2, question2);
        }
        $('.sidebar-nav').css('margin-top', '-10px');
    });
    //2nd left bar
    $(document).on('click', 'div#q3-hover-box', function(e) {
        // e.preventDefault();
        chosenBar = $(this);
        let current3 = $(this).attr('id');
        let question3 = 'The times of darkness are really tough.';
        if (isPosted) {
            type('q3-hover-box', current3, question3);
        }
        $('#q3').css({ 'width': '13px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '-10px');
    });
    //3rd left bar
    $(document).on('click', 'div#q4-hover-box', function(e) {
        // e.preventDefault();
        chosenBar = $(this);
        let current4 = $(this).attr('id');
        let question4 = 'The high of it is always reasonable in moderation';
        if (isPosted) {
            type('q4-hover-box', current4, question4);
        }
        $('#q4').css({ 'width': '11px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '-10px');
    });
    //4rd left bar
    $(document).on('click', 'div#q5-hover-box', function(e) {
        // e.preventDefault();
        chosenBar = $(this);
        let current5 = $(this).attr('id');
        let question5 = 'Existential anxiety is important';
        if (isPosted) {
            type('q5-hover-box', current5, question5);
        }
        $('#q5').css({ 'width': '9px', 'color': 'white' });
        $('.sidebar-nav').css('margin-top', '-10px');
    });
    //5rd left bar
    $(document).on('click', 'div#q0-hover-box', function(e) {
        // e.preventDefault();
        chosenBar = $(this);
        // console.log(chosenBar);
        let current6 = $(this).attr('id');
        let question6 = 'You like being alone more than with others';
        if (isPosted) {
            type('q0-hover-box', current6, question6);
        }
        $('#left-light').css('opacity', '1');
    });

    $('#friend-finder').on('mouseleave', function() {
        $('#button-hover').css('opacity', 0);
    });
    $('#friend-finder').on('mouseenter', function() {
        $('#button-hover').css('opacity', 1);
        $('button').css('cursor', 'pointer');
    });

    let popOut = () => {
        $('#q1').css({
            'width': '250px',
            'border': '1px solid white',
            'opacity': '.5',
            'border-top-right-radius': '10%',
            'border-bottom-right-radius': '10%'
        });
        $('#q1').css('background-color', 'rgba(255,255,255, 0)');
        $('#q1').children().css('margin-left', '0px');
    }

    let popIn = () => {
        $('#q1').css({
            'width': '5px',
            'border': 'none',
            'opacity': '1',
            'border-top-right-radius': '0%',
            'border-bottom-right-radius': '0%'
        });
        $('#q1').css('background-color', 'rgba(255,255,255, 1)');
        $('#q1').children().css('margin-left', '-250px');
    }





    // $('.all-box, #q0-hover-box').toggleClass('noclick');
    let isPosted = false;
    $(document).on('click', 'div#postData', function() {
        $('.all-box-left').css('cursor', 'pointer');
        isPosted = true;
        newCharacter.name = $('#name-input').val().trim();
        newCharacter.photo = $('#photo-input').val().trim();
        $('#name-input').fadeOut();
        $('#photo-input').fadeOut();
        $('#postData').fadeOut();
        $('<div id="instruct"></div>').appendTo('body');
        $('#instruct').html('Toggle filters for compatibility analysis');
        $('#instruct').fadeTo(1000, 1);
        // $('#q1-contain').on('mouseenter', function() {
        //   popOut();
        // });
        // $('#q1-contain').on('mouseleave', function() {
        //   if ($('#q1').children().length < 1){
        //     popIn();
        //   }
        // });

        // $('.all-box, #q0-hover-box').toggleClass('noclick');

        // $('#q2').css('opacity', '1');
        // $('#q3').css('opacity', '1');
        // $('#q4').css('opacity', '1');
        // $('#q5').css('opacity', '1');
        // $('#q6').css('opacity', '1');
        // $('#q2').css('transition', 'all .5s ease');
        // $('#q3').css('transition', 'all .5s ease');
        // $('#q4').css('transition', 'all .5s ease');
        // $('#q5').css('transition', 'all .5s ease');
        // $('#q6').css('transition', 'all .5s ease');
        // $('#q2').css('margin-left', '40%');
        // $('#q3').css('margin-left', '37%');
        // $('#q4').css('margin-left', '34%');
        // $('#q5').css('margin-left', '31%');
        // $('#q6').css('margin-left', '28%');
    });


    $('.all-buttons').on('click', function(e) {
        e.preventDefault();
        $('#q1').children().fadeOut('slow');
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
                    popOut();
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




});
