/**
 * Format a flat list WP nav menu into a heirarchial list.
 *
 * @see https://www.wpgraphql.com/docs/menus/#hierarchical-data
 * @param  {Array}  data             The array containing menu data.
 * @param  {object} keys             Object keys.
 * @param  {string} keys.idKey       ID key.
 * @param  {string} keys.parentKey   Parent key.
 * @param  {string} keys.childrenKey Children key.
 * @return {Array}                   Array containing a updated menu list.
 */
export default function formatHeirarchialMenu(
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) {
  const tree = [];
  const childrenOf = {};
  data.forEach((item) => {
    const newItem = { ...item };
    const path = `${newItem.path}`;

    const multisitePrefix = process.env.WORDPRESS_MULTISITE_PREFIX;
    if (
      multisitePrefix?.length &&
      path.startsWith(multisitePrefix.toString())
    ) {
      newItem.path = path.replace(multisitePrefix, "");
    }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    if (parentId) {
      (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem);
    } else {
      tree.push(newItem);
    }
  });
  return tree;
}
