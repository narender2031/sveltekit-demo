<script>
    import { MY_API_KEY } from '$lib/Env';
    // console.log(MY_API_KEY);

    let myApiKey;

    if (process.env.NODE_ENV === 'production') {
        // For production
        console.log(process.env, "---->>>>>>");
        myApiKey = process.env.MY_API_KEY;
    } else {
        // For development
        myApiKey = MY_API_KEY;
    }

    console.log(myApiKey, "---->>>>>>");
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation {myApiKey}</p>
