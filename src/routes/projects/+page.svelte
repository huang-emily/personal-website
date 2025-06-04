<script lang="ts">
    import { linkSize, strokeColor, websiteBgColor } from "../../shared.svelte";
    const projectList = [
        {
            name: "Gun Trends in the US",
            picture: "/gunviolence-snapshot.webp",
            url: "https://huang-emily-gun-violence-trends-1-about-this-project-x3tuz5.streamlit.app/Visualize_the_Data",
            github: "https://github.com/huang-emily/gun-violence-trends",
            description: "web application that visualizes gun violence trends in the USA from 2014 - 2023",
            blurb: "This was an idea I originally had from my Master's program, but I never was able to give it the attention it needed. Through this project, I was able to explore what Python had to offer for Data Analytics and Web Development.",
            tools: "Python (Numpy, Pandas, Matplotlib, Seaborn), SQL, SQL Server Management Studio, Power BI",
        },
        {
            name: "Keep Me SaFe",
            picture: "/keepmesafe-snapshot.webp",
            url: "https://keep-me-safe.onrender.com/",
            github: "https://github.com/huang-emily/keep-me-SaFe",
            description: "web application that predicts potential accident hotspots in San Francisco based on a given walking route",
            blurb: "The project is actually my Master's thesis project! The idea came about when my team members were discussing our experiences with walking around our respective neighborhoods during the pandemic.",
            tools: "Python (Plotly, Numpy, Pandas, Flask), Javascript, HTML/CSS, Bootstrap",
        },
        {
            name: "This Wesite",
            picture: "/personalwebsite-snapshot.webp",
            url: "https://www.emilyhuang.io/",
            github: "https://github.com/huang-emily/personal-website",
            description: "my personal website that has all the details on my skills and qualifications ᵔᵕᵔ",
            blurb: "My first attempt building with Svelte! I was inspired to learn it when talking to an interviewer about a website called Pudding that has amazing data visualizations. I saw a lot of the Pudding team members used Svelte, so I decided to start using it too.",
            tools: "Svelte, Javascript, TailwindCSS, HTML/CSS",
        },
    ]

    $effect(() => {
        const encEmail = "ZWh1YW4wMTVAZ21haWwuY29t";
        const email = document.getElementById("contact");
        email?.setAttribute("href", "mailto:".concat(atob(encEmail)));
    })
</script>

<div class="flex flex-col gap-y-4 mt-10 mb-6 lg:mt-20 max-w-[24rem] sm:max-w-[30rem] md:max-w-[43rem] xl:max-w-4xl">
    <!-- project header -->
    <div class="text-center -mb-6 sm:-mb-4">
        <h1 class="text-4xl sm:text-5xl font-semibold sm:text-6xl lg:text-7xl mb-2" style="color: {$strokeColor};"><span class="underline decoration-5 decoration-sky-400">Projects</span></h1>
        <p class="text-[.6rem] sm:text-sm md:text-md lg:text-lg">To visit the project's website, click on the picture!</p>
    </div>

    <!-- Projects List! -->
    <div class="grid grid-cols-1 mb-2">
        {#each projectList as project}
        <!-- project item -->
        <div class="border-3 border-dashed rounded-[1rem] mt-6">
            <!-- structures image and text as a column -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center m-6">
                <!-- image of project that links to website -->
                <a class="outline-4 outline-sky-400 rounded-[0.75rem] duration-200 hover:scale-98" href="{project.url}" rel="noopener noreferrer" target="_blank">
                    <img title="{project.name}'s Direct Link" class="grayscale hover:grayscale-0 hover:scale-107 duration-200 ease-in-out rounded-[0.75rem]" src="{project.picture}" alt="Project Preview">
                </a>
                <!-- text for project -->
                <div class="mt-4 md:mt-0 lg:mt-0">
                    <!-- project title and github button -->
                    <div class="flex flex-row items-center gap-x-1">
                        <h1 class="text-[.85rem] sm:text-xl md:text-2xl font-semibold">{project.name}</h1>
                        <a class="duration-300 hover:scale-125" href="{project.github}" rel="noopener noreferrer" target="_blank">
                            <svg class="scale-60 sm:scale-100" width="{$linkSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>Github Repository Link</title>
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                                    stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" 
                                    stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" 
                                    stroke="{$strokeColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <!-- project description and tools used -->
                    <div class="text-[.6rem] sm:text-xs xl:text-sm 2xl:text-base">
                        <p class="mb-2"><span class="text-sky-400">✱</span> {project.description}</p>
                        <p class="mb-2">{project.blurb}</p>
                        <p class=""><span class="font-semibold">Built with</span> {project.tools}</p> 
                    </div>
                </div>
            </div>
        </div>
        {/each}
    </div>
    <a class="mx-auto w-fit text-center text-[.625rem] sm:text-sm sm:text-md md:text-lg lg:text-xl" id="contact">
        <p class="transition-transform duration-300 hover:scale-110 underline decoration-2 decoration-sky-400 font-semibold">Want to work with me? Shoot me an email!</p>
    </a>

</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>