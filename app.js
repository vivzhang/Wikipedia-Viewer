$(document).ready(function() {
  $('#searchbutton').on('click', function() {
    var searchbox = $('#searchbox').val();
  })
  $("#searchbox").keydown(function(key) {
    if (key.keyCode == 13) {
      $("#searchbutton").click();
      return false;
    }
  })
})






