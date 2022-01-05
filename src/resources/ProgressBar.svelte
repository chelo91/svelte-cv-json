<script>
	export let color="";
	export let percentage="";

    let propColor="";
    
    if(color=="red"){
        propColor="bg-danger";
    }else if(color=="yellow"){
        propColor="bg-warning";
    }else if(color=="green"){
        propColor="bg-success";
    }else if(color=="aqua"){
        propColor="bg-info";
    }
</script>

<style>
    .progress{
        min-height: 27px;
        margin: 5px;
    }
</style>

<div class="progress">
    <div class="progress-bar {propColor}" role="progressbar" style="width: {percentage}%" aria-valuenow="{percentage}" aria-valuemin="0" aria-valuemax="100"><slot/></div>
</div>