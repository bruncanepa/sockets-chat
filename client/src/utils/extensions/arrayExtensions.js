Object.defineProperty(Array.prototype, 'toHashMap', {
  value: function (options = {}) {
    const {keyName} = options;
    return this.reduce(function (hashMap, value) {
      const key = keyName
        ? value[keyName]
        : value;
      hashMap[key] = value;
      return hashMap;
    }, {});
  },
  enumerable: false
});