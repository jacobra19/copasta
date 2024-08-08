import chalk from 'chalk';
import defaultTemplates from '../templates/acme.json'
import { Config, Template } from '../types'
import prompts from 'prompts';

export const getTemplates = async (config: Config | undefined): Promise<Template[]> => {
  if (config?.templates) return config.templates
  const message = chalk.whiteBright('Would you like to use the default templates? ') + chalk.blueBright('(https://github.com/jacobra19/copasta/blob/master/packages/copasta-cli/src/templates/acme.json)')
  console.log(chalk.redBright('No config found in copasta.config.js or package.json.\n'))

  const { selected } = await prompts({
    type: 'select',
    name: 'selected',
    message,
    instructions: false,
    choices: [
      { title: 'Yes', value: 'default' },
      { title: 'No', value: 'exit' }
    ]
  });
  if (selected === 'default') {
    return defaultTemplates
  } else {
    console.log(chalk.bgGreenBright.whiteBright('Pro tip:'), chalk.greenBright('Dive into the codebase and add a copasta.config.js file or "copasta" key in your package.json to customize your templates.'))
    console.log(chalk.blueBright('Read more at https://github.com/jacobra19/copasta'))
    process.exit(0)
  }
}
