import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { spring } from "react-flip-toolkit";
import './home.css';

const HomePage = (props) => {

    const containerRef = useRef(null);
    const num = "00012001010101001010";
    const name = "here's is some information";

    useEffect(() => {
        const char = [...containerRef.current.querySelectorAll(".name_name")];
        aniwave(char, 70)
        const number = [...containerRef.current.querySelectorAll(".num_num")];
        aniwave(number)
    }, []);

    const aniwave = (text, delay=100) => {
        text.forEach((el, i) => {
            spring({
                config: "wobbly",
                values: {
                    translateY: [-15, 0],
                    opacity: [0, 1],
                },
                onUpdate: ({ translateY, opacity }) => {
                    el.style.opacity = opacity;
                    el.style.transform = `translateY(${translateY}px)`;
                    el.style.background = `#fff`;
                },
                delay: i * delay,
                onComplete: () => {
                }
            });
        });
    }

    return (
        <div className="home-contanier">
            <div className="home_section" ref={containerRef}>
                {name.split("").map((txt, i) => (
                    <span className='name_name'>{txt}</span>
                ))}

                <div>
                    {num.split("").map((txt, i) => (
                        <span className='num_num'>{txt}</span>
                    ))}
                </div>
            </div>

            <div className="home_section">
                about this site and what tools are build with
            </div>

            <div className="home_section">
                more of expriance and educaiton

                bel salma ya 7abiby bel salamaaaa
            </div>
        </div>
    );
};

export default HomePage;
