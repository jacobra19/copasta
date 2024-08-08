import { writeFileSync } from 'node:fs'
import { Template } from "../types";

interface GenerateFilesOptions {
  templates: Template[]
  dirPath: string
  kebabedName: string
  capitalizedName: string
}

export const generateFiles = ({ capitalizedName, dirPath, kebabedName, templates }: GenerateFilesOptions) => {
  templates.forEach(({ content: rawContent, fileExtension, emoji }) => {
    const fileName = `${kebabedName}.${fileExtension}`
    const filePath = `${dirPath}/${fileName}`
    const content = rawContent.replace(/ComponentName/g, capitalizedName).replace(/FileName/g, kebabedName)

    try {
      writeFileSync(filePath, content)
      console.log(`${emoji || '💾'} ${fileName} created successfully`)

    } catch (error) {
      console.error(`Error writing file ${fileExtension}`, error)
      process.exit(1);
    }
  });
  process.exit(0);

}
