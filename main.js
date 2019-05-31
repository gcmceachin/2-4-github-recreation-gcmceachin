$(document).ready(function() {

'use strict';

const Client_ID = 'Iv1.ea8fd8f633a558f3';
const Client_Secret ='371f3894fec7f9def91deaae82a40d51fa47f21a';

$.ajax({
  url: `https://api.github.com/users/gcmceachin?client_id=${Client_ID}&client_secret=${Client_Secret}`,
  dataType: 'jsonp',
  method: 'GET',

  success: function(response) {
    console.log('response', response);
    response = {
      results: response.results
    };
    renderHTML(response);
  },
  error: function(xhr) {
    console.log('uh oh, somthing went wrong', xhr.status);
  }

});

function renderHTML(response) {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    var context = response;

    var html = template(context);

    $('.row').html(html);

  }

});
