import { defineConfig } from 'dumi';
import packageConfig from './package.json';

export default defineConfig({
  title: 'rc-captcha-input',
  favicon:
    'https://avatars.githubusercontent.com/u/19750567?s=400&u=683cd5533b2982689ee0d2a6b6dcf3a42b918db9&v=4',
  logo: 'https://avatars.githubusercontent.com/u/19750567?s=400&u=683cd5533b2982689ee0d2a6b6dcf3a42b918db9&v=4',
  outputPath: 'docs-dist',
  description: 'React 验证码输入框',
  // github page
  base: `/${packageConfig.name}/`,
  publicPath: `/${packageConfig.name}/`,
  hash: true,
  // more config: https://d.umijs.org/config
});
