if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,c,r)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return i;case"module":return o;default:return e(s)}})).then(e=>{const s=r(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-af7d0aae"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"styles.css",revision:"2349d151a833839647417e01e672129f"},{url:"index.html",revision:"e3927ac69f9f824f5f963c6755d17a6a"},{url:"actions/clear-image.js",revision:"9c2ec9f8694e3692b0801d978397b29c"},{url:"actions/clear-selection.js",revision:"35a126e153424728a89006c1347483be"},{url:"actions/color-box.js",revision:"c93f3e7b55713f517fa583332dde2eb4"},{url:"actions/copy-to.js",revision:"6400d2e8327c3dd46fb540e5cf3e9804"},{url:"actions/copy.js",revision:"ce6f03e93d53b8b2d0c3da2e5f02bc57"},{url:"actions/cut.js",revision:"d769a6da2bd1a5fa6f3c06c3824b36d8"},{url:"actions/get-colors.js",revision:"a2fe2d2eb5a938c80859cdc7ebfdf326"},{url:"actions/invert-image.js",revision:"0393f8767a06a70f9952d3c5dbceecae"},{url:"actions/new.js",revision:"8603fe9d0c5ab66d4a70a21e9e6427bd"},{url:"actions/open.js",revision:"6be525fe00c3dca2477b7bd493982e62"},{url:"actions/paste-from.js",revision:"08652a4b0fa870bf670108363b9f00a1"},{url:"actions/paste.js",revision:"4114214b61c8195459af07e41c7251a8"},{url:"actions/print.js",revision:"6a4d63b555f546c8a03439474d2b85fc"},{url:"actions/save-as.js",revision:"aeaed049af72e7b6f659601f29304c7b"},{url:"actions/save-colors.js",revision:"1484e0f2c0e436b7a1ddd44fac4fff7d"},{url:"actions/save.js",revision:"f2e3d6dc655ed6d9340bcfaa2670d55b"},{url:"actions/select-all.js",revision:"15f6a15e77e8e8ac86749e39639f0cc1"},{url:"actions/status-bar.js",revision:"bdd2215e191694174d243cf03389bc28"},{url:"actions/tool-box.js",revision:"4278c6a9d6a1d88727f11c67df5bc788"},{url:"actions/view-bitmap.js",revision:"401b94dd035337f400e94f127f89625d"},{url:"elements/app.js",revision:"5f83c3fb10e9d9456c5dc0bb42adcac3"},{url:"elements/canvas.js",revision:"480948f95416ddbff7556ea54de30716"},{url:"elements/color-box.js",revision:"2067c7e88f5c9d91db5b925b9cc12c64"},{url:"elements/color-picker.js",revision:"91e27f3ae5741b0bf14b920dc23be1e7"},{url:"elements/color-switcher.js",revision:"c0f5199f85dc385bea0dc6835c0674b5"},{url:"elements/handle.js",revision:"a962a8feedb9bcbfb2f0ac11cf7305ae"},{url:"elements/index.js",revision:"3b4b5b338b7c2c9cec8479258621c4cf"},{url:"elements/inset-container.js",revision:"02d815a9f5a4ff72051bb01fbb15536d"},{url:"elements/menu-bar.js",revision:"565265beded6e306d8a701262fb61675"},{url:"elements/menu-item.js",revision:"2e544c4ecbf0e95e2ee13f53f2534d27"},{url:"elements/menu.js",revision:"b3f4739a99e68f6eae038b9c5c3db09a"},{url:"elements/ruler.js",revision:"8807936ca45c67e038b80fbad8131d2c"},{url:"elements/status-bar.js",revision:"a10f268979aac0d7798997ede3dd0942"},{url:"elements/tool-bar.js",revision:"36eab9d062c2dccc12c080a31b66c0c2"},{url:"elements/tool-box.js",revision:"cd96f2119d0e72ff2114dbb232f764ec"},{url:"elements/tool-color-preview.js",revision:"819c2b41e2c911e51d826facc32ace73"},{url:"elements/tool-fill-style.js",revision:"015601af95edd4cb6748ea8909baf9a2"},{url:"elements/tool-line-width.js",revision:"5b184f1f36865c66bc798fcf1cbf7a52"},{url:"elements/tool.js",revision:"2327d0ec5e670371a05232abc37bdc21"},{url:"helpers/get-blob-from-selection.js",revision:"16bec3017610e95845c3f6c2a7f11f16"},{url:"helpers/get-image-from-blob.js",revision:"215c2f3fe73a9548a7deef11f84a87e5"},{url:"helpers/register-sw.js",revision:"68c1f0821b9ceb5a2894660b917d6891"},{url:"helpers/update-context.js",revision:"ac5488706f72864fbe0cdb95eda42ea0"},{url:"menus/all.js",revision:"1da72ab5b140d4368f492fee7a958fed"},{url:"menus/edit.js",revision:"5b295dafaf61aa72fe01bffdef96206f"},{url:"menus/file.js",revision:"39aba862d739d45ffb8a6a73bb0e4024"},{url:"menus/help.js",revision:"b43fef903ddb37fdcd40131a910a8fd6"},{url:"menus/image.js",revision:"179d70cc06ddbaf491e30dafd1861333"},{url:"menus/options.js",revision:"e51d9d4a567b36e483eab8d9e3775dcc"},{url:"menus/view.js",revision:"4eb001f553ab2503bef78290df42464e"},{url:"tools/all.js",revision:"d6b521bd0ff5219904540fc43ef30004"},{url:"tools/brush.js",revision:"8fbfaabe4a7e3e459d0a636f0512c60d"},{url:"tools/fill.js",revision:"2ffea2cc9be33aa49de54d4f1f24c0ac"},{url:"tools/line.js",revision:"1015c477f5851c6000db246f61479820"},{url:"tools/pencil.js",revision:"b084ef3baeeb953be2cc090d20d7afae"},{url:"tools/pick.js",revision:"d82512bf05cbbd50b55c6293a79e4325"},{url:"tools/rectangle.js",revision:"70e23cbcbcd76ea6e032b873352d4b72"},{url:"tools/select.js",revision:"4dae2eb1aa528fc1c083fff7c1e34d96"},{url:"web_modules/bresenham-line.js",revision:"f3eee004b7acec6c5be1eeef3f7366fd"},{url:"web_modules/browser-nativefs.js",revision:"82225e04fcf3f9e00d99e1b4a9e97828"},{url:"web_modules/common/_commonjsHelpers-51a1c497.js",revision:"dae0f04e4dc8d08e5cd2d0b3699584f2"},{url:"web_modules/common/directory-open-legacy-8ad703f7.js",revision:"816372ee4795ffdb93af1842fc47b6f2"},{url:"web_modules/common/directory-open-nativefs-7ac98f26.js",revision:"91d96de461ab5395f2f9643c13306cda"},{url:"web_modules/common/file-open-legacy-37886591.js",revision:"436eea8d91464633a1f6e7196dbcbe35"},{url:"web_modules/common/file-open-nativefs-11792c03.js",revision:"7d0160f05bd6e354971122fdd0342723"},{url:"web_modules/common/file-save-legacy-df95654f.js",revision:"cfcf40db303e17225a904fbb685e301a"},{url:"web_modules/common/file-save-nativefs-b50a0318.js",revision:"fae89dfa12e73a38e168454c3b14aa2d"},{url:"web_modules/hotkeys-js.js",revision:"efe6753e1987c9331bda4737da130ede"},{url:"web_modules/lit-element.js",revision:"92a2d82ca6c36e317ec6dd9c2fd48730"},{url:"web_modules/q-floodfill.js",revision:"882fdf473348f7b206fe49e44de32779"},{url:"assets/icon.png",revision:"bfe25a47a2fe6269acb50ada061fbb84"},{url:"manifest.webmanifest",revision:"ca8b0223e22674e208cc3c224d172f9c"},{url:"favicon.ico",revision:"ea61015581df267459ed25a0dfd026ee"},{url:"3rdpartylicenses.txt",revision:"495048e8d0ba856e8589068964e8ca22"}],{})}));
