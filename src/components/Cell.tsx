import React from 'react';
import cl from "../styles/Main.module.scss";

type PropType = {
    index: number
    isGridVisible: boolean
    item: boolean
}

const Cell = React.memo(({index, isGridVisible, item}: PropType) => {
    return (
        <span data-index={index} className={`${cl.item} ${item ? cl.alive : ''}`}
              style={isGridVisible ? {border: '1px solid rgba(255, 255, 255, .25)'} : {border: 'none'}}>
        </span>
    );
});

export default Cell;