import { writeFileSync } from 'node:fs'
import { Template } from "../types";
import { makeContainingDir } from '../make-containing-dir/make-containing-dir';

interface GenerateFilesOptions {
  templates: Template[]
  kebabedName: string
  capitalizedName: string
}

export const generateFiles = async ({ capitalizedName, kebabedName, templates }: GenerateFilesOptions) => {
  const dirPath = await makeContainingDir(kebabedName)

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
