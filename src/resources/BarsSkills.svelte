<script>
    import ProgressBar from './ProgressBar.svelte';

    export let skills={};
    
    function barValues(level){
        let arrayRet={};

        if(level=="basic"){
            arrayRet.color="green";
            arrayRet.percentage="25";
        }else if(level=="advanced"){
            arrayRet.color="yellow";
            arrayRet.percentage="50";
        }else if(level=="expert"){
            arrayRet.color="red";
            arrayRet.percentage="75";
        }else{
            arrayRet.color="blue";
            arrayRet.percentage="100";
        }
        return arrayRet;
    }
</script>
<style>
    
</style>

{#each skills as ski}
    <p>{ski.name}
    <ProgressBar {...barValues(ski.level)}>
        {ski.level}
    </ProgressBar></p>
{/each}