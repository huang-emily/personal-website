<script lang="ts">
    const projectList = [
        {
            name: "E-commerce Business Insights",
            picture: "/bytes-basket.png",
            url: "https://huang-emily-gun-violence-trends-1-about-this-project-x3tuz5.streamlit.app/Visualize_the_Data",
            github: "https://github.com/huang-emily/elist_data_analysis",
            description: "Tableau dashboard that visualizes the orders data of an e-commerce business and provides insights on sales trends and customer behaviour",
            tools: "Excel, BigQuery, Tableau",
        },
        {
            name: "Gun Violence Trends",
            picture: "/gunviolence-snapshot.webp",
            url: "https://huang-emily-gun-violence-trends-1-about-this-project-x3tuz5.streamlit.app/Visualize_the_Data",
            github: "https://github.com/huang-emily/gun-violence-trends",
            description: "Web application that visualizes mass shooting data in the United States of America from 2014-2023",
            tools: "Python (NumPy, Pandas, Matplotlib, Seaborn, Streamlit), SQL, Tableau",
        },
        {
            name: "Pedestrian Safety Analysis",
            picture: "/keepmesafe-snapshot.webp",
            url: "https://keep-me-safe.onrender.com/",
            github: "https://github.com/huang-emily/keep-me-SaFe",
            description: "Web application that visualizes San Francisco's traffic collision data with a route-based accident prediction feature",
            tools: "Python (Plotly, NumPy, Pandas, Flask), JavaScript, HTML/CSS, Bootstrap, Google Maps APIs",
        },

    ]

    $effect(() => {
        const encEmail = "ZWh1YW4wMTVAZ21haWwuY29t";
        const email = document.getElementById("contact");
        email?.setAttribute("href", "mailto:".concat(atob(encEmail)));
    })
</script>

<section id="projects" class="mt-5 pt-2 mb-7">
    <!-- project header -->
    <div class="text-center">
        <h1 class="text-2xl md:text-3xl font-semibold mb-2 underline decoration-wavy decoration-3 decoration-sky-500">Projects</h1>
        <p class="mx-auto max-w-lg font-light text-[.7rem] md:text-sm lg:text-md">To visit the project's GitHub repository, click on the picture!</p>
    </div>

    <!-- Projects List! -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-2">
        {#each projectList as project}
        <!-- project item -->
        <div class="border-2 border-dashed rounded-2xl mt-6">
            <!-- structures image and text as a column -->
            <div class="grid grid-cols-1 gap-x-4 items-center m-5">
                <!-- image of project that links to GitHub -->
                <a class="overflow-hidden outline-4 outline-sky-500 rounded-xl duration-200" href="{project.github}" rel="noopener noreferrer" target="_blank">
                    <img title="{project.name}'s Direct Link" class="w-full aspect-video scale-100 object-[50%] hover:grayscale-0 hover:scale-125 duration-200 ease-in-out rounded-xl" src="{project.picture}" alt="Project Preview">
                </a>

                <!-- text for project -->
                <div class="mt-3">
                    <!-- project title -->
                    <h1 class="text-center text-sm md:text-md  font-semibold">{project.name}</h1>
                    
                    <!-- project description and tools used -->
                    <div class="font-light text-xs xl:text-sm 2xl:text-base">
                        <p class="mb-2"><span class="text-sky-500">✱</span> {project.description}</p>
                        <p class=""><span class="font-semibold">Built with</span> {project.tools}</p> 
                    </div>
                </div>
            </div>
        </div>
        {/each}
    </div>

</section>

<style lang="postcss">
    @reference "tailwindcss";
</style>