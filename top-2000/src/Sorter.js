export default class Sorter {
  find(list, keys) {
    let result = list;
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return false;
      }
    }
    return result;
  }

  sortBy(list, keys, asc = true) {
    asc = asc ? 1 : -1;
    list = [...list];
    list.sort((a, b) =>
      this.find(a, keys) > this.find(b, keys) ? -1 * asc : 1 * asc
    );
    return list;
  }
}
