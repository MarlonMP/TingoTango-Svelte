<script lang=ts>

    export let value = 10
    export let title = ''

    const onKeyDown = (event : KeyboardEvent) => {

        const key = event.key
        const keysArray = [/Backspace/, /Delete/, /Enter/, /Shift/, /Tab/, /[0-9]/]
        let isValidKey = false

        keysArray.forEach(regExp => {
            if (regExp.test(key)) {
                isValidKey = true
                return
            } 
        })

        if (!isValidKey) event.preventDefault()
    }

</script>

<div class=input>
    <b>{title}</b>
    <input type=text {title} bind:value on:keydown={onKeyDown}>
</div>