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
      parser.feed('some words')
    })
    it('should be unambiguous', function() {
      expect(parser.results.length).to.eq(1)
    })
    it('should have a single result', function() {
      expect(parser.results[0].length).to.eq(1)
    })
    it('should contain the text', function() {
      expect(parser.results[0][0]).to.eq('some words')
    })
  })

  describe('fed with a link', function() {
    before(function() {
      parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
      parser.feed('[[display text|goes_somewhere]]')
    })
    it('should be unambiguous', function() {
      expect(parser.results.length).to.eq(1)
    })
    it('should have a single result', function() {
      expect(parser.results[0].length).to.eq(1)
    })
    it('should model the link', function() {
      console.log(parser.results[0][0].link)
      expect(parser.results[0][0]).to.eq('some words')
    })
  })
})
