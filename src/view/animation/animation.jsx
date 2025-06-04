import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const HeroSprite = ({character, status, width, height, scale, direction, frameCount, fps, stopAnimation}) => {
    return (
    <SpriteAnimator 
        sprite={"/src/assets/sprite-files/" + character + "/" + status}
        width={width}
        height={height} 
        scale={scale}
        direction={direction}
        shouldAnimate= {true}
        frameCount={frameCount}
        fps={fps}
        wrapAfter={1}
        stopLastFrame={stopAnimation}
    />
    );
};

export default HeroSprite;