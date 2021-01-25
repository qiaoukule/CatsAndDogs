import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../styles/pages/index.module.css'
import { Row, Col, List, Icon } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'



export default function Home(list) {

  const [myList, setList] = useState(
   /* [
      { title: '让小动物温暖过冬', context: '我们在这个寒冷地季节，救助了0只动物，让他们拥有了温暖的小窝和伙伴，期待您的那份温暖！' },
      { title: '流浪之家成立2天纪念日', context: '我昨天才开始为此站点敲代码，所以今天是流浪之家成立2日纪念日！' },
      { title: '世界动物日：保护野生动物，刻不容缓', context: '“世界动物日” (World Animal Day)，是每年的10月4日 ，源自12世纪意大利天主教修道士圣方济各的倡议。' },
      { title: '推荐一款游戏——动物餐厅', context: '除了摩尔庄园，我最爱的游戏，真的超级可爱！空闲时间都去赚小鱼干去了~' },
    ]*/
    list.data
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
            <List
              header={<div>最新动态</div>}
              itemLayout="vertical"
              dataSource={myList}
              renderItem={item => (
                <List.Item>
                  <div className={styles.ListDiv}>
                  <div className={styles.listTitle}>
                    <Link href={{pathname: '/detailed',query:{id:item.id}}}>
                      <a> {item.title} </a>
                    </Link>
                  </div>
                  <div className={styles.listIcon}>
                    <span><Icon type="calendar" /> {item.addTime}</span>
                    <span><Icon type="folder" /> 不定期更新</span>
                    <span><Icon type="fire" /> {item.view_count}</span>
                  </div>
                  <div className={styles.listContext}>{item.introduce}</div>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={9} lg={9} xl={9}>
          <Author/>
          <Advert/>
      </Col>
      </Row>

      <div>
          <Footer/>
      </div>

    </div>
  )
}

//从接口获取数据,这个方法获取的数据可以直接用参数传进去用
Home.getInitialProps = async ()=> {
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res)=>{
        resolve(res.data)
      }
    )
  })
  return await promise
}