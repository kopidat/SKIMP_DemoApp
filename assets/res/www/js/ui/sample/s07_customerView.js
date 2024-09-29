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

	// 메뉴닫기
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});

	// 이전 페이지로 이동
    $("#btn_back").click(function () {
    	$('#btn_back').addClass("on");
    	setTimeout(function(){
    		$('#btn_back').removeClass("on");
    		M.page.back();
    	}, 200);
    });


    //생체인증
    $(document).on('click', '#btnBio', function(){
    	if(MNavigator.device("ios")){
    		M.plugin('3rd_iOS_fingerprint_basic').auth({
    			callback: function(status, result) {
    				M.pop.alert(JSON.stringify(result));
    			}
    		});
    	}else{
    		M.plugin('3rd_fingerprint_basic').auth({
    			callback: function(status, result) {
    				M.pop.alert(JSON.stringify(result));
    			}
    		});
    	}
    });

    //패턴인증
    $(document).on('click', '#btnPattern', function(){
    	if(MNavigator.device("ios")){
    		M.plugin("3rd_iOS_pattern_basic").lock({
    			type : "lock",
    			callback : function(status, result){
    				M.pop.alert(JSON.stringify(result));
    			}
    		});
    	}else{
    		M.execute("exWNPatternLockActivity", {
    			type : "lock",
    			callback : M.response.on( function(status, result){
    				M.pop.alert(JSON.stringify(result));
    			}).toString()
    		});
    	}
    });

    //핀인증
    $(document).on('click', '#btnPin', function(){
		if(MNavigator.device("ios")){
			var params = {};
			params.length = '4';
			params.activity = 'SamplePassCodeViewController';

			M.plugin('3rd_iOS_pin_basic').register({
				param: params,
				callback:function(status, result) {
					M.pop.alert(JSON.stringify(result));
				}
			});
		}else{
			M.execute("exWNPinLockActivity", {
				length : 4,
				type: 'REGISTER',
				callback: M.response.on( function( status, result ) {
					console.log(status);
					console.log(result);
					M.pop.alert(JSON.stringify(result));
				}).toString()
			});
		}
    });
    
  //건너뛰기
    $(document).on('click', '#jumpNext', function(){
		alert('다음 페이지를 호출하도록 구성');
	});   
}



