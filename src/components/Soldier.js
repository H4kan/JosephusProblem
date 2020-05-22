
import React from 'react';

const Soldier = (props) => {
    return (
        <div className={`soldier ${props.live ? 'alive' : 'dead'}`} style={{
            top: `${props.x}px`,
            left: `${props.y}px`,
            transform: `translate(${props.radius}px,${props.radius}px)`,
        }}>
            <div className="soldierBox"><span>{props.id + 1}</span></div>
        </div>
    );
}

export default Soldier;