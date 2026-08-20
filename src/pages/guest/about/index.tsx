import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";

const skills = [
  {
    title: "WEB DEVELOPMENT",
    description: "Creating responsive websites and learning modern frontend technologies.",
  },
  {
    title: "PROGRAMMING",
    description: "Learning programming concepts and improving my problem-solving skills.",
  },
  {
    title: "DATABASE",
    description: "Working with databases and learning how information can be stored and managed.",
  },
  {
    title: "UI / UX",
    description: "Learning how to create interfaces that are simple, useful, and easy to understand.",
  },
];

export default function AboutPage() {
  const [showMore, setShowMore] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("WEB DEVELOPMENT");

  const activeSkill = skills.find(
    (skill) => skill.title === selectedSkill
  );

  return (
    <>
      {/* Profile Header */}
      <Section className="bg-sky-100 border-b-4 border-slate-900 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-white border-4 border-slate-900 px-5 py-2 shadow-pixel-sm">
            <span className="font-pixel text-pink-500">
              ★  PROFILE ★
            </span>
          </div>

          <h1 className="mt-8 font-pixel text-5xl md:text-7xl font-bold text-slate-900">
            SHAYMAE{" "}
            <span className="text-pink-500 [text-shadow:4px_4px_0_#0f172a]">
              JANE
            </span>
          </h1>

          <p className="mt-3 font-pixel text-2xl text-slate-700">
            SUMAGANG
          </p>

          <div className="inline-block mt-6 bg-yellow-300 border-4 border-slate-900 px-5 py-2 shadow-pixel-sm">
            <span className="font-mono text-xl">
              BSIT • IT STUDENT
            </span>
          </div>
        </div>
      </Section>

      {/* About Me */}
      <Section className="bg-white border-b-4 border-slate-900 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sky-100 border-4 border-slate-900 shadow-pixel p-6 md:p-8">
            <h2 className="font-pixel text-3xl md:text-4xl text-slate-900 mb-6">
              ABOUT ME
            </h2>

            <div className="space-y-4 font-mono text-lg md:text-xl leading-relaxed text-slate-700">
              <p>
                Hi! I'm Shaymae Jane Sumagang, an Information Technology
                student who is interested in technology, programming, and
                web development.
              </p>

              <p>
                I enjoy learning how websites and applications work and
                exploring different technologies that can be used to create
                useful digital projects.
              </p>

              {/* State-controlled content */}
              {showMore && (
                <div className="border-4 border-slate-900 bg-white p-4 mt-4">
                  <p>
                    As an IT student, I'm continuously improving my skills
                    through school activities, programming exercises, and
                    different projects. I also enjoy exploring new ideas
                    and learning from every project I create.
                  </p>
                </div>
              )}
            </div>

            {/* Event */}
            <Button
              onClick={() => setShowMore((prev) => !prev)}
              className="
                mt-6
                rounded-none
                border-4
                border-slate-900
                bg-pink-400
                text-slate-900
                font-pixel
                px-6
                py-3
                shadow-pixel
                hover:bg-pink-400
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-pixel-sm
                active:translate-x-[4px]
                active:translate-y-[4px]
                active:shadow-none
              "
            >
              {showMore ? "▲ SHOW LESS" : "▼ READ MORE"}
            </Button>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section className="bg-pink-100 border-b-4 border-slate-900 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-pixel text-4xl md:text-5xl text-slate-900 mb-10">
            MY SKILLS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <button
                key={skill.title}
                onClick={() => setSelectedSkill(skill.title)}
                className={`
                  text-left
                  bg-white
                  border-4
                  border-slate-900
                  p-6
                  shadow-pixel-sm
                  transition-transform
                  hover:-translate-y-1
                  ${
                    selectedSkill === skill.title
                      ? "bg-yellow-300"
                      : "bg-white"
                  }
                `}
              >
                <h3 className="font-pixel text-xl text-pink-500 mb-3">
                  {skill.title}
                </h3>

                <p className="font-mono text-lg text-slate-700">
                  CLICK TO VIEW
                </p>
              </button>
            ))}
          </div>

          {/* Selected skill information */}
          {activeSkill && (
            <div className="mt-8 border-4 border-slate-900 bg-white p-6 shadow-pixel">
              <p className="font-pixel text-pink-500 text-xl mb-2">
                SELECTED SKILL
              </p>

              <h3 className="font-pixel text-2xl text-slate-900">
                {activeSkill.title}
              </h3>

              <p className="font-mono text-lg text-slate-700 mt-3">
                {activeSkill.description}
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* Goals */}
      <Section className="bg-sky-100 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white border-4 border-slate-900 shadow-pixel p-8">
            <div className="font-pixel text-pink-500 text-xl mb-4">
              ★ CURRENT QUEST ★
            </div>

            <h2 className="font-pixel text-3xl md:text-4xl text-slate-900">
              KEEP LEARNING. KEEP BUILDING.
            </h2>

            <p className="mt-5 font-mono text-lg md:text-xl leading-relaxed text-slate-700">
              My goal is to continue improving my programming and web
              development skills, gain experience through different
              projects, and create useful systems and applications.
            </p>

            <NavLink to="/" className="inline-block mt-8">
              <Button
                className="
                  rounded-none
                  border-4
                  border-slate-900
                  bg-pink-400
                  text-slate-900
                  font-pixel
                  px-8
                  py-3
                  shadow-pixel
                  hover:bg-pink-400
                  hover:translate-x-[2px]
                  hover:translate-y-[2px]
                  hover:shadow-pixel-sm
                  active:translate-x-[4px]
                  active:translate-y-[4px]
                  active:shadow-none
                "
              >
                ◀ BACK HOME
              </Button>
            </NavLink>
          </div>
        </div>
      </Section>
    </>
  );
}