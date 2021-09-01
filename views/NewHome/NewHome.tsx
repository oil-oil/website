import React, { useState } from "react";
import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'

import { ContentAll, Navbar, Navbarsearch, SelectMenu, Content, SiderLeft, Contentitem, Title, Contentcard, Cardstyle,Footer } from "./style";
import Card from "./Card"

function NewHome() {
    const [showCard, setCount] = useState(false);

    const onhover = () => {
        setCount(
            true
        )
        console.log('移入事件', showCard)
    }
    const mouseOut = () => {
        // const  showCard = false;
        setCount(
            false
        )
        console.log('移出事件', showCard)
    }


    return (
        <>
            <ContentAll>


                <Navbar>
                    <div><img
                        style={{ width: 100, position: 'relative', marginTop: 25, marginLeft: 25 }}
                        src="https://static.apiseven.com/202108/api7-logo.png"
                        alt=""
                    /></div>
                    <div >
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>why api7</a></SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>solution</a></SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>open-source</a></SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>docs-resource</a></SelectMenu>
                    </div>
                    <div>
                        <a style={{ position: 'relative', marginTop: 30 }}>Pricing</a>
                        <button style={{ position: 'relative', marginLeft: 25 }}>github</button>
                        <button>39,233</button>
                    </div>
                    <div><button>get started</button></div>
                </Navbar>


                <Card showCard={showCard} />
                <Navbarsearch>
                    <div>
                        Resource Center
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </Navbarsearch>
                <Content>
                    <SiderLeft>
                    </SiderLeft>
                    <Contentitem>
                        <Title>
                            <div>RESOURCE CENTER</div>
                            <div>Strapi Resources</div>
                            <div>Everything  you need to optimizethe wayyouworkwith</div>
                        </Title>
                        <Cardstyle>
                            <Contentcard>text1</Contentcard>
                            <Contentcard>text1</Contentcard>
                            <Contentcard>text1</Contentcard>
                        </Cardstyle>
                    </Contentitem>
                </Content>
                <Footer>footer</Footer>
            </ContentAll>
        </>
    )
}

export default NewHome;
