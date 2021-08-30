import { Input, Table, Button } from 'antd';
import { UserOutlined, DownOutlined, MenuOutlined, SettingOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import "./index.ts";
import { Row, Col } from 'antd';
import HomeMenu from './components/HomeMenu/HomeMenu';
import Homemenustyle  from './index' 


function Home() {

  interface User {
    key: number;
    name: string;
  }



  const columns: ColumnsType<User> = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
  ];

  const data: User[] = [
    {
      key: 0,
      name: 'Jack',
    },
    {
      key: 0,
      name: 'Jack',
    },
    {
      key: 0,
      name: 'Jack',
    },
    {
      key: 0,
      name: 'Jack',
    },
  ];


  return (

    <>
      <Row style={{ margin: 15 }}>
        <Col xs={12} sm={12} md={24} lg={2} xl={2} offset={2}>图片</Col>
        <Col xs={0} sm={0} md={0} lg={18} xl={18} offset={2}>
          <Homemenustyle>
            <HomeMenu />
            <HomeMenu />
            <HomeMenu />
            <HomeMenu />
            <a>超链接</a>
            <Button>按钮一</Button>
            <Button>按钮二</Button>
            <Button>按钮三</Button>
          </Homemenustyle>
        </Col>
      </Row>

      {/* 搜索栏 */}
      <Row style={{ margin: 50, border: "grey" }} >
        <Col xs={0} sm={0} md={0} lg={4} xl={4} offset={2}>
          图片
        </Col>
        <Col xs={20} sm={20} md={20} lg={14} xl={14} style={{ position: "sticky", textAlign: "center" }} offset={2}>
          <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
        </Col>
      </Row>

      
      {/* 内容 */}
      <Row>
        <Col xs={0} sm={0} md={2} lg={2} xl={2} offset={2}>
          <Table<User> pagination={false} columns={columns} dataSource={data} />
        </Col>
        <Col xs={20} sm={20} md={16} lg={16} xl={16} offset={2} style={{height:600}}>
          内容
        </Col>
      </Row>
      {/* 页尾 */}
      <Row>
        <Col xs={20} sm={20} md={20} lg={20} xl={20} offset={2}>
          页尾
        </Col>
      </Row>

    </>
  )


}



export default Home
