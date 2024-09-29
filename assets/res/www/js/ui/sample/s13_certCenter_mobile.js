M.onReady(function(evt){
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

var fileConvertStamp = "";
var fileConvertId = "";

var pageEvent = function(){

	// 메뉴닫기
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});


	//뷰어호출
	$('#btnViewer').on('click', function(){
		docUpload();
	});
}


var docUpload = function(){
	MNet.httpSend({
		path : "skimp/common/api/SKIMP-0007",
		sendData : {
			fileName : $('#fileNm').val(),
			url : $('#fileUrl').val(),
			convertType	: "IMAGE",
			token : "",
			pakgId : "skimp.common.app.demo",
		},
		callback : function(rst, setting){
			console.log(rst);
			fileConvertStamp = rst.stamp;
			fileConvertId = rst.id;

			docConvertState();
		},
		errCallback : function(errCd, errMsg){
			console.log(errCd, errMsg);
		}
	});
}

//문서변환 상태 확인
var docConvertState = function(){
	MNet.httpSend({
		path : "skimp/common/api/SKIMP-0010",
		sendData : {
			id : fileConvertId,
            token : "",
            pakgId : "skimp.common.app.demo",
		},
		callback : function(rst, setting){
			console.log(rst);
			docConvertInfo(rst);

		},
		errCallback : function(errCd, errMsg){
			console.log(errCd, errMsg);
		}
	});
};


//문서변환 정보 확인
var docConvertInfo = function(){
	MNet.httpSend({
		path : "skimp/common/api/SKIMP-0011",
		sendData : {
			id : fileConvertId,
            token : "",
			pakgId : "skimp.common.app.demo",
		},
		callback : function(rst, setting){
			console.log(rst);

			if(rst.message == "성공" && rst.success == true){
				MPage.html({
					url : "s13_certCenter_mobile2.html",
					param : {
						docStamp : fileConvertStamp,
						docId : fileConvertId,
						pageCnt : rst.page,
					}
				});
			}else{
				setTimeout(function(){
					docConvertInfo();
				}, 1000);

			}


		},
		errCallback : function(errCd, errMsg){
			console.log(errCd, errMsg);
		}
	});
}



