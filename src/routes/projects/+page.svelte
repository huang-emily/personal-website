<script lang="ts">
    import "../../app.css";
    import { getLinkSize, getStrokeColor, getWebsiteBgColor } from "../../shared.svelte";
    const projectList = [
        {
            name: "Gun Trends in the US",
            picture: "/mass-shootings-snapshot.png",
            url: "https://huang-emily-gun-violence-trends-1-about-this-project-x3tuz5.streamlit.app/Visualize_the_Data",
            github: "https://github.com/huang-emily/gun-violence-trends",
            description: "web application that visualizes gun violence trends in the USA from 2014 - 2023",
            blurb: "This was an idea I originally had from my Master's program, but I never was able to give it the attention it needed. Through this project, I was able to explore what Python had to offer for Data Analytics and Web Development.",
            tools: "Python (Numpy, Pandas, Matplotlib, Seaborn), SQL, SQL Server Management Studio, Power BI",
        },
        {
            name: "Keep Me SaFe",
            picture: "/keepmesafe-snapshot.png",
            url: "https://keep-me-safe.onrender.com/",
            github: "https://github.com/huang-emily/keep-me-SaFe",
            description: "web application that predicts potential accident hotspots in San Francisco based on a given walking route",
            blurb: "The project is actually my Master's thesis project! The idea came about when my team members were discussing our experiences with walking around our respective neighborhoods during the pandemic.",
            tools: "Python (Plotly, Numpy, Pandas, Flask), Javascript, HTML/CSS, Bootstrap",
        },
        {
            name: "This Website!",
            picture: "/personalwebsite-snapshot.png",
            url: "https://keep-me-safe.onrender.com/",
            github: "https://github.com/huang-emily/personal-website",
            description: "my personal website displaying everything related to my skills and qualifications",
            blurb: "I was inspired to practice Svelte from an interviewer sharing a website called Pudding that has amazing data visualizations. I saw a lot of the Pudding team members used Svelte which led to my looking into the framework.",
            tools: "Svelte, Javascript, TailwindCSS, HTML/CSS",
        },
    ]
</script>

<div class="flex flex-col gap-y-4 pr-10 ml-20 mt-10 mb-8 lg:pr-10 lg:pl-4 sm:max-w-[52rem] xl:max-w-5xl">
    <h1 class="text-5xl text-center font-semibold sm:text-6xl lg:text-7xl mb-6">Projects</h1>

    <!-- Projects List! -->
    <div class="grid grid-cols-1 gap-y-6 lg:gap-x-6">
        {#each projectList as project}
        <!-- project item -->
        <div class="border-3 border-dashed rounded-[1rem]">
            <!-- structures image and text as a column -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center mx-8 my-6">
                <!-- image of project that links to website -->
                <a class="" href="{project.url}" rel="noopener noreferrer" target="_blank">
                    <img class="grayscale hover:grayscale-0 duration-500 ease-in-out rounded-[1rem]" src="{project.picture}" alt="Project Preview">
                </a>
                <!-- text for project -->
                <div class="mt-4 md:mt-0 lg:mt-0">
                    <!-- project title and github button -->
                    <div class="flex flex-row items-center gap-x-2">
                        <h1 class="text-xl md:text-2xl font-semibold">{project.name}</h1>
                        <a class="hover:scale-125" href="{project.github}" rel="noopener noreferrer" target="_blank">
                            <svg width="{getLinkSize()}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Github Repository Link</title>
                                <rect width="24" height="24" fill="{getWebsiteBgColor()}"/>
                                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" fill="{getStrokeColor()}"/>
                            </svg>
                        </a>
                    </div>
                    <!-- project description and tools used -->
                    <div class="text-sm">
                        <p class="mb-2">✱ {project.description}</p>
                        <p class="mb-2">{project.blurb}</p>
                        <p><span class="font-semibold text-base">Built with:</span> {project.tools}</p> 
                    </div>
                </div>
            </div>
        </div>
        {/each}
    </div>

</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>