<script lang="ts">
    import "../../app.css";
    import { getLinkSize, getStrokeColor, getWebsiteBgColor } from "../../shared.svelte";
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
            name: "This Website!",
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

<div class="flex flex-col gap-y-4 mt-10 mb-6 lg:mt-20 sm:max-w-[43rem] xl:max-w-4xl">
    <!-- project header -->
    <div class="text-center -mb-4">
        <h1 class="duration-300 text-5xl font-semibold sm:text-6xl lg:text-7xl mb-2" style="color: {getStrokeColor()};"><span class="underline decoration-5 decoration-sky-400">Projects</span></h1>
        <p class="duration-300 text-xs sm:text-sm md:text-md lg:text-lg">To visit the project's website, click on the picture!</p>
    </div>

    <!-- Projects List! -->
    <div class="grid grid-cols-1 mb-2">
        {#each projectList as project}
        <!-- project item -->
         <!-- border-3 border-dashed rounded-[1rem] -->
        <div class="border-3 border-dashed rounded-[1rem] mt-6">
            <!-- structures image and text as a column -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center mx-6 my-8">
                <!-- image of project that links to website -->
                <a class="outline-4 outline-sky-400 rounded-[0.75rem] duration-200 hover:scale-98" href="{project.url}" rel="noopener noreferrer" target="_blank">
                    <img class="grayscale hover:grayscale-0 hover:scale-105 duration-200 ease-in-out rounded-[0.75rem]" src="{project.picture}" alt="Project Preview">
                </a>
                <!-- text for project -->
                <div class="mt-4 md:mt-0 lg:mt-0">
                    <!-- project title and github button -->
                    <div class="flex flex-row items-center gap-x-2">
                        <h1 class="duration-300 text-xl md:text-2xl font-semibold">{project.name}</h1>
                        <a class="duration-300 hover:scale-125" href="{project.github}" rel="noopener noreferrer" target="_blank">
                            <svg width="{getLinkSize()}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Github Repository Link</title>
                                <rect width="24" height="24" fill="{getWebsiteBgColor()}"/>
                                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" fill="{getStrokeColor()}"/>
                            </svg>
                        </a>
                    </div>
                    <!-- project description and tools used -->
                    <div class="duration-300 text-xs xl:text-sm xl:text-base">
                        <p class="mb-2"><span class="text-sky-400">✱</span> {project.description}</p>
                        <p class="mb-2">{project.blurb}</p>
                        <p class=""><span class="font-semibold">Built with</span> {project.tools}</p> 
                    </div>
                </div>
            </div>
        </div>
        {/each}
    </div>
    <a class="mx-auto w-fit text-center duration-300 text-sm sm:text-md md:text-lg lg:text-xl" id="contact">
        <p class="duration-300 hover:scale-110 underline decoration-2 decoration-sky-400 font-semibold">Want to work with me? Shoot me an email!</p>
    </a>

</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>