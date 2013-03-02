//Old method
var loadingStatus = $('#loadingStatus');
loadingStatus.show();               //Display AJAX loading status

$.ajax(function(){
    url : "destinationUrl",
    cache : false,
    success : function(result){
        loadingStatus.hide();       //Hide AJAX loading status
    }
});


//New method
var loadingStatus = $('#loadingStatus');
loadingStatus.hide().ajaxStart(function(){
    $(this).show();                 //Show AJAX loading status
}).ajaxStop(function(){ 
    $(this).hide();                 //Hide AJAX loading status
});

$.ajax(function(){
    url : "destinationUrl",
    cache : false,
    success : function(result){
    }
});