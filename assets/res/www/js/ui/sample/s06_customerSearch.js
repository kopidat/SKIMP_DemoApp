M.onReady(function(event) {
    // TODO : ready event handle code here
	pageEvent();

}).onRestore(function(event) {
    // TODO : restore event handle code here

}).onHide(function(event) {
    // TODO : hide event handle code here

}).onResume(function(event) {
    // TODO : resume event handle code here

}).onDestroy(function(event) {
    // TODO : destroy event handle code here

}).onBack(function() {
    // TODO : back event handle code here
    M.page.back();
}).onKey(function(event) {
    // TODO : key event handle code here(android only)

});

var pageEvent = function(){

	//싱글 팝업
	$('#selectSingle').on('click', function(){
		layer_open('layer100', function(rst){
			console.log(rst);
		});
	});


	//멀티 팝업
	$('#selectMulti').on('click', function(){
		layer_open('layer101', function(rst){
			console.log(rst);
		});
	});


	//리스트 검색팝업
	$('#selectSearchPop').on('click', function(){
		var thisVal = $('#selectSearch').val();

		$('#selectSearchPopSearch').val(thisVal);

		if(thisVal !== ""){
			for(var i=0; i<$('#searchPopList li').length; i++){
				if($('#searchPopList li').eq(i).find('span').text().indexOf(thisVal) == -1 ){
					$('#searchPopList li').eq(i).addClass('none');
				}
			}
		}

		layer_open('layer102');
	});


	//리스트 검색팝업의 검색버튼
	$('#btnSelectSearchPopSearch').on('click', function(){
		var thisVal = $('#selectSearchPopSearch').val();
		$('#searchPopList li').removeClass('none');

		if(thisVal !== ""){
			for(var i=0; i<$('#searchPopList li').length; i++){
				if($('#searchPopList li').eq(i).find('span').text().indexOf(thisVal) == -1 ){
					$('#searchPopList li').eq(i).addClass('none');
				}
			}
		}
	});


	// 싱글선택
	$(".single .account-target > ul > li > button").click(function(){
		$(this).addClass('on');
		$(this).parent().siblings().children('button').removeClass('on');

		for(var i=0; i<$('.account-target li button').length; i++){
			if($('.account-target li button').eq(i).hasClass('on')){
				$('#selectSingle').text($('.account-target li button').eq(i).text());
				$('.account-target li button').removeClass('on');
				break;
			}
		}
	});


	//멀티팝업 전체선택
	$('#multiListAll').on('click', function(){
		var thisCheckState = $(this).is(':checked');

		if(thisCheckState){
			$('#multiList li input').prop('checked', false).attr('disabled', true);
		}else{
			$('#multiList li input').attr('disabled', false);
		}
	});


	//멀티선택
	$('#selectMultiConfirm').on('click', function(){
		var selectedArr = [];
		var selectedList = "";
		if($('#multiListAll').is(':checked')){
			for(var i=0; i<$('#multiList li').length; i++){
				selectedArr.push($('#multiList li').eq(i).find('span').text());
				selectedList += $('#multiList li').eq(i).find('span').text() +", ";;
			}
			$('#multiListAll').prop("checked", false);
			$('#multiList li input').attr('disabled', false);
		}
		else{
			for(var i=0; i<$('#multiList li').length; i++){
				if($('#multiList li').eq(i).find('input').is(':checked')){
					selectedArr.push($('#multiList li').eq(i).find('span').text());
					selectedList += $('#multiList li').eq(i).find('span').text() +", ";
				}
			}
		}

		$('#searchPopList li input').prop('checked',false)

		if(selectedArr[0] === ""){
			$('#selectMulti').val("");
			$('#multiSelectedList li p').text("");
		}else{
			$('#selectMulti').text(selectedArr[0]+" 외" + (selectedArr.length - 1)+" 건");
			$('#multiSelectedList li p').text(selectedList);
		}
	});



	//멀티팝업 전체선택
	$('#searchPopListAll').on('click', function(){
		var thisCheckState = $(this).is(':checked');

		if(thisCheckState){
			$('#searchPopList li input').prop('checked', false).attr('disabled', true);
		}else{
			$('#searchPopList li input').attr('disabled', false);
		}
	});


	//검색팝업 선택
	$('#selectSearchPopConfirm').on('click', function(){
		var selectedArr = [];
		var selectedList = "";

		if($('#searchPopListAll').is(':checked')){
			for(var i=0; i<$('#searchPopList li').length; i++){
				selectedArr.push($('#searchPopList li').eq(i).find('span').text());
				selectedList += $('#searchPopList li').eq(i).find('span').text() +", ";
			}
			$('#searchPopListAll').prop("checked", false);
		}
		else{
			for(var i=0; i<$('#searchPopList li').length; i++){
				if($('#searchPopList li').eq(i).find('input').is(':checked')){
					selectedArr.push($('#searchPopList li').eq(i).find('span').text());
					selectedList += $('#searchPopList li').eq(i).find('span').text() +", ";
				}
			}

		}

		$('#searchPopList li input').prop('checked',false);

		if(selectedArr[0] === ""){
			$('#selectSearch').val("");
			$('#searchPopSelectedList li p').text("");
		}else{
			$('#selectSearch').val(selectedArr[0]+" 외" + (selectedArr.length -1)+" 건");
			$('#searchPopSelectedList li p').text(selectedList);
		}

	});



	$('.popup-layer .close, .single li button.btn-account, .account-close').on('click', function(){
		$(this).parents('.popup-layer').find('.pop-layer').addClass('layerclose');
		$(this).parents('.popup-layer').fadeOut();
		$('body').removeClass('over_-h');

		return false;
	});


	// 이전 버튼 클릭시
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});
}


function layer_open(el) {
	var $href = $(this).attr('href');
	var temp = $('#' + el);
	if(this) {
		$('#' + el).fadeIn();
		$('#' + el).css("visibility","inherit");
		$('#' + el).find('.pop-layer').removeClass('layerclose');
		$('body').addClass('over_-h');

	} else {
		temp.fadeIn();
		$('#' + el).css("visibility","over_-h");
	}

	$('.popup-layer .close, .single li button.btn-account, .account-close').click(function() {
		$(this).parents('.popup-layer').find('.pop-layer').addClass('layerclose');
		$(this).parents('.popup-layer').fadeOut();
		$('body').removeClass('over_-h');
		return false;
	});
};
