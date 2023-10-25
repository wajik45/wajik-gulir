# WAJIK GULIR

Library sederhana animasi ketika di scroll

## INSTALLASI

### CDN

```html
<script src="https://ckck.com"></script>
```

### Package manager

```
npm install wajik-gulir
```

## CONTOH

### Dasar

```html
<body>
  <h1 wajik="nama-animasi">Halo</h1>

  <script src="https://dawdw.dwad"></script>
  <script>
    // INISIALISASI
    wajikGulir.cus();
  </script>
</body>
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

  return <h1 wajik="nama-animasi">Halo nama saya Udin!</h1>;
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
  duration?: 700, // milidetik
  await?: 0, // milidetik
  timingFunction?: 'ease', // timing function css
  view?: 'top' | 'middle' | 'bottom',
  oneAction?: boolean
});
```

## Penggunaan

### Basic

Atribut-atribut

- wajik="animasi"
- wajik-delay="milidetik"
- wajik-duration="milidetik"
- wajik-timing-function="timing-function-css"
- view="top" / "middle" / "bottom"

Bawaan Pabrik

```html
<h1 wajik="swipe-right">Helo Breh</h1>
```

Unit Spesifik

```html
<!-- nilai awal = transform: translateX(30px) -->
<h1 wajik="swipe-left-tr(30px)">Helo Cuyy</h1>

<!-- nilai awal = transform: scale(30%) -->
<h1 wajik="zoom-in-sc(30%)">Helo Cuyy</h1>

<!-- nilai awal = transform: translateY(10%) scale(40%) -->
<h1 wajik="zoom-in-up-tr(10%)-sc(40%)">Helo Cuyy</h1>

<!-- nilai awal = transform: rotate(50deg) -->
<h1 wajik="flip-x-rt(50deg)">Helo Cuyy</h1>
```

Nilai Spesifik

```html
<h1 wajik="swipe-up" wajik-delay="500">Hello World!</h1>
<h1
  wajik="swipe-down-tr(100%)"
  wajik-delay="400"
  wajik-duration="1500"
  wajik-timing-function="linear"
  wajik-view="bottom"
>
  Helo Cuyy
</h1>
```

### Async await

Atribut-atribut

- wajik-async
- wajik-await="milidetik"
- wajik="animasi"
- wajik-delay="milidetik"
- wajik-duration="milidetik"
- wajik-timing-function="timing-function-css"
- view="top" / "middle" / "bottom"

Bawaan pabrik

```html
<div wajik-async>
  <h1 wajik="swipe-up" wajik-await="200">Hello Boyy!!</h1>
  <h1 wajik="swipe-up" wajik-await="200">Hello Boyy!!</h1>
  <h1 wajik="swipe-up" wajik-await="200">Hello Boyy!!</h1>
  <h1 wajik="swipe-up" wajik-await="200">Hello Boyy!!</h1>
</div>
```

Sebagai grup

```html
<div wajik-async wajik="zoom-in-up" wajik-await="200">
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
</div>
```

Atribut view harus sejajar dengan atribut wajik-async

<div wajik-async wajik="zoom-in-up" wajik-await="200" wajik-view="top">
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
  <h1>Hello World!!</h1>
</div>

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
