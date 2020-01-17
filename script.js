// top menu
$(window).scroll(function () { 
    if(window.pageYOffset == 0){
        $('nav').removeClass('navBlack');
    }else{
        $('nav').addClass('navBlack');
    }
});

let flagTogle = true;
$('.navbar-toggler').click(function () { 
    if (window.pageYOffset == 0) {
        if(flagTogle == true){
            $('nav').addClass('navBlack');
            flagTogle = false;
        }
        else{
            $('nav').removeClass('navBlack');
            flagTogle = true;
        }
    }
});

// добавить строку фоток
$('.grid-item').hide();
$('.grid-item:nth-child(1)').show();
$('.grid-item:nth-child(2)').show();
$('.grid-item:nth-child(3)').show();
$('.grid-item:nth-child(4)').show();
let elements = document.querySelectorAll('.grid-item');
let count = 5;
$('#showFoto').click(function () { 
    for (let i = count; i < count+4; i++) {
        $(`.grid-item:nth-child(${i})`).slideDown(500);
    }
    count = count + 4;
    if (count == elements.length+1) {
        $('#showFoto').hide();
    }
});

// прокурутка
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-100;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#ClassLinkCalc").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top-100;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// закрытие модалки при клике
$('.modal-footer > a').click(function () { 
    $('#exampleModal').modal('hide');
});

// цены на дневной
$('.price1 .rowCatalog1').hide();
$('.price1 .rowCatalog1:nth-child(2)').show();
let elements2 = document.querySelectorAll('.price1 .rowCatalog1');
let count2 = 3;
$('.showPrice1').click(function () { 
    $(`.price1 .rowCatalog1:nth-child(${count2})`).slideDown(500);
    count2 ++;
    if (count2 == elements2.length+2) {
        $('.showPrice1').hide();
    }
});

// цены на полный
$('.price .rowCatalog').hide();
$('.price .rowCatalog:nth-child(2)').show();
let elements1 = document.querySelectorAll('.price .rowCatalog');
let count1 = 3;
$('.showPrice').click(function () { 
    $(`.price .rowCatalog:nth-child(${count1})`).slideDown(500);
    count1 ++;
    if (count1 == elements1.length+2) {
        $('.showPrice').hide();
    }
});

// table
for (let i = 0; i < 10; i++) {
    $('#schedule').append('<tr></tr>');
    for (let a = 0; a < 7; a++) {
        $('#schedule tr:last-child').append(`<td> </td>`);
    }
}

// Первая строка таблицы
let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for (let i = 0; i < 7; i++) {
    $(`#schedule tr:first-child td:nth-child(${i+1})`).text(week[i]);
}

// Заполнение
let time = ['10:00', '11:00', '12:00', '12:30', '17:00', '18:00', '19:00', '20:00'];
for (let i = 1; i < 4; i++) {
    for (let a = 5; a < 7; a++) {
        $(`#schedule tr:nth-child(${i+1}) td:nth-child(${a+1})`).text(time[i-1]);
    }
}

$(`#schedule tr:nth-child(4) td:nth-child(1)`).text(time[3]);
$(`#schedule tr:nth-child(4) td:nth-child(5)`).text(time[3]);

for (let i = 6; i < 10; i++) {
    for (let a = 0; a < 5; a++) {
        $(`#schedule tr:nth-child(${i+1}) td:nth-child(${a+1})`).text(time[i-2]);
    }
}

$(`#schedule tr:nth-child(10) td:nth-child(2)`).text('');
$(`#schedule tr:nth-child(10) td:nth-child(4)`).text('');


// mobile
if ($(window).width() < 450) {
    $('.navbar-expand-lg').removeClass('px-5');
    $('.navbar-expand-lg').addClass('px-1');
}