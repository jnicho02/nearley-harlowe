// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["passage"]},
    {"name": "passage$ebnf$1", "symbols": []},
    {"name": "passage$ebnf$1$subexpression$1", "symbols": ["words"]},
    {"name": "passage$ebnf$1$subexpression$1", "symbols": ["link"]},
    {"name": "passage$ebnf$1$subexpression$1", "symbols": ["code"]},
    {"name": "passage$ebnf$1", "symbols": ["passage$ebnf$1", "passage$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "passage", "symbols": ["passage$ebnf$1"], "postprocess": d => d[0].join("")},
    {"name": "words", "symbols": [/[\w\s."'^\(\)\[\]]/]},
    {"name": "link$string$1", "symbols": [{"literal":"["}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "link$ebnf$1", "symbols": [/[\w\s]/]},
    {"name": "link$ebnf$1", "symbols": ["link$ebnf$1", /[\w\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "link$ebnf$2", "symbols": [/[\w\s]/]},
    {"name": "link$ebnf$2", "symbols": ["link$ebnf$2", /[\w\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "link$string$2", "symbols": [{"literal":"]"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "link", "symbols": ["link$string$1", "link$ebnf$1", {"literal":"|"}, "link$ebnf$2", "link$string$2"], "postprocess": d => {return {link:d[1].join(""), to:d[3].join("")} }},
    {"name": "code", "symbols": ["set"]},
    {"name": "code", "symbols": ["if"]},
    {"name": "code", "symbols": ["ifnot"]},
    {"name": "code", "symbols": ["else"]},
    {"name": "set$string$1", "symbols": [{"literal":"("}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "set$string$2", "symbols": [{"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "set$subexpression$1", "symbols": ["boolean"]},
    {"name": "set$subexpression$1", "symbols": ["value"]},
    {"name": "set", "symbols": ["set$string$1", "variable", "set$string$2", "set$subexpression$1", {"literal":")"}], "postprocess": d => {return {set:d[1], to:d[3]} }},
    {"name": "if$string$1", "symbols": [{"literal":"("}, {"literal":"i"}, {"literal":"f"}, {"literal":":"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if$string$2", "symbols": [{"literal":")"}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$1", "variable", "if$string$2", "passage", {"literal":"]"}], "postprocess": d => {return {if:d[1], then:d[3]} }},
    {"name": "ifnot$string$1", "symbols": [{"literal":"("}, {"literal":"i"}, {"literal":"f"}, {"literal":":"}, {"literal":" "}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifnot$string$2", "symbols": [{"literal":")"}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ifnot", "symbols": ["ifnot$string$1", "variable", "ifnot$string$2", "passage", {"literal":"]"}], "postprocess": d => {return {ifnot:d[1], then:d[3]} }},
    {"name": "else$string$1", "symbols": [{"literal":"("}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}, {"literal":":"}, {"literal":")"}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "else", "symbols": ["else$string$1", "passage", {"literal":"]"}], "postprocess": d => {return {else:d[1]} }},
    {"name": "variable$ebnf$1", "symbols": [/[\w]/]},
    {"name": "variable$ebnf$1", "symbols": ["variable$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "variable", "symbols": [{"literal":"$"}, "variable$ebnf$1"], "postprocess": d => d[1].join("")},
    {"name": "boolean$ebnf$1", "symbols": [/[true|false]/]},
    {"name": "boolean$ebnf$1", "symbols": ["boolean$ebnf$1", /[true|false]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "boolean", "symbols": ["boolean$ebnf$1"], "postprocess": d => {return {type:'boolean', v:d[0].join("")}}},
    {"name": "value$ebnf$1", "symbols": [/[\w]/]},
    {"name": "value$ebnf$1", "symbols": ["value$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "value", "symbols": [{"literal":"'"}, "value$ebnf$1", {"literal":"'"}], "postprocess": d => {return {type:'value', v:d[1].join("")}}},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
