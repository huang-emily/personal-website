// original colors: "#fdffe0" , "#1e1e1e"
// lightmode background color, darkmode background color, menuitem color
const colors = [ "#F9F6E7" , "#000000", "#A2D19A"];
let isDarkMode = $state(false);
let strokeColor = $derived(isDarkMode? colors[0] : colors[1] );
let menuStrokeColor = $derived(isDarkMode? colors[1] : colors[0] );
let menuItemColor = $derived(isDarkMode? colors[0] : colors[1]);

export function toggleDarkMode() {
    isDarkMode = !isDarkMode;
}

export function getDarkMode() {
    return isDarkMode;
}

export function getStrokeColor() {
    return strokeColor;
}

export function getMenuStrokeColor() {
    return menuStrokeColor;
}

export function getMenuItemColor() {
    return menuItemColor;
}
