/**
 * Created by Jackson on 7/11/16.
 */

$(document).ready(function(){
    var titles = [
        'A Spiral Galaxy',
        'A Beautiful Nebula',
        'Many Galaxies',
        'Planet Saturn',
        'Saturn\'s Rings'
    ];

    $('.block img').mouseenter(function(){
        var randhex = '#'+Math.floor(Math.random()*16777215).toString(16);
        var index = $(this).attr('name').substring(5, 6);

        $(this).css('border-color', randhex);
        $('.image').fadeOut('fast', function(){
            $('.image').attr('src', 'images/image' + index + '.jpg');
        })
            .fadeIn('fast')
            .css('border-color', randhex);

        $('#desc').fadeOut('fast', function(){
            $('#desc').text(titles[index - 1]);
        }).fadeIn('fast');
    }).mouseleave(function(){
        $(this).css('border-color', '#555')
    });
});