import React from 'react';
import { Menu, Button, Popover,Card} from 'antd';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import "./index.ts"
const { SubMenu } = Menu;
export default class HomeMenu extends React.Component {


  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  handleHoverChange = visible => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  };

  handleClickChange = visible => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  };

  render() {
    const hoverContent = <div>
      <Card style={{ width: 1200,height:300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
    </div>;
    return (
      <Popover 
       
        content={hoverContent}
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <div>
        <a style={{width:100,color:'#1d1b84',margin:15,border:'red'}}>---标题---</a>
       <DownOutlined className="icon-style" style={{width:5,height:5}}/>
        </div>
    
      </Popover>
    );
  }
}
