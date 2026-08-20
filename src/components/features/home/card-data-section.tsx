import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/common/section";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Player One Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience in web development.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Campus Lost & Found",
    description:
      "A school-based system designed to help students report, find, and manage lost and found items.",
    category: "System Development",
  },
  {
    id: 3,
    title: "School Resource Management",
    description:
      "A system concept for organizing and managing school resources using object-oriented programming.",
    category: "OOP / Java",
  },
  {
    id: 4,
    title: "Telegram UI Evaluation",
    description:
      "An HCI project focused on evaluating Telegram's usability and identifying possible improvements.",
    category: "UI/UX Design",
  },
];

export function CardDataSection() {
  return (
    <Section className="py-12 bg-gray-50/50">
      <div className="mb-8">
        <h2 className="font-pixelify text-3xl text-slate-900">
          My Projects
        </h2>

        <p className="mt-2 font-mono text-slate-600">
          Some of the projects and school works I have created.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-2 border-slate-900 rounded-none shadow-pixel-sm bg-white"
          >
            <CardHeader>
              <div className="mb-3 inline-block w-fit border-2 border-slate-900 bg-pink-400 px-3 py-1">
                <span className="font-mono text-xs font-bold text-slate-900">
                  {project.category}
                </span>
              </div>

              <CardTitle className="font-pixelify text-xl">
                {project.title}
              </CardTitle>

              <CardDescription className="font-mono text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Button className="w-full border-2 border-slate-900 bg-sky-100 text-slate-900 font-pixelify rounded-none shadow-pixel-sm hover:bg-sky-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                View Project →
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}