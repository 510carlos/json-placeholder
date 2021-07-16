import { Menu, Breadcrumb } from 'antd';
import { Content, Layout, Header, Footer } from '../components';
import 'antd/dist/antd.css';
import Feed from '../feed';

const Template = () => (
  <>
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key={1}>Home</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Feed</Breadcrumb.Item>
          <Breadcrumb.Item>Recent</Breadcrumb.Item>
        </Breadcrumb>
        <Feed />
      </Content>
      <Footer>Carlos Mendoza</Footer>
    </Layout>
  </>
);

export default Template;
