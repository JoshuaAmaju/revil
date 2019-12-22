import { deepFind } from "./utils";

export function toClass<T>(instance: { new (): T }) {
  let _json: object = {};
  let _instance = new instance();
  let _pool: string[] = Object.keys(_instance);

  const exec = () => {
    for (let key of _pool) {
      _instance[key] = deepFind(_json, key);
    }

    return _instance;
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
