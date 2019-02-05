function removeSNames (names) {
  return names.filter(name => name.charAt(0).toLowerCase() !== 's')
}

module.exports = { removeSNames }
