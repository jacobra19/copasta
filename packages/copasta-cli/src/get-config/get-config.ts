import { findUp } from "find-up"
import { readFile } from "fs/promises"
import { Config } from "../types"

export const getConfig = async (): Promise<Config | undefined> => {
  const nearestPackageJsonPath = await findUp('package.json', { type: 'file' })

  if (!nearestPackageJsonPath) {
    return undefined
  }

  const nearestPackageJson = await readFile(nearestPackageJsonPath, 'utf-8')

  return JSON.parse(nearestPackageJson).copasta
}
