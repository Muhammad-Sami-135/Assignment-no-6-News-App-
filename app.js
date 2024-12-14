// News

let input = document.getElementById("input-field")

let card = document.getElementById("cards")

let search = () => {
    const Api_keys = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-07&sortBy=publishedAt&apiKey=2edf3663b91c4f66933b62ba75e05141`;
    fetch(Api_keys)
        .then((res) => res.json())
        .then((data) => {
            data.articles.map((e, i) => {
                console.log(e); 
                card.innerHTML += `
                <div class="card" style="width: 18rem;">
    <img src="${e.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.description}</p>
    </div>
    </div>
                `
            })
        })
}