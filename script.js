const links = document.getElementById('links');

function handleClick() {

    if (links.classList.contains("hide")) {

        links.classList.remove("hide")
    }

    else {
        links.classList.add("hide")
    }
}