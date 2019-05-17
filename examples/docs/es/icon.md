
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
