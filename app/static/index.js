webpackJsonp([0],[
/* 0 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _vue = __webpack_require__(/*! vue */ 2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(/*! vue-router */ 4);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _login = __webpack_require__(/*! ./components/login.vue */ 5);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _invoiceEdit = __webpack_require__(/*! ./components/invoiceEdit.vue */ 106);
	
	var _invoiceEdit2 = _interopRequireDefault(_invoiceEdit);
	
	var _invoiceList = __webpack_require__(/*! ./components/invoiceList.vue */ 123);
	
	var _invoiceList2 = _interopRequireDefault(_invoiceList);
	
	var _contractorsEdit = __webpack_require__(/*! ./components/contractorsEdit.vue */ 126);
	
	var _contractorsEdit2 = _interopRequireDefault(_contractorsEdit);
	
	var _contractorsList = __webpack_require__(/*! ./components/contractorsList.vue */ 129);
	
	var _contractorsList2 = _interopRequireDefault(_contractorsList);
	
	var _paymentsEdit = __webpack_require__(/*! ./components/paymentsEdit.vue */ 135);
	
	var _paymentsEdit2 = _interopRequireDefault(_paymentsEdit);
	
	var _paymentsList = __webpack_require__(/*! ./components/paymentsList.vue */ 132);
	
	var _paymentsList2 = _interopRequireDefault(_paymentsList);
	
	var _mixins = __webpack_require__(/*! ./mixins */ 108);
	
	var _mixins2 = _interopRequireDefault(_mixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	
	var router = new _vueRouter2.default({
	  routes: [{ path: '/login', component: _login2.default }, { path: '/logout', component: _login2.default }, { path: '/invoices/add', component: _invoiceEdit2.default }, { path: '/invoices/:id', component: _invoiceEdit2.default }, { path: '/invoices', component: _invoiceList2.default }, { path: '/contractors/add', component: _contractorsEdit2.default }, { path: '/contractors/:id', component: _contractorsEdit2.default }, { path: '/contractors', component: _contractorsList2.default }, { path: '/payments/add', component: _paymentsEdit2.default }, { path: '/payments/:id', component: _paymentsEdit2.default }, { path: '/payments', component: _paymentsList2.default }]
	
	});
	
	new _vue2.default({
	  el: '#app',
	  router: router,
	  render: function render(h) {
	    return h('router-view');
	  },
	  created: function created() {
	    window.$ = window.jQuery = $;
	    window.logout = _mixins2.default.logout;
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./~/jquery/dist/jquery.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
	
			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}
	
			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
	
		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {
	
				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {
	
					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}
	
					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||
	
						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}
	
				return elem.disabled === disabled;
	
			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}
	
			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
	
			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );
	
					if ( elem ) {
	
						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
	
						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}
	
					return [];
				}
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}
	
		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}
	
		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}
	
		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}
	
		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}
	
		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		if ( chainable ) {
			return elems;
		}
	
		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}
	
		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}
	
		if ( data === "false" ) {
			return false;
		}
	
		if ( data === "null" ) {
			return null;
		}
	
		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}
	
		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}
	
		return data;
	}
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;
	
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );
	
		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );
	
		} else {
			ret = [];
		}
	
		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}
	
		return ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			if ( delegateCount &&
	
				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&
	
				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}
	
				if ( button & 2 ) {
					return 3;
				}
	
				if ( button & 4 ) {
					return 2;
				}
	
				return 0;
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;
	
		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;
	
		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];
	
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
	
				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}
	
					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}
	
					return -1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
	
				/* eslint no-unused-expressions: "off" */
	
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}
	
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}
	
					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;
	
					if ( index < 0 ) {
						i = max;
	
					} else {
						i = one ? index : 0;
					}
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				if ( val == null ) {
					return null;
				}
	
				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}
	
				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	
	return jQuery;
	} );


/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/*!************************************************!*\
  !*** ./~/vue-router/dist/vue-router.common.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.1
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';
	
	/*  */
	
	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}
	
	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}
	
	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;
	
	    data.routerView = true;
	
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});
	
	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;
	
	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }
	
	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }
	
	    var component = cache[name] = matched.components[name];
	
	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {});
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined;
	      }
	    };
	
	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);
	
	    return h(component, data, children)
	  }
	};
	
	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
	  }
	}
	
	/*  */
	
	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;
	
	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };
	
	var decode = decodeURIComponent;
	
	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};
	
	  if (query) {
	    var parsedQuery;
	    try {
	      parsedQuery = parseQuery(query);
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message);
	      parsedQuery = {};
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key];
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}
	
	function parseQuery (query) {
	  var res = {};
	
	  query = query.trim().replace(/^(\?|#|&)/, '');
	
	  if (!query) {
	    return res
	  }
	
	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;
	
	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });
	
	  return res
	}
	
	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];
	
	    if (val === undefined) {
	      return ''
	    }
	
	    if (val === null) {
	      return encode(key)
	    }
	
	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }
	
	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}
	
	/*  */
	
	var trailingSlashRE = /\/?$/;
	
	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom);
	  }
	  return Object.freeze(route)
	}
	
	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});
	
	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}
	
	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';
	
	  return (path || '/') + stringifyQuery(query) + hash
	}
	
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}
	
	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};
	
	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}
	
	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}
	
	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}
	
	/*  */
	
	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];
	
	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;
	
	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;
	    var classes = {};
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	    var compareTarget = location.path ? createRoute(null, location) : route;
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget);
	
	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };
	
	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }
	
	    var data = {
	      class: classes
	    };
	
	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }
	
	    return h(this.tag, data, this.$slots.default)
	  }
	};
	
	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}
	
	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}
	
	var _Vue;
	
	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;
	
	  _Vue = Vue;
	
	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });
	
	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });
	
	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	    }
	  });
	
	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);
	
	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}
	
	/*  */
	
	var inBrowser = typeof window !== 'undefined';
	
	/*  */
	
	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }
	
	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }
	
	  var stack = base.split('/');
	
	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }
	
	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }
	
	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }
	
	  return stack.join('/')
	}
	
	function parsePath (path) {
	  var hash = '';
	  var query = '';
	
	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }
	
	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }
	
	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}
	
	/*  */
	
	function createRouteMap (
	  routes,
	  oldPathMap,
	  oldNameMap
	) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);
	
	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });
	
	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}
	
	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }
	
	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };
	
	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
	    });
	  }
	
	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }
	
	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record;
	  }
	
	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}
	
	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}
	
	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};
	
	var isarray = index$1;
	
	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }
	
	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }
	
	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }
	
	  return tokens
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}
	
	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }
	
	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];
	
	      if (typeof token === 'string') {
	        path += token;
	
	        continue
	      }
	
	      var value = data[token.name];
	      var segment;
	
	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }
	
	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }
	
	        continue
	      }
	
	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }
	
	      path += token.prefix + segment;
	    }
	
	    return path
	  }
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }
	
	  return attachKeys(path, keys)
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
	
	  return attachKeys(regexp, keys)
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }
	
	  options = options || {};
	
	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];
	
	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';
	
	      keys.push(token);
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }
	
	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }
	
	      route += capture;
	    }
	  }
	
	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }
	
	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }
	
	  options = options || {};
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }
	
	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}
	
	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;
	
	/*  */
	
	var regexpCache = Object.create(null);
	
	function getRouteRegex (path) {
	  var hit = regexpCache[path];
	  var keys, regexp;
	
	  if (hit) {
	    keys = hit.keys;
	    regexp = hit.regexp;
	  } else {
	    keys = [];
	    regexp = index(path, keys);
	    regexpCache[path] = { keys: keys, regexp: regexp };
	  }
	
	  return { keys: keys, regexp: regexp }
	}
	
	var regexpCompileCache = Object.create(null);
	
	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}
	
	/*  */
	
	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }
	
	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }
	
	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/';
	  var query = resolveQuery(parsedPath.query, next.query);
	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }
	
	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}
	
	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}
	
	/*  */
	
	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;
	
	  function addRoutes (routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }
	
	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;
	
	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });
	
	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }
	
	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }
	
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }
	
	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect;
	
	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }
	
	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      );
	      return _createRoute(null, location)
	    }
	
	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;
	
	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      return _createRoute(null, location)
	    }
	  }
	
	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }
	
	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }
	
	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}
	
	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);
	
	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) { params[key.name] = val; }
	  }
	
	  return true
	}
	
	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}
	
	/*  */
	
	
	var positionStore = Object.create(null);
	
	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}
	
	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }
	
	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }
	
	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }
	
	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}
	
	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}
	
	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}
	
	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}
	
	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}
	
	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}
	
	function isNumber (v) {
	  return typeof v === 'number'
	}
	
	/*  */
	
	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;
	
	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }
	
	  return window.history && 'pushState' in window.history
	})();
	
	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;
	
	var _key = genKey();
	
	function genKey () {
	  return Time.now().toFixed(3)
	}
	
	function getStateKey () {
	  return _key
	}
	
	function setStateKey (key) {
	  _key = key;
	}
	
	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}
	
	function replaceState (url) {
	  pushState(url, true);
	}
	
	/*  */
	
	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}
	
	/*  */
	
	
	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	};
	
	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};
	
	History.prototype.onReady = function onReady (cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
	};
	
	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;
	
	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();
	
	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, onAbort);
	};
	
	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;
	
	  var current = this.current;
	  var abort = function () { onAbort && onAbort(); };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }
	
	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );
	
	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };
	
	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); });
	        });
	      }
	    });
	  });
	};
	
	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};
	
	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = baseEl ? baseEl.getAttribute('href') : '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}
	
	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}
	
	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}
	
	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}
	
	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}
	
	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}
	
	function bindGuard (guard, instance) {
	  return function boundRouteGuard () {
	    return guard.apply(instance, arguments)
	  }
	}
	
	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}
	
	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}
	
	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}
	
	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = once(function (resolvedDef) {
	          match.components[key] = resolvedDef;
	          next();
	        });
	
	        var reject = once(function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason));
	          next(false);
	        });
	
	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      }
	    }
	  })
	}
	
	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}
	
	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}
	
	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}
	
	/*  */
	
	
	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;
	
	    History$$1.call(this, router, base);
	
	    var expectScroll = router.options.scrollBehavior;
	
	    if (expectScroll) {
	      setupScroll();
	    }
	
	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }
	
	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;
	
	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };
	
	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };
	
	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };
	
	  return HTML5History;
	}(History));
	
	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}
	
	/*  */
	
	
	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }
	
	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;
	
	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;
	
	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };
	
	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };
	
	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };
	
	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };
	
	  return HashHistory;
	}(History));
	
	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}
	
	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}
	
	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}
	
	function pushHash (path) {
	  window.location.hash = path;
	}
	
	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}
	
	/*  */
	
	
	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }
	
	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;
	
	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;
	
	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };
	
	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;
	
	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };
	
	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };
	
	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };
	
	  return AbstractHistory;
	}(History));
	
	/*  */
	
	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};
	
	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || []);
	
	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;
	
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};
	
	var prototypeAccessors = { currentRoute: {} };
	
	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};
	
	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};
	
	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;
	
	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );
	
	  this.apps.push(app);
	
	  // main app already initialized.
	  if (this.app) {
	    return
	  }
	
	  this.app = app;
	
	  var history = this.history;
	
	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }
	
	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};
	
	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn);
	};
	
	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn);
	};
	
	VueRouter.prototype.onReady = function onReady (cb) {
	  this.history.onReady(cb);
	};
	
	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};
	
	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};
	
	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};
	
	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};
	
	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};
	
	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};
	
	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(to, current || this.history.current, append);
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};
	
	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};
	
	Object.defineProperties( VueRouter.prototype, prototypeAccessors );
	
	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}
	
	VueRouter.install = install;
	VueRouter.version = '2.2.1';
	
	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}
	
	module.exports = VueRouter;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../process/browser.js */ 3)))

/***/ },
/* 5 */
/*!*********************************!*\
  !*** ./js/components/login.vue ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-rewriter?id=data-v-847759ac!../../~/vue-loader/lib/selector?type=styles&index=0!./login.vue */ 6)
	
	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./login.vue */ 12),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-847759ac!../../~/vue-loader/lib/selector?type=template&index=0!./login.vue */ 105),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-847759ac", Component.options)
	  } else {
	    hotAPI.reload("data-v-847759ac", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 6 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-847759ac!./~/vue-loader/lib/selector.js?type=styles&index=0!./js/components/login.vue ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-rewriter.js?id=data-v-847759ac!../../~/vue-loader/lib/selector.js?type=styles&index=0!./login.vue */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 9)("47615afc", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-847759ac!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-847759ac!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-847759ac!./~/vue-loader/lib/selector.js?type=styles&index=0!./js/components/login.vue ***!
  \*********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.form {\n    margin: 0 auto;\n}\n", "", {"version":3,"sources":["/./js/components/login.vue?87a71252"],"names":[],"mappings":";AAsDA;IACA,eAAA;CACA","file":"login.vue","sourcesContent":["<script>\n    import API from '../api'\n    import urls from '../urls'\n    export default {\n        data() {\n          return {\n            username: '',\n            password: ''\n          }\n        },\n\n      created() {\n          if (this.$route.path === '/logout') {\n            window.logout();\n          }\n      },\n\n      methods: {\n          login() {\n\n            API.post('login/', {username: this.username, password: this.password}).then(r => {\n              if (r.data.success) {\n                localStorage.auth = r.data.token;\n                API.defaults.headers.Authorization = r.data.token;\n                window.location.href = urls.INVOICES;\n              } else {\n                alert('Niepoprawne dane logowania');\n              }\n            })\n          }\n      }\n    }\n\n</script>\n\n<template>\n    <div class=\"container\">\n        <div class=\"col-md-4 form\">\n\n            <form class=\"form-group\">\n                <h2 class=\"form-signin-heading\">Zaloguj się</h2>\n                <label for=\"username\">Nazwa użytkownika</label>\n                <input v-model=\"username\" id=\"username\" class=\"form-control\"  required autofocus>\n                <label for=\"inputPassword\">Hasło</label>\n                <input v-model=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" required>\n                <br>\n                <button v-on:click=\"login\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Zaloguj się</button>\n            </form>\n        </div>\n\n    </div> <!-- /container -->\n\n</template>\n<style>\n    .form {\n        margin: 0 auto;\n    }\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/*!***************************************************!*\
  !*** ./~/vue-style-loader/lib/addStylesClient.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (true) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(/*! ./listToStyles */ 10)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null
	
	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (!hasSSR) {
	    update(obj)
	  }
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 10 */
/*!************************************************!*\
  !*** ./~/vue-style-loader/lib/listToStyles.js ***!
  \************************************************/
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 11 */
/*!**************************************************!*\
  !*** ./~/vue-loader/lib/component-normalizer.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 12 */
/*!*********************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/login.vue ***!
  \*********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _urls = __webpack_require__(/*! ../urls */ 104);
	
	var _urls2 = _interopRequireDefault(_urls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      username: '',
	      password: ''
	    };
	  },
	  created: function created() {
	    if (this.$route.path === '/logout') {
	      window.logout();
	    }
	  },
	
	
	  methods: {
	    login: function login() {
	
	      _api2.default.post('login/', { username: this.username, password: this.password }).then(function (r) {
	        if (r.data.success) {
	          localStorage.auth = r.data.token;
	          _api2.default.defaults.headers.Authorization = r.data.token;
	          window.location.href = _urls2.default.INVOICES;
	        } else {
	          alert('Niepoprawne dane logowania');
	        }
	      });
	    }
	  }
	};

/***/ },
/* 13 */
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ 14);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _axios = __webpack_require__(/*! axios */ 79);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API = _axios2.default.create({
	  baseURL: '/api/',
	  headers: {
	    'Authorization': localStorage.auth,
	    'Content-Type': 'application/json'
	  }
	});
	
	API.interceptors.response.use(function (response) {
	  return response;
	}, function (error) {
	  if (error.response.status == 401) {
	    window.location.href = '#/login/';
	  }
	  return _promise2.default.reject(error);
	});
	
	exports.default = API;

/***/ },
/* 14 */
/*!********************************************!*\
  !*** ./~/babel-runtime/core-js/promise.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/promise */ 15), __esModule: true };

/***/ },
/* 15 */
/*!*****************************************!*\
  !*** ./~/core-js/library/fn/promise.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 16);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 17);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 61);
	__webpack_require__(/*! ../modules/es6.promise */ 65);
	module.exports = __webpack_require__(/*! ../modules/_core */ 25).Promise;

/***/ },
/* 16 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ function(module, exports) {



/***/ },
/* 17 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./_string-at */ 18)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./_iter-define */ 21)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 18 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_string-at.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 19)
	  , defined   = __webpack_require__(/*! ./_defined */ 20);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 19 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-integer.js ***!
  \**************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 20 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_defined.js ***!
  \***********************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-define.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./_library */ 22)
	  , $export        = __webpack_require__(/*! ./_export */ 23)
	  , redefine       = __webpack_require__(/*! ./_redefine */ 38)
	  , hide           = __webpack_require__(/*! ./_hide */ 28)
	  , has            = __webpack_require__(/*! ./_has */ 39)
	  , Iterators      = __webpack_require__(/*! ./_iterators */ 40)
	  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ 41)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 57)
	  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 59)
	  , ITERATOR       = __webpack_require__(/*! ./_wks */ 58)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 22 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_library.js ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 23 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_export.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 24)
	  , core      = __webpack_require__(/*! ./_core */ 25)
	  , ctx       = __webpack_require__(/*! ./_ctx */ 26)
	  , hide      = __webpack_require__(/*! ./_hide */ 28)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 24 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_global.js ***!
  \**********************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 25 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_core.js ***!
  \********************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_ctx.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./_a-function */ 27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 27 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_a-function.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_hide.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(/*! ./_object-dp */ 29)
	  , createDesc = __webpack_require__(/*! ./_property-desc */ 37);
	module.exports = __webpack_require__(/*! ./_descriptors */ 33) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_object-dp.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(/*! ./_an-object */ 30)
	  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 32)
	  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 36)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(/*! ./_descriptors */ 33) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 30 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_an-object.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 31 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_is-object.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 32 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(/*! ./_descriptors */ 33) && !__webpack_require__(/*! ./_fails */ 34)(function(){
	  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_descriptors.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./_fails */ 34)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/_fails.js ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 35 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_dom-create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./_is-object */ 31)
	  , document = __webpack_require__(/*! ./_global */ 24).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 36 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/_to-primitive.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(/*! ./_is-object */ 31);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 37 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_property-desc.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 38 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_redefine.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_hide */ 28);

/***/ },
/* 39 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_has.js ***!
  \*******************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 40 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iterators.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 41 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-create.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(/*! ./_object-create */ 42)
	  , descriptor     = __webpack_require__(/*! ./_property-desc */ 37)
	  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 57)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./_hide */ 28)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 58)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 42 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_object-create.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(/*! ./_an-object */ 30)
	  , dPs         = __webpack_require__(/*! ./_object-dps */ 43)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 55)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 52)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(/*! ./_dom-create */ 35)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(/*! ./_html */ 56).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 43 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-dps.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(/*! ./_object-dp */ 29)
	  , anObject = __webpack_require__(/*! ./_an-object */ 30)
	  , getKeys  = __webpack_require__(/*! ./_object-keys */ 44);
	
	module.exports = __webpack_require__(/*! ./_descriptors */ 33) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 44 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 45)
	  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 55);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 45 */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(/*! ./_has */ 39)
	  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 46)
	  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 49)(false)
	  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 52)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 46 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-iobject.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./_iobject */ 47)
	  , defined = __webpack_require__(/*! ./_defined */ 20);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 47 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_iobject.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./_cof */ 48);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 48 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_cof.js ***!
  \*******************************************/
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 49 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_array-includes.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(/*! ./_to-iobject */ 46)
	  , toLength  = __webpack_require__(/*! ./_to-length */ 50)
	  , toIndex   = __webpack_require__(/*! ./_to-index */ 51);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 50 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-length.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./_to-integer */ 19)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 51 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_to-index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./_to-integer */ 19)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 52 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_shared-key.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(/*! ./_shared */ 53)('keys')
	  , uid    = __webpack_require__(/*! ./_uid */ 54);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 53 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_shared.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./_global */ 24)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 54 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_uid.js ***!
  \*******************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 55 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 56 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_html.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./_global */ 24).document && document.documentElement;

/***/ },
/* 57 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./_object-dp */ 29).f
	  , has = __webpack_require__(/*! ./_has */ 39)
	  , TAG = __webpack_require__(/*! ./_wks */ 58)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 58 */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_wks.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(/*! ./_shared */ 53)('wks')
	  , uid        = __webpack_require__(/*! ./_uid */ 54)
	  , Symbol     = __webpack_require__(/*! ./_global */ 24).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 59 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-gpo.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(/*! ./_has */ 39)
	  , toObject    = __webpack_require__(/*! ./_to-object */ 60)
	  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 52)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 60 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-object.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./_defined */ 20);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 61 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 62);
	var global        = __webpack_require__(/*! ./_global */ 24)
	  , hide          = __webpack_require__(/*! ./_hide */ 28)
	  , Iterators     = __webpack_require__(/*! ./_iterators */ 40)
	  , TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 58)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 62 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 63)
	  , step             = __webpack_require__(/*! ./_iter-step */ 64)
	  , Iterators        = __webpack_require__(/*! ./_iterators */ 40)
	  , toIObject        = __webpack_require__(/*! ./_to-iobject */ 46);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./_iter-define */ 21)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 63 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************/
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 64 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iter-step.js ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 65 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/es6.promise.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(/*! ./_library */ 22)
	  , global             = __webpack_require__(/*! ./_global */ 24)
	  , ctx                = __webpack_require__(/*! ./_ctx */ 26)
	  , classof            = __webpack_require__(/*! ./_classof */ 66)
	  , $export            = __webpack_require__(/*! ./_export */ 23)
	  , isObject           = __webpack_require__(/*! ./_is-object */ 31)
	  , aFunction          = __webpack_require__(/*! ./_a-function */ 27)
	  , anInstance         = __webpack_require__(/*! ./_an-instance */ 67)
	  , forOf              = __webpack_require__(/*! ./_for-of */ 68)
	  , speciesConstructor = __webpack_require__(/*! ./_species-constructor */ 72)
	  , task               = __webpack_require__(/*! ./_task */ 73).set
	  , microtask          = __webpack_require__(/*! ./_microtask */ 75)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ 58)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ 76)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(/*! ./_set-to-string-tag */ 57)($Promise, PROMISE);
	__webpack_require__(/*! ./_set-species */ 77)(PROMISE);
	Wrapper = __webpack_require__(/*! ./_core */ 25)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ 78)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 66 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_classof.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 48)
	  , TAG = __webpack_require__(/*! ./_wks */ 58)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 67 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_an-instance.js ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 68 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_for-of.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./_ctx */ 26)
	  , call        = __webpack_require__(/*! ./_iter-call */ 69)
	  , isArrayIter = __webpack_require__(/*! ./_is-array-iter */ 70)
	  , anObject    = __webpack_require__(/*! ./_an-object */ 30)
	  , toLength    = __webpack_require__(/*! ./_to-length */ 50)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 71)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 69 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iter-call.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./_an-object */ 30);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 70 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_is-array-iter.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./_iterators */ 40)
	  , ITERATOR   = __webpack_require__(/*! ./_wks */ 58)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 71 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 66)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 58)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 40);
	module.exports = __webpack_require__(/*! ./_core */ 25).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 72 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/_species-constructor.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(/*! ./_an-object */ 30)
	  , aFunction = __webpack_require__(/*! ./_a-function */ 27)
	  , SPECIES   = __webpack_require__(/*! ./_wks */ 58)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 73 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_task.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(/*! ./_ctx */ 26)
	  , invoke             = __webpack_require__(/*! ./_invoke */ 74)
	  , html               = __webpack_require__(/*! ./_html */ 56)
	  , cel                = __webpack_require__(/*! ./_dom-create */ 35)
	  , global             = __webpack_require__(/*! ./_global */ 24)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(/*! ./_cof */ 48)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 74 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_invoke.js ***!
  \**********************************************/
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 75 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_microtask.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./_global */ 24)
	  , macrotask = __webpack_require__(/*! ./_task */ 73).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(/*! ./_cof */ 48)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 76 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/_redefine-all.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(/*! ./_hide */ 28);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 77 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_set-species.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(/*! ./_global */ 24)
	  , core        = __webpack_require__(/*! ./_core */ 25)
	  , dP          = __webpack_require__(/*! ./_object-dp */ 29)
	  , DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 33)
	  , SPECIES     = __webpack_require__(/*! ./_wks */ 58)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 78 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-detect.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(/*! ./_wks */ 58)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/*!********************!*\
  !*** ./js/urls.js ***!
  \********************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  INVOICES: '#/invoices/'
	};

/***/ },
/* 105 */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-847759ac!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/login.vue ***!
  \*************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "col-md-4 form"
	  }, [_c('form', {
	    staticClass: "form-group"
	  }, [_c('h2', {
	    staticClass: "form-signin-heading"
	  }, [_vm._v("Zaloguj się")]), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "username"
	    }
	  }, [_vm._v("Nazwa użytkownika")]), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.username),
	      expression: "username"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "id": "username",
	      "required": "",
	      "autofocus": ""
	    },
	    domProps: {
	      "value": (_vm.username)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.username = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    attrs: {
	      "for": "inputPassword"
	    }
	  }, [_vm._v("Hasło")]), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.password),
	      expression: "password"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "password",
	      "id": "inputPassword",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-lg btn-primary btn-block",
	    attrs: {
	      "type": "submit"
	    },
	    on: {
	      "click": _vm.login
	    }
	  }, [_vm._v("Zaloguj się")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-847759ac", module.exports)
	  }
	}

