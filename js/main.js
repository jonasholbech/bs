$(document).ready(function(){


        $(".fancybox").fancybox();


    $('body').scrollspy({ target: '#mainNav' })




    $("input[name=firstname]").keyup(function(){
        //console.log("firstname changed");
        $("h1").html($("input[name=firstname]").val());
    });
    /*
    var myElement = $(".mainContent .row div:nth-child(3) img");
    myElement.click(changeOnClick);

    function changeOnClick(){
        myElement.attr('src', 'https://s-media-cache-ak0.pinimg.com/236x/77/15/e7/7715e7ea54a010649d68b3a7198a8920.jpg');
    }*/
    /*
    $( "h1" ).click(function() {
        $( ".mainContent" ).animate({
            opacity: 0.65,
            marginRight: '+=200',
            width:'50%'
        }, 5000, function() {
            // Animation complete.
            $('.mainContent').css('opacity', 1)
        });
    });
*/

    /*
    $('.mainContent p').hide();
    $('.mainContent img').click(imgClicked);

    function imgClicked(){
        $(this).slideUp();
        $(this).next().fadeIn();
    }
    */
    /*
    $( "h2" ).hover(
        function() {
            $(this).addClass('glyphicon');
            $(this).addClass('glyphicon-ok');
        }, function() {
            $(this).removeClass('glyphicon');
            $(this).removeClass('glyphicon-ok');
        }
    );


    $('h2').css('color', '#00F');
    //chaining, we do one thing at a time
    $('h1').slideUp().slideDown().fadeOut().fadeIn();

    //toggle all img
    $('img').hide();
    $("h2").click(imgClicked);
    function imgClicked(){
        $(this).next().slideToggle();
    }
    */
    //end jQuery
});