<<<<<<< HEAD
<script>
  var iconList = require('examples/icon.json');
  import IconSet from 'examples/components/IconSet.vue';
  export default {
    components: {
      IconSet
    },
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>

<style>
  .demo-icon .source > i {
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }

  .demo-icon .source > button {
    margin: 0 20px;
  }

  .page-component .content  ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;
    
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    
    @utils-vertical-center;
    
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
    }
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

=======
>>>>>>> 16a6059ed893c01244c7b59f1e4e9d398c2df3d5
## Icon

Element proporciona un conjunto de iconos propios.

### Uso básico

Simplemente asigna el nombre de la clase a `el-icon-iconName`.

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">Search</el-button>

```
:::

### Iconos

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>


### Ant Design Iconos


soporte Ant Design icono


### Direccionales Iconos

<div>
 <IconSet catigory="direction"></IconSet>
</div>


### Sugeridos Iconos

<div>
 <IconSet catigory="suggestion"></IconSet>
</div>

### Aplicaciones Iconos
<div>
 <IconSet catigory="other"></IconSet>
</div>

### Marca y Logos
<div>
 <IconSet catigory="logo"></IconSet>
</div>
