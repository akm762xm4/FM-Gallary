import { bubbleSound } from "./playSound"

type UpdatePageFunction = React.Dispatch<React.SetStateAction<number>>

type HandlePrevClick = (setPage: UpdatePageFunction, prevPage?: string) => void

type HandleNextClick = (setPage: UpdatePageFunction, nextPage?: string) => void

const handlePrevClick: HandlePrevClick = (setPage, prevPage) => {
  bubbleSound()
  if (!prevPage) {
    return
  }
  setPage((prev) => prev - 1)
}

const handleNextClick: HandleNextClick = (setPage, nextPage) => {
  bubbleSound()
  if (!nextPage) {
    return
  }
  setPage((prev) => prev + 1)
}

export { handlePrevClick, handleNextClick }
