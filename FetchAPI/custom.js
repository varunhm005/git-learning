async function logMovies() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const movies = await response.json();
    console.log(movies[0]);
    let value = document.getElementById("row")
  
    let codeDetails = ""
  
    for (const data of movies){
      codeDetails+= `<div class="col-md-3 cardColumn">
                  <div class="card shadow" style="width: 18rem;">
                      <div class="card-body">
                          <div>
                              Name: ${data.name}
                          </div>
                          <div>Email: ${data.email}
                          </div>
                          <div>
                              Street: ${data.address.street}
                          </div>
                          <div>
                              City: ${data.address.city}
                          </div>
                      </div>
                  </div>
              </div>`
    }
    console.log(codeDetails)
    value.innerHTML = codeDetails
  
  }
  
  window.onload = function() {
      logMovies();
  };