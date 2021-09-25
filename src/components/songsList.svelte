<script lang=ts>

    import Song from './song.svelte'
    import { song } from '../store/$song'

</script>

<div id=listOfSongs>
    {#each $song as songInfo, id}

        <Song {id} {songInfo}/>

    {/each}
</div>