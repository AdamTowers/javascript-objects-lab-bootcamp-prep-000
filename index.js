var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

//return Object.assign({}, obj, { [key]: value }) ??

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, targetObject, updatesObeject);
}
