import { readdir } from "fs/promises"

const templatePath = `./src/templates/`

// This function lists all the files in the template directory (acme/ by default)
// in a later step, we will use this function to copy the files 
// from a custom template to the destination directory (maybe even an external url)

export const listPaths = async (template: string = 'acme/'): Promise<string[]> => {
  const dir = `${templatePath}${template}`
  const filesNames = await readdir(dir, 'utf8')
  const files = filesNames.map((fileName) => `${dir}${fileName}`)

  return files
}
