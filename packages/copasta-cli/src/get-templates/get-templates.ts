import defaultTemplates from '../templates/acme.json'
import { readFile } from 'fs/promises'
import { getConfig } from '../get-config/get-config'

export const getTemplates = async () => {
  const config = await getConfig()

  if (!config?.templatesLocalPath) {
    return defaultTemplates
  }

  return JSON.parse(await readFile(config.templatesLocalPath, 'utf-8'))
}
