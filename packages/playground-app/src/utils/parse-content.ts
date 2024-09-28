// TODO: Move to a shared package

export const DynamicVariables = {
  capitalizedName: 'CapitalizedName',
  kebabedName: 'KebabedName'
}

const getRegExp = (variable: string) => new RegExp(`\\${variable}`, 'g')

export const parseContent = (content: string, capitalizedName: string, kebabedName: string) => {
  return content.replace(getRegExp(DynamicVariables.capitalizedName), capitalizedName).replace(getRegExp(DynamicVariables.kebabedName), kebabedName)
}
