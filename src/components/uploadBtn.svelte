<script lang=ts>

    import { song } from '../store/$song'

    export let value = 'Upload Song'

    const onClick = (event : MouseEvent) => {
        const div = event.target as HTMLElement
        const input = div.childNodes[0] as HTMLInputElement

        if (input) input.click()
    }

    const onChange = (event : Event) => {
        const input = <HTMLInputElement> event.target

        song.add(input.files)
    }

</script>

<div class=btn on:click={onClick}>
    <input type=file multiple accept='audio/*' on:change={onChange}/>
    {value}
</div>