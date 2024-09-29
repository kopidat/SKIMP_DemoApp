M.onReady(function(){
	pageEvent();
}).onRestore(function(){

}).onHide(function(){

}).onResume(function(){

}).onPause(function(){

}).onDestroy(function(){

}).onBack(function(){
	M.page.back();
}).onKey(function(evt){
	M.tool.log(evt.key, evt.events);
	if (evt.key === 'home' && evt.events === 'keydown') {
		WNLog('')
	}
});

var pageEvent = function(){
	// uikit 링크
	$("[data-instance-class='menu-info']").click(function(){
		var stackInfo = M.info.stack();
		if(stackInfo.length > 1 && stackInfo[stackInfo.length-2].key.indexOf('view_content1.html') > -1){
			M.page.back();
		}else{
			M.page.html("../uikit/view_content1.html",{
				action : "NEW_SCR",
				orient : "PORT"
			});
		}
	});

	// 메뉴닫기
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});

	$("[data-instance-class='goDetail']>li").click(function(){
		// 페이지 이동
		M.page.html("s10_noticeView_nhlife.html",{
			action:"NEW_SCR",
			orient:"PORT"
		});
	})


	// 이전 버튼 클릭시
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});
}



$(window).ready(function(event){
	// 공지사항
	var allAccordion = $('.notice-list > dl > dd').hide();
	$('.notice-list > dl > dt').click(function() {
		if($(this).next().css('display') != 'block'){
			allAccordion.slideUp();
			$(this).next().slideDown();
			$(this).addClass('active').parent().siblings('dl').find('dt.active').removeClass('active');
		}else {
			$(this).next().slideUp();
			$(this).removeClass('active');
		}
		return false;
	});

	/* 네비게이션 */
	var $btnNavi = $('.side-menu'),
		$allMenu = $('.all_menu'),
		allMenuW = $allMenu.width(),
		$menuClose = $('.menu_close'),
		menu_1dep = $('.menu_1dep > li'),
		$menu_1depA = menu_1dep.find('>a');

	$btnNavi.on('click', function(){
		$allMenu.show().stop().animate({'left':0});
		$('body').append('<div class="dimm100"></div>');
		$('html, body').css('overflow-y','hidden');
		$menuClose.on('click', function(){
			$allMenu.stop().animate({'left':-allMenuW+'px'}, function(){
				$allMenu.hide();
				$('body .dimm100').remove();
				$('html, body').css('overflow-y','auto');
			});
		});
	});

	$menu_1depA.on('click', function(){
		var $this = $(this);
		var swich = false;
		if(!($this.parent().hasClass('on'))){
			menu_1dep.removeClass('on');
			$this.parent().addClass('on');
			swich = true;
		}else{
			$this.parent().removeClass('on');
			swich = false;
		}
	});

	/* 네비게이션 안에 메뉴 */
	$(".all_menu .menu > li > button").click(function(){
	$(this).addClass('on');
	$(this).parent().siblings().children('button').removeClass('on');
	});


});