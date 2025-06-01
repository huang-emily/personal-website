// original colors: "#fdffe0" , "#1e1e1e"
// lightmode background color, darkmode background color, menuitem color
const colors = { white:"#FFFFFF" , black:"#000000", eggshell:"#fdffe0"};
let isDarkMode = $state(false);
let strokeColor = $derived(isDarkMode? colors.white : colors.black );
let menuStrokeColor = $derived(isDarkMode? colors.white : colors.black );
let menuItemColor = $derived(isDarkMode? colors.white: colors.black);
let websiteBgColor = $derived(isDarkMode? colors.black : colors.white);

let iconSize = "2rem";
let sunIconSize = "2.25rem";

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

export function getWebsiteBgColor() {
    return websiteBgColor;
}

export function getIconSize() {
    return iconSize;
}

export function getSunIconSize() {
    return sunIconSize;
}