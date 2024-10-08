import { mkdir } from "fs/promises"
import { ErrorsMessages } from "../errors-messages"
import { cwd } from "process"

export const makeContainingDir = async (dirName: string): Promise<string> => {
  const dirPath = `${cwd()}/${dirName}`
  try {
    await mkdir(dirPath)
    return dirPath
  } catch (err) {
    console.error(ErrorsMessages.MakingDirError, err)
    process.exit(1)
  }
}
