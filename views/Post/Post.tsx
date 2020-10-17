import React, { useContext } from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { TFunction } from "next-i18next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";
import { withTranslation } from "../../i18n";

type Props = {
  t: TFunction;
  content: string;
  data: {
    title: string;
    date: Date;
  };
};

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Page: NextPage<Props, any> = ({ t, content, data = {} }) => {
  return (
    <>
      <NextSeo title={data.title || t("common:job")} />
      <div>
        <Nav />
        <div
          style={{
            maxWidth: 1170,
            margin: "0 auto",
          }}
        >
          {content === undefined && (
            <h2 style={{ margin: "20px 0" }}>{t("common:notFound")}</h2>
          )}
          {content !== undefined && (
            <div>
              <h1 style={{ margin: "20px 0" }}>{data.title}</h1>
              <span style={{ margin: "20px 0", display: "block" }}>
                {t("common:updatedAt")}&nbsp;
                {new Date(data.date).toLocaleDateString()}
              </span>
              <article>
                <ReactMarkdown
                  escapeHtml={true}
                  source={content}
                  renderers={{ code: CodeBlock }}
                />
              </article>
            </div>
          )}
        </div>
        <FooterLinks />
        <Footer />
      </div>
    </>
  );
};

Page.getInitialProps = async (context) => {
  // 1. 获取 Slug
  const { slug, category } = context.query;

  // 2. 获取语言（中文兜底）
  const { lng = "zh-CN" } = context.req as any;

  // 3. markdown to json
  try {
    const fileData = await import(`../../_posts/${category}/${lng}/${slug}.md`);
    const { data, content } = matter(fileData.default);
    return {
      namespacesRequired: ["common"],
      data,
      content,
    };
  } catch (error) {
    return {
      namespacesRequired: ["common"],
      content: undefined,
    };
  }
};

// TODO: typing
export default withTranslation("post")(Page as any);
