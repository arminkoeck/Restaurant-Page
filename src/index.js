
import './style.css';
import pageLoad from "./page-load";
import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";


const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    pageLoad(createHome());
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    pageLoad(createMenu());
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    pageLoad(createAbout());
});


pageLoad(createHome());