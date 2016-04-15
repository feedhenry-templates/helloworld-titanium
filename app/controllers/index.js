var $fh = require('feedhenry-titanium');

function sayHello(e) {
	var textFieldValue = $.hello_to.getValue();
	$.response.setText("Calling Cloud.....");
    $fh.cloud({
      path: 'hello',
      data: { 
      	hello : textFieldValue 
      }
    }, function (res){
      $.response.setText(JSON.stringify(res.msg));
      console.log(arguments);
    }, function (msg, err){
      $.response.setText(msg);
      console.log(arguments);
    });
    
}

$.index.open();