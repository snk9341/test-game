import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const Swordsman_animator = ({data, stopAnimation}) => { 
    return (
    <SpriteAnimator 
        sprite={"/src/assets/sprite-files/Swordsman/" + data.path}
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
export default Swordsman_animator;