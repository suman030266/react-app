import React,{Component} from 'react';
import logo from '../../common/images/logo.jpg';
export default class HomeHeader extends Component{
  constructor(){
    super();
    this.state = {
      isShow: false
    };
  }
  changeShow=()=>{
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render(){
    return (
      <div className="home-header">
        <div className="header-logo">
          <img className="logo" src={logo} alt="logo" />
          <div className="" onClick={this.changeShow}>
            {this.state.isShow ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-liebiao"></i>}
          </div>
        </div>
        <ul className="header-menu">
          <li>全部课程</li>
          <li>react</li>
          <li>vue</li>
        </ul>
      </div>
    )
  }
}
