import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

export function HomePageBannerSection() {
  return (
    <Section
      className="
        relative
        min-h-[calc(100vh-64px)]
        overflow-hidden
        bg-sky-100
        border-b-4
        border-slate-900
        !py-8
        md:!py-0
        flex
        items-center
      "
    >
      {/* Decorative pixels — hidden on small screens to avoid overlap */}
      <div className="hidden sm:block absolute top-10 left-6 w-4 h-4 bg-pink-400 border-2 border-slate-900" />
      <div className="hidden sm:block absolute top-24 right-16 w-6 h-6 bg-yellow-300 border-2 border-slate-900 shadow-pixel-sm" />
      <div className="hidden sm:block absolute bottom-6 right-10 w-4 h-4 bg-pink-400 border-2 border-slate-900" />
      <div className="hidden md:block absolute right-0 top-10 w-2 h-48 bg-pink-400 border-l-2 border-slate-900" />

      {/* Main content */}
      <div className="w-full max-w-4xl mx-auto px-4 text-center">

        {/* Pixel icon */}
        <div className="flex justify-center mb-3">
          <div className="relative w-24 h-10 border-4 border-slate-700 bg-sky-50">
            <div className="absolute -top-4 left-5 w-12 h-5 border-4 border-slate-700 bg-sky-50" />
          </div>
        </div>

        {/* Welcome badge */}
        <div className="inline-flex items-center gap-2 border-4 border-slate-900 bg-white px-3 sm:px-4 py-1.5 shadow-pixel-sm">
          <span className="w-3 h-3 bg-pink-400 border-2 border-slate-900 shrink-0" />
          <span className="font-mono text-xs sm:text-sm md:text-base">
            WELCOME TO MY PORTFOLIO
          </span>
        </div>

        {/* Greeting */}
        <p className="mt-3 font-mono text-sm sm:text-base text-slate-700">
          HELLO, I'M
        </p>

        {/* Name */}
        <h1 className="font-pixel font-bold leading-[0.85] mt-1">
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-slate-900">
            SHAYMAE
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-pink-400 [text-shadow:3px_3px_0_#0f172a] sm:[text-shadow:5px_5px_0_#0f172a]">
            JANE
          </span>
        </h1>

        {/* Last name */}
        <p className="mt-2 font-pixel text-lg sm:text-xl md:text-2xl text-slate-900">
          SUMAGANG
        </p>

        {/* Divider */}
        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-3">
          <div className="w-8 sm:w-10 md:w-14 h-1 bg-slate-900" />
          <div className="w-3 h-3 bg-pink-400 border-2 border-slate-900 shrink-0" />
          <div className="w-8 sm:w-10 md:w-14 h-1 bg-slate-900" />
          <div className="w-3 h-3 bg-blue-400 border-2 border-slate-900 shrink-0" />
          <div className="w-8 sm:w-10 md:w-14 h-1 bg-slate-900" />
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mt-3">
          <p className="font-mono text-sm sm:text-base md:text-lg leading-snug text-slate-800">
            I am an{" "}
            <span className="text-pink-500 font-bold">IT Student</span>{" "}
            who enjoys learning about technology, programming,
            and creating useful digital projects.
          </p>
          <p className="mt-2 font-mono text-xs sm:text-sm md:text-base leading-snug text-slate-700">
            This portfolio showcases my journey, projects, skills,
            and experiences as I continue to grow in Information Technology.
          </p>
        </div>

        {/* Buttons — stack on mobile, row from sm up */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4">
          <NavLink to="/about" className="w-full sm:w-auto">
            <Button
              className="
                w-full sm:w-40
                h-11
                rounded-none
                border-4
                border-slate-900
                bg-pink-400
                text-slate-900
                font-pixel
                text-sm
                shadow-pixel-sm
                hover:bg-pink-400
                active:translate-x-[2px]
                active:translate-y-[2px]
                active:shadow-none
              "
            >
              ▶ ABOUT ME
            </Button>
          </NavLink>

          <NavLink to="/contact" className="w-full sm:w-auto">
            <Button
              className="
                w-full sm:w-40
                h-11
                rounded-none
                border-4
                border-slate-900
                bg-white
                text-slate-900
                font-pixel
                text-sm
                shadow-pixel-sm
                hover:bg-white
                active:translate-x-[2px]
                active:translate-y-[2px]
                active:shadow-none
              "
            >
              CONTACT ME
            </Button>
          </NavLink>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-3 mb-4 md:mb-0 font-mono text-[10px] sm:text-xs md:text-sm text-slate-700">
          <span>★ BSIT STUDENT</span>
          <span>|</span>
          <span>★ WEB DEVELOPMENT</span>
          <span>|</span>
          <span>★ CREATIVE PROJECTS</span>
        </div>

      </div>
    </Section>
  );
}