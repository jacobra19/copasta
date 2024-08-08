import { Config } from "../types"
import { cosmiconfig } from 'cosmiconfig'

export const getConfig = async (): Promise<Config | undefined> => {
  const { search } = cosmiconfig('copasta');
  const result = await search()

  return result?.config
}
