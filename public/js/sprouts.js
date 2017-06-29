let page = 1;
$('.more-sprouts').on('click', (event) => {
  event.preventDefault();

  if(someISTrue) {
    let thing = "Some value"
  }
//let is contained to bloc
//var is scoped to it's function
  thing

  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json?page=' + (page + 1)
  })

  request.done((tweets) => {
    thing
    tweets.forEach((tweet) => {
      thing
      $('.tweets').append(
        `<li class="tweet">
          <div class="body">${tweet.text}</div>
          <div class="user">${tweet.username}</div>
       </li>`);
    })
    page++;
  })
});

thing
