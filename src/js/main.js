import './../scss/style.scss'

const movieContainer = document.createElement("div");
const ul = document.createElement("ul");

const createHtml = (movies) => {
  movies.forEach((movie) => {
    const li = document.createElement("li");
    const p = document.createElement("p")
    li.innerHTML = movie.Title;
    p.innerHTML = "imDb ID:" + movie.imdbID;
    movieContainer.append(ul);
    ul.appendChild(li);
    li.appendChild(p);
    console.log(movie);
  });

  app.appendChild(movieContainer);
};

fetch("http://www.omdbapi.com/?apikey=b7c06561&s=star")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.Search);

    for (let i = 0; i < data.Search.length; i++) {
      console.log(data.Search[i].Title.imdbID);
    }
    createHtml(data.Search);
  });

/*
const url = ('http://www.omdbapi.com/?apikey=b7c06561&t=The+fault+in+our+stars')

async function getData(){
  const response = await fetch(url)
  const data = await response.json()
  console.log("I love this movie", data)
}

getData();

// Display movies on page 

*/