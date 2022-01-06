<script>

    const KEY = 'themeCv';
    const ELEMENT = document.body.classList;

    ELEMENT.toggle('dark-mode', getStorageBool(KEY));

    function toggle() {
        let isDark = getStorageBool(KEY);
        localStorage.setItem(KEY, !isDark);
        ELEMENT.toggle('dark-mode', !isDark);
    }

    function getStorageBool(key) {
        return localStorage.getItem(key) === 'true';
    }
</script>

<style>
    button {
        background-color: var(--background-color-element);
        color: var(--color-element);
        border: none;
        border-radius: 4px;
        padding: 1rem;
        
    }
    :global(body.dark-mode) button {
        background-color: var(--background-color-element-dark);
        color: var(--color-element-dark);
    }
</style>

    <button on:click={toggle}>
        <slot/>
    </button>
    
   