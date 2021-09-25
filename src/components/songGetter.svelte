<script lang=ts>

    import { song } from '../store/$song'
    
    import SongsList from './songsList.svelte'
    import UploadBtn from './uploadBtn.svelte'

    let active = false

    const onDragOver = (event : DragEvent) => {
        event.preventDefault()
        active = true
    }

    const onDragLeave = (event : DragEvent) => {
        event.preventDefault()
        active = false
    }

    const onDrop = (event : DragEvent) => {
        event.preventDefault()
        active = false
        song.add(event.dataTransfer.files)
    }

</script>

<div class:active on:dragover={onDragOver} on:dragleave={onDragLeave} on:drop={onDrop}>
    <UploadBtn />

    <h2>List of Songs</h2>

    <SongsList/>
</div>