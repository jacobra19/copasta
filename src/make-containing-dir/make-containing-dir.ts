import { mkdir } from "fs/promises"
import { ErrorsMessages } from "../errors-messages"
import { execPath } from "process"

export const makeContainingDir = async (dirName: string): Promise<string | void> => {
  const dirPath = `${execPath}/${dirName}`
  console.log('dirPath', dirPath)
  console.log('execPath', execPath)
  try {
    await mkdir(dirPath)
    return dirPath
  } catch (err) {
    console.error(ErrorsMessages.MakingDirError, err)
    process.exit(1)
  }
}
