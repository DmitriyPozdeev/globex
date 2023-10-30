import {useCallback, useRef} from "react";

function useDebounce(callback: (str: string) => void, delay: number) {
    const timer = useRef<number>()
    return useCallback((str: string) => {
      if (timer.current) {
          clearTimeout(timer.current)
      }
      timer.current = +setTimeout(() => {
          callback(str)
      }, delay)
    },[callback, delay])
}
export default useDebounce;