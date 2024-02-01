
import img1 from "./Sky-Restaurant-1.jpg"
import img2 from "./Sky-Restaurant-2.jpg"

function createHome () {
    const element = document.createElement("div");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Skyisland Café";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container")
    const skyRestaurant1 = new Image(400, 400);
    skyRestaurant1.src = img1;
    const skyRestaurant2 = new Image(400, 400);
    skyRestaurant2.src = img2;
    imgContainer.append(skyRestaurant1, skyRestaurant2)

    const p1 = document.createElement("p");
    p1.textContent = "Indulge in the ethereal delight of Cloud Coffee, a concoction that transcends taste. Each sip unveils a symphony of flavors, from hints of celestial vanilla to the subtle embrace of caramelized clouds. This imaginary brew elevates the coffee experience, leaving a lingering bliss that defies earthly expectations.";
    
    element.classList.add("home-container");
    element.append(h1, imgContainer, p1);
    return element;
}

export default createHome