// original colors: "#fdffe0" , "#1e1e1e"
// lightmode background color, darkmode background color, menuitem color
const palette = {
    white:"#FFFFFF", 
    black:"#121212", 
    eggshell:"#fdffe0",
    sky: "#ebfaff",
};

let isDarkMode = $state(false);
let strokeColor = $derived(isDarkMode? palette.white : palette.black );
let menuStrokeColor = $derived(isDarkMode? palette.white : palette.black );
let menuItemColor = $derived(isDarkMode? palette.white : palette.black );
let websiteBgColor = $derived(isDarkMode? palette.black : palette.white );

let iconSize = "2.50rem";
let linkSize = "2.00rem";
let navItemSize = "2.00rem";
let sunIconSize = "2.50rem";

export function toggleDarkMode() {
    localStorage.theme = isDarkMode? "dark" : "light";
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

export function getLinkSize() {
    return linkSize;
}

export function getNavBarSize() {
    return navItemSize;
}