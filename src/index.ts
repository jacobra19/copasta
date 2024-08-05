#!/usr/bin/env node

import { argv } from 'node:process'
import { makeContainingDir } from './make-containing-dir/make-containing-dir'
import { promptTemplates } from './prompt-templates/prompt-templates'
import { generateFiles } from './generate-files/generate-files'
import { parseNames } from './parse-names/parse-names'
import { getTemplates } from './get-templates/get-templates'

(async function () {
  console.log('copasta initiated 🧑‍✈️🍝\n')

  const { capitalizedName, kebabedName } = parseNames(argv[2])

  const dirPath = await makeContainingDir(kebabedName)

  const templates = await getTemplates()

  const selectedTemplates = await promptTemplates(templates)

  generateFiles({ capitalizedName, dirPath, kebabedName, templates: selectedTemplates })
}());
