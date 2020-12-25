jQuery(function($) {

    // ファーストビュー過ぎると色がつくやつ
    $(window).on("scroll", function() {
        // ファーストビューのheightを取得
        const slideHeight =  [
            $('#fv').height(),
            $('#ct').height(),
        ];

        // ファーストビュー過ぎたら背景色のクラスを付加
        if (slideHeight[0] === undefined) {
            if (slideHeight[1] - 20 < $(this).scrollTop()) {
                $('#header').addClass('fv-after');    
            } else {
                $('#header').removeClass('fv-after');    
            }
        } else {
            if (slideHeight[0] - 10 < $(this).scrollTop()) {
                $('#header').addClass('fv-after');
            } else {
                $('#header').removeClass('fv-after');
            }
        }
    });

    // ファーストビューの背景画像を変えるやつ
    $('#fv').bgSwitcher({
        images: ['img/fv-1.png', 'img/fv--2.png', 'img/fv-5.png'],
    });

    // submitボタン無効化
    $('#submit').click(function(e) {
        e.preventDefault();
        alert('こちらは未実装となります。');
    });

    $('#bg-menu').click(function() {
        $(this).toggleClass('active');
        $('#close').toggleClass('active');
        $('#window').fadeIn(600);
        $('#close').fadeIn();
    });

    $('#close').click(function() {
        $('#window').fadeOut(600);
        $(this).toggleClass('active');
        $('#bg-menu').toggleClass('active');
    });
});