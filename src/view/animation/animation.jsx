import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const HeroSprite = ({data, stopAnimation}) => {
    return (
    <SpriteAnimator 
        sprite={"/src/assets/sprite-files/Swordsman/" + "Idle.png"}
        width={128}
        height={128} 
        scale={0.3}
        direction="vertical"
        shouldAnimate= {true}
        frameCount={8}
        fps={11.5}
        wrapAfter={1}
        stopLastFrame={stopAnimation}
    />
    );
};
export default HeroSprite;