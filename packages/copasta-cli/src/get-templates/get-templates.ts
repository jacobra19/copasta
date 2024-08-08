import defaultTemplates from '../templates/acme.json'
import { Config, Template } from '../types'

export const getTemplates = async (config: Config | undefined): Promise<Template[]> => {
  if (!config?.templates) {
    return defaultTemplates
  }

  return config.templates
}
