

jQuery(function() {
  $.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=e2fc5a977d9c49c3adc9f048e8d3ad6e", function(data)
  {
        console.log(data)
        console.log(data.results.length)
        console.log(data.results.lists[0].books[0])
        console.log(data.results.lists[0].books[0].title)
        console.log(data.results.lists[0].books[0].description)



for (let i=1; i<10; i++) {
      let books = data.results.lists[i].books[0];
      let html = '<div class="col-4">';
      html = html + '<h5 class="card-title">' + books.title + '</h5>';
      // html = html + '<p class="card-title">' + books.title +' <p>';
                                  html = html + '<p class="card-title">' + books.author+'<p>';
            html = html + '<img class="card-img-top" src="' + books.book_image + '">';

                      html = html + '<p class="card-title">' + books.description+'<p>';
            // html = html + '<p class="card-title">' + books.contributor + '<p>';
      // html = html + '<p class="card-title">' + books.description + '<p>';
      html = html + '<div class="card-body">';
      html = html + '</div>';
      $(".row").append(html);
}
$(".row").fadeIn(2000);
}
)
}
)