/***/ },
/* 106 */
/*!***************************************!*\
  !*** ./js/components/invoiceEdit.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./invoiceEdit.vue */ 107),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-7a3fbe50!../../~/vue-loader/lib/selector?type=template&index=0!./invoiceEdit.vue */ 122),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/invoiceEdit.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] invoiceEdit.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7a3fbe50", Component.options)
	  } else {
	    hotAPI.reload("data-v-7a3fbe50", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 107 */
/*!***************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/invoiceEdit.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _mixins = __webpack_require__(/*! ../mixins */ 108);
	
	var _mixins2 = _interopRequireDefault(_mixins);
	
	var _select = __webpack_require__(/*! ./select2.vue */ 109);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _datepicker = __webpack_require__(/*! ./datepicker.vue */ 116);
	
	var _datepicker2 = _interopRequireDefault(_datepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    components: {
	        'select2': _select2.default,
	        'datepicker': _datepicker2.default
	    },
	    data: function data() {
	        return {
	            contractors: [],
	            obj: {
	                id: '',
	                title: '',
	                amount: '',
	                created_at: '',
	                payment_date: '',
	                comment: '',
	                status: '',
	                contractor: ''
	            }
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        var id = this.$route.params.id;
	        if (id) {
	            this.id = id;
	            _api2.default.get('invoices/' + id).then(function (r) {
	                _this.obj = r.data;
	                _this.obj.contractor = _this.obj.contractor.nip;
	            }, function (err) {
	                _this.$router.push('/invoices');
	            });
	        }
	        _mixins2.default.getContractors().then(function (r) {
	            _this.contractors = r.data.map(function (v) {
	                v.id = v.nip;
	                v.text = v.name + ' (NIP: ' + v.nip + ')';
	                return v;
	            });
	        });
	    },
	
	
	    methods: {
	        save: function save() {
	            var _this2 = this;
	
	            var method = this.obj.id ? _api2.default.post : _api2.default.put;
	            var url = this.obj.id ? 'invoices/' + this.id : 'invoices/';
	            method(url, this.obj).then(function (r) {
	                _this2.$router.push({ path: '/invoices', params: { id: r.data.id } });
	            });
	        }
	    }
	
	};

/***/ },
/* 108 */
/*!**********************!*\
  !*** ./js/mixins.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _api = __webpack_require__(/*! ./api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  logout: function logout() {
	    console.log('bye');
	    localStorage.auth = null;
	    _api2.default.defaults.headers.Authorization = null;
	    window.location.href = '#/login';
	  },
	  getContractors: function getContractors() {
	    return _api2.default.get('contractors/');
	  },
	  getInvoices: function getInvoices() {
	    return _api2.default.get('invoices/');
	  },
	  getContractor: function getContractor(id) {
	    return _api2.default.get('contractors/' + id);
	  }
	};

/***/ },
/* 109 */
/*!***********************************!*\
  !*** ./js/components/select2.vue ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./select2.vue */ 110),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-58e099b7!../../~/vue-loader/lib/selector?type=template&index=0!./select2.vue */ 115),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/select2.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] select2.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-58e099b7", Component.options)
	  } else {
	    hotAPI.reload("data-v-58e099b7", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 110 */
/*!***********************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/select2.vue ***!
  \***********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue, $) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _select = __webpack_require__(/*! select2 */ 111);
	
	var _select2 = _interopRequireDefault(_select);
	
	__webpack_require__(/*! select2/dist/css/select2.css */ 112);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	
	
	exports.default = Vue.component('select2', {
	  props: ['options', 'value', 'mapTo', 'valueId'],
	  mounted: function mounted() {
	    var vm = this;
	    $(this.$el).val(this.value).select2({ data: this.options }).on('change', function () {
	      vm.$emit('input', this.value);
	    });
	  },
	  watch: {
	    value: function value(_value) {
	      $(this.$el).val(_value);
	    },
	    options: function options(_options) {
	      $(this.$el).select2({ data: _options });
	    }
	  },
	  destroyed: function destroyed() {
	    $(this.$el).off().select2('destroy');
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! vue */ 2), __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 111 */
/*!**************************************!*\
  !*** ./~/select2/dist/js/select2.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var require;var require;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {/*!
	 * Select2 4.0.3
	 * https://select2.github.io
	 *
	 * Released under the MIT license
	 * https://github.com/select2/select2/blob/master/LICENSE.md
	 */
	(function (factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node/CommonJS
	    factory(require('jquery'));
	  } else {
	    // Browser globals
	    factory(jQuery);
	  }
	}(function (jQuery) {
	  // This is needed so we can catch the AMD loader configuration and use it
	  // The inner file should be wrapped (by `banner.start.js`) in a function that
	  // returns the AMD loader references.
	  var S2 =
	(function () {
	  // Restore the Select2 AMD loader so it can be used
	  // Needed mostly in the language files, where the loader is not inserted
	  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
	    var S2 = jQuery.fn.select2.amd;
	  }
	var S2;(function () { if (!S2 || !S2.requirejs) {
	if (!S2) { S2 = {}; } else { require = S2; }
	/**
	 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
	 * Available via the MIT or new BSD license.
	 * see: http://github.com/jrburke/almond for details
	 */
	//Going sloppy to avoid 'use strict' string cost, but strict practices should
	//be followed.
	/*jslint sloppy: true */
	/*global setTimeout: false */
	
	var requirejs, require, define;
	(function (undef) {
	    var main, req, makeMap, handlers,
	        defined = {},
	        waiting = {},
	        config = {},
	        defining = {},
	        hasOwn = Object.prototype.hasOwnProperty,
	        aps = [].slice,
	        jsSuffixRegExp = /\.js$/;
	
	    function hasProp(obj, prop) {
	        return hasOwn.call(obj, prop);
	    }
	
	    /**
	     * Given a relative module name, like ./something, normalize it to
	     * a real name that can be mapped to a path.
	     * @param {String} name the relative name
	     * @param {String} baseName a real name that the name arg is relative
	     * to.
	     * @returns {String} normalized name
	     */
	    function normalize(name, baseName) {
	        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
	            foundI, foundStarMap, starI, i, j, part,
	            baseParts = baseName && baseName.split("/"),
	            map = config.map,
	            starMap = (map && map['*']) || {};
	
	        //Adjust any relative paths.
	        if (name && name.charAt(0) === ".") {
	            //If have a base name, try to normalize against it,
	            //otherwise, assume it is a top-level require that will
	            //be relative to baseUrl in the end.
	            if (baseName) {
	                name = name.split('/');
	                lastIndex = name.length - 1;
	
	                // Node .js allowance:
	                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
	                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
	                }
	
	                //Lop off the last part of baseParts, so that . matches the
	                //"directory" and not name of the baseName's module. For instance,
	                //baseName of "one/two/three", maps to "one/two/three.js", but we
	                //want the directory, "one/two" for this normalization.
	                name = baseParts.slice(0, baseParts.length - 1).concat(name);
	
	                //start trimDots
	                for (i = 0; i < name.length; i += 1) {
	                    part = name[i];
	                    if (part === ".") {
	                        name.splice(i, 1);
	                        i -= 1;
	                    } else if (part === "..") {
	                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
	                            //End of the line. Keep at least one non-dot
	                            //path segment at the front so it can be mapped
	                            //correctly to disk. Otherwise, there is likely
	                            //no path mapping for a path starting with '..'.
	                            //This can still fail, but catches the most reasonable
	                            //uses of ..
	                            break;
	                        } else if (i > 0) {
	                            name.splice(i - 1, 2);
	                            i -= 2;
	                        }
	                    }
	                }
	                //end trimDots
	
	                name = name.join("/");
	            } else if (name.indexOf('./') === 0) {
	                // No baseName, so this is ID is resolved relative
	                // to baseUrl, pull off the leading dot.
	                name = name.substring(2);
	            }
	        }
	
	        //Apply map config if available.
	        if ((baseParts || starMap) && map) {
	            nameParts = name.split('/');
	
	            for (i = nameParts.length; i > 0; i -= 1) {
	                nameSegment = nameParts.slice(0, i).join("/");
	
	                if (baseParts) {
	                    //Find the longest baseName segment match in the config.
	                    //So, do joins on the biggest to smallest lengths of baseParts.
	                    for (j = baseParts.length; j > 0; j -= 1) {
	                        mapValue = map[baseParts.slice(0, j).join('/')];
	
	                        //baseName segment has  config, find if it has one for
	                        //this name.
	                        if (mapValue) {
	                            mapValue = mapValue[nameSegment];
	                            if (mapValue) {
	                                //Match, update name to the new value.
	                                foundMap = mapValue;
	                                foundI = i;
	                                break;
	                            }
	                        }
	                    }
	                }
	
	                if (foundMap) {
	                    break;
	                }
	
	                //Check for a star map match, but just hold on to it,
	                //if there is a shorter segment match later in a matching
	                //config, then favor over this star map.
	                if (!foundStarMap && starMap && starMap[nameSegment]) {
	                    foundStarMap = starMap[nameSegment];
	                    starI = i;
	                }
	            }
	
	            if (!foundMap && foundStarMap) {
	                foundMap = foundStarMap;
	                foundI = starI;
	            }
	
	            if (foundMap) {
	                nameParts.splice(0, foundI, foundMap);
	                name = nameParts.join('/');
	            }
	        }
	
	        return name;
	    }
	
	    function makeRequire(relName, forceSync) {
	        return function () {
	            //A version of a require function that passes a moduleName
	            //value for items that may need to
	            //look up paths relative to the moduleName
	            var args = aps.call(arguments, 0);
	
	            //If first arg is not require('string'), and there is only
	            //one arg, it is the array form without a callback. Insert
	            //a null so that the following concat is correct.
	            if (typeof args[0] !== 'string' && args.length === 1) {
	                args.push(null);
	            }
	            return req.apply(undef, args.concat([relName, forceSync]));
	        };
	    }
	
	    function makeNormalize(relName) {
	        return function (name) {
	            return normalize(name, relName);
	        };
	    }
	
	    function makeLoad(depName) {
	        return function (value) {
	            defined[depName] = value;
	        };
	    }
	
	    function callDep(name) {
	        if (hasProp(waiting, name)) {
	            var args = waiting[name];
	            delete waiting[name];
	            defining[name] = true;
	            main.apply(undef, args);
	        }
	
	        if (!hasProp(defined, name) && !hasProp(defining, name)) {
	            throw new Error('No ' + name);
	        }
	        return defined[name];
	    }
	
	    //Turns a plugin!resource to [plugin, resource]
	    //with the plugin being undefined if the name
	    //did not have a plugin prefix.
	    function splitPrefix(name) {
	        var prefix,
	            index = name ? name.indexOf('!') : -1;
	        if (index > -1) {
	            prefix = name.substring(0, index);
	            name = name.substring(index + 1, name.length);
	        }
	        return [prefix, name];
	    }
	
	    /**
	     * Makes a name map, normalizing the name, and using a plugin
	     * for normalization if necessary. Grabs a ref to plugin
	     * too, as an optimization.
	     */
	    makeMap = function (name, relName) {
	        var plugin,
	            parts = splitPrefix(name),
	            prefix = parts[0];
	
	        name = parts[1];
	
	        if (prefix) {
	            prefix = normalize(prefix, relName);
	            plugin = callDep(prefix);
	        }
	
	        //Normalize according
	        if (prefix) {
	            if (plugin && plugin.normalize) {
	                name = plugin.normalize(name, makeNormalize(relName));
	            } else {
	                name = normalize(name, relName);
	            }
	        } else {
	            name = normalize(name, relName);
	            parts = splitPrefix(name);
	            prefix = parts[0];
	            name = parts[1];
	            if (prefix) {
	                plugin = callDep(prefix);
	            }
	        }
	
	        //Using ridiculous property names for space reasons
	        return {
	            f: prefix ? prefix + '!' + name : name, //fullName
	            n: name,
	            pr: prefix,
	            p: plugin
	        };
	    };
	
	    function makeConfig(name) {
	        return function () {
	            return (config && config.config && config.config[name]) || {};
	        };
	    }
	
	    handlers = {
	        require: function (name) {
	            return makeRequire(name);
	        },
	        exports: function (name) {
	            var e = defined[name];
	            if (typeof e !== 'undefined') {
	                return e;
	            } else {
	                return (defined[name] = {});
	            }
	        },
	        module: function (name) {
	            return {
	                id: name,
	                uri: '',
	                exports: defined[name],
	                config: makeConfig(name)
	            };
	        }
	    };
	
	    main = function (name, deps, callback, relName) {
	        var cjsModule, depName, ret, map, i,
	            args = [],
	            callbackType = typeof callback,
	            usingExports;
	
	        //Use name if no relName
	        relName = relName || name;
	
	        //Call the callback to define the module, if necessary.
	        if (callbackType === 'undefined' || callbackType === 'function') {
	            //Pull out the defined dependencies and pass the ordered
	            //values to the callback.
	            //Default to [require, exports, module] if no deps
	            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
	            for (i = 0; i < deps.length; i += 1) {
	                map = makeMap(deps[i], relName);
	                depName = map.f;
	
	                //Fast path CommonJS standard dependencies.
	                if (depName === "require") {
	                    args[i] = handlers.require(name);
	                } else if (depName === "exports") {
	                    //CommonJS module spec 1.1
	                    args[i] = handlers.exports(name);
	                    usingExports = true;
	                } else if (depName === "module") {
	                    //CommonJS module spec 1.1
	                    cjsModule = args[i] = handlers.module(name);
	                } else if (hasProp(defined, depName) ||
	                           hasProp(waiting, depName) ||
	                           hasProp(defining, depName)) {
	                    args[i] = callDep(depName);
	                } else if (map.p) {
	                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
	                    args[i] = defined[depName];
	                } else {
	                    throw new Error(name + ' missing ' + depName);
	                }
	            }
	
	            ret = callback ? callback.apply(defined[name], args) : undefined;
	
	            if (name) {
	                //If setting exports via "module" is in play,
	                //favor that over return value and exports. After that,
	                //favor a non-undefined return value over exports use.
	                if (cjsModule && cjsModule.exports !== undef &&
	                        cjsModule.exports !== defined[name]) {
	                    defined[name] = cjsModule.exports;
	                } else if (ret !== undef || !usingExports) {
	                    //Use the return value from the function.
	                    defined[name] = ret;
	                }
	            }
	        } else if (name) {
	            //May just be an object definition for the module. Only
	            //worry about defining if have a module name.
	            defined[name] = callback;
	        }
	    };
	
	    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
	        if (typeof deps === "string") {
	            if (handlers[deps]) {
	                //callback in this case is really relName
	                return handlers[deps](callback);
	            }
	            //Just return the module wanted. In this scenario, the
	            //deps arg is the module name, and second arg (if passed)
	            //is just the relName.
	            //Normalize module name, if it contains . or ..
	            return callDep(makeMap(deps, callback).f);
	        } else if (!deps.splice) {
	            //deps is a config object, not an array.
	            config = deps;
	            if (config.deps) {
	                req(config.deps, config.callback);
	            }
	            if (!callback) {
	                return;
	            }
	
	            if (callback.splice) {
	                //callback is an array, which means it is a dependency list.
	                //Adjust args if there are dependencies
	                deps = callback;
	                callback = relName;
	                relName = null;
	            } else {
	                deps = undef;
	            }
	        }
	
	        //Support require(['a'])
	        callback = callback || function () {};
	
	        //If relName is a function, it is an errback handler,
	        //so remove it.
	        if (typeof relName === 'function') {
	            relName = forceSync;
	            forceSync = alt;
	        }
	
	        //Simulate async callback;
	        if (forceSync) {
	            main(undef, deps, callback, relName);
	        } else {
	            //Using a non-zero value because of concern for what old browsers
	            //do, and latest browsers "upgrade" to 4 if lower value is used:
	            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
	            //If want a value immediately, use require('id') instead -- something
	            //that works in almond on the global level, but not guaranteed and
	            //unlikely to work in other AMD implementations.
	            setTimeout(function () {
	                main(undef, deps, callback, relName);
	            }, 4);
	        }
	
	        return req;
	    };
	
	    /**
	     * Just drops the config on the floor, but returns req in case
	     * the config return value is used.
	     */
	    req.config = function (cfg) {
	        return req(cfg);
	    };
	
	    /**
	     * Expose module registry for debugging and tooling
	     */
	    requirejs._defined = defined;
	
	    define = function (name, deps, callback) {
	        if (typeof name !== 'string') {
	            throw new Error('See almond README: incorrect module build, no module name');
	        }
	
	        //This module may not have dependencies
	        if (!deps.splice) {
	            //deps is not an array, so probably means
	            //an object literal or factory function for
	            //the value. Adjust args.
	            callback = deps;
	            deps = [];
	        }
	
	        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
	            waiting[name] = [name, deps, callback];
	        }
	    };
	
	    define.amd = {
	        jQuery: true
	    };
	}());
	
	S2.requirejs = requirejs;S2.require = require;S2.define = define;
	}
	}());
	S2.define("almond", function(){});
	
	/* global jQuery:false, $:false */
	S2.define('jquery',[],function () {
	  var _$ = jQuery || $;
	
	  if (_$ == null && console && console.error) {
	    console.error(
	      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
	      'found. Make sure that you are including jQuery before Select2 on your ' +
	      'web page.'
	    );
	  }
	
	  return _$;
	});
	
	S2.define('select2/utils',[
	  'jquery'
	], function ($) {
	  var Utils = {};
	
	  Utils.Extend = function (ChildClass, SuperClass) {
	    var __hasProp = {}.hasOwnProperty;
	
	    function BaseConstructor () {
	      this.constructor = ChildClass;
	    }
	
	    for (var key in SuperClass) {
	      if (__hasProp.call(SuperClass, key)) {
	        ChildClass[key] = SuperClass[key];
	      }
	    }
	
	    BaseConstructor.prototype = SuperClass.prototype;
	    ChildClass.prototype = new BaseConstructor();
	    ChildClass.__super__ = SuperClass.prototype;
	
	    return ChildClass;
	  };
	
	  function getMethods (theClass) {
	    var proto = theClass.prototype;
	
	    var methods = [];
	
	    for (var methodName in proto) {
	      var m = proto[methodName];
	
	      if (typeof m !== 'function') {
	        continue;
	      }
	
	      if (methodName === 'constructor') {
	        continue;
	      }
	
	      methods.push(methodName);
	    }
	
	    return methods;
	  }
	
	  Utils.Decorate = function (SuperClass, DecoratorClass) {
	    var decoratedMethods = getMethods(DecoratorClass);
	    var superMethods = getMethods(SuperClass);
	
	    function DecoratedClass () {
	      var unshift = Array.prototype.unshift;
	
	      var argCount = DecoratorClass.prototype.constructor.length;
	
	      var calledConstructor = SuperClass.prototype.constructor;
	
	      if (argCount > 0) {
	        unshift.call(arguments, SuperClass.prototype.constructor);
	
	        calledConstructor = DecoratorClass.prototype.constructor;
	      }
	
	      calledConstructor.apply(this, arguments);
	    }
	
	    DecoratorClass.displayName = SuperClass.displayName;
	
	    function ctr () {
	      this.constructor = DecoratedClass;
	    }
	
	    DecoratedClass.prototype = new ctr();
	
	    for (var m = 0; m < superMethods.length; m++) {
	        var superMethod = superMethods[m];
	
	        DecoratedClass.prototype[superMethod] =
	          SuperClass.prototype[superMethod];
	    }
	
	    var calledMethod = function (methodName) {
	      // Stub out the original method if it's not decorating an actual method
	      var originalMethod = function () {};
	
	      if (methodName in DecoratedClass.prototype) {
	        originalMethod = DecoratedClass.prototype[methodName];
	      }
	
	      var decoratedMethod = DecoratorClass.prototype[methodName];
	
	      return function () {
	        var unshift = Array.prototype.unshift;
	
	        unshift.call(arguments, originalMethod);
	
	        return decoratedMethod.apply(this, arguments);
	      };
	    };
	
	    for (var d = 0; d < decoratedMethods.length; d++) {
	      var decoratedMethod = decoratedMethods[d];
	
	      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
	    }
	
	    return DecoratedClass;
	  };
	
	  var Observable = function () {
	    this.listeners = {};
	  };
	
	  Observable.prototype.on = function (event, callback) {
	    this.listeners = this.listeners || {};
	
	    if (event in this.listeners) {
	      this.listeners[event].push(callback);
	    } else {
	      this.listeners[event] = [callback];
	    }
	  };
	
	  Observable.prototype.trigger = function (event) {
	    var slice = Array.prototype.slice;
	    var params = slice.call(arguments, 1);
	
	    this.listeners = this.listeners || {};
	
	    // Params should always come in as an array
	    if (params == null) {
	      params = [];
	    }
	
	    // If there are no arguments to the event, use a temporary object
	    if (params.length === 0) {
	      params.push({});
	    }
	
	    // Set the `_type` of the first object to the event
	    params[0]._type = event;
	
	    if (event in this.listeners) {
	      this.invoke(this.listeners[event], slice.call(arguments, 1));
	    }
	
	    if ('*' in this.listeners) {
	      this.invoke(this.listeners['*'], arguments);
	    }
	  };
	
	  Observable.prototype.invoke = function (listeners, params) {
	    for (var i = 0, len = listeners.length; i < len; i++) {
	      listeners[i].apply(this, params);
	    }
	  };
	
	  Utils.Observable = Observable;
	
	  Utils.generateChars = function (length) {
	    var chars = '';
	
	    for (var i = 0; i < length; i++) {
	      var randomChar = Math.floor(Math.random() * 36);
	      chars += randomChar.toString(36);
	    }
	
	    return chars;
	  };
	
	  Utils.bind = function (func, context) {
	    return function () {
	      func.apply(context, arguments);
	    };
	  };
	
	  Utils._convertData = function (data) {
	    for (var originalKey in data) {
	      var keys = originalKey.split('-');
	
	      var dataLevel = data;
	
	      if (keys.length === 1) {
	        continue;
	      }
	
	      for (var k = 0; k < keys.length; k++) {
	        var key = keys[k];
	
	        // Lowercase the first letter
	        // By default, dash-separated becomes camelCase
	        key = key.substring(0, 1).toLowerCase() + key.substring(1);
	
	        if (!(key in dataLevel)) {
	          dataLevel[key] = {};
	        }
	
	        if (k == keys.length - 1) {
	          dataLevel[key] = data[originalKey];
	        }
	
	        dataLevel = dataLevel[key];
	      }
	
	      delete data[originalKey];
	    }
	
	    return data;
	  };
	
	  Utils.hasScroll = function (index, el) {
	    // Adapted from the function created by @ShadowScripter
	    // and adapted by @BillBarry on the Stack Exchange Code Review website.
	    // The original code can be found at
	    // http://codereview.stackexchange.com/q/13338
	    // and was designed to be used with the Sizzle selector engine.
	
	    var $el = $(el);
	    var overflowX = el.style.overflowX;
	    var overflowY = el.style.overflowY;
	
	    //Check both x and y declarations
	    if (overflowX === overflowY &&
	        (overflowY === 'hidden' || overflowY === 'visible')) {
	      return false;
	    }
	
	    if (overflowX === 'scroll' || overflowY === 'scroll') {
	      return true;
	    }
	
	    return ($el.innerHeight() < el.scrollHeight ||
	      $el.innerWidth() < el.scrollWidth);
	  };
	
	  Utils.escapeMarkup = function (markup) {
	    var replaceMap = {
	      '\\': '&#92;',
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      '\'': '&#39;',
	      '/': '&#47;'
	    };
	
	    // Do not try to escape the markup if it's not a string
	    if (typeof markup !== 'string') {
	      return markup;
	    }
	
	    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
	      return replaceMap[match];
	    });
	  };
	
	  // Append an array of jQuery nodes to a given element.
	  Utils.appendMany = function ($element, $nodes) {
	    // jQuery 1.7.x does not support $.fn.append() with an array
	    // Fall back to a jQuery object collection using $.fn.add()
	    if ($.fn.jquery.substr(0, 3) === '1.7') {
	      var $jqNodes = $();
	
	      $.map($nodes, function (node) {
	        $jqNodes = $jqNodes.add(node);
	      });
	
	      $nodes = $jqNodes;
	    }
	
	    $element.append($nodes);
	  };
	
	  return Utils;
	});
	
	S2.define('select2/results',[
	  'jquery',
	  './utils'
	], function ($, Utils) {
	  function Results ($element, options, dataAdapter) {
	    this.$element = $element;
	    this.data = dataAdapter;
	    this.options = options;
	
	    Results.__super__.constructor.call(this);
	  }
	
	  Utils.Extend(Results, Utils.Observable);
	
	  Results.prototype.render = function () {
	    var $results = $(
	      '<ul class="select2-results__options" role="tree"></ul>'
	    );
	
	    if (this.options.get('multiple')) {
	      $results.attr('aria-multiselectable', 'true');
	    }
	
	    this.$results = $results;
	
	    return $results;
	  };
	
	  Results.prototype.clear = function () {
	    this.$results.empty();
	  };
	
	  Results.prototype.displayMessage = function (params) {
	    var escapeMarkup = this.options.get('escapeMarkup');
	
	    this.clear();
	    this.hideLoading();
	
	    var $message = $(
	      '<li role="treeitem" aria-live="assertive"' +
	      ' class="select2-results__option"></li>'
	    );
	
	    var message = this.options.get('translations').get(params.message);
	
	    $message.append(
	      escapeMarkup(
	        message(params.args)
	      )
	    );
	
	    $message[0].className += ' select2-results__message';
	
	    this.$results.append($message);
	  };
	
	  Results.prototype.hideMessages = function () {
	    this.$results.find('.select2-results__message').remove();
	  };
	
	  Results.prototype.append = function (data) {
	    this.hideLoading();
	
	    var $options = [];
	
	    if (data.results == null || data.results.length === 0) {
	      if (this.$results.children().length === 0) {
	        this.trigger('results:message', {
	          message: 'noResults'
	        });
	      }
	
	      return;
	    }
	
	    data.results = this.sort(data.results);
	
	    for (var d = 0; d < data.results.length; d++) {
	      var item = data.results[d];
	
	      var $option = this.option(item);
	
	      $options.push($option);
	    }
	
	    this.$results.append($options);
	  };
	
	  Results.prototype.position = function ($results, $dropdown) {
	    var $resultsContainer = $dropdown.find('.select2-results');
	    $resultsContainer.append($results);
	  };
	
	  Results.prototype.sort = function (data) {
	    var sorter = this.options.get('sorter');
	
	    return sorter(data);
	  };
	
	  Results.prototype.highlightFirstItem = function () {
	    var $options = this.$results
	      .find('.select2-results__option[aria-selected]');
	
	    var $selected = $options.filter('[aria-selected=true]');
	
	    // Check if there are any selected options
	    if ($selected.length > 0) {
	      // If there are selected options, highlight the first
	      $selected.first().trigger('mouseenter');
	    } else {
	      // If there are no selected options, highlight the first option
	      // in the dropdown
	      $options.first().trigger('mouseenter');
	    }
	
	    this.ensureHighlightVisible();
	  };
	
	  Results.prototype.setClasses = function () {
	    var self = this;
	
	    this.data.current(function (selected) {
	      var selectedIds = $.map(selected, function (s) {
	        return s.id.toString();
	      });
	
	      var $options = self.$results
	        .find('.select2-results__option[aria-selected]');
	
	      $options.each(function () {
	        var $option = $(this);
	
	        var item = $.data(this, 'data');
	
	        // id needs to be converted to a string when comparing
	        var id = '' + item.id;
	
	        if ((item.element != null && item.element.selected) ||
	            (item.element == null && $.inArray(id, selectedIds) > -1)) {
	          $option.attr('aria-selected', 'true');
	        } else {
	          $option.attr('aria-selected', 'false');
	        }
	      });
	
	    });
	  };
	
	  Results.prototype.showLoading = function (params) {
	    this.hideLoading();
	
	    var loadingMore = this.options.get('translations').get('searching');
	
	    var loading = {
	      disabled: true,
	      loading: true,
	      text: loadingMore(params)
	    };
	    var $loading = this.option(loading);
	    $loading.className += ' loading-results';
	
	    this.$results.prepend($loading);
	  };
	
	  Results.prototype.hideLoading = function () {
	    this.$results.find('.loading-results').remove();
	  };
	
	  Results.prototype.option = function (data) {
	    var option = document.createElement('li');
	    option.className = 'select2-results__option';
	
	    var attrs = {
	      'role': 'treeitem',
	      'aria-selected': 'false'
	    };
	
	    if (data.disabled) {
	      delete attrs['aria-selected'];
	      attrs['aria-disabled'] = 'true';
	    }
	
	    if (data.id == null) {
	      delete attrs['aria-selected'];
	    }
	
	    if (data._resultId != null) {
	      option.id = data._resultId;
	    }
	
	    if (data.title) {
	      option.title = data.title;
	    }
	
	    if (data.children) {
	      attrs.role = 'group';
	      attrs['aria-label'] = data.text;
	      delete attrs['aria-selected'];
	    }
	
	    for (var attr in attrs) {
	      var val = attrs[attr];
	
	      option.setAttribute(attr, val);
	    }
	
	    if (data.children) {
	      var $option = $(option);
	
	      var label = document.createElement('strong');
	      label.className = 'select2-results__group';
	
	      var $label = $(label);
	      this.template(data, label);
	
	      var $children = [];
	
	      for (var c = 0; c < data.children.length; c++) {
	        var child = data.children[c];
	
	        var $child = this.option(child);
	
	        $children.push($child);
	      }
	
	      var $childrenContainer = $('<ul></ul>', {
	        'class': 'select2-results__options select2-results__options--nested'
	      });
	
	      $childrenContainer.append($children);
	
	      $option.append(label);
	      $option.append($childrenContainer);
	    } else {
	      this.template(data, option);
	    }
	
	    $.data(option, 'data', data);
	
	    return option;
	  };
	
	  Results.prototype.bind = function (container, $container) {
	    var self = this;
	
	    var id = container.id + '-results';
	
	    this.$results.attr('id', id);
	
	    container.on('results:all', function (params) {
	      self.clear();
	      self.append(params.data);
	
	      if (container.isOpen()) {
	        self.setClasses();
	        self.highlightFirstItem();
	      }
	    });
	
	    container.on('results:append', function (params) {
	      self.append(params.data);
	
	      if (container.isOpen()) {
	        self.setClasses();
	      }
	    });
	
	    container.on('query', function (params) {
	      self.hideMessages();
	      self.showLoading(params);
	    });
	
	    container.on('select', function () {
	      if (!container.isOpen()) {
	        return;
	      }
	
	      self.setClasses();
	      self.highlightFirstItem();
	    });
	
	    container.on('unselect', function () {
	      if (!container.isOpen()) {
	        return;
	      }
	
	      self.setClasses();
	      self.highlightFirstItem();
	    });
	
	    container.on('open', function () {
	      // When the dropdown is open, aria-expended="true"
	      self.$results.attr('aria-expanded', 'true');
	      self.$results.attr('aria-hidden', 'false');
	
	      self.setClasses();
	      self.ensureHighlightVisible();
	    });
	
	    container.on('close', function () {
	      // When the dropdown is closed, aria-expended="false"
	      self.$results.attr('aria-expanded', 'false');
	      self.$results.attr('aria-hidden', 'true');
	      self.$results.removeAttr('aria-activedescendant');
	    });
	
	    container.on('results:toggle', function () {
	      var $highlighted = self.getHighlightedResults();
	
	      if ($highlighted.length === 0) {
	        return;
	      }
	
	      $highlighted.trigger('mouseup');
	    });
	
	    container.on('results:select', function () {
	      var $highlighted = self.getHighlightedResults();
	
	      if ($highlighted.length === 0) {
	        return;
	      }
	
	      var data = $highlighted.data('data');
	
	      if ($highlighted.attr('aria-selected') == 'true') {
	        self.trigger('close', {});
	      } else {
	        self.trigger('select', {
	          data: data
	        });
	      }
	    });
	
	    container.on('results:previous', function () {
	      var $highlighted = self.getHighlightedResults();
	
	      var $options = self.$results.find('[aria-selected]');
	
	      var currentIndex = $options.index($highlighted);
	
	      // If we are already at te top, don't move further
	      if (currentIndex === 0) {
	        return;
	      }
	
	      var nextIndex = currentIndex - 1;
	
	      // If none are highlighted, highlight the first
	      if ($highlighted.length === 0) {
	        nextIndex = 0;
	      }
	
	      var $next = $options.eq(nextIndex);
	
	      $next.trigger('mouseenter');
	
	      var currentOffset = self.$results.offset().top;
	      var nextTop = $next.offset().top;
	      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
	
	      if (nextIndex === 0) {
	        self.$results.scrollTop(0);
	      } else if (nextTop - currentOffset < 0) {
	        self.$results.scrollTop(nextOffset);
	      }
	    });
	
	    container.on('results:next', function () {
	      var $highlighted = self.getHighlightedResults();
	
	      var $options = self.$results.find('[aria-selected]');
	
	      var currentIndex = $options.index($highlighted);
	
	      var nextIndex = currentIndex + 1;
	
	      // If we are at the last option, stay there
	      if (nextIndex >= $options.length) {
	        return;
	      }
	
	      var $next = $options.eq(nextIndex);
	
	      $next.trigger('mouseenter');
	
	      var currentOffset = self.$results.offset().top +
	        self.$results.outerHeight(false);
	      var nextBottom = $next.offset().top + $next.outerHeight(false);
	      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
	
	      if (nextIndex === 0) {
	        self.$results.scrollTop(0);
	      } else if (nextBottom > currentOffset) {
	        self.$results.scrollTop(nextOffset);
	      }
	    });
	
	    container.on('results:focus', function (params) {
	      params.element.addClass('select2-results__option--highlighted');
	    });
	
	    container.on('results:message', function (params) {
	      self.displayMessage(params);
	    });
	
	    if ($.fn.mousewheel) {
	      this.$results.on('mousewheel', function (e) {
	        var top = self.$results.scrollTop();
	
	        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
	
	        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
	        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
	
	        if (isAtTop) {
	          self.$results.scrollTop(0);
	
	          e.preventDefault();
	          e.stopPropagation();
	        } else if (isAtBottom) {
	          self.$results.scrollTop(
	            self.$results.get(0).scrollHeight - self.$results.height()
	          );
	
	          e.preventDefault();
	          e.stopPropagation();
	        }
	      });
	    }
	
	    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
	      function (evt) {
	      var $this = $(this);
	
	      var data = $this.data('data');
	
	      if ($this.attr('aria-selected') === 'true') {
	        if (self.options.get('multiple')) {
	          self.trigger('unselect', {
	            originalEvent: evt,
	            data: data
	          });
	        } else {
	          self.trigger('close', {});
	        }
	
	        return;
	      }
	
	      self.trigger('select', {
	        originalEvent: evt,
	        data: data
	      });
	    });
	
	    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
	      function (evt) {
	      var data = $(this).data('data');
	
	      self.getHighlightedResults()
	          .removeClass('select2-results__option--highlighted');
	
	      self.trigger('results:focus', {
	        data: data,
	        element: $(this)
	      });
	    });
	  };
	
	  Results.prototype.getHighlightedResults = function () {
	    var $highlighted = this.$results
	    .find('.select2-results__option--highlighted');
	
	    return $highlighted;
	  };
	
	  Results.prototype.destroy = function () {
	    this.$results.remove();
	  };
	
	  Results.prototype.ensureHighlightVisible = function () {
	    var $highlighted = this.getHighlightedResults();
	
	    if ($highlighted.length === 0) {
	      return;
	    }
	
	    var $options = this.$results.find('[aria-selected]');
	
	    var currentIndex = $options.index($highlighted);
	
	    var currentOffset = this.$results.offset().top;
	    var nextTop = $highlighted.offset().top;
	    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
	
	    var offsetDelta = nextTop - currentOffset;
	    nextOffset -= $highlighted.outerHeight(false) * 2;
	
	    if (currentIndex <= 2) {
	      this.$results.scrollTop(0);
	    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
	      this.$results.scrollTop(nextOffset);
	    }
	  };
	
	  Results.prototype.template = function (result, container) {
	    var template = this.options.get('templateResult');
	    var escapeMarkup = this.options.get('escapeMarkup');
	
	    var content = template(result, container);
	
	    if (content == null) {
	      container.style.display = 'none';
	    } else if (typeof content === 'string') {
	      container.innerHTML = escapeMarkup(content);
	    } else {
	      $(container).append(content);
	    }
	  };
	
	  return Results;
	});
	
	S2.define('select2/keys',[
	
	], function () {
	  var KEYS = {
	    BACKSPACE: 8,
	    TAB: 9,
	    ENTER: 13,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    ESC: 27,
	    SPACE: 32,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    DELETE: 46
	  };
	
	  return KEYS;
	});
	
	S2.define('select2/selection/base',[
	  'jquery',
	  '../utils',
	  '../keys'
	], function ($, Utils, KEYS) {
	  function BaseSelection ($element, options) {
	    this.$element = $element;
	    this.options = options;
	
	    BaseSelection.__super__.constructor.call(this);
	  }
	
	  Utils.Extend(BaseSelection, Utils.Observable);
	
	  BaseSelection.prototype.render = function () {
	    var $selection = $(
	      '<span class="select2-selection" role="combobox" ' +
	      ' aria-haspopup="true" aria-expanded="false">' +
	      '</span>'
	    );
	
	    this._tabindex = 0;
	
	    if (this.$element.data('old-tabindex') != null) {
	      this._tabindex = this.$element.data('old-tabindex');
	    } else if (this.$element.attr('tabindex') != null) {
	      this._tabindex = this.$element.attr('tabindex');
	    }
	
	    $selection.attr('title', this.$element.attr('title'));
	    $selection.attr('tabindex', this._tabindex);
	
	    this.$selection = $selection;
	
	    return $selection;
	  };
	
	  BaseSelection.prototype.bind = function (container, $container) {
	    var self = this;
	
	    var id = container.id + '-container';
	    var resultsId = container.id + '-results';
	
	    this.container = container;
	
	    this.$selection.on('focus', function (evt) {
	      self.trigger('focus', evt);
	    });
	
	    this.$selection.on('blur', function (evt) {
	      self._handleBlur(evt);
	    });
	
	    this.$selection.on('keydown', function (evt) {
	      self.trigger('keypress', evt);
	
	      if (evt.which === KEYS.SPACE) {
	        evt.preventDefault();
	      }
	    });
	
	    container.on('results:focus', function (params) {
	      self.$selection.attr('aria-activedescendant', params.data._resultId);
	    });
	
	    container.on('selection:update', function (params) {
	      self.update(params.data);
	    });
	
	    container.on('open', function () {
	      // When the dropdown is open, aria-expanded="true"
	      self.$selection.attr('aria-expanded', 'true');
	      self.$selection.attr('aria-owns', resultsId);
	
	      self._attachCloseHandler(container);
	    });
	
	    container.on('close', function () {
	      // When the dropdown is closed, aria-expanded="false"
	      self.$selection.attr('aria-expanded', 'false');
	      self.$selection.removeAttr('aria-activedescendant');
	      self.$selection.removeAttr('aria-owns');
	
	      self.$selection.focus();
	
	      self._detachCloseHandler(container);
	    });
	
	    container.on('enable', function () {
	      self.$selection.attr('tabindex', self._tabindex);
	    });
	
	    container.on('disable', function () {
	      self.$selection.attr('tabindex', '-1');
	    });
	  };
	
	  BaseSelection.prototype._handleBlur = function (evt) {
	    var self = this;
	
	    // This needs to be delayed as the active element is the body when the tab
	    // key is pressed, possibly along with others.
	    window.setTimeout(function () {
	      // Don't trigger `blur` if the focus is still in the selection
	      if (
	        (document.activeElement == self.$selection[0]) ||
	        ($.contains(self.$selection[0], document.activeElement))
	      ) {
	        return;
	      }
	
	      self.trigger('blur', evt);
	    }, 1);
	  };
	
	  BaseSelection.prototype._attachCloseHandler = function (container) {
	    var self = this;
	
	    $(document.body).on('mousedown.select2.' + container.id, function (e) {
	      var $target = $(e.target);
	
	      var $select = $target.closest('.select2');
	
	      var $all = $('.select2.select2-container--open');
	
	      $all.each(function () {
	        var $this = $(this);
	
	        if (this == $select[0]) {
	          return;
	        }
	
	        var $element = $this.data('element');
	
	        $element.select2('close');
	      });
	    });
	  };
	
	  BaseSelection.prototype._detachCloseHandler = function (container) {
	    $(document.body).off('mousedown.select2.' + container.id);
	  };
	
	  BaseSelection.prototype.position = function ($selection, $container) {
	    var $selectionContainer = $container.find('.selection');
	    $selectionContainer.append($selection);
	  };
	
	  BaseSelection.prototype.destroy = function () {
	    this._detachCloseHandler(this.container);
	  };
	
	  BaseSelection.prototype.update = function (data) {
	    throw new Error('The `update` method must be defined in child classes.');
	  };
	
	  return BaseSelection;
	});
	
	S2.define('select2/selection/single',[
	  'jquery',
	  './base',
	  '../utils',
	  '../keys'
	], function ($, BaseSelection, Utils, KEYS) {
	  function SingleSelection () {
	    SingleSelection.__super__.constructor.apply(this, arguments);
	  }
	
	  Utils.Extend(SingleSelection, BaseSelection);
	
	  SingleSelection.prototype.render = function () {
	    var $selection = SingleSelection.__super__.render.call(this);
	
	    $selection.addClass('select2-selection--single');
	
	    $selection.html(
	      '<span class="select2-selection__rendered"></span>' +
	      '<span class="select2-selection__arrow" role="presentation">' +
	        '<b role="presentation"></b>' +
	      '</span>'
	    );
	
	    return $selection;
	  };
	
	  SingleSelection.prototype.bind = function (container, $container) {
	    var self = this;
	
	    SingleSelection.__super__.bind.apply(this, arguments);
	
	    var id = container.id + '-container';
	
	    this.$selection.find('.select2-selection__rendered').attr('id', id);
	    this.$selection.attr('aria-labelledby', id);
	
	    this.$selection.on('mousedown', function (evt) {
	      // Only respond to left clicks
	      if (evt.which !== 1) {
	        return;
	      }
	
	      self.trigger('toggle', {
	        originalEvent: evt
	      });
	    });
	
	    this.$selection.on('focus', function (evt) {
	      // User focuses on the container
	    });
	
	    this.$selection.on('blur', function (evt) {
	      // User exits the container
	    });
	
	    container.on('focus', function (evt) {
	      if (!container.isOpen()) {
	        self.$selection.focus();
	      }
	    });
	
	    container.on('selection:update', function (params) {
	      self.update(params.data);
	    });
	  };
	
	  SingleSelection.prototype.clear = function () {
	    this.$selection.find('.select2-selection__rendered').empty();
	  };
	
	  SingleSelection.prototype.display = function (data, container) {
	    var template = this.options.get('templateSelection');
	    var escapeMarkup = this.options.get('escapeMarkup');
	
	    return escapeMarkup(template(data, container));
	  };
	
	  SingleSelection.prototype.selectionContainer = function () {
	    return $('<span></span>');
	  };
	
	  SingleSelection.prototype.update = function (data) {
	    if (data.length === 0) {
	      this.clear();
	      return;
	    }
	
	    var selection = data[0];
	
	    var $rendered = this.$selection.find('.select2-selection__rendered');
	    var formatted = this.display(selection, $rendered);
	
	    $rendered.empty().append(formatted);
	    $rendered.prop('title', selection.title || selection.text);
	  };
	
	  return SingleSelection;
	});
	
	S2.define('select2/selection/multiple',[
	  'jquery',
	  './base',
	  '../utils'
	], function ($, BaseSelection, Utils) {
	  function MultipleSelection ($element, options) {
	    MultipleSelection.__super__.constructor.apply(this, arguments);
	  }
	
	  Utils.Extend(MultipleSelection, BaseSelection);
	
	  MultipleSelection.prototype.render = function () {
	    var $selection = MultipleSelection.__super__.render.call(this);
	
	    $selection.addClass('select2-selection--multiple');
	
	    $selection.html(
	      '<ul class="select2-selection__rendered"></ul>'
	    );
	
	    return $selection;
	  };
	
	  MultipleSelection.prototype.bind = function (container, $container) {
	    var self = this;
	
	    MultipleSelection.__super__.bind.apply(this, arguments);
	
	    this.$selection.on('click', function (evt) {
	      self.trigger('toggle', {
	        originalEvent: evt
	      });
	    });
	
	    this.$selection.on(
	      'click',
	      '.select2-selection__choice__remove',
	      function (evt) {
	        // Ignore the event if it is disabled
	        if (self.options.get('disabled')) {
	          return;
	        }
	
	        var $remove = $(this);
	        var $selection = $remove.parent();
	
	        var data = $selection.data('data');
	
	        self.trigger('unselect', {
	          originalEvent: evt,
	          data: data
	        });
	      }
	    );
	  };
	
	  MultipleSelection.prototype.clear = function () {
	    this.$selection.find('.select2-selection__rendered').empty();
	  };
	
	  MultipleSelection.prototype.display = function (data, container) {
	    var template = this.options.get('templateSelection');
	    var escapeMarkup = this.options.get('escapeMarkup');
	
	    return escapeMarkup(template(data, container));
	  };
	
	  MultipleSelection.prototype.selectionContainer = function () {
	    var $container = $(
	      '<li class="select2-selection__choice">' +
	        '<span class="select2-selection__choice__remove" role="presentation">' +
	          '&times;' +
	        '</span>' +
	      '</li>'
	    );
	
	    return $container;
	  };
	
	  MultipleSelection.prototype.update = function (data) {
	    this.clear();
	
	    if (data.length === 0) {
	      return;
	    }
	
	    var $selections = [];
	
	    for (var d = 0; d < data.length; d++) {
	      var selection = data[d];
	
	      var $selection = this.selectionContainer();
	      var formatted = this.display(selection, $selection);
	
	      $selection.append(formatted);
	      $selection.prop('title', selection.title || selection.text);
	
	      $selection.data('data', selection);
	
	      $selections.push($selection);
	    }
	
	    var $rendered = this.$selection.find('.select2-selection__rendered');
	
	    Utils.appendMany($rendered, $selections);
	  };
	
	  return MultipleSelection;
	});
	
	S2.define('select2/selection/placeholder',[
	  '../utils'
	], function (Utils) {
	  function Placeholder (decorated, $element, options) {
	    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
	
	    decorated.call(this, $element, options);
	  }
	
	  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
	    if (typeof placeholder === 'string') {
	      placeholder = {
	        id: '',
	        text: placeholder
	      };
	    }
	
	    return placeholder;
	  };
	
	  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
	    var $placeholder = this.selectionContainer();
	
	    $placeholder.html(this.display(placeholder));
	    $placeholder.addClass('select2-selection__placeholder')
	                .removeClass('select2-selection__choice');
	
	    return $placeholder;
	  };
	
	  Placeholder.prototype.update = function (decorated, data) {
	    var singlePlaceholder = (
	      data.length == 1 && data[0].id != this.placeholder.id
	    );
	    var multipleSelections = data.length > 1;
	
	    if (multipleSelections || singlePlaceholder) {
	      return decorated.call(this, data);
	    }
	
	    this.clear();
	
	    var $placeholder = this.createPlaceholder(this.placeholder);
	
	    this.$selection.find('.select2-selection__rendered').append($placeholder);
	  };
	
	  return Placeholder;
	});
	
	S2.define('select2/selection/allowClear',[
	  'jquery',
	  '../keys'
	], function ($, KEYS) {
	  function AllowClear () { }
	
	  AllowClear.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    decorated.call(this, container, $container);
	
	    if (this.placeholder == null) {
	      if (this.options.get('debug') && window.console && console.error) {
	        console.error(
	          'Select2: The `allowClear` option should be used in combination ' +
	          'with the `placeholder` option.'
	        );
	      }
	    }
	
	    this.$selection.on('mousedown', '.select2-selection__clear',
	      function (evt) {
	        self._handleClear(evt);
	    });
	
	    container.on('keypress', function (evt) {
	      self._handleKeyboardClear(evt, container);
	    });
	  };
	
	  AllowClear.prototype._handleClear = function (_, evt) {
	    // Ignore the event if it is disabled
	    if (this.options.get('disabled')) {
	      return;
	    }
	
	    var $clear = this.$selection.find('.select2-selection__clear');
	
	    // Ignore the event if nothing has been selected
	    if ($clear.length === 0) {
	      return;
	    }
	
	    evt.stopPropagation();
	
	    var data = $clear.data('data');
	
	    for (var d = 0; d < data.length; d++) {
	      var unselectData = {
	        data: data[d]
	      };
	
	      // Trigger the `unselect` event, so people can prevent it from being
	      // cleared.
	      this.trigger('unselect', unselectData);
	
	      // If the event was prevented, don't clear it out.
	      if (unselectData.prevented) {
	        return;
	      }
	    }
	
	    this.$element.val(this.placeholder.id).trigger('change');
	
	    this.trigger('toggle', {});
	  };
	
	  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
	    if (container.isOpen()) {
	      return;
	    }
	
	    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
	      this._handleClear(evt);
	    }
	  };
	
	  AllowClear.prototype.update = function (decorated, data) {
	    decorated.call(this, data);
	
	    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
	        data.length === 0) {
	      return;
	    }
	
	    var $remove = $(
	      '<span class="select2-selection__clear">' +
	        '&times;' +
	      '</span>'
	    );
	    $remove.data('data', data);
	
	    this.$selection.find('.select2-selection__rendered').prepend($remove);
	  };
	
	  return AllowClear;
	});
	
	S2.define('select2/selection/search',[
	  'jquery',
	  '../utils',
	  '../keys'
	], function ($, Utils, KEYS) {
	  function Search (decorated, $element, options) {
	    decorated.call(this, $element, options);
	  }
	
	  Search.prototype.render = function (decorated) {
	    var $search = $(
	      '<li class="select2-search select2-search--inline">' +
	        '<input class="select2-search__field" type="search" tabindex="-1"' +
	        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
	        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
	      '</li>'
	    );
	
	    this.$searchContainer = $search;
	    this.$search = $search.find('input');
	
	    var $rendered = decorated.call(this);
	
	    this._transferTabIndex();
	
	    return $rendered;
	  };
	
	  Search.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    decorated.call(this, container, $container);
	
	    container.on('open', function () {
	      self.$search.trigger('focus');
	    });
	
	    container.on('close', function () {
	      self.$search.val('');
	      self.$search.removeAttr('aria-activedescendant');
	      self.$search.trigger('focus');
	    });
	
	    container.on('enable', function () {
	      self.$search.prop('disabled', false);
	
	      self._transferTabIndex();
	    });
	
	    container.on('disable', function () {
	      self.$search.prop('disabled', true);
	    });
	
	    container.on('focus', function (evt) {
	      self.$search.trigger('focus');
	    });
	
	    container.on('results:focus', function (params) {
	      self.$search.attr('aria-activedescendant', params.id);
	    });
	
	    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
	      self.trigger('focus', evt);
	    });
	
	    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
	      self._handleBlur(evt);
	    });
	
	    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
	      evt.stopPropagation();
	
	      self.trigger('keypress', evt);
	
	      self._keyUpPrevented = evt.isDefaultPrevented();
	
	      var key = evt.which;
	
	      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
	        var $previousChoice = self.$searchContainer
	          .prev('.select2-selection__choice');
	
	        if ($previousChoice.length > 0) {
	          var item = $previousChoice.data('data');
	
	          self.searchRemoveChoice(item);
	
	          evt.preventDefault();
	        }
	      }
	    });
	
	    // Try to detect the IE version should the `documentMode` property that
	    // is stored on the document. This is only implemented in IE and is
	    // slightly cleaner than doing a user agent check.
	    // This property is not available in Edge, but Edge also doesn't have
	    // this bug.
	    var msie = document.documentMode;
	    var disableInputEvents = msie && msie <= 11;
	
	    // Workaround for browsers which do not support the `input` event
	    // This will prevent double-triggering of events for browsers which support
	    // both the `keyup` and `input` events.
	    this.$selection.on(
	      'input.searchcheck',
	      '.select2-search--inline',
	      function (evt) {
	        // IE will trigger the `input` event when a placeholder is used on a
	        // search box. To get around this issue, we are forced to ignore all
	        // `input` events in IE and keep using `keyup`.
	        if (disableInputEvents) {
	          self.$selection.off('input.search input.searchcheck');
	          return;
	        }
	
	        // Unbind the duplicated `keyup` event
	        self.$selection.off('keyup.search');
	      }
	    );
	
	    this.$selection.on(
	      'keyup.search input.search',
	      '.select2-search--inline',
	      function (evt) {
	        // IE will trigger the `input` event when a placeholder is used on a
	        // search box. To get around this issue, we are forced to ignore all
	        // `input` events in IE and keep using `keyup`.
	        if (disableInputEvents && evt.type === 'input') {
	          self.$selection.off('input.search input.searchcheck');
	          return;
	        }
	
	        var key = evt.which;
	
	        // We can freely ignore events from modifier keys
	        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
	          return;
	        }
	
	        // Tabbing will be handled during the `keydown` phase
	        if (key == KEYS.TAB) {
	          return;
	        }
	
	        self.handleSearch(evt);
	      }
	    );
	  };
	
	  /**
	   * This method will transfer the tabindex attribute from the rendered
	   * selection to the search box. This allows for the search box to be used as
	   * the primary focus instead of the selection container.
	   *
	   * @private
	   */
	  Search.prototype._transferTabIndex = function (decorated) {
	    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
	    this.$selection.attr('tabindex', '-1');
	  };
	
	  Search.prototype.createPlaceholder = function (decorated, placeholder) {
	    this.$search.attr('placeholder', placeholder.text);
	  };
	
	  Search.prototype.update = function (decorated, data) {
	    var searchHadFocus = this.$search[0] == document.activeElement;
	
	    this.$search.attr('placeholder', '');
	
	    decorated.call(this, data);
	
	    this.$selection.find('.select2-selection__rendered')
	                   .append(this.$searchContainer);
	
	    this.resizeSearch();
	    if (searchHadFocus) {
	      this.$search.focus();
	    }
	  };
	
	  Search.prototype.handleSearch = function () {
	    this.resizeSearch();
	
	    if (!this._keyUpPrevented) {
	      var input = this.$search.val();
	
	      this.trigger('query', {
	        term: input
	      });
	    }
	
	    this._keyUpPrevented = false;
	  };
	
	  Search.prototype.searchRemoveChoice = function (decorated, item) {
	    this.trigger('unselect', {
	      data: item
	    });
	
	    this.$search.val(item.text);
	    this.handleSearch();
	  };
	
	  Search.prototype.resizeSearch = function () {
	    this.$search.css('width', '25px');
	
	    var width = '';
	
	    if (this.$search.attr('placeholder') !== '') {
	      width = this.$selection.find('.select2-selection__rendered').innerWidth();
	    } else {
	      var minimumWidth = this.$search.val().length + 1;
	
	      width = (minimumWidth * 0.75) + 'em';
	    }
	
	    this.$search.css('width', width);
	  };
	
	  return Search;
	});
	
	S2.define('select2/selection/eventRelay',[
	  'jquery'
	], function ($) {
	  function EventRelay () { }
	
	  EventRelay.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	    var relayEvents = [
	      'open', 'opening',
	      'close', 'closing',
	      'select', 'selecting',
	      'unselect', 'unselecting'
	    ];
	
	    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];
	
	    decorated.call(this, container, $container);
	
	    container.on('*', function (name, params) {
	      // Ignore events that should not be relayed
	      if ($.inArray(name, relayEvents) === -1) {
	        return;
	      }
	
	      // The parameters should always be an object
	      params = params || {};
	
	      // Generate the jQuery event for the Select2 event
	      var evt = $.Event('select2:' + name, {
	        params: params
	      });
	
	      self.$element.trigger(evt);
	
	      // Only handle preventable events if it was one
	      if ($.inArray(name, preventableEvents) === -1) {
	        return;
	      }
	
	      params.prevented = evt.isDefaultPrevented();
	    });
	  };
	
	  return EventRelay;
	});
	
	S2.define('select2/translation',[
	  'jquery',
	  'require'
	], function ($, require) {
	  function Translation (dict) {
	    this.dict = dict || {};
	  }
	
	  Translation.prototype.all = function () {
	    return this.dict;
	  };
	
	  Translation.prototype.get = function (key) {
	    return this.dict[key];
	  };
	
	  Translation.prototype.extend = function (translation) {
	    this.dict = $.extend({}, translation.all(), this.dict);
	  };
	
	  // Static functions
	
	  Translation._cache = {};
	
	  Translation.loadPath = function (path) {
	    if (!(path in Translation._cache)) {
	      var translations = require(path);
	
	      Translation._cache[path] = translations;
	    }
	
	    return new Translation(Translation._cache[path]);
	  };
	
	  return Translation;
	});
	
	S2.define('select2/diacritics',[
	
	], function () {
	  var diacritics = {
	    '\u24B6': 'A',
	    '\uFF21': 'A',
	    '\u00C0': 'A',
	    '\u00C1': 'A',
	    '\u00C2': 'A',
	    '\u1EA6': 'A',
	    '\u1EA4': 'A',
	    '\u1EAA': 'A',
	    '\u1EA8': 'A',
	    '\u00C3': 'A',
	    '\u0100': 'A',
	    '\u0102': 'A',
	    '\u1EB0': 'A',
	    '\u1EAE': 'A',
	    '\u1EB4': 'A',
	    '\u1EB2': 'A',
	    '\u0226': 'A',
	    '\u01E0': 'A',
	    '\u00C4': 'A',
	    '\u01DE': 'A',
	    '\u1EA2': 'A',
	    '\u00C5': 'A',
	    '\u01FA': 'A',
	    '\u01CD': 'A',
	    '\u0200': 'A',
	    '\u0202': 'A',
	    '\u1EA0': 'A',
	    '\u1EAC': 'A',
	    '\u1EB6': 'A',
	    '\u1E00': 'A',
	    '\u0104': 'A',
	    '\u023A': 'A',
	    '\u2C6F': 'A',
	    '\uA732': 'AA',
	    '\u00C6': 'AE',
	    '\u01FC': 'AE',
	    '\u01E2': 'AE',
	    '\uA734': 'AO',
	    '\uA736': 'AU',
	    '\uA738': 'AV',
	    '\uA73A': 'AV',
	    '\uA73C': 'AY',
	    '\u24B7': 'B',
	    '\uFF22': 'B',
	    '\u1E02': 'B',
	    '\u1E04': 'B',
	    '\u1E06': 'B',
	    '\u0243': 'B',
	    '\u0182': 'B',
	    '\u0181': 'B',
	    '\u24B8': 'C',
	    '\uFF23': 'C',
	    '\u0106': 'C',
	    '\u0108': 'C',
	    '\u010A': 'C',
	    '\u010C': 'C',
	    '\u00C7': 'C',
	    '\u1E08': 'C',
	    '\u0187': 'C',
	    '\u023B': 'C',
	    '\uA73E': 'C',
	    '\u24B9': 'D',
	    '\uFF24': 'D',
	    '\u1E0A': 'D',
	    '\u010E': 'D',
	    '\u1E0C': 'D',
	    '\u1E10': 'D',
	    '\u1E12': 'D',
	    '\u1E0E': 'D',
	    '\u0110': 'D',
	    '\u018B': 'D',
	    '\u018A': 'D',
	    '\u0189': 'D',
	    '\uA779': 'D',
	    '\u01F1': 'DZ',
	    '\u01C4': 'DZ',
	    '\u01F2': 'Dz',
	    '\u01C5': 'Dz',
	    '\u24BA': 'E',
	    '\uFF25': 'E',
	    '\u00C8': 'E',
	    '\u00C9': 'E',
	    '\u00CA': 'E',
	    '\u1EC0': 'E',
	    '\u1EBE': 'E',
	    '\u1EC4': 'E',
	    '\u1EC2': 'E',
	    '\u1EBC': 'E',
	    '\u0112': 'E',
	    '\u1E14': 'E',
	    '\u1E16': 'E',
	    '\u0114': 'E',
	    '\u0116': 'E',
	    '\u00CB': 'E',
	    '\u1EBA': 'E',
	    '\u011A': 'E',
	    '\u0204': 'E',
	    '\u0206': 'E',
	    '\u1EB8': 'E',
	    '\u1EC6': 'E',
	    '\u0228': 'E',
	    '\u1E1C': 'E',
	    '\u0118': 'E',
	    '\u1E18': 'E',
	    '\u1E1A': 'E',
	    '\u0190': 'E',
	    '\u018E': 'E',
	    '\u24BB': 'F',
	    '\uFF26': 'F',
	    '\u1E1E': 'F',
	    '\u0191': 'F',
	    '\uA77B': 'F',
	    '\u24BC': 'G',
	    '\uFF27': 'G',
	    '\u01F4': 'G',
	    '\u011C': 'G',
	    '\u1E20': 'G',
	    '\u011E': 'G',
	    '\u0120': 'G',
	    '\u01E6': 'G',
	    '\u0122': 'G',
	    '\u01E4': 'G',
	    '\u0193': 'G',
	    '\uA7A0': 'G',
	    '\uA77D': 'G',
	    '\uA77E': 'G',
	    '\u24BD': 'H',
	    '\uFF28': 'H',
	    '\u0124': 'H',
	    '\u1E22': 'H',
	    '\u1E26': 'H',
	    '\u021E': 'H',
	    '\u1E24': 'H',
	    '\u1E28': 'H',
	    '\u1E2A': 'H',
	    '\u0126': 'H',
	    '\u2C67': 'H',
	    '\u2C75': 'H',
	    '\uA78D': 'H',
	    '\u24BE': 'I',
	    '\uFF29': 'I',
	    '\u00CC': 'I',
	    '\u00CD': 'I',
	    '\u00CE': 'I',
	    '\u0128': 'I',
	    '\u012A': 'I',
	    '\u012C': 'I',
	    '\u0130': 'I',
	    '\u00CF': 'I',
	    '\u1E2E': 'I',
	    '\u1EC8': 'I',
	    '\u01CF': 'I',
	    '\u0208': 'I',
	    '\u020A': 'I',
	    '\u1ECA': 'I',
	    '\u012E': 'I',
	    '\u1E2C': 'I',
	    '\u0197': 'I',
	    '\u24BF': 'J',
	    '\uFF2A': 'J',
	    '\u0134': 'J',
	    '\u0248': 'J',
	    '\u24C0': 'K',
	    '\uFF2B': 'K',
	    '\u1E30': 'K',
	    '\u01E8': 'K',
	    '\u1E32': 'K',
	    '\u0136': 'K',
	    '\u1E34': 'K',
	    '\u0198': 'K',
	    '\u2C69': 'K',
	    '\uA740': 'K',
	    '\uA742': 'K',
	    '\uA744': 'K',
	    '\uA7A2': 'K',
	    '\u24C1': 'L',
	    '\uFF2C': 'L',
	    '\u013F': 'L',
	    '\u0139': 'L',
	    '\u013D': 'L',
	    '\u1E36': 'L',
	    '\u1E38': 'L',
	    '\u013B': 'L',
	    '\u1E3C': 'L',
	    '\u1E3A': 'L',
	    '\u0141': 'L',
	    '\u023D': 'L',
	    '\u2C62': 'L',
	    '\u2C60': 'L',
	    '\uA748': 'L',
	    '\uA746': 'L',
	    '\uA780': 'L',
	    '\u01C7': 'LJ',
	    '\u01C8': 'Lj',
	    '\u24C2': 'M',
	    '\uFF2D': 'M',
	    '\u1E3E': 'M',
	    '\u1E40': 'M',
	    '\u1E42': 'M',
	    '\u2C6E': 'M',
	    '\u019C': 'M',
	    '\u24C3': 'N',
	    '\uFF2E': 'N',
	    '\u01F8': 'N',
	    '\u0143': 'N',
	    '\u00D1': 'N',
	    '\u1E44': 'N',
	    '\u0147': 'N',
	    '\u1E46': 'N',
	    '\u0145': 'N',
	    '\u1E4A': 'N',
	    '\u1E48': 'N',
	    '\u0220': 'N',
	    '\u019D': 'N',
	    '\uA790': 'N',
	    '\uA7A4': 'N',
	    '\u01CA': 'NJ',
	    '\u01CB': 'Nj',
	    '\u24C4': 'O',
	    '\uFF2F': 'O',
	    '\u00D2': 'O',
	    '\u00D3': 'O',
	    '\u00D4': 'O',
	    '\u1ED2': 'O',
	    '\u1ED0': 'O',
	    '\u1ED6': 'O',
	    '\u1ED4': 'O',
	    '\u00D5': 'O',
	    '\u1E4C': 'O',
	    '\u022C': 'O',
	    '\u1E4E': 'O',
	    '\u014C': 'O',
	    '\u1E50': 'O',
	    '\u1E52': 'O',
	    '\u014E': 'O',
	    '\u022E': 'O',
	    '\u0230': 'O',
	    '\u00D6': 'O',
	    '\u022A': 'O',
	    '\u1ECE': 'O',
	    '\u0150': 'O',
	    '\u01D1': 'O',
	    '\u020C': 'O',
	    '\u020E': 'O',
	    '\u01A0': 'O',
	    '\u1EDC': 'O',
	    '\u1EDA': 'O',
	    '\u1EE0': 'O',
	    '\u1EDE': 'O',
	    '\u1EE2': 'O',
	    '\u1ECC': 'O',
	    '\u1ED8': 'O',
	    '\u01EA': 'O',
	    '\u01EC': 'O',
	    '\u00D8': 'O',
	    '\u01FE': 'O',
	    '\u0186': 'O',
	    '\u019F': 'O',
	    '\uA74A': 'O',
	    '\uA74C': 'O',
	    '\u01A2': 'OI',
	    '\uA74E': 'OO',
	    '\u0222': 'OU',
	    '\u24C5': 'P',
	    '\uFF30': 'P',
	    '\u1E54': 'P',
	    '\u1E56': 'P',
	    '\u01A4': 'P',
	    '\u2C63': 'P',
	    '\uA750': 'P',
	    '\uA752': 'P',
	    '\uA754': 'P',
	    '\u24C6': 'Q',
	    '\uFF31': 'Q',
	    '\uA756': 'Q',
	    '\uA758': 'Q',
	    '\u024A': 'Q',
	    '\u24C7': 'R',
	    '\uFF32': 'R',
	    '\u0154': 'R',
	    '\u1E58': 'R',
	    '\u0158': 'R',
	    '\u0210': 'R',
	    '\u0212': 'R',
	    '\u1E5A': 'R',
	    '\u1E5C': 'R',
	    '\u0156': 'R',
	    '\u1E5E': 'R',
	    '\u024C': 'R',
	    '\u2C64': 'R',
	    '\uA75A': 'R',
	    '\uA7A6': 'R',
	    '\uA782': 'R',
	    '\u24C8': 'S',
	    '\uFF33': 'S',
	    '\u1E9E': 'S',
	    '\u015A': 'S',
	    '\u1E64': 'S',
	    '\u015C': 'S',
	    '\u1E60': 'S',
	    '\u0160': 'S',
	    '\u1E66': 'S',
	    '\u1E62': 'S',
	    '\u1E68': 'S',
	    '\u0218': 'S',
	    '\u015E': 'S',
	    '\u2C7E': 'S',
	    '\uA7A8': 'S',
	    '\uA784': 'S',
	    '\u24C9': 'T',
	    '\uFF34': 'T',
	    '\u1E6A': 'T',
	    '\u0164': 'T',
	    '\u1E6C': 'T',
	    '\u021A': 'T',
	    '\u0162': 'T',
	    '\u1E70': 'T',
	    '\u1E6E': 'T',
	    '\u0166': 'T',
	    '\u01AC': 'T',
	    '\u01AE': 'T',
	    '\u023E': 'T',
	    '\uA786': 'T',
	    '\uA728': 'TZ',
	    '\u24CA': 'U',
	    '\uFF35': 'U',
	    '\u00D9': 'U',
	    '\u00DA': 'U',
	    '\u00DB': 'U',
	    '\u0168': 'U',
	    '\u1E78': 'U',
	    '\u016A': 'U',
	    '\u1E7A': 'U',
	    '\u016C': 'U',
	    '\u00DC': 'U',
	    '\u01DB': 'U',
	    '\u01D7': 'U',
	    '\u01D5': 'U',
	    '\u01D9': 'U',
	    '\u1EE6': 'U',
	    '\u016E': 'U',
	    '\u0170': 'U',
	    '\u01D3': 'U',
	    '\u0214': 'U',
	    '\u0216': 'U',
	    '\u01AF': 'U',
	    '\u1EEA': 'U',
	    '\u1EE8': 'U',
	    '\u1EEE': 'U',
	    '\u1EEC': 'U',
	    '\u1EF0': 'U',
	    '\u1EE4': 'U',
	    '\u1E72': 'U',
	    '\u0172': 'U',
	    '\u1E76': 'U',
	    '\u1E74': 'U',
	    '\u0244': 'U',
	    '\u24CB': 'V',
	    '\uFF36': 'V',
	    '\u1E7C': 'V',
	    '\u1E7E': 'V',
	    '\u01B2': 'V',
	    '\uA75E': 'V',
	    '\u0245': 'V',
	    '\uA760': 'VY',
	    '\u24CC': 'W',
	    '\uFF37': 'W',
	    '\u1E80': 'W',
	    '\u1E82': 'W',
	    '\u0174': 'W',
	    '\u1E86': 'W',
	    '\u1E84': 'W',
	    '\u1E88': 'W',
	    '\u2C72': 'W',
	    '\u24CD': 'X',
	    '\uFF38': 'X',
	    '\u1E8A': 'X',
	    '\u1E8C': 'X',
	    '\u24CE': 'Y',
	    '\uFF39': 'Y',
	    '\u1EF2': 'Y',
	    '\u00DD': 'Y',
	    '\u0176': 'Y',
	    '\u1EF8': 'Y',
	    '\u0232': 'Y',
	    '\u1E8E': 'Y',
	    '\u0178': 'Y',
	    '\u1EF6': 'Y',
	    '\u1EF4': 'Y',
	    '\u01B3': 'Y',
	    '\u024E': 'Y',
	    '\u1EFE': 'Y',
	    '\u24CF': 'Z',
	    '\uFF3A': 'Z',
	    '\u0179': 'Z',
	    '\u1E90': 'Z',
	    '\u017B': 'Z',
	    '\u017D': 'Z',
	    '\u1E92': 'Z',
	    '\u1E94': 'Z',
	    '\u01B5': 'Z',
	    '\u0224': 'Z',
	    '\u2C7F': 'Z',
	    '\u2C6B': 'Z',
	    '\uA762': 'Z',
	    '\u24D0': 'a',
	    '\uFF41': 'a',
	    '\u1E9A': 'a',
	    '\u00E0': 'a',
	    '\u00E1': 'a',
	    '\u00E2': 'a',
	    '\u1EA7': 'a',
	    '\u1EA5': 'a',
	    '\u1EAB': 'a',
	    '\u1EA9': 'a',
	    '\u00E3': 'a',
	    '\u0101': 'a',
	    '\u0103': 'a',
	    '\u1EB1': 'a',
	    '\u1EAF': 'a',
	    '\u1EB5': 'a',
	    '\u1EB3': 'a',
	    '\u0227': 'a',
	    '\u01E1': 'a',
	    '\u00E4': 'a',
	    '\u01DF': 'a',
	    '\u1EA3': 'a',
	    '\u00E5': 'a',
	    '\u01FB': 'a',
	    '\u01CE': 'a',
	    '\u0201': 'a',
	    '\u0203': 'a',
	    '\u1EA1': 'a',
	    '\u1EAD': 'a',
	    '\u1EB7': 'a',
	    '\u1E01': 'a',
	    '\u0105': 'a',
	    '\u2C65': 'a',
	    '\u0250': 'a',
	    '\uA733': 'aa',
	    '\u00E6': 'ae',
	    '\u01FD': 'ae',
	    '\u01E3': 'ae',
	    '\uA735': 'ao',
	    '\uA737': 'au',
	    '\uA739': 'av',
	    '\uA73B': 'av',
	    '\uA73D': 'ay',
	    '\u24D1': 'b',
	    '\uFF42': 'b',
	    '\u1E03': 'b',
	    '\u1E05': 'b',
	    '\u1E07': 'b',
	    '\u0180': 'b',
	    '\u0183': 'b',
	    '\u0253': 'b',
	    '\u24D2': 'c',
	    '\uFF43': 'c',
	    '\u0107': 'c',
	    '\u0109': 'c',
	    '\u010B': 'c',
	    '\u010D': 'c',
	    '\u00E7': 'c',
	    '\u1E09': 'c',
	    '\u0188': 'c',
	    '\u023C': 'c',
	    '\uA73F': 'c',
	    '\u2184': 'c',
	    '\u24D3': 'd',
	    '\uFF44': 'd',
	    '\u1E0B': 'd',
	    '\u010F': 'd',
	    '\u1E0D': 'd',
	    '\u1E11': 'd',
	    '\u1E13': 'd',
	    '\u1E0F': 'd',
	    '\u0111': 'd',
	    '\u018C': 'd',
	    '\u0256': 'd',
	    '\u0257': 'd',
	    '\uA77A': 'd',
	    '\u01F3': 'dz',
	    '\u01C6': 'dz',
	    '\u24D4': 'e',
	    '\uFF45': 'e',
	    '\u00E8': 'e',
	    '\u00E9': 'e',
	    '\u00EA': 'e',
	    '\u1EC1': 'e',
	    '\u1EBF': 'e',
	    '\u1EC5': 'e',
	    '\u1EC3': 'e',
	    '\u1EBD': 'e',
	    '\u0113': 'e',
	    '\u1E15': 'e',
	    '\u1E17': 'e',
	    '\u0115': 'e',
	    '\u0117': 'e',
	    '\u00EB': 'e',
	    '\u1EBB': 'e',
	    '\u011B': 'e',
	    '\u0205': 'e',
	    '\u0207': 'e',
	    '\u1EB9': 'e',
	    '\u1EC7': 'e',
	    '\u0229': 'e',
	    '\u1E1D': 'e',
	    '\u0119': 'e',
	    '\u1E19': 'e',
	    '\u1E1B': 'e',
	    '\u0247': 'e',
	    '\u025B': 'e',
	    '\u01DD': 'e',
	    '\u24D5': 'f',
	    '\uFF46': 'f',
	    '\u1E1F': 'f',
	    '\u0192': 'f',
	    '\uA77C': 'f',
	    '\u24D6': 'g',
	    '\uFF47': 'g',
	    '\u01F5': 'g',
	    '\u011D': 'g',
	    '\u1E21': 'g',
	    '\u011F': 'g',
	    '\u0121': 'g',
	    '\u01E7': 'g',
	    '\u0123': 'g',
	    '\u01E5': 'g',
	    '\u0260': 'g',
	    '\uA7A1': 'g',
	    '\u1D79': 'g',
	    '\uA77F': 'g',
	    '\u24D7': 'h',
	    '\uFF48': 'h',
	    '\u0125': 'h',
	    '\u1E23': 'h',
	    '\u1E27': 'h',
	    '\u021F': 'h',
	    '\u1E25': 'h',
	    '\u1E29': 'h',
	    '\u1E2B': 'h',
	    '\u1E96': 'h',
	    '\u0127': 'h',
	    '\u2C68': 'h',
	    '\u2C76': 'h',
	    '\u0265': 'h',
	    '\u0195': 'hv',
	    '\u24D8': 'i',
	    '\uFF49': 'i',
	    '\u00EC': 'i',
	    '\u00ED': 'i',
	    '\u00EE': 'i',
	    '\u0129': 'i',
	    '\u012B': 'i',
	    '\u012D': 'i',
	    '\u00EF': 'i',
	    '\u1E2F': 'i',
	    '\u1EC9': 'i',
	    '\u01D0': 'i',
	    '\u0209': 'i',
	    '\u020B': 'i',
	    '\u1ECB': 'i',
	    '\u012F': 'i',
	    '\u1E2D': 'i',
	    '\u0268': 'i',
	    '\u0131': 'i',
	    '\u24D9': 'j',
	    '\uFF4A': 'j',
	    '\u0135': 'j',
	    '\u01F0': 'j',
	    '\u0249': 'j',
	    '\u24DA': 'k',
	    '\uFF4B': 'k',
	    '\u1E31': 'k',
	    '\u01E9': 'k',
	    '\u1E33': 'k',
	    '\u0137': 'k',
	    '\u1E35': 'k',
	    '\u0199': 'k',
	    '\u2C6A': 'k',
	    '\uA741': 'k',
	    '\uA743': 'k',
	    '\uA745': 'k',
	    '\uA7A3': 'k',
	    '\u24DB': 'l',
	    '\uFF4C': 'l',
	    '\u0140': 'l',
	    '\u013A': 'l',
	    '\u013E': 'l',
	    '\u1E37': 'l',
	    '\u1E39': 'l',
	    '\u013C': 'l',
	    '\u1E3D': 'l',
	    '\u1E3B': 'l',
	    '\u017F': 'l',
	    '\u0142': 'l',
	    '\u019A': 'l',
	    '\u026B': 'l',
	    '\u2C61': 'l',
	    '\uA749': 'l',
	    '\uA781': 'l',
	    '\uA747': 'l',
	    '\u01C9': 'lj',
	    '\u24DC': 'm',
	    '\uFF4D': 'm',
	    '\u1E3F': 'm',
	    '\u1E41': 'm',
	    '\u1E43': 'm',
	    '\u0271': 'm',
	    '\u026F': 'm',
	    '\u24DD': 'n',
	    '\uFF4E': 'n',
	    '\u01F9': 'n',
	    '\u0144': 'n',
	    '\u00F1': 'n',
	    '\u1E45': 'n',
	    '\u0148': 'n',
	    '\u1E47': 'n',
	    '\u0146': 'n',
	    '\u1E4B': 'n',
	    '\u1E49': 'n',
	    '\u019E': 'n',
	    '\u0272': 'n',
	    '\u0149': 'n',
	    '\uA791': 'n',
	    '\uA7A5': 'n',
	    '\u01CC': 'nj',
	    '\u24DE': 'o',
	    '\uFF4F': 'o',
	    '\u00F2': 'o',
	    '\u00F3': 'o',
	    '\u00F4': 'o',
	    '\u1ED3': 'o',
	    '\u1ED1': 'o',
	    '\u1ED7': 'o',
	    '\u1ED5': 'o',
	    '\u00F5': 'o',
	    '\u1E4D': 'o',
	    '\u022D': 'o',
	    '\u1E4F': 'o',
	    '\u014D': 'o',
	    '\u1E51': 'o',
	    '\u1E53': 'o',
	    '\u014F': 'o',
	    '\u022F': 'o',
	    '\u0231': 'o',
	    '\u00F6': 'o',
	    '\u022B': 'o',
	    '\u1ECF': 'o',
	    '\u0151': 'o',
	    '\u01D2': 'o',
	    '\u020D': 'o',
	    '\u020F': 'o',
	    '\u01A1': 'o',
	    '\u1EDD': 'o',
	    '\u1EDB': 'o',
	    '\u1EE1': 'o',
	    '\u1EDF': 'o',
	    '\u1EE3': 'o',
	    '\u1ECD': 'o',
	    '\u1ED9': 'o',
	    '\u01EB': 'o',
	    '\u01ED': 'o',
	    '\u00F8': 'o',
	    '\u01FF': 'o',
	    '\u0254': 'o',
	    '\uA74B': 'o',
	    '\uA74D': 'o',
	    '\u0275': 'o',
	    '\u01A3': 'oi',
	    '\u0223': 'ou',
	    '\uA74F': 'oo',
	    '\u24DF': 'p',
	    '\uFF50': 'p',
	    '\u1E55': 'p',
	    '\u1E57': 'p',
	    '\u01A5': 'p',
	    '\u1D7D': 'p',
	    '\uA751': 'p',
	    '\uA753': 'p',
	    '\uA755': 'p',
	    '\u24E0': 'q',
	    '\uFF51': 'q',
	    '\u024B': 'q',
	    '\uA757': 'q',
	    '\uA759': 'q',
	    '\u24E1': 'r',
	    '\uFF52': 'r',
	    '\u0155': 'r',
	    '\u1E59': 'r',
	    '\u0159': 'r',
	    '\u0211': 'r',
	    '\u0213': 'r',
	    '\u1E5B': 'r',
	    '\u1E5D': 'r',
	    '\u0157': 'r',
	    '\u1E5F': 'r',
	    '\u024D': 'r',
	    '\u027D': 'r',
	    '\uA75B': 'r',
	    '\uA7A7': 'r',
	    '\uA783': 'r',
	    '\u24E2': 's',
	    '\uFF53': 's',
	    '\u00DF': 's',
	    '\u015B': 's',
	    '\u1E65': 's',
	    '\u015D': 's',
	    '\u1E61': 's',
	    '\u0161': 's',
	    '\u1E67': 's',
	    '\u1E63': 's',
	    '\u1E69': 's',
	    '\u0219': 's',
	    '\u015F': 's',
	    '\u023F': 's',
	    '\uA7A9': 's',
	    '\uA785': 's',
	    '\u1E9B': 's',
	    '\u24E3': 't',
	    '\uFF54': 't',
	    '\u1E6B': 't',
	    '\u1E97': 't',
	    '\u0165': 't',
	    '\u1E6D': 't',
	    '\u021B': 't',
	    '\u0163': 't',
	    '\u1E71': 't',
	    '\u1E6F': 't',
	    '\u0167': 't',
	    '\u01AD': 't',
	    '\u0288': 't',
	    '\u2C66': 't',
	    '\uA787': 't',
	    '\uA729': 'tz',
	    '\u24E4': 'u',
	    '\uFF55': 'u',
	    '\u00F9': 'u',
	    '\u00FA': 'u',
	    '\u00FB': 'u',
	    '\u0169': 'u',
	    '\u1E79': 'u',
	    '\u016B': 'u',
	    '\u1E7B': 'u',
	    '\u016D': 'u',
	    '\u00FC': 'u',
	    '\u01DC': 'u',
	    '\u01D8': 'u',
	    '\u01D6': 'u',
	    '\u01DA': 'u',
	    '\u1EE7': 'u',
	    '\u016F': 'u',
	    '\u0171': 'u',
	    '\u01D4': 'u',
	    '\u0215': 'u',
	    '\u0217': 'u',
	    '\u01B0': 'u',
	    '\u1EEB': 'u',
	    '\u1EE9': 'u',
	    '\u1EEF': 'u',
	    '\u1EED': 'u',
	    '\u1EF1': 'u',
	    '\u1EE5': 'u',
	    '\u1E73': 'u',
	    '\u0173': 'u',
	    '\u1E77': 'u',
	    '\u1E75': 'u',
	    '\u0289': 'u',
	    '\u24E5': 'v',
	    '\uFF56': 'v',
	    '\u1E7D': 'v',
	    '\u1E7F': 'v',
	    '\u028B': 'v',
	    '\uA75F': 'v',
	    '\u028C': 'v',
	    '\uA761': 'vy',
	    '\u24E6': 'w',
	    '\uFF57': 'w',
	    '\u1E81': 'w',
	    '\u1E83': 'w',
	    '\u0175': 'w',
	    '\u1E87': 'w',
	    '\u1E85': 'w',
	    '\u1E98': 'w',
	    '\u1E89': 'w',
	    '\u2C73': 'w',
	    '\u24E7': 'x',
	    '\uFF58': 'x',
	    '\u1E8B': 'x',
	    '\u1E8D': 'x',
	    '\u24E8': 'y',
	    '\uFF59': 'y',
	    '\u1EF3': 'y',
	    '\u00FD': 'y',
	    '\u0177': 'y',
	    '\u1EF9': 'y',
	    '\u0233': 'y',
	    '\u1E8F': 'y',
	    '\u00FF': 'y',
	    '\u1EF7': 'y',
	    '\u1E99': 'y',
	    '\u1EF5': 'y',
	    '\u01B4': 'y',
	    '\u024F': 'y',
	    '\u1EFF': 'y',
	    '\u24E9': 'z',
	    '\uFF5A': 'z',
	    '\u017A': 'z',
	    '\u1E91': 'z',
	    '\u017C': 'z',
	    '\u017E': 'z',
	    '\u1E93': 'z',
	    '\u1E95': 'z',
	    '\u01B6': 'z',
	    '\u0225': 'z',
	    '\u0240': 'z',
	    '\u2C6C': 'z',
	    '\uA763': 'z',
	    '\u0386': '\u0391',
	    '\u0388': '\u0395',
	    '\u0389': '\u0397',
	    '\u038A': '\u0399',
	    '\u03AA': '\u0399',
	    '\u038C': '\u039F',
	    '\u038E': '\u03A5',
	    '\u03AB': '\u03A5',
	    '\u038F': '\u03A9',
	    '\u03AC': '\u03B1',
	    '\u03AD': '\u03B5',
	    '\u03AE': '\u03B7',
	    '\u03AF': '\u03B9',
	    '\u03CA': '\u03B9',
	    '\u0390': '\u03B9',
	    '\u03CC': '\u03BF',
	    '\u03CD': '\u03C5',
	    '\u03CB': '\u03C5',
	    '\u03B0': '\u03C5',
	    '\u03C9': '\u03C9',
	    '\u03C2': '\u03C3'
	  };
	
	  return diacritics;
	});
	
	S2.define('select2/data/base',[
	  '../utils'
	], function (Utils) {
	  function BaseAdapter ($element, options) {
	    BaseAdapter.__super__.constructor.call(this);
	  }
	
	  Utils.Extend(BaseAdapter, Utils.Observable);
	
	  BaseAdapter.prototype.current = function (callback) {
	    throw new Error('The `current` method must be defined in child classes.');
	  };
	
	  BaseAdapter.prototype.query = function (params, callback) {
	    throw new Error('The `query` method must be defined in child classes.');
	  };
	
	  BaseAdapter.prototype.bind = function (container, $container) {
	    // Can be implemented in subclasses
	  };
	
	  BaseAdapter.prototype.destroy = function () {
	    // Can be implemented in subclasses
	  };
	
	  BaseAdapter.prototype.generateResultId = function (container, data) {
	    var id = container.id + '-result-';
	
	    id += Utils.generateChars(4);
	
	    if (data.id != null) {
	      id += '-' + data.id.toString();
	    } else {
	      id += '-' + Utils.generateChars(4);
	    }
	    return id;
	  };
	
	  return BaseAdapter;
	});
	
	S2.define('select2/data/select',[
	  './base',
	  '../utils',
	  'jquery'
	], function (BaseAdapter, Utils, $) {
	  function SelectAdapter ($element, options) {
	    this.$element = $element;
	    this.options = options;
	
	    SelectAdapter.__super__.constructor.call(this);
	  }
	
	  Utils.Extend(SelectAdapter, BaseAdapter);
	
	  SelectAdapter.prototype.current = function (callback) {
	    var data = [];
	    var self = this;
	
	    this.$element.find(':selected').each(function () {
	      var $option = $(this);
	
	      var option = self.item($option);
	
	      data.push(option);
	    });
	
	    callback(data);
	  };
	
	  SelectAdapter.prototype.select = function (data) {
	    var self = this;
	
	    data.selected = true;
	
	    // If data.element is a DOM node, use it instead
	    if ($(data.element).is('option')) {
	      data.element.selected = true;
	
	      this.$element.trigger('change');
	
	      return;
	    }
	
	    if (this.$element.prop('multiple')) {
	      this.current(function (currentData) {
	        var val = [];
	
	        data = [data];
	        data.push.apply(data, currentData);
	
	        for (var d = 0; d < data.length; d++) {
	          var id = data[d].id;
	
	          if ($.inArray(id, val) === -1) {
	            val.push(id);
	          }
	        }
	
	        self.$element.val(val);
	        self.$element.trigger('change');
	      });
	    } else {
	      var val = data.id;
	
	      this.$element.val(val);
	      this.$element.trigger('change');
	    }
	  };
	
	  SelectAdapter.prototype.unselect = function (data) {
	    var self = this;
	
	    if (!this.$element.prop('multiple')) {
	      return;
	    }
	
	    data.selected = false;
	
	    if ($(data.element).is('option')) {
	      data.element.selected = false;
	
	      this.$element.trigger('change');
	
	      return;
	    }
	
	    this.current(function (currentData) {
	      var val = [];
	
	      for (var d = 0; d < currentData.length; d++) {
	        var id = currentData[d].id;
	
	        if (id !== data.id && $.inArray(id, val) === -1) {
	          val.push(id);
	        }
	      }
	
	      self.$element.val(val);
	
	      self.$element.trigger('change');
	    });
	  };
	
	  SelectAdapter.prototype.bind = function (container, $container) {
	    var self = this;
	
	    this.container = container;
	
	    container.on('select', function (params) {
	      self.select(params.data);
	    });
	
	    container.on('unselect', function (params) {
	      self.unselect(params.data);
	    });
	  };
	
	  SelectAdapter.prototype.destroy = function () {
	    // Remove anything added to child elements
	    this.$element.find('*').each(function () {
	      // Remove any custom data set by Select2
	      $.removeData(this, 'data');
	    });
	  };
	
	  SelectAdapter.prototype.query = function (params, callback) {
	    var data = [];
	    var self = this;
	
	    var $options = this.$element.children();
	
	    $options.each(function () {
	      var $option = $(this);
	
	      if (!$option.is('option') && !$option.is('optgroup')) {
	        return;
	      }
	
	      var option = self.item($option);
	
	      var matches = self.matches(params, option);
	
	      if (matches !== null) {
	        data.push(matches);
	      }
	    });
	
	    callback({
	      results: data
	    });
	  };
	
	  SelectAdapter.prototype.addOptions = function ($options) {
	    Utils.appendMany(this.$element, $options);
	  };
	
	  SelectAdapter.prototype.option = function (data) {
	    var option;
	
	    if (data.children) {
	      option = document.createElement('optgroup');
	      option.label = data.text;
	    } else {
	      option = document.createElement('option');
	
	      if (option.textContent !== undefined) {
	        option.textContent = data.text;
	      } else {
	        option.innerText = data.text;
	      }
	    }
	
	    if (data.id) {
	      option.value = data.id;
	    }
	
	    if (data.disabled) {
	      option.disabled = true;
	    }
	
	    if (data.selected) {
	      option.selected = true;
	    }
	
	    if (data.title) {
	      option.title = data.title;
	    }
	
	    var $option = $(option);
	
	    var normalizedData = this._normalizeItem(data);
	    normalizedData.element = option;
	
	    // Override the option's data with the combined data
	    $.data(option, 'data', normalizedData);
	
	    return $option;
	  };
	
	  SelectAdapter.prototype.item = function ($option) {
	    var data = {};
	
	    data = $.data($option[0], 'data');
	
	    if (data != null) {
	      return data;
	    }
	
	    if ($option.is('option')) {
	      data = {
	        id: $option.val(),
	        text: $option.text(),
	        disabled: $option.prop('disabled'),
	        selected: $option.prop('selected'),
	        title: $option.prop('title')
	      };
	    } else if ($option.is('optgroup')) {
	      data = {
	        text: $option.prop('label'),
	        children: [],
	        title: $option.prop('title')
	      };
	
	      var $children = $option.children('option');
	      var children = [];
	
	      for (var c = 0; c < $children.length; c++) {
	        var $child = $($children[c]);
	
	        var child = this.item($child);
	
	        children.push(child);
	      }
	
	      data.children = children;
	    }
	
	    data = this._normalizeItem(data);
	    data.element = $option[0];
	
	    $.data($option[0], 'data', data);
	
	    return data;
	  };
	
	  SelectAdapter.prototype._normalizeItem = function (item) {
	    if (!$.isPlainObject(item)) {
	      item = {
	        id: item,
	        text: item
	      };
	    }
	
	    item = $.extend({}, {
	      text: ''
	    }, item);
	
	    var defaults = {
	      selected: false,
	      disabled: false
	    };
	
	    if (item.id != null) {
	      item.id = item.id.toString();
	    }
	
	    if (item.text != null) {
	      item.text = item.text.toString();
	    }
	
	    if (item._resultId == null && item.id && this.container != null) {
	      item._resultId = this.generateResultId(this.container, item);
	    }
	
	    return $.extend({}, defaults, item);
	  };
	
	  SelectAdapter.prototype.matches = function (params, data) {
	    var matcher = this.options.get('matcher');
	
	    return matcher(params, data);
	  };
	
	  return SelectAdapter;
	});
	
	S2.define('select2/data/array',[
	  './select',
	  '../utils',
	  'jquery'
	], function (SelectAdapter, Utils, $) {
	  function ArrayAdapter ($element, options) {
	    var data = options.get('data') || [];
	
	    ArrayAdapter.__super__.constructor.call(this, $element, options);
	
	    this.addOptions(this.convertToOptions(data));
	  }
	
	  Utils.Extend(ArrayAdapter, SelectAdapter);
	
	  ArrayAdapter.prototype.select = function (data) {
	    var $option = this.$element.find('option').filter(function (i, elm) {
	      return elm.value == data.id.toString();
	    });
	
	    if ($option.length === 0) {
	      $option = this.option(data);
	
	      this.addOptions($option);
	    }
	
	    ArrayAdapter.__super__.select.call(this, data);
	  };
	
	  ArrayAdapter.prototype.convertToOptions = function (data) {
	    var self = this;
	
	    var $existing = this.$element.find('option');
	    var existingIds = $existing.map(function () {
	      return self.item($(this)).id;
	    }).get();
	
	    var $options = [];
	
	    // Filter out all items except for the one passed in the argument
	    function onlyItem (item) {
	      return function () {
	        return $(this).val() == item.id;
	      };
	    }
	
	    for (var d = 0; d < data.length; d++) {
	      var item = this._normalizeItem(data[d]);
	
	      // Skip items which were pre-loaded, only merge the data
	      if ($.inArray(item.id, existingIds) >= 0) {
	        var $existingOption = $existing.filter(onlyItem(item));
	
	        var existingData = this.item($existingOption);
	        var newData = $.extend(true, {}, item, existingData);
	
	        var $newOption = this.option(newData);
	
	        $existingOption.replaceWith($newOption);
	
	        continue;
	      }
	
	      var $option = this.option(item);
	
	      if (item.children) {
	        var $children = this.convertToOptions(item.children);
	
	        Utils.appendMany($option, $children);
	      }
	
	      $options.push($option);
	    }
	
	    return $options;
	  };
	
	  return ArrayAdapter;
	});
	
	S2.define('select2/data/ajax',[
	  './array',
	  '../utils',
	  'jquery'
	], function (ArrayAdapter, Utils, $) {
	  function AjaxAdapter ($element, options) {
	    this.ajaxOptions = this._applyDefaults(options.get('ajax'));
	
	    if (this.ajaxOptions.processResults != null) {
	      this.processResults = this.ajaxOptions.processResults;
	    }
	
	    AjaxAdapter.__super__.constructor.call(this, $element, options);
	  }
	
	  Utils.Extend(AjaxAdapter, ArrayAdapter);
	
	  AjaxAdapter.prototype._applyDefaults = function (options) {
	    var defaults = {
	      data: function (params) {
	        return $.extend({}, params, {
	          q: params.term
	        });
	      },
	      transport: function (params, success, failure) {
	        var $request = $.ajax(params);
	
	        $request.then(success);
	        $request.fail(failure);
	
	        return $request;
	      }
	    };
	
	    return $.extend({}, defaults, options, true);
	  };
	
	  AjaxAdapter.prototype.processResults = function (results) {
	    return results;
	  };
	
	  AjaxAdapter.prototype.query = function (params, callback) {
	    var matches = [];
	    var self = this;
	
	    if (this._request != null) {
	      // JSONP requests cannot always be aborted
	      if ($.isFunction(this._request.abort)) {
	        this._request.abort();
	      }
	
	      this._request = null;
	    }
	
	    var options = $.extend({
	      type: 'GET'
	    }, this.ajaxOptions);
	
	    if (typeof options.url === 'function') {
	      options.url = options.url.call(this.$element, params);
	    }
	
	    if (typeof options.data === 'function') {
	      options.data = options.data.call(this.$element, params);
	    }
	
	    function request () {
	      var $request = options.transport(options, function (data) {
	        var results = self.processResults(data, params);
	
	        if (self.options.get('debug') && window.console && console.error) {
	          // Check to make sure that the response included a `results` key.
	          if (!results || !results.results || !$.isArray(results.results)) {
	            console.error(
	              'Select2: The AJAX results did not return an array in the ' +
	              '`results` key of the response.'
	            );
	          }
	        }
	
	        callback(results);
	      }, function () {
	        // Attempt to detect if a request was aborted
	        // Only works if the transport exposes a status property
	        if ($request.status && $request.status === '0') {
	          return;
	        }
	
	        self.trigger('results:message', {
	          message: 'errorLoading'
	        });
	      });
	
	      self._request = $request;
	    }
	
	    if (this.ajaxOptions.delay && params.term != null) {
	      if (this._queryTimeout) {
	        window.clearTimeout(this._queryTimeout);
	      }
	
	      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
	    } else {
	      request();
	    }
	  };
	
	  return AjaxAdapter;
	});
	
	S2.define('select2/data/tags',[
	  'jquery'
	], function ($) {
	  function Tags (decorated, $element, options) {
	    var tags = options.get('tags');
	
	    var createTag = options.get('createTag');
	
	    if (createTag !== undefined) {
	      this.createTag = createTag;
	    }
	
	    var insertTag = options.get('insertTag');
	
	    if (insertTag !== undefined) {
	        this.insertTag = insertTag;
	    }
	
	    decorated.call(this, $element, options);
	
	    if ($.isArray(tags)) {
	      for (var t = 0; t < tags.length; t++) {
	        var tag = tags[t];
	        var item = this._normalizeItem(tag);
	
	        var $option = this.option(item);
	
	        this.$element.append($option);
	      }
	    }
	  }
	
	  Tags.prototype.query = function (decorated, params, callback) {
	    var self = this;
	
	    this._removeOldTags();
	
	    if (params.term == null || params.page != null) {
	      decorated.call(this, params, callback);
	      return;
	    }
	
	    function wrapper (obj, child) {
	      var data = obj.results;
	
	      for (var i = 0; i < data.length; i++) {
	        var option = data[i];
	
	        var checkChildren = (
	          option.children != null &&
	          !wrapper({
	            results: option.children
	          }, true)
	        );
	
	        var checkText = option.text === params.term;
	
	        if (checkText || checkChildren) {
	          if (child) {
	            return false;
	          }
	
	          obj.data = data;
	          callback(obj);
	
	          return;
	        }
	      }
	
	      if (child) {
	        return true;
	      }
	
	      var tag = self.createTag(params);
	
	      if (tag != null) {
	        var $option = self.option(tag);
	        $option.attr('data-select2-tag', true);
	
	        self.addOptions([$option]);
	
	        self.insertTag(data, tag);
	      }
	
	      obj.results = data;
	
	      callback(obj);
	    }
	
	    decorated.call(this, params, wrapper);
	  };
	
	  Tags.prototype.createTag = function (decorated, params) {
	    var term = $.trim(params.term);
	
	    if (term === '') {
	      return null;
	    }
	
	    return {
	      id: term,
	      text: term
	    };
	  };
	
	  Tags.prototype.insertTag = function (_, data, tag) {
	    data.unshift(tag);
	  };
	
	  Tags.prototype._removeOldTags = function (_) {
	    var tag = this._lastTag;
	
	    var $options = this.$element.find('option[data-select2-tag]');
	
	    $options.each(function () {
	      if (this.selected) {
	        return;
	      }
	
	      $(this).remove();
	    });
	  };
	
	  return Tags;
	});
	
	S2.define('select2/data/tokenizer',[
	  'jquery'
	], function ($) {
	  function Tokenizer (decorated, $element, options) {
	    var tokenizer = options.get('tokenizer');
	
	    if (tokenizer !== undefined) {
	      this.tokenizer = tokenizer;
	    }
	
	    decorated.call(this, $element, options);
	  }
	
	  Tokenizer.prototype.bind = function (decorated, container, $container) {
	    decorated.call(this, container, $container);
	
	    this.$search =  container.dropdown.$search || container.selection.$search ||
	      $container.find('.select2-search__field');
	  };
	
	  Tokenizer.prototype.query = function (decorated, params, callback) {
	    var self = this;
	
	    function createAndSelect (data) {
	      // Normalize the data object so we can use it for checks
	      var item = self._normalizeItem(data);
	
	      // Check if the data object already exists as a tag
	      // Select it if it doesn't
	      var $existingOptions = self.$element.find('option').filter(function () {
	        return $(this).val() === item.id;
	      });
	
	      // If an existing option wasn't found for it, create the option
	      if (!$existingOptions.length) {
	        var $option = self.option(item);
	        $option.attr('data-select2-tag', true);
	
	        self._removeOldTags();
	        self.addOptions([$option]);
	      }
	
	      // Select the item, now that we know there is an option for it
	      select(item);
	    }
	
	    function select (data) {
	      self.trigger('select', {
	        data: data
	      });
	    }
	
	    params.term = params.term || '';
	
	    var tokenData = this.tokenizer(params, this.options, createAndSelect);
	
	    if (tokenData.term !== params.term) {
	      // Replace the search term if we have the search box
	      if (this.$search.length) {
	        this.$search.val(tokenData.term);
	        this.$search.focus();
	      }
	
	      params.term = tokenData.term;
	    }
	
	    decorated.call(this, params, callback);
	  };
	
	  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
	    var separators = options.get('tokenSeparators') || [];
	    var term = params.term;
	    var i = 0;
	
	    var createTag = this.createTag || function (params) {
	      return {
	        id: params.term,
	        text: params.term
	      };
	    };
	
	    while (i < term.length) {
	      var termChar = term[i];
	
	      if ($.inArray(termChar, separators) === -1) {
	        i++;
	
	        continue;
	      }
	
	      var part = term.substr(0, i);
	      var partParams = $.extend({}, params, {
	        term: part
	      });
	
	      var data = createTag(partParams);
	
	      if (data == null) {
	        i++;
	        continue;
	      }
	
	      callback(data);
	
	      // Reset the term to not include the tokenized portion
	      term = term.substr(i + 1) || '';
	      i = 0;
	    }
	
	    return {
	      term: term
	    };
	  };
	
	  return Tokenizer;
	});
	
	S2.define('select2/data/minimumInputLength',[
	
	], function () {
	  function MinimumInputLength (decorated, $e, options) {
	    this.minimumInputLength = options.get('minimumInputLength');
	
	    decorated.call(this, $e, options);
	  }
	
	  MinimumInputLength.prototype.query = function (decorated, params, callback) {
	    params.term = params.term || '';
	
	    if (params.term.length < this.minimumInputLength) {
	      this.trigger('results:message', {
	        message: 'inputTooShort',
	        args: {
	          minimum: this.minimumInputLength,
	          input: params.term,
	          params: params
	        }
	      });
	
	      return;
	    }
	
	    decorated.call(this, params, callback);
	  };
	
	  return MinimumInputLength;
	});
	
	S2.define('select2/data/maximumInputLength',[
	
	], function () {
	  function MaximumInputLength (decorated, $e, options) {
	    this.maximumInputLength = options.get('maximumInputLength');
	
	    decorated.call(this, $e, options);
	  }
	
	  MaximumInputLength.prototype.query = function (decorated, params, callback) {
	    params.term = params.term || '';
	
	    if (this.maximumInputLength > 0 &&
	        params.term.length > this.maximumInputLength) {
	      this.trigger('results:message', {
	        message: 'inputTooLong',
	        args: {
	          maximum: this.maximumInputLength,
	          input: params.term,
	          params: params
	        }
	      });
	
	      return;
	    }
	
	    decorated.call(this, params, callback);
	  };
	
	  return MaximumInputLength;
	});
	
	S2.define('select2/data/maximumSelectionLength',[
	
	], function (){
	  function MaximumSelectionLength (decorated, $e, options) {
	    this.maximumSelectionLength = options.get('maximumSelectionLength');
	
	    decorated.call(this, $e, options);
	  }
	
	  MaximumSelectionLength.prototype.query =
	    function (decorated, params, callback) {
	      var self = this;
	
	      this.current(function (currentData) {
	        var count = currentData != null ? currentData.length : 0;
	        if (self.maximumSelectionLength > 0 &&
	          count >= self.maximumSelectionLength) {
	          self.trigger('results:message', {
	            message: 'maximumSelected',
	            args: {
	              maximum: self.maximumSelectionLength
	            }
	          });
	          return;
	        }
	        decorated.call(self, params, callback);
	      });
	  };
	
	  return MaximumSelectionLength;
	});
	
	S2.define('select2/dropdown',[
	  'jquery',
	  './utils'
	], function ($, Utils) {
	  function Dropdown ($element, options) {
	    this.$element = $element;
	    this.options = options;
	
	    Dropdown.__super__.constructor.call(this);
	  }
	
	  Utils.Extend(Dropdown, Utils.Observable);
	
	  Dropdown.prototype.render = function () {
	    var $dropdown = $(
	      '<span class="select2-dropdown">' +
	        '<span class="select2-results"></span>' +
	      '</span>'
	    );
	
	    $dropdown.attr('dir', this.options.get('dir'));
	
	    this.$dropdown = $dropdown;
	
	    return $dropdown;
	  };
	
	  Dropdown.prototype.bind = function () {
	    // Should be implemented in subclasses
	  };
	
	  Dropdown.prototype.position = function ($dropdown, $container) {
	    // Should be implmented in subclasses
	  };
	
	  Dropdown.prototype.destroy = function () {
	    // Remove the dropdown from the DOM
	    this.$dropdown.remove();
	  };
	
	  return Dropdown;
	});
	
	S2.define('select2/dropdown/search',[
	  'jquery',
	  '../utils'
	], function ($, Utils) {
	  function Search () { }
	
	  Search.prototype.render = function (decorated) {
	    var $rendered = decorated.call(this);
	
	    var $search = $(
	      '<span class="select2-search select2-search--dropdown">' +
	        '<input class="select2-search__field" type="search" tabindex="-1"' +
	        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
	        ' spellcheck="false" role="textbox" />' +
	      '</span>'
	    );
	
	    this.$searchContainer = $search;
	    this.$search = $search.find('input');
	
	    $rendered.prepend($search);
	
	    return $rendered;
	  };
	
	  Search.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    decorated.call(this, container, $container);
	
	    this.$search.on('keydown', function (evt) {
	      self.trigger('keypress', evt);
	
	      self._keyUpPrevented = evt.isDefaultPrevented();
	    });
	
	    // Workaround for browsers which do not support the `input` event
	    // This will prevent double-triggering of events for browsers which support
	    // both the `keyup` and `input` events.
	    this.$search.on('input', function (evt) {
	      // Unbind the duplicated `keyup` event
	      $(this).off('keyup');
	    });
	
	    this.$search.on('keyup input', function (evt) {
	      self.handleSearch(evt);
	    });
	
	    container.on('open', function () {
	      self.$search.attr('tabindex', 0);
	
	      self.$search.focus();
	
	      window.setTimeout(function () {
	        self.$search.focus();
	      }, 0);
	    });
	
	    container.on('close', function () {
	      self.$search.attr('tabindex', -1);
	
	      self.$search.val('');
	    });
	
	    container.on('focus', function () {
	      if (container.isOpen()) {
	        self.$search.focus();
	      }
	    });
	
	    container.on('results:all', function (params) {
	      if (params.query.term == null || params.query.term === '') {
	        var showSearch = self.showSearch(params);
	
	        if (showSearch) {
	          self.$searchContainer.removeClass('select2-search--hide');
	        } else {
	          self.$searchContainer.addClass('select2-search--hide');
	        }
	      }
	    });
	  };
	
	  Search.prototype.handleSearch = function (evt) {
	    if (!this._keyUpPrevented) {
	      var input = this.$search.val();
	
	      this.trigger('query', {
	        term: input
	      });
	    }
	
	    this._keyUpPrevented = false;
	  };
	
	  Search.prototype.showSearch = function (_, params) {
	    return true;
	  };
	
	  return Search;
	});
	
	S2.define('select2/dropdown/hidePlaceholder',[
	
	], function () {
	  function HidePlaceholder (decorated, $element, options, dataAdapter) {
	    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
	
	    decorated.call(this, $element, options, dataAdapter);
	  }
	
	  HidePlaceholder.prototype.append = function (decorated, data) {
	    data.results = this.removePlaceholder(data.results);
	
	    decorated.call(this, data);
	  };
	
	  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
	    if (typeof placeholder === 'string') {
	      placeholder = {
	        id: '',
	        text: placeholder
	      };
	    }
	
	    return placeholder;
	  };
	
	  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
	    var modifiedData = data.slice(0);
	
	    for (var d = data.length - 1; d >= 0; d--) {
	      var item = data[d];
	
	      if (this.placeholder.id === item.id) {
	        modifiedData.splice(d, 1);
	      }
	    }
	
	    return modifiedData;
	  };
	
	  return HidePlaceholder;
	});
	
	S2.define('select2/dropdown/infiniteScroll',[
	  'jquery'
	], function ($) {
	  function InfiniteScroll (decorated, $element, options, dataAdapter) {
	    this.lastParams = {};
	
	    decorated.call(this, $element, options, dataAdapter);
	
	    this.$loadingMore = this.createLoadingMore();
	    this.loading = false;
	  }
	
	  InfiniteScroll.prototype.append = function (decorated, data) {
	    this.$loadingMore.remove();
	    this.loading = false;
	
	    decorated.call(this, data);
	
	    if (this.showLoadingMore(data)) {
	      this.$results.append(this.$loadingMore);
	    }
	  };
	
	  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    decorated.call(this, container, $container);
	
	    container.on('query', function (params) {
	      self.lastParams = params;
	      self.loading = true;
	    });
	
	    container.on('query:append', function (params) {
	      self.lastParams = params;
	      self.loading = true;
	    });
	
	    this.$results.on('scroll', function () {
	      var isLoadMoreVisible = $.contains(
	        document.documentElement,
	        self.$loadingMore[0]
	      );
	
	      if (self.loading || !isLoadMoreVisible) {
	        return;
	      }
	
	      var currentOffset = self.$results.offset().top +
	        self.$results.outerHeight(false);
	      var loadingMoreOffset = self.$loadingMore.offset().top +
	        self.$loadingMore.outerHeight(false);
	
	      if (currentOffset + 50 >= loadingMoreOffset) {
	        self.loadMore();
	      }
	    });
	  };
	
	  InfiniteScroll.prototype.loadMore = function () {
	    this.loading = true;
	
	    var params = $.extend({}, {page: 1}, this.lastParams);
	
	    params.page++;
	
	    this.trigger('query:append', params);
	  };
	
	  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
	    return data.pagination && data.pagination.more;
	  };
	
	  InfiniteScroll.prototype.createLoadingMore = function () {
	    var $option = $(
	      '<li ' +
	      'class="select2-results__option select2-results__option--load-more"' +
	      'role="treeitem" aria-disabled="true"></li>'
	    );
	
	    var message = this.options.get('translations').get('loadingMore');
	
	    $option.html(message(this.lastParams));
	
	    return $option;
	  };
	
	  return InfiniteScroll;
	});
	
	S2.define('select2/dropdown/attachBody',[
	  'jquery',
	  '../utils'
	], function ($, Utils) {
	  function AttachBody (decorated, $element, options) {
	    this.$dropdownParent = options.get('dropdownParent') || $(document.body);
	
	    decorated.call(this, $element, options);
	  }
	
	  AttachBody.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    var setupResultsEvents = false;
	
	    decorated.call(this, container, $container);
	
	    container.on('open', function () {
	      self._showDropdown();
	      self._attachPositioningHandler(container);
	
	      if (!setupResultsEvents) {
	        setupResultsEvents = true;
	
	        container.on('results:all', function () {
	          self._positionDropdown();
	          self._resizeDropdown();
	        });
	
	        container.on('results:append', function () {
	          self._positionDropdown();
	          self._resizeDropdown();
	        });
	      }
	    });
	
	    container.on('close', function () {
	      self._hideDropdown();
	      self._detachPositioningHandler(container);
	    });
	
	    this.$dropdownContainer.on('mousedown', function (evt) {
	      evt.stopPropagation();
	    });
	  };
	
	  AttachBody.prototype.destroy = function (decorated) {
	    decorated.call(this);
	
	    this.$dropdownContainer.remove();
	  };
	
	  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
	    // Clone all of the container classes
	    $dropdown.attr('class', $container.attr('class'));
	
	    $dropdown.removeClass('select2');
	    $dropdown.addClass('select2-container--open');
	
	    $dropdown.css({
	      position: 'absolute',
	      top: -999999
	    });
	
	    this.$container = $container;
	  };
	
	  AttachBody.prototype.render = function (decorated) {
	    var $container = $('<span></span>');
	
	    var $dropdown = decorated.call(this);
	    $container.append($dropdown);
	
	    this.$dropdownContainer = $container;
	
	    return $container;
	  };
	
	  AttachBody.prototype._hideDropdown = function (decorated) {
	    this.$dropdownContainer.detach();
	  };
	
	  AttachBody.prototype._attachPositioningHandler =
	      function (decorated, container) {
	    var self = this;
	
	    var scrollEvent = 'scroll.select2.' + container.id;
	    var resizeEvent = 'resize.select2.' + container.id;
	    var orientationEvent = 'orientationchange.select2.' + container.id;
	
	    var $watchers = this.$container.parents().filter(Utils.hasScroll);
	    $watchers.each(function () {
	      $(this).data('select2-scroll-position', {
	        x: $(this).scrollLeft(),
	        y: $(this).scrollTop()
	      });
	    });
	
	    $watchers.on(scrollEvent, function (ev) {
	      var position = $(this).data('select2-scroll-position');
	      $(this).scrollTop(position.y);
	    });
	
	    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
	      function (e) {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });
	  };
	
	  AttachBody.prototype._detachPositioningHandler =
	      function (decorated, container) {
	    var scrollEvent = 'scroll.select2.' + container.id;
	    var resizeEvent = 'resize.select2.' + container.id;
	    var orientationEvent = 'orientationchange.select2.' + container.id;
	
	    var $watchers = this.$container.parents().filter(Utils.hasScroll);
	    $watchers.off(scrollEvent);
	
	    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
	  };
	
	  AttachBody.prototype._positionDropdown = function () {
	    var $window = $(window);
	
	    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
	    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
	
	    var newDirection = null;
	
	    var offset = this.$container.offset();
	
	    offset.bottom = offset.top + this.$container.outerHeight(false);
	
	    var container = {
	      height: this.$container.outerHeight(false)
	    };
	
	    container.top = offset.top;
	    container.bottom = offset.top + container.height;
	
	    var dropdown = {
	      height: this.$dropdown.outerHeight(false)
	    };
	
	    var viewport = {
	      top: $window.scrollTop(),
	      bottom: $window.scrollTop() + $window.height()
	    };
	
	    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
	    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
	
	    var css = {
	      left: offset.left,
	      top: container.bottom
	    };
	
	    // Determine what the parent element is to use for calciulating the offset
	    var $offsetParent = this.$dropdownParent;
	
	    // For statically positoned elements, we need to get the element
	    // that is determining the offset
	    if ($offsetParent.css('position') === 'static') {
	      $offsetParent = $offsetParent.offsetParent();
	    }
	
	    var parentOffset = $offsetParent.offset();
	
	    css.top -= parentOffset.top;
	    css.left -= parentOffset.left;
	
	    if (!isCurrentlyAbove && !isCurrentlyBelow) {
	      newDirection = 'below';
	    }
	
	    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
	      newDirection = 'above';
	    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
	      newDirection = 'below';
	    }
	
	    if (newDirection == 'above' ||
	      (isCurrentlyAbove && newDirection !== 'below')) {
	      css.top = container.top - parentOffset.top - dropdown.height;
	    }
	
	    if (newDirection != null) {
	      this.$dropdown
	        .removeClass('select2-dropdown--below select2-dropdown--above')
	        .addClass('select2-dropdown--' + newDirection);
	      this.$container
	        .removeClass('select2-container--below select2-container--above')
	        .addClass('select2-container--' + newDirection);
	    }
	
	    this.$dropdownContainer.css(css);
	  };
	
	  AttachBody.prototype._resizeDropdown = function () {
	    var css = {
	      width: this.$container.outerWidth(false) + 'px'
	    };
	
	    if (this.options.get('dropdownAutoWidth')) {
	      css.minWidth = css.width;
	      css.position = 'relative';
	      css.width = 'auto';
	    }
	
	    this.$dropdown.css(css);
	  };
	
	  AttachBody.prototype._showDropdown = function (decorated) {
	    this.$dropdownContainer.appendTo(this.$dropdownParent);
	
	    this._positionDropdown();
	    this._resizeDropdown();
	  };
	
	  return AttachBody;
	});
	
	S2.define('select2/dropdown/minimumResultsForSearch',[
	
	], function () {
	  function countResults (data) {
	    var count = 0;
	
	    for (var d = 0; d < data.length; d++) {
	      var item = data[d];
	
	      if (item.children) {
	        count += countResults(item.children);
	      } else {
	        count++;
	      }
	    }
	
	    return count;
	  }
	
	  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
	    this.minimumResultsForSearch = options.get('minimumResultsForSearch');
	
	    if (this.minimumResultsForSearch < 0) {
	      this.minimumResultsForSearch = Infinity;
	    }
	
	    decorated.call(this, $element, options, dataAdapter);
	  }
	
	  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
	    if (countResults(params.data.results) < this.minimumResultsForSearch) {
	      return false;
	    }
	
	    return decorated.call(this, params);
	  };
	
	  return MinimumResultsForSearch;
	});
	
	S2.define('select2/dropdown/selectOnClose',[
	
	], function () {
	  function SelectOnClose () { }
	
	  SelectOnClose.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    decorated.call(this, container, $container);
	
	    container.on('close', function (params) {
	      self._handleSelectOnClose(params);
	    });
	  };
	
	  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
	    if (params && params.originalSelect2Event != null) {
	      var event = params.originalSelect2Event;
	
	      // Don't select an item if the close event was triggered from a select or
	      // unselect event
	      if (event._type === 'select' || event._type === 'unselect') {
	        return;
	      }
	    }
	
	    var $highlightedResults = this.getHighlightedResults();
	
	    // Only select highlighted results
	    if ($highlightedResults.length < 1) {
	      return;
	    }
	
	    var data = $highlightedResults.data('data');
	
	    // Don't re-select already selected resulte
	    if (
	      (data.element != null && data.element.selected) ||
	      (data.element == null && data.selected)
	    ) {
	      return;
	    }
	
	    this.trigger('select', {
	        data: data
	    });
	  };
	
	  return SelectOnClose;
	});
	
	S2.define('select2/dropdown/closeOnSelect',[
	
	], function () {
	  function CloseOnSelect () { }
	
	  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	
	    decorated.call(this, container, $container);
	
	    container.on('select', function (evt) {
	      self._selectTriggered(evt);
	    });
	
	    container.on('unselect', function (evt) {
	      self._selectTriggered(evt);
	    });
	  };
	
	  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
	    var originalEvent = evt.originalEvent;
	
	    // Don't close if the control key is being held
	    if (originalEvent && originalEvent.ctrlKey) {
	      return;
	    }
	
	    this.trigger('close', {
	      originalEvent: originalEvent,
	      originalSelect2Event: evt
	    });
	  };
	
	  return CloseOnSelect;
	});
	
	S2.define('select2/i18n/en',[],function () {
	  // English
	  return {
	    errorLoading: function () {
	      return 'The results could not be loaded.';
	    },
	    inputTooLong: function (args) {
	      var overChars = args.input.length - args.maximum;
	
	      var message = 'Please delete ' + overChars + ' character';
	
	      if (overChars != 1) {
	        message += 's';
	      }
	
	      return message;
	    },
	    inputTooShort: function (args) {
	      var remainingChars = args.minimum - args.input.length;
	
	      var message = 'Please enter ' + remainingChars + ' or more characters';
	
	      return message;
	    },
	    loadingMore: function () {
	      return 'Loading more results…';
	    },
	    maximumSelected: function (args) {
	      var message = 'You can only select ' + args.maximum + ' item';
	
	      if (args.maximum != 1) {
	        message += 's';
	      }
	
	      return message;
	    },
	    noResults: function () {
	      return 'No results found';
	    },
	    searching: function () {
	      return 'Searching…';
	    }
	  };
	});
	
	S2.define('select2/defaults',[
	  'jquery',
	  'require',
	
	  './results',
	
	  './selection/single',
	  './selection/multiple',
	  './selection/placeholder',
	  './selection/allowClear',
	  './selection/search',
	  './selection/eventRelay',
	
	  './utils',
	  './translation',
	  './diacritics',
	
	  './data/select',
	  './data/array',
	  './data/ajax',
	  './data/tags',
	  './data/tokenizer',
	  './data/minimumInputLength',
	  './data/maximumInputLength',
	  './data/maximumSelectionLength',
	
	  './dropdown',
	  './dropdown/search',
	  './dropdown/hidePlaceholder',
	  './dropdown/infiniteScroll',
	  './dropdown/attachBody',
	  './dropdown/minimumResultsForSearch',
	  './dropdown/selectOnClose',
	  './dropdown/closeOnSelect',
	
	  './i18n/en'
	], function ($, require,
	
	             ResultsList,
	
	             SingleSelection, MultipleSelection, Placeholder, AllowClear,
	             SelectionSearch, EventRelay,
	
	             Utils, Translation, DIACRITICS,
	
	             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
	             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,
	
	             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
	             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
	
	             EnglishTranslation) {
	  function Defaults () {
	    this.reset();
	  }
	
	  Defaults.prototype.apply = function (options) {
	    options = $.extend(true, {}, this.defaults, options);
	
	    if (options.dataAdapter == null) {
	      if (options.ajax != null) {
	        options.dataAdapter = AjaxData;
	      } else if (options.data != null) {
	        options.dataAdapter = ArrayData;
	      } else {
	        options.dataAdapter = SelectData;
	      }
	
	      if (options.minimumInputLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MinimumInputLength
	        );
	      }
	
	      if (options.maximumInputLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MaximumInputLength
	        );
	      }
	
	      if (options.maximumSelectionLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MaximumSelectionLength
	        );
	      }
	
	      if (options.tags) {
	        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
	      }
	
	      if (options.tokenSeparators != null || options.tokenizer != null) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          Tokenizer
	        );
	      }
	
	      if (options.query != null) {
	        var Query = require(options.amdBase + 'compat/query');
	
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          Query
	        );
	      }
	
	      if (options.initSelection != null) {
	        var InitSelection = require(options.amdBase + 'compat/initSelection');
	
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          InitSelection
	        );
	      }
	    }
	
	    if (options.resultsAdapter == null) {
	      options.resultsAdapter = ResultsList;
	
	      if (options.ajax != null) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          InfiniteScroll
	        );
	      }
	
	      if (options.placeholder != null) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          HidePlaceholder
	        );
	      }
	
	      if (options.selectOnClose) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          SelectOnClose
	        );
	      }
	    }
	
	    if (options.dropdownAdapter == null) {
	      if (options.multiple) {
	        options.dropdownAdapter = Dropdown;
	      } else {
	        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
	
	        options.dropdownAdapter = SearchableDropdown;
	      }
	
	      if (options.minimumResultsForSearch !== 0) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          MinimumResultsForSearch
	        );
	      }
	
	      if (options.closeOnSelect) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          CloseOnSelect
	        );
	      }
	
	      if (
	        options.dropdownCssClass != null ||
	        options.dropdownCss != null ||
	        options.adaptDropdownCssClass != null
	      ) {
	        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');
	
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          DropdownCSS
	        );
	      }
	
	      options.dropdownAdapter = Utils.Decorate(
	        options.dropdownAdapter,
	        AttachBody
	      );
	    }
	
	    if (options.selectionAdapter == null) {
	      if (options.multiple) {
	        options.selectionAdapter = MultipleSelection;
	      } else {
	        options.selectionAdapter = SingleSelection;
	      }
	
	      // Add the placeholder mixin if a placeholder was specified
	      if (options.placeholder != null) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          Placeholder
	        );
	      }
	
	      if (options.allowClear) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          AllowClear
	        );
	      }
	
	      if (options.multiple) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          SelectionSearch
	        );
	      }
	
	      if (
	        options.containerCssClass != null ||
	        options.containerCss != null ||
	        options.adaptContainerCssClass != null
	      ) {
	        var ContainerCSS = require(options.amdBase + 'compat/containerCss');
	
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          ContainerCSS
	        );
	      }
	
	      options.selectionAdapter = Utils.Decorate(
	        options.selectionAdapter,
	        EventRelay
	      );
	    }
	
	    if (typeof options.language === 'string') {
	      // Check if the language is specified with a region
	      if (options.language.indexOf('-') > 0) {
	        // Extract the region information if it is included
	        var languageParts = options.language.split('-');
	        var baseLanguage = languageParts[0];
	
	        options.language = [options.language, baseLanguage];
	      } else {
	        options.language = [options.language];
	      }
	    }
	
	    if ($.isArray(options.language)) {
	      var languages = new Translation();
	      options.language.push('en');
	
	      var languageNames = options.language;
	
	      for (var l = 0; l < languageNames.length; l++) {
	        var name = languageNames[l];
	        var language = {};
	
	        try {
	          // Try to load it with the original name
	          language = Translation.loadPath(name);
	        } catch (e) {
	          try {
	            // If we couldn't load it, check if it wasn't the full path
	            name = this.defaults.amdLanguageBase + name;
	            language = Translation.loadPath(name);
	          } catch (ex) {
	            // The translation could not be loaded at all. Sometimes this is
	            // because of a configuration problem, other times this can be
	            // because of how Select2 helps load all possible translation files.
	            if (options.debug && window.console && console.warn) {
	              console.warn(
	                'Select2: The language file for "' + name + '" could not be ' +
	                'automatically loaded. A fallback will be used instead.'
	              );
	            }
	
	            continue;
	          }
	        }
	
	        languages.extend(language);
	      }
	
	      options.translations = languages;
	    } else {
	      var baseTranslation = Translation.loadPath(
	        this.defaults.amdLanguageBase + 'en'
	      );
	      var customTranslation = new Translation(options.language);
	
	      customTranslation.extend(baseTranslation);
	
	      options.translations = customTranslation;
	    }
	
	    return options;
	  };
	
	  Defaults.prototype.reset = function () {
	    function stripDiacritics (text) {
	      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
	      function match(a) {
	        return DIACRITICS[a] || a;
	      }
	
	      return text.replace(/[^\u0000-\u007E]/g, match);
	    }
	
	    function matcher (params, data) {
	      // Always return the object if there is nothing to compare
	      if ($.trim(params.term) === '') {
	        return data;
	      }
	
	      // Do a recursive check for options with children
	      if (data.children && data.children.length > 0) {
	        // Clone the data object if there are children
	        // This is required as we modify the object to remove any non-matches
	        var match = $.extend(true, {}, data);
	
	        // Check each child of the option
	        for (var c = data.children.length - 1; c >= 0; c--) {
	          var child = data.children[c];
	
	          var matches = matcher(params, child);
	
	          // If there wasn't a match, remove the object in the array
	          if (matches == null) {
	            match.children.splice(c, 1);
	          }
	        }
	
	        // If any children matched, return the new object
	        if (match.children.length > 0) {
	          return match;
	        }
	
	        // If there were no matching children, check just the plain object
	        return matcher(params, match);
	      }
	
	      var original = stripDiacritics(data.text).toUpperCase();
	      var term = stripDiacritics(params.term).toUpperCase();
	
	      // Check if the text contains the term
	      if (original.indexOf(term) > -1) {
	        return data;
	      }
	
	      // If it doesn't contain the term, don't return anything
	      return null;
	    }
	
	    this.defaults = {
	      amdBase: './',
	      amdLanguageBase: './i18n/',
	      closeOnSelect: true,
	      debug: false,
	      dropdownAutoWidth: false,
	      escapeMarkup: Utils.escapeMarkup,
	      language: EnglishTranslation,
	      matcher: matcher,
	      minimumInputLength: 0,
	      maximumInputLength: 0,
	      maximumSelectionLength: 0,
	      minimumResultsForSearch: 0,
	      selectOnClose: false,
	      sorter: function (data) {
	        return data;
	      },
	      templateResult: function (result) {
	        return result.text;
	      },
	      templateSelection: function (selection) {
	        return selection.text;
	      },
	      theme: 'default',
	      width: 'resolve'
	    };
	  };
	
	  Defaults.prototype.set = function (key, value) {
	    var camelKey = $.camelCase(key);
	
	    var data = {};
	    data[camelKey] = value;
	
	    var convertedData = Utils._convertData(data);
	
	    $.extend(this.defaults, convertedData);
	  };
	
	  var defaults = new Defaults();
	
	  return defaults;
	});
	
	S2.define('select2/options',[
	  'require',
	  'jquery',
	  './defaults',
	  './utils'
	], function (require, $, Defaults, Utils) {
	  function Options (options, $element) {
	    this.options = options;
	
	    if ($element != null) {
	      this.fromElement($element);
	    }
	
	    this.options = Defaults.apply(this.options);
	
	    if ($element && $element.is('input')) {
	      var InputCompat = require(this.get('amdBase') + 'compat/inputData');
	
	      this.options.dataAdapter = Utils.Decorate(
	        this.options.dataAdapter,
	        InputCompat
	      );
	    }
	  }
	
	  Options.prototype.fromElement = function ($e) {
	    var excludedData = ['select2'];
	
	    if (this.options.multiple == null) {
	      this.options.multiple = $e.prop('multiple');
	    }
	
	    if (this.options.disabled == null) {
	      this.options.disabled = $e.prop('disabled');
	    }
	
	    if (this.options.language == null) {
	      if ($e.prop('lang')) {
	        this.options.language = $e.prop('lang').toLowerCase();
	      } else if ($e.closest('[lang]').prop('lang')) {
	        this.options.language = $e.closest('[lang]').prop('lang');
	      }
	    }
	
	    if (this.options.dir == null) {
	      if ($e.prop('dir')) {
	        this.options.dir = $e.prop('dir');
	      } else if ($e.closest('[dir]').prop('dir')) {
	        this.options.dir = $e.closest('[dir]').prop('dir');
	      } else {
	        this.options.dir = 'ltr';
	      }
	    }
	
	    $e.prop('disabled', this.options.disabled);
	    $e.prop('multiple', this.options.multiple);
	
	    if ($e.data('select2Tags')) {
	      if (this.options.debug && window.console && console.warn) {
	        console.warn(
	          'Select2: The `data-select2-tags` attribute has been changed to ' +
	          'use the `data-data` and `data-tags="true"` attributes and will be ' +
	          'removed in future versions of Select2.'
	        );
	      }
	
	      $e.data('data', $e.data('select2Tags'));
	      $e.data('tags', true);
	    }
	
	    if ($e.data('ajaxUrl')) {
	      if (this.options.debug && window.console && console.warn) {
	        console.warn(
	          'Select2: The `data-ajax-url` attribute has been changed to ' +
	          '`data-ajax--url` and support for the old attribute will be removed' +
	          ' in future versions of Select2.'
	        );
	      }
	
	      $e.attr('ajax--url', $e.data('ajaxUrl'));
	      $e.data('ajax--url', $e.data('ajaxUrl'));
	    }
	
	    var dataset = {};
	
	    // Prefer the element's `dataset` attribute if it exists
	    // jQuery 1.x does not correctly handle data attributes with multiple dashes
	    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
	      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
	    } else {
	      dataset = $e.data();
	    }
	
	    var data = $.extend(true, {}, dataset);
	
	    data = Utils._convertData(data);
	
	    for (var key in data) {
	      if ($.inArray(key, excludedData) > -1) {
	        continue;
	      }
	
	      if ($.isPlainObject(this.options[key])) {
	        $.extend(this.options[key], data[key]);
	      } else {
	        this.options[key] = data[key];
	      }
	    }
	
	    return this;
	  };
	
	  Options.prototype.get = function (key) {
	    return this.options[key];
	  };
	
	  Options.prototype.set = function (key, val) {
	    this.options[key] = val;
	  };
	
	  return Options;
	});
	
	S2.define('select2/core',[
	  'jquery',
	  './options',
	  './utils',
	  './keys'
	], function ($, Options, Utils, KEYS) {
	  var Select2 = function ($element, options) {
	    if ($element.data('select2') != null) {
	      $element.data('select2').destroy();
	    }
	
	    this.$element = $element;
	
	    this.id = this._generateId($element);
	
	    options = options || {};
	
	    this.options = new Options(options, $element);
	
	    Select2.__super__.constructor.call(this);
	
	    // Set up the tabindex
	
	    var tabindex = $element.attr('tabindex') || 0;
	    $element.data('old-tabindex', tabindex);
	    $element.attr('tabindex', '-1');
	
	    // Set up containers and adapters
	
	    var DataAdapter = this.options.get('dataAdapter');
	    this.dataAdapter = new DataAdapter($element, this.options);
	
	    var $container = this.render();
	
	    this._placeContainer($container);
	
	    var SelectionAdapter = this.options.get('selectionAdapter');
	    this.selection = new SelectionAdapter($element, this.options);
	    this.$selection = this.selection.render();
	
	    this.selection.position(this.$selection, $container);
	
	    var DropdownAdapter = this.options.get('dropdownAdapter');
	    this.dropdown = new DropdownAdapter($element, this.options);
	    this.$dropdown = this.dropdown.render();
	
	    this.dropdown.position(this.$dropdown, $container);
	
	    var ResultsAdapter = this.options.get('resultsAdapter');
	    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
	    this.$results = this.results.render();
	
	    this.results.position(this.$results, this.$dropdown);
	
	    // Bind events
	
	    var self = this;
	
	    // Bind the container to all of the adapters
	    this._bindAdapters();
	
	    // Register any DOM event handlers
	    this._registerDomEvents();
	
	    // Register any internal event handlers
	    this._registerDataEvents();
	    this._registerSelectionEvents();
	    this._registerDropdownEvents();
	    this._registerResultsEvents();
	    this._registerEvents();
	
	    // Set the initial state
	    this.dataAdapter.current(function (initialData) {
	      self.trigger('selection:update', {
	        data: initialData
	      });
	    });
	
	    // Hide the original select
	    $element.addClass('select2-hidden-accessible');
	    $element.attr('aria-hidden', 'true');
	
	    // Synchronize any monitored attributes
	    this._syncAttributes();
	
	    $element.data('select2', this);
	  };
	
	  Utils.Extend(Select2, Utils.Observable);
	
	  Select2.prototype._generateId = function ($element) {
	    var id = '';
	
	    if ($element.attr('id') != null) {
	      id = $element.attr('id');
	    } else if ($element.attr('name') != null) {
	      id = $element.attr('name') + '-' + Utils.generateChars(2);
	    } else {
	      id = Utils.generateChars(4);
	    }
	
	    id = id.replace(/(:|\.|\[|\]|,)/g, '');
	    id = 'select2-' + id;
	
	    return id;
	  };
	
	  Select2.prototype._placeContainer = function ($container) {
	    $container.insertAfter(this.$element);
	
	    var width = this._resolveWidth(this.$element, this.options.get('width'));
	
	    if (width != null) {
	      $container.css('width', width);
	    }
	  };
	
	  Select2.prototype._resolveWidth = function ($element, method) {
	    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
	
	    if (method == 'resolve') {
	      var styleWidth = this._resolveWidth($element, 'style');
	
	      if (styleWidth != null) {
	        return styleWidth;
	      }
	
	      return this._resolveWidth($element, 'element');
	    }
	
	    if (method == 'element') {
	      var elementWidth = $element.outerWidth(false);
	
	      if (elementWidth <= 0) {
	        return 'auto';
	      }
	
	      return elementWidth + 'px';
	    }
	
	    if (method == 'style') {
	      var style = $element.attr('style');
	
	      if (typeof(style) !== 'string') {
	        return null;
	      }
	
	      var attrs = style.split(';');
	
	      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
	        var attr = attrs[i].replace(/\s/g, '');
	        var matches = attr.match(WIDTH);
	
	        if (matches !== null && matches.length >= 1) {
	          return matches[1];
	        }
	      }
	
	      return null;
	    }
	
	    return method;
	  };
	
	  Select2.prototype._bindAdapters = function () {
	    this.dataAdapter.bind(this, this.$container);
	    this.selection.bind(this, this.$container);
	
	    this.dropdown.bind(this, this.$container);
	    this.results.bind(this, this.$container);
	  };
	
	  Select2.prototype._registerDomEvents = function () {
	    var self = this;
	
	    this.$element.on('change.select2', function () {
	      self.dataAdapter.current(function (data) {
	        self.trigger('selection:update', {
	          data: data
	        });
	      });
	    });
	
	    this.$element.on('focus.select2', function (evt) {
	      self.trigger('focus', evt);
	    });
	
	    this._syncA = Utils.bind(this._syncAttributes, this);
	    this._syncS = Utils.bind(this._syncSubtree, this);
	
	    if (this.$element[0].attachEvent) {
	      this.$element[0].attachEvent('onpropertychange', this._syncA);
	    }
	
	    var observer = window.MutationObserver ||
	      window.WebKitMutationObserver ||
	      window.MozMutationObserver
	    ;
	
	    if (observer != null) {
	      this._observer = new observer(function (mutations) {
	        $.each(mutations, self._syncA);
	        $.each(mutations, self._syncS);
	      });
	      this._observer.observe(this.$element[0], {
	        attributes: true,
	        childList: true,
	        subtree: false
	      });
	    } else if (this.$element[0].addEventListener) {
	      this.$element[0].addEventListener(
	        'DOMAttrModified',
	        self._syncA,
	        false
	      );
	      this.$element[0].addEventListener(
	        'DOMNodeInserted',
	        self._syncS,
	        false
	      );
	      this.$element[0].addEventListener(
	        'DOMNodeRemoved',
	        self._syncS,
	        false
	      );
	    }
	  };
	
	  Select2.prototype._registerDataEvents = function () {
	    var self = this;
	
	    this.dataAdapter.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };
	
	  Select2.prototype._registerSelectionEvents = function () {
	    var self = this;
	    var nonRelayEvents = ['toggle', 'focus'];
	
	    this.selection.on('toggle', function () {
	      self.toggleDropdown();
	    });
	
	    this.selection.on('focus', function (params) {
	      self.focus(params);
	    });
	
	    this.selection.on('*', function (name, params) {
	      if ($.inArray(name, nonRelayEvents) !== -1) {
	        return;
	      }
	
	      self.trigger(name, params);
	    });
	  };
	
	  Select2.prototype._registerDropdownEvents = function () {
	    var self = this;
	
	    this.dropdown.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };
	
	  Select2.prototype._registerResultsEvents = function () {
	    var self = this;
	
	    this.results.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };
	
	  Select2.prototype._registerEvents = function () {
	    var self = this;
	
	    this.on('open', function () {
	      self.$container.addClass('select2-container--open');
	    });
	
	    this.on('close', function () {
	      self.$container.removeClass('select2-container--open');
	    });
	
	    this.on('enable', function () {
	      self.$container.removeClass('select2-container--disabled');
	    });
	
	    this.on('disable', function () {
	      self.$container.addClass('select2-container--disabled');
	    });
	
	    this.on('blur', function () {
	      self.$container.removeClass('select2-container--focus');
	    });
	
	    this.on('query', function (params) {
	      if (!self.isOpen()) {
	        self.trigger('open', {});
	      }
	
	      this.dataAdapter.query(params, function (data) {
	        self.trigger('results:all', {
	          data: data,
	          query: params
	        });
	      });
	    });
	
	    this.on('query:append', function (params) {
	      this.dataAdapter.query(params, function (data) {
	        self.trigger('results:append', {
	          data: data,
	          query: params
	        });
	      });
	    });
	
	    this.on('keypress', function (evt) {
	      var key = evt.which;
	
	      if (self.isOpen()) {
	        if (key === KEYS.ESC || key === KEYS.TAB ||
	            (key === KEYS.UP && evt.altKey)) {
	          self.close();
	
	          evt.preventDefault();
	        } else if (key === KEYS.ENTER) {
	          self.trigger('results:select', {});
	
	          evt.preventDefault();
	        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
	          self.trigger('results:toggle', {});
	
	          evt.preventDefault();
	        } else if (key === KEYS.UP) {
	          self.trigger('results:previous', {});
	
	          evt.preventDefault();
	        } else if (key === KEYS.DOWN) {
	          self.trigger('results:next', {});
	
	          evt.preventDefault();
	        }
	      } else {
	        if (key === KEYS.ENTER || key === KEYS.SPACE ||
	            (key === KEYS.DOWN && evt.altKey)) {
	          self.open();
	
	          evt.preventDefault();
	        }
	      }
	    });
	  };
	
	  Select2.prototype._syncAttributes = function () {
	    this.options.set('disabled', this.$element.prop('disabled'));
	
	    if (this.options.get('disabled')) {
	      if (this.isOpen()) {
	        this.close();
	      }
	
	      this.trigger('disable', {});
	    } else {
	      this.trigger('enable', {});
	    }
	  };
	
	  Select2.prototype._syncSubtree = function (evt, mutations) {
	    var changed = false;
	    var self = this;
	
	    // Ignore any mutation events raised for elements that aren't options or
	    // optgroups. This handles the case when the select element is destroyed
	    if (
	      evt && evt.target && (
	        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
	      )
	    ) {
	      return;
	    }
	
	    if (!mutations) {
	      // If mutation events aren't supported, then we can only assume that the
	      // change affected the selections
	      changed = true;
	    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
	      for (var n = 0; n < mutations.addedNodes.length; n++) {
	        var node = mutations.addedNodes[n];
	
	        if (node.selected) {
	          changed = true;
	        }
	      }
	    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
	      changed = true;
	    }
	
	    // Only re-pull the data if we think there is a change
	    if (changed) {
	      this.dataAdapter.current(function (currentData) {
	        self.trigger('selection:update', {
	          data: currentData
	        });
	      });
	    }
	  };
	
	  /**
	   * Override the trigger method to automatically trigger pre-events when
	   * there are events that can be prevented.
	   */
	  Select2.prototype.trigger = function (name, args) {
	    var actualTrigger = Select2.__super__.trigger;
	    var preTriggerMap = {
	      'open': 'opening',
	      'close': 'closing',
	      'select': 'selecting',
	      'unselect': 'unselecting'
	    };
	
	    if (args === undefined) {
	      args = {};
	    }
	
	    if (name in preTriggerMap) {
	      var preTriggerName = preTriggerMap[name];
	      var preTriggerArgs = {
	        prevented: false,
	        name: name,
	        args: args
	      };
	
	      actualTrigger.call(this, preTriggerName, preTriggerArgs);
	
	      if (preTriggerArgs.prevented) {
	        args.prevented = true;
	
	        return;
	      }
	    }
	
	    actualTrigger.call(this, name, args);
	  };
	
	  Select2.prototype.toggleDropdown = function () {
	    if (this.options.get('disabled')) {
	      return;
	    }
	
	    if (this.isOpen()) {
	      this.close();
	    } else {
	      this.open();
	    }
	  };
	
	  Select2.prototype.open = function () {
	    if (this.isOpen()) {
	      return;
	    }
	
	    this.trigger('query', {});
	  };
	
	  Select2.prototype.close = function () {
	    if (!this.isOpen()) {
	      return;
	    }
	
	    this.trigger('close', {});
	  };
	
	  Select2.prototype.isOpen = function () {
	    return this.$container.hasClass('select2-container--open');
	  };
	
	  Select2.prototype.hasFocus = function () {
	    return this.$container.hasClass('select2-container--focus');
	  };
	
	  Select2.prototype.focus = function (data) {
	    // No need to re-trigger focus events if we are already focused
	    if (this.hasFocus()) {
	      return;
	    }
	
	    this.$container.addClass('select2-container--focus');
	    this.trigger('focus', {});
	  };
	
	  Select2.prototype.enable = function (args) {
	    if (this.options.get('debug') && window.console && console.warn) {
	      console.warn(
	        'Select2: The `select2("enable")` method has been deprecated and will' +
	        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
	        ' instead.'
	      );
	    }
	
	    if (args == null || args.length === 0) {
	      args = [true];
	    }
	
	    var disabled = !args[0];
	
	    this.$element.prop('disabled', disabled);
	  };
	
	  Select2.prototype.data = function () {
	    if (this.options.get('debug') &&
	        arguments.length > 0 && window.console && console.warn) {
	      console.warn(
	        'Select2: Data can no longer be set using `select2("data")`. You ' +
	        'should consider setting the value instead using `$element.val()`.'
	      );
	    }
	
	    var data = [];
	
	    this.dataAdapter.current(function (currentData) {
	      data = currentData;
	    });
	
	    return data;
	  };
	
	  Select2.prototype.val = function (args) {
	    if (this.options.get('debug') && window.console && console.warn) {
	      console.warn(
	        'Select2: The `select2("val")` method has been deprecated and will be' +
	        ' removed in later Select2 versions. Use $element.val() instead.'
	      );
	    }
	
	    if (args == null || args.length === 0) {
	      return this.$element.val();
	    }
	
	    var newVal = args[0];
	
	    if ($.isArray(newVal)) {
	      newVal = $.map(newVal, function (obj) {
	        return obj.toString();
	      });
	    }
	
	    this.$element.val(newVal).trigger('change');
	  };
	
	  Select2.prototype.destroy = function () {
	    this.$container.remove();
	
	    if (this.$element[0].detachEvent) {
	      this.$element[0].detachEvent('onpropertychange', this._syncA);
	    }
	
	    if (this._observer != null) {
	      this._observer.disconnect();
	      this._observer = null;
	    } else if (this.$element[0].removeEventListener) {
	      this.$element[0]
	        .removeEventListener('DOMAttrModified', this._syncA, false);
	      this.$element[0]
	        .removeEventListener('DOMNodeInserted', this._syncS, false);
	      this.$element[0]
	        .removeEventListener('DOMNodeRemoved', this._syncS, false);
	    }
	
	    this._syncA = null;
	    this._syncS = null;
	
	    this.$element.off('.select2');
	    this.$element.attr('tabindex', this.$element.data('old-tabindex'));
	
	    this.$element.removeClass('select2-hidden-accessible');
	    this.$element.attr('aria-hidden', 'false');
	    this.$element.removeData('select2');
	
	    this.dataAdapter.destroy();
	    this.selection.destroy();
	    this.dropdown.destroy();
	    this.results.destroy();
	
	    this.dataAdapter = null;
	    this.selection = null;
	    this.dropdown = null;
	    this.results = null;
	  };
	
	  Select2.prototype.render = function () {
	    var $container = $(
	      '<span class="select2 select2-container">' +
	        '<span class="selection"></span>' +
	        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
	      '</span>'
	    );
	
	    $container.attr('dir', this.options.get('dir'));
	
	    this.$container = $container;
	
	    this.$container.addClass('select2-container--' + this.options.get('theme'));
	
	    $container.data('element', this.$element);
	
	    return $container;
	  };
	
	  return Select2;
	});
	
	S2.define('jquery-mousewheel',[
	  'jquery'
	], function ($) {
	  // Used to shim jQuery.mousewheel for non-full builds.
	  return $;
	});
	
	S2.define('jquery.select2',[
	  'jquery',
	  'jquery-mousewheel',
	
	  './select2/core',
	  './select2/defaults'
	], function ($, _, Select2, Defaults) {
	  if ($.fn.select2 == null) {
	    // All methods that should return the element
	    var thisMethods = ['open', 'close', 'destroy'];
	
	    $.fn.select2 = function (options) {
	      options = options || {};
	
	      if (typeof options === 'object') {
	        this.each(function () {
	          var instanceOptions = $.extend(true, {}, options);
	
	          var instance = new Select2($(this), instanceOptions);
	        });
	
	        return this;
	      } else if (typeof options === 'string') {
	        var ret;
	        var args = Array.prototype.slice.call(arguments, 1);
	
	        this.each(function () {
	          var instance = $(this).data('select2');
	
	          if (instance == null && window.console && console.error) {
	            console.error(
	              'The select2(\'' + options + '\') method was called on an ' +
	              'element that is not using Select2.'
	            );
	          }
	
	          ret = instance[options].apply(instance, args);
	        });
	
	        // Check if we should be returning `this`
	        if ($.inArray(options, thisMethods) > -1) {
	          return this;
	        }
	
	        return ret;
	      } else {
	        throw new Error('Invalid arguments for Select2: ' + options);
	      }
	    };
	  }
	
	  if ($.fn.select2.defaults == null) {
	    $.fn.select2.defaults = Defaults;
	  }
	
	  return Select2;
	});
	
	  // Return the AMD loader configuration so it can be used outside of this file
	  return {
	    define: S2.define,
	    require: S2.require
	  };
	}());
	
	  // Autoload the jQuery bindings
	  // We know that all of the modules exist above this, so we're safe
	  var select2 = S2.require('jquery.select2');
	
	  // Hold the AMD module references on the jQuery function that was just loaded
	  // This allows Select2 to use the internal loader outside of this file, such
	  // as in the language files.
	  jQuery.fn.select2.amd = S2;
	
	  // Return the Select2 instance for anyone who is importing it.
	  return select2;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 112 */
