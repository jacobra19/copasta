#!/usr/bin/env node

import { argv } from 'node:process'
import { makeContainingDir } from './make-containing-dir/make-containing-dir'
import { promptTemplates } from './prompt-templates/prompt-templates'
import { generateFiles } from './generate-files/generate-files'
import { parseNames } from './parse-names/parse-names'
import { getTemplates } from './get-templates/get-templates'
import { getConfig } from './get-config/get-config'

(async function () {
  console.log('copasta initiated 🧑‍✈️🍝\n')

  const { capitalizedName, kebabedName } = parseNames(argv[2])

  const config = await getConfig()

  const templates = await getTemplates(config)

  const dirPath = await makeContainingDir(kebabedName)

  const selectedTemplates = await promptTemplates(templates)

  generateFiles({ capitalizedName, dirPath, kebabedName, templates: selectedTemplates })
}());
