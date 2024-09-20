import kebabCase from 'lodash.kebabcase'
import startCase from 'lodash.startcase'


// TODO:: move to a shared package
export const parseModuleName = (moduleName: string) => {
  const capitalizedName = startCase(moduleName).split(' ').join('')
  const kebabedName = kebabCase(moduleName)

  return { capitalizedName, kebabedName }
}
