let postTemplateString = document.getElementById('result-template').innerHTML;
let renderSource = Handlebars.compile(postTemplateString);

Handlebars.registerHelper('instagram', function(instagram) {
	console.log(instagram);
	instagram = Handlebars.Utils.escapeExpression(instagram);
	let result = '<a href="https://www.instagram.com/' + instagram + '">Click Here!' + '</a>';
	return new Handlebars.SafeString(result);
});

$('#loading').html('Loading...')

let url = "https://thejsguy.com/teaching/2018/api/v2/restaurants.json";

let promise = $.ajax({
	type: 'GET',
	url: url
});

promise.then(function(content){
	let renderedSource = renderSource({
		data: content.data
	});
	$('#loading').html('');
	$('body').append(renderedSource);
}, function(error) {
	$('#loading').html('Oops, Something went wrong!');
}); 