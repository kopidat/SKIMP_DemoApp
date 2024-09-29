M.onReady(function(evt){
	drawImageViewer();

	pageEvent();
}).onRestore(function(evt){

}).onHide(function(evt){

}).onResume(function(evt){

}).onPause(function(evt){

}).onDestroy(function(evt){

}).onBack(function(evt){
	M.page.back();
}).onKey(function(evt){
	M.tool.log(evt.key, evt.events);
	if (evt.key === 'home' && evt.events === 'keydown') {
		WNLog('')
	}
});

var fileConvertStamp = MData.param('docStamp');
var fileConvertId = MData.param('docId');
var allPageCnt = Number(MData.param('pageCnt'));
var pageIdxCnt = 0;

var pageEvent = function(){

	// 메뉴닫기
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});


	$(document).on('click', '.btn-next', function(){
		pageIdxCnt += 1;

		var offset1 = $('#idx'+pageIdxCnt).position().top;
		$('html').animate({scrollTop : offset1}, 400);

		$('.number').text(pageIdxCnt+'/'+allPageCnt);
	});

	$(document).on('click', '.btn-prev', function(){
		if(0 <= pageIdxCnt){
			pageIdxCnt -= 1;
			var offset = $('#idx'+pageIdxCnt).offset();
			$('html').animate({scrollTop : offset.top}, 400);

			$('.number').text(pageIdxCnt+'/'+allPageCnt);
		}
	});


	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop();
		var wHeight = $(this).height();

		$("#content div").each(function(idx, div) {
			var offset = $(div).offset().top;
			if (offset > scrollTop && offset < (scrollTop + wHeight)){
				$('.number').text(idx-2+'/'+allPageCnt);
			}
		});
	});

}



var drawImageViewer = function(){
	var listHtml = '';
	for(var i=0; i<allPageCnt; i++){
		 listHtml += '<div class="a" id="idx'+i+'"><img src="https://dev-skimp2.skinnovation.com/doc/file/download/'+fileConvertId+'/'+i+'.stream?stamp='+fileConvertStamp+'" alt=""></div>'
	}
	$('#imageViewer').html(listHtml);

	for(var i=0; i<$('#content div').length; i++){
		$('#imageViewer div').eq(i).attr('data-height', Math.ceil($('#imageViewer div').eq(i).position().top));
	}

	$('.number').text('1/'+allPageCnt);
}


