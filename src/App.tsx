import './style/index.less';

import Button from './components/button/Button';

function App() {
  return <div>
    <Button>按钮</Button>
    <Button type="primary" disabled>主要的按钮</Button>
    <Button type="danger">危险</Button>
    <Button disabled>不可用</Button>
    <Button size="large" type="primary">很大的按钮</Button>
    <Button size="small" type="danger" disabled>很小的按钮</Button>
    <Button type="link">小</Button>
    <Button type="link" disabled>小</Button>
  </div>
}

export default App
