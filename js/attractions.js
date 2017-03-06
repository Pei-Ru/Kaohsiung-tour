$(document).ready(function() {
	var url = "https://data.kaohsiung.gov.tw/opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=1&FileType=1&Lang=C&FolderType=";
	var displayNum = 9;
	$.get( url, function( data ) {
 	 	displayData(data,displayNum);
	});
})
function rnd(start,end) {
    var r = Math.floor((Math.random() * end) + start);
    return r;
}

function displayData(data, numOfDisplay){
	var data = JSON.parse(data);
	var r = rnd(1,data.length-numOfDisplay);
	
	for( var i = 0; i<4; i++ ){
		var rForSlideImage = rnd(1,data.length);
		appendSlideImage(data[rForSlideImage]);
	}
	for( var i = r; i<r+numOfDisplay; i++ ){
		console.log(data[i].Description.indexOf('。')+1);
		appendData(data[i]);
	}
}

function appendSlideImage(data){
	var sideImage = 			
			'<div class="item">'+
                '<img class="slide-image" src="'+data.Picture1+'" alt="">'+
            '</div>';
	$('.carousel-inner').append(sideImage);
}

function appendData(data){
	var appendFiled = 
		'<div class="col-sm-4 col-lg-4 col-md-4">'+
            '<div class="thumbnail">'+
                '<div class="item-image"><img src="'+data.Picture1+'" alt=""></div>'+
                '<div class="caption">'+
                    '<h4>'+data.Name+'</a></h4>'+
                    '<h6>'+data.Opentime+'</h4>'+                
                    '<p>'+data.Add+'</p>'+
                    '<p>'+data.Tel+'</p>'+
                    '<p>'+data.Description+'</p>'+
                '</div>'+
                '<div class="ratings">'+
                    '<p class="pull-right">'+rnd(0,1000)+' reviews&nbsp;</p>'+
                    '<p>'+
                        '<span class="glyphicon glyphicon-star"></span>'+
                        '<span class="glyphicon glyphicon-star"></span>'+
                        '<span class="glyphicon glyphicon-star"></span>'+
                        '<span class="glyphicon glyphicon-star"></span>'+
                        '<span class="glyphicon glyphicon-star"></span>'+
                    '</p>'+
                '</div>'+
            '</div>'+
        '</div>';
	$('#locationData').append(appendFiled);
}

