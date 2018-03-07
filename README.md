The purpose of this project is to build a node js parser for Twine games that
use the Harlowe grammar.

Syntax is structured:
A link
======
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
Increment and decrement
=======================
```
(set: $score += 1)
```
```
(set: $score -= 5)
```
