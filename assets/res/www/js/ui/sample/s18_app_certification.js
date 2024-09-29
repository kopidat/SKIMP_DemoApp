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



var pageEvent = function(){
	$(".btn_back, .innovation").click(function(){
		M.page.back();
	});


	//기본정보조회 버튼
	$('#userInfoInquiry').on('click', function(){
		M.execute("exWNStoreLib_auth", "exWNCallback");
	});

	//앱인증확인버튼
	$('#appCertConfirm').on('click', function(){
		M.execute("exWNStoreLib_auth", "exWNCallback");
	});

	//로그인을 위한 앱스토어 호출 버튼
	$('#loginAppStore').on('click', function(){
		M.execute("exWNStoreLib_login", "skimp_demo_app");
	});

	//업데이트를 위한 앱스토어 호출 버튼
	$('#updateAppStore').on('click', function(){
		M.execute("exWNStoreLib_update", "skimp_demo_app");
	});
}



function exWNCallback(resultJsonObj) {
	console.log("exWNCallback(resultJsonObj)");

	console.log('type of resultJsonObj = ' + typeof resultJsonObj);
	console.log(JSON.stringify(resultJsonObj));
	alert(JSON.stringify(resultJsonObj));
}