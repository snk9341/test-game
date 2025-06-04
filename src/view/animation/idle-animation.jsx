import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const HeroSprite = ({url}) => {
    return (
    <SpriteAnimator 
        sprite="/src/view/animation/Idle.png"
        width={128}
        height={128} 
        scale={0.3}
        direction="vertical"
        shouldAnimate= {true}
        frameCount={8}
        fps={10}
        wrapAfter={1}
    />
    );
};

export default HeroSprite;