#!/usr/bin/env node
import { readFileSync, writeFile, writeFileSync } from 'node:fs'
import { argv } from 'node:process'
import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'
import { makeContainingDir } from './make-containing-dir/make-containing-dir'
import templates from './templates/acme.json'
import { ErrorsMessages } from './errors-messages'

console.log('argv', argv)

const componentName = argv[2]
const targetPath = argv[1]

if (!componentName) {
  console.error(ErrorsMessages.MissingComponentName)
  process.exit(1)
}

const capitalizedName = startCase(componentName).split(' ').join('')
const kebabedName = kebabCase(componentName)


const main = async () => {
  const dirPath = await makeContainingDir(targetPath, kebabedName)
  if (!dirPath) {
    console.error('Error creating directory')
    process.exit(1)
  }


  console.log('dirPath', dirPath)

  console.log('__dirname', __dirname)
  console.log('__filename', __filename)

  templates.map(async ({ content: rawContent, fileExtension, emoji }) => {
    const fileName = `${kebabedName}.${fileExtension}`
    const filePath = `${dirPath}/${fileName}`
    const content = rawContent.replace(/ComponentName/g, capitalizedName).replace(/FileName/g, kebabedName)



    try {
      writeFileSync(filePath, content)
      console.log(`${emoji || '💾'} ${fileName} created successfully`)

    } catch (error) {
      console.error('Error writing file', error)
      process.exit(1);
    }
  })
  process.exit(0);

}

main()
