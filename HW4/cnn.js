

jQuery(function() {
  $.get("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=d2d8c2bcdd1e44f3a1ab2aac69b63f8b", function(data)
  {
        console.log(data)
          console.log(data.articles[0].title)
        // console.log(data.results.length)
        // console.log(data.results[0].title)
        // console.log(data.results[0].display_title)
        // console.log(data.results[0].display_title)

// $(".row").html(data.results[0].display_title)

for (let i=0; i<10; i++) {
      let news = data.articles[i];
      let html = '<div class="col-4">';
      html = html + '<h6 class="card-title">' + news.title + '</h6>';
      html = html + '<p class="card-title">' + news.description + '<p>';
      html = html + '<div class="card-body">';
      html = html + '</div>';
      $(".row").append(html);
}
$(".row").fadeIn(2000);
}
)
}
)
