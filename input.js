// const btn = document.getElementById('btn')

// const name = document.getElementById('name')

// btn.addEventListener("click",function searchone1(){
//     const searchurl = "extendedinput.html"

//     window.location.href = searchurl
// })

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const form_data = new FormData(form);

  for (item of form_data) {
    let str = item[0] + item[1];
    localStorage.setItem(item[0], item[1]);
  }

  window.location.href = "extendedinput.html";
});
