<script lang=ts>
    
    import { song, songPlaying } from '../store/$song'
    
    import PlayBtn from './playBtn.svelte'
    import RandomInt from './randomInt.svelte'
    
    $: disabledToPlay = $song.length < 1
    $: disabled = $song.length < 2

    let paused = true
    let timeout = setTimeout(()=>{}, 0)
    let clearTimeOut = true

    const getRandomInt = () => {
        // @ts-ignore
        const min = parseInt(song.minTime)
        // @ts-ignore
        const max = parseInt(song.maxTime)

        let num = Math.floor((Math.random() * (max - min)) + min)

        return num * 1000
    }

    const playCycle = async () => {
            song.audio.pause()

            paused = !paused
            // @ts-ignore
            const interval = parseInt(song.intervalTime) * 1000

            timeout = await setTimeout(() => onPlay(), interval)
    }

    const getFile = () => {
        const file = $song[$songPlaying]
        return  URL.createObjectURL(file)
    }

    const onPlay = async () => {
        
        if (disabledToPlay) return

        paused = !paused

        if (clearTimeOut) clearTimeout(timeout)

        if (!paused) {

            if (song.audio.src == '') song.audio.src = getFile()

            clearTimeOut = false
            song.audio.play()

            const randInt = getRandomInt()

            timeout = await setTimeout(playCycle, randInt)

        } else {
            clearTimeOut = true
            song.audio.pause()
        }
    }

    const realoadAudio = () => {
        paused = true

        clearTimeout(timeout)

        song.audio.pause()
        song.audio.src = getFile()

        onPlay()
    }

    const onPrevius = () => {

        if (disabled) return realoadAudio()

        const songLen = $song.length -1

        if ($songPlaying == 0) $songPlaying = songLen

        else $songPlaying--

        realoadAudio()
    }

    const onNext = () => {

        if (disabled) return realoadAudio()

        const songLen = $song.length -1

        if ($songPlaying == songLen) $songPlaying = 0

        else $songPlaying++

        realoadAudio()
    }

    song.audio.addEventListener('ended', onNext)

</script>

<div>
    <PlayBtn on:click={onPlay} bind:paused/>

    <div>
        <div class=btn on:click={onPrevius} class:disabled>
            <svg viewBox='0 0 13.68 13.68' class=previus>
                <path d='M13.268,1.662c-0.247-0.128-0.548-0.106-0.775,0.06L7.706,5.197V3.946V2.329 c0-0.283-0.159-0.538-0.411-0.667c-0.248-0.128-0.549-0.106-0.776,0.06L0.306,6.233C0.115,6.374,0,6.598,0,6.838 s0.114,0.465,0.306,0.604l6.213,4.512c0.128,0.094,0.283,0.145,0.439,0.145c0.114,0,0.23-0.03,0.337-0.083 c0.252-0.129,0.411-0.388,0.411-0.665V9.732V8.478l4.787,3.477c0.129,0.094,0.283,0.145,0.439,0.145 c0.113,0,0.229-0.03,0.336-0.083c0.253-0.129,0.412-0.388,0.412-0.665V9.733V3.947V2.329C13.68,2.047,13.521,1.791,13.268,1.662z'/>
            </svg>
        </div>

        <div class=btn on:click={onNext} class:disabled>
            <svg viewBox='0 0 13.68 13.68' class=next>
                <path d='M13.268,1.662c-0.247-0.128-0.548-0.106-0.775,0.06L7.706,5.197V3.946V2.329 c0-0.283-0.159-0.538-0.411-0.667c-0.248-0.128-0.549-0.106-0.776,0.06L0.306,6.233C0.115,6.374,0,6.598,0,6.838 s0.114,0.465,0.306,0.604l6.213,4.512c0.128,0.094,0.283,0.145,0.439,0.145c0.114,0,0.23-0.03,0.337-0.083 c0.252-0.129,0.411-0.388,0.411-0.665V9.732V8.478l4.787,3.477c0.129,0.094,0.283,0.145,0.439,0.145 c0.113,0,0.229-0.03,0.336-0.083c0.253-0.129,0.412-0.388,0.412-0.665V9.733V3.947V2.329C13.68,2.047,13.521,1.791,13.268,1.662z'/>
            </svg>
        </div>
    </div>

    <RandomInt />
</div>