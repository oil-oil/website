import { Layout } from 'antd';

const { Sider } = Layout;

function HomeSider () {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        {/* <HomeMenu /> */}
      </Sider>
    )
}

export default HomeSider;
