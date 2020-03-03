import Vue from 'vue'
import Button from '@/button/button'
import ButtonGroup from '@/button/button-group'
import Icon from '@/icon'
import Input from '@/input'
import Row from '@/grid/row'
import Col from '@/grid/col'
import Layout from '@/layout/layout'
import Header from '@/layout/header'
import Sider from '@/layout/sider'
import Content from '@/layout/content'
import Footer from '@/layout/footer'
import Tab from '@/tab/tab'
import TabPane from '@/tab/tab-pane'
import TabItem from '@/tab/tab-item'
import Popover from '@/popover'
import Collapse from '@/collapse/collapse'
import CollapseItem from '@/collapse/collapse-item'
import Cascader from '@/cascader/cascader'
import CascaderItems from '@/cascader/cascader-items'
import Carousel from '@/carousel/carousel'
import CarouselItem from '@/carousel/carousel-item'
import Nav from '@/nav/nav'
import NavItem from '@/nav/nav-item'
import SubNav from '@/nav/sub-nav'
import Pagination from '@/pagination'
import Table from '@/table/table'
import TableColumn from '@/table/table-column'
import Upload from '@/upload'
import Sticky from '@/sticky'

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
  CollapseItem,
  Cascader,
  CascaderItems,
  Carousel,
  CarouselItem,
  Nav,
  NavItem,
  SubNav,
  Pagination,
  Table,
  TableColumn,
  Upload,
  Sticky
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
  CollapseItem,
  Carousel,
  CarouselItem,
  Nav,
  NavItem,
  SubNav,
  Pagination,
  Table,
  TableColumn,
  Upload,
  Sticky
}
