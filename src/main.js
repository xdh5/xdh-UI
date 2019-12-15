import Vue from 'vue'
import Button from '@/components/button/button'
import ButtonGroup from '@/components/button/button-group'
import Icon from '@/components/icon'
import Input from '@/components/input'
import Row from '@/components/grid/row'
import Col from '@/components/grid/col'
import Layout from '@/components/layout/layout'
import Header from '@/components/layout/header'
import Sider from '@/components/layout/sider'
import Content from '@/components/layout/content'
import Footer from '@/components/layout/footer'
import Tab from '@/components/tab/tab'
import TabPane from '@/components/tab/tab-pane'
import TabItem from '@/components/tab/tab-item'
import Popover from '@/components/popover'
import Collapse from '@/components/collapse/collapse'
import CollapseItem from '@/components/collapse/collapse-item'

const components = [
  Button,
  ButtonGroup,
  Icon,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Tab,
  TabPane,
  TabItem,
  Popover,
  Collapse,
  CollapseItem
]

function bindComponents (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

function install (Vue) {
  bindComponents(Vue)
}

export default {
  install,
  Button,
  ButtonGroup,
  Icon,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Tab,
  TabPane,
  TabItem,
  Popover,
  Collapse,
  CollapseItem
}
