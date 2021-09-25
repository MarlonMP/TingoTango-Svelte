<script lang=ts>
    
    import { songPlaying } from '../store/$song'

    export let id : number
    export let songInfo : File

    $: active = id == $songPlaying

</script>

<div class=song class:active>
    <svg viewBox='0 0 163.861 163.861' class:disabled={active}>
        <path d='M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z'/>
    </svg>

    <svg viewBox='0 0 519.479 519.479' class=pauseIcon class:disabled={!active}>
        <path d='M193.441,0h-75.484c-16.897,0-30.6,13.703-30.6,30.6v458.277c0,16.898,13.703,30.602,30.6,30.602h75.484
			c16.897,0,30.6-13.703,30.6-30.602V30.6C224.042,13.703,210.339,0,193.441,0z'/>
		<path d='M401.521,0h-75.484c-16.896,0-30.6,13.703-30.6,30.6v458.277c0,16.898,13.703,30.602,30.6,30.602h75.484
			c16.896,0,30.6-13.703,30.6-30.602V30.6C432.121,13.703,418.418,0,401.521,0z'/>
    </svg>

    <div>
        <div class:leftToRight={active}>{songInfo.name}</div>
    </div>

</div>
