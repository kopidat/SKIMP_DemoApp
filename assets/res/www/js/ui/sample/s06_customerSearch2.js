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
	// 이전 버튼 클릭시
	$("[data-instance-class='menu-close']").click(function(){
		M.page.back();
	});
}



$( function() {
	function beforeShow(input,picker){
		var i_offset= $(input).offset();
		setTimeout(function(){
			$('#ui-datepicker-div').css({'top':i_offset.top, 'bottom':'', 'left':'10px'});
		})
	}
	$( '.start_date_call' ).jqueryDatePicker({
		format:'yyyy.mm.dd',
		beforeShow:beforeShow,
	});
	$( '.end_date_call' ).jqueryDatePicker({
		format:'yyyy.mm.dd',
		beforeShow:beforeShow,
	});

	// 시간선택
	$('#timepicker1').timepicki({
		show_meridian:false,
		min_hour_value:0,
		max_hour_value:23,
		step_size_minutes:10,
		overflow_minutes:true,
		increase_direction:'up',
		disable_keyboard_mobile: true
	});

	// 년도선택
	$(".yearpicker").yearpicker({
		year: 2021,
		startYear: 2012,
		endYear: 2030
	});

	// 월선택
	$("#datepicker").datepicker( {
		format: "yyyy-mm",
		viewMode: "months",
		minViewMode: "months"
	});
});