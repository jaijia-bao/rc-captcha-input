## Captcha-H5

### 基础使用

此处仅为 H5 环境的样式样式，使用与 Captcha 一致

### Demo

```tsx
import React, { useState } from 'react';
import Captcha from 'rc-captcha-input';

export default () => {
  const [code, setCode] = useState('12');
  return (
    <>
      <h6>Line 风格</h6>
      <Captcha autoFocus value={code} onChange={setCode} length={6} />

      <h6>Box 风格</h6>
      <Captcha theme="box" />
    </>
  );
};
```
