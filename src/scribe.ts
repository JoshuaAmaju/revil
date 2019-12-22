export function toClass<T>(instance: { new (): T }): {} {
  let _json: object = {};
  let _pool: string[] = Object.keys(instance);

  const exec = () => {
    for (let key of _pool) {
      instance[key] = _json[key];
    }

    return instance;
  };

  return {
    from(json: object) {
      _json = { ...json };
      return exec();
    },
    exclude(...values: string[]) {
      _pool = _pool.filter(v => !values.includes(v));
      return this;
    },
    only(...values: string[]) {
      _pool = values;
      return this;
    },
    pluck(...values: string[]) {
      _pool.push(...values);
      return this;
    }
  };
}
