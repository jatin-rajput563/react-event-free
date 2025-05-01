"use client";
import React, { useEffect, useState } from "react";
import Arrow from '../../assets/images/png/up-arrow.png'
const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false);
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const windowScroll = () => {
        setScrollToTop(window.scrollY > 180);
    };
    useEffect(() => {
        window.addEventListener("scroll", windowScroll);
    });
    return (
        <>
            {scrollTop && (
                <button
                    onClick={scrollHandler}
                    className="fixed p-3 flex max-sm:hidden justify-center right-[15px] bottom-[15px] z-30 cursor-pointer bg-white border-1 rounded-full animate-bounce size-12 min-[1920.98px]:size-16 max-md:size-10"
                >
                    <img src={Arrow} alt="back to top"
                    />
                </button>
            )}
        </>
    );
};

export default BackToTop;