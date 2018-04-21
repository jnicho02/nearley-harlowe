'use strict'

const expect = require('chai').expect
const nearley = require('nearley')
const shell = require('shelljs')
shell.exec('nearleyc harlowe.ne -o harlowe.js')
const grammar = require('../harlowe.js')

describe('Harlowe parser', function() {
  var parser

  describe('fed with just words', function() {
    before(function() {
      parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
      parser.feed('just words')
      console.log(JSON.stringify(parser.results[0]))
    })
    it('should be unambiguous', function() {
      expect(parser.results.length).to.eq(1)
    })
    it('should have a single result', function() {
      expect(parser.results[0].length).to.eq(1)
    })
    it('should contain the text', function() {
      expect(parser.results[0][0][0][0]).to.eq('just words')
    })
  })

  describe('fed with a link', function() {
    before(function() {
      parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
      parser.feed('[[display text|goes_somewhere]]')
      console.log(JSON.stringify(parser.results[0]))
    })
    it('should be unambiguous', function() {
      expect(parser.results.length).to.eq(1)
    })
    it('should have a single result', function() {
      expect(parser.results[0].length).to.eq(1)
    })
    it('should be an object', function() {
      expect(parser.results[0][0][0][0]).to.be.a('Object')
    })
    it('should model the link', function() {
      expect(parser.results[0][0][0][0].from).to.eq('display text')
    })
    it('should model the link to', function() {
      expect(parser.results[0][0][0][0].to).to.eq('goes_somewhere')
    })
  })

  describe('fed with a boolean variable', function() {
    before(function() {
      parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
      parser.feed('(set: $foo to true)')
      console.log(JSON.stringify(parser.results[0]))
    })
    it('should be unambiguous', function() {
      expect(parser.results.length).to.eq(1)
    })
    it('should have a single result', function() {
      expect(parser.results[0].length).to.eq(1)
    })
    it('should be an object', function() {
      expect(parser.results[0][0][0][0][0]).to.be.a('Object')
    })
    it('should model the variable', function() {
      expect(parser.results[0][0][0][0][0].set).to.eq('foo')
    })
  })
})
