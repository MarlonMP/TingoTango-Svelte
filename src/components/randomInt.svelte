<script lang=ts>

    import { song } from '../store/$song'

    import Input from './input.svelte'

</script>

<div>
    <Input title=Min        bind:value={song.minTime}/>
    <Input title=Interval   bind:value={song.intervalTime}/>
    <Input title=Max        bind:value={song.maxTime}/>
</div>