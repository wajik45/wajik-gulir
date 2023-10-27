# WAJIK GULIR

Library sederhana animasi ketika di scroll

## INSTALLASI

### CDN

Wajib taro di head

```html
<script src="https://unpkg.com/wajik-gulir@1.0.3/dist/wajik-gulir.js"></script>
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
    <script src="https://unpkg.com/wajik-gulir@1.0.3/dist/wajik-gulir.js"></script>

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

Sumbu dan (-) diisi otomatis

| Name           | Units         | Nilai awal bawaan |
| -------------- | ------------- | ----------------- |
| swipe-right    | -tr()         | -tr(50%)          |
| swipe-left     | -tr()         | -tr(50%)          |
| swipe-up       | -tr()         | -tr(50%)          |
| swipe-down     | -tr()         | -tr(50%)          |
| zoom-in        | -sc()         | -sc(50%)          |
| zoom-in-right  | -sc() / -tr() | -sc(50%)-tr(50%)  |
| zoom-in-left   | -sc() / -tr() | -sc(50%)-tr(50%)  |
| zoom-in-up     | -sc() / -tr() | -sc(50%)-tr(50%)  |
| zoom-in-down   | -sc() / -tr() | -sc(50%)-tr(50%)  |
| zoom-out       | -sc()         | -sc(150%)         |
| zoom-out-right | -sc() / -tr() | -sc(150%)-tr(50%) |
| zoom-out-left  | -sc() / -tr() | -sc(150%)-tr(50%) |
| zoom-out-up    | -sc() / -tr() | -sc(150%)-tr(50%) |
| zoom-out-down  | -sc() / -tr() | -sc(150%)-tr(50%) |
| flip-x         | -rt()         | -rt(180deg)       |
| flip-y         | -rt()         | -rt(180deg)       |
| fade-in        |               |

### Artinya apa bang mesi

- -tr() = transform: translate()
- -sc() = transform: scale()
- -rt() = transform: rotate()

## Tips

Selalu perhatikan dimensi dari element karna lumayan berpengaruh
Contoh:

```html
<style>
  h1 {
    border: 1px solid red;
  }

  .oke {
    width: max-content;
  }
</style>

<h1 data-wajik="flip-x">Tes 123</h1>

<!-- SIP -->
<h1 class="oke" data-wajik="flip-x">Tes 123</h1>
```

Pastikan element tidak ada transition, jika ada maka bungkus dengan element lain
Contoh:

```html
<style>
  .box {
    width: 50px;
    height: 50px;
    background-color: lightgreen;
    border: 1px solid #333;
    transition: 0.2s;
  }

  .box:hover {
    background-color: green;
  }

  .wrapper {
    width: max-content;
    background-color: yellow;
  }
</style>

<!-- Jangan Lakukan ini -->
<div data-wajik="swipe-right" class="box"></div>

<!-- Lakukan ini -->
<div class="wrapper" data-wajik="swipe-right">
  <div class="box"></div>
</div>
```
