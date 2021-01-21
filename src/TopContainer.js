import React from 'react'
import top from './../images/top.png';

export default function TopContainer(props) {
    let containerRef = null;

    return (
        <div className="container-fluid TCBGIMG" id={props.id} style={{
            padding: "0 0",
            height: "100vh",
            textAlign: 'center',
        }}
            ref={r => containerRef = r}
        >
            <img src={top} style={ topStyle } title="大舜之光" alt="大舜之光"
                onLoad={() => props.getSize(containerRef.getBoundingClientRect())}
            />
        </div>
    )
}

const topStyle = {
    height: '100%',
    opacity: "80%"
}