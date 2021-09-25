import { writable } from 'svelte/store'

const createSongStore = () => {

    const { subscribe, update } = writable<File[]>([])

    const add = (files : FileList) => {

        let songsArr : File[] = []

        for (const file of files) {
            
            if (/^audio\/(.)+/.test(file.type)) {
                   
                songsArr = songsArr.concat(file)
            }
        }

        update(songList => songList.concat(songsArr))
    }

    return {
        subscribe,
        add,
        audio : new Audio(),
        minTime : 10,
        maxTime : 15,
        intervalTime : 5
    }
}

export const song = createSongStore()

export const songPlaying = writable(0)