/*!****************************************!*\
  !*** ./~/select2/dist/css/select2.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../css-loader!./select2.css */ 113);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../style-loader/addStyles.js */ 114)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js!./select2.css", function() {
				var newContent = require("!!../../../css-loader/index.js!./select2.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 113 */
/*!*******************************************************!*\
  !*** ./~/css-loader!./~/select2/dist/css/select2.css ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, ".select2-container {\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle; }\n  .select2-container .select2-selection--single {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: block;\n    height: 28px;\n    user-select: none;\n    -webkit-user-select: none; }\n    .select2-container .select2-selection--single .select2-selection__rendered {\n      display: block;\n      padding-left: 8px;\n      padding-right: 20px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    .select2-container .select2-selection--single .select2-selection__clear {\n      position: relative; }\n  .select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered {\n    padding-right: 8px;\n    padding-left: 20px; }\n  .select2-container .select2-selection--multiple {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: block;\n    min-height: 32px;\n    user-select: none;\n    -webkit-user-select: none; }\n    .select2-container .select2-selection--multiple .select2-selection__rendered {\n      display: inline-block;\n      overflow: hidden;\n      padding-left: 8px;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .select2-container .select2-search--inline {\n    float: left; }\n    .select2-container .select2-search--inline .select2-search__field {\n      box-sizing: border-box;\n      border: none;\n      font-size: 100%;\n      margin-top: 5px;\n      padding: 0; }\n      .select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {\n        -webkit-appearance: none; }\n\n.select2-dropdown {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  left: -100000px;\n  width: 100%;\n  z-index: 1051; }\n\n.select2-results {\n  display: block; }\n\n.select2-results__options {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.select2-results__option {\n  padding: 6px;\n  user-select: none;\n  -webkit-user-select: none; }\n  .select2-results__option[aria-selected] {\n    cursor: pointer; }\n\n.select2-container--open .select2-dropdown {\n  left: 0; }\n\n.select2-container--open .select2-dropdown--above {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.select2-container--open .select2-dropdown--below {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.select2-search--dropdown {\n  display: block;\n  padding: 4px; }\n  .select2-search--dropdown .select2-search__field {\n    padding: 4px;\n    width: 100%;\n    box-sizing: border-box; }\n    .select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {\n      -webkit-appearance: none; }\n  .select2-search--dropdown.select2-search--hide {\n    display: none; }\n\n.select2-close-mask {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  min-height: 100%;\n  min-width: 100%;\n  height: auto;\n  width: auto;\n  opacity: 0;\n  z-index: 99;\n  background-color: #fff;\n  filter: alpha(opacity=0); }\n\n.select2-hidden-accessible {\n  border: 0 !important;\n  clip: rect(0 0 0 0) !important;\n  height: 1px !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  width: 1px !important; }\n\n.select2-container--default .select2-selection--single {\n  background-color: #fff;\n  border: 1px solid #aaa;\n  border-radius: 4px; }\n  .select2-container--default .select2-selection--single .select2-selection__rendered {\n    color: #444;\n    line-height: 28px; }\n  .select2-container--default .select2-selection--single .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold; }\n  .select2-container--default .select2-selection--single .select2-selection__placeholder {\n    color: #999; }\n  .select2-container--default .select2-selection--single .select2-selection__arrow {\n    height: 26px;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 20px; }\n    .select2-container--default .select2-selection--single .select2-selection__arrow b {\n      border-color: #888 transparent transparent transparent;\n      border-style: solid;\n      border-width: 5px 4px 0 4px;\n      height: 0;\n      left: 50%;\n      margin-left: -4px;\n      margin-top: -2px;\n      position: absolute;\n      top: 50%;\n      width: 0; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--single .select2-selection__clear {\n  float: left; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow {\n  left: 1px;\n  right: auto; }\n\n.select2-container--default.select2-container--disabled .select2-selection--single {\n  background-color: #eee;\n  cursor: default; }\n  .select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear {\n    display: none; }\n\n.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {\n  border-color: transparent transparent #888 transparent;\n  border-width: 0 4px 5px 4px; }\n\n.select2-container--default .select2-selection--multiple {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  cursor: text; }\n  .select2-container--default .select2-selection--multiple .select2-selection__rendered {\n    box-sizing: border-box;\n    list-style: none;\n    margin: 0;\n    padding: 0 5px;\n    width: 100%; }\n    .select2-container--default .select2-selection--multiple .select2-selection__rendered li {\n      list-style: none; }\n  .select2-container--default .select2-selection--multiple .select2-selection__placeholder {\n    color: #999;\n    margin-top: 5px;\n    float: left; }\n  .select2-container--default .select2-selection--multiple .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold;\n    margin-top: 5px;\n    margin-right: 10px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice {\n    background-color: #e4e4e4;\n    border: 1px solid #aaa;\n    border-radius: 4px;\n    cursor: default;\n    float: left;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 0 5px; }\n  .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {\n    color: #999;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: bold;\n    margin-right: 2px; }\n    .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {\n      color: #333; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice, .select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__placeholder, .select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-search--inline {\n  float: right; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n  margin-left: 5px;\n  margin-right: auto; }\n\n.select2-container--default[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove {\n  margin-left: 2px;\n  margin-right: auto; }\n\n.select2-container--default.select2-container--focus .select2-selection--multiple {\n  border: solid black 1px;\n  outline: 0; }\n\n.select2-container--default.select2-container--disabled .select2-selection--multiple {\n  background-color: #eee;\n  cursor: default; }\n\n.select2-container--default.select2-container--disabled .select2-selection__choice__remove {\n  display: none; }\n\n.select2-container--default.select2-container--open.select2-container--above .select2-selection--single, .select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.select2-container--default.select2-container--open.select2-container--below .select2-selection--single, .select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.select2-container--default .select2-search--dropdown .select2-search__field {\n  border: 1px solid #aaa; }\n\n.select2-container--default .select2-search--inline .select2-search__field {\n  background: transparent;\n  border: none;\n  outline: 0;\n  box-shadow: none;\n  -webkit-appearance: textfield; }\n\n.select2-container--default .select2-results > .select2-results__options {\n  max-height: 200px;\n  overflow-y: auto; }\n\n.select2-container--default .select2-results__option[role=group] {\n  padding: 0; }\n\n.select2-container--default .select2-results__option[aria-disabled=true] {\n  color: #999; }\n\n.select2-container--default .select2-results__option[aria-selected=true] {\n  background-color: #ddd; }\n\n.select2-container--default .select2-results__option .select2-results__option {\n  padding-left: 1em; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__group {\n    padding-left: 0; }\n  .select2-container--default .select2-results__option .select2-results__option .select2-results__option {\n    margin-left: -1em;\n    padding-left: 2em; }\n    .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n      margin-left: -2em;\n      padding-left: 3em; }\n      .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n        margin-left: -3em;\n        padding-left: 4em; }\n        .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n          margin-left: -4em;\n          padding-left: 5em; }\n          .select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option {\n            margin-left: -5em;\n            padding-left: 6em; }\n\n.select2-container--default .select2-results__option--highlighted[aria-selected] {\n  background-color: #5897fb;\n  color: white; }\n\n.select2-container--default .select2-results__group {\n  cursor: default;\n  display: block;\n  padding: 6px; }\n\n.select2-container--classic .select2-selection--single {\n  background-color: #f7f7f7;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  outline: 0;\n  background-image: -webkit-linear-gradient(top, white 50%, #eeeeee 100%);\n  background-image: -o-linear-gradient(top, white 50%, #eeeeee 100%);\n  background-image: linear-gradient(to bottom, white 50%, #eeeeee 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0); }\n  .select2-container--classic .select2-selection--single:focus {\n    border: 1px solid #5897fb; }\n  .select2-container--classic .select2-selection--single .select2-selection__rendered {\n    color: #444;\n    line-height: 28px; }\n  .select2-container--classic .select2-selection--single .select2-selection__clear {\n    cursor: pointer;\n    float: right;\n    font-weight: bold;\n    margin-right: 10px; }\n  .select2-container--classic .select2-selection--single .select2-selection__placeholder {\n    color: #999; }\n  .select2-container--classic .select2-selection--single .select2-selection__arrow {\n    background-color: #ddd;\n    border: none;\n    border-left: 1px solid #aaa;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    height: 26px;\n    position: absolute;\n    top: 1px;\n    right: 1px;\n    width: 20px;\n    background-image: -webkit-linear-gradient(top, #eeeeee 50%, #cccccc 100%);\n    background-image: -o-linear-gradient(top, #eeeeee 50%, #cccccc 100%);\n    background-image: linear-gradient(to bottom, #eeeeee 50%, #cccccc 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0); }\n    .select2-container--classic .select2-selection--single .select2-selection__arrow b {\n      border-color: #888 transparent transparent transparent;\n      border-style: solid;\n      border-width: 5px 4px 0 4px;\n      height: 0;\n      left: 50%;\n      margin-left: -4px;\n      margin-top: -2px;\n      position: absolute;\n      top: 50%;\n      width: 0; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--single .select2-selection__clear {\n  float: left; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--single .select2-selection__arrow {\n  border: none;\n  border-right: 1px solid #aaa;\n  border-radius: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  left: 1px;\n  right: auto; }\n\n.select2-container--classic.select2-container--open .select2-selection--single {\n  border: 1px solid #5897fb; }\n  .select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow {\n    background: transparent;\n    border: none; }\n    .select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow b {\n      border-color: transparent transparent #888 transparent;\n      border-width: 0 4px 5px 4px; }\n\n.select2-container--classic.select2-container--open.select2-container--above .select2-selection--single {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  background-image: -webkit-linear-gradient(top, white 0%, #eeeeee 50%);\n  background-image: -o-linear-gradient(top, white 0%, #eeeeee 50%);\n  background-image: linear-gradient(to bottom, white 0%, #eeeeee 50%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0); }\n\n.select2-container--classic.select2-container--open.select2-container--below .select2-selection--single {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  background-image: -webkit-linear-gradient(top, #eeeeee 50%, white 100%);\n  background-image: -o-linear-gradient(top, #eeeeee 50%, white 100%);\n  background-image: linear-gradient(to bottom, #eeeeee 50%, white 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0); }\n\n.select2-container--classic .select2-selection--multiple {\n  background-color: white;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  cursor: text;\n  outline: 0; }\n  .select2-container--classic .select2-selection--multiple:focus {\n    border: 1px solid #5897fb; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__rendered {\n    list-style: none;\n    margin: 0;\n    padding: 0 5px; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__clear {\n    display: none; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__choice {\n    background-color: #e4e4e4;\n    border: 1px solid #aaa;\n    border-radius: 4px;\n    cursor: default;\n    float: left;\n    margin-right: 5px;\n    margin-top: 5px;\n    padding: 0 5px; }\n  .select2-container--classic .select2-selection--multiple .select2-selection__choice__remove {\n    color: #888;\n    cursor: pointer;\n    display: inline-block;\n    font-weight: bold;\n    margin-right: 2px; }\n    .select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover {\n      color: #555; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n  float: right; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice {\n  margin-left: 5px;\n  margin-right: auto; }\n\n.select2-container--classic[dir=\"rtl\"] .select2-selection--multiple .select2-selection__choice__remove {\n  margin-left: 2px;\n  margin-right: auto; }\n\n.select2-container--classic.select2-container--open .select2-selection--multiple {\n  border: 1px solid #5897fb; }\n\n.select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple {\n  border-top: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple {\n  border-bottom: none;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.select2-container--classic .select2-search--dropdown .select2-search__field {\n  border: 1px solid #aaa;\n  outline: 0; }\n\n.select2-container--classic .select2-search--inline .select2-search__field {\n  outline: 0;\n  box-shadow: none; }\n\n.select2-container--classic .select2-dropdown {\n  background-color: white;\n  border: 1px solid transparent; }\n\n.select2-container--classic .select2-dropdown--above {\n  border-bottom: none; }\n\n.select2-container--classic .select2-dropdown--below {\n  border-top: none; }\n\n.select2-container--classic .select2-results > .select2-results__options {\n  max-height: 200px;\n  overflow-y: auto; }\n\n.select2-container--classic .select2-results__option[role=group] {\n  padding: 0; }\n\n.select2-container--classic .select2-results__option[aria-disabled=true] {\n  color: grey; }\n\n.select2-container--classic .select2-results__option--highlighted[aria-selected] {\n  background-color: #3875d7;\n  color: white; }\n\n.select2-container--classic .select2-results__group {\n  cursor: default;\n  display: block;\n  padding: 6px; }\n\n.select2-container--classic.select2-container--open .select2-dropdown {\n  border-color: #5897fb; }\n", ""]);
	
	// exports


/***/ },
/* 114 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 115 */
/*!***************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-58e099b7!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/select2.vue ***!
  \***************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('select', {
	    staticClass: "form-control"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-58e099b7", module.exports)
	  }
	}

/***/ },
/* 116 */
/*!**************************************!*\
  !*** ./js/components/datepicker.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./datepicker.vue */ 117),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-70fe064b!../../~/vue-loader/lib/selector?type=template&index=0!./datepicker.vue */ 121),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/datepicker.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] datepicker.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-70fe064b", Component.options)
	  } else {
	    hotAPI.reload("data-v-70fe064b", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 117 */
/*!**************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/datepicker.vue ***!
  \**************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue, $) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(/*! bootstrap-datepicker */ 118);
	
	__webpack_require__(/*! bootstrap-datepicker/dist/css/bootstrap-datepicker.css */ 119);
	
	//
	//
	//
	//
	
	
	exports.default = Vue.component('datepicker', {
	  props: ['options', 'value', 'mapTo', 'valueId'],
	  mounted: function mounted() {
	    var vm = this;
	    $(this.$el).val(this.value).datepicker({ format: 'yyyy-mm-dd' }).on('change', function () {
	      vm.$emit('input', this.value);
	    });
	  },
	  watch: {
	    value: function value(_value) {
	      $(this.$el).val(_value);
	    }
	  },
	  destroyed: function destroyed() {
	    $(this.$el).off().datepicker('destroy');
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! vue */ 2), __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 118 */
/*!****************************************************************!*\
  !*** ./~/bootstrap-datepicker/dist/js/bootstrap-datepicker.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
	 *
	 * Copyright 2012 Stefan Petre
	 * Improvements by Andrew Rowls
	 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
	 */(function(factory){
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ 1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	}(function($, undefined){
	
		function UTCDate(){
			return new Date(Date.UTC.apply(Date, arguments));
		}
		function UTCToday(){
			var today = new Date();
			return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
		}
		function isUTCEquals(date1, date2) {
			return (
				date1.getUTCFullYear() === date2.getUTCFullYear() &&
				date1.getUTCMonth() === date2.getUTCMonth() &&
				date1.getUTCDate() === date2.getUTCDate()
			);
		}
		function alias(method){
			return function(){
				return this[method].apply(this, arguments);
			};
		}
		function isValidDate(d) {
			return d && !isNaN(d.getTime());
		}
	
		var DateArray = (function(){
			var extras = {
				get: function(i){
					return this.slice(i)[0];
				},
				contains: function(d){
					// Array.indexOf is not cross-browser;
					// $.inArray doesn't work with Dates
					var val = d && d.valueOf();
					for (var i=0, l=this.length; i < l; i++)
						if (this[i].valueOf() === val)
							return i;
					return -1;
				},
				remove: function(i){
					this.splice(i,1);
				},
				replace: function(new_array){
					if (!new_array)
						return;
					if (!$.isArray(new_array))
						new_array = [new_array];
					this.clear();
					this.push.apply(this, new_array);
				},
				clear: function(){
					this.length = 0;
				},
				copy: function(){
					var a = new DateArray();
					a.replace(this);
					return a;
				}
			};
	
			return function(){
				var a = [];
				a.push.apply(a, arguments);
				$.extend(a, extras);
				return a;
			};
		})();
	
	
		// Picker object
	
		var Datepicker = function(element, options){
			$(element).data('datepicker', this);
			this._process_options(options);
	
			this.dates = new DateArray();
			this.viewDate = this.o.defaultViewDate;
			this.focusDate = null;
	
			this.element = $(element);
			this.isInput = this.element.is('input');
			this.inputField = this.isInput ? this.element : this.element.find('input');
			this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
			this.hasInput = this.component && this.inputField.length;
			if (this.component && this.component.length === 0)
				this.component = false;
			this.isInline = !this.component && this.element.is('div');
	
			this.picker = $(DPGlobal.template);
	
			// Checking templates and inserting
			if (this._check_template(this.o.templates.leftArrow)) {
				this.picker.find('.prev').html(this.o.templates.leftArrow);
			}
			if (this._check_template(this.o.templates.rightArrow)) {
				this.picker.find('.next').html(this.o.templates.rightArrow);
			}
	
			this._buildEvents();
			this._attachEvents();
	
			if (this.isInline){
				this.picker.addClass('datepicker-inline').appendTo(this.element);
			}
			else {
				this.picker.addClass('datepicker-dropdown dropdown-menu');
			}
	
			if (this.o.rtl){
				this.picker.addClass('datepicker-rtl');
			}
	
			this.viewMode = this.o.startView;
	
			if (this.o.calendarWeeks)
				this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear')
							.attr('colspan', function(i, val){
								return parseInt(val) + 1;
							});
	
			this._allow_update = false;
	
			this.setStartDate(this._o.startDate);
			this.setEndDate(this._o.endDate);
			this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
			this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
			this.setDatesDisabled(this.o.datesDisabled);
	
			this.fillDow();
			this.fillMonths();
	
			this._allow_update = true;
	
			this.update();
			this.showMode();
	
			if (this.isInline){
				this.show();
			}
		};
	
		Datepicker.prototype = {
			constructor: Datepicker,
	
			_resolveViewName: function(view, default_value){
				if (view === 0 || view === 'days' || view === 'month') {
					return 0;
				}
				if (view === 1 || view === 'months' || view === 'year') {
					return 1;
				}
				if (view === 2 || view === 'years' || view === 'decade') {
					return 2;
				}
				if (view === 3 || view === 'decades' || view === 'century') {
					return 3;
				}
				if (view === 4 || view === 'centuries' || view === 'millennium') {
					return 4;
				}
				return default_value === undefined ? false : default_value;
			},
	
			_check_template: function(tmp){
				try {
					// If empty
					if (tmp === undefined || tmp === "") {
						return false;
					}
					// If no html, everything ok
					if ((tmp.match(/[<>]/g) || []).length <= 0) {
						return true;
					}
					// Checking if html is fine
					var jDom = $(tmp);
					return jDom.length > 0;
				}
				catch (ex) {
					return false;
				}
			},
	
			_process_options: function(opts){
				// Store raw options for reference
				this._o = $.extend({}, this._o, opts);
				// Processed options
				var o = this.o = $.extend({}, this._o);
	
				// Check if "de-DE" style date is available, if not language should
				// fallback to 2 letter code eg "de"
				var lang = o.language;
				if (!dates[lang]){
					lang = lang.split('-')[0];
					if (!dates[lang])
						lang = defaults.language;
				}
				o.language = lang;
	
				// Retrieve view index from any aliases
				o.startView = this._resolveViewName(o.startView, 0);
				o.minViewMode = this._resolveViewName(o.minViewMode, 0);
				o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);
	
				// Check that the start view is between min and max
				o.startView = Math.min(o.startView, o.maxViewMode);
				o.startView = Math.max(o.startView, o.minViewMode);
	
				// true, false, or Number > 0
				if (o.multidate !== true){
					o.multidate = Number(o.multidate) || false;
					if (o.multidate !== false)
						o.multidate = Math.max(0, o.multidate);
				}
				o.multidateSeparator = String(o.multidateSeparator);
	
				o.weekStart %= 7;
				o.weekEnd = (o.weekStart + 6) % 7;
	
				var format = DPGlobal.parseFormat(o.format);
				if (o.startDate !== -Infinity){
					if (!!o.startDate){
						if (o.startDate instanceof Date)
							o.startDate = this._local_to_utc(this._zero_time(o.startDate));
						else
							o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
					}
					else {
						o.startDate = -Infinity;
					}
				}
				if (o.endDate !== Infinity){
					if (!!o.endDate){
						if (o.endDate instanceof Date)
							o.endDate = this._local_to_utc(this._zero_time(o.endDate));
						else
							o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
					}
					else {
						o.endDate = Infinity;
					}
				}
	
				o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
				if (!$.isArray(o.daysOfWeekDisabled))
					o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
				o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
					return parseInt(d, 10);
				});
	
				o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
				if (!$.isArray(o.daysOfWeekHighlighted))
					o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
				o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
					return parseInt(d, 10);
				});
	
				o.datesDisabled = o.datesDisabled||[];
				if (!$.isArray(o.datesDisabled)) {
					o.datesDisabled = [
						o.datesDisabled
					];
				}
				o.datesDisabled = $.map(o.datesDisabled,function(d){
					return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
				});
	
				var plc = String(o.orientation).toLowerCase().split(/\s+/g),
					_plc = o.orientation.toLowerCase();
				plc = $.grep(plc, function(word){
					return /^auto|left|right|top|bottom$/.test(word);
				});
				o.orientation = {x: 'auto', y: 'auto'};
				if (!_plc || _plc === 'auto')
					; // no action
				else if (plc.length === 1){
					switch (plc[0]){
						case 'top':
						case 'bottom':
							o.orientation.y = plc[0];
							break;
						case 'left':
						case 'right':
							o.orientation.x = plc[0];
							break;
					}
				}
				else {
					_plc = $.grep(plc, function(word){
						return /^left|right$/.test(word);
					});
					o.orientation.x = _plc[0] || 'auto';
	
					_plc = $.grep(plc, function(word){
						return /^top|bottom$/.test(word);
					});
					o.orientation.y = _plc[0] || 'auto';
				}
				if (o.defaultViewDate) {
					var year = o.defaultViewDate.year || new Date().getFullYear();
					var month = o.defaultViewDate.month || 0;
					var day = o.defaultViewDate.day || 1;
					o.defaultViewDate = UTCDate(year, month, day);
				} else {
					o.defaultViewDate = UTCToday();
				}
			},
			_events: [],
			_secondaryEvents: [],
			_applyEvents: function(evs){
				for (var i=0, el, ch, ev; i < evs.length; i++){
					el = evs[i][0];
					if (evs[i].length === 2){
						ch = undefined;
						ev = evs[i][1];
					}
					else if (evs[i].length === 3){
						ch = evs[i][1];
						ev = evs[i][2];
					}
					el.on(ev, ch);
				}
			},
			_unapplyEvents: function(evs){
				for (var i=0, el, ev, ch; i < evs.length; i++){
					el = evs[i][0];
					if (evs[i].length === 2){
						ch = undefined;
						ev = evs[i][1];
					}
					else if (evs[i].length === 3){
						ch = evs[i][1];
						ev = evs[i][2];
					}
					el.off(ev, ch);
				}
			},
			_buildEvents: function(){
	            var events = {
	                keyup: $.proxy(function(e){
	                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
	                        this.update();
	                }, this),
	                keydown: $.proxy(this.keydown, this),
	                paste: $.proxy(this.paste, this)
	            };
	
	            if (this.o.showOnFocus === true) {
	                events.focus = $.proxy(this.show, this);
	            }
	
	            if (this.isInput) { // single input
	                this._events = [
	                    [this.element, events]
	                ];
	            }
	            else if (this.component && this.hasInput) { // component: input + button
	                this._events = [
	                    // For components that are not readonly, allow keyboard nav
	                    [this.inputField, events],
	                    [this.component, {
	                        click: $.proxy(this.show, this)
	                    }]
	                ];
	            }
				else {
					this._events = [
						[this.element, {
							click: $.proxy(this.show, this),
							keydown: $.proxy(this.keydown, this)
						}]
					];
				}
				this._events.push(
					// Component: listen for blur on element descendants
					[this.element, '*', {
						blur: $.proxy(function(e){
							this._focused_from = e.target;
						}, this)
					}],
					// Input: listen for blur on element
					[this.element, {
						blur: $.proxy(function(e){
							this._focused_from = e.target;
						}, this)
					}]
				);
	
				if (this.o.immediateUpdates) {
					// Trigger input updates immediately on changed year/month
					this._events.push([this.element, {
						'changeYear changeMonth': $.proxy(function(e){
							this.update(e.date);
						}, this)
					}]);
				}
	
				this._secondaryEvents = [
					[this.picker, {
						click: $.proxy(this.click, this)
					}],
					[$(window), {
						resize: $.proxy(this.place, this)
					}],
					[$(document), {
						mousedown: $.proxy(function(e){
							// Clicked outside the datepicker, hide it
							if (!(
								this.element.is(e.target) ||
								this.element.find(e.target).length ||
								this.picker.is(e.target) ||
								this.picker.find(e.target).length ||
								this.isInline
							)){
								this.hide();
							}
						}, this)
					}]
				];
			},
			_attachEvents: function(){
				this._detachEvents();
				this._applyEvents(this._events);
			},
			_detachEvents: function(){
				this._unapplyEvents(this._events);
			},
			_attachSecondaryEvents: function(){
				this._detachSecondaryEvents();
				this._applyEvents(this._secondaryEvents);
			},
			_detachSecondaryEvents: function(){
				this._unapplyEvents(this._secondaryEvents);
			},
			_trigger: function(event, altdate){
				var date = altdate || this.dates.get(-1),
					local_date = this._utc_to_local(date);
	
				this.element.trigger({
					type: event,
					date: local_date,
					dates: $.map(this.dates, this._utc_to_local),
					format: $.proxy(function(ix, format){
						if (arguments.length === 0){
							ix = this.dates.length - 1;
							format = this.o.format;
						}
						else if (typeof ix === 'string'){
							format = ix;
							ix = this.dates.length - 1;
						}
						format = format || this.o.format;
						var date = this.dates.get(ix);
						return DPGlobal.formatDate(date, format, this.o.language);
					}, this)
				});
			},
	
			show: function(){
				if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
					return;
				if (!this.isInline)
					this.picker.appendTo(this.o.container);
				this.place();
				this.picker.show();
				this._attachSecondaryEvents();
				this._trigger('show');
				if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
					$(this.element).blur();
				}
				return this;
			},
	
			hide: function(){
				if (this.isInline || !this.picker.is(':visible'))
					return this;
				this.focusDate = null;
				this.picker.hide().detach();
				this._detachSecondaryEvents();
				this.viewMode = this.o.startView;
				this.showMode();
	
				if (this.o.forceParse && this.inputField.val())
					this.setValue();
				this._trigger('hide');
				return this;
			},
	
			destroy: function(){
				this.hide();
				this._detachEvents();
				this._detachSecondaryEvents();
				this.picker.remove();
				delete this.element.data().datepicker;
				if (!this.isInput){
					delete this.element.data().date;
				}
				return this;
			},
	
			paste: function(evt){
				var dateString;
				if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
					&& $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
					dateString = evt.originalEvent.clipboardData.getData('text/plain');
				}
				else if (window.clipboardData) {
					dateString = window.clipboardData.getData('Text');
				}
				else {
					return;
				}
				this.setDate(dateString);
				this.update();
				evt.preventDefault();
			},
	
			_utc_to_local: function(utc){
				return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
			},
			_local_to_utc: function(local){
				return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
			},
			_zero_time: function(local){
				return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
			},
			_zero_utc_time: function(utc){
				return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
			},
	
			getDates: function(){
				return $.map(this.dates, this._utc_to_local);
			},
	
			getUTCDates: function(){
				return $.map(this.dates, function(d){
					return new Date(d);
				});
			},
	
			getDate: function(){
				return this._utc_to_local(this.getUTCDate());
			},
	
			getUTCDate: function(){
				var selected_date = this.dates.get(-1);
				if (typeof selected_date !== 'undefined') {
					return new Date(selected_date);
				} else {
					return null;
				}
			},
	
			clearDates: function(){
				if (this.inputField) {
					this.inputField.val('');
				}
	
				this.update();
				this._trigger('changeDate');
	
				if (this.o.autoclose) {
					this.hide();
				}
			},
			setDates: function(){
				var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
				this.update.apply(this, args);
				this._trigger('changeDate');
				this.setValue();
				return this;
			},
	
			setUTCDates: function(){
				var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
				this.update.apply(this, $.map(args, this._utc_to_local));
				this._trigger('changeDate');
				this.setValue();
				return this;
			},
	
			setDate: alias('setDates'),
			setUTCDate: alias('setUTCDates'),
			remove: alias('destroy'),
	
			setValue: function(){
				var formatted = this.getFormattedDate();
				this.inputField.val(formatted);
				return this;
			},
	
			getFormattedDate: function(format){
				if (format === undefined)
					format = this.o.format;
	
				var lang = this.o.language;
				return $.map(this.dates, function(d){
					return DPGlobal.formatDate(d, format, lang);
				}).join(this.o.multidateSeparator);
			},
	
			getStartDate: function(){
				return this.o.startDate;
			},
	
			setStartDate: function(startDate){
				this._process_options({startDate: startDate});
				this.update();
				this.updateNavArrows();
				return this;
			},
	
			getEndDate: function(){
				return this.o.endDate;
			},
	
			setEndDate: function(endDate){
				this._process_options({endDate: endDate});
				this.update();
				this.updateNavArrows();
				return this;
			},
	
			setDaysOfWeekDisabled: function(daysOfWeekDisabled){
				this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
				this.update();
				this.updateNavArrows();
				return this;
			},
	
			setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
				this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
				this.update();
				return this;
			},
	
			setDatesDisabled: function(datesDisabled){
				this._process_options({datesDisabled: datesDisabled});
				this.update();
				this.updateNavArrows();
			},
	
			place: function(){
				if (this.isInline)
					return this;
				var calendarWidth = this.picker.outerWidth(),
					calendarHeight = this.picker.outerHeight(),
					visualPadding = 10,
					container = $(this.o.container),
					windowWidth = container.width(),
					scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
					appendOffset = container.offset();
	
				var parentsZindex = [];
				this.element.parents().each(function(){
					var itemZIndex = $(this).css('z-index');
					if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
				});
				var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
				var offset = this.component ? this.component.parent().offset() : this.element.offset();
				var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
				var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
				var left = offset.left - appendOffset.left,
					top = offset.top - appendOffset.top;
	
				if (this.o.container !== 'body') {
					top += scrollTop;
				}
	
				this.picker.removeClass(
					'datepicker-orient-top datepicker-orient-bottom '+
					'datepicker-orient-right datepicker-orient-left'
				);
	
				if (this.o.orientation.x !== 'auto'){
					this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
					if (this.o.orientation.x === 'right')
						left -= calendarWidth - width;
				}
				// auto x orientation is best-placement: if it crosses a window
				// edge, fudge it sideways
				else {
					if (offset.left < 0) {
						// component is outside the window on the left side. Move it into visible range
						this.picker.addClass('datepicker-orient-left');
						left -= offset.left - visualPadding;
					} else if (left + calendarWidth > windowWidth) {
						// the calendar passes the widow right edge. Align it to component right side
						this.picker.addClass('datepicker-orient-right');
						left += width - calendarWidth;
					} else {
						// Default to left
						this.picker.addClass('datepicker-orient-left');
					}
				}
	
				// auto y orientation is best-situation: top or bottom, no fudging,
				// decision based on which shows more of the calendar
				var yorient = this.o.orientation.y,
					top_overflow;
				if (yorient === 'auto'){
					top_overflow = -scrollTop + top - calendarHeight;
					yorient = top_overflow < 0 ? 'bottom' : 'top';
				}
	
				this.picker.addClass('datepicker-orient-' + yorient);
				if (yorient === 'top')
					top -= calendarHeight + parseInt(this.picker.css('padding-top'));
				else
					top += height;
	
				if (this.o.rtl) {
					var right = windowWidth - (left + width);
					this.picker.css({
						top: top,
						right: right,
						zIndex: zIndex
					});
				} else {
					this.picker.css({
						top: top,
						left: left,
						zIndex: zIndex
					});
				}
				return this;
			},
	
			_allow_update: true,
			update: function(){
				if (!this._allow_update)
					return this;
	
				var oldDates = this.dates.copy(),
					dates = [],
					fromArgs = false;
				if (arguments.length){
					$.each(arguments, $.proxy(function(i, date){
						if (date instanceof Date)
							date = this._local_to_utc(date);
						dates.push(date);
					}, this));
					fromArgs = true;
				}
				else {
					dates = this.isInput
							? this.element.val()
							: this.element.data('date') || this.inputField.val();
					if (dates && this.o.multidate)
						dates = dates.split(this.o.multidateSeparator);
					else
						dates = [dates];
					delete this.element.data().date;
				}
	
				dates = $.map(dates, $.proxy(function(date){
					return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
				}, this));
				dates = $.grep(dates, $.proxy(function(date){
					return (
						!this.dateWithinRange(date) ||
						!date
					);
				}, this), true);
				this.dates.replace(dates);
	
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
				else
					this.viewDate = this.o.defaultViewDate;
	
				if (fromArgs){
					// setting date by clicking
					this.setValue();
				}
				else if (dates.length){
					// setting date by typing
					if (String(oldDates) !== String(this.dates))
						this._trigger('changeDate');
				}
				if (!this.dates.length && oldDates.length)
					this._trigger('clearDate');
	
				this.fill();
				this.element.change();
				return this;
			},
	
			fillDow: function(){
				var dowCnt = this.o.weekStart,
					html = '<tr>';
				if (this.o.calendarWeeks){
					this.picker.find('.datepicker-days .datepicker-switch')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});
					html += '<th class="cw">&#160;</th>';
				}
				while (dowCnt < this.o.weekStart + 7){
					html += '<th class="dow';
	        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1)
	          html += ' disabled';
	        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
				}
				html += '</tr>';
				this.picker.find('.datepicker-days thead').append(html);
			},
	
			fillMonths: function(){
	      var localDate = this._utc_to_local(this.viewDate);
				var html = '',
				i = 0;
				while (i < 12){
	        var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
					html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++]+'</span>';
				}
				this.picker.find('.datepicker-months td').html(html);
			},
	
			setRange: function(range){
				if (!range || !range.length)
					delete this.range;
				else
					this.range = $.map(range, function(d){
						return d.valueOf();
					});
				this.fill();
			},
	
			getClassNames: function(date){
				var cls = [],
					year = this.viewDate.getUTCFullYear(),
					month = this.viewDate.getUTCMonth(),
					today = new Date();
				if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
					cls.push('old');
				}
				else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
					cls.push('new');
				}
				if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
					cls.push('focused');
				// Compare internal UTC date with local today, not UTC today
				if (this.o.todayHighlight &&
					date.getUTCFullYear() === today.getFullYear() &&
					date.getUTCMonth() === today.getMonth() &&
					date.getUTCDate() === today.getDate()){
					cls.push('today');
				}
				if (this.dates.contains(date) !== -1)
					cls.push('active');
				if (!this.dateWithinRange(date)){
					cls.push('disabled');
				}
				if (this.dateIsDisabled(date)){
					cls.push('disabled', 'disabled-date');	
				} 
				if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
					cls.push('highlighted');
				}
	
				if (this.range){
					if (date > this.range[0] && date < this.range[this.range.length-1]){
						cls.push('range');
					}
					if ($.inArray(date.valueOf(), this.range) !== -1){
						cls.push('selected');
					}
					if (date.valueOf() === this.range[0]){
	          cls.push('range-start');
	        }
	        if (date.valueOf() === this.range[this.range.length-1]){
	          cls.push('range-end');
	        }
				}
				return cls;
			},
	
			_fill_yearsView: function(selector, cssClass, factor, step, currentYear, startYear, endYear, callback){
				var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;
	
				html      = '';
				view      = this.picker.find(selector);
				year      = parseInt(currentYear / factor, 10) * factor;
				startStep = parseInt(startYear / step, 10) * step;
				endStep   = parseInt(endYear / step, 10) * step;
				steps     = $.map(this.dates, function(d){
					return parseInt(d.getUTCFullYear() / step, 10) * step;
				});
	
				view.find('.datepicker-switch').text(year + '-' + (year + step * 9));
	
				thisYear = year - step;
				for (i = -1; i < 11; i += 1) {
					classes = [cssClass];
					tooltip = null;
	
					if (i === -1) {
						classes.push('old');
					} else if (i === 10) {
						classes.push('new');
					}
					if ($.inArray(thisYear, steps) !== -1) {
						classes.push('active');
					}
					if (thisYear < startStep || thisYear > endStep) {
						classes.push('disabled');
					}
	        if (thisYear === this.viewDate.getFullYear()) {
					  classes.push('focused');
	        }
	
					if (callback !== $.noop) {
						before = callback(new Date(thisYear, 0, 1));
						if (before === undefined) {
							before = {};
						} else if (typeof(before) === 'boolean') {
							before = {enabled: before};
						} else if (typeof(before) === 'string') {
							before = {classes: before};
						}
						if (before.enabled === false) {
							classes.push('disabled');
						}
						if (before.classes) {
							classes = classes.concat(before.classes.split(/\s+/));
						}
						if (before.tooltip) {
							tooltip = before.tooltip;
						}
					}
	
					html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
					thisYear += step;
				}
				view.find('td').html(html);
			},
	
			fill: function(){
				var d = new Date(this.viewDate),
					year = d.getUTCFullYear(),
					month = d.getUTCMonth(),
					startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
					startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
					endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
					endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
					todaytxt = dates[this.o.language].today || dates['en'].today || '',
					cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
					titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
					tooltip,
					before;
				if (isNaN(year) || isNaN(month))
					return;
				this.picker.find('.datepicker-days .datepicker-switch')
							.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
				this.picker.find('tfoot .today')
							.text(todaytxt)
							.toggle(this.o.todayBtn !== false);
				this.picker.find('tfoot .clear')
							.text(cleartxt)
							.toggle(this.o.clearBtn !== false);
				this.picker.find('thead .datepicker-title')
							.text(this.o.title)
							.toggle(this.o.title !== '');
				this.updateNavArrows();
				this.fillMonths();
				var prevMonth = UTCDate(year, month-1, 28),
					day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
				prevMonth.setUTCDate(day);
				prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
				var nextMonth = new Date(prevMonth);
				if (prevMonth.getUTCFullYear() < 100){
	        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
	      }
				nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
				nextMonth = nextMonth.valueOf();
				var html = [];
				var clsName;
				while (prevMonth.valueOf() < nextMonth){
					if (prevMonth.getUTCDay() === this.o.weekStart){
						html.push('<tr>');
						if (this.o.calendarWeeks){
							// ISO 8601: First week contains first thursday.
							// ISO also states week starts on Monday, but we can be more abstract here.
							var
								// Start of current week: based on weekstart/current date
								ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
								// Thursday of this week
								th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
								// First Thursday of year, year from thursday
								yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
								// Calendar week: ms between thursdays, div ms per day, div 7 days
								calWeek =  (th - yth) / 864e5 / 7 + 1;
							html.push('<td class="cw">'+ calWeek +'</td>');
						}
					}
					clsName = this.getClassNames(prevMonth);
					clsName.push('day');
	
					if (this.o.beforeShowDay !== $.noop){
						before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
						if (before === undefined)
							before = {};
						else if (typeof(before) === 'boolean')
							before = {enabled: before};
						else if (typeof(before) === 'string')
							before = {classes: before};
						if (before.enabled === false)
							clsName.push('disabled');
						if (before.classes)
							clsName = clsName.concat(before.classes.split(/\s+/));
						if (before.tooltip)
							tooltip = before.tooltip;
					}
	
					//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
					//Fallback to unique function for older jquery versions
					if ($.isFunction($.uniqueSort)) {
						clsName = $.uniqueSort(clsName);
					} else {
						clsName = $.unique(clsName);
					}
	
					html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
					tooltip = null;
					if (prevMonth.getUTCDay() === this.o.weekEnd){
						html.push('</tr>');
					}
					prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
				}
				this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
	
				var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
				var months = this.picker.find('.datepicker-months')
							.find('.datepicker-switch')
								.text(this.o.maxViewMode < 2 ? monthsTitle : year)
								.end()
							.find('span').removeClass('active');
	
				$.each(this.dates, function(i, d){
					if (d.getUTCFullYear() === year)
						months.eq(d.getUTCMonth()).addClass('active');
				});
	
				if (year < startYear || year > endYear){
					months.addClass('disabled');
				}
				if (year === startYear){
					months.slice(0, startMonth).addClass('disabled');
				}
				if (year === endYear){
					months.slice(endMonth+1).addClass('disabled');
				}
	
				if (this.o.beforeShowMonth !== $.noop){
					var that = this;
					$.each(months, function(i, month){
	          var moDate = new Date(year, i, 1);
	          var before = that.o.beforeShowMonth(moDate);
						if (before === undefined)
							before = {};
						else if (typeof(before) === 'boolean')
							before = {enabled: before};
						else if (typeof(before) === 'string')
							before = {classes: before};
						if (before.enabled === false && !$(month).hasClass('disabled'))
						    $(month).addClass('disabled');
						if (before.classes)
						    $(month).addClass(before.classes);
						if (before.tooltip)
						    $(month).prop('title', before.tooltip);
					});
				}
	
				// Generating decade/years picker
				this._fill_yearsView(
					'.datepicker-years',
					'year',
					10,
					1,
					year,
					startYear,
					endYear,
					this.o.beforeShowYear
				);
	
				// Generating century/decades picker
				this._fill_yearsView(
					'.datepicker-decades',
					'decade',
					100,
					10,
					year,
					startYear,
					endYear,
					this.o.beforeShowDecade
				);
	
				// Generating millennium/centuries picker
				this._fill_yearsView(
					'.datepicker-centuries',
					'century',
					1000,
					100,
					year,
					startYear,
					endYear,
					this.o.beforeShowCentury
				);
			},
	
			updateNavArrows: function(){
				if (!this._allow_update)
					return;
	
				var d = new Date(this.viewDate),
					year = d.getUTCFullYear(),
					month = d.getUTCMonth();
				switch (this.viewMode){
					case 0:
						if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
							this.picker.find('.prev').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
							this.picker.find('.next').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
					case 1:
					case 2:
					case 3:
					case 4:
						if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
							this.picker.find('.prev').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
							this.picker.find('.next').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
				}
			},
	
			click: function(e){
				e.preventDefault();
				e.stopPropagation();
	
				var target, dir, day, year, month, monthChanged, yearChanged;
				target = $(e.target);
	
				// Clicked on the switch
				if (target.hasClass('datepicker-switch')){
					this.showMode(1);
				}
	
				// Clicked on prev or next
				var navArrow = target.closest('.prev, .next');
				if (navArrow.length > 0) {
					dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
					if (this.viewMode === 0){
						this.viewDate = this.moveMonth(this.viewDate, dir);
						this._trigger('changeMonth', this.viewDate);
					} else {
						this.viewDate = this.moveYear(this.viewDate, dir);
						if (this.viewMode === 1){
							this._trigger('changeYear', this.viewDate);
						}
					}
					this.fill();
				}
	
				// Clicked on today button
				if (target.hasClass('today') && !target.hasClass('day')){
					this.showMode(-2);
					this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
				}
	
				// Clicked on clear button
				if (target.hasClass('clear')){
					this.clearDates();
				}
	
				if (!target.hasClass('disabled')){
					// Clicked on a day
					if (target.hasClass('day')){
						day = parseInt(target.text(), 10) || 1;
						year = this.viewDate.getUTCFullYear();
						month = this.viewDate.getUTCMonth();
	
						// From last month
						if (target.hasClass('old')){
							if (month === 0) {
								month = 11;
								year = year - 1;
								monthChanged = true;
								yearChanged = true;
							} else {
								month = month - 1;
								monthChanged = true;
	 						}
	 					}
	
						// From next month
						if (target.hasClass('new')) {
							if (month === 11){
								month = 0;
								year = year + 1;
								monthChanged = true;
								yearChanged = true;
	 						} else {
								month = month + 1;
								monthChanged = true;
	 						}
						}
						this._setDate(UTCDate(year, month, day));
						if (yearChanged) {
							this._trigger('changeYear', this.viewDate);
						}
						if (monthChanged) {
							this._trigger('changeMonth', this.viewDate);
						}
					}
	
					// Clicked on a month
					if (target.hasClass('month')) {
						this.viewDate.setUTCDate(1);
						day = 1;
						month = target.parent().find('span').index(target);
						year = this.viewDate.getUTCFullYear();
						this.viewDate.setUTCMonth(month);
						this._trigger('changeMonth', this.viewDate);
						if (this.o.minViewMode === 1){
							this._setDate(UTCDate(year, month, day));
							this.showMode();
						} else {
							this.showMode(-1);
						}
						this.fill();
					}
	
					// Clicked on a year
					if (target.hasClass('year')
							|| target.hasClass('decade')
							|| target.hasClass('century')) {
						this.viewDate.setUTCDate(1);
	
						day = 1;
						month = 0;
						year = parseInt(target.text(), 10)||0;
						this.viewDate.setUTCFullYear(year);
	
						if (target.hasClass('year')){
							this._trigger('changeYear', this.viewDate);
							if (this.o.minViewMode === 2){
								this._setDate(UTCDate(year, month, day));
							}
						}
						if (target.hasClass('decade')){
							this._trigger('changeDecade', this.viewDate);
							if (this.o.minViewMode === 3){
								this._setDate(UTCDate(year, month, day));
							}
						}
						if (target.hasClass('century')){
							this._trigger('changeCentury', this.viewDate);
							if (this.o.minViewMode === 4){
								this._setDate(UTCDate(year, month, day));
							}
						}
	
						this.showMode(-1);
						this.fill();
					}
				}
	
				if (this.picker.is(':visible') && this._focused_from){
					$(this._focused_from).focus();
				}
				delete this._focused_from;
			},
	
			_toggle_multidate: function(date){
				var ix = this.dates.contains(date);
				if (!date){
					this.dates.clear();
				}
	
				if (ix !== -1){
					if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
						this.dates.remove(ix);
					}
				} else if (this.o.multidate === false) {
					this.dates.clear();
					this.dates.push(date);
				}
				else {
					this.dates.push(date);
				}
	
				if (typeof this.o.multidate === 'number')
					while (this.dates.length > this.o.multidate)
						this.dates.remove(0);
			},
	
			_setDate: function(date, which){
				if (!which || which === 'date')
					this._toggle_multidate(date && new Date(date));
				if (!which || which === 'view')
					this.viewDate = date && new Date(date);
	
				this.fill();
				this.setValue();
				if (!which || which !== 'view') {
					this._trigger('changeDate');
				}
				if (this.inputField){
					this.inputField.change();
				}
				if (this.o.autoclose && (!which || which === 'date')){
					this.hide();
				}
			},
	
			moveDay: function(date, dir){
				var newDate = new Date(date);
				newDate.setUTCDate(date.getUTCDate() + dir);
	
				return newDate;
			},
	
			moveWeek: function(date, dir){
				return this.moveDay(date, dir * 7);
			},
	
			moveMonth: function(date, dir){
				if (!isValidDate(date))
					return this.o.defaultViewDate;
				if (!dir)
					return date;
				var new_date = new Date(date.valueOf()),
					day = new_date.getUTCDate(),
					month = new_date.getUTCMonth(),
					mag = Math.abs(dir),
					new_month, test;
				dir = dir > 0 ? 1 : -1;
				if (mag === 1){
					test = dir === -1
						// If going back one month, make sure month is not current month
						// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
						? function(){
							return new_date.getUTCMonth() === month;
						}
						// If going forward one month, make sure month is as expected
						// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
						: function(){
							return new_date.getUTCMonth() !== new_month;
						};
					new_month = month + dir;
					new_date.setUTCMonth(new_month);
					// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
					if (new_month < 0 || new_month > 11)
						new_month = (new_month + 12) % 12;
				}
				else {
					// For magnitudes >1, move one month at a time...
					for (var i=0; i < mag; i++)
						// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
						new_date = this.moveMonth(new_date, dir);
					// ...then reset the day, keeping it in the new month
					new_month = new_date.getUTCMonth();
					new_date.setUTCDate(day);
					test = function(){
						return new_month !== new_date.getUTCMonth();
					};
				}
				// Common date-resetting loop -- if date is beyond end of month, make it
				// end of month
				while (test()){
					new_date.setUTCDate(--day);
					new_date.setUTCMonth(new_month);
				}
				return new_date;
			},
	
			moveYear: function(date, dir){
				return this.moveMonth(date, dir*12);
			},
	
			moveAvailableDate: function(date, dir, fn){
				do {
					date = this[fn](date, dir);
	
					if (!this.dateWithinRange(date))
						return false;
	
					fn = 'moveDay';
				}
				while (this.dateIsDisabled(date));
	
				return date;
			},
	
			weekOfDateIsDisabled: function(date){
				return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
			},
	
			dateIsDisabled: function(date){
				return (
					this.weekOfDateIsDisabled(date) ||
					$.grep(this.o.datesDisabled, function(d){
						return isUTCEquals(date, d);
					}).length > 0
				);
			},
	
			dateWithinRange: function(date){
				return date >= this.o.startDate && date <= this.o.endDate;
			},
	
			keydown: function(e){
				if (!this.picker.is(':visible')){
					if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
						this.show();
						e.stopPropagation();
	        }
					return;
				}
				var dateChanged = false,
					dir, newViewDate,
					focusDate = this.focusDate || this.viewDate;
				switch (e.keyCode){
					case 27: // escape
						if (this.focusDate){
							this.focusDate = null;
							this.viewDate = this.dates.get(-1) || this.viewDate;
							this.fill();
						}
						else
							this.hide();
						e.preventDefault();
						e.stopPropagation();
						break;
					case 37: // left
					case 38: // up
					case 39: // right
					case 40: // down
						if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
							break;
						dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
	          if (this.viewMode === 0) {
	  					if (e.ctrlKey){
	  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
	
	  						if (newViewDate)
	  							this._trigger('changeYear', this.viewDate);
	  					}
	  					else if (e.shiftKey){
	  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
	
	  						if (newViewDate)
	  							this._trigger('changeMonth', this.viewDate);
	  					}
	  					else if (e.keyCode === 37 || e.keyCode === 39){
	  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
	  					}
	  					else if (!this.weekOfDateIsDisabled(focusDate)){
	  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
	  					}
	          } else if (this.viewMode === 1) {
	            if (e.keyCode === 38 || e.keyCode === 40) {
	              dir = dir * 4;
	            }
	            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
	          } else if (this.viewMode === 2) {
	            if (e.keyCode === 38 || e.keyCode === 40) {
	              dir = dir * 4;
	            }
	            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
	          }
						if (newViewDate){
							this.focusDate = this.viewDate = newViewDate;
							this.setValue();
							this.fill();
							e.preventDefault();
						}
						break;
					case 13: // enter
						if (!this.o.forceParse)
							break;
						focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
						if (this.o.keyboardNavigation) {
							this._toggle_multidate(focusDate);
							dateChanged = true;
						}
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.setValue();
						this.fill();
						if (this.picker.is(':visible')){
							e.preventDefault();
							e.stopPropagation();
							if (this.o.autoclose)
								this.hide();
						}
						break;
					case 9: // tab
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
						this.hide();
						break;
				}
				if (dateChanged){
					if (this.dates.length)
						this._trigger('changeDate');
					else
						this._trigger('clearDate');
					if (this.inputField){
						this.inputField.change();
					}
				}
			},
	
			showMode: function(dir){
				if (dir){
					this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
				}
				this.picker
					.children('div')
					.hide()
					.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
						.show();
				this.updateNavArrows();
			}
		};
	
		var DateRangePicker = function(element, options){
			$(element).data('datepicker', this);
			this.element = $(element);
			this.inputs = $.map(options.inputs, function(i){
				return i.jquery ? i[0] : i;
			});
			delete options.inputs;
	
			datepickerPlugin.call($(this.inputs), options)
				.on('changeDate', $.proxy(this.dateUpdated, this));
	
			this.pickers = $.map(this.inputs, function(i){
				return $(i).data('datepicker');
			});
			this.updateDates();
		};
		DateRangePicker.prototype = {
			updateDates: function(){
				this.dates = $.map(this.pickers, function(i){
					return i.getUTCDate();
				});
				this.updateRanges();
			},
			updateRanges: function(){
				var range = $.map(this.dates, function(d){
					return d.valueOf();
				});
				$.each(this.pickers, function(i, p){
					p.setRange(range);
				});
			},
			dateUpdated: function(e){
				// `this.updating` is a workaround for preventing infinite recursion
				// between `changeDate` triggering and `setUTCDate` calling.  Until
				// there is a better mechanism.
				if (this.updating)
					return;
				this.updating = true;
	
				var dp = $(e.target).data('datepicker');
	
				if (typeof(dp) === "undefined") {
					return;
				}
	
				var new_date = dp.getUTCDate(),
					i = $.inArray(e.target, this.inputs),
					j = i - 1,
					k = i + 1,
					l = this.inputs.length;
				if (i === -1)
					return;
	
				$.each(this.pickers, function(i, p){
					if (!p.getUTCDate())
						p.setUTCDate(new_date);
				});
	
				if (new_date < this.dates[j]){
					// Date being moved earlier/left
					while (j >= 0 && new_date < this.dates[j]){
						this.pickers[j--].setUTCDate(new_date);
					}
				}
				else if (new_date > this.dates[k]){
					// Date being moved later/right
					while (k < l && new_date > this.dates[k]){
						this.pickers[k++].setUTCDate(new_date);
					}
				}
				this.updateDates();
	
				delete this.updating;
			},
			remove: function(){
				$.map(this.pickers, function(p){ p.remove(); });
				delete this.element.data().datepicker;
			}
		};
	
		function opts_from_el(el, prefix){
			// Derive options from element data-attrs
			var data = $(el).data(),
				out = {}, inkey,
				replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
			prefix = new RegExp('^' + prefix.toLowerCase());
			function re_lower(_,a){
				return a.toLowerCase();
			}
			for (var key in data)
				if (prefix.test(key)){
					inkey = key.replace(replace, re_lower);
					out[inkey] = data[key];
				}
			return out;
		}
	
		function opts_from_locale(lang){
			// Derive options from locale plugins
			var out = {};
			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					return;
			}
			var d = dates[lang];
			$.each(locale_opts, function(i,k){
				if (k in d)
					out[k] = d[k];
			});
			return out;
		}
	
		var old = $.fn.datepicker;
		var datepickerPlugin = function(option){
			var args = Array.apply(null, arguments);
			args.shift();
			var internal_return;
			this.each(function(){
				var $this = $(this),
					data = $this.data('datepicker'),
					options = typeof option === 'object' && option;
				if (!data){
					var elopts = opts_from_el(this, 'date'),
						// Preliminary otions
						xopts = $.extend({}, defaults, elopts, options),
						locopts = opts_from_locale(xopts.language),
						// Options priority: js args, data-attrs, locales, defaults
						opts = $.extend({}, defaults, locopts, elopts, options);
					if ($this.hasClass('input-daterange') || opts.inputs){
						$.extend(opts, {
							inputs: opts.inputs || $this.find('input').toArray()
						});
						data = new DateRangePicker(this, opts);
					}
					else {
						data = new Datepicker(this, opts);
					}
					$this.data('datepicker', data);
				}
				if (typeof option === 'string' && typeof data[option] === 'function'){
					internal_return = data[option].apply(data, args);
				}
			});
	
			if (
				internal_return === undefined ||
				internal_return instanceof Datepicker ||
				internal_return instanceof DateRangePicker
			)
				return this;
	
			if (this.length > 1)
				throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
			else
				return internal_return;
		};
		$.fn.datepicker = datepickerPlugin;
	
		var defaults = $.fn.datepicker.defaults = {
			assumeNearbyYear: false,
			autoclose: false,
			beforeShowDay: $.noop,
			beforeShowMonth: $.noop,
			beforeShowYear: $.noop,
			beforeShowDecade: $.noop,
			beforeShowCentury: $.noop,
			calendarWeeks: false,
			clearBtn: false,
			toggleActive: false,
			daysOfWeekDisabled: [],
			daysOfWeekHighlighted: [],
			datesDisabled: [],
			endDate: Infinity,
			forceParse: true,
			format: 'mm/dd/yyyy',
			keyboardNavigation: true,
			language: 'en',
			minViewMode: 0,
			maxViewMode: 4,
			multidate: false,
			multidateSeparator: ',',
			orientation: "auto",
			rtl: false,
			startDate: -Infinity,
			startView: 0,
			todayBtn: false,
			todayHighlight: false,
			weekStart: 0,
			disableTouchKeyboard: false,
			enableOnReadonly: true,
			showOnFocus: true,
			zIndexOffset: 10,
			container: 'body',
			immediateUpdates: false,
			title: '',
			templates: {
				leftArrow: '&laquo;',
				rightArrow: '&raquo;'
			}
		};
		var locale_opts = $.fn.datepicker.locale_opts = [
			'format',
			'rtl',
			'weekStart'
		];
		$.fn.datepicker.Constructor = Datepicker;
		var dates = $.fn.datepicker.dates = {
			en: {
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				today: "Today",
				clear: "Clear",
				titleFormat: "MM yyyy"
			}
		};
	
		var DPGlobal = {
			modes: [
				{
					clsName: 'days',
					navFnc: 'Month',
					navStep: 1
				},
				{
					clsName: 'months',
					navFnc: 'FullYear',
					navStep: 1
				},
				{
					clsName: 'years',
					navFnc: 'FullYear',
					navStep: 10
				},
				{
					clsName: 'decades',
					navFnc: 'FullDecade',
					navStep: 100
				},
				{
					clsName: 'centuries',
					navFnc: 'FullCentury',
					navStep: 1000
			}],
			isLeapYear: function(year){
				return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
			},
			getDaysInMonth: function(year, month){
				return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
			},
			validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
			nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
			parseFormat: function(format){
				if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
	                return format;
	            // IE treats \0 as a string end in inputs (truncating the value),
				// so it's a bad format delimiter, anyway
				var separators = format.replace(this.validParts, '\0').split('\0'),
					parts = format.match(this.validParts);
				if (!separators || !separators.length || !parts || parts.length === 0){
					throw new Error("Invalid date format.");
				}
				return {separators: separators, parts: parts};
			},
			parseDate: function(date, format, language, assumeNearby){
				if (!date)
					return undefined;
				if (date instanceof Date)
					return date;
				if (typeof format === 'string')
					format = DPGlobal.parseFormat(format);
				if (format.toValue)
	                return format.toValue(date, format, language);
	            var part_re = /([\-+]\d+)([dmwy])/,
					parts = date.match(/([\-+]\d+)([dmwy])/g),
					fn_map = {
						d: 'moveDay',
						m: 'moveMonth',
						w: 'moveWeek',
						y: 'moveYear'
					},
					dateAliases = {
						yesterday: '-1d',
						today: '+0d',
						tomorrow: '+1d'
					},
					part, dir, i, fn;
				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
					for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
					}
					return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
	
				if (typeof dateAliases[date] !== 'undefined') {
					date = dateAliases[date];
					parts = date.match(/([\-+]\d+)([dmwy])/g);
	
					if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
						date = new Date();
					  	for (i=0; i < parts.length; i++){
							part = part_re.exec(parts[i]);
							dir = parseInt(part[1]);
							fn = fn_map[part[2]];
							date = Datepicker.prototype[fn](date, dir);
					  	}
	
				  		return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
					}
				}
	
				parts = date && date.match(this.nonpunctuation) || [];
				date = new Date();
	
				function applyNearbyYear(year, threshold){
					if (threshold === true)
						threshold = 10;
	
					// if year is 2 digits or less, than the user most likely is trying to get a recent century
					if (year < 100){
						year += 2000;
						// if the new year is more than threshold years in advance, use last century
						if (year > ((new Date()).getFullYear()+threshold)){
							year -= 100;
						}
					}
	
					return year;
				}
	
				var parsed = {},
					setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
					setters_map = {
						yyyy: function(d,v){
							return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
						},
						yy: function(d,v){
							return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
						},
						m: function(d,v){
							if (isNaN(d))
								return d;
							v -= 1;
							while (v < 0) v += 12;
							v %= 12;
							d.setUTCMonth(v);
							while (d.getUTCMonth() !== v)
								d.setUTCDate(d.getUTCDate()-1);
							return d;
						},
						d: function(d,v){
							return d.setUTCDate(v);
						}
					},
					val, filtered;
				setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
				setters_map['dd'] = setters_map['d'];
				date = UTCToday();
				var fparts = format.parts.slice();
				// Remove noop parts
				if (parts.length !== fparts.length){
					fparts = $(fparts).filter(function(i,p){
						return $.inArray(p, setters_order) !== -1;
					}).toArray();
				}
				// Process remainder
				function match_part(){
					var m = this.slice(0, parts[i].length),
						p = parts[i].slice(0, m.length);
					return m.toLowerCase() === p.toLowerCase();
				}
				if (parts.length === fparts.length){
					var cnt;
					for (i=0, cnt = fparts.length; i < cnt; i++){
						val = parseInt(parts[i], 10);
						part = fparts[i];
						if (isNaN(val)){
							switch (part){
								case 'MM':
									filtered = $(dates[language].months).filter(match_part);
									val = $.inArray(filtered[0], dates[language].months) + 1;
									break;
								case 'M':
									filtered = $(dates[language].monthsShort).filter(match_part);
									val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
									break;
							}
						}
						parsed[part] = val;
					}
					var _date, s;
					for (i=0; i < setters_order.length; i++){
						s = setters_order[i];
						if (s in parsed && !isNaN(parsed[s])){
							_date = new Date(date);
							setters_map[s](_date, parsed[s]);
							if (!isNaN(_date))
								date = _date;
						}
					}
				}
				return date;
			},
			formatDate: function(date, format, language){
				if (!date)
					return '';
				if (typeof format === 'string')
					format = DPGlobal.parseFormat(format);
				if (format.toDisplay)
	                return format.toDisplay(date, format, language);
	            var val = {
					d: date.getUTCDate(),
					D: dates[language].daysShort[date.getUTCDay()],
					DD: dates[language].days[date.getUTCDay()],
					m: date.getUTCMonth() + 1,
					M: dates[language].monthsShort[date.getUTCMonth()],
					MM: dates[language].months[date.getUTCMonth()],
					yy: date.getUTCFullYear().toString().substring(2),
					yyyy: date.getUTCFullYear()
				};
				val.dd = (val.d < 10 ? '0' : '') + val.d;
				val.mm = (val.m < 10 ? '0' : '') + val.m;
				date = [];
				var seps = $.extend([], format.separators);
				for (var i=0, cnt = format.parts.length; i <= cnt; i++){
					if (seps.length)
						date.push(seps.shift());
					date.push(val[format.parts[i]]);
				}
				return date.join('');
			},
			headTemplate: '<thead>'+
				              '<tr>'+
				                '<th colspan="7" class="datepicker-title"></th>'+
				              '</tr>'+
								'<tr>'+
									'<th class="prev">&laquo;</th>'+
									'<th colspan="5" class="datepicker-switch"></th>'+
									'<th class="next">&raquo;</th>'+
								'</tr>'+
							'</thead>',
			contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
			footTemplate: '<tfoot>'+
								'<tr>'+
									'<th colspan="7" class="today"></th>'+
								'</tr>'+
								'<tr>'+
									'<th colspan="7" class="clear"></th>'+
								'</tr>'+
							'</tfoot>'
		};
		DPGlobal.template = '<div class="datepicker">'+
								'<div class="datepicker-days">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										'<tbody></tbody>'+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-months">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-years">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-decades">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-centuries">'+
									'<table class="table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
							'</div>';
	
		$.fn.datepicker.DPGlobal = DPGlobal;
	
	
		/* DATEPICKER NO CONFLICT
		* =================== */
	
		$.fn.datepicker.noConflict = function(){
			$.fn.datepicker = old;
			return this;
		};
	
		/* DATEPICKER VERSION
		 * =================== */
		$.fn.datepicker.version = '1.6.4';
	
		/* DATEPICKER DATA-API
		* ================== */
	
		$(document).on(
			'focus.datepicker.data-api click.datepicker.data-api',
			'[data-provide="datepicker"]',
			function(e){
				var $this = $(this);
				if ($this.data('datepicker'))
					return;
				e.preventDefault();
				// component click requires us to explicitly show it
				datepickerPlugin.call($this, 'show');
			}
		);
		$(function(){
			datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
		});
	
	}));


