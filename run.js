const nearley = require("nearley")
const grammar = require("./grammar.js")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

parser.feed("foo\n")
console.log(parser.results)
