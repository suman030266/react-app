import React,{Component} from 'react';
import './index.less';
import HomeHeader from './HomeHeader';
export default class Home extends Component{
  selectCurrentLesson = (value) =>{
    console.log(value);
  }
  render(){
    return (
      <div>
        home
        <HomeHeader selectCurrentLesson={this.selectCurrentLesson} />
      </div>
    )
  }
}
