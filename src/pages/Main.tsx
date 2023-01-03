import React from 'react';
import cl from "../styles/Main.module.scss";
import {useGrid} from "../hooks/useGrid";
import Controls from "../components/Controls";
import Cell from "../components/Cell";

const Main = () => {
    const {sizeXY, setGridSize, grid, setGridItem, startGame, isGamePaused, setIsGamePaused, clearGrid, zoom, setZoom} = useGrid()
    const [isGridVisible, setIsGridVisible] = React.useState(true)
    const styles = {
        gridTemplateColumns: `repeat(${sizeXY}, 20px)`,
        gridTemplateRows: `repeat(${sizeXY}, 20px)`,
        zoom: zoom
    }

    return (
        <div className={cl.main}>
            <div className={cl.main__body} style={styles} onClick={setGridItem}>
                {
                    grid.map((item, index) => (
                        <Cell key={index} index={index} isGridVisible={isGridVisible} item={item}/>
                    ))
                }
            </div>
            <Controls isGridVisible={isGridVisible} setIsGridVisible={setIsGridVisible}
                      sizeXY={sizeXY} setGridSize={setGridSize} isGamePaused={isGamePaused}
                      setIsGamePaused={setIsGamePaused} startGame={startGame} setZoom={setZoom} zoom={zoom}
                      grid={grid} setGridItem={setGridItem} clearGrid={clearGrid}/>
        </div>
    );
};

export default Main;