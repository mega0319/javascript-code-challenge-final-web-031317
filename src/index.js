$(document).ready(function(){
  // your code here!
  $('#submit').on('click', function(e){
    e.preventDefault()
    let usernameInput = $('#user').val()
    let user = new User(usernameInput)
    let imageUrl = $("#image_url").val()
    let caption = $("#caption").val()
    let render = user.addImage(imageUrl, caption)
    $('#photo-list').append(`<div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src="${user.image.url}">
                  <span class="card-title">${caption}</span>
                </div>
                <div class="card-content">
                  <p>${render}</p>
                </div>
                <div class="card-action">
                </div>
              </div>
            </div>
          </div>`)
  })
})
