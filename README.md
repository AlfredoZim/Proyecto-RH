<h1 align="center"> Proyecto - RH 👨‍💻 </h1>
<p>Aquí se encontrarán los estandares creados por el equipo, así como la explicación del uso de las herramientas y componentes utilizados</p>
<br>

<h2>Elementos externos de ayuda</h2>
<h4>Google Fonts</h4>
<ul><li><p>
      Para consular distintos tipos de fuentes da <a href="https://fonts.google.com/">Click</a>.
</p></li></ul>
<h4>Fontawesome</h4>
<ul><li><p>
      Se ha establecido el uso de <b>Fontawesome</b> para el uso de iconos, presiona <a href="https://fontawesome.com/">Click</a> para dirigirte a la página.
      <br>
      Pega la siguiente Key guiandote del ejemplo
</p></li></ul>

```html
<head>
<title>Document</title>
<script src="https://kit.fontawesome.com/9cc9a09708.js" crossorigin="anonymous"></script>
</head>
```

<h2>Componentes</h2>
<h4>Header - Encabezado</h4>
<ul><li><p>
      Para hacer uso del encabezado en tu página es necesario agregar la etiqueta <my-header></my-header> acompañado de los scripts correspondientes de la siguiente manera
</p></li></ul>

```html
<head>
    <title>BankIndra</title>
    <script src="https://kit.fontawesome.com/9cc9a09708.js" crossorigin="anonymous"></script>
    <script src="/components/header/header.js"></script>
</head>
<body>
    <my-header></my-header>

    <script src="/components/header/header-actions.js"></script>
</body>
```
<ul><li><p>
      En este hacemos uso de Fontawesome, por lo que es indispensable, de igual manera se deberá agregar el siguiente @import en la hoja de estilos de tu página actual
</p></li></ul>

```css
@import url("../components/header/header.css");
```
## BankIndra