/***/ },
/* 119 */
/*!******************************************************************!*\
  !*** ./~/bootstrap-datepicker/dist/css/bootstrap-datepicker.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../css-loader!./bootstrap-datepicker.css */ 120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../style-loader/addStyles.js */ 114)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js!./bootstrap-datepicker.css", function() {
				var newContent = require("!!../../../css-loader/index.js!./bootstrap-datepicker.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/*!*********************************************************************************!*\
  !*** ./~/css-loader!./~/bootstrap-datepicker/dist/css/bootstrap-datepicker.css ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)\n *\n * Copyright 2012 Stefan Petre\n * Improvements by Andrew Rowls\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\n */\n.datepicker {\n  padding: 4px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  direction: ltr;\n}\n.datepicker-inline {\n  width: 220px;\n}\n.datepicker.datepicker-rtl {\n  direction: rtl;\n}\n.datepicker.datepicker-rtl table tr td span {\n  float: right;\n}\n.datepicker-dropdown {\n  top: 0;\n  left: 0;\n}\n.datepicker-dropdown:before {\n  content: '';\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #999;\n  border-top: 0;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n}\n.datepicker-dropdown:after {\n  content: '';\n  display: inline-block;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-top: 0;\n  position: absolute;\n}\n.datepicker-dropdown.datepicker-orient-left:before {\n  left: 6px;\n}\n.datepicker-dropdown.datepicker-orient-left:after {\n  left: 7px;\n}\n.datepicker-dropdown.datepicker-orient-right:before {\n  right: 6px;\n}\n.datepicker-dropdown.datepicker-orient-right:after {\n  right: 7px;\n}\n.datepicker-dropdown.datepicker-orient-bottom:before {\n  top: -7px;\n}\n.datepicker-dropdown.datepicker-orient-bottom:after {\n  top: -6px;\n}\n.datepicker-dropdown.datepicker-orient-top:before {\n  bottom: -7px;\n  border-bottom: 0;\n  border-top: 7px solid #999;\n}\n.datepicker-dropdown.datepicker-orient-top:after {\n  bottom: -6px;\n  border-bottom: 0;\n  border-top: 6px solid #fff;\n}\n.datepicker table {\n  margin: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.datepicker td,\n.datepicker th {\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n  border: none;\n}\n.table-striped .datepicker table tr td,\n.table-striped .datepicker table tr th {\n  background-color: transparent;\n}\n.datepicker table tr td.day:hover,\n.datepicker table tr td.day.focused {\n  background: #eee;\n  cursor: pointer;\n}\n.datepicker table tr td.old,\n.datepicker table tr td.new {\n  color: #999;\n}\n.datepicker table tr td.disabled,\n.datepicker table tr td.disabled:hover {\n  background: none;\n  color: #999;\n  cursor: default;\n}\n.datepicker table tr td.highlighted {\n  background: #d9edf7;\n  border-radius: 0;\n}\n.datepicker table tr td.today,\n.datepicker table tr td.today:hover,\n.datepicker table tr td.today.disabled,\n.datepicker table tr td.today.disabled:hover {\n  background-color: #fde19a;\n  background-image: -moz-linear-gradient(to bottom, #fdd49a, #fdf59a);\n  background-image: -ms-linear-gradient(to bottom, #fdd49a, #fdf59a);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fdd49a), to(#fdf59a));\n  background-image: -webkit-linear-gradient(to bottom, #fdd49a, #fdf59a);\n  background-image: -o-linear-gradient(to bottom, #fdd49a, #fdf59a);\n  background-image: linear-gradient(to bottom, #fdd49a, #fdf59a);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdd49a', endColorstr='#fdf59a', GradientType=0);\n  border-color: #fdf59a #fdf59a #fbed50;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  color: #000;\n}\n.datepicker table tr td.today:hover,\n.datepicker table tr td.today:hover:hover,\n.datepicker table tr td.today.disabled:hover,\n.datepicker table tr td.today.disabled:hover:hover,\n.datepicker table tr td.today:active,\n.datepicker table tr td.today:hover:active,\n.datepicker table tr td.today.disabled:active,\n.datepicker table tr td.today.disabled:hover:active,\n.datepicker table tr td.today.active,\n.datepicker table tr td.today:hover.active,\n.datepicker table tr td.today.disabled.active,\n.datepicker table tr td.today.disabled:hover.active,\n.datepicker table tr td.today.disabled,\n.datepicker table tr td.today:hover.disabled,\n.datepicker table tr td.today.disabled.disabled,\n.datepicker table tr td.today.disabled:hover.disabled,\n.datepicker table tr td.today[disabled],\n.datepicker table tr td.today:hover[disabled],\n.datepicker table tr td.today.disabled[disabled],\n.datepicker table tr td.today.disabled:hover[disabled] {\n  background-color: #fdf59a;\n}\n.datepicker table tr td.today:active,\n.datepicker table tr td.today:hover:active,\n.datepicker table tr td.today.disabled:active,\n.datepicker table tr td.today.disabled:hover:active,\n.datepicker table tr td.today.active,\n.datepicker table tr td.today:hover.active,\n.datepicker table tr td.today.disabled.active,\n.datepicker table tr td.today.disabled:hover.active {\n  background-color: #fbf069 \\9;\n}\n.datepicker table tr td.today:hover:hover {\n  color: #000;\n}\n.datepicker table tr td.today.active:hover {\n  color: #fff;\n}\n.datepicker table tr td.range,\n.datepicker table tr td.range:hover,\n.datepicker table tr td.range.disabled,\n.datepicker table tr td.range.disabled:hover {\n  background: #eee;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.datepicker table tr td.range.today,\n.datepicker table tr td.range.today:hover,\n.datepicker table tr td.range.today.disabled,\n.datepicker table tr td.range.today.disabled:hover {\n  background-color: #f3d17a;\n  background-image: -moz-linear-gradient(to bottom, #f3c17a, #f3e97a);\n  background-image: -ms-linear-gradient(to bottom, #f3c17a, #f3e97a);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f3c17a), to(#f3e97a));\n  background-image: -webkit-linear-gradient(to bottom, #f3c17a, #f3e97a);\n  background-image: -o-linear-gradient(to bottom, #f3c17a, #f3e97a);\n  background-image: linear-gradient(to bottom, #f3c17a, #f3e97a);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3c17a', endColorstr='#f3e97a', GradientType=0);\n  border-color: #f3e97a #f3e97a #edde34;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n}\n.datepicker table tr td.range.today:hover,\n.datepicker table tr td.range.today:hover:hover,\n.datepicker table tr td.range.today.disabled:hover,\n.datepicker table tr td.range.today.disabled:hover:hover,\n.datepicker table tr td.range.today:active,\n.datepicker table tr td.range.today:hover:active,\n.datepicker table tr td.range.today.disabled:active,\n.datepicker table tr td.range.today.disabled:hover:active,\n.datepicker table tr td.range.today.active,\n.datepicker table tr td.range.today:hover.active,\n.datepicker table tr td.range.today.disabled.active,\n.datepicker table tr td.range.today.disabled:hover.active,\n.datepicker table tr td.range.today.disabled,\n.datepicker table tr td.range.today:hover.disabled,\n.datepicker table tr td.range.today.disabled.disabled,\n.datepicker table tr td.range.today.disabled:hover.disabled,\n.datepicker table tr td.range.today[disabled],\n.datepicker table tr td.range.today:hover[disabled],\n.datepicker table tr td.range.today.disabled[disabled],\n.datepicker table tr td.range.today.disabled:hover[disabled] {\n  background-color: #f3e97a;\n}\n.datepicker table tr td.range.today:active,\n.datepicker table tr td.range.today:hover:active,\n.datepicker table tr td.range.today.disabled:active,\n.datepicker table tr td.range.today.disabled:hover:active,\n.datepicker table tr td.range.today.active,\n.datepicker table tr td.range.today:hover.active,\n.datepicker table tr td.range.today.disabled.active,\n.datepicker table tr td.range.today.disabled:hover.active {\n  background-color: #efe24b \\9;\n}\n.datepicker table tr td.selected,\n.datepicker table tr td.selected:hover,\n.datepicker table tr td.selected.disabled,\n.datepicker table tr td.selected.disabled:hover {\n  background-color: #9e9e9e;\n  background-image: -moz-linear-gradient(to bottom, #b3b3b3, #808080);\n  background-image: -ms-linear-gradient(to bottom, #b3b3b3, #808080);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#b3b3b3), to(#808080));\n  background-image: -webkit-linear-gradient(to bottom, #b3b3b3, #808080);\n  background-image: -o-linear-gradient(to bottom, #b3b3b3, #808080);\n  background-image: linear-gradient(to bottom, #b3b3b3, #808080);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3b3b3', endColorstr='#808080', GradientType=0);\n  border-color: #808080 #808080 #595959;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.datepicker table tr td.selected:hover,\n.datepicker table tr td.selected:hover:hover,\n.datepicker table tr td.selected.disabled:hover,\n.datepicker table tr td.selected.disabled:hover:hover,\n.datepicker table tr td.selected:active,\n.datepicker table tr td.selected:hover:active,\n.datepicker table tr td.selected.disabled:active,\n.datepicker table tr td.selected.disabled:hover:active,\n.datepicker table tr td.selected.active,\n.datepicker table tr td.selected:hover.active,\n.datepicker table tr td.selected.disabled.active,\n.datepicker table tr td.selected.disabled:hover.active,\n.datepicker table tr td.selected.disabled,\n.datepicker table tr td.selected:hover.disabled,\n.datepicker table tr td.selected.disabled.disabled,\n.datepicker table tr td.selected.disabled:hover.disabled,\n.datepicker table tr td.selected[disabled],\n.datepicker table tr td.selected:hover[disabled],\n.datepicker table tr td.selected.disabled[disabled],\n.datepicker table tr td.selected.disabled:hover[disabled] {\n  background-color: #808080;\n}\n.datepicker table tr td.selected:active,\n.datepicker table tr td.selected:hover:active,\n.datepicker table tr td.selected.disabled:active,\n.datepicker table tr td.selected.disabled:hover:active,\n.datepicker table tr td.selected.active,\n.datepicker table tr td.selected:hover.active,\n.datepicker table tr td.selected.disabled.active,\n.datepicker table tr td.selected.disabled:hover.active {\n  background-color: #666666 \\9;\n}\n.datepicker table tr td.active,\n.datepicker table tr td.active:hover,\n.datepicker table tr td.active.disabled,\n.datepicker table tr td.active.disabled:hover {\n  background-color: #006dcc;\n  background-image: -moz-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: -ms-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#0044cc));\n  background-image: -webkit-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: -o-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: linear-gradient(to bottom, #08c, #0044cc);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#08c', endColorstr='#0044cc', GradientType=0);\n  border-color: #0044cc #0044cc #002a80;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.datepicker table tr td.active:hover,\n.datepicker table tr td.active:hover:hover,\n.datepicker table tr td.active.disabled:hover,\n.datepicker table tr td.active.disabled:hover:hover,\n.datepicker table tr td.active:active,\n.datepicker table tr td.active:hover:active,\n.datepicker table tr td.active.disabled:active,\n.datepicker table tr td.active.disabled:hover:active,\n.datepicker table tr td.active.active,\n.datepicker table tr td.active:hover.active,\n.datepicker table tr td.active.disabled.active,\n.datepicker table tr td.active.disabled:hover.active,\n.datepicker table tr td.active.disabled,\n.datepicker table tr td.active:hover.disabled,\n.datepicker table tr td.active.disabled.disabled,\n.datepicker table tr td.active.disabled:hover.disabled,\n.datepicker table tr td.active[disabled],\n.datepicker table tr td.active:hover[disabled],\n.datepicker table tr td.active.disabled[disabled],\n.datepicker table tr td.active.disabled:hover[disabled] {\n  background-color: #0044cc;\n}\n.datepicker table tr td.active:active,\n.datepicker table tr td.active:hover:active,\n.datepicker table tr td.active.disabled:active,\n.datepicker table tr td.active.disabled:hover:active,\n.datepicker table tr td.active.active,\n.datepicker table tr td.active:hover.active,\n.datepicker table tr td.active.disabled.active,\n.datepicker table tr td.active.disabled:hover.active {\n  background-color: #003399 \\9;\n}\n.datepicker table tr td span {\n  display: block;\n  width: 23%;\n  height: 54px;\n  line-height: 54px;\n  float: left;\n  margin: 1%;\n  cursor: pointer;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  border-radius: 4px;\n}\n.datepicker table tr td span:hover,\n.datepicker table tr td span.focused {\n  background: #eee;\n}\n.datepicker table tr td span.disabled,\n.datepicker table tr td span.disabled:hover {\n  background: none;\n  color: #999;\n  cursor: default;\n}\n.datepicker table tr td span.active,\n.datepicker table tr td span.active:hover,\n.datepicker table tr td span.active.disabled,\n.datepicker table tr td span.active.disabled:hover {\n  background-color: #006dcc;\n  background-image: -moz-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: -ms-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#0044cc));\n  background-image: -webkit-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: -o-linear-gradient(to bottom, #08c, #0044cc);\n  background-image: linear-gradient(to bottom, #08c, #0044cc);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#08c', endColorstr='#0044cc', GradientType=0);\n  border-color: #0044cc #0044cc #002a80;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.datepicker table tr td span.active:hover,\n.datepicker table tr td span.active:hover:hover,\n.datepicker table tr td span.active.disabled:hover,\n.datepicker table tr td span.active.disabled:hover:hover,\n.datepicker table tr td span.active:active,\n.datepicker table tr td span.active:hover:active,\n.datepicker table tr td span.active.disabled:active,\n.datepicker table tr td span.active.disabled:hover:active,\n.datepicker table tr td span.active.active,\n.datepicker table tr td span.active:hover.active,\n.datepicker table tr td span.active.disabled.active,\n.datepicker table tr td span.active.disabled:hover.active,\n.datepicker table tr td span.active.disabled,\n.datepicker table tr td span.active:hover.disabled,\n.datepicker table tr td span.active.disabled.disabled,\n.datepicker table tr td span.active.disabled:hover.disabled,\n.datepicker table tr td span.active[disabled],\n.datepicker table tr td span.active:hover[disabled],\n.datepicker table tr td span.active.disabled[disabled],\n.datepicker table tr td span.active.disabled:hover[disabled] {\n  background-color: #0044cc;\n}\n.datepicker table tr td span.active:active,\n.datepicker table tr td span.active:hover:active,\n.datepicker table tr td span.active.disabled:active,\n.datepicker table tr td span.active.disabled:hover:active,\n.datepicker table tr td span.active.active,\n.datepicker table tr td span.active:hover.active,\n.datepicker table tr td span.active.disabled.active,\n.datepicker table tr td span.active.disabled:hover.active {\n  background-color: #003399 \\9;\n}\n.datepicker table tr td span.old,\n.datepicker table tr td span.new {\n  color: #999;\n}\n.datepicker .datepicker-switch {\n  width: 145px;\n}\n.datepicker .datepicker-switch,\n.datepicker .prev,\n.datepicker .next,\n.datepicker tfoot tr th {\n  cursor: pointer;\n}\n.datepicker .datepicker-switch:hover,\n.datepicker .prev:hover,\n.datepicker .next:hover,\n.datepicker tfoot tr th:hover {\n  background: #eee;\n}\n.datepicker .cw {\n  font-size: 10px;\n  width: 12px;\n  padding: 0 2px 0 5px;\n  vertical-align: middle;\n}\n.input-append.date .add-on,\n.input-prepend.date .add-on {\n  cursor: pointer;\n}\n.input-append.date .add-on i,\n.input-prepend.date .add-on i {\n  margin-top: 3px;\n}\n.input-daterange input {\n  text-align: center;\n}\n.input-daterange input:first-child {\n  -webkit-border-radius: 3px 0 0 3px;\n  -moz-border-radius: 3px 0 0 3px;\n  border-radius: 3px 0 0 3px;\n}\n.input-daterange input:last-child {\n  -webkit-border-radius: 0 3px 3px 0;\n  -moz-border-radius: 0 3px 3px 0;\n  border-radius: 0 3px 3px 0;\n}\n.input-daterange .add-on {\n  display: inline-block;\n  width: auto;\n  min-width: 16px;\n  height: 18px;\n  padding: 4px 5px;\n  font-weight: normal;\n  line-height: 18px;\n  text-align: center;\n  text-shadow: 0 1px 0 #fff;\n  vertical-align: middle;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n/*# sourceMappingURL=bootstrap-datepicker.css.map */", ""]);
	
	// exports


/***/ },
/* 121 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-70fe064b!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/datepicker.vue ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('input', {
	    staticClass: "datepicker form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-70fe064b", module.exports)
	  }
	}

/***/ },
/* 122 */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-7a3fbe50!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/invoiceEdit.vue ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', {
	    staticClass: "page-title"
	  }, [_vm._v(" Faktury ")]), _vm._v(" "), _c('div', {
	    staticClass: "note note-info"
	  }, [_vm._v("Możesz stąd przeglądać, dodawać oraz edytować faktury.")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('form', {
	    staticClass: "form-group"
	  }, [_c('label', [_vm._v("Tytuł")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.title),
	      expression: "obj.title"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.title)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.title = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Kwota (PLN)")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.amount),
	      expression: "obj.amount"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "number",
	      "step": "any",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.amount)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.amount = $event.target.value
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Kontrahent")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('select2', {
	    attrs: {
	      "options": _vm.contractors,
	      "required": ""
	    },
	    model: {
	      value: (_vm.obj.contractor),
	      callback: function($$v) {
	        _vm.obj.contractor = $$v
	      }
	    }
	  })], 1), _vm._v(" "), _c('label', [_vm._v("Faktura z dnia")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('datepicker', {
	    model: {
	      value: (_vm.obj.created_at),
	      callback: function($$v) {
	        _vm.obj.created_at = $$v
	      }
	    }
	  })], 1), _vm._v(" "), _c('label', [_vm._v("Termin płatności")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('datepicker', {
	    model: {
	      value: (_vm.obj.payment_date),
	      callback: function($$v) {
	        _vm.obj.payment_date = $$v
	      }
	    }
	  })], 1), _vm._v(" "), _c('label', [_vm._v("Komentarz")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.comment),
	      expression: "obj.comment"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": (_vm.obj.comment)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.comment = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Status")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.status),
	      expression: "obj.status"
	    }],
	    staticClass: "form-control",
	    on: {
	      "change": function($event) {
	        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        });
	        _vm.obj.status = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
	      }
	    }
	  }, [_c('option', {
	    attrs: {
	      "value": "0"
	    }
	  }, [_vm._v("Nieopłacona")]), _vm._v(" "), _c('option', {
	    attrs: {
	      "value": "1"
	    }
	  }, [_vm._v("Anulowana")]), _vm._v(" "), _c('option', {
	    attrs: {
	      "value": "2"
	    }
	  }, [_vm._v("Opłacona")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "type": "submit"
	    },
	    on: {
	      "click": _vm.save
	    }
	  }, [_vm._v("Zapisz")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12 text-right"
	  }, [_c('a', {
	    staticClass: "btn btn-danger",
	    attrs: {
	      "href": "#invoices"
	    }
	  }, [_vm._v("Wróć")]), _vm._v(" "), _c('hr')])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7a3fbe50", module.exports)
	  }
	}

