// BASIC
const basicList1 = [
  "swipe-right",
  "swipe-left",
  "swipe-up",
  "swipe-down",
  "zoom-in",
  "zoom-in-right",
  "zoom-in-left",
  "zoom-in-up",
  "zoom-in-down",
  "zoom-out",
  "zoom-out-right",
  "zoom-out-left",
  "zoom-out-up",
  "zoom-out-down",
  "flip-x",
  "flip-y",
  "fade-in",
];

const basicList2 = [
  "swipe-right-tr(300px)",
  "zoom-in-sc(10%)",
  "zoom-in-right-sc(0%)",
  "zoom-in-right-tr(200px)",
  "zoom-in-right-sc(0%)-tr(200px)",
  "zoom-out-sc(200%)",
  "zoom-out-left-sc(300%)",
  "zoom-out-left-tr(100px)",
  "zoom-out-left-sc(300%)-tr(100px)",
  "flip-x-rt(70deg)",
  "flip-y-rt(50deg)",
];

const basicList3 = [
  {
    name: "swipe-right",
    attributes: 'data-wajik-delay="500"',
  },
  {
    name: "zoom-in-sc(0%)",
    attributes: 'data-wajik-duration="2000"',
  },
  {
    name: "swipe-left-tr(30px)",
    attributes: 'data-wajik-timing-function="linear"',
  },
  {
    name: "zoom-out",
    attributes: 'data-wajik-view="bottom"',
  },
  {
    name: "zoom-in-right-tr(200px)",
    attributes:
      'data-wajik-delay="500" data-wajik-duration="1500" data-wajik-timing-function="ease-in" data-wajik-view="top"',
  },
];

const basic = document.getElementById("basic");

basic.innerHTML += `
    <div class="outside">
        <h1>Basic</h1>
        <p>Dengan menambahkan atribut di element</p>
        <p>Contoh:</p>
        <p>Element: <span class="value-light">data-wajik="swipe-right"<span></p>
    </div>
`;

basic.innerHTML += basicList1
  .map((item) => {
    return `
      <div class="box" data-wajik="${item}">
        <p><span class="value-dark">data-wajik="${item}"</span></p>  
      </div>
    `;
  })
  .join("");

basic.innerHTML += `
  <div class="outside">
    <h3>Memberikan unit spesifik</h3>
    <p>Contoh:</p>
    <p>Element: <span class="value-light">data-wajik="swipe-right-tr(20px)"</span></p>
    <p class="comment">
      tr adalah singkatan dari translate dengan sumbu otomatis, tidak semua animasi mempunyai unit yang sama, lebih lengkapnya <a href="/">disini</a>
    </p>
  </div>
`;

basic.innerHTML += basicList2
  .map((item) => {
    return `
      <div class="box" data-wajik="${item}">
        <p><span class="value-dark">data-wajik="${item}"</span></p>  
      </div>
    `;
  })
  .join("");

basic.innerHTML += `
  <div class="outside">
    <h3>Memberikan nilai spesifik</h3>
    <p>Contoh:</p>
    <p>Element: <span class="value-light">data-wajik="swipe-right-tr(20px)" data-wajik-delay="500"<span></p>
  </div>
`;

basic.innerHTML += basicList3
  .map((item) => {
    return `
      <div class="box" data-wajik="${item.name}" ${item.attributes}>
        <p><span class="value-dark">data-wajik="${item.name}" ${item.attributes}</span></p>  
      </div>
    `;
  })
  .join("");

// ASYNC
const _asyncList = [
  "zoom-in-right",
  "zoom-in-left",
  "zoom-in-up",
  "zoom-in-down",
];

const _async = document.getElementById("async");

_async.innerHTML += `
    <div class="outside">
        <h1>Async await</h1>
        <p>Contoh:</p>
        <p>Element pembungkus: <span class="value-light">data-wajik-async</span></p>
        <p>Element: <span class="value-light">data-wajik="swipe-up" data-wajik-await=200</span></p>
    </div>
`;

_async.innerHTML += `
    <div class="main" data-wajik-async>
        ${_asyncList
          .map((item) => {
            return `
                <div class="box" data-wajik="${item}" data-wajik-await="200">
                    <p>Element pembungkus: <span class="value-dark">data-wajik-async<span></p>
                    <p>Element: <span class="value-dark">data-wajik="${item}" data-wajik-await="200"</span></p>
                </div>
            `;
          })
          .join("")}
    </div>
`;

_async.innerHTML += `
    <div class="outside">
        <h3>Async sebagai grup</h3>
        <p>Contoh:</p>
        <p>Element pembungkus: <span class="value-light">data-wajik-async data-wajik="swipe-right" data-wajik-await="200" data-wajik-delay="500"</span></p>
        <p>Element: <span class="value-light">tanpa atribut</span></p>
    </div>
`;

_async.innerHTML += `
    <div class="main" data-wajik-async data-wajik="swipe-right" data-wajik-await="200" data-wajik-delay=500>
        ${_asyncList
          .map((item) => {
            return `
                <div class="box">
                <p>Element pembungkus: <span class="value-dark">data-wajik-async data-wajik="swipe-right" data-wajik-await="200" data-wajik-delay=500<span></p>
                <p>Element: <span class="value-dark">tanpa atribut</span></p>
                </div>
            `;
          })
          .join("")}
    </div>
`;

_async.innerHTML += `
    <div class="outside">
        <h3>View di async</h3>
        <p>Contoh:</p>
        <p>Element pembungkus: <span class="value-light">data-wajik-async data-wajik-view="top" data-wajik="swipe-right" data-wajik-await="200"</span></p>
        <p>Element: <span class="value-light">tanpa atribut</span></p>
        <p class="comment">Untuk view nilai harus sejajar dengan atribut data-wajik-async</p>
    </div>
`;

_async.innerHTML += `
    <div class="main" data-wajik-async data-wajik-view="top" data-wajik="swipe-left" data-wajik-await="200">
        ${_asyncList
          .map((item) => {
            return `
                <div class="box">
                <p>Element pembungkus: <span class="value-dark">data-wajik-async data-wajik-view="top" data-wajik="swipe-left" data-wajik-await="200"<span></p>
                <p>Element: <span class="value-dark">tanpa atribut</span></p>
                </div>
            `;
          })
          .join("")}
    </div>
`;
