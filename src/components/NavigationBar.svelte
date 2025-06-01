<script>
    import { getMenuStrokeColor, getIconSize } from "../shared.svelte";
</script>

<div class="flex flex-row" id="nav-bar">
    <a href="/" class="p-1" aria-label="home icon">
        <svg class="hover:scale-125" width="{getIconSize()}" height="{getIconSize()}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z" fill="{getMenuStrokeColor()}"/>
        </svg>
    </a>

    <a href="/about-me" class="p-1" aria-label="about me icon">
        <svg class="hover:scale-125" fill="{getMenuStrokeColor()}" width="{getIconSize()}" height="{getIconSize()}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"/>
        </svg>
    </a>

    <a href="/projects" class="p-1" aria-label="projects icon">
        <svg class="hover:scale-125" width="{getIconSize()}" height="{getIconSize()}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="{getMenuStrokeColor()}"/>
        </svg>
    </a>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>