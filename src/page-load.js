
// import image2 from "./Ground.jpg";



    
    // const ground = newImage();
    // ground.src = image2


function pageLoad(content) {
    
    const container = document.getElementById("content");
    container.textContent = "";
    container.appendChild(content);
}

export default pageLoad;