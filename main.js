$(document).ready(function(){(



$.ajax({
  url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
  dataType: 'jsonp',
  method: 'GET',

  success: function(response) {
    console.log('response', response);
    response = {
      results: response.results
    }
    renderHTML(response);
  },
  error: function(xhr) {
    console.log('uh oh, somthing went wrong', xhr.status)
  }

});


});
