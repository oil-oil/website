import React, { useState } from "react";
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Button, InputGroup, Input, Stack, Thead, Table, Tr, Th, Text, Tbody, Td, } from '@chakra-ui/react'
import { InputLeftElement } from "@chakra-ui/react";
import { SContentAll, SNavbar, SNavbarsearch, SelectMenu, SContent, SiderLeft, SContentitem, STitle, SContentcard, SCardstyle, SFooter, SNavbarcenter, SNavbarimg, SNavbarbutton, SNavbarstart, Sidertitle, Siderright, SContentlist } from "./style";



const NewHome = ()=> {
    const [showCard, setShowCard] = useState(false);

    const onhover = () => {
        setShowCard(
            true
        )
        console.log('移入事件', showCard)
    }
    const mouseOut = () => {
        setShowCard(
            false
        )
        console.log('移出事件', showCard)
    }
    return (
        <>
            <SContentAll>
                <SNavbar>
                    <SNavbarimg><img
                        style={{ width: 132, position: 'relative', marginTop: 25, marginLeft: 25 }}
                        src="https://static.apiseven.com/202108/api7-logo.png"
                        alt=""
                    /></SNavbarimg>
                    <SNavbarcenter>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>why api7</a><ChevronDownIcon />
                        </SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>solution</a><ChevronDownIcon /></SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut}><a>open-source</a><ChevronDownIcon /></SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut} style={{ marginLeft: -5 }}><a>docs-resource</a><ChevronDownIcon /></SelectMenu>
                        <SelectMenu onMouseOver={onhover} onMouseOut={mouseOut} style={{ marginLeft: 25 }}><a>Pricing</a></SelectMenu>
                    </SNavbarcenter>
                    <SNavbarbutton>
                        <button style={{ position: 'relative', marginLeft: 30 }}><img src="https://ghbtns.com/github-btn.html?user=strapi&repo=strapi&type=star&count=true" /></button>
                        <button style={{ position: 'relative', marginLeft: 10 }}>39,233</button>
                    </SNavbarbutton>
                    <SNavbarstart><Button width={150} marginRight={200} style={{ backgroundColor: '#8c4bff', border: 'none', color: 'white' }} >get started</Button></SNavbarstart>
                </SNavbar>
                <SNavbarsearch>
                    <div style={{ color: '#1d1b84' }}>
                        Resource Center
                    </div>
                    <div>
                        <Stack spacing={12} style={{ width: 1000, position: "relative", marginTop: -35 }}>
                            <InputGroup style={{ position: 'absolute', width: 850, marginLeft: 270 }}>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<SearchIcon color="#32324d" style={{ position: "relative", marginLeft: 5, marginTop: 5, marginRight: 10 }} />}
                                />
                                <Input type="tel" placeholder="Search for a resource" style={{ position: 'relative', marginLeft: -90 }} size="lg" />
                            </InputGroup>
                        </Stack>

                    </div>
                </SNavbarsearch>
                <SContent>
                    <SiderLeft>
                        <div>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Docs_eaeebb385f_0f9f202b8f.svg" alt="" />
                                Developer Docs
                            </a>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Guide_09ef691265_c697e5f9a8.svg" alt="" />
                                User Guide
                            </a>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Academy_1e45bae812_29fd831fdd.svg" alt="" />
                                Strapi Academy
                            </a>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Blog_c574ff6bf6_317c7fba9b.svg" alt="" />
                                Blog
                            </a>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Starters_4b89901bbb_273b0aff32.svg" alt="" />
                                Starters
                            </a>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Tutorials_8b77c0edf7_9a742e9db8.svg" alt="" />
                                Tutorials
                            </a>
                            <a>
                                <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Recipes_b51019258a_2bb0e825c8.svg" alt="" />
                                Video Library
                            </a>

                        </div>
                        <div>
                            <Sidertitle>
                                <h2 style={{ color: "#8c4bff", fontWeight: 600 }}>
                                    Developer<br />
                                    Documentation</h2>
                                <h4>Getting Started</h4>
                                <h4>Setup & Deployment</h4>
                                <h4>Development</h4>
                                <h4>Update & Migration</h4>
                                <h4>Developer Resources</h4>
                                <h4>Guides</h4>
                            </Sidertitle>
                        </div>
                        <div>
                            <Sidertitle>
                                <h2 style={{ color: "#8c4bff", fontWeight: 600 }}>
                                    Developer<br />
                                    Documentation</h2>
                                <h4>Getting Started</h4>
                                <h4>Setup & Deployment</h4>
                                <h4>Development</h4>
                                <h4>Update & Migration</h4>
                                <h4>Developer Resources</h4>
                                <h4>Guides</h4>
                            </Sidertitle>
                        </div>
                        <div>
                            <Sidertitle>
                                <h2 style={{ color: "#8c4bff", fontWeight: 600 }}>
                                    Developer<br />
                                    Documentation</h2>
                                <h4>Getting Started</h4>
                                <h4>Setup & Deployment</h4>
                                <h4>Development</h4>
                                <h4>Update & Migration</h4>
                                <h4>Developer Resources</h4>
                                <h4>Guides</h4>
                            </Sidertitle>
                        </div>
                    </SiderLeft>
                    <Siderright style={{ display: 'flex', flexDirection: 'column' }}>
                        <SContentitem>
                            <STitle>
                                <div>RESOURCE CENTER</div>
                                <div>Strapi Resources</div>
                                <div>Everything  you need to optimize the way you work with</div>
                            </STitle>
                            <SCardstyle>
                                <SContentcard style={{ background: '#a06aff', }}>
                                    <div style={{
                                        borderRadius: 40,
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#773ae7',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/book_icon_80d2c538d0_7c87cfcff3.svg" alt="" style={{ width: 35, height: 35, }} />
                                    </div>
                                    <h1 style={{ color: "white", fontWeight: 700, fontSize: 20, marginTop: 15 }}>Developer<br />
                                        Documentation
                                    </h1>
                                    <h3 style={{ fontSize: 16, marginTop: 15, marginBottom: 15 }}>All you need to get Strapi up-and-running.</h3>
                                    <Button style={{ backgroundColor: "#773ae7", color: "white", marginTop: 30, height: 50 }}>Documentation</Button>
                                </SContentcard>
                                <SContentcard style={{ background: '#ef773c', }}>
                                    <div style={{
                                        borderRadius: 40,
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#cc5d34',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/user_guide_icon_8cbe401776_121b8a6c83.svg" alt="" style={{ width: 35, height: 35, }} />
                                    </div>
                                    <h1 style={{ color: "white", fontWeight: 700, fontSize: 20, marginTop: 15 }}>Developer<br />
                                        Documentation
                                    </h1>
                                    <h3 style={{ fontSize: 16, marginTop: 15, marginBottom: 15 }}>All you need to get Strapi up-and-running.</h3>
                                    <Button style={{ backgroundColor: "#cc5d34", color: "white", marginTop: 30, height: 50 }}>Documentation</Button>
                                </SContentcard>
                                <SContentcard style={{ background: '#005abf', }}>
                                    <div style={{
                                        borderRadius: 40,
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#01489e',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/education_icon_18fb97653f_723577953c.svg" alt="" style={{ width: 35, height: 35, }} />
                                    </div>
                                    <h1 style={{ color: "white", fontWeight: 700, fontSize: 20, marginTop: 15 }}>Developer<br />
                                        Documentation
                                    </h1>
                                    <h3 style={{ fontSize: 16, marginTop: 15, marginBottom: 15 }}>All you need to get Strapi up-and-running.</h3>
                                    <Button style={{ backgroundColor: "#01489e", color: "white", marginTop: 30, height: 50 }}>Documentation</Button>
                                </SContentcard>
                            </SCardstyle>
                        </SContentitem>
                        <SContentitem style={{ marginTop: 70 }}>
                            <STitle style={{ marginBottom: 55 }}>
                                <div></div>
                                <div>Learn with Strapi</div>
                                <div>Explore our library of educational SContent to learn how to set up and manage your Strapi project.</div>
                            </STitle>
                            <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 72,
                                            height: 72,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 5
                                        }}
                                    ><img style={{ position: 'absolute', left: 20 }}
                                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/starter_icon_0df41f5df5_1c2d337459.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 72,
                                            height: 72,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 5
                                        }}
                                    ><img style={{ position: 'absolute', left: 20 }}
                                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/tutorial_icon_2f939092a4_8d07fa044a.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 72,
                                            height: 72,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 5
                                        }}
                                    ><img style={{ position: 'absolute', left: 20 }}
                                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/education_color_icon_df7a108290_6a4ece3811.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>
                                </div>
                            </SCardstyle>
                            <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 72,
                                            height: 72,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 5
                                        }}
                                    ><img style={{ position: 'absolute', left: 20 }}
                                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/recipe_starter_36c43126ce_065f8d503b.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ flex: 1 }}>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 72,
                                            height: 72,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 5
                                        }}
                                    ><img style={{ position: 'absolute', left: 20 }}
                                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/webinar_icon_29af7d8390_3d20ff5c55.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ flex: 1 }}>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 72,
                                            height: 72,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 5
                                        }}
                                    ><img style={{ position: 'absolute', left: 20 }}
                                        src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Vector_3_1748490973.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>
                            </SCardstyle>
                        </SContentitem>
                        <SContentitem>
                            <STitle style={{ marginBottom: 40 }}>
                                <div></div>
                                <div>Changelog</div>
                                <div>Find out about the Strapi product updates, new features and general improvements.</div>
                            </STitle>
                            <SCardstyle>
                                <Button style={{ backgroundColor: '#8c4bff', width: 250, height: 55, color: 'white' }}>See the changelogs</Button>
                            </SCardstyle>
                            <SCardstyle>
                                <Table size="xl">
                                    <Tbody>
                                        <Tr>
                                            <Td>

                                            </Td>
                                            <Td>Aug 4, 2021
                                                <br />
                                                Improvements and fixes - Strapi v3.6.6 & v3.6.7</Td>
                                        </Tr>
                                        <Tr>
                                            <Td></Td>

                                            <Td>Jun 23, 2021
                                                <br />
                                                Improvements and fixes - Strapi    </Td>
                                            <Td>v3.6.5</Td>

                                        </Tr>
                                        <Tr>
                                            <Td></Td>

                                            <Td>Apr 22, 2021
                                                <br />
                                                🌍 Internationalization - Strapi v3.6</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </SCardstyle>
                        </SContentitem>
                        <SContentitem>
                            <STitle style={{ marginBottom: 40 }}>
                                <div></div>
                                <div>Connect with the community</div>
                                <div>Join the conversation with users from all over the world.
                                </div>
                            </STitle>


                            <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 420,
                                            height: 80,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 15,
                                            marginRight: 10,
                                        }}
                                    >
                                        <img style={{ position: 'absolute', left: 20 }}
                                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/iconfinder_discord_3069758_1_1_18c962b4c9_b698a303d6.svg" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 420,
                                            height: 80,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 15,
                                            marginRight: 10,
                                        }}
                                    >
                                        <img style={{ position: 'absolute', left: 20 }}
                                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/forum_14cfcb6fc1_3d87b46985.png" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>

                            </SCardstyle>
                            <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 420,
                                            height: 80,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 15,
                                            marginRight: 10,
                                            marginTop: 10,

                                        }}
                                    >
                                        <img style={{ position: 'absolute', left: 20 }}
                                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/github_a0fb0e8472_2f1a9ca3d9.png" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>

                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 420,
                                            height: 80,
                                            position: 'relative',
                                            backgroundColor: '#f6fafe',
                                            borderRadius: 15,
                                            marginRight: 10,
                                            marginTop: 10,
                                        }}
                                    >
                                        <img style={{ position: 'absolute', left: 20 }}
                                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/twitter_4117b0ebb6_8167d31c10.png" alt="" />

                                        <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", }}>
                                            <Text>Starts</Text>
                                            <div>Get started in no time</div>
                                        </div>
                                    </div>

                                </div>

                            </SCardstyle>
                            <SCardstyle>
                                <SContentcard style={{ background: '#a06aff', }}>
                                    <div style={{
                                        borderRadius: 40,
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#773ae7',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 140
                                    }}>
                                        <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/book_icon_80d2c538d0_7c87cfcff3.svg" alt="" style={{ width: 35, height: 35, }} />
                                    </div>

                                    <Button style={{ backgroundColor: "#773ae7", color: "white", marginTop: 30, height: 50 }}>Documentation</Button>
                                </SContentcard>
                                <SContentcard style={{ background: '#a06aff', }}>
                                    <div style={{
                                        borderRadius: 40,
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#773ae7',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 140

                                    }}>
                                        <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Subtract_b17455b597_062be5a73e.svg" alt="" style={{ width: 35, height: 35, }} />
                                    </div>
                                    <Button style={{ backgroundColor: "#773ae7", color: "white", marginTop: 30, height: 50 }}>Documentation</Button>
                                </SContentcard>
                            </SCardstyle>
                        </SContentitem>
                        <SContentitem style={{ textAlign: "center", marginTop: 50 }}>
                            <SContentlist>
                                <div style={{
                                    width:320,
                                    position:"relative",
                                    marginLeft:270,
                                }}>
                                    <h1 style={{marginTop:60}}>Join our Newsletter</h1>
                                    <h3 style={{ marginTop: 10 ,marginBottom:20}}>Get all the latest Strapi updates, news and events.</h3>
                                    <Input pleaseholder="Email" variant="outline" sytle={{ marginTop: 40, height: 40, width: 90, positon: "relative" }}></Input>
                                    <Button backgroundColor="#8c4bff" color="white" width="320px" top="10px">Subscribe</Button>
                                    <h3 style={{marginTop:20,width:320,marginBottom:50,fontSize:13}}>
                                        By submitting this form you consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email to third parties.
                                    </h3>
                                </div>
                            </SContentlist>

                        </SContentitem>
                    </Siderright>
                </SContent>
                <div>
                    <h1>Unleash SContent.</h1>
                    <Button>Starts</Button>
                    <Button>get starts</Button>
                </div>
                <SFooter>SFooter</SFooter>
            </SContentAll>
        </>
    )
}

export default NewHome;
