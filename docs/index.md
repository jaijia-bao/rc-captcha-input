---
mobile: false
---

## Captcha

### 基础使用

1. 安装依赖

```bash
yarn add rc-captcha-input
# npm i rc-captcha-input
```

2. 使用

```js
import Captcha from 'rc-captcha-input';

<Captcha />;
```

### Demo

```tsx
import React, { useState } from 'react';
import Captcha from 'rc-captcha-input';

export default () => {
  const [code, setCode] = useState('12');
  return (
    <>
      <h3>Line 风格</h3>
      <Captcha autoFocus value={code} onChange={setCode} />

      <h3>Box 风格</h3>
      <Captcha theme="box" length={6} />
    </>
  );
};
```

<API src="../src/index.tsx"></API>

### TypeScript 定义

```ts
type CaptchaTheme = 'line' | 'box';

interface ICaptchaProps {
  value?: string;
  onChange?: (value: string) => void;
  length?: number;
  theme?: CaptchaTheme;
  autoFocus?: boolean;
}
```
