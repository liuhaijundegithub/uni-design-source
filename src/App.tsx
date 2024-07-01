import './style/index.less';
import { useEffect, useState } from 'react';

import Button from './components/button/Button';
import IconFont from './components/iconfont/IconFont';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return <div>
    <h1>按钮</h1>
    <Button>按钮</Button>
    <Button type="primary" className="111">主要的按钮</Button>
    <Button type="danger">危险</Button>
    <Button disabled>不可用</Button>
    <Button size="large" type="primary" loading>很大的按钮</Button>
    <Button size="small" type="danger" disabled>很小的按钮</Button>
    <Button type="link" loading>小</Button>
    <Button type="link" disabled>小</Button>
    <Button type="primary" loading={loading}>确定</Button>
    <Button type="primary" loading size="small">确定</Button>
    <h1>icon font</h1>
    <IconFont type="loading" className="xixi" onClick={() => alert(1)} />
  </div>
}

export default App
