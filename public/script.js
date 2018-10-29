$(document).ready(function(){
    $("#imgCookie").on('click', cookieClicked);
    
    function cookieClicked(){
        $.LoadingOverlay("show");
        let url = "fortuneproxy"
        $.getJSON(url, function(data){
            let result = "";
            $.LoadingOverlay("hide");
            $.confirm({
        		title: 'Here is your fortune!',
        		useBootstrap: false,
        		animateFromElement: false,
        		animation: 'scale',
        		content: '' +
        		'<div class="paper"><div class="paper">' +
        		'<p><strong>' + data[0]['fortune']['message'] + '</strong></p>' +
        		'<p>' + data[0]['lesson']['chinese'] + ' (' + data[0]['lesson']['pronunciation'] + '): ' +
        		data[0]['lesson']['english'] + '</p>' +
        		'<p><strong>Lucky Numbers: </strong>' + data[0]['lotto']['numbers'].toString() + '</p>' +
        		'</div></div>',
        		buttons: {
        			formSubmit: {
        				text: 'Try Lottery',
        				btnClass: 'btn-blue',
        			    action: function () {
        				$.ajax({
            				url: "lottery",
            				type: "GET",
            				success: 
            					function(lotto){
            						$.alert({
            						    useBootstrap: false,
            							title: (JSON.stringify(data[0]['lotto']['numbers']) == JSON.stringify(lotto)) ? "You won!" : "You lost.",
            							content: "<p>Your numbers: " + data[0]['lotto']['numbers'].toString() + "</p>" +
            							"<p>Winning numbers: " + lotto.toString() + "</p>",
            						});
            					}        
            				});
        			    },
        			},
        			cancel: {
        			    text: 'Close',
        			    action: function () {
        			    }
        			},
        		}
    	    });
        });
    }
});