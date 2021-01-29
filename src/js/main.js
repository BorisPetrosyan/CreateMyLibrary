import $ from './lib/lib';


$('button').on('click', function() {
    //$('div').html('div').toggleClass('active');

    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
})

// console.log($('div').eq(2).find('.some'))
// console.log($('.some').closest('.findme'))
// console.log($('.some').eq(2).siblings())
// console.log($('.findme').siblings())


// console.log($('button').html('hellow '))