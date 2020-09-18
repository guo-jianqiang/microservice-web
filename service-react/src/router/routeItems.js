import MyTable from '../view/Table'
import MyModal from '../view/Modal'
import EmptyComponent from '../component/EmptyComponent'
export default [
  {
    path: '/',
    name: '首页',
    exact: true,
    component: EmptyComponent,
    children: [
      {
        path: '/table',
        name: 'table',
        isChild: true,
        component: MyTable,
      },
      {
        path: '/modal',
        name: 'modal',
        isChild: true,
        component: MyModal
      }
    ]
  },
  {
    path: '/test',
    name: '测试',
    exact: true,
    component: EmptyComponent,
    children: [
      {
        path: '/test1',
        name: '测试1',
        isChild: true,
        component: EmptyComponent,
      },
      {
        path: '/test2',
        name: '测试2',
        isChild: true,
        component: EmptyComponent
      }
    ]
  }
]