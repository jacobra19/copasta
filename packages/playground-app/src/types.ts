// TODO: Move to shared package

export interface Template {
  emoji?: string,
  fileExtension: string,
  content: string
}

export interface Config {
  templates?: Template[]
}