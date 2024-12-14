"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import PackageManager from "./PackageManager";
import VersioningControl from "./VersioningControl";
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Intro from "./Intro";

const TechStacks = () => {
  const swiper = useSwiper();

    return (
        <section id="tech-stacks">
            <div className="block">
                <Intro />
                <div className="relative mt-4">
                    <Swiper
                        spaceBetween={50}
                        draggable
                        loop={true}
                        keyboard
                        modules={[Keyboard, Mousewheel, Autoplay, Navigation]}
                        navigation={{
                            nextEl: ".__sw-next-el",
                            prevEl: ".__sw-prev-el",
                        }}
                        autoplay={{
                            delay: 10000,
                            pauseOnMouseEnter: true,
                        }}
                        mousewheel
                    >
                        <SwiperSlide>
                            <div className="w-full grid place-items-center">
                                <FrontEnd />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full grid place-items-center">
                                <BackEnd />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full grid place-items-center">
                                <VersioningControl />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full grid place-items-center">
                                <PackageManager />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <button onClick={() => swiper?.slidePrev()} className="__sw-prev-el absolute outline transition-all hover:-translate-x-2 outline-2 outline-offset-2 outline-cyan-300 -left-3 top-1/2 -translate-y-1/2 rounded-full shadow-md shadow-cyan-300 p-2 z-50">
                        <ChevronLeftIcon className="w-7 h-7 text-gray-100" />
                    </button>
                    <button onClick={() => swiper?.slideNext()} className="__sw-next-el absolute outline transition-all hover:translate-x-2 outline-2 outline-offset-2 outline-cyan-300 -right-3 top-1/2 -translate-y-1/2 rounded-full shadow-md shadow-cyan-300 p-2 z-50">
                        <ChevronRightIcon className="w-7 h-7 text-gray-100" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TechStacks;
