// let dark = document.querySelector(".dark");
// let link = document.querySelector('.css');
// dark.addEventListener("click",()=>{
//     console.log(location.host)
//     link.href = `${location.protocol}//${location.host}/css/dark.css`
// })

let dark = document.querySelector(".dark");
let link = document.querySelector('.css');

dark.addEventListener("click", () => {
    
    dark.classList.toggle("active");

   
    if (dark.classList.contains("active")) {
        link.href = `${location.protocol}//${location.host}/css/dark.css`;
    } else {
        link.href = `${location.protocol}//${location.host}/css/style.css`;
    }
});