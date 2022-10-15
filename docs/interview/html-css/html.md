# HTML

## `noscript` 标签

`noscript` 标签是一个古老的标签，当初被引入的目的是帮助老旧的浏览器平滑升级更替，早期的浏览器不支持 JavaScript，因此使用 `noscript` 标签显示替代的内容

`noscript` 标签在下面两种情况下起作用：

- 浏览器不支持 JavaScript
- 浏览器支持 JavaScript，但被禁用

```html
<noscript> 老铁，这个页面需要 JavaScript 支持啊 </noscript>
```

网站不能强制开启 JavaScript，但增加提示还是比较用户友好的。
