import { ErrorsMessages } from '../errors-messages';
import prompts from 'prompts'
import { Template } from '../types';

export const promptTemplates = async (templates: Template[]): Promise<Template[]> => {
  const templatesMap = new Map<string, Template>()

  templates.forEach((template) => {
    templatesMap.set(template.fileExtension, template)
  })

  try {
    const response = await prompts({
      type: 'multiselect',
      name: 'selectedTemplates',
      message: 'Pick files you want to generate',
      instructions: false,
      choices: templates.map(({ fileExtension, emoji }) => ({
        title: `${emoji || '💾'} ${fileExtension}`,
        value: fileExtension,
        selected: true
      })),
    });

    return response.selectedTemplates.map((selectedTemplate: string) => templatesMap.get(selectedTemplate))
  } catch (error) {
    console.error(ErrorsMessages.PromptingTemplatesError, error)
    process.exit(0)
  }
}



