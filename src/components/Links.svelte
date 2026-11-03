<script lang="ts">
    import { iconSize } from "../lib/shared.svelte";
</script>

<!-- LINKS -->
<div class="flex flex-col lg:flex-row items-center gap-y-1 lg:gap-x-2">
    <!-- resume -->
    <a class="transition-transform duration-300 hover:scale-120" aria-label="Resume"
        href="https://drive.google.com/file/d/1Xck-1sDcNBUvSSbMKTrg5cUCL0Quc6iH/view?usp=sharing" rel="noopener noreferrer" target="_blank">
        <svg width={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.5H5a2.5 2.5 0 0 0-2.5 2.5v14a2.5 2.5 0 0 0 2.5 2.5h14a2.5 2.5 0 0 0 2.5-2.5V8z"/>
            <path d="M16 2.5V8h5.5"/>
            <circle cx="8.5" cy="9" r="1.75"/>
            <path d="M5.5 15.25a3 3 0 0 1 6 0"/>
            <path d="M14 11.5h3.5M14 15h3.5M6 18.25h12"/>
        </svg>
    </a>

    <!-- linkedin -->
    <a class="transition-transform duration-300 hover:scale-120" aria-label="LinkedIn profile"
        href="https://www.linkedin.com/in/huang-emily/" rel="noopener noreferrer" target="_blank">
        <svg width={iconSize} viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="currentColor"/>
            <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="currentColor"/>
            <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="currentColor"/>
        </svg>
    </a>

    <!-- github -->
    <a class="transition-transform duration-300 hover:scale-120" aria-label="GitHub profile"
        href="https://github.com/huang-emily" rel="noopener noreferrer" target="_blank">
        <svg width={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
            <path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"/>
            <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"/>
        </svg>
    </a>

    <!-- email -->
    <a class="transition-transform duration-300 hover:scale-120" aria-label="Email"
        id="contact" target="_blank" rel="noopener noreferrer">
        <svg width={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2.5"/>
            <path d="M3.5 7.5L10.2 12.4C11.27 13.2 12.73 13.2 13.8 12.4L20.5 7.5"/>
        </svg>
    </a>
</div>