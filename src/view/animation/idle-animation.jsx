import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const HeroSprite = ({url}) => {
    return (
    <SpriteAnimator 
        sprite="/src/assets/sprite-files/Archer/Dead.png"
        width={128}
        height={128} 
        scale={0.3}
        direction="vertical"
        shouldAnimate= {true}
        frameCount={4}
        fps={6}
        wrapAfter={1}
    />
    );
};

export default HeroSprite;