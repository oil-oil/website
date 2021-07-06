type Post = {
  type: BlogMetaProps['type']
  tags: string[]
  title: string
  description?: string
  image: string
  path?: string
  date?: string | Date;
  logo?: string;
  url?: string;
  desc?: string;
  speaker?: string;
  author?: {
    name: string
    image: string
    title: string
  }
}

type LinkItem = {
  title: string;
  href: string;
}
type Section = {
  title: string;
  list: {
    title: string;
    list: LinkItem[];
  }[];
}
