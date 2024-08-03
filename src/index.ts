#!/usr/bin/env node

import { writeFileSync } from 'node:fs'
import { argv } from 'node:process'
import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'
import { makeContainingDir } from './make-containing-dir/make-containing-dir'
import templates from './templates/acme.json'
import { ErrorsMessages } from './errors-messages'
import { promptTemplates } from './prompt-templates/prompt-templates'


(async function () {
  console.log('copasta initiated 🧑‍✈️🍝\n')

  const componentName = argv[2]

  if (!componentName) {
    console.error(ErrorsMessages.MissingComponentName)
    process.exit(1)
  }

  const capitalizedName = startCase(componentName).split(' ').join('')
  const kebabedName = kebabCase(componentName)


  const dirPath = await makeContainingDir(kebabedName)

  if (!dirPath) {
    console.error('Error creating directory')
    process.exit(1)
  }

  const selectedTemplates = await promptTemplates(templates)

  selectedTemplates.forEach(async ({ content: rawContent, fileExtension, emoji }) => {
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
}());
