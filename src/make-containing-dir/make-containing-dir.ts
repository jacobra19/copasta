import { mkdir } from "fs/promises"

export const makeContainingDir = async (exeFilePath: string, dirName: string): Promise<string | void> => {
  // removes the file name from the path
  const path = exeFilePath.split('/').slice(0, -1).join('/')
  const dirPath = `${path}/${dirName}`
  try {
    await mkdir(dirPath)
    return dirPath
  } catch (err) {
    console.error(err)
  }
}
