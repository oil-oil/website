import fs from 'fs'
import matter from "gray-matter";

export const getPost = (path: string): Partial<Post> => {
  try {
    const [, category, language, filename] = path.split("_posts")[1].split("/")
    // zh-CN -> zh
    // xxx.md -> xxx
    const pathname = `/${language.split("-")[0]}/${category}/${filename.replace(".md", "")}`
    const { content, data } = matter(fs.readFileSync(path))
    return {
      ...data,
      content,
      pathname
    }
  } catch (error) {
    return {}
  }
}

export const getPosts = (category: string, language = "zh-CN") => {
  const filenames = fs.readdirSync(`${process.cwd()}/_posts/${category}/${language}`)
  return filenames.map(filename => {
    const path = `${process.cwd()}/_posts/${category}/${language}/${filename}`
    const data = getPost(path)
    return data
  })
}
