
//header clickでページ内scroll
$(function(){
	$('header a').click(function(){
    	var id = $(this).attr('href');
    	var position = $(id).offset().top;
    	$('html,body').animate ({
      	'scrollTop' : position
    	},800);
  	});
});



//page-topに戻る
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
 



// グローバル変数
var syncerTimeout = null ;
// 一連の処理
$(function(){
	// スクロールイベントの設定
	$( window ).scroll( function(){
		// 1秒ごとに処理
		if( syncerTimeout == null ){
			// セットタイムアウトを設定
			syncerTimeout = setTimeout( function(){
				// 対象のエレメント
				var element = $( '#page-top' ) ;
				// 現在、表示されているか？
				var visible = element.is( ':visible' ) ;
				// 最上部から現在位置までの距離を取得して、変数[now]に格納
				var now = $( window ).scrollTop() ;
				// 最下部から現在位置までの距離を計算して、変数[under]に格納
				var under = $('body').height() - ( now + $(window).height() ) ;
				// 最上部から現在位置までの距離(now)が1500以上かつ
				// 最下部から現在位置までの距離(under)が200px以上かつ…
				if( now > 1500 && 200 < under ){
					// 非表示状態だったら
					if( !visible ){
						// [#page-top]をゆっくりフェードインする
						element.fadeIn( 'slow' ) ;
					}
				}
				// フラグを削除
				syncerTimeout = null ;
			} , 1000 ) ;
		}
	});

	// クリックイベントを設定する
	$('#move-page-top').click(function(){
			// スムーズにスクロールする
			$( 'html,body' ).animate({
				scrollTop : 0
			},800 ) ;
	});
});