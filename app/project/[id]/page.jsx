import { getProject } from "@/data/data"

export default async function Page({ params }) {
    const project = await getProject(params.id)

    return <main>
        {project.name}
    </main>
}