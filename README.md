# WAJIK GULIR

Library sederhana animasi ketika di scroll

## INSTALLASI

### CDN

```html
<script src="https://unpkg.com/wajik-gulir@1.0.1/dist/wajik-gulir.js"></script>
```

### Package manager

```
npm install wajik-gulir
```

## CONTOH

### Dasar

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Wajik Gulir</title>

    <!-- CDN -->
    <script src="https://unpkg.com/wajik-gulir@1.0.1/dist/wajik-gulir.js"></script>

    <!-- INISIALISASI -->
    <script>
      wajikGulir.cus();
    </script>
  </head>
  <body>
    <!-- GASKEN -->
    <h1 data-wajik="swipe-right">Halo</h1>
  </body>
</html>
```

### React

```jsx
import * as React from "react";
import wajikGulir from "wajik-gulir";

const App = () => {
  React.useEffect(() => {
    // INISIALISASI
    wajikGulir.cus();
  }, []);

  return <h1 data-wajik="swipe-left">Halo nama saya Udin!</h1>;
};

export default App;
```

### Inisialisasi dengan menambahkan nilai bawaan

```ts
// Method cus mempunyai parameter opsional jika tidak diberikan argument maka nilai bawaan menjadi
{
  delay: 0,
  duration: 700,
  await: 0,
  timingFunction: 'ease',
  view: 'middle',
  oneAction: false
}

// Jika ingin mengubah nilai bawaan saat inisialisasi maka tambahkan argument berupa object seperti ini
wajikGulir.cus({
  delay?: number, // milidetik
  duration?: number, // milidetik
  await?: number, // milidetik
  timingFunction?: string, // timing function css
  view?: 'top' | 'middle' | 'bottom',
  oneAction?: boolean
});
```

## Penggunaan

### Basic

Atribut-atribut

- data-wajik="animasi"
- data-wajik-delay="milidetik"
- data-wajik-duration="milidetik"
- data-wajik-timing-function="timing-function-css"
- data-wajik-view="top" / "middle" / "bottom"

Bawaan Pabrik

```html
<h1 data-wajik="swipe-right">Helo Breh</h1>
```

Unit Spesifik

```html
<!-- nilai awal = transform: translateX(30px) -->
<h1 data-wajik="swipe-left-tr(30px)">Helo Cuyy</h1>

<!-- nilai awal = transform: scale(30%) -->
<h1 data-wajik="zoom-in-sc(30%)">Helo Cuyy</h1>

<!-- nilai awal = transform: translateY(10%) scale(40%) -->
<h1 data-wajik="zoom-in-up-tr(10%)-sc(40%)">Helo Cuyy</h1>

<!-- nilai awal = transform: rotate(50deg) -->
<h1 data-wajik="flip-x-rt(50deg)">Helo Cuyy</h1>
```

Nilai Spesifik

```html
<h1 data-wajik="swipe-up" data-wajik-delay="500">Hello World!</h1>
<h1
  data-wajik="swipe-down-tr(100%)"
  data-wajik-delay="400"
  data-wajik-duration="1500"
  data-wajik-timing-function="linear"
  data-wajik-view="bottom"
>
  Helo Cuyy
</h1>
```

### Async await

Atribut-atribut

- data-wajik-async
- data-wajik-await="milidetik"
- data-wajik="animasi"
- data-wajik-delay="milidetik"
- data-wajik-duration="milidetik"
- data-wajik-timing-function="timing-function-css"
- data-wajik-view="top" / "middle" / "bottom"

Bawaan pabrik

```html
<div data-wajik-async>
  <h1 data-wajik="swipe-up" data-wajik-await="200">Hello Boyy!!</h1>
  <h1 data-wajik="swipe-up" data-wajik-await="200">Hello Boyy!!</h1>
  <h1 data-wajik="swipe-up" data-wajik-await="200">Hello Boyy!!</h1>
  <h1 data-wajik="swipe-up" data-wajik-await="200">Hello Boyy!!</h1>
</div>
```

Sebagai grup

```html
<div data-wajik-async data-wajik="zoom-in-up" data-wajik-await="200">
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
</div>
```

Atribut view harus sejajar dengan atribut data-wajik-async

```html
<div
  data-wajik-async
  data-wajik="zoom-in-up"
  data-wajik-await="200"
  data-wajik-view="top"
>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
</div>
```

## Animasi-animasi

| Name           | Units         |
| -------------- | ------------- |
| swipe-right    | -tr()         |
| swipe-left     | -tr()         |
| swipe-up       | -tr()         |
| swipe-down     | -tr()         |
| zoom-in        | -sc()         |
| zoom-in-right  | -sc() / -tr() |
| zoom-in-left   | -sc() / -tr() |
| zoom-in-up     | -sc() / -tr() |
| zoom-in-down   | -sc() / -tr() |
| zoom-out       | -sc()         |
| zoom-out-right | -sc() / -tr() |
| zoom-out-left  | -sc() / -tr() |
| zoom-out-up    | -sc() / -tr() |
| zoom-out-down  | -sc() / -tr() |
| flip-x         | -rt()         |
| flip-y         | -rt()         |
| fade-in        |               |

### Artinya apa bang mesi

- -tr() = transform: translate()
- -sc() = transform: scale()
- -rt() = transform: rotate()
