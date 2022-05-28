import { defineConfig } from 'dumi';
import packageConfig from './package.json';

export default defineConfig({
  title: 'rc-captcha-input',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs',
  description: 'React 验证码输入框',
  // github page
  base: `/${packageConfig.name}/`,
  publicPath: `/${packageConfig.name}/`,
  resolve: {
    // 配置 dumi 嗅探的文档目录
    includes: ['mds'],
  },
  // more config: https://d.umijs.org/config
});
