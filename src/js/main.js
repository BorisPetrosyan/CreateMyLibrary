import $ from './lib/lib';


$('button').on('click', function() {
    //$('div').html('div').toggleClass('active');

    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
})

// console.log($('button').html('hellow '))