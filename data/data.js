import fsPromises from 'fs/promises';
import path from 'path';

export async function getProjects() {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return [...objectData];
}

/**
 * 
 * @param {number} id 
 * @returns {{id : number ,name : string ,image : string ,tags : string[] ,overview : string ,goal : string ,images : string[] ,primary : string ,secondary : string ,accent : string ,primary-font-color : string ,secondary-font-color}}
 */
export async function getProject(id) {
    const projects = await getProjects()
    const project = projects.filter((proj) => proj.id === +id)[0]
    return project
}