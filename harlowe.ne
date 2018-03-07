main -> passage
passage -> (narrative | code | link):*

narrative -> [\w\s."'^\(\)\[\]] {% id %}
code ->  set | if | ifnot | else # | clickable | clickreplace
link -> "[[" [\w\s]:+ "|" [\w\s]:+ "]]" {% d => {return {link:d[1].join(""), to:d[3].join("")} } %}

set -> "(set: " variable " to " (boolean | value) ")" {% d => {return {set:d[1], to:d[3]} } %}
if -> "(if: " variable ")[" passage "]" {% d => {return {if:d[1], then:d[3]} } %}
ifnot -> "(if: !" variable ")[" passage "]" {% d => {return {ifnot:d[1], then:d[3]} } %}
else -> "(else:)[" passage "]" {% d => {return {else:d[1]} } %}

variable -> "$" [\w]:+ {% d => d[1].join("") %}
boolean -> [true|false]:+ {% d => {return {type:'boolean', v:d[0].join("")}} %}
value -> "'" [\w]:+ "'" {% d => {return {type:'value', v:d[1].join("")}} %}

clickable -> "[" [\w\s]:+ "]<" subroutine "|" {% d => {return {link:d[1].join(""), run:d[3]} } %}
clickreplace -> "(click-replace: ?pickup)[" passage "]" {% id %}

subroutine -> [\w\s]:+ {% d => {return {type:'subroutine', v:d[0].join("")}} %}

_ -> [\s\n]:* {% d => { return null } %}
