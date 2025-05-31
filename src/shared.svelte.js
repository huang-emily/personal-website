const colors = [ "#fdffe0" , "#1e1e1e"];
let isDarkMode = $state(false);
let strokeColor = $derived(isDarkMode? colors[0] : colors[1] );

export function toggleDarkMode() {
    isDarkMode = !isDarkMode;
}

export function getDarkMode() {
    return isDarkMode;
}

export function getStrokeColor() {
    return strokeColor;
}
