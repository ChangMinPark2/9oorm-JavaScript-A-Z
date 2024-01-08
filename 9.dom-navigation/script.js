let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);
//
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;
//NodeType

val = listItem.parentElement.parentElement;

/**
 * 1 -> Element
 * 2 -> Attribute (deprecated)
 * 3 -> Text node
 * 8 -> Comment node
 * 9 -> Document itself
 * 10 -> Doctype
 */

//next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling

console.log('val', val);