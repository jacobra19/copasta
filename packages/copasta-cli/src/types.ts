export interface Template {
  emoji?: string,
  fileExtension: string,
  content: string
}

export interface Config {
  templates?: Template[]
}
