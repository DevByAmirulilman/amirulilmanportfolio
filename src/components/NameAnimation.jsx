import { animate } from 'animejs';
import React, { useEffect, useRef } from 'react';


const NameAnimation = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) {
            animate('span', {
                // Property keyframes
                y: [
                    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
                ],
                // Property specific parameters
                rotate: {
                    from: '-1turn',
                    delay: 0
                },
                delay: (_, i) => i * 50, // Function based value
                ease: 'inOutCirc',
                loopDelay: 1000,
                loop: true
            });
        }
    }, []);

    return (
        <h1 style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4px',
            alignItems: 'center',
            fontSize: 'clamp(1.2rem, 4vw, 2rem)', // responsive
            color: '#f7f1e8',
            fontFamily: 'Protest Guerrilla',
        }}>Hi, I'm
            <span sx={{ fontSize: { xs: 16, sm: 18 }, color: '#f7f1e8' }} ref={nameRef} style={{ display: 'inline-block' }}>&nbsp;</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>A</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>M</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>I</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>R</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>U</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>L</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>&nbsp;</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>I</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>L</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>M</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>A</span>
            <span ref={nameRef} style={{ display: 'inline-block' }}>N</span>
        </h1>
    );
};

export default NameAnimation;
