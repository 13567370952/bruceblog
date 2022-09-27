# HTML & CSS

## CSS 隐藏元素 :see_no_evil:

#### 1、设置 `display: none`

- 隐藏元素不再占有原来位置，因此会导致页面布局改变，引起重排
- 子元素无法通过设置 `display: block` 实现反隐藏
- 隐藏元素绑定的事件不会触发

#### 2、设置 `visibility: hidden`

- 隐藏元素占有原来位置，实现的是视觉上的隐藏
- 子元素可通过设置 `visibility: visible` 显示自己
- 隐藏元素绑定的事件不会触发，如点击事件

#### 3、设置 `opacity: 0`

- 通过设置透明度为 0 来隐藏元素，因此占有原来位置
- 子元素无法通过设置 `opacity: 1` 显示自己
- `opacity: 0` 的元素仍然能触发已绑定的事件

#### 4、利用绝对定位 `position: absolute`

- 将 `top` 和 `left` 设置为足够大的负数，使其离开屏幕，即可实现隐藏效果
- 只要我跑得够远，你就看不到我 :stuck_out_tongue_winking_eye:
- 绝对定位的元素是脱标的，不会影响页面布局

#### 相关链接：

[css 隐藏元素的几种方法是什么？](https://www.html.cn/qa/css3/14720.html)

## CSS 定位

### 静态定位 static

默认定位，相当于没有定位。

### 相对定位 relative

- 相对于元素原本的位置进行偏移
- 元素会浮起来，脱离标准流，但仍然占据原本的位置

### 绝对定位 absolute

- 相对于最近的具有定位属性的父元素进行偏移，若没有，则相对于 `body` 进行偏移
- 元素脱离标准流，且不占据原本的位置
- 通常是“子绝父相”

### 固定定位 fixed

- 相对于浏览器窗口进行偏移
- 不会随着浏览器窗口的滚动而滚动
- 可用于创建固定头部、底部

```css
// 创建全屏遮罩
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
}
```

#### 相关链接

[CSS 的几种定位详解](https://blog.csdn.net/weixin_38055381/article/details/81558288)

## CSS `:global`

在 CSS 局部作用域覆盖默认样式。

如覆盖 Ant Design 组件的默认样式。

```css
// index.module.scss

.father {
  color: green;
}

:global {
  // antd 的默认样式被覆盖
  .ant-form-head {
    color: red;
  }
}
```

```jsx
import { Form } from 'antd';
import styles from './index.module.scss';

export default const Hello = () => {
  return (
    <Form>
      <div className={styles.father}></div>
    </Form>
  )
}
```

#### 相关链接

[CSS 中的 global](https://blog.csdn.net/qq_36209248/article/details/90603474)
