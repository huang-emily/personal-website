<script lang="ts">
    import { linkSize, iconSize, strokeColor, websiteBgColor } from "#lib/shared.svelte.js";
    const tools = [
        {
            category: "Data Analytics",
            list: "SQL, Python (Matplotlib, Numpy, Pandas, Seaborn), Tableau, Excel"
        },
        {
            category: "Web Development",
            list: "Python (Flask, Streamlit), HTML5/CSS (TailwindCSS), Git, GitHub, Visual Studio Code"
        }
    ]
    
    const skills = [
        {
            category: "Product Management",
            list: "Market Research, Product Roadmap, Product Requirements, Product Vision, User Stories, Customer Needs"
        },
        {
            category: "Other",
            list: "Creativity, Adaptability, Reliability, Critical Thinking, Resourcefulness, Empathy"
        }
    ]

    $effect(() => {
        const encEmail = "ZWh1YW4wMTVAZ21haWwuY29t";
        const email = document.getElementById("contact");
        email?.setAttribute("href", "mailto:".concat(atob(encEmail)));
    })
</script>

<section id="about-me" class="pt-15 md:pt-20 lg:pt-25">
    <div class="">
        <!-- expertise header -->
        <div class="text-center">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2" style="color: {$strokeColor};"><span class="underline decoration-5 decoration-sky-400">Expertise</span></h1>
        </div>

        <!-- TEXT AFTER HEADER -->
        <div class="max-w-2xl flex flex-col gap-y-4">

            <!-- Tools -->
            <div class="">
                <div class="flex flex-row md:gap-x-1 items-center">
                    <h1 class="text-xl md:text-2xl font-semibold">Tools</h1>
                </div>

                <!-- display tools -->
                <div class="pl-6 grid grid-cols-1 gap-y-2">
                    {#each tools as tool}
                    <div>
                        <h1 class="font-medium text-sm md:text-base md:text-lg">{tool.category}</h1>
                        <div class=" border-l-3 border-sky-400 pl-3 text-xs md:text-sm md:text-base">
                            <p>{tool.list}</p>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>

            <!-- Skills -->
            <div class="mt-2">
                <div class="flex flex-row md:gap-x-1 items-center">
                    <h1 class="text-xl md:text-2xl font-semibold">Skills</h1>
                </div>

                <!-- display skills -->
                <div class="pl-6 grid grid-cols-1 gap-y-2">
                    {#each skills as skill}
                    <div>
                        <h1 class="font-medium text-sm md:text-base md:text-lg">{skill.category}</h1>
                        <div class=" border-l-3 border-sky-400 pl-3 text-xs md:text-sm md:text-base">
                            <p>{skill.list}</p>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
            
            <!-- Interests -->
            <!-- <div class="pt-2">
                <div class="flex flex-row md:gap-x-1 items-center">
                    <svg class="scale-75 md:scale-105 " width="{$iconSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.36655 10.2421C4.28985 8.4221 3.75151 7.51211 4.11106 6.78804C4.4706 6.06397 5.48992 6.00535 7.52857 5.88812L8.05599 5.85779C8.63531 5.82448 8.92497 5.80782 9.17756 5.67305C9.43014 5.53828 9.61705 5.30066 9.99088 4.82542L10.3312 4.39274C11.6467 2.72034 12.3045 1.88413 13.0606 2.01293C13.8167 2.14173 14.1705 3.15023 14.8779 5.16723M5.80455 13.5087C5.25206 15.5982 4.97582 16.6429 5.50972 17.2192C6.04363 17.7955 7.0341 17.5217 9.01504 16.9741L9.99088 16.5M17.048 7.50967C18.9378 8.29605 19.8826 8.68925 19.9904 9.49292C20.0823 10.1786 19.513 10.7756 18.3493 11.7831" stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M16.2387 19.57C17.7244 19.9565 18.4673 20.1498 18.8677 19.743C19.2681 19.3362 19.061 18.5987 18.6466 17.1238L18.5394 16.7422C18.4216 16.3231 18.3628 16.1135 18.3924 15.9057C18.422 15.6979 18.5367 15.5154 18.7662 15.1503L18.9751 14.818C19.7826 13.5332 20.1864 12.8909 19.9167 12.3798C19.647 11.8687 18.8826 11.8273 17.3536 11.7446L16.958 11.7231C16.5235 11.6996 16.3063 11.6879 16.1168 11.5927C15.9274 11.4976 15.7872 11.3299 15.5068 10.9944L15.2516 10.689C14.265 9.50847 13.7716 8.91821 13.2045 9.00913C12.6375 9.10004 12.3722 9.81193 11.8416 11.2357L11.7043 11.604C11.5535 12.0086 11.4781 12.2109 11.3314 12.3599C11.1848 12.509 10.9834 12.5878 10.5806 12.7456L10.214 12.8892C8.79667 13.4443 8.08803 13.7218 8.00721 14.2891C7.92639 14.8564 8.52692 15.3378 9.72797 16.3004L10.0387 16.5495C10.38 16.8231 10.5507 16.9599 10.6494 17.1471C10.7482 17.3343 10.7639 17.5508 10.7954 17.9837L10.824 18.3779C10.9347 19.9015 10.9901 20.6633 11.5072 20.923C12.0244 21.1827 12.6608 20.7683 13.9337 19.9395" stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <h1 class="text-2xl md:text-3xl font-semibold">Interests</h1>
                </div>
                <div class="text-xs md:text-sm md:text-base">
                    <ul class="pl-2 list-disc pl-5">
                        <li>playing video games (my favorites are Cuphead, Persona 4 Golden, and Helldivers 2) but also enjoy a good board game or card game</li>
                        <li>watching video essays, commentary-styled comedy, and tech videos</li>
                        <li>training skills in the performing arts (right now I've been learning a lot of hip hop, but I also like to sing and act)</li>
                        <li>learning how to make pretty things like this website and origami! ᵔᵕᵔ</li>
                    </ul>
                </div>
            </div> -->
        
        </div>
    </div>
</section>

<style lang="postcss">
    @reference "tailwindcss";
</style>