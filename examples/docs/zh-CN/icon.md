
## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>

```
:::

### 图标集合



<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>




### Ant Design 图标

支持Ant Design 图标 （本想替换原有图标，但是某些组件对原有图标存在依赖，所以先增量更新）


### 方向性图标

<div>
 <IconSet catigory="direction"></IconSet>
</div>


### 提示建议性图标

<div>
 <IconSet catigory="suggestion"></IconSet>
</div>

### 网站通用图标
<div>
 <IconSet catigory="other"></IconSet>
</div>

### 品牌和标识
<div>
 <IconSet catigory="logo"></IconSet>
</div>