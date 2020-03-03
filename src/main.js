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
import Cascader from '@/components/cascader/cascader-item'
import CascaderItems from '@/components/cascader/cascader-items'
import Carousel from '@/components/carousel/carousel'
import CarouselItem from '@/components/carousel/carousel-item'
import Nav from '@/components/nav/nav'
import NavItem from '@/components/nav/nav-item'
import SubNav from '@/components/nav/sub-nav'
import Pagination from '@/components/pagination'
import Table from '@/components/table/table'
import TableColumn from '@/components/table/table-column'
import Upload from '@/components/upload'
import Sticky from '@/components/sticky'

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
