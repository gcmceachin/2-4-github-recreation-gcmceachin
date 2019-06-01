$(document).ready(function() {

'use strict';

const Client_ID = '0f37d9a7d87d34d21559';
const Client_Secret ='c7bdcd8fd2c6f34f5e45a1e1b337bc7b4a892c75';

$.ajax({
  url: 'https://api.github.com/users/gcmceachin?client_id=0f37d9a7d87d34d21559&client_secret=c7bdcd8fd2c6f34f5e45a1e1b337bc7b4a892c75',
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
      url: `https://api.github.com/users/gcmceachin/orgs?client_id=${Client_ID}&client_secret=${Client_Secret}`,
      dataType: 'jsonp',
      method: 'GET',

      success: function(response) {
        response = {organizations: response.data};
          console.log('response', response);

        renderOrganizationsHTML(response);
      },

      error: function(xhr) {
        console.log('uh oh, somthing went wrong', xhr.status);
      }
    });

    function renderOrganizationsHTML(response) {
        var source = document.getElementById("organizations-template").innerHTML;
        var template = Handlebars.compile(source);

        var context = response;

        var html = template(context);

        $('.orgs').html(html);

      }

});
