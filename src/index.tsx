import React, { useState, useRef, useEffect, useMemo } from 'react';

import './index.less';

// 默认位数
const DEFAULT_LENGTH = 4;

type CaptchaTheme = 'line' | 'box';

interface ICaptchaProps {
  /**
   * @description       输入框内容
   * @default           ''
   */
  value?: string;
  /**
   * @description       输入框内容变化时的回调
   */
  onChange?: (value: string) => void;
  /**
   * @description       验证码长度
   * @default           4
   */
  length?: number;
  /**
   * @description       风格样式
   * @default           'line'
   */
  theme?: CaptchaTheme;
  /**
   * @description       是否默认 focus
   * @default           false
   */
  autoFocus?: boolean;
}

/** 验证码输入框 */
const Captcha: React.FC<ICaptchaProps> = (props) => {
  const {
    value = '',
    onChange,
    length = DEFAULT_LENGTH,
    autoFocus = false,
    theme = 'line',
  } = props;
  // 组件内部维护的输入框输入值
  const [inputValue, setInputValue] = useState('');
  // 验证码数组
  const codeArray = useMemo(() => {
    return new Array(length).fill('').map((item, index) => inputValue[index] || '');
  }, [inputValue, length]);
  // 是否获取焦点，仅在 focus 时展示 Input 闪烁条
  const [isFocused, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 仅支持数字，后续可拓展
    const tempValue = value.replace(/[^0-9]/g, '').slice(0, length);
    setInputValue(tempValue);
  }, [value, length]);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
      setFocus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 输入框change
  const handleInputCodeChange = (e: any) => {
    const eValue = e.target.value;
    const tempValue = eValue.replace(/[^0-9]/g, '').slice(0, length);

    setInputValue(tempValue);
    onChange?.(tempValue);
  };

  const handleCodeBoxClick = () => {
    inputRef.current?.focus();
    setFocus(true);
  };

  // 简单根据 length 计算下外边距
  const gutterStyle = useMemo(() => {
    const itemGutter = 48 / length + 'px';
    return { marginLeft: itemGutter, marginRight: itemGutter };
  }, [length]);

  return (
    <div className={`captcha captcha-theme-${theme}`}>
      {/* 展示部分 */}
      <div className="code-box" style={gutterStyle} onClick={handleCodeBoxClick}>
        {codeArray.map((item, index, array) => {
          const prevItemValue = index === 0 ? '-1' : array[index - 1]; // 第一项视为前一项有值
          const isItemActive = isFocused && !!prevItemValue && !item; // Input 闪烁条展示在前一项有值且当前项为空的位置
          return (
            <div
              key={index}
              className={`item-content ${isItemActive ? 'item-content-active' : ''}`}
              style={gutterStyle}
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* 输入部分 */}
      <div className="input-box-wrap">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputCodeChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          pattern="[0-9]*"
          autoComplete="one-time-code"
          inputMode="numeric"
          maxLength={length}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export { ICaptchaProps, CaptchaTheme };
export default Captcha;
