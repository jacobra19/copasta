import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'
import { ErrorsMessages } from '../errors-messages'


// TODO:: move to a shared package
export const parseNames = (componentName: string) => {
  if (!componentName) {
    console.error(ErrorsMessages.MissingComponentName)
    process.exit(1)
  }

  const capitalizedName = startCase(componentName).split(' ').join('')
  const kebabedName = kebabCase(componentName)

  return { capitalizedName, kebabedName }
}
