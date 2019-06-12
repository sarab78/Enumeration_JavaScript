const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {return film.title})
};

Cinema.prototype.findByTitle = function(title){
  const result = this.films.find( (film) => {
    return film.title === title;
  })
  return result;
}

Cinema.prototype.fiterByGenre = function(genre) {
   const result =  this.films.filter( (film) => {
  return film.genre === genre;
  });

  return result;
}

Cinema.prototype.containsFilmsByYear = function(year){
  return this.films.some((film) => {
    return film.year === year
  });
}

Cinema.prototype.areAllFilmsOfMinLength = function(length){
  return this.films.every((film) => {
    return film.length >= length;
  })
}

Cinema.prototype.totalRunningTime = function(){
  return this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0)
}

Cinema.prototype.filmsByProperty = function(property, value){
  return this.films.filter((film) => {
    return film[property] === value
  })
}
module.exports = Cinema;
