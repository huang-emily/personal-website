<script lang="ts">
    import "../../app.css";
    import { getLinkSize, getStrokeColor, getWebsiteBgColor } from "../../shared.svelte";
    const projectList = [
        {
            name: "Mass Shootings in the US",
            picture: "/mass-shootings-snapshot.png",
            url: "https://huang-emily-gun-violence-trends-1-about-this-project-x3tuz5.streamlit.app/Visualize_the_Data",
            github: "https://github.com/huang-emily/gun-violence-trends",
            description: "This is a project description",
            tools: "Python (Numpy, Pandas, Matplotlib, Seaborn), SQL, Power BI",
        },
        {
            name: "Keep Me SaFe",
            picture: "/keepmesafe-snapshot.png",
            url: "https://keep-me-safe.onrender.com/",
            github: "https://github.com/huang-emily/keep-me-SaFe",
            description: "This is a project description",
            tools: "Python (Plotly, Numpy, Pandas, Flask), Javascript, Bootstrap",
        },
    ]
</script>

<div class="flex flex-col gap-y-4 pr-10 ml-20 mt-10 mb-8 lg:mt-30 lg:pr-10 lg:pl-4 md:max-w-7xl">
    <h1 class="text-7xl text-center">Projects</h1>

    <!-- Projects List! -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6">
        {#each projectList as project}
        <!-- project item -->
        <div class="border-2 border-solid px-4 py-6">
            <!-- structures image and text as a column -->
            <div class="flex flex-col gap-x-4 items-center">
                <!-- image of project that links to website -->
                <a href="{project.url}" rel="noopener noreferrer" target="_blank">
                    <img class="grayscale hover:grayscale-0 duration-300 ease-in-out w-xs sm:w-md object-fill rounded-[1rem]" src="{project.picture}" alt="Project Preview">
                </a>
                <!-- text for project -->
                <div class="mt-4">
                    <!-- project title and github button -->
                    <div class="flex flex-row items-center gap-x-2">
                        <h1 class="text-xl md:text-2xl">{project.name}</h1>
                        <a class="hover:scale-125" href="{project.github}" rel="noopener noreferrer" target="_blank">
                            <svg width="{getLinkSize()}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Github Repository Link</title>
                                <rect width="24" height="24" fill="{getWebsiteBgColor()}"/>
                                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" fill="{getStrokeColor()}"/>
                            </svg>
                        </a>
                    </div>

                    <!-- project description and tools used -->
                    <ol class="text-sm md:text-md">
                        <li>{project.description}</li>
                        <li>Built with: {project.tools}</li>
                    </ol>
                </div>
            </div>
        </div>
        {/each}
    </div>

</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>