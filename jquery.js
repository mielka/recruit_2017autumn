		(function($) {
		    $(function() {
		        var $header = $('#top-head');
		        // Nav Fixed
		        $(window).scroll(function() {
		            if ($(window).scrollTop() > 350) {
		                $header.addClass('fixed');
		            } else {
		                $header.removeClass('fixed');
		            }
		        });
		        // Nav Toggle Button
		        $('#nav-toggle').click(function(){
		            $header.toggleClass('open');
		        });
		    });
		})(jQuery);

		//アコーディオン
		$(function(){
			$(".sp-btn").on('click',function(){
				//スライドトグル
				$("+p",this).slideToggle("fast");
				//アイコン画像のパスを取得
				var pass01=$(this).attr("class");
				var pass02=pass01.indexOf("open");
				//画像パスの_onと_offの切り替え
				if(pass02!=-1){
						$(this).removeClass('open').text('詳細を見る');
					}else{
						$(this).addClass('open').text('閉じる');
					}
				});
		});
