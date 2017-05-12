function User(username){
  this.username = username
}

User.prototype.addImage = function(url, caption){
  let newImage = new Image(url)
  this.image = newImage
  let date = new Date()
  return `<strong>${this.username}</strong> posted this on ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} `
}
