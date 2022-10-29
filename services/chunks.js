function all(items, fn) {
  const promises = items
    .filter((item) => item)
    .map((item) => {
      if (item) console.log(`${item.id}`);
      return fn(item);
    });
  return Promise.all(promises);
}

function chunks(items, fn, chunkSize = 25) {
  let result = [];
  const chunks = splitToChunks(items, chunkSize);

  return series(chunks, (chunk) => {
    return all(chunk, fn).then((res) => (result = result.concat(res)));
  }).then(() => {
    return result;
  });
}

function series(items, fn) {
  let result = [];
  return items
    .reduce((acc, item) => {
      acc = acc.then(() => {
        console.log(`Fetching...`);
        return fn(item).then((res) => result.push(res));
      });
      return acc;
    }, Promise.resolve())
    .then(() => result);
}

function splitToChunks(items, size) {
  const result = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

module.exports = { chunks };
