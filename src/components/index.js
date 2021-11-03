import {Layout,Header,Aside,Main,Footer} from './layout'
import {Col} from "vant/lib/col";
import 'vant/lib/col/index.css'
import {Row} from "vant/lib/row";
import 'vant/lib/row/index.css'

const components = {
  CRow: Row,
  CCol: Col,
  Layout,
  Header,
  Aside,
  Main,
  Footer,
}


const install = (app) => {
  Object.keys(components).forEach(key => {
    // 第三方走这个
    if(key ==="CRow"||key ==="CCol"){
      app.component(key, components[key])
    // 不是第三方的走这个
    }else{
      // 保存为全局组件
      app.component(components[key]['name'],components[key])
    }
  })
}

const Mui = {
  install
}

// 生成 Vue 插件
export default Mui