/***/ },
/* 123 */
/*!***************************************!*\
  !*** ./js/components/invoiceList.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./invoiceList.vue */ 124),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-98d00d28!../../~/vue-loader/lib/selector?type=template&index=0!./invoiceList.vue */ 125),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/invoiceList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] invoiceList.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-98d00d28", Component.options)
	  } else {
	    hotAPI.reload("data-v-98d00d28", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 124 */
/*!***************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/invoiceList.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _urls = __webpack_require__(/*! ../urls */ 104);
	
	var _urls2 = _interopRequireDefault(_urls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      invoices: []
	    };
	  },
	  created: function created() {
	    this.getInvoices();
	  },
	
	
	  methods: {
	    getStatus: function getStatus(status) {
	      switch (status) {
	        case 0:
	          return 'Nieopłacona';
	        case 1:
	          return 'Anulowana';
	        case 2:
	          return 'Opłacona';
	      }
	    },
	    getInvoices: function getInvoices() {
	      var _this = this;
	
	      _api2.default.get('invoices').then(function (r) {
	        _this.invoices = r.data;
	      });
	    },
	    remove: function remove(id) {
	      var _this2 = this;
	
	      if (confirm('Czy napewno chcesz usunąć fakturę nr: ' + id + '?')) {
	        _api2.default.delete('invoices/' + id).then(function (r) {
	          _this2.invoices = _this2.invoices.filter(function (i) {
	            if (i.id != id) return i;
	          });
	        });
	      }
	    }
	  }
	};

/***/ },
/* 125 */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-98d00d28!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/invoiceList.vue ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', {
	    staticClass: "page-title"
	  }, [_vm._v(" Faktury\n")]), _vm._v(" "), _c('div', {
	    staticClass: "note note-info"
	  }, [_vm._v("Możesz stąd przeglądać, dodawać oraz edytować faktury.")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "portlet"
	  }, [_c('div', {
	    staticClass: "portlet-body"
	  }, [_c('div', {
	    staticClass: "table-scrollable"
	  }, [_c('table', {
	    staticClass: "table table-striped table-bordered table-advance table-hover"
	  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.invoices), function(item) {
	    return _c('tr', [_c('td', {
	      staticClass: "highlight"
	    }, [_vm._v("\n                            " + _vm._s(item.id) + " - " + _vm._s(item.title) + "\n                            ")]), _vm._v(" "), _c('td', [_c('a', {
	      attrs: {
	        "href": '#contractors/' + item.contractor.nip
	      }
	    }, [_vm._v(_vm._s(item.contractor.name))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.amount) + " PLN")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getStatus(item.status)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.created_at))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.payment_date))]), _vm._v(" "), _c('td', [_c('button', {
	      staticClass: "btn btn-sm btn-danger",
	      on: {
	        "click": function($event) {
	          _vm.remove(item.id)
	        }
	      }
	    }, [_vm._v("Usuń")]), _vm._v(" "), _c('a', {
	      staticClass: "btn btn-sm btn-success",
	      attrs: {
	        "href": '#invoices/' + item.id
	      }
	    }, [_vm._v("Edytuj")]), _vm._v(" "), _c('a', {
	      staticClass: "btn btn-sm btn-primary"
	    }, [_vm._v("Drukuj")])])])
	  }))])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12 text-right"
	  }, [_c('a', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "href": "#invoices/add"
	    }
	  }, [_vm._v("Dodaj nową")]), _vm._v(" "), _c('hr')])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('tr', [_c('th', [_vm._v("Tytuł ")]), _vm._v(" "), _c('th', [_vm._v("Kontrahent ")]), _vm._v(" "), _c('th', [_vm._v("Kwota ")]), _vm._v(" "), _c('th', [_vm._v("Status ")]), _vm._v(" "), _c('th', [_vm._v("Data utworzenia ")]), _vm._v(" "), _c('th', [_vm._v("Termin płatności ")]), _vm._v(" "), _c('th', [_vm._v("Akcje")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-98d00d28", module.exports)
	  }
	}

/***/ },
/* 126 */
/*!*******************************************!*\
  !*** ./js/components/contractorsEdit.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./contractorsEdit.vue */ 127),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-4bf9266e!../../~/vue-loader/lib/selector?type=template&index=0!./contractorsEdit.vue */ 128),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/contractorsEdit.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] contractorsEdit.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4bf9266e", Component.options)
	  } else {
	    hotAPI.reload("data-v-4bf9266e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 127 */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/contractorsEdit.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _mixins = __webpack_require__(/*! ../mixins */ 108);
	
	var _mixins2 = _interopRequireDefault(_mixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            obj: {
	                nip: '',
	                name: '',
	                address: '',
	                email: '',
	                phone: ''
	
	            }
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        var id = this.$route.params.id;
	        if (id) {
	            this.id = id;
	            _api2.default.get('contractors/' + id).then(function (r) {
	                _this.obj = r.data;
	            }, function (err) {
	                _this.$router.push('/contractors');
	            });
	        }
	    },
	
	
	    methods: {
	        save: function save() {
	            var _this2 = this;
	
	            var method = this.id ? _api2.default.post : _api2.default.put;
	            var url = this.id ? 'contractors/' + this.id : 'contractors/';
	            method(url, this.obj).then(function (r) {
	                _this2.$router.push({ path: '/contractors', params: { id: r.data.id } });
	            });
	        }
	    }
	
	};

/***/ },
/* 128 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-4bf9266e!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/contractorsEdit.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', {
	    staticClass: "page-title"
	  }, [_vm._v(" Kontrahenci ")]), _vm._v(" "), _c('div', {
	    staticClass: "note note-info"
	  }, [_vm._v("Możesz stąd przeglądać, dodawać oraz edytować kontrahentów.")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('form', {
	    staticClass: "form-group"
	  }, [_c('label', [_vm._v("NIP")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.nip),
	      expression: "obj.nip"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.nip)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.nip = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Nazwa")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.name),
	      expression: "obj.name"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.name)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.name = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Adres")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.address),
	      expression: "obj.address"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.address)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.address = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Telefon")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.phone),
	      expression: "obj.phone"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.phone)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.phone = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Email")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.email),
	      expression: "obj.email"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.email = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "type": "submit"
	    },
	    on: {
	      "click": _vm.save
	    }
	  }, [_vm._v("Zapisz")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12 text-right"
	  }, [_c('a', {
	    staticClass: "btn btn-danger",
	    attrs: {
	      "href": "#invoices"
	    }
	  }, [_vm._v("Wróć")]), _vm._v(" "), _c('hr')])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4bf9266e", module.exports)
	  }
	}

/***/ },
/* 129 */
/*!*******************************************!*\
  !*** ./js/components/contractorsList.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./contractorsList.vue */ 130),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-6a897546!../../~/vue-loader/lib/selector?type=template&index=0!./contractorsList.vue */ 131),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/contractorsList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] contractorsList.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6a897546", Component.options)
	  } else {
	    hotAPI.reload("data-v-6a897546", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 130 */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/contractorsList.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _urls = __webpack_require__(/*! ../urls */ 104);
	
	var _urls2 = _interopRequireDefault(_urls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            contractors: []
	        };
	    },
	    created: function created() {
	        this.getContractors();
	    },
	
	
	    methods: {
	        getContractors: function getContractors() {
	            var _this = this;
	
	            _api2.default.get('contractors').then(function (r) {
	                _this.contractors = r.data;
	            });
	        },
	        remove: function remove(id) {
	            var _this2 = this;
	
	            if (confirm('Czy napewno chcesz usunąć danego kontrahenta? Usunie to również wszystkie' + 'faktury przypisane do niego.')) {
	                _api2.default.delete('contractors/' + id).then(function (r) {
	                    _this2.contractors = _this2.contractors.filter(function (i) {
	                        if (i.nip != nip) return i;
	                    });
	                });
	            }
	        }
	    }
	};

