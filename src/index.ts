#!/usr/bin/env node
import { writeFileSync } from 'node:fs'
import { argv, cwd, features } from 'node:process'
import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'
import { makeContainingDir } from './make-containing-dir/make-containing-dir'
import templates from './templates/acme.json'
import { ErrorsMessages } from './errors-messages'

console.log('argv', argv)

const isDebug = argv.includes('--debug')

const componentName = argv[2]


isDebug && console.log('__dirname', __dirname)
isDebug && console.log('__filename', __filename)
isDebug && console.log('cwd()', cwd())
isDebug && console.log('features', features)


if (!componentName) {
  console.error(ErrorsMessages.MissingComponentName)
  process.exit(1)
}

const capitalizedName = startCase(componentName).split(' ').join('')
const kebabedName = kebabCase(componentName)


const main = async () => {
  const dirPath = await makeContainingDir(kebabedName)
  isDebug && console.log('dirPath', dirPath)
  if (!dirPath) {
    console.error('Error creating directory')
    process.exit(1)
  }

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
