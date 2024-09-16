import { getProject } from "@/data/data";
import { Span } from "next/dist/trace";
import Image from "next/image";

export default async function Page({ params }) {
    const project = await getProject(params.id);

    return <section className={``}>
        <div className="h-screen md:h-[calc(100vh-10rem)] flex items-center justify-center">
            <div className="grid grid-cols-8 w-full">
                <div className="col-span-8 md:col-span-2 flex flex-col items-center">
                    <h1 className="uppercase text-5xl md:text-5xl">{project.name}</h1>
                    <p className="text-lg place-self-end">Visual Identity</p>
                </div>
                <div className="col-span-8 md:col-span-6 ml-10 space-y-8">
                    <ul className="flex gap-4">
                        {project.tags.map((tag, idx) => (
                            <li key={idx} className="flex">
                                {idx !== 0 && <div className="w-1 bg-white rounded mr-4"></div>}
                                <p className="uppercase">{tag}</p>
                            </li>
                        ))}
                    </ul>

                    <p className="text-lg leading-8">
                        {project.overview}
                    </p>
                    <p className="text-lg leading-8">
                        PROJECT GOAL : {project.goal}
                    </p>
                </div>
            </div>
        </div>
        <div className="h-screen md:h-[calc(100vh-20rem)] flex items-center justify-center">
            <p className="text-2xl leading-10 w-2/3 text-center">
                {project.card}
            </p>
        </div>
        <div className="flex items-center flex-col gap-20">
            {project.images.map((img, idx) => (
                <Image className="aspect-video w-11/12 object-cover" key={idx} src={img} alt={`image of ${project.name}`} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0cfepBwADBgFYlcy+XgAAAABJRU5ErkJggg==" width={500} height={250} quality={100} loading="lazy"/>
            ))}
        </div>
    </section>;
}