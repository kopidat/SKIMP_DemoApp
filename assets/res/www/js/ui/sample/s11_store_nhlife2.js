M.onReady(function(event){
	//조직도 조회
	orgChartInquiry();

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


var orgChartHtmlLv1 = '';
var orgChartHtmlLv2 = [];
var orgChartHtmlLv3 = [];
var orgChartHtmlLv4 = [];
var orgChartHtmlLv5 = [];
var orgChartHtmlLv6 = [];
var orgChartHtmlLv7 = [];
var orgChartHtmlLv8 = [];
var orgChartHtmlLv9 = [];
var orgChartHtmlLv10 = [];




var pageEvent = function(){
	$(document).on('click', '.tree li input + label', function(){
		$(this).parents('.tree').find('.label-clicked').removeClass('label-clicked');
		$(this).addClass('label-clicked');
	});
}


var orgChartInquiry = function(){
	MNet.httpSend({
		path : "skimp/common/api/SKIMP-0008",
		sendData : {
			regularityYN: "Y",
		},
		callback : function(rst, setting){
			console.log(rst);

			var orgChartList = rst.divisionList;
			var sortList = [];
			
			orgChartList[1].skCompanyCode in sortList
			
			var target = orgChartList[0].skCompanyCode;
			
			sortList.target = '';

			for (var i = 0; i < orgChartList.length; i++) {
				switch (orgChartList[i].level) {
				case 1:
					orgChartHtmlLv1 += '<li data-divId="'+orgChartList[i].division_id+'">';
					orgChartHtmlLv1 += '	<input type="checkbox" id="node'+i+'">';
					orgChartHtmlLv1 += '	<label for="node'+i+'">'+orgChartList[i].division_nm+' <em>100</em></label>';
					orgChartHtmlLv1 += '	<label class="check-box"><input type="checkbox" class="checkbox"><span></span></label>';
					orgChartHtmlLv1 += '	<ul></ul>';
					orgChartHtmlLv1 += '</li>';
					break;
					
				case 2:
					orgChartHtmlLv2.push(orgChartList[i]);
					break;
					
				case 3:
					orgChartHtmlLv3.push(orgChartList[i]);
					break;
					
				case 4:
					orgChartHtmlLv4.push(orgChartList[i]);
					break;

				case 5:
					orgChartHtmlLv5.push(orgChartList[i]);
					break;
					
				case 6:
					orgChartHtmlLv6.push(orgChartList[i]);
					break;
					
				case 7:
					orgChartHtmlLv7.push(orgChartList[i]);
					break;
					
				case 8:
					orgChartHtmlLv8.push(orgChartList[i]);
					break;
					
				case 9:
					orgChartHtmlLv9.push(orgChartList[i]);
					break;
					
				case 10:
					orgChartHtmlLv10.push(orgChartList[i]);
					break;
					
				default:
					break;
				}
			}
			
			$('#orgChartList').append(orgChartHtmlLv1);
			console.log(orgChartHtmlLv2);
			console.log(orgChartHtmlLv3);
			console.log(orgChartHtmlLv4);
			console.log(orgChartHtmlLv5);
			console.log(orgChartHtmlLv6);
			console.log(orgChartHtmlLv7);
			console.log(orgChartHtmlLv8);
			console.log(orgChartHtmlLv9);
			console.log(orgChartHtmlLv10);




//			//부서 레벨 2 그리기
//			orgChartList.forEach((item, idx) => {
//				if( item.level == 2){
//					orgChartHtmlLv2 ="";
//
//					orgChartHtmlLv2 += '<li data-divId="'+item.division_id+'">';
//					orgChartHtmlLv2 += '	<input type="checkbox" id="node1'+idx+'">';
//					orgChartHtmlLv2 += '	<label for="node1'+idx+'">'+item.division_nm+'</label>';
//					orgChartHtmlLv2 += '	<label class="check-box"><input type="checkbox" class="checkbox"><span></span></label>';
//					orgChartHtmlLv2 += '	<ul></ul>';
//					orgChartHtmlLv2 += '</li>';
//
//					//상위부서(레벨1)를 찾아서 부서레벨 2 붙이기
//					for(var i=0; i<$('#orgChartList').children('li').length; i++){
//						if($('#orgChartList').children('li').eq(i).attr('data-divId') == item.up_division_id){
//							$('#orgChartList').children('li').eq(i).children('ul').append(orgChartHtmlLv2);
//							break;
//						}
//					}
//				}
//			});
//
//
//			//부서레벨 3 그리기
//			orgChartList.forEach((item, idx) => {
//				if( item.level == 3){
//					orgChartHtmlLv3 = "";
//
//					orgChartHtmlLv3 += '<li>';
//					orgChartHtmlLv3 += '	<input type="checkbox" id="node2'+idx+'">';
//					orgChartHtmlLv3 += '	<label for="node12'+idx+'">'+item.division_nm+'</label>';
//					orgChartHtmlLv3 += '	<label class="check-box"><input type="checkbox" class="checkbox"><span></span></label>';
//					orgChartHtmlLv3 += '</li>';
//
//					//상위부서(레벨2)를 찾아서 부서레벨 3 붙이기
//					for(var i=0; i<$('#orgChartList').children('li').length; i++){
//						for(var j=0; j<$('#orgChartList').children('li').children('ul').children('li').length; j++){
//							if($('#orgChartList').children('li').eq(i).children('ul').children('li').eq(j).attr('data-divId') == item.up_division_id){
//								$('#orgChartList').children('li').eq(i).children('ul').children('li').eq(j).children('ul').append(orgChartHtmlLv3);
//								break;
//							}
//						}
//					}
//				}
//			});
			
			
			
//			//부서 레벨 1 그리기
//			orgChartList.forEach((item, idx) => {
//				if( item.level == 1){
//					orgChartHtmlLv1 += '<li data-divId="'+item.division_id+'">';
//					orgChartHtmlLv1 += '	<input type="checkbox" id="node'+idx+'">';
//					orgChartHtmlLv1 += '	<label for="node'+idx+'">'+item.division_nm+' <em>100</em></label>';
//					orgChartHtmlLv1 += '	<label class="check-box"><input type="checkbox" class="checkbox"><span></span></label>';
//					orgChartHtmlLv1 += '	<ul></ul>';
//					orgChartHtmlLv1 += '</li>';
//				}
//			});
//			$('#orgChartList').append(orgChartHtmlLv1);
//
//			//부서 레벨 2 그리기
//			orgChartList.forEach((item, idx) => {
//				if( item.level == 2){
//					orgChartHtmlLv2 ="";
//
//					orgChartHtmlLv2 += '<li data-divId="'+item.division_id+'">';
//					orgChartHtmlLv2 += '	<input type="checkbox" id="node1'+idx+'">';
//					orgChartHtmlLv2 += '	<label for="node1'+idx+'">'+item.division_nm+'</label>';
//					orgChartHtmlLv2 += '	<label class="check-box"><input type="checkbox" class="checkbox"><span></span></label>';
//					orgChartHtmlLv2 += '	<ul></ul>';
//					orgChartHtmlLv2 += '</li>';
//
//					//상위부서(레벨1)를 찾아서 부서레벨 2 붙이기
//					for(var i=0; i<$('#orgChartList').children('li').length; i++){
//						if($('#orgChartList').children('li').eq(i).attr('data-divId') == item.up_division_id){
//							$('#orgChartList').children('li').eq(i).children('ul').append(orgChartHtmlLv2);
//							break;
//						}
//					}
//				}
//			});
//
//
//			//부서레벨 3 그리기
//			orgChartList.forEach((item, idx) => {
//				if( item.level == 3){
//					orgChartHtmlLv3 = "";
//
//					orgChartHtmlLv3 += '<li>';
//					orgChartHtmlLv3 += '	<input type="checkbox" id="node2'+idx+'">';
//					orgChartHtmlLv3 += '	<label for="node12'+idx+'">'+item.division_nm+'</label>';
//					orgChartHtmlLv3 += '	<label class="check-box"><input type="checkbox" class="checkbox"><span></span></label>';
//					orgChartHtmlLv3 += '</li>';
//
//					//상위부서(레벨2)를 찾아서 부서레벨 3 붙이기
//					for(var i=0; i<$('#orgChartList').children('li').length; i++){
//						for(var j=0; j<$('#orgChartList').children('li').children('ul').children('li').length; j++){
//							if($('#orgChartList').children('li').eq(i).children('ul').children('li').eq(j).attr('data-divId') == item.up_division_id){
//								$('#orgChartList').children('li').eq(i).children('ul').children('li').eq(j).children('ul').append(orgChartHtmlLv3);
//								break;
//							}
//						}
//					}
//				}
//			});

		},
		errCallback : function(errCd, errMsg){
			console.log(errCd, errMsg);
		}
	});
}