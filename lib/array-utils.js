const chunk = function(list, size, overlap) {
  if(list.length === 0) return list;

  if(list.length <= overlap) return [list];

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size - overlap);
  return [currentChunk].concat(chunk(remaining, size, overlap));
}

const toNumber = function(list) {
  return list.map(function(word) { return +word });
}

exports.toNumber = toNumber;
exports.chunk = chunk;
