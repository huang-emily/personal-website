// original colors: "#fdffe0" , "#1e1e1e"
// lightmode background color, darkmode background color, menuitem color
import { writable, derived } from "svelte/store";

const palette = {
    white:"#FFFFFF", 
    black:"#121212", 
    eggshell:"#fdffe0",
    sky: "#ebfaff",
};

export let isDarkMode = writable(false);
export let strokeColor = derived(isDarkMode, (isDarkMode) => isDarkMode? palette.white : palette.black );
export let menuStrokeColor = derived(isDarkMode, (isDarkMode) => isDarkMode? palette.white : palette.black );
export let menuItemColor = derived(isDarkMode, (isDarkMode) => isDarkMode? palette.white : palette.black );
export let websiteBgColor = derived(isDarkMode, (isDarkMode) => isDarkMode? palette.black : palette.white );

export const iconSize = "2.00rem";