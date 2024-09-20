// TODO: Move to a shared package

export const parseContent = (content: string, capitalizedName: string, kebabedName: string) => {
  return content.replace(/<CapitalizedName>/g, capitalizedName).replace(/<KebabedName>/g, kebabedName)
}
