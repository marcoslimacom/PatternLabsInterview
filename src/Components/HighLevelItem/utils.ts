export function prepareHighLevelItemData(data: any): Array<any> {
  const result = [];

  for (const key in data) {
    if (!key.includes("ratio")) {
        const value = data[key];
        const name = (key.charAt(0).toUpperCase() + key.substring(1)).replace("_", " ");
        result.push({name: name, value: value});
    }
  }

  return result;
}
