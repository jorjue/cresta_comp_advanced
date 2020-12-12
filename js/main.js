jQuery(function($) {

    // ファーストビュー過ぎると色がつくやつ
    $(window).on("scroll", function() {
        // ファーストビューのheightを取得
        const slideHeight = $('#fv').height();

        // ファーストビュー過ぎたら背景色のクラスを付加
        if (slideHeight - 1 < $(this).scrollTop()) {
            $('#header').addClass('fv-after');
        } else {
            $('#header').removeClass('fv-after');
        }
    });

    // ファーストビューの背景画像を変えるやつ
    $('#fv').bgSwitcher({
        images: ['img/fv-1.png', 'img/fv--2.png', 'img/fv-5.png'],
    });
});