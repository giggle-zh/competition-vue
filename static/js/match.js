$(Document).ready(
	function(){
		$(".div_match_span").mouseenter(function(){
			$(this).css({"background-color":"#31B0D5","boder-color":"#31B0D5","color":"#ffffff"});
		});
		$(".div_match_span").mouseleave(function(){
			$(this).css({"background-color":"#ffffff","boder-color":"#ffffff","color":"#000000"});
		});
		$("#myCarousel").carousel('cycle');
	}
);
