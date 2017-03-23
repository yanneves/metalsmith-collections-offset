'use strict'

const debug = require('debug')('metalsmith-collections-offset')

module.exports = opts => ((files, metalsmith, done) => {
  const metadata = metalsmith.metadata()
  const keys = Object.keys(opts)

  keys.forEach(key => {
    debug(`offsetting collection: ${key}`)
    metadata[key] = opts[key] < 0 ?
      metadata[key].slice(0, opts[key]) :
      metadata[key].slice(opts[key])
  })

  done()
})
