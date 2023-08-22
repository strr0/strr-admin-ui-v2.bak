export function formatTreeOptions<S, K>(list: S[], format: (s: S) => {t: Common.TreeOptionWithKey<K>}) {
  return list.map(source => {
    let target = format(source)
    if (source.children) {
      target.children = formatTreeOptions<S, K>(source.children, format)
    }
    return target
  })
}