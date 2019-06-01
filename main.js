$(document).ready(function() {

'use strict';

const Client_ID = 'Iv1.ea8fd8f633a558f3';
const Client_Secret ='371f3894fec7f9def91deaae82a40d51fa47f21a';

$.ajax({
  url: `https://api.github.com/users/gcmceachin?client_id=${Client_ID}&client_secret=${Client_Secret}`,
  dataType: 'jsonp',
  method: 'GET',

  success: function(response) {
    response = {data: response.data};
    console.log('response', response);
    renderUserHTML(response);
  },
  error: function(xhr) {
    console.log('uh oh, somthing went wrong', xhr.status);
  }

});

function renderUserHTML(response) {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);

    var context = response;

    var html = template(context);

    $('.profile').html(html);

  }
  $.ajax({
    url: `https://api.github.com/users/gcmceachin/repos?client_id=${Client_ID}&client_secret=${Client_Secret}`,
    dataType: 'jsonp',
    method: 'GET',

    success: function(response) {
      response = {repos: response.data};
      console.log('response', response);
      renderRepoHTML(response);
    },

    error: function(xhr) {
      console.log('uh oh, somthing went wrong', xhr.status);
    }
  });

  function renderRepoHTML(response) {
      var source = document.getElementById("repository-template").innerHTML;
      var template = Handlebars.compile(source);

      var context = response;

      var html = template(context);

      $('.repository').html(html);

    }
    $.ajax({
      url: `"https://api.github.com/users/gcmceachin/orgs"?client_id=${Client_ID}&client_secret=${Client_Secret}`,
      dataType: 'jsonp',
      method: 'GET',

      success: function(response) {
        console.log('response', response);
        response = {orgs: response.data};

        renderRepoHTML(response);
      },

      error: function(xhr) {
        console.log('uh oh, somthing went wrong', xhr.status);
      }
    });

    function renderRepoHTML(response) {
        var source = document.getElementById("organizations-template").innerHTML;
        var template = Handlebars.compile(source);

        var context = response;

        var html = template(context);

        $('.repository').html(html);

      }

});
