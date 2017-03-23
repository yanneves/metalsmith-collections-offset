'use strict'

const Metalsmith = require('metalsmith')
const collections = require('metalsmith-collections')
const { expect } = require('chai')
const { name } = require('../package.json')
const plugin = require('../lib/')

describe(name, () => {
  let metalsmith

  beforeEach(() => {
    metalsmith = Metalsmith('test/fixtures/basic/')
  })

  it('should apply forward offset to collection', done => {
    metalsmith
      .use(collections({ sortBy: 'path' }))
      .use(plugin({ articles: 1 }))
      .build(err => {
        if (err) return done(err)

        const { articles } = metalsmith.metadata()
        expect(articles).to.have.lengthOf(2)
        expect(articles.map(({ path }) => path)).to.eql(['beta.md', 'charlie.md'])

        done()
      })
  })

  it('should apply forward offset > 1', done => {
    metalsmith
      .use(collections({ sortBy: 'path' }))
      .use(plugin({ articles: 2 }))
      .build(err => {
        if (err) return done(err)

        const { articles } = metalsmith.metadata()
        expect(articles).to.have.lengthOf(1)
        expect(articles.map(({ path }) => path)).to.eql(['charlie.md'])

        done()
      })
  })

  it('should apply reverse offset to collection', done => {
    metalsmith
      .use(collections({ sortBy: 'path' }))
      .use(plugin({ articles: -1 }))
      .build(err => {
        if (err) return done(err)

        const { articles } = metalsmith.metadata()
        expect(articles).to.have.lengthOf(2)
        expect(articles.map(({ path }) => path)).to.eql(['alpha.md', 'beta.md'])

        done()
      })
  })

  it('should apply reverse offset < -1', done => {
    metalsmith
      .use(collections({ sortBy: 'path' }))
      .use(plugin({ articles: -2 }))
      .build(err => {
        if (err) return done(err)

        const { articles } = metalsmith.metadata()
        expect(articles).to.have.lengthOf(1)
        expect(articles.map(({ path }) => path)).to.eql(['alpha.md'])

        done()
      })
  })

  it('should correctly apply no offset to collection', done => {
    metalsmith
      .use(collections({ sortBy: 'path' }))
      .use(plugin({ articles: 0 }))
      .build(err => {
        if (err) return done(err)
        expect(metalsmith.metadata().articles).to.have.lengthOf(3)
        done()
      })
  })

})
