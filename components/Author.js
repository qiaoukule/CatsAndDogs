import {Avatar,Divider} from 'antd'
import styles from '../styles/components/author.module.css'
import { GithubOutlined, QqOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const Author = () => {
    return (
        <div className={styles.authorDiv}>
        <div> <Avatar size={75} src="http://qqiuklele.cn/wp-content/uploads/2020/10/%E5%8D%9A%E5%AE%A2%E5%A4%B4%E5%83%8F.png"  /></div>
        <div className="author-introduction">
            学编程使人快乐！吸猫吸狗使人快乐！音乐也使人快乐！<br />愿你永远快乐！
            <Divider>联系方式</Divider>
            <span><GithubOutlined className={styles.iconSpan}/></span>
            <span><QqOutlined className={styles.iconSpan}/></span>
            <span><PhoneOutlined className={styles.iconSpan}/></span>
            <span><MailOutlined className={styles.iconSpan}/></span>
        </div>
    </div>
    )
}

export default Author;