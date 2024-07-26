#!/usr/bin/env node
import { readFileSync, writeFile, writeFileSync } from 'node:fs'
import { argv } from 'node:process'
import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'
import { listPaths } from './list-files/list-files'
import { makeContainingDir } from './make-containing-dir/make-containing-dir'
console.log('argv', argv)

const componentName = argv[2]
const targetPath = argv[1]

if (!componentName) {
  console.error('Please provide a component name')
  process.exit(1)
}

const capitalizedName = startCase(componentName).replace(' ', '')
const kebabedName = kebabCase(componentName)


const main = async () => {
  const pathsOfFiles = await listPaths()
  console.log('pathsOfFiles', pathsOfFiles)
  const dirPath = await makeContainingDir(targetPath, kebabedName)
  if (!dirPath) {
    console.error('Error creating directory')
    process.exit(1)
  }
  console.log('dirPath', dirPath)
  pathsOfFiles.forEach(async (path) => {
    console.log('capitalizedName', capitalizedName)
    const fileName = path.split('/').pop()
    try {
      const file = readFileSync(path, 'utf8')
      file.replace(/ComponentName/g, capitalizedName)
      writeFileSync(dirPath, file)
    } catch (error) {
      console.error('Error reading file', error)
    }
  })
}

main()
