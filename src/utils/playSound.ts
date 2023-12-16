import { Howl } from "howler"
import pebble from "../assets/pebble.wav"
import bubble from "../assets/bubble.wav"

const pebbleSound = () => {
  const sound = new Howl({
    src: [pebble],
  })
  sound.play()
}
const bubbleSound = () => {
  const sound = new Howl({
    src: [bubble],
  })
  sound.play()
}
export { pebbleSound, bubbleSound }
