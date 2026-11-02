<script lang="ts">
    const projectList = [
        {
            name: "Gun Violence Trends",
            picture: "/gunviolence-snapshot.webp",
            url: "https://huang-emily-gun-violence-trends-1-about-this-project-x3tuz5.streamlit.app/Visualize_the_Data",
            github: "https://github.com/huang-emily/gun-violence-trends",
            description: "web application that visualizes mass shooting data in the United States of America from 2014 - 2023",
            tools: "Python (NumPy, Pandas, Matplotlib, Seaborn, Streamlit), SQL, Tableau",
        },
        {
            name: "Pedestrian Safety",
            picture: "/keepmesafe-snapshot.webp",
            url: "https://keep-me-safe.onrender.com/",
            github: "https://github.com/huang-emily/keep-me-SaFe",
            description: "web application that visualizes San Francisco's traffic collision data and predicts potential accidents on a given route",
            tools: "Python (Plotly, NumPy, Pandas, Flask), Javascript, HTML/CSS, Bootstrap, Google Maps APIs",
        },

    ]

    $effect(() => {
        const encEmail = "ZWh1YW4wMTVAZ21haWwuY29t";
        const email = document.getElementById("contact");
        email?.setAttribute("href", "mailto:".concat(atob(encEmail)));
    })
</script>

<section id="projects" class="py-8">
    <!-- project header -->
    <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-semibold mb-2"><span class="underline decoration-5 decoration-sky-400">Projects</span></h1>
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
                <a class="outline-4 outline-sky-400 rounded-xl duration-200 hover:scale-98" href="{project.github}" rel="noopener noreferrer" target="_blank">
                    <img title="{project.name}'s Direct Link" class="grayscale hover:grayscale-0 hover:scale-107 duration-200 ease-in-out rounded-xl" src="{project.picture}" alt="Project Preview">
                </a>

                <!-- text for project -->
                <div class="mt-3">
                    <!-- project title -->
                    <h1 class="text-center text-md lg:text-lg font-semibold">{project.name}</h1>
                    
                    <!-- project description and tools used -->
                    <div class="font-light text-xs xl:text-sm 2xl:text-base">
                        <p class="mb-2"><span class="text-sky-400">✱</span> {project.description}</p>
                        <p class=""><span class="font-semibold underline decoration-2 decoration-sky-400">Built with</span> {project.tools}</p> 
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