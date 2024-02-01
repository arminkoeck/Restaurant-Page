
import img1 from "./Cloud-Coffee-Cartoon.jpg"
import img2 from "./Ground.jpg"

function createAbout() {
    const element = document.createElement("div");

    function createParagraph (content) {
        const p = document.createElement("p");
        p.textContent = content;
        element.appendChild(p);
    }
    createParagraph("Nestled atop the floating wonders of Skyisland, Skyisland Café stands as a testament to both architectural marvels and culinary excellence. Founded in the year 2150, this ethereal haven began as a dream shared by visionary architects and culinary artists who sought to create a haven where patrons could experience gastronomic delights amidst the clouds.")
    createParagraph("The Skyisland, a floating utopia suspended in the azure heavens, became the perfect canvas for Skyisland Café. Constructed with sustainable materials and adorned with crystalline structures reflecting the sunlight, the café embodies both elegance and environmental consciousness. Its history is steeped in innovation, as the architects employed anti-gravity technology to create a seamless blend of earthbound comforts and celestial beauty.")
    
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container")
    const coffeeCartoon = new Image(400, 400);
    coffeeCartoon.src = img1;
    const ground = new Image(400, 400);
    ground.src = img2;
    imgContainer.append(coffeeCartoon, ground)
    element.appendChild(imgContainer);
    
    createParagraph("Beyond its celestial ambiance, Skyisland Café has earned a reputation for culinary excellence. A fusion of traditional and futuristic flavors, the menu showcases dishes crafted with ingredients sourced from the rich agricultural landscapes on the lower realms. The chefs, masters of their craft, push the boundaries of culinary imagination, delighting patrons with gastronomic wonders that mirror the breathtaking vistas that surround the Skyisland.");
    createParagraph("Skyisland Café has become a destination for those seeking not only a taste of the extraordinary but also an immersive journey into the rich history and innovation that define this floating oasis in the sky.");


    element.classList.add("about-container");
    return element;
}

export default createAbout