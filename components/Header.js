import react from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import styles from '../styles/components/header.module.css'

const Header = () => (
    <div className={styles.header}>
        <Row justify="center">
            <Col xs={24} sm={24} md={8} lg={8} xl={4}>
                <span className={styles.title}>CatsAndDogs</span>
            </Col>

            <Col xs={0} sm={0} md={16} lg={16} xl={20}>
                <Menu mode="horizontal" style={{backgroundColor: "#333333",color: "white"}}>
                    <Menu.Item key="home">首页</Menu.Item>
                    <Menu.Item key="adopt">大赏</Menu.Item>
                    <Menu.Item key="about">动态</Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;