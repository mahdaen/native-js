define({ "api": [
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isArray",
    "url": "isArray(variable);",
    "title": "isArray()",
    "name": "isArray",
    "description": "<p>Check does type of variable is array or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = [1,2];\nvar bar = 100;\n\nisArray(foo); // true\nisArray(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isBoolean",
    "url": "isBoolean(variable);",
    "title": "isBoolean()",
    "name": "isBoolean",
    "description": "<p>Check does type of variable is boolean or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = false;\nvar bar = 'true';\n\nisBoolean(foo); // true\nisBoolean(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isColor",
    "url": "isColor(variable);",
    "title": "isColor()",
    "name": "isColor",
    "description": "<p>Check does type of variable is color string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = '#999';\nvar bar = 100;\n\nisColor(foo); // true\nisColor(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isDOMList",
    "url": "isDOMList(variable);",
    "title": "isDOMList()",
    "name": "isDOMList",
    "description": "<p>Check does type of variable is DOMList object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = $dom('span');\nvar bar = 100;\n\nisDOMList(foo); // true\nisDOMList(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isDate",
    "url": "isDate(variable);",
    "title": "isDate()",
    "name": "isDate",
    "description": "<p>Check does type of variable is date string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'Jan 11, 2011';\nvar bar = 100;\n\nisDate(foo); // true\nisDate(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isDefined",
    "url": "isDefined(variable);",
    "title": "isDefined()",
    "name": "isDefined",
    "description": "<p>Check whether argument is defined or not. Use only to check argument in function.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = function(bar) {\n    isDefined(bar); // true or false.\n}\n\nisDefined(bar); // Error.",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isEmail",
    "url": "isEmail(variable);",
    "title": "isEmail()",
    "name": "isEmail",
    "description": "<p>Check does type of variable is email address string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'mail@domain.com';\nvar bar = 'mail@domain';\n\nisEmail(foo); // true\nisEmail(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isFunction",
    "url": "isFunction(variable);",
    "title": "isFunction()",
    "name": "isFunction",
    "description": "<p>Check does type of variable is function or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = function() {};\nvar bar = 100;\n\nisFunction(foo); // true\nisFunction(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isHTML",
    "url": "isHTML(variable);",
    "title": "isHTML()",
    "name": "isHTML",
    "description": "<p>Check does type of variable is html object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = $('span')[0];\nvar bar = 100;\n\nisHTML(foo); // true\nisHTML(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isHTMLString",
    "url": "isHTMLString(variable);",
    "title": "isHTMLString()",
    "name": "isHTMLString",
    "description": "<p>Check does type of variable is HTML Formatted String or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = '<span class=\"foo\">';\nvar bar = 'span.foo';\n\nisHTMLString(foo); // true\nisHTMLString(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isJQuery",
    "url": "isJQuery(variable);",
    "title": "isJQuery()",
    "name": "isJQuery",
    "description": "<p>Check does type of variable is jQuery Object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = $('span');\nvar bar = [1,2];\n\nisJQuery(foo); // true\nisJQuery(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isNumber",
    "url": "isNumber(variable);",
    "title": "isNumber()",
    "name": "isNumber",
    "description": "<p>Check does type of variable is number or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 100;\nvar bar = 'Foo';\n\nisNumber(foo); // true\nisNumber(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isObject",
    "url": "isObject(variable);",
    "title": "isObject()",
    "name": "isObject",
    "description": "<p>Check does type of variable is object or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = {a: 1, b: 2};\nvar bar = 100;\n\nisObject(foo); // true\nisObject(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isString",
    "url": "isString(variable);",
    "title": "isString()",
    "name": "isString",
    "description": "<p>Check does type of variable is string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'bar';\nvar bar = 100;\n\nisString(foo); // true\nisString(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Data_Type",
    "type": "isURL",
    "url": "isURL(variable);",
    "title": "isURL()",
    "name": "isURL",
    "description": "<p>Check does type of variable is URL string or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "variable",
            "description": "<p>Variable to check.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "var foo = 'https://main.com/pages/module';\nvar bar = 'foo bar';\n\nisURL(foo); // true\nisURL(bar); // false",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Data_Type"
  },
  {
    "version": "1.1.0",
    "group": "Iterator",
    "type": "foreach",
    "url": "foreach(object,handler);",
    "title": "foreach()",
    "name": "Foreach",
    "description": "<p>Perform loop through Array, Object, String, Number and DOMList.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "object",
            "description": "<p>Array, Object, String, Number or DOMList.</p> "
          },
          {
            "group": "Parameter",
            "type": "func",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle each item. <br>Array iterator will give &#39;value&#39; and &#39;index&#39; as argument. <br>Object iterator will give &#39;key&#39; and &#39;value&#39; as argument. <br>String iterator will give &#39;char&#39; and &#39;index&#39; as argument. <br>Number iterator will give &#39;number&#39; as argument. <br>DOMList iterator will give &#39;elem&#39; and &#39;index&#39; as argument.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample: Array",
        "content": "var arr = [1,2,3,4];\n\nforeach(arr, function(value, i) {\n    console.log(value, i); // 1 0 >> 2 1 >> 3 2 >> 4 3\n}",
        "type": "js"
      },
      {
        "title": "Sample: Object",
        "content": "var obj = {a: 1, b: 2};\n\nforeach(obj, function(key, value) {\n    console.log(key, value); // a 1 >> b 2\n}",
        "type": "js"
      },
      {
        "title": "Sample: String",
        "content": "var str = 'Foo';\n\nforeach(str, function(char, i) {\n    console.log(char, i); // F 0 >> o 1 >> o 2\n}",
        "type": "js"
      },
      {
        "title": "Sample: Number",
        "content": "foreach(5, function(number) {\n    console.log(number); // 1 >> 2 >> 3 >> 4 >> 5\n}",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Iterator"
  },
  {
    "version": "1.1.0",
    "group": "Iterator",
    "type": "reveach",
    "url": "reveach(object,handler);",
    "title": "reveach()",
    "name": "Reveach",
    "description": "<p>Perform reversed loop through Array, Object, String, Number and DOMList.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "object",
            "description": "<p>Array, Object, String, Number or DOMList.</p> "
          },
          {
            "group": "Parameter",
            "type": "func",
            "optional": false,
            "field": "handler",
            "description": "<p>Function that handle each item. <br>Array iterator will give &#39;value&#39; and &#39;index&#39; as argument. <br>Object iterator will give &#39;key&#39; and &#39;value&#39; as argument. <br>String iterator will give &#39;char&#39; and &#39;index&#39; as argument. <br>Number iterator will give &#39;number&#39; as argument. <br>DOMList iterator will give &#39;elem&#39; and &#39;index&#39; as argument.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample: Array",
        "content": "var arr = [1,2,3,4];\n\nreveach(arr, function(value, i) {\n    console.log(value, i); // 4 3 >> 3 2 >> 2 1 >> 1 0\n}",
        "type": "js"
      },
      {
        "title": "Sample: Object",
        "content": "var obj = {a: 1, b: 2};\n\nreveach(obj, function(key, value) {\n    console.log(key, value); // b 2 >> a 1\n}",
        "type": "js"
      },
      {
        "title": "Sample: String",
        "content": "var str = 'Foo';\n\nreveach(str, function(char, i) {\n    console.log(char, i); // o 2 >> o 1 >> F 0\n}",
        "type": "js"
      },
      {
        "title": "Sample: Number",
        "content": "reveach(5, function(number) {\n    console.log(number); // 5 >> 4 >> 3 >> 2 >> 1\n}",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Iterator"
  },
  {
    "version": "1.1.0",
    "group": "Private",
    "type": "cons",
    "url": "cons(name,value);",
    "title": "cons()",
    "name": "Cons",
    "description": "<p>Read or create new read-only variable. Since it&#39;s private, you must use cons() to read the value. Private variable live under single scope. You can change the value of the constant that already created.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Constant name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Constant value. Leave blank to read value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "x = cons('foo', 'bar'); // Set private constant foo to \"bar\".\n\nx = cons('foo'); // Read private variable foo.\n\nx = cons('foo', 'foobar'); // Nothing changed.\n\nx = foo; // Error.",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Private"
  },
  {
    "version": "1.1.0",
    "group": "Private",
    "type": "func",
    "url": "func(name,handler);",
    "title": "func()",
    "name": "Func",
    "description": "<p>Run or create new read-only and private function. Since it&#39;s private, you must use func() to call the function. Private function live under single scope. You can&#39;t change the function handler to the function that already defined.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Function name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "handler",
            "description": "<p>Function handler. Leave blank to read value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Create new function.\nfunc('foo', function() {\n    console.log('bar');\n});\n\n// Call function.\nfunc('foo')();\n\n// Nothing changed since function 'foo' already defined.\nfunc('foo', function() {\n    console.log('foo');\n});\n\nfoo(); // ERROR.",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Private"
  },
  {
    "version": "1.1.0",
    "group": "Private",
    "type": "vars",
    "url": "vars(name,value);",
    "title": "vars()",
    "name": "Vars",
    "description": "<p>Get or Set private variable. Since it&#39;s private, you must use vars() to read the value. Private variable live under single scope. Defining value in same name will replace the value, wherever you use that.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Variable name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Variable value. Leave blank to read value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "x = vars('foo', 'bar'); // Set private variable foo to \"bar\".\n\nx = vars('foo'); // Read private variable foo.\n\nx = foo; // Error.",
        "type": "js"
      }
    ],
    "filename": "dist/nativejs.js",
    "groupTitle": "Private"
  }
] });