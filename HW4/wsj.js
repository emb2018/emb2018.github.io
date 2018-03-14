

jQuery(function() {
  $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d2d8c2bcdd1e44f3a1ab2aac69b63f8b", function(data)
  {
        console.log(data)
            console.log(data.articles[0])
              console.log(data.articles[0].title)
              console.log(data.articles[0].description)
              console.log(data.articles[0].urlToImage)




for (let i=1; i<40; i++) {
      let wnews = data.articles[i];
      let html = '<div class="col-4">';
      html = html + '<h6 class="card-title">' + wnews.title + '</h6>';

            html = html + '<p class="card-title">' + wnews.description +'<p>';
            // html = html + '<img class="card-img-top" src="' + wnews.urlToImage + '">';
            // html = html + '<p class="card-title">' + books.contributor + '<p>';
      // html = html + '<p class="card-title">' + books.description + '<p>';
      html = html + '<div class="card-body">';
      html = html + '</div></div>';
      $(".row").append(html);
}
$(".row").fadeIn(2000);
}
)
}
)
