import { navigate } from "./navigate";
import { render } from "./render";


export function attachEvent() {
    const goHome = document.querySelector('#goHome');
    const goGallety = document.querySelector('#goGallery');

    if (goHome) {
        goHome.addEventListener('click', () => navigate("home"))
    }

    if (goGallety) {
        goGallery.addEventListener('click', () => navigate("gallery"))
    }
}
