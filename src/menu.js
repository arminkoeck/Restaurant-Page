
import img1 from "./Cloud-Coffee.jpg";

function createMenu () {
    const element = document.createElement("div");

    const cloudCoffee = new Image(500, 500);
    cloudCoffee.src = img1;
    

    const menuContentContainer = document.createElement("div");
    menuContentContainer.classList.add("menu-content-container")
    function createDish (dishName, dishDescription) {
        const dish = document.createElement("h2");
        dish.textContent = dishName;
        const description = document.createElement("p");
        description.textContent = dishDescription;
        menuContentContainer.append(dish, description);
    };

    createDish("Cloud Coffee", "Fresh coffee brewed with juicy clouds. The light & mild taste will make you feel smooth and awake.");
    createDish("Cloudy Colada", "Clouds mixed with Sky Rum and coconut milk. Tastes heavenly delicious.");
    createDish("Cloud Bowl", "Original Skyisland rice with Tofu, Avocado, Beans, Vegetables and Cloud Sauce. Such a light dish, you might start to float.")

    element.classList.add("menu-container");
    element.append(cloudCoffee, menuContentContainer);
    return element;
};

export default createMenu