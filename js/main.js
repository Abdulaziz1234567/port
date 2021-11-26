
function loadData() {
    return new Promise((resolve, reject) => {
        $('body').css({overflow:'hidden'})
        $('.preloader').css({display:'flex'})
        setTimeout(resolve, 4000);
    });
}
loadData()
    .then(() => {
        $('.preloader').css({display:'none'});
        $('body').css({overflow:'auto'});
        var sections = $('.section'), header = $('header'), header_height = header.outerHeight();
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - header_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                header.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                header.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });

window.onload = function(){
    var sections = $('.section'), header = $('header'), header_height = header.outerHeight();
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - header_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                header.find('a').removeClass('active');
                sections.removeClass('active');
                $(this).addClass('active');
                header.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
    header.find('a').on('click', function () {
        var $el = $(this), id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - header_height
        }, 700);
        return false;
    });

    /* Menu nav toggle */
    $(".nav-toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $(".nav_list").toggleClass("active");
    });
        $('.work-item').click(function(){
            var id =  $(this).data('id');
            $('#id').val(id);
        })
    $(".mouse").on("click", function (e) {
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 800);
        return false;
    });


    $('.open-modal-work-js').on('click', function(){
        var get_id = $(this).attr("data-id");
        $.ajax({
            type: 'POST',
            url: 'modal_work.php',
            data: {
                id: get_id
            },
            success: (data) => {
                $('#wrapper-modal-work').html(data);
            }
        });
    });
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal-window').fadeOut();
            $('body').css({overflow:'auto'});
        }
    });
    // Клик по фону, но не по окну.
    $('#wrapper-modal-work').click(function(e) {
        if ($(e.target).closest('.modal_content').length == 0) {
            $(this).fadeOut();
            $('body').css({overflow:'auto'});
        }
    });
    $('.open-modal-work-js').click(function(){
        var modal = $('#wrapper-modal-work');
        $('body').css({overflow:'hidden'});
        modal.fadeIn();
    });
    //проверка заполнения обяз-х полей
    // $('.form_group-text').blur(function (){
    //     if ($(this).val()=='') {
    //         $(this).css({'border': '1px solid red'});
    //         $(this).addClass('red');
    //     } else {
    //         $(this).css({'border': '1px solid #50C8EE', 'color': '#000'});
    //         $(this).removeClass('red');
    //     }
    // });
    // $('.form_btn').click(function(){
    //     if (grecaptcha.getResponse() == ""){
    //         $('#error').text('Подтвердите что вы не робот!');
    //     } else {
    //         // собираем данные с формы
    //         var user_name = $('#user-name').val();
    //         var user_email = $('#user-email').val();
    //         var user_message = $('#user-message').val();
    //         // отправляем данные
    //         $.ajax({
    //             url: "contact.php", // куда отправляем
    //             type: "post", // метод передачи
    //             data: { // что отправляем
    //                 "user-name": user_name,
    //                 "user-email": user_email,
    //                 "user-message": user_message
    //             },
    //             error: function () {
    //                     $('#error').text("Произошла ошибка отправки сообщения!");
    //             },

    //             success: function (result) {
    //                 if (user_name==="" && user_email==="" && user_message===""){
    //                     $('#error').text("Произошла ошибка, заполните все поля!");
    //                 } else {
    //                     $('#error').text(user_name + ', Ваше сообщение отправлено.').fadeOut(3000);
    //                     $('.contacts_form').trigger("reset");
    //                 }
    //             }
    //         });
    //     }
    // });

    if(window.matchMedia('(max-width: 990px)').matches){
        $('.nav-link').click(function (){
            $('.nav-toggle').toggleClass('active');
            $(".nav_list").toggleClass("active");
        });
    }

}