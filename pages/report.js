import Head from 'next/head'
import Header from '../components/Header'
import {Row, Col} from 'antd'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={10}  >
        左侧
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={3}>
        右侧
      </Col>
    </Row>

    </div>
  )
}
