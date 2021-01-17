import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../styles/pages/index.module.css'
import detailedStyles from '../styles/pages/detailed.module.css'
import { Row, Col, Input, Affix } from 'antd'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';


export default function Detailed() {
    const { TextArea } = Input;

    const [myList, setList] = useState(
        [
            { title: '让小动物温暖过冬', context: '我们在这个寒冷地季节，救助了0只动物，让他们拥有了温暖的小窝和伙伴，期待您的那份温暖！' },
            { title: '流浪之家成立2天纪念日', context: '我昨天才开始为此站点敲代码，所以今天是流浪之家成立2日纪念日！' },
            { title: '世界动物日：保护野生动物，刻不容缓', context: '“世界动物日” (World Animal Day)，是每年的10月4日 ，源自12世纪意大利天主教修道士圣方济各的倡议。' },
            { title: '推荐一款游戏——动物餐厅', context: '除了摩尔庄园，我最爱的游戏，真的超级可爱！空闲时间都去赚小鱼干去了~' },
        ]
    )




    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={15} lg={15} xl={15}  >
                    <div className={styles.leftDiv}>
                        <div className={detailedStyles.detailedDiv}>

                            <ReactMarkdown
                                escapeHtml={false}
                            >
                                # Hello, *world*
            </ReactMarkdown>

                            <div>
                                <h2>留言</h2>
                                <h4>Your email address will not be published. Required fields are marked *</h4>
                                <h3>Comment</h3>
                                <TextArea rows={4} />
                                <h3>Name*</h3>
                                <Input />
                                <h3>Email*</h3>
                                <Input />
                                <h3>Website</h3>
                                <Input />
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={9} lg={9} xl={9}>
                    <Author />
                    <Advert />
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <MarkNav
                                className="article-menu"
                                ordered={false}
                            />
                        </div>
                    </Affix>
                </Col>
            </Row>

            <div>
                <Footer />
            </div>

        </div>
    )
}
