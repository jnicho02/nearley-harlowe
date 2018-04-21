main -> passage
passage -> (narrative | link | code)

# You are in a darkened room. Something says, "Boo!".
narrative -> [\w\s."'^\(\)\[\]]:+ {% function(d) { return d[0].join("") } %}
# [[go somewhere]]
# [[display text->go somewhere]]
link -> "[[" [\w\s]:+ "|" [\w\s]:+ "]]" {%
  function(d) {
    return {
      from: d[1].join(""),
      to: d[3].join("")
    }
  }
%}
code ->  assignment #| if | else

# (set: $known to true)
# (set: $score to 0)
# (set: $name to “Josephine”)
assignment -> "(set: " variable " to " (boolean | value) ")" {%
  function(d) {
    return {
      set: d[1],
      to: d[3]
    }
  }
%}
# (if: $known)[I know you!]
# (if: $known is true)[I know you!]
if -> "(if: " variable ")[" passage "]" {%
  function(d) {
    return {
      if: d[1],
      then: d[3]
    }
  }
%}
else -> "(else:)[" passage "]" {%
  function(d) {
    return {
      else:d[1]
    }
  }
%}

variable -> "$" [\w]:+ {%
  function(d) {
    return d[1].join("")
  }
%}
boolean -> [true|false]:+ {%
  function(d) {
    return {
      type:'boolean', v:d[0].join("")
    }
  }
%}
value -> "'" [\w]:+ "'" {%
  function(d) {
    return {
      type:'value', v:d[1].join("")
    }
  }
%}

_ -> [\s\n]:* {% id %}
