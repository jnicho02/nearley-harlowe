const nearley = require("nearley")
const grammar = require("./harlowe.js")

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

parser.feed("some words (set: $name to 'sparky') (set: $sparkyIsHappy to true)\n"
+ "(if: !$sparkyIsHappy)[You failed to remodel all of Sparkys house without making Sparky unhappy. Well done]\n"
+ "other words [[go north]]\n"
+ "(if: $sparkyIsHappy)[You managed to remodel all of Sparkys house without making Sparky unhappy. Well done]\n"
+ "(else:)[Sparky is highly dissatisfied with the job you did remodeling the house. Sparky will not recommend you to anyone.] \n")
for (var res in parser.results) {
  console.log(`${JSON.stringify(parser.results[res])}`)
}
