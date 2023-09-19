let url="https://kontests.net/api/v1/all"
let cardContainer=document.getElementById("cardContainer")
let response= fetch(url)
response.then((contests)=>{
  return contests.json();
}).then((contests)=>{
  console.log(contests)
  let ihtml=''
  for(let item in contests){
    // console.log(contests[item])
    ihtml+=`
    <div class="card mx-2 my-2" style="width: 22rem;">
    <img src="/1.jpg" class="card-img-top" alt="card-img-">
    <div class="card-body">
      <h6 class="card-title">${contests[item].name}</h6>
      <p class="card-text">Status: ${contests[item].status}</p>
      <p class="card-text">in_24_hours? ${contests[item].in_24_hours}</p>
      <p class="card-text">Site: ${contests[item].site}</p>
      <p class="card-text">Start at: ${contests[item].start_time}</p>
      <p class="card-text">End at: ${contests[item].end_time}</p>
      <a href="${contests[item].url}" class="btn btn-primary my-4" target="_blank">Visit here</a>
    </div>
  </div>
    `
    cardContainer.innerHTML=ihtml
  }
},(Error)=>{
  document.body.innerHTML=`<img src="/503 Service unavailable.jpg " alt="503 Service unble">`
})