/***/ },
/* 131 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-6a897546!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/contractorsList.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', {
	    staticClass: "page-title"
	  }, [_vm._v(" Kontrahenci\n    ")]), _vm._v(" "), _c('div', {
	    staticClass: "note note-info"
	  }, [_vm._v("Możesz stąd przeglądać, dodawać oraz edytować kontrahentów.")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "portlet"
	  }, [_c('div', {
	    staticClass: "portlet-body"
	  }, [_c('div', {
	    staticClass: "table-scrollable"
	  }, [_c('table', {
	    staticClass: "table table-striped table-bordered table-advance table-hover"
	  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.contractors), function(item) {
	    return _c('tr', [_c('td', [_vm._v(_vm._s(item.nip))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.address))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.phone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.email))]), _vm._v(" "), _c('td', [_c('button', {
	      staticClass: "btn btn-sm btn-danger",
	      on: {
	        "click": function($event) {
	          _vm.remove(item.nip)
	        }
	      }
	    }, [_vm._v("Usuń")]), _vm._v(" "), _c('a', {
	      staticClass: "btn btn-sm btn-success",
	      attrs: {
	        "href": '#contractors/' + item.nip
	      }
	    }, [_vm._v("Edytuj")]), _vm._v(" "), _c('a', {
	      staticClass: "btn btn-sm btn-primary"
	    }, [_vm._v("Drukuj")])])])
	  }))])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12 text-right"
	  }, [_c('a', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "href": "#contractors/add"
	    }
	  }, [_vm._v("Dodaj nowego")]), _vm._v(" "), _c('hr')])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('tr', [_c('th', [_vm._v("NIP ")]), _vm._v(" "), _c('th', [_vm._v("Nazwa ")]), _vm._v(" "), _c('th', [_vm._v("Adres ")]), _vm._v(" "), _c('th', [_vm._v("Telefon ")]), _vm._v(" "), _c('th', [_vm._v("Email ")]), _vm._v(" "), _c('th', [_vm._v("Akcje")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6a897546", module.exports)
	  }
	}

/***/ },
/* 132 */
/*!****************************************!*\
  !*** ./js/components/paymentsList.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./paymentsList.vue */ 133),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-7d1f4cba!../../~/vue-loader/lib/selector?type=template&index=0!./paymentsList.vue */ 134),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/paymentsList.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] paymentsList.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7d1f4cba", Component.options)
	  } else {
	    hotAPI.reload("data-v-7d1f4cba", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 133 */
/*!****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/paymentsList.vue ***!
  \****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _urls = __webpack_require__(/*! ../urls */ 104);
	
	var _urls2 = _interopRequireDefault(_urls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            payments: []
	        };
	    },
	    created: function created() {
	        this.getPayments();
	    },
	
	
	    methods: {
	        getPayments: function getPayments() {
	            var _this = this;
	
	            _api2.default.get('payments').then(function (r) {
	                _this.payments = r.data;
	            });
	        },
	        remove: function remove(id) {
	            var _this2 = this;
	
	            if (confirm('Czy napewno chcesz usunąć daną płatność?')) {
	                _api2.default.delete('payments/' + id).then(function (r) {
	                    _this2.payments = _this2.payments.filter(function (i) {
	                        if (i.id != id) return i;
	                    });
	                });
	            }
	        }
	    }
	};

/***/ },
/* 134 */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-7d1f4cba!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/paymentsList.vue ***!
  \********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', {
	    staticClass: "page-title"
	  }, [_vm._v(" Płatności\n    ")]), _vm._v(" "), _c('div', {
	    staticClass: "note note-info"
	  }, [_vm._v("Możesz stąd przeglądać, dodawać oraz edytować płatności.")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "portlet"
	  }, [_c('div', {
	    staticClass: "portlet-body"
	  }, [_c('div', {
	    staticClass: "table-scrollable"
	  }, [_c('table', {
	    staticClass: "table table-striped table-bordered table-advance table-hover"
	  }, [_vm._m(1), _vm._v(" "), _c('tbody', _vm._l((_vm.payments), function(item) {
	    return _c('tr', [_c('td', [_c('a', {
	      attrs: {
	        "href": '#invoices/' + item.invoice.id
	      }
	    }, [_vm._v(_vm._s(item.invoice.title))])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.amount) + " PLN")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(item.date))]), _vm._v(" "), _c('td', [_c('button', {
	      staticClass: "btn btn-sm btn-danger",
	      on: {
	        "click": function($event) {
	          _vm.remove(item.id)
	        }
	      }
	    }, [_vm._v("Usuń")]), _vm._v(" "), _c('a', {
	      staticClass: "btn btn-sm btn-success",
	      attrs: {
	        "href": '#payments/' + item.id
	      }
	    }, [_vm._v("Edytuj")]), _vm._v(" "), _c('a', {
	      staticClass: "btn btn-sm btn-primary"
	    }, [_vm._v("Drukuj")])])])
	  }))])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12 text-right"
	  }, [_c('a', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "href": "#payments/add"
	    }
	  }, [_vm._v("Dodaj nową")]), _vm._v(" "), _c('hr')])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('thead', [_c('tr', [_c('th', [_vm._v("Do faktury ")]), _vm._v(" "), _c('th', [_vm._v("Kwota ")]), _vm._v(" "), _c('th', [_vm._v("Data wpłaty ")]), _vm._v(" "), _c('th', [_vm._v("Akcje")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7d1f4cba", module.exports)
	  }
	}

/***/ },
/* 135 */
/*!****************************************!*\
  !*** ./js/components/paymentsEdit.vue ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 11)(
	  /* script */
	  __webpack_require__(/*! !babel-loader!../../~/vue-loader/lib/selector?type=script&index=0!./paymentsEdit.vue */ 136),
	  /* template */
	  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler?id=data-v-e73117b4!../../~/vue-loader/lib/selector?type=template&index=0!./paymentsEdit.vue */ 137),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/marcin/Sites/Studia/5_sem/sbd2-invoice-store/app/js/components/paymentsEdit.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] paymentsEdit.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e73117b4", Component.options)
	  } else {
	    hotAPI.reload("data-v-e73117b4", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },
/* 136 */
/*!****************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./js/components/paymentsEdit.vue ***!
  \****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _api = __webpack_require__(/*! ../api */ 13);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _mixins = __webpack_require__(/*! ../mixins */ 108);
	
	var _mixins2 = _interopRequireDefault(_mixins);
	
	var _select = __webpack_require__(/*! ./select2.vue */ 109);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _datepicker = __webpack_require__(/*! ./datepicker.vue */ 116);
	
	var _datepicker2 = _interopRequireDefault(_datepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    components: {
	        'select2': _select2.default,
	        'datepicker': _datepicker2.default
	    },
	    data: function data() {
	        return {
	            invoices: [],
	            obj: {
	                id: '',
	                date: '',
	                amount: '',
	                invoice: ''
	            }
	        };
	    },
	    created: function created() {
	        var _this = this;
	
	        var id = this.$route.params.id;
	        if (id) {
	            this.id = id;
	            _api2.default.get('payments/' + id).then(function (r) {
	                _this.obj = r.data;
	                _this.obj.invoice = _this.obj.invoice.id;
	            }, function (err) {
	                _this.$router.push('/payments');
	            });
	        }
	
	        _mixins2.default.getInvoices().then(function (r) {
	            _this.invoices = r.data.map(function (v) {
	                v.text = v.title + ' (z dnia: ' + v.created_at + ')';
	                return v;
	            });
	        });
	    },
	
	
	    methods: {
	        save: function save() {
	            var _this2 = this;
	
	            var method = this.obj.id ? _api2.default.post : _api2.default.put;
	            var url = this.obj.id ? 'payments/' + this.id : 'payments/';
	            method(url, this.obj).then(function (r) {
	                _this2.$router.push({ path: '/payments', params: { id: r.data.id } });
	            });
	        }
	    }
	
	};

/***/ },
/* 137 */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-e73117b4!./~/vue-loader/lib/selector.js?type=template&index=0!./js/components/paymentsEdit.vue ***!
  \********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h1', {
	    staticClass: "page-title"
	  }, [_vm._v(" Płatności ")]), _vm._v(" "), _c('div', {
	    staticClass: "note note-info"
	  }, [_vm._v("Możesz stąd przeglądać, dodawać oraz edytować płatności.")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('form', {
	    staticClass: "form-group"
	  }, [_c('label', [_vm._v("Kwota (PLN)")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.obj.amount),
	      expression: "obj.amount"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "number",
	      "step": "any",
	      "required": ""
	    },
	    domProps: {
	      "value": (_vm.obj.amount)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.obj.amount = $event.target.value
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Do faktury")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('select2', {
	    attrs: {
	      "options": _vm.invoices,
	      "required": ""
	    },
	    model: {
	      value: (_vm.obj.invoice),
	      callback: function($$v) {
	        _vm.obj.invoice = $$v
	      }
	    }
	  })], 1), _vm._v(" "), _c('label', [_vm._v("Data wpłaty")]), _vm._v(" "), _c('div', {
	    staticClass: "input-group"
	  }, [_c('datepicker', {
	    model: {
	      value: (_vm.obj.date),
	      callback: function($$v) {
	        _vm.obj.date = $$v
	      }
	    }
	  })], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('button', {
	    staticClass: "btn btn-success",
	    attrs: {
	      "type": "submit"
	    },
	    on: {
	      "click": _vm.save
	    }
	  }, [_vm._v("Zapisz")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "col-md-12 text-right"
	  }, [_c('a', {
	    staticClass: "btn btn-danger",
	    attrs: {
	      "href": "#invoices"
	    }
	  }, [_vm._v("Wróć")]), _vm._v(" "), _c('hr')])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e73117b4", module.exports)
	  }
	}

/***/ }
]);
//# sourceMappingURL=index.js.map