import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { TFunction } from "next-i18next";
import { Box, useColorModeValue as mode, Stack, Text, Heading, Grid, Badge } from "@chakra-ui/react";
import data from "../../../data/career.json"
import { withTranslation } from "../../../i18n";
import {
  SSection2,
  SSection3,
} from "./style";


type Props = {
  t: TFunction;
  list: LinkItem[];
};

const CareerList: NextPage<Props, any> = ({ t, list = [] }) => {
  return (
    <>
      <NextSeo title={t("common:job")} />
      <div className="wrapper default">
        <div className="elementor-section-wrap">
          <SSection2>
            <Stack
              align="center"
              spacing='8'
              direction="column"
              justify='flex-start'
              mb="20"
            >
              <Box maxW='800'>
                <Text fontWeight="bold" align="center" color={mode('blue.700', 'gray.400')} fontSize="5xl">
                  {t("career-position-title")}
                </Text>
                <Text align="center" mt="5" color={mode('blue.800', 'gray.400')} fontSize='17'>
                  {t("career-position-desc")}
                </Text>
              </Box>
            </Stack>
            <div className="widget-wrap">
              <div id="courses" className="menu-anchor"></div>
            </div>
            <SSection3>
              <Grid maxW="1080px" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap="3" ml="auto" mr="auto">
                {list.map(item => (
                  <Box key={item.description} _hover={{ bg: 'blue.500', transition: 'background-color 0.2s', color: 'white' }} bg={mode('white', 'gray.800')} as='a' href={item.href} target="_blank" width="100%" maxW={{ base: '90vw', md: '90vw', lg: '450px', xl: '540px' }} margin="0 auto" height="104" borderRadius="base" p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="17" textAlign="left">
                      {item.title}
                    </Heading>
                    <Stack mt='5' direction="row" justify="space-between" alignItems="center">
                      <Text isTruncated fontSize="16px">{item.description}</Text>
                      <Badge size='' colorScheme='blue'>{item.type}</Badge>
                    </Stack>
                  </Box>
                ))}
              </Grid>
            </SSection3>
          </SSection2>
        </div>
      </div>
    </>
  );
};

CareerList.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data[lng];

  return {
    namespacesRequired: ["common", "career"],
    list: posts,
  }
};
export default withTranslation("career")(CareerList as any);
