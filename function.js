$(function(){
	
	//variable
	var functionName = 'GetProducts';
	
	//loader
	function loaderShow(){
		$('.loader').fadeIn(500);
	}
	
	function loaderHide(){
		$('.loader').fadeOut(500);
	}
	
	//Get Products
	function LoadData(){
		loaderShow();
	
		
		$.getJSON("http://localhost/Dad/api.php?function="+functionName+"&jsonCallback=?",function(data){
			loaderHide();
			
			var all_data = [];
			$.each(data, function(k,name){
				var array_data = '<div class="names">'+name+'</div>';
			    all_data.push(array_data);
			});
			
			$('#data').append(all_data);
		});
	}
	
	LoadData();
});