// let dark = document.querySelector(".dark");
// let link = document.querySelector('.css');
// dark.addEventListener("click",()=>{
//     console.log(location.host)
//     link.href = `${location.protocol}//${location.host}/css/dark.css`
// })

// let dark = document.querySelector(".dark");
// let link = document.querySelector('.css');

// dark.addEventListener("click", () => {
    
//     dark.classList.toggle("active");

   
//     if (dark.classList.contains("active")) {
//         link.href = `${location.protocol}//${location.host}/css/dark.css`;
//     } else {
//         link.href = `${location.protocol}//${location.host}/css/style.css`;
//     }
// });


let dark = document.querySelector(".dark");
let link = document.querySelector('.css');

dark.addEventListener("click", () => {
    // Toggle the 'active' class on the button
    dark.classList.toggle("active");

    // If the 'active' class exists, enable dark mode; otherwise, light mode
    if (dark.classList.contains("active")) {
        // Use a relative path for GitHub Pages
        link.href = "./css/dark.css";
    } else {
        link.href = "./css/style.css";
    }
});