import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // NOTE: 可动态从 CMS 等系统生成 URL 
  const fields = [
    {
      loc: "https://www.apiseven.com", // Absolute url
      lastmod: new Date().toISOString(),
    }
  ];

  return getServerSideSitemap(ctx, fields);
};

const ServerSitemap = () => <></>;

export default ServerSitemap;
