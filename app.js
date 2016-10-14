// User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

// User Story: I can click a button to see a random Wikipedia entry.

// Hint #1: Here's a URL you can use to get a random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random.

// Hint #2: Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page.

// Hint #3: Use this link to experiment with Wikipedia's API.

// Remember to use Read-Search-Ask if you get stuck.

// When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.

// You can get feedback on your project by sharing it with your friends on Facebook.

// - create a search bar
// - once entered, look for the results on wikipedia and display them on the page
// - once a link's been clicked, show the wikipedia content



$(document).ready(function() {
  $('.searchbutton').on('click', function() {
    var searchbox = $('.searchbox').val();
    $.ajax({
      type: "GET",
      // not sure about the searchbox insert, test first
      url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&origin=*",
      contentType: 'text/plain',
      xhrFields: {
        withCredentials: false
      },
      success: function(data) {
        $('.wikicontent').html('hi')
      },
      error: function() {
        console.log('error');
      }
    })
  })
})






