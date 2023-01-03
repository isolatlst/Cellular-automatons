import React from 'react';
import cl from "../styles/Main.module.scss";
import {useGrid} from "../hooks/useGrid";
import b3s23 from "../tools/b3s23";
import bXsAny from "../tools/bXsAny"
import useInterval from "../hooks/useInterval";

type PropType = {
    isGridVisible: boolean
    setIsGridVisible: (value: boolean) => void
} & ReturnType<typeof useGrid>



const Controls: React.FC<PropType> = ({startGame, ...props}) => {
    const [delay, setDelay] = React.useState(100)
    const selectedGameRef = React.useRef(null as unknown as HTMLSelectElement)
    const startSelectedGame = React.useCallback(() => {
        switch (selectedGameRef.current.value) {
            case "b3s23":{
                startGame(b3s23)
                break
            }
            case "b1sAny":{
                startGame(bXsAny, 1)
                break
            }
            case "b3sAny":{
                startGame(bXsAny, 3)
                break
            }
            default: {
                startGame(b3s23)
                break
            }
        }
    }, [startGame])

    useInterval(startSelectedGame, delay, props.isGamePaused, props.grid)

    const changeDelayHndlr = (e: React.ChangeEvent<{ value: string | undefined }>) => {
        if (Number(e.currentTarget.value) <= 100 || isNaN(Number(e.currentTarget.value))) {
            setDelay(100)
        } else {
            setDelay(Number(e.currentTarget.value))
        }
    }

    const changeZoom = () => {
        if(props.zoom === 0.25){ props.setZoom(1)}
        else{ props.setZoom(prev => prev-0.25) }
    }


    return (
        <div className={cl.main__input}>
            <input type="text" placeholder="Введите размер квадрата" disabled={!props.isGamePaused} value={props.sizeXY} onChange={props.setGridSize}/>
            <button onClick={() => {
                if (!props.isGamePaused) {
                    props.setIsGamePaused(true)
                    return
                }
                startSelectedGame()
            }}>
                {props.isGamePaused ? 'Начать' : 'Остановить'}
            </button>
            <button onClick={props.clearGrid}>Отчистить поле</button>
            <button onClick={() => props.setIsGridVisible(!props.isGridVisible)}>
                {props.isGridVisible ? 'Отключить сетку' : 'Включить сетку'}
            </button>
            <button onClick={changeZoom}>Изменить зум</button>
            <select name="callback" ref={selectedGameRef}>
                <option value="b3s23">b3s23</option>
                <option value="b1sAny">b1sAny</option>
                <option value="b3sAny">b3sAny</option>
            </select>
            <input type="text" placeholder="Введите задержку отрисовки" value={delay} onChange={changeDelayHndlr}/>
        </div>
    );
};

export default Controls;