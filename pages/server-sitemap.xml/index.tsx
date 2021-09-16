import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // NOTE: 可动态从 CMS 等系统生成 URL，此外，Sitemap 仅允许本站点下地址，因此 News 不可用。

  const dataFileNameList = ["blog", "devcon", "usercase", "acasia2021"];
  const langs = ["zh-CN", "en-US"];

  let urls = [];

  for (let name of dataFileNameList) {
    const data = require(`../../data/${name}.json`);
    for (let lang of langs) {
      const list = data[lang];
      if (!list) {
        continue;
      }

      for (let item of list) {
        if (item.path) {
          urls.push(`https://www.apiseven.com${item.path}`);
        }
      }
    }
  }

  const fields = Array.from(new Set(urls)).map((url) => ({
    loc: url,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

const ServerSitemap = () => <></>;

export default ServerSitemap;
