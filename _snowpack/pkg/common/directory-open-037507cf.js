// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (r, t, a = r.name) => {
  const i = [],
        n = [];

  for await (const o of r.values()) {
    const c = `${a}/${o.name}`;
    "file" === o.kind ? n.push(o.getFile().then(e => (e.directoryHandle = r, Object.defineProperty(e, "webkitRelativePath", {
      configurable: !0,
      enumerable: !0,
      get: () => c
    })))) : "directory" === o.kind && t && i.push(e(o, t, c));
  }

  return [...(await Promise.all(i)).flat(), ...(await Promise.all(n))];
};

var directoryOpen = (async (r = {}) => {
  r.recursive = r.recursive || !1;
  const t = await window.showDirectoryPicker();
  return e(t, r.recursive);
});

export default directoryOpen;
