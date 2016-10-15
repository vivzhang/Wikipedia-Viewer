$(document).ready(function() {
  $('#searchbutton').on('click', function() {
    var searchbox = $('#searchbox').val();
    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+searchbox+"&titles=Main%20Page&prop=revisions&rvprop=content&format=json&origin=*",
      contentType: 'text/plain',
      xhrFields: {
        withCredentials: false
      },
      success: function(data) {
        var results = data.query.search; // [obj, obj, obj...]
        results.forEach(function(result) {
          var wikilink = "<a href='https://en.wikipedia.org/wiki/'+result.title></a>";
          var title = "<div class='wikititle'>"+result.title+"</div>";
          var snippet = "<div class='wikicontent'>"+result.snippet+"</div>";
          var contenturl = "https://en.wikipedia.org/wiki/"+result.title.split(' ').join('_');
          $('.wikibox').append("<br>"+"<a href="+contenturl+">"+result.title+"</a>"+snippet);
        })
      },
      error: function() {
        console.log('error');
      }
    })
  })
  $("#searchbox").keydown(function(key) {
    if (key.keyCode == 13) {
      $("#searchbutton").click();
      return false;
    }
  })
})






