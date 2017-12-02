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
		})(jQuery);

		$(function() {
			$('.tab li').click(function(){
				var index = $('.tab li').index(this);
				$('.tab li').removeClass('active');
				$(this).addClass('active');
				$('.area ul').removeClass('show').eq(index).addClass('show');
			})
		})(jQuery);

		$(function() {
		    //クリックしたときのファンクションをまとめて指定
		    $('.tab li').click(function() {
        		//.index()を使いクリックされたタブが何番目かを調べ、
        		//indexという変数に代入します。
        		var index = $('.tab li').index(this);
        		//コンテンツを一度すべて非表示にし、
        		$('.content ul').css('display','none');
        		//クリックされたタブと同じ順番のコンテンツを表示します。
	    	    $('.content ul').eq(index).css('display','block');
    		    //一度タブについているクラスactiveを消し、
        		$('.tab li').removeClass('active');
        		//クリックされたタブのみにクラスactiveをつけます。
        		$(this).addClass('active')
    		});
		});











 $(function () {
        // モーダルウィンドウを開く
        function showModal(event) {
            event.preventDefault();

            var $shade = $('<div></div>');
            $shade
                .attr('id', 'shade')
                .on('click', hideModal);


            var $modalWin = $('#modalwin');
            var $window = $(window);
            var posX = ($window.width() - $modalWin.outerWidth()) / 2;
            var posY = ($window.height() - $modalWin.outerHeight()) / 2;

            $modalWin
                .before($shade)
                .css({left: posX, top: posY})
                .removeClass('hide')
                .addClass('show')
                .on('click', 'button', function () {
                    hideModal();
                });
        }

        function hideModal() {
            $('#shade').remove();
            $('#modalwin')
                .removeClass('show')
                .addClass('hide');
        }

        $('.show-modal').on('click', showModal);

    }());