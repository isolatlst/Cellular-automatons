import React from "react";

const useInterval = (callback: () => void, delay: number, isGamePaused: boolean, grid: Array<boolean>) => {
    const memoizedCallback = React.useCallback(callback, [callback] )

    React.useEffect(() => {
        if (!isGamePaused) {
            const id = setInterval(() => {
                memoizedCallback()
            }, delay)
            return () => clearInterval(id)
        }
    }, [delay, isGamePaused, grid])
}

export default useInterval