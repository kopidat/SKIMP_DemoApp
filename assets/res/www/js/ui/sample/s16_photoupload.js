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
}


var fileUploadApi = function(){
	M.media.picker({
        media: "PHOTO",
        choice: "MULTI"
    }, function(status, result) {
		console.log(status, result);

        if ( status === "SUCCESS" ) {
            M.net.http.upload({
                url: "http://210.104.181.170:8280/board/attach",
                header: {},
                params: {},
                files: result,
                encoding : "UTF-8",
                finish : function(status, header, body, setting) {
    				console.log(status);
                },
                progress : function(total, current) {

                }
            });
        }
    });
}