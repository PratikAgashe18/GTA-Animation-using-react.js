import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

export default function App() {
  let [showcontent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.InOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    if (!showcontent) return;
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay:-1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay:-.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay:-.8,
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.9,
      x:"-50%",
      bottom:"-70%",
      rotate: 0,
      duration: 2,
      delay:-1,
      ease: "Expo.easeInOut",
    });
     gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay:-.8,
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showcontent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Aerial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showcontent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing  overflow-hidden relative w-full h-screen bg-black ">
            <div className="navbar absolute top-0 left-0 z-[10] w-full px-5 py-5 ">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-[6px]">
                  <div className="line w-10 h-1 bg-white "></div>
                  <div className="line w-8 h-1 bg-white "></div>
                  <div className="line w-5 h-1 bg-white "></div>
                </div>
                <h3 className=" text-4xl -mt-[12px] text-white">ROCKSTAR</h3>
              </div>
            </div>

            <div className=" relative imagesdiv overflow-hidden h-screen w-full ">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0  w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className=" absolute bg scale-[1.8] rotate-[-3deg]  top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text absolute -translate-x-1/2 flex flex-col top-0 gap-1 left-[55%] scale-[1.1] rotate-[-10deg] text-white">
                <h1 className="text-[6rem] leading-none -ml-30">grand</h1>
                <h1 className="text-[6rem] leading-none ml-10">theft</h1>
                <h1 className="text-[6rem] leading-none -ml-30">auto</h1>
              </div>
              <img
                className=" absolute character -bottom-[180%] -translate-x-1/2  left-1/2 scale-[1.2] rotate-[-20deg] "
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar bottom-0 text-white w-full absolute left-0 px-2 py-5 bg-gradient-to-t from-black to-transparent ">
              <div className=" flex gap-2 items-center">
                <i className=" text-xl ri-arrow-down-line"></i>
                <h3 className=" text-2xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className=" absolute  h-[55px] -translate-x-1/2 -translate-y-1/2 left-1/2  top-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className=" h-screen flex justify-center items-center w-full  bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2  h-full">
                <img
                  className=" absolute scale-[0.7] left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[50%] py-5">
                <h1 className="text-4xl">Still Running</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-4 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, illum! Magni minus quaerat ad. Veritatis reiciendis
                  repellendus voluptatem repudiandae soluta similique eum
                  accusamus quos consequuntur sapiente, tempora fuga tempore
                  cumque deserunt natus facilis minus?
                </p>
                <p className="mt-3  text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, illum! Magni minus quaerat ad. Veritatis reiciendis
                  repellendus voluptatem repudiandae soluta similique eum
                  accusamus quos consequuntur sapiente, tempora fuga tempore
                  cumque deserunt natus facilis minus?
                </p>
                <p className="mt-5 text-xl font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, illum! Magni minus quaerat ad. Veritatis reiciendis
                  repellendus voluptatem repudiandae soluta similique eum
                  accusamus quos consequuntur sapiente, tempora fuga tempore
                  cumque deserunt natus facilis minus?
                </p>
                <button className="bg-yellow-500 px-5 py-5 text-black mt-7  cursor-auto text-3xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
