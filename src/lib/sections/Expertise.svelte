<script lang="ts">
    const tools = [
        {
            category: "Data Analytics",
            list: [
                {
                    tool_name: "SQL",
                    icon: "/sql.svg",
                }, 
                {
                    tool_name: "BigQuery",
                    icon: "/bigquery.svg",
                }, 
                {
                    tool_name:"Python",
                    icon: "/python.svg",
                },
                {
                    tool_name: "Tableau", 
                    icon: "/tableau.svg",
                },
                {
                    tool_name: "Excel",
                    icon: "/excel.svg",
                }
            ]
        },
        {
            category: "Web Development",
            list: [
                {
                    tool_name:"HTML",
                    icon: "/html.svg",
                },
                {
                    tool_name:"CSS",
                    icon: "/css.svg",
                },
                {
                    tool_name: "Tailwind", 
                    icon: "/tailwind.svg",
                },
                {
                    tool_name: "JavaScript", 
                    icon: "/javascript.svg",
                },
                {
                    tool_name: "Svelte",
                    icon: "/svelte.svg",
                },
                {
                    tool_name: "Flask",
                    icon: "/flask.svg",
                    invertDark: true,
                }, 
            ]
        }
    ]
    
    const skills = [
        { 
            before: "Adapting to ", 
            key: "unfamiliar domains and tools", 
            after: " quickly" },
        { 
            before: "Translating ", 
            key: "data findings", 
            after: " for any audience" },
        { 
            before: "Uncovering the ", 
            key: "real question", 
            after: " behind any request" },
        { 
            before: "Finding ", 
            key: "creative angles", 
            after: " in messy data" },
    ];

    $effect(() => {
        const encEmail = "ZWh1YW4wMTVAZ21haWwuY29t";
        const email = document.getElementById("contact");
        email?.setAttribute("href", "mailto:".concat(atob(encEmail)));
    })
</script>

<section id="expertise" class="pt-10 md:pt-15 lg:pt-20">
    <div class="">
        <!-- TEXT AFTER HEADER -->
        <div class="max-w-2xl flex flex-col gap-y-4">
            <h1 class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold -mb-4"><span class="underline decoration-5 decoration-sky-400">Toolkit</span></h1>

            <!-- Tools -->
            <div class="flex flex-col gap-y-2 justify-center">
                {#each tools as tool}
                    <div class="mt-4 border-2 border-dashed rounded-2xl p-4 pr-6 ">
                        <h1 class="text-center text-lg md:text-xl lg:text-2xl font-semibold mb-2">{tool.category}</h1>
                        
                        <div class="my-3 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-x-4 gap-y-4">
                            {#each tool.list as item}
                                <div class="flex flex-row gap-x-1 items-center">
                                    <img class="w-8 {item.invertDark ? 'dark:invert' : ''}" src={item.icon} alt="{item.tool_name} icon" />
                                    <h2 class="text-sm sm:text-md md:text-lg lg:text-xl">{item.tool_name}</h2>
                                </div>
                            {/each}
                        </div>
                        
                    </div>
                {/each}
            </div>

            <!-- Skills -->
            <div class="mt-2 flex flex-col justify-center">
                <h1 class="mb-2 md:mb-4 text-center text-2xl md:text-3xl lg:text-4xl font-semibold"><span class="underline decoration-5 decoration-sky-400">Strengths</span></h1>

                <!-- display skills -->
                <div class="mx-auto pl-6 grid grid-cols-1 gap-y-2">
                    <ul class="list-none flex flex-col gap-y-2 text-md sm:text-lg">
                    {#each skills as s}
                        <li class="flex gap-x-2">
                        <span class="text-sky-400" aria-hidden="true">✦</span>
                        <span>{s.before}<span class="">{s.key}</span>{s.after}</span>
                        </li>
                    {/each}
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</section>

<style lang="postcss">
    @reference "tailwindcss";
</style>