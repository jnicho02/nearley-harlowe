The purpose of this project is to build a node js parser for Twine games that
use the Harlowe grammar.

I have not found a de facto standard definition of the Harlowe language, but have gleaned syntax from:

* [Gaming The Past: Twine 2.0 Harlowe Beginner’s Guide](https://gamingthepast.net/simulation-design/twine-interactive-fiction-tool/twine-2-0-harlowe-beginners-guide/) and [Gaming The Past: Harlowe part 2](https://gamingthepast.net/simulation-design/twine-interactive-fiction-tool/twine-harlowe-part-2/)
* [#TwineTuesday: Twine 2 Basics (Harlowe)](https://videlais.com/2015/08/11/twinetuesday-twine-2-basics-harlowe/)
* Some advanced stuff in available in [Gersande's Blog — Building an inventory in Twine 2 with the built-in Harlowe macros](https://gersande.com/blog/designing-inventories-in-twine-2-with-the-built-in-harlowe-macros/)

The Harlowe code is translated to javascript within a script embedded in any saved
Twine html. However, that code is not designed to be an API and is not easily accessible externally. Hence creating an Extended Backus-Naur From (EBNF) parser.

"In computer science, [extended Backus-Naur form (EBNF)](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) is a family of metasyntax notations, any of which can be used to express a context-free grammar. EBNF is used to make a formal description of a formal language which can be a computer programming language. They are extensions of the basic Backus–Naur form (BNF) metasyntax notation." - Wikipedia

EBNF is similar to regex in that patterns are modelled. It is different in that multiple patterns can match and the matching is performed recursively.

This module uses node 6.10 as I wish to use it on AWS Lambda and at time of writing
(March 2018) this is the highest supported version.

AFAIK syntax is structured:

Link
====
A link to another page is like a wiki link
```
[[go somewhere]]
```
with optional display text
```
[[display text->go somewhere]]
```
Variables
=========
Variables are created and set to a number
```
(set: $score to 0)
```
a string
```
(set: $name to “Josephine”)
```
or a boolean
```
(set: $mercutioDead to false)
```
or an empty array
```
(set: $inv to (a:))
```
or adding an array
```
(set: $inv to $inv + (a: "smartphone", "keys"))
```
Increment and decrement
=======================
```
(set: $score += 1)
```
```
(set: $score -= 5)
```
If
==
```
(if: $nameOfVariable is someValue)[Text to display if the if-statement is true]
```
or if not
```
(if: !$nameOfVariable is someValue)[Text to display if the if-statement is true]
```
or a boolean test
```
(if: $nameOfBooleanVariable)[Text to display if the value is true]
```
else
====
```
(else-if: $dieRoll >2)[That was a pretty good die roll]
```
```
(else:)[You have succeeded]
```
random choice
=============
```
(either: “Random Text 1”, “Random Text 2”)
```
a passage can have tags
=======================
```
(else-if: (passage:)'s tags contains "donotshowinventory")
```

Trying it out
=============
* install node
* use nvm
* check that you are using node v6.10
* npm test

EBNF
