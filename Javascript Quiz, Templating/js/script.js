$(function () {

var html = $('#test').html();
var content = tmpl(html, gen);
$('.wrapper').append(content);

var score = 0;
$('#send').click(function () {
    $('input:checked').each(function () {
        var code = $(this).attr('id');
        code = parseInt(code);

        for (var k = 0; k<correct.length; k++){
            if(code === correct[k]){
                score += 1;
                console.log('k', k)
            }
        }

    })

    $('.modal').show(function () {
            if(score>4){
                $('.result').html('Поздравляю, ты крут ! 5 из 5')
            } else {
                $('.result').html('Такое, ' +score+ ' из 5')
            }
    });
    $('.modal').click(function () {
        $(this).hide();
        score = 0;
    });

})
$('#reset').click(function () {
        var obj = $('input')
        for (var i = 0; i<obj.length; i++){
            obj[i].checked = false;
        }
    }
    );
})
