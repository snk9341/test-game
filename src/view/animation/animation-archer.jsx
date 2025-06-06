import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const Archer_animator = ({data, stopAnimation}) => { 
    return (
    <SpriteAnimator 
        sprite={"/src/assets/sprite-files/Archer/" + data.path}
        width={128}
        height={128} 
        scale={0.4}
        direction="vertical"
        shouldAnimate= {true}
        frameCount={data.frameCount}
        fps={data.fps}
        wrapAfter={1}
        stopLastFrame={stopAnimation}
    />
    );
};
export default Archer_animator;