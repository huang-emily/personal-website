<script lang="ts">
    import { strokeColor, iconSize, linkSize, websiteBgColor } from "#lib/shared.svelte";
</script> 
 
<!-- LINKS -->
<div class="flex flex-col lg:flex-row items-center gap-x-1 sm:gap-y-1">
    <!-- resume -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a class="scale-75 sm:scale-85 duration-300 hover:scale-120" 
    href="https://drive.google.com/file/d/1Xck-1sDcNBUvSSbMKTrg5cUCL0Quc6iH/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <svg
        fill="{$strokeColor}"
        width="{$linkSize}"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 300 315"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg">
            <defs id="defs10" />
            <g id="g6" transform="translate(-47.838)">
                <g id="g5">
                    <path d="m 196.137,45.834 c -25.859,0 -46.998,21.075 -46.998,46.998 0,25.859 21.139,46.933 46.998,46.933 25.859,0 46.998,-21.075 46.998,-46.998 0,-25.923 -21.139,-46.933 -46.998,-46.933 z m 0,72.017 c -13.77,0 -25.083,-11.313 -25.083,-25.083 0,-13.77 11.248,-25.083 25.083,-25.083 13.835,0 25.083,11.313 25.083,25.083 0,13.769 -11.313,25.083 -25.083,25.083 z" id="path4" />
                </g>
            </g>
            <g id="g8" transform="translate(-47.838)">
                <g id="g7">
                    <path d="m 258.521,163.362 c -39.887,-15.515 -84.752,-15.515 -124.638,0 -13.059,5.107 -21.786,18.101 -21.786,32.388 v 44.347 c -0.065,6.012 4.849,10.925 10.861,10.925 h 146.424 c 6.012,0 10.925,-4.848 10.925,-10.925 V 195.75 c 0,-14.287 -8.727,-27.281 -21.786,-32.388 z m 0,65.874 H 133.883 v -33.422 c 0,-5.301 3.168,-10.214 7.887,-12.024 34.844,-13.511 74.02,-13.511 108.865,0 4.719,1.875 7.887,6.659 7.887,12.024 v 33.422 z" id="path6" />
                </g>
            </g>
            <g id="g10" transform="translate(-47.838)">
                <g id="g9">
                    <path d="M 313.083,0 H 131.491 C 123.087,0 115.2,3.232 109.253,9.18 L 57.018,61.414 c -5.947,5.948 -9.18,13.834 -9.18,22.238 
                    v 195 c 0,17.39 14.158,31.547 31.547,31.547 h 233.762 c 17.39,0 31.547,-14.158 31.547,-31.547 V 31.547 C 344.501,14.158 330.343,0 313.083,0 Z M 112.032,37.236 V 64.258 H 85.01 Z m 210.683,79.58 h -40.598 h 40.598 v 19.394 h -14.869 h 14.869 
                    v 140 c 0,5.366 -4.331,9.697 -9.632,9.697 H 79.192 c -5.301,0 -9.632,-4.331 -9.632,-9.632 V 86.044 h 53.398 c 6.012,0 10.925,-4.848 10.925,-10.925 V 21.721 h 179.2 c 5.301,0 9.632,4.331 9.632,9.632 z" id="path8" />
                </g>
            </g>
        </svg>
    </a>
    
    <!-- linkedin -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a class="scale-75 sm:scale-85 duration-300 hover:scale-120" href="https://www.linkedin.com/in/huang-emily/" rel="noopener noreferrer" target="_blank">
        <svg width="{$linkSize}" viewBox="0 0 24 24" fill="{$websiteBgColor}" xmlns="http://www.w3.org/2000/svg">
            <title>LinkedIn Profile</title>
            <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="{$strokeColor}"/>
            <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="{$strokeColor}"/>
            <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="{$strokeColor}"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="{$strokeColor}"/>
        </svg>
    </a>

    <!-- github -->
    <a class="scale-75 sm:scale-85 duration-300 hover:scale-120" href="https://github.com/huang-emily" rel="noopener noreferrer" target="_blank">
        <svg class="scale-115" width="{$linkSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Github Profile</title>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" 
                stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" 
                stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>

    <!-- email -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a class="scale-75 sm:scale-85 duration-300 hover:scale-120" id="contact" target="_blank" rel="noopener noreferrer">
        <svg width="{$iconSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </a>
</div>