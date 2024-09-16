import Button from "@/components/Button";
import { getProjects } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div className="space-y-20 mb-10">
            <section className="">
                <h1 className="text-5xl md:text-7xl text-center center pt-32">
                    My Portfolio
                </h1>
                <p className='uppercase text-3xl text-center center pt-32'>
                    welcome to my branding portfolio.Here you will find some of my recent works: strategic brand identity, social media desgin, print design, packaging design. Explore my project to learn more about what i do.
                </p>
            </section>
            <div className="flex flex-wrap items-center justify-center gap-8">
                {
                    projects.map((project) =>
                        <Link key={project.id} href={`/project/${project.id}`} className={`relative w-full md:max-w-[calc(50%-1rem)] aspect-video`}>
                            <Image alt={project.name} src={project.image} fill className="absolute top-0 left-0 -z-10 object-cover" />
                            <div className="absolute top-0 left-0 bg-gray-950 opacity-0 hover:opacity-75 transition-opacity duration-200 w-full h-full text-2xl flex items-center justify-center">
                                {project.name} - View Project
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="flex flex-col items-center gap-8">
                <h5 className="uppercase text-4xl md:text-7xl text-center center">
                    lets add some <span className='font-rony text-primary'>sparkle</span> to your brand
                </h5>
                <Button className={"scale-150"}>ENQUIRE</Button>
            </div>
        </div>
    );
};


