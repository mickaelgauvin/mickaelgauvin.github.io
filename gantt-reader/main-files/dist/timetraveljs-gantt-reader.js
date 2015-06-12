/*! timetraveljs-gantt-reader - v1.0.0 - 2015-06-12 | © 2015 Mickaël Gauvin */

// ████████╗██╗███╗   ███╗███████╗ ████████╗██████╗  █████╗ ██╗   ██╗███████╗██╗           ██╗███████╗
// ╚══██╔══╝██║████╗ ████║██╔════╝ ╚══██╔══╝██╔══██╗██╔══██╗██║   ██║██╔════╝██║           ██║██╔════╝
//    ██║   ██║██╔████╔██║█████╗      ██║   ██████╔╝███████║██║   ██║█████╗  ██║           ██║███████╗
//    ██║   ██║██║╚██╔╝██║██╔══╝      ██║   ██╔══██╗██╔══██║╚██╗ ██╔╝██╔══╝  ██║      ██   ██║╚════██║
//    ██║   ██║██║ ╚═╝ ██║███████╗    ██║   ██║  ██║██║  ██║ ╚████╔╝ ███████╗███████╗ ╚█████╔╝███████║
//    ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝  ╚════╝ ╚══════╝

/*! Font Awesome by Dave Gandy - http://fontawesome.io */
/*! Lo-Dash 2.4.1 MIT license <http://lodash.com/> <http://lodash.com/license> */
/*! Backbone.js 1.1.2 MIT license <http://backbonejs.org> */
/*! Fontello Copyright (C) 2011 by Vitaly Puzrin <http://fontello.com/> */
/*! JS Signals <http://millermedeiros.github.com/js-signals/>  */
/*! tween.js https://github.com/CreateJS/TweenJS  */
/*! easel.js https://github.com/CreateJS/EaselJS  */

(function(undefined) {
  !function(root, factory) {
    if ("function" == typeof define && "object" == typeof define.amd && define.amd) define("tt.common", function() {
      root.tt = root.tt || {};
      return root.tt.common = factory();
    }); else {
      root.tt = root.tt || {};
      root.tt.common = factory();
    }
  }(this, function() {
    // --------- 
    /*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
    /*global define:false, require:false, exports:false, module:false, signals:false */
    /** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */
    // SignalBinding -------------------------------------------------
    //================================================================
    /**
 * Object that represents a binding between a Signal and a listener function.
 * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
 * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
 * @author Miller Medeiros
 * @constructor
 * @internal
 * @name SignalBinding
 * @param {Signal} signal Reference to Signal object that listener is currently bound to.
 * @param {Function} listener Handler function bound to the signal.
 * @param {boolean} isOnce If binding should be executed just once.
 * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
 * @param {Number} [priority] The priority level of the event listener. (default = 0).
 */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
      /**
     * Handler function bound to the signal.
     * @type Function
     * @private
     */
      this._listener = listener;
      /**
     * If binding should be executed just once.
     * @type boolean
     * @private
     */
      this._isOnce = isOnce;
      /**
     * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @memberOf SignalBinding.prototype
     * @name context
     * @type Object|undefined|null
     */
      this.context = listenerContext;
      /**
     * Reference to Signal object that listener is currently bound to.
     * @type Signal
     * @private
     */
      this._signal = signal;
      /**
     * Listener priority
     * @type Number
     * @private
     */
      this._priority = priority || 0;
    }
    /*global SignalBinding:false*/
    // Signal --------------------------------------------------------
    //================================================================
    function validateListener(listener, fnName) {
      if ("function" != typeof listener) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", fnName));
    }
    /**
 * Custom event broadcaster
 * <br />- inspired by Robert Penner's AS3 Signals.
 * @name Signal
 * @author Miller Medeiros
 * @constructor
 */
    function Signal() {
      /**
     * @type Array.<SignalBinding>
     * @private
     */
      this._bindings = [];
      this._prevParams = null;
      // enforce dispatch to aways work on same context (#47)
      var self = this;
      this.dispatch = function() {
        Signal.prototype.dispatch.apply(self, arguments);
      };
    }
    // --------- 
    var undefinedstr = "undefined", PX = "px", lodashContainer = {};
    (function(window, self, undefined) {
      /*--------------------------------------------------------------------------*/
      /**
   * The base implementation of `compareAscending` which compares values and
   * sorts them in ascending order without guaranteeing a stable sort.
   *
   * @private
   * @param {*} value The value to compare to `other`.
   * @param {*} other The value to compare to `value`.
   * @returns {number} Returns the sort order indicator for `value`.
   */
      function baseCompareAscending(value, other) {
        if (value !== other) {
          var valIsReflexive = value === value, othIsReflexive = other === other;
          if (value > other || !valIsReflexive || "undefined" == typeof value && othIsReflexive) return 1;
          if (other > value || !othIsReflexive || "undefined" == typeof other && valIsReflexive) return -1;
        }
        return 0;
      }
      /**
   * The base implementation of `_.indexOf` without support for binary searches.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) return indexOfNaN(array, fromIndex);
        for (var index = fromIndex - 1, length = array.length; ++index < length; ) if (array[index] === value) return index;
        return -1;
      }
      /**
   * The base implementation of `_.isFunction` without support for environments
   * with incorrect `typeof` results.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   */
      function baseIsFunction(value) {
        // Avoid a Chakra JIT bug in compatibility modes of IE 11.
        // See https://github.com/jashkenas/underscore/issues/1621 for more details.
        return "function" == typeof value || !1;
      }
      /**
   * Converts `value` to a string if it is not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
      function baseToString(value) {
        return "string" == typeof value ? value : null == value ? "" : value + "";
      }
      /**
   * Used by `_.max` and `_.min` as the default callback for string values.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the code unit of the first character of the string.
   */
      function charAtCallback(string) {
        return string.charCodeAt(0);
      }
      /**
   * Used by `_.sortBy` to compare transformed elements of a collection and stable
   * sort them in ascending order.
   *
   * @private
   * @param {Object} object The object to compare to `other`.
   * @param {Object} other The object to compare to `object`.
   * @returns {number} Returns the sort order indicator for `object`.
   */
      function compareAscending(object, other) {
        return baseCompareAscending(object.criteria, other.criteria) || object.index - other.index;
      }
      /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   * If `fromRight` is provided elements of `array` are iterated from right to left.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
      function indexOfNaN(array, fromIndex, fromRight) {
        for (var length = array.length, index = fromIndex + (fromRight ? 0 : -1); fromRight ? index-- : ++index < length; ) {
          var other = array[index];
          if (other !== other) return index;
        }
        return -1;
      }
      /**
   * Checks if `value` is object-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   */
      function isObjectLike(value) {
        return value && "object" == typeof value || !1;
      }
      /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
      function replaceHolders(array, placeholder) {
        for (var index = -1, length = array.length, resIndex = -1, result = []; ++index < length; ) if (array[index] === placeholder) {
          array[index] = PLACEHOLDER;
          result[++resIndex] = index;
        }
        return result;
      }
      /*------------------------------------------------------------------------*/
      /**
   * Creates a `lodash` object which wraps `value` to enable implicit chaining.
   * Methods that operate on and return arrays, collections, and functions can
   * be chained together. Methods that return a boolean or single value will
   * automatically end the chain returning the unwrapped value. Explicit chaining
   * may be enabled using `_.chain`. The execution of chained methods is lazy,
   * that is, execution is deferred until `_#value` is implicitly or explicitly
   * called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
   * fusion is an optimization that merges iteratees to avoid creating intermediate
   * arrays and reduce the number of iteratee executions.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
   * `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
   * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
   * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
   * and `where`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
   * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
   * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defer`, `delay`,
   * `difference`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `fill`,
   * `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`, `forEach`,
   * `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `functions`,
   * `groupBy`, `indexBy`, `initial`, `intersection`, `invert`, `invoke`, `keys`,
   * `keysIn`, `map`, `mapValues`, `matches`, `matchesProperty`, `memoize`, `merge`,
   * `mixin`, `negate`, `noop`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
   * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
   * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `reverse`,
   * `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`, `sortByOrder`, `splice`,
   * `spread`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`,
   * `throttle`, `thru`, `times`, `toArray`, `toPlainObject`, `transform`,
   * `union`, `uniq`, `unshift`, `unzip`, `values`, `valuesIn`, `where`,
   * `without`, `wrap`, `xor`, `zip`, and `zipObject`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `deburr`,
   * `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
   * `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`, `has`,
   * `identity`, `includes`, `indexOf`, `inRange`, `isArguments`, `isArray`,
   * `isBoolean`, `isDate`, `isElement`, `isEmpty`, `isEqual`, `isError`,
   * `isFinite`,`isFunction`, `isMatch`, `isNative`, `isNaN`, `isNull`, `isNumber`,
   * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`,
   * `isTypedArray`, `join`, `kebabCase`, `last`, `lastIndexOf`, `max`, `min`,
   * `noConflict`, `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`,
   * `random`, `reduce`, `reduceRight`, `repeat`, `result`, `runInContext`,
   * `shift`, `size`, `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`,
   * `startCase`, `startsWith`, `sum`, `template`, `trim`, `trimLeft`,
   * `trimRight`, `trunc`, `unescape`, `uniqueId`, `value`, and `words`
   *
   * The wrapper method `sample` will return a wrapped value when `n` is provided,
   * otherwise an unwrapped value is returned.
   *
   * @name _
   * @constructor
   * @category Chain
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // returns an unwrapped value
   * wrapped.reduce(function(sum, n) {
   *   return sum + n;
   * });
   * // => 6
   *
   * // returns a wrapped value
   * var squares = wrapped.map(function(n) {
   *   return n * n;
   * });
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
      function lodash() {}
      /*------------------------------------------------------------------------*/
      /**
   * Creates a cache object to store key/value pairs.
   *
   * @private
   * @static
   * @name Cache
   * @memberOf _.memoize
   */
      function MapCache() {
        this.__data__ = {};
      }
      /**
   * Removes `key` and its value from the cache.
   *
   * @private
   * @name delete
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
   */
      function mapDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
      /**
   * Gets the cached value for `key`.
   *
   * @private
   * @name get
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the cached value.
   */
      function mapGet(key) {
        return "__proto__" == key ? undefined : this.__data__[key];
      }
      /**
   * Checks if a cached value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
      function mapHas(key) {
        return "__proto__" != key && hasOwnProperty.call(this.__data__, key);
      }
      /**
   * Adds `value` to `key` of the cache.
   *
   * @private
   * @name set
   * @memberOf _.memoize.Cache
   * @param {string} key The key of the value to cache.
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache object.
   */
      function mapSet(key, value) {
        "__proto__" != key && (this.__data__[key] = value);
        return this;
      }
      /*------------------------------------------------------------------------*/
      /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
      function arrayCopy(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        for (;++index < length; ) array[index] = source[index];
        return array;
      }
      /**
   * A specialized version of `_.forEach` for arrays without support for callback
   * shorthands or `this` binding.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
      function arrayEach(array, iteratee) {
        for (var index = -1, length = array.length; ++index < length && iteratee(array[index], index, array) !== !1; ) ;
        return array;
      }
      /**
   * A specialized version of `_.map` for arrays without support for callback
   * shorthands or `this` binding.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
      function arrayMap(array, iteratee) {
        for (var index = -1, length = array.length, result = Array(length); ++index < length; ) result[index] = iteratee(array[index], index, array);
        return result;
      }
      /**
   * A specialized version of `_.max` for arrays without support for iteratees.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   */
      function arrayMax(array) {
        for (var index = -1, length = array.length, result = NEGATIVE_INFINITY; ++index < length; ) {
          var value = array[index];
          value > result && (result = value);
        }
        return result;
      }
      /**
   * A specialized version of `_.min` for arrays without support for iteratees.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   */
      function arrayMin(array) {
        for (var index = -1, length = array.length, result = POSITIVE_INFINITY; ++index < length; ) {
          var value = array[index];
          result > value && (result = value);
        }
        return result;
      }
      /**
   * A specialized version of `_.reduce` for arrays without support for callback
   * shorthands or `this` binding.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initFromArray] Specify using the first element of `array`
   *  as the initial value.
   * @returns {*} Returns the accumulated value.
   */
      function arrayReduce(array, iteratee, accumulator, initFromArray) {
        var index = -1, length = array.length;
        initFromArray && length && (accumulator = array[++index]);
        for (;++index < length; ) accumulator = iteratee(accumulator, array[index], index, array);
        return accumulator;
      }
      /**
   * A specialized version of `_.some` for arrays without support for callback
   * shorthands or `this` binding.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
      function arraySome(array, predicate) {
        for (var index = -1, length = array.length; ++index < length; ) if (predicate(array[index], index, array)) return !0;
        return !1;
      }
      /**
   * Used by `_.defaults` to customize its `_.assign` use.
   *
   * @private
   * @param {*} objectValue The destination object property value.
   * @param {*} sourceValue The source object property value.
   * @returns {*} Returns the value to assign to the destination object.
   */
      function assignDefaults(objectValue, sourceValue) {
        return "undefined" == typeof objectValue ? sourceValue : objectValue;
      }
      /**
   * The base implementation of `_.assign` without support for argument juggling,
   * multiple sources, and `this` binding `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {Function} [customizer] The function to customize assigning values.
   * @returns {Object} Returns the destination object.
   */
      function baseAssign(object, source, customizer) {
        var props = keys(source);
        if (!customizer) return baseCopy(source, object, props);
        for (var index = -1, length = props.length; ++index < length; ) {
          var key = props[index], value = object[key], result = customizer(value, source[key], key, object, source);
          (result === result ? result === value : value !== value) && ("undefined" != typeof value || key in object) || (object[key] = result);
        }
        return object;
      }
      /**
   * Copies the properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Array} props The property names to copy.
   * @returns {Object} Returns `object`.
   */
      function baseCopy(source, object, props) {
        if (!props) {
          props = object;
          object = {};
        }
        for (var index = -1, length = props.length; ++index < length; ) {
          var key = props[index];
          object[key] = source[key];
        }
        return object;
      }
      /**
   * The base implementation of `_.callback` which supports specifying the
   * number of arguments to provide to `func`.
   *
   * @private
   * @param {*} [func=_.identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {number} [argCount] The number of arguments to provide to `func`.
   * @returns {Function} Returns the callback.
   */
      function baseCallback(func, thisArg, argCount) {
        var type = typeof func;
        return "function" == type ? "undefined" != typeof thisArg && isBindable(func) ? bindCallback(func, thisArg, argCount) : func : null == func ? identity : "object" == type ? baseMatches(func) : "undefined" == typeof thisArg ? baseProperty(func + "") : baseMatchesProperty(func + "", thisArg);
      }
      /**
   * The base implementation of `_.clone` without support for argument juggling
   * and `this` binding `customizer` functions.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {Function} [customizer] The function to customize cloning values.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The object `value` belongs to.
   * @param {Array} [stackA=[]] Tracks traversed source objects.
   * @param {Array} [stackB=[]] Associates clones with source counterparts.
   * @returns {*} Returns the cloned value.
   */
      function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
        var result;
        customizer && (result = object ? customizer(value, key, object) : customizer(value));
        if ("undefined" != typeof result) return result;
        if (!isObject(value)) return value;
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) return arrayCopy(value, result);
        } else {
          var tag = objToString.call(value), isFunc = tag == funcTag;
          if (tag != objectTag && tag != argsTag && (!isFunc || object)) return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : object ? value : {};
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) return baseCopy(value, result, keys(value));
        }
        // Check for circular references and return corresponding clone.
        stackA || (stackA = []);
        stackB || (stackB = []);
        for (var length = stackA.length; length--; ) if (stackA[length] == value) return stackB[length];
        // Add the source value to the stack of traversed objects and associate it with its clone.
        stackA.push(value);
        stackB.push(result);
        // Recursively populate clone (susceptible to call stack limits).
        (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
          result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
        });
        return result;
      }
      /**
   * The base implementation of `_.forEach` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object|string} Returns `collection`.
   */
      function baseEach(collection, iteratee) {
        var length = collection ? collection.length : 0;
        if (!isLength(length)) return baseForOwn(collection, iteratee);
        for (var index = -1, iterable = toObject(collection); ++index < length && iteratee(iterable[index], index, iterable) !== !1; ) ;
        return collection;
      }
      /**
   * The base implementation of `_.forEachRight` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object|string} Returns `collection`.
   */
      function baseEachRight(collection, iteratee) {
        var length = collection ? collection.length : 0;
        if (!isLength(length)) return baseForOwnRight(collection, iteratee);
        for (var iterable = toObject(collection); length-- && iteratee(iterable[length], length, iterable) !== !1; ) ;
        return collection;
      }
      /**
   * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
   * without support for callback shorthands and `this` binding, which iterates
   * over `collection` using the provided `eachFunc`.
   *
   * @private
   * @param {Array|Object|string} collection The collection to search.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @param {boolean} [retKey] Specify returning the key of the found element
   *  instead of the element itself.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
      function baseFind(collection, predicate, eachFunc, retKey) {
        var result;
        eachFunc(collection, function(value, key, collection) {
          if (predicate(value, key, collection)) {
            result = retKey ? key : value;
            return !1;
          }
        });
        return result;
      }
      /**
   * The base implementation of `_.flatten` with added support for restricting
   * flattening and specifying the start index.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {boolean} isDeep Specify a deep flatten.
   * @param {boolean} isStrict Restrict flattening to arrays and `arguments` objects.
   * @param {number} fromIndex The index to start from.
   * @returns {Array} Returns the new flattened array.
   */
      function baseFlatten(array, isDeep, isStrict, fromIndex) {
        for (var index = fromIndex - 1, length = array.length, resIndex = -1, result = []; ++index < length; ) {
          var value = array[index];
          if (isObjectLike(value) && isLength(value.length) && (isArray(value) || isArguments(value))) {
            isDeep && (// Recursively flatten arrays (susceptible to call stack limits).
            value = baseFlatten(value, isDeep, isStrict, 0));
            var valIndex = -1, valLength = value.length;
            result.length += valLength;
            for (;++valIndex < valLength; ) result[++resIndex] = value[valIndex];
          } else isStrict || (result[++resIndex] = value);
        }
        return result;
      }
      /**
   * The base implementation of `baseForIn` and `baseForOwn` which iterates
   * over `object` properties returned by `keysFunc` invoking `iteratee` for
   * each property. Iterator functions may exit iteration early by explicitly
   * returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
      function baseFor(object, iteratee, keysFunc) {
        for (var index = -1, iterable = toObject(object), props = keysFunc(object), length = props.length; ++index < length; ) {
          var key = props[index];
          if (iteratee(iterable[key], key, iterable) === !1) break;
        }
        return object;
      }
      /**
   * This function is like `baseFor` except that it iterates over properties
   * in the opposite order.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
      function baseForRight(object, iteratee, keysFunc) {
        for (var iterable = toObject(object), props = keysFunc(object), length = props.length; length--; ) {
          var key = props[length];
          if (iteratee(iterable[key], key, iterable) === !1) break;
        }
        return object;
      }
      /**
   * The base implementation of `_.forOwn` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
      function baseForOwn(object, iteratee) {
        return baseFor(object, iteratee, keys);
      }
      /**
   * The base implementation of `_.forOwnRight` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
      function baseForOwnRight(object, iteratee) {
        return baseForRight(object, iteratee, keys);
      }
      /**
   * The base implementation of `_.isEqual` without support for `this` binding
   * `customizer` functions.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {Function} [customizer] The function to customize comparing values.
   * @param {boolean} [isWhere] Specify performing partial comparisons.
   * @param {Array} [stackA] Tracks traversed `value` objects.
   * @param {Array} [stackB] Tracks traversed `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
      function baseIsEqual(value, other, customizer, isWhere, stackA, stackB) {
        // Exit early for identical values.
        if (value === other) // Treat `+0` vs. `-0` as not equal.
        return 0 !== value || 1 / value == 1 / other;
        var valType = typeof value, othType = typeof other;
        // Exit early for unlike primitive values.
        // Exit early for unlike primitive values.
        return "function" != valType && "object" != valType && "function" != othType && "object" != othType || null == value || null == other ? value !== value && other !== other : baseIsEqualDeep(value, other, baseIsEqual, customizer, isWhere, stackA, stackB);
      }
      /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} [customizer] The function to customize comparing objects.
   * @param {boolean} [isWhere] Specify performing partial comparisons.
   * @param {Array} [stackA=[]] Tracks traversed `value` objects.
   * @param {Array} [stackB=[]] Tracks traversed `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
      function baseIsEqualDeep(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
        if (!objIsArr) {
          objTag = objToString.call(object);
          objTag == argsTag ? objTag = objectTag : objTag != objectTag && (objIsArr = isTypedArray(object));
        }
        if (!othIsArr) {
          othTag = objToString.call(other);
          othTag == argsTag ? othTag = objectTag : othTag != objectTag && (othIsArr = isTypedArray(other));
        }
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && !objIsArr && !objIsObj) return equalByTag(object, other, objTag);
        var valWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (valWrapped || othWrapped) return equalFunc(valWrapped ? object.value() : object, othWrapped ? other.value() : other, customizer, isWhere, stackA, stackB);
        if (!isSameTag) return !1;
        // Assume cyclic values are equal.
        // For more information on detecting circular references see https://es5.github.io/#JO.
        stackA || (stackA = []);
        stackB || (stackB = []);
        for (var length = stackA.length; length--; ) if (stackA[length] == object) return stackB[length] == other;
        // Add `object` and `other` to the stack of traversed objects.
        stackA.push(object);
        stackB.push(other);
        var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isWhere, stackA, stackB);
        stackA.pop();
        stackB.pop();
        return result;
      }
      /**
   * The base implementation of `_.isMatch` without support for callback
   * shorthands or `this` binding.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The source property names to match.
   * @param {Array} values The source values to match.
   * @param {Array} strictCompareFlags Strict comparison flags for source values.
   * @param {Function} [customizer] The function to customize comparing objects.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
      function baseIsMatch(object, props, values, strictCompareFlags, customizer) {
        var length = props.length;
        if (null == object) return !length;
        for (var index = -1, noCustomizer = !customizer; ++index < length; ) if (noCustomizer && strictCompareFlags[index] ? values[index] !== object[props[index]] : !hasOwnProperty.call(object, props[index])) return !1;
        index = -1;
        for (;++index < length; ) {
          var key = props[index];
          if (noCustomizer && strictCompareFlags[index]) var result = hasOwnProperty.call(object, key); else {
            var objValue = object[key], srcValue = values[index];
            result = customizer ? customizer(objValue, srcValue, key) : undefined;
            "undefined" == typeof result && (result = baseIsEqual(srcValue, objValue, customizer, !0));
          }
          if (!result) return !1;
        }
        return !0;
      }
      /**
   * The base implementation of `_.map` without support for callback shorthands
   * or `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
      function baseMap(collection, iteratee) {
        var result = [];
        baseEach(collection, function(value, key, collection) {
          result.push(iteratee(value, key, collection));
        });
        return result;
      }
      /**
   * The base implementation of `_.matches` which does not clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new function.
   */
      function baseMatches(source) {
        var props = keys(source), length = props.length;
        if (1 == length) {
          var key = props[0], value = source[key];
          if (isStrictComparable(value)) return function(object) {
            return null != object && object[key] === value && hasOwnProperty.call(object, key);
          };
        }
        for (var values = Array(length), strictCompareFlags = Array(length); length--; ) {
          value = source[props[length]];
          values[length] = value;
          strictCompareFlags[length] = isStrictComparable(value);
        }
        return function(object) {
          return baseIsMatch(object, props, values, strictCompareFlags);
        };
      }
      /**
   * The base implementation of `_.matchesProperty` which does not coerce `key`
   * to a string.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} value The value to compare.
   * @returns {Function} Returns the new function.
   */
      function baseMatchesProperty(key, value) {
        return isStrictComparable(value) ? function(object) {
          return null != object && object[key] === value;
        } : function(object) {
          return null != object && baseIsEqual(value, object[key], null, !0);
        };
      }
      /**
   * The base implementation of `_.property` which does not coerce `key` to a string.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new function.
   */
      function baseProperty(key) {
        return function(object) {
          return null == object ? undefined : object[key];
        };
      }
      /**
   * The base implementation of `_.reduce` and `_.reduceRight` without support
   * for callback shorthands or `this` binding, which iterates over `collection`
   * using the provided `eachFunc`.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initFromCollection Specify using the first or last element
   *  of `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
      function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
          accumulator = initFromCollection ? (initFromCollection = !1, value) : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
      }
      /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        start = null == start ? 0 : +start || 0;
        0 > start && (start = -start > length ? 0 : length + start);
        end = "undefined" == typeof end || end > length ? length : +end || 0;
        0 > end && (end += length);
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        for (var result = Array(length); ++index < length; ) result[index] = array[index + start];
        return result;
      }
      /**
   * The base implementation of `_.some` without support for callback shorthands
   * or `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
      function baseSome(collection, predicate) {
        var result;
        baseEach(collection, function(value, index, collection) {
          result = predicate(value, index, collection);
          return !result;
        });
        return !!result;
      }
      /**
   * The base implementation of `_.sortBy` which uses `comparer` to define
   * the sort order of `array` and replaces criteria objects with their
   * corresponding values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        for (;length--; ) array[length] = array[length].value;
        return array;
      }
      /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * returned by `keysFunc`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
      function baseValues(object, props) {
        for (var index = -1, length = props.length, result = Array(length); ++index < length; ) result[index] = object[props[index]];
        return result;
      }
      /**
   * Performs a binary search of `array` to determine the index at which `value`
   * should be inserted into `array` in order to maintain its sort order.
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {boolean} [retHighest] Specify returning the highest, instead
   *  of the lowest, index at which a value should be inserted into `array`.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
      function binaryIndex(array, value, retHighest) {
        var low = 0, high = array ? array.length : low;
        if ("number" == typeof value && value === value && HALF_MAX_ARRAY_LENGTH >= high) {
          for (;high > low; ) {
            var mid = low + high >>> 1, computed = array[mid];
            (retHighest ? value >= computed : value > computed) ? low = mid + 1 : high = mid;
          }
          return high;
        }
        return binaryIndexBy(array, value, identity, retHighest);
      }
      /**
   * This function is like `binaryIndex` except that it invokes `iteratee` for
   * `value` and each element of `array` to compute their sort ranking. The
   * iteratee is invoked with one argument; (value).
   *
   * @private
   * @param {Array} array The sorted array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {boolean} [retHighest] Specify returning the highest, instead
   *  of the lowest, index at which a value should be inserted into `array`.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   */
      function binaryIndexBy(array, value, iteratee, retHighest) {
        value = iteratee(value);
        for (var low = 0, high = array ? array.length : 0, valIsNaN = value !== value, valIsUndef = "undefined" == typeof value; high > low; ) {
          var mid = floor((low + high) / 2), computed = iteratee(array[mid]), isReflexive = computed === computed;
          if (valIsNaN) var setLow = isReflexive || retHighest; else setLow = valIsUndef ? isReflexive && (retHighest || "undefined" != typeof computed) : retHighest ? value >= computed : value > computed;
          setLow ? low = mid + 1 : high = mid;
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      /**
   * A specialized version of `baseCallback` which only supports `this` binding
   * and specifying the number of arguments to provide to `func`.
   *
   * @private
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {number} [argCount] The number of arguments to provide to `func`.
   * @returns {Function} Returns the callback.
   */
      function bindCallback(func, thisArg, argCount) {
        if ("function" != typeof func) return identity;
        if ("undefined" == typeof thisArg) return func;
        switch (argCount) {
         case 1:
          return function(value) {
            return func.call(thisArg, value);
          };

         case 3:
          return function(value, index, collection) {
            return func.call(thisArg, value, index, collection);
          };

         case 4:
          return function(accumulator, value, index, collection) {
            return func.call(thisArg, accumulator, value, index, collection);
          };

         case 5:
          return function(value, other, key, object, source) {
            return func.call(thisArg, value, other, key, object, source);
          };
        }
        return function() {
          return func.apply(thisArg, arguments);
        };
      }
      /**
   * Creates a clone of the given array buffer.
   *
   * @private
   * @param {ArrayBuffer} buffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
      function bufferClone(buffer) {
        return bufferSlice.call(buffer, 0);
      }
      /**
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array|Object} args The provided arguments.
   * @param {Array} partials The arguments to prepend to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @returns {Array} Returns the new array of composed arguments.
   */
      function composeArgs(args, partials, holders) {
        for (var holdersLength = holders.length, argsIndex = -1, argsLength = nativeMax(args.length - holdersLength, 0), leftIndex = -1, leftLength = partials.length, result = Array(argsLength + leftLength); ++leftIndex < leftLength; ) result[leftIndex] = partials[leftIndex];
        for (;++argsIndex < holdersLength; ) result[holders[argsIndex]] = args[argsIndex];
        for (;argsLength--; ) result[leftIndex++] = args[argsIndex++];
        return result;
      }
      /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array|Object} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @returns {Array} Returns the new array of composed arguments.
   */
      function composeArgsRight(args, partials, holders) {
        for (var holdersIndex = -1, holdersLength = holders.length, argsIndex = -1, argsLength = nativeMax(args.length - holdersLength, 0), rightIndex = -1, rightLength = partials.length, result = Array(argsLength + rightLength); ++argsIndex < argsLength; ) result[argsIndex] = args[argsIndex];
        for (var pad = argsIndex; ++rightIndex < rightLength; ) result[pad + rightIndex] = partials[rightIndex];
        for (;++holdersIndex < holdersLength; ) result[pad + holders[holdersIndex]] = args[argsIndex++];
        return result;
      }
      /**
   * Creates a function that assigns properties of source object(s) to a given
   * destination object.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
      function createAssigner(assigner) {
        return function() {
          var args = arguments, length = args.length, object = args[0];
          if (2 > length || null == object) return object;
          var customizer = args[length - 2], thisArg = args[length - 1], guard = args[3];
          if (length > 3 && "function" == typeof customizer) {
            customizer = bindCallback(customizer, thisArg, 5);
            length -= 2;
          } else {
            customizer = length > 2 && "function" == typeof thisArg ? thisArg : null;
            length -= customizer ? 1 : 0;
          }
          if (guard && isIterateeCall(args[1], args[2], guard)) {
            customizer = 3 == length ? null : customizer;
            length = 2;
          }
          for (var index = 0; ++index < length; ) {
            var source = args[index];
            source && assigner(object, source, customizer);
          }
          return object;
        };
      }
      /**
   * Creates a function that wraps `func` and invokes it with the `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to bind.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new bound function.
   */
      function createBindWrapper(func, thisArg) {
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(thisArg, arguments);
        }
        var Ctor = createCtorWrapper(func);
        return wrapper;
      }
      /**
   * Creates a function that produces an instance of `Ctor` regardless of
   * whether it was invoked as part of a `new` expression or by `call` or `apply`.
   *
   * @private
   * @param {Function} Ctor The constructor to wrap.
   * @returns {Function} Returns the new wrapped function.
   */
      function createCtorWrapper(Ctor) {
        return function() {
          var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, arguments);
          // Mimic the constructor's `return` behavior.
          // See https://es5.github.io/#x13.2.2 for more details.
          return isObject(result) ? result : thisBinding;
        };
      }
      /**
   * Creates a function that gets the extremum value of a collection.
   *
   * @private
   * @param {Function} arrayFunc The function to get the extremum value from an array.
   * @param {boolean} [isMin] Specify returning the minimum, instead of the maximum,
   *  extremum value.
   * @returns {Function} Returns the new extremum function.
   */
      function createExtremum(arrayFunc, isMin) {
        return function(collection, iteratee, thisArg) {
          thisArg && isIterateeCall(collection, iteratee, thisArg) && (iteratee = null);
          var func = getCallback(), noIteratee = null == iteratee;
          if (func !== baseCallback || !noIteratee) {
            noIteratee = !1;
            iteratee = func(iteratee, thisArg, 3);
          }
          if (noIteratee) {
            var isArr = isArray(collection);
            if (isArr || !isString(collection)) return arrayFunc(isArr ? collection : toIterable(collection));
            iteratee = charAtCallback;
          }
          return extremumBy(collection, iteratee, isMin);
        };
      }
      /**
   * Creates a function that wraps `func` and invokes it with optional `this`
   * binding of, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to reference.
   * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
      function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
        function wrapper() {
          for (// Avoid `arguments` object use disqualifying optimizations by
          // converting it to an array before providing it to other functions.
          var length = arguments.length, index = length, args = Array(length); index--; ) args[index] = arguments[index];
          partials && (args = composeArgs(args, partials, holders));
          partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight));
          if (isCurry || isCurryRight) {
            var placeholder = wrapper.placeholder, argsHolders = replaceHolders(args, placeholder);
            length -= argsHolders.length;
            if (arity > length) {
              var newArgPos = argPos ? arrayCopy(argPos) : null, newArity = nativeMax(arity - length, 0), newsHolders = isCurry ? argsHolders : null, newHoldersRight = isCurry ? null : argsHolders, newPartials = isCurry ? args : null, newPartialsRight = isCurry ? null : args;
              bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
              bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
              isCurryBound || (bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG));
              var result = createHybridWrapper(func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity);
              result.placeholder = placeholder;
              return result;
            }
          }
          var thisBinding = isBind ? thisArg : this;
          isBindKey && (func = thisBinding[key]);
          argPos && (args = reorder(args, argPos));
          isAry && ary < args.length && (args.length = ary);
          var fn = this && this !== root && this instanceof wrapper ? Ctor || createCtorWrapper(func) : func;
          return fn.apply(thisBinding, args);
        }
        var isAry = bitmask & ARY_FLAG, isBind = bitmask & BIND_FLAG, isBindKey = bitmask & BIND_KEY_FLAG, isCurry = bitmask & CURRY_FLAG, isCurryBound = bitmask & CURRY_BOUND_FLAG, isCurryRight = bitmask & CURRY_RIGHT_FLAG, Ctor = !isBindKey && createCtorWrapper(func), key = func;
        return wrapper;
      }
      /**
   * Creates a function that wraps `func` and invokes it with the optional `this`
   * binding of `thisArg` and the `partials` prepended to those provided to
   * the wrapper.
   *
   * @private
   * @param {Function} func The function to partially apply arguments to.
   * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} partials The arguments to prepend to those provided to the new function.
   * @returns {Function} Returns the new bound function.
   */
      function createPartialWrapper(func, bitmask, thisArg, partials) {
        function wrapper() {
          for (// Avoid `arguments` object use disqualifying optimizations by
          // converting it to an array before providing it `func`.
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(argsLength + leftLength); ++leftIndex < leftLength; ) args[leftIndex] = partials[leftIndex];
          for (;argsLength--; ) args[leftIndex++] = arguments[++argsIndex];
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, args);
        }
        var isBind = bitmask & BIND_FLAG, Ctor = createCtorWrapper(func);
        return wrapper;
      }
      /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to reference.
   * @param {number} bitmask The bitmask of flags.
   *  The bitmask may be composed of the following flags:
   *     1 - `_.bind`
   *     2 - `_.bindKey`
   *     4 - `_.curry` or `_.curryRight` of a bound function
   *     8 - `_.curry`
   *    16 - `_.curryRight`
   *    32 - `_.partial`
   *    64 - `_.partialRight`
   *   128 - `_.rearg`
   *   256 - `_.ary`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
      function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
        var isBindKey = bitmask & BIND_KEY_FLAG;
        if (!isBindKey && "function" != typeof func) throw new TypeError(FUNC_ERROR_TEXT);
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
          partials = holders = null;
        }
        length -= holders ? holders.length : 0;
        if (bitmask & PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = null;
        }
        var data = !isBindKey && getData(func), newData = [ func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity ];
        if (data && data !== !0) {
          mergeData(newData, data);
          bitmask = newData[1];
          arity = newData[9];
        }
        newData[9] = null == arity ? isBindKey ? 0 : func.length : nativeMax(arity - length, 0) || 0;
        if (bitmask == BIND_FLAG) var result = createBindWrapper(newData[0], newData[2]); else result = bitmask != PARTIAL_FLAG && bitmask != (BIND_FLAG | PARTIAL_FLAG) || newData[4].length ? createHybridWrapper.apply(undefined, newData) : createPartialWrapper.apply(undefined, newData);
        var setter = data ? baseSetData : setData;
        return setter(result, newData);
      }
      /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} [customizer] The function to customize comparing arrays.
   * @param {boolean} [isWhere] Specify performing partial comparisons.
   * @param {Array} [stackA] Tracks traversed `value` objects.
   * @param {Array} [stackB] Tracks traversed `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
      function equalArrays(array, other, equalFunc, customizer, isWhere, stackA, stackB) {
        var index = -1, arrLength = array.length, othLength = other.length, result = !0;
        if (arrLength != othLength && !(isWhere && othLength > arrLength)) return !1;
        // Deep compare the contents, ignoring non-numeric properties.
        for (;result && ++index < arrLength; ) {
          var arrValue = array[index], othValue = other[index];
          result = undefined;
          customizer && (result = isWhere ? customizer(othValue, arrValue, index) : customizer(arrValue, othValue, index));
          if ("undefined" == typeof result) // Recursively compare arrays (susceptible to call stack limits).
          if (isWhere) for (var othIndex = othLength; othIndex--; ) {
            othValue = other[othIndex];
            result = arrValue && arrValue === othValue || equalFunc(arrValue, othValue, customizer, isWhere, stackA, stackB);
            if (result) break;
          } else result = arrValue && arrValue === othValue || equalFunc(arrValue, othValue, customizer, isWhere, stackA, stackB);
        }
        return !!result;
      }
      /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} value The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
      function equalByTag(object, other, tag) {
        switch (tag) {
         case boolTag:
         case dateTag:
          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
          return +object == +other;

         case errorTag:
          return object.name == other.name && object.message == other.message;

         case numberTag:
          // Treat `NaN` vs. `NaN` as equal.
          return object != +object ? other != +other : 0 == object ? 1 / object == 1 / other : object == +other;

         case regexpTag:
         case stringTag:
          // Coerce regexes to strings and treat strings primitives and string
          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
          return object == other + "";
        }
        return !1;
      }
      /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} [customizer] The function to customize comparing values.
   * @param {boolean} [isWhere] Specify performing partial comparisons.
   * @param {Array} [stackA] Tracks traversed `value` objects.
   * @param {Array} [stackB] Tracks traversed `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
      function equalObjects(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
        var objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
        if (objLength != othLength && !isWhere) return !1;
        for (var hasCtor, index = -1; ++index < objLength; ) {
          var key = objProps[index], result = hasOwnProperty.call(other, key);
          if (result) {
            var objValue = object[key], othValue = other[key];
            result = undefined;
            customizer && (result = isWhere ? customizer(othValue, objValue, key) : customizer(objValue, othValue, key));
            "undefined" == typeof result && (// Recursively compare objects (susceptible to call stack limits).
            result = objValue && objValue === othValue || equalFunc(objValue, othValue, customizer, isWhere, stackA, stackB));
          }
          if (!result) return !1;
          hasCtor || (hasCtor = "constructor" == key);
        }
        if (!hasCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          // Non `Object` object instances with different constructors are not equal.
          if (objCtor != othCtor && "constructor" in object && "constructor" in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor)) return !1;
        }
        return !0;
      }
      /**
   * Gets the extremum value of `collection` invoking `iteratee` for each value
   * in `collection` to generate the criterion by which the value is ranked.
   * The `iteratee` is invoked with three arguments; (value, index, collection).
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {boolean} [isMin] Specify returning the minimum, instead of the
   *  maximum, extremum value.
   * @returns {*} Returns the extremum value.
   */
      function extremumBy(collection, iteratee, isMin) {
        var exValue = isMin ? POSITIVE_INFINITY : NEGATIVE_INFINITY, computed = exValue, result = computed;
        baseEach(collection, function(value, index, collection) {
          var current = iteratee(value, index, collection);
          if ((isMin ? computed > current : current > computed) || current === exValue && current === result) {
            computed = current;
            result = value;
          }
        });
        return result;
      }
      /**
   * Gets the appropriate "callback" function. If the `_.callback` method is
   * customized this function returns the custom method, otherwise it returns
   * the `baseCallback` function. If arguments are provided the chosen function
   * is invoked with them and its result is returned.
   *
   * @private
   * @returns {Function} Returns the chosen function or its result.
   */
      function getCallback(func, thisArg, argCount) {
        var result = lodash.callback || callback;
        result = result === callback ? baseCallback : result;
        return argCount ? result(func, thisArg, argCount) : result;
      }
      /**
   * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
   * customized this function returns the custom method, otherwise it returns
   * the `baseIndexOf` function. If arguments are provided the chosen function
   * is invoked with them and its result is returned.
   *
   * @private
   * @returns {Function|number} Returns the chosen function or its result.
   */
      function getIndexOf(collection, target, fromIndex) {
        var result = lodash.indexOf || indexOf;
        result = result === indexOf ? baseIndexOf : result;
        return collection ? result(collection, target, fromIndex) : result;
      }
      /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        // Add array properties assigned by `RegExp#exec`.
        if (length && "string" == typeof array[0] && hasOwnProperty.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
      function initCloneObject(object) {
        var Ctor = object.constructor;
        "function" == typeof Ctor && Ctor instanceof Ctor || (Ctor = Object);
        return new Ctor();
      }
      /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
         case arrayBufferTag:
          return bufferClone(object);

         case boolTag:
         case dateTag:
          return new Ctor(+object);

         case float32Tag:
         case float64Tag:
         case int8Tag:
         case int16Tag:
         case int32Tag:
         case uint8Tag:
         case uint8ClampedTag:
         case uint16Tag:
         case uint32Tag:
          var buffer = object.buffer;
          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

         case numberTag:
         case stringTag:
          return new Ctor(object);

         case regexpTag:
          var result = new Ctor(object.source, reFlags.exec(object));
          result.lastIndex = object.lastIndex;
        }
        return result;
      }
      /**
   * Checks if `func` is eligible for `this` binding.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is eligible, else `false`.
   */
      function isBindable(func) {
        var support = lodash.support, result = !(support.funcNames ? func.name : support.funcDecomp);
        if (!result) {
          var source = fnToString.call(func);
          support.funcNames || (result = !reFuncName.test(source));
          if (!result) {
            // Check if `func` references the `this` keyword and store the result.
            result = reThis.test(source) || isNative(func);
            baseSetData(func, result);
          }
        }
        return result;
      }
      /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
      function isIndex(value, length) {
        value = +value;
        length = null == length ? MAX_SAFE_INTEGER : length;
        return value > -1 && value % 1 == 0 && length > value;
      }
      /**
   * Checks if the provided arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
   */
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) return !1;
        var type = typeof index;
        if ("number" == type) var length = object.length, prereq = isLength(length) && isIndex(index, length); else prereq = "string" == type && index in object;
        if (prereq) {
          var other = object[index];
          return value === value ? value === other : other !== other;
        }
        return !1;
      }
      /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This function is based on ES `ToLength`. See the
   * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   */
      function isLength(value) {
        return "number" == typeof value && value > -1 && value % 1 == 0 && MAX_SAFE_INTEGER >= value;
      }
      /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
      function isStrictComparable(value) {
        return value === value && (0 === value ? 1 / value > 0 : !isObject(value));
      }
      /**
   * Merges the function metadata of `source` into `data`.
   *
   * Merging metadata reduces the number of wrappers required to invoke a function.
   * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
   * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
   * augment function arguments, making the order in which they are executed important,
   * preventing the merging of metadata. However, we make an exception for a safe
   * common case where curried functions have `_.ary` and or `_.rearg` applied.
   *
   * @private
   * @param {Array} data The destination metadata.
   * @param {Array} source The source metadata.
   * @returns {Array} Returns `data`.
   */
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, arityFlags = ARY_FLAG | REARG_FLAG, bindFlags = BIND_FLAG | BIND_KEY_FLAG, comboFlags = arityFlags | bindFlags | CURRY_BOUND_FLAG | CURRY_RIGHT_FLAG, isAry = bitmask & ARY_FLAG && !(srcBitmask & ARY_FLAG), isRearg = bitmask & REARG_FLAG && !(srcBitmask & REARG_FLAG), argPos = (isRearg ? data : source)[7], ary = (isAry ? data : source)[8], isCommon = !(bitmask >= REARG_FLAG && srcBitmask > bindFlags || bitmask > bindFlags && srcBitmask >= REARG_FLAG), isCombo = newBitmask >= arityFlags && comboFlags >= newBitmask && (REARG_FLAG > bitmask || (isRearg || isAry) && argPos.length <= ary);
        // Exit early if metadata can't be merged.
        if (!isCommon && !isCombo) return data;
        // Use source `thisArg` if available.
        if (srcBitmask & BIND_FLAG) {
          data[2] = source[2];
          // Set when currying a bound function.
          newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
        }
        // Compose partial arguments.
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
        }
        // Compose partial right arguments.
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
        }
        // Use source `argPos` if available.
        value = source[7];
        value && (data[7] = arrayCopy(value));
        // Use source `ary` if it's smaller.
        srcBitmask & ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8]));
        // Use source `arity` if one is not provided.
        null == data[9] && (data[9] = source[9]);
        // Use source `func` and merge bitmasks.
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */
      function reorder(array, indexes) {
        for (var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = arrayCopy(array); length--; ) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
        }
        return array;
      }
      /**
   * A fallback implementation of `Object.keys` which creates an array of the
   * own enumerable property names of `object`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   */
      function shimKeys(object) {
        for (var props = keysIn(object), propsLength = props.length, length = propsLength && object.length, support = lodash.support, allowIndexes = length && isLength(length) && (isArray(object) || support.nonEnumArgs && isArguments(object)), index = -1, result = []; ++index < propsLength; ) {
          var key = props[index];
          (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) && result.push(key);
        }
        return result;
      }
      /**
   * Converts `value` to an array-like object if it is not one.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {Array|Object} Returns the array-like object.
   */
      function toIterable(value) {
        return null == value ? [] : isLength(value.length) ? isObject(value) ? value : Object(value) : values(value);
      }
      /**
   * Converts `value` to an object if it is not one.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {Object} Returns the object.
   */
      function toObject(value) {
        return isObject(value) ? value : Object(value);
      }
      /*------------------------------------------------------------------------*/
      /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for, instead of the element itself.
   *
   * If a property name is provided for `predicate` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `predicate` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(chr) {
   *   return chr.user == 'barney';
   * });
   * // => 0
   *
   * // using the `_.matches` callback shorthand
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // using the `_.matchesProperty` callback shorthand
   * _.findIndex(users, 'active', false);
   * // => 0
   *
   * // using the `_.property` callback shorthand
   * _.findIndex(users, 'active');
   * // => 2
   */
      function findIndex(array, predicate, thisArg) {
        var index = -1, length = array ? array.length : 0;
        predicate = getCallback(predicate, thisArg, 3);
        for (;++index < length; ) if (predicate(array[index], index, array)) return index;
        return -1;
      }
      /**
   * Flattens a nested array. If `isDeep` is `true` the array is recursively
   * flattened, otherwise it is only flattened a single level.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to flatten.
   * @param {boolean} [isDeep] Specify a deep flatten.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, 3, [4]]]);
   * // => [1, 2, 3, [4]];
   *
   * // using `isDeep`
   * _.flatten([1, [2, 3, [4]]], true);
   * // => [1, 2, 3, 4];
   */
      function flatten(array, isDeep, guard) {
        var length = array ? array.length : 0;
        guard && isIterateeCall(array, isDeep, guard) && (isDeep = !1);
        return length ? baseFlatten(array, isDeep, !1, 0) : [];
      }
      /**
   * Recursively flattens a nested array.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to recursively flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flattenDeep([1, [2, 3, [4]]]);
   * // => [1, 2, 3, 4];
   */
      function flattenDeep(array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, !0, !1, 0) : [];
      }
      /**
   * Gets the index at which the first occurrence of `value` is found in `array`
   * using `SameValueZero` for equality comparisons. If `fromIndex` is negative,
   * it is used as the offset from the end of `array`. If `array` is sorted
   * providing `true` for `fromIndex` performs a faster binary search.
   *
   * **Note:** `SameValueZero` comparisons are like strict equality comparisons,
   * e.g. `===`, except that `NaN` matches `NaN`. See the
   * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {boolean|number} [fromIndex=0] The index to search from or `true`
   *  to perform a binary search on a sorted array.
   * @returns {number} Returns the index of the matched value, else `-1`.
   * @example
   *
   * _.indexOf([1, 2, 1, 2], 2);
   * // => 1
   *
   * // using `fromIndex`
   * _.indexOf([1, 2, 1, 2], 2, 2);
   * // => 3
   *
   * // performing a binary search
   * _.indexOf([1, 1, 2, 2], 2, true);
   * // => 2
   */
      function indexOf(array, value, fromIndex) {
        var length = array ? array.length : 0;
        if (!length) return -1;
        if ("number" == typeof fromIndex) fromIndex = 0 > fromIndex ? nativeMax(length + fromIndex, 0) : fromIndex; else if (fromIndex) {
          var index = binaryIndex(array, value), other = array[index];
          return (value === value ? value === other : other !== other) ? index : -1;
        }
        return baseIndexOf(array, value, fromIndex || 0);
      }
      /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-`_.zip`
   * configuration.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
   * // => [['fred', 30, true], ['barney', 40, false]]
   *
   * _.unzip(zipped);
   * // => [['fred', 'barney'], [30, 40], [true, false]]
   */
      function unzip(array) {
        for (var index = -1, length = (array && array.length && arrayMax(arrayMap(array, getLength))) >>> 0, result = Array(length); ++index < length; ) result[index] = arrayMap(array, baseProperty(index));
        return result;
      }
      /**
   * Creates an array of grouped elements, the first of which contains the first
   * elements of the given arrays, the second of which contains the second elements
   * of the given arrays, and so on.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to process.
   * @returns {Array} Returns the new array of grouped elements.
   * @example
   *
   * _.zip(['fred', 'barney'], [30, 40], [true, false]);
   * // => [['fred', 30, true], ['barney', 40, false]]
   */
      function zip() {
        for (var length = arguments.length, array = Array(length); length--; ) array[length] = arguments[length];
        return unzip(array);
      }
      /**
   * Creates an object composed from arrays of property names and values. Provide
   * either a single two dimensional array, e.g. `[[key1, value1], [key2, value2]]`
   * or two arrays, one of property names and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @alias object
   * @category Array
   * @param {Array} props The property names.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['fred', 'barney'], [30, 40]);
   * // => { 'fred': 30, 'barney': 40 }
   */
      function zipObject(props, values) {
        var index = -1, length = props ? props.length : 0, result = {};
        !length || values || isArray(props[0]) || (values = []);
        for (;++index < length; ) {
          var key = props[index];
          values ? result[key] = values[index] : key && (result[key[0]] = key[1]);
        }
        return result;
      }
      /*------------------------------------------------------------------------*/
      /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is bound to `thisArg` and
   * invoked with three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `predicate` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `predicate` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * @static
   * @memberOf _
   * @alias detect
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': true },
   *   { 'user': 'fred',    'age': 40, 'active': false },
   *   { 'user': 'pebbles', 'age': 1,  'active': true }
   * ];
   *
   * _.result(_.find(users, function(chr) {
   *   return chr.age < 40;
   * }), 'user');
   * // => 'barney'
   *
   * // using the `_.matches` callback shorthand
   * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
   * // => 'pebbles'
   *
   * // using the `_.matchesProperty` callback shorthand
   * _.result(_.find(users, 'active', false), 'user');
   * // => 'fred'
   *
   * // using the `_.property` callback shorthand
   * _.result(_.find(users, 'active'), 'user');
   * // => 'barney'
   */
      function find(collection, predicate, thisArg) {
        if (isArray(collection)) {
          var index = findIndex(collection, predicate, thisArg);
          return index > -1 ? collection[index] : undefined;
        }
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(collection, predicate, baseEach);
      }
      /**
   * This method is like `_.find` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * _.findLast([1, 2, 3, 4], function(n) {
   *   return n % 2 == 1;
   * });
   * // => 3
   */
      function findLast(collection, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(collection, predicate, baseEachRight);
      }
      /**
   * Iterates over elements of `collection` invoking `iteratee` for each element.
   * The `iteratee` is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection). Iterator functions may exit iteration early
   * by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a `length` property
   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
   * may be used for object iteration.
   *
   * @static
   * @memberOf _
   * @alias each
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Array|Object|string} Returns `collection`.
   * @example
   *
   * _([1, 2]).forEach(function(n) {
   *   console.log(n);
   * }).value();
   * // => logs each value from left to right and returns the array
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
   *   console.log(n, key);
   * });
   * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
   */
      function forEach(collection, iteratee, thisArg) {
        return "function" == typeof iteratee && "undefined" == typeof thisArg && isArray(collection) ? arrayEach(collection, iteratee) : baseEach(collection, bindCallback(iteratee, thisArg, 3));
      }
      /**
   * Checks if `value` is in `collection` using `SameValueZero` for equality
   * comparisons. If `fromIndex` is negative, it is used as the offset from
   * the end of `collection`.
   *
   * **Note:** `SameValueZero` comparisons are like strict equality comparisons,
   * e.g. `===`, except that `NaN` matches `NaN`. See the
   * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   * for more details.
   *
   * @static
   * @memberOf _
   * @alias contains, include
   * @category Collection
   * @param {Array|Object|string} collection The collection to search.
   * @param {*} target The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {boolean} Returns `true` if a matching element is found, else `false`.
   * @example
   *
   * _.includes([1, 2, 3], 1);
   * // => true
   *
   * _.includes([1, 2, 3], 1, 2);
   * // => false
   *
   * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
   * // => true
   *
   * _.includes('pebbles', 'eb');
   * // => true
   */
      function includes(collection, target, fromIndex) {
        var length = collection ? collection.length : 0;
        if (!isLength(length)) {
          collection = values(collection);
          length = collection.length;
        }
        if (!length) return !1;
        fromIndex = "number" == typeof fromIndex ? 0 > fromIndex ? nativeMax(length + fromIndex, 0) : fromIndex || 0 : 0;
        return "string" == typeof collection || !isArray(collection) && isString(collection) ? length > fromIndex && collection.indexOf(target, fromIndex) > -1 : getIndexOf(collection, target, fromIndex) > -1;
      }
      /**
   * Creates an array of values by running each element in `collection` through
   * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
   * arguments; (value, index|key, collection).
   *
   * If a property name is provided for `predicate` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `predicate` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * Many lodash methods are guarded to work as interatees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`, `drop`,
   * `dropRight`, `fill`, `flatten`, `invert`, `max`, `min`, `parseInt`, `slice`,
   * `sortBy`, `take`, `takeRight`, `template`, `trim`, `trimLeft`, `trimRight`,
   * `trunc`, `random`, `range`, `sample`, `uniq`, and `words`
   *
   * @static
   * @memberOf _
   * @alias collect
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [iteratee=_.identity] The function invoked
   *  per iteration.
   *  create a `_.property` or `_.matches` style callback respectively.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function timesThree(n) {
   *   return n * 3;
   * }
   *
   * _.map([1, 2], timesThree);
   * // => [3, 6]
   *
   * _.map({ 'a': 1, 'b': 2 }, timesThree);
   * // => [3, 6] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // using the `_.property` callback shorthand
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */
      function map(collection, iteratee, thisArg) {
        var func = isArray(collection) ? arrayMap : baseMap;
        iteratee = getCallback(iteratee, thisArg, 3);
        return func(collection, iteratee);
      }
      /**
   * Reduces `collection` to a value which is the accumulated result of running
   * each element in `collection` through `iteratee`, where each successive
   * invocation is supplied the return value of the previous. If `accumulator`
   * is not provided the first element of `collection` is used as the initial
   * value. The `iteratee` is bound to `thisArg`and invoked with four arguments;
   * (accumulator, value, index|key, collection).
   *
   * Many lodash methods are guarded to work as interatees for methods like
   * `_.reduce`, `_.reduceRight`, and `_.transform`.
   *
   * The guarded methods are:
   * `assign`, `defaults`, `merge`, and `sortAllBy`
   *
   * @static
   * @memberOf _
   * @alias foldl, inject
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.reduce([1, 2], function(sum, n) {
   *   return sum + n;
   * });
   * // => 3
   *
   * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
   *   result[key] = n * 3;
   *   return result;
   * }, {});
   * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
   */
      function reduce(collection, iteratee, accumulator, thisArg) {
        var func = isArray(collection) ? arrayReduce : baseReduce;
        return func(collection, getCallback(iteratee, thisArg, 4), accumulator, arguments.length < 3, baseEach);
      }
      /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable properties for objects.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the size of `collection`.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
      function size(collection) {
        var length = collection ? collection.length : 0;
        return isLength(length) ? length : keys(collection).length;
      }
      /**
   * Checks if `predicate` returns truthy for **any** element of `collection`.
   * The function returns as soon as it finds a passing value and does not iterate
   * over the entire collection. The predicate is bound to `thisArg` and invoked
   * with three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `predicate` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `predicate` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * @static
   * @memberOf _
   * @alias any
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ];
   *
   * // using the `_.matches` callback shorthand
   * _.some(users, { 'user': 'barney', 'active': false });
   * // => false
   *
   * // using the `_.matchesProperty` callback shorthand
   * _.some(users, 'active', false);
   * // => true
   *
   * // using the `_.property` callback shorthand
   * _.some(users, 'active');
   * // => true
   */
      function some(collection, predicate, thisArg) {
        var func = isArray(collection) ? arraySome : baseSome;
        ("function" != typeof predicate || "undefined" != typeof thisArg) && (predicate = getCallback(predicate, thisArg, 3));
        return func(collection, predicate);
      }
      /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection through `iteratee`. This method performs
   * a stable sort, that is, it preserves the original sort order of equal elements.
   * The `iteratee` is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection).
   *
   * If a property name is provided for `predicate` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `predicate` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Array|Function|Object|string} [iteratee=_.identity] The function
   *  invoked per iteration. If a property name or an object is provided it is
   *  used to create a `_.property` or `_.matches` style callback respectively.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * _.sortBy([1, 2, 3], function(n) {
   *   return Math.sin(n);
   * });
   * // => [3, 1, 2]
   *
   * _.sortBy([1, 2, 3], function(n) {
   *   return this.sin(n);
   * }, Math);
   * // => [3, 1, 2]
   *
   * var users = [
   *   { 'user': 'fred' },
   *   { 'user': 'pebbles' },
   *   { 'user': 'barney' }
   * ];
   *
   * // using the `_.property` callback shorthand
   * _.pluck(_.sortBy(users, 'user'), 'user');
   * // => ['barney', 'fred', 'pebbles']
   */
      function sortBy(collection, iteratee, thisArg) {
        if (null == collection) return [];
        var index = -1, length = collection.length, result = isLength(length) ? Array(length) : [];
        thisArg && isIterateeCall(collection, iteratee, thisArg) && (iteratee = null);
        iteratee = getCallback(iteratee, thisArg, 3);
        baseEach(collection, function(value, key, collection) {
          result[++index] = {
            criteria: iteratee(value, key, collection),
            index: index,
            value: value
          };
        });
        return baseSortBy(result, compareAscending);
      }
      /*------------------------------------------------------------------------*/
      /**
   * Creates a function that invokes `func`, with the `this` binding and arguments
   * of the created function, while it is called less than `n` times. Subsequent
   * calls to the created function return the result of the last `func` invocation.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {number} n The number of calls at which `func` is no longer invoked.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * jQuery('#add').on('click', _.before(5, addContactToList));
   * // => allows adding up to 4 contacts to the list
   */
      function before(n, func) {
        var result;
        if ("function" != typeof func) {
          if ("function" != typeof n) throw new TypeError(FUNC_ERROR_TEXT);
          var temp = n;
          n = func;
          func = temp;
        }
        return function() {
          --n > 0 ? result = func.apply(this, arguments) : func = null;
          return result;
        };
      }
      /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is coerced to a string and used as the
   * cache key. The `func` is invoked with the `this` binding of the memoized
   * function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the ES `Map` method interface
   * of `get`, `has`, and `set`. See the
   * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoizing function.
   * @example
   *
   * var upperCase = _.memoize(function(string) {
   *   return string.toUpperCase();
   * });
   *
   * upperCase('fred');
   * // => 'FRED'
   *
   * // modifying the result cache
   * upperCase.cache.set('fred', 'BARNEY');
   * upperCase('fred');
   * // => 'BARNEY'
   *
   * // replacing `_.memoize.Cache`
   * var object = { 'user': 'fred' };
   * var other = { 'user': 'barney' };
   * var identity = _.memoize(_.identity);
   *
   * identity(object);
   * // => { 'user': 'fred' }
   * identity(other);
   * // => { 'user': 'fred' }
   *
   * _.memoize.Cache = WeakMap;
   * var identity = _.memoize(_.identity);
   *
   * identity(object);
   * // => { 'user': 'fred' }
   * identity(other);
   * // => { 'user': 'barney' }
   */
      function memoize(func, resolver) {
        if ("function" != typeof func || resolver && "function" != typeof resolver) throw new TypeError(FUNC_ERROR_TEXT);
        var memoized = function() {
          var args = arguments, cache = memoized.cache, key = resolver ? resolver.apply(this, args) : args[0];
          if (cache.has(key)) return cache.get(key);
          var result = func.apply(this, args);
          cache.set(key, result);
          return result;
        };
        memoized.cache = new memoize.Cache();
        return memoized;
      }
      /**
   * Creates a function that is restricted to invoking `func` once. Repeat calls
   * to the function return the value of the first call. The `func` is invoked
   * with the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var initialize = _.once(createApplication);
   * initialize();
   * initialize();
   * // `initialize` invokes `createApplication` once
   */
      function once(func) {
        return before(func, 2);
      }
      /**
   * This method is like `_.partial` except that partially applied arguments
   * are appended to those provided to the new function.
   *
   * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * **Note:** This method does not set the `length` property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [args] The arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * var greet = function(greeting, name) {
   *   return greeting + ' ' + name;
   * };
   *
   * var greetFred = _.partialRight(greet, 'fred');
   * greetFred('hi');
   * // => 'hi fred'
   *
   * // using placeholders
   * var sayHelloTo = _.partialRight(greet, 'hello', _);
   * sayHelloTo('fred');
   * // => 'hello fred'
   */
      function partialRight(func) {
        var partials = baseSlice(arguments, 1), holders = replaceHolders(partials, partialRight.placeholder);
        return createWrapper(func, PARTIAL_RIGHT_FLAG, null, partials, holders);
      }
      /*------------------------------------------------------------------------*/
      /**
   * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
   * otherwise they are assigned by reference. If `customizer` is provided it is
   * invoked to produce the cloned values. If `customizer` returns `undefined`
   * cloning is handled by the method instead. The `customizer` is bound to
   * `thisArg` and invoked with two argument; (value [, index|key, object]).
   *
   * **Note:** This method is loosely based on the structured clone algorithm.
   * The enumerable properties of `arguments` objects and objects created by
   * constructors other than `Object` are cloned to plain `Object` objects. An
   * empty object is returned for uncloneable values such as functions, DOM nodes,
   * Maps, Sets, and WeakMaps. See the [HTML5 specification](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm)
   * for more details.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {Function} [customizer] The function to customize cloning values.
   * @param {*} [thisArg] The `this` binding of `customizer`.
   * @returns {*} Returns the cloned value.
   * @example
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * var shallow = _.clone(users);
   * shallow[0] === users[0];
   * // => true
   *
   * var deep = _.clone(users, true);
   * deep[0] === users[0];
   * // => false
   *
   * // using a customizer callback
   * var el = _.clone(document.body, function(value) {
   *   if (_.isElement(value)) {
   *     return value.cloneNode(false);
   *   }
   * });
   *
   * el === document.body
   * // => false
   * el.nodeName
   * // => BODY
   * el.childNodes.length;
   * // => 0
   */
      function clone(value, isDeep, customizer, thisArg) {
        if (isDeep && "boolean" != typeof isDeep && isIterateeCall(value, isDeep, customizer)) isDeep = !1; else if ("function" == typeof isDeep) {
          thisArg = customizer;
          customizer = isDeep;
          isDeep = !1;
        }
        customizer = "function" == typeof customizer && bindCallback(customizer, thisArg, 1);
        return baseClone(value, isDeep, customizer);
      }
      /**
   * Checks if `value` is classified as an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
      function isArguments(value) {
        var length = isObjectLike(value) ? value.length : undefined;
        return isLength(length) && objToString.call(value) == argsTag || !1;
      }
      /**
   * Checks if `value` is empty. A value is considered empty unless it is an
   * `arguments` object, array, string, or jQuery-like collection with a length
   * greater than `0` or an object with own enumerable properties.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {Array|Object|string} value The value to inspect.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
      function isEmpty(value) {
        if (null == value) return !0;
        var length = value.length;
        return isLength(length) && (isArray(value) || isString(value) || isArguments(value) || isObjectLike(value) && isFunction(value.splice)) ? !length : !keys(value).length;
      }
      /**
   * Checks if `value` is the language type of `Object`.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * **Note:** See the [ES5 spec](https://es5.github.io/#x8) for more details.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(1);
   * // => false
   */
      function isObject(value) {
        // Avoid a V8 JIT bug in Chrome 19-20.
        // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
        var type = typeof value;
        return "function" == type || value && "object" == type || !1;
      }
      /**
   * Checks if `value` is a native function.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
   * @example
   *
   * _.isNative(Array.prototype.push);
   * // => true
   *
   * _.isNative(_);
   * // => false
   */
      function isNative(value) {
        return null == value ? !1 : objToString.call(value) == funcTag ? reNative.test(fnToString.call(value)) : isObjectLike(value) && reHostCtor.test(value) || !1;
      }
      /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
      function isString(value) {
        return "string" == typeof value || isObjectLike(value) && objToString.call(value) == stringTag || !1;
      }
      /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
      function isTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && typedArrayTags[objToString.call(value)] || !1;
      }
      /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   *
   * _.isUndefined(null);
   * // => false
   */
      function isUndefined(value) {
        return "undefined" == typeof value;
      }
      /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties that resolve to `undefined`. Once a
   * property is set, additional values of the same property are ignored.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
   * // => { 'user': 'barney', 'age': 36 }
   */
      function defaults(object) {
        if (null == object) return object;
        var args = arrayCopy(arguments);
        args.push(assignDefaults);
        return assign.apply(undefined, args);
      }
      /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
      function keysIn(object) {
        if (null == object) return [];
        isObject(object) || (object = Object(object));
        var length = object.length;
        length = length && isLength(length) && (isArray(object) || support.nonEnumArgs && isArguments(object)) && length || 0;
        for (var Ctor = object.constructor, index = -1, isProto = "function" == typeof Ctor && Ctor.prototype === object, result = Array(length), skipIndexes = length > 0; ++index < length; ) result[index] = index + "";
        for (var key in object) skipIndexes && isIndex(key, length) || "constructor" == key && (isProto || !hasOwnProperty.call(object, key)) || result.push(key);
        return result;
      }
      /**
   * Creates an object with the same keys as `object` and values generated by
   * running each own enumerable property of `object` through `iteratee`. The
   * iteratee function is bound to `thisArg` and invoked with three arguments;
   * (value, key, object).
   *
   * If a property name is provided for `iteratee` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `iteratee` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function|Object|string} [iteratee=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `iteratee`.
   * @returns {Object} Returns the new mapped object.
   * @example
   *
   * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
   *   return n * 3;
   * });
   * // => { 'a': 3, 'b': 6 }
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * // using the `_.property` callback shorthand
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
      function mapValues(object, iteratee, thisArg) {
        var result = {};
        iteratee = getCallback(iteratee, thisArg, 3);
        baseForOwn(object, function(value, key, object) {
          result[key] = iteratee(value, key, object);
        });
        return result;
      }
      /**
   * Creates an array of the own enumerable property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
      function values(object) {
        return baseValues(object, keys(object));
      }
      /*------------------------------------------------------------------------*/
      /**
   * Capitalizes the first character of `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to capitalize.
   * @returns {string} Returns the capitalized string.
   * @example
   *
   * _.capitalize('fred');
   * // => 'Fred'
   */
      function capitalize(string) {
        string = baseToString(string);
        return string && string.charAt(0).toUpperCase() + string.slice(1);
      }
      /**
   * Escapes the `RegExp` special characters "\", "^", "$", ".", "|", "?", "*",
   * "+", "(", ")", "[", "]", "{" and "}" in `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escapeRegExp('[lodash](https://lodash.com/)');
   * // => '\[lodash\]\(https://lodash\.com/\)'
   */
      function escapeRegExp(string) {
        string = baseToString(string);
        return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, "\\$&") : string;
      }
      /*------------------------------------------------------------------------*/
      /**
   * Creates a function that invokes `func` with the `this` binding of `thisArg`
   * and arguments of the created function. If `func` is a property name the
   * created callback returns the property value for a given element. If `func`
   * is an object the created callback returns `true` for elements that contain
   * the equivalent object properties, otherwise it returns `false`.
   *
   * @static
   * @memberOf _
   * @alias iteratee
   * @category Utility
   * @param {*} [func=_.identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {Function} Returns the callback.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 }
   * ];
   *
   * // wrap to create custom callback shorthands
   * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
   *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
   *   if (!match) {
   *     return callback(func, thisArg);
   *   }
   *   return function(object) {
   *     return match[2] == 'gt'
   *       ? object[match[1]] > match[3]
   *       : object[match[1]] < match[3];
   *   };
   * });
   *
   * _.filter(users, 'age__gt36');
   * // => [{ 'user': 'fred', 'age': 40 }]
   */
      function callback(func, thisArg, guard) {
        guard && isIterateeCall(func, thisArg, guard) && (thisArg = null);
        return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
      }
      /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var object = { 'user': 'fred' };
   * var getter = _.constant(object);
   *
   * getter() === object;
   * // => true
   */
      function constant(value) {
        return function() {
          return value;
        };
      }
      /**
   * This method returns the first argument provided to it.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'user': 'fred' };
   *
   * _.identity(object) === object;
   * // => true
   */
      function identity(value) {
        return value;
      }
      /**
   * Creates a function which performs a deep comparison between a given object
   * and `source`, returning `true` if the given object has equivalent property
   * values, else `false`.
   *
   * **Note:** This method supports comparing arrays, booleans, `Date` objects,
   * numbers, `Object` objects, regexes, and strings. Objects are compared by
   * their own, not inherited, enumerable properties. For comparing a single
   * own or inherited property value see `_.matchesProperty`.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, _.matches({ 'age': 40, 'active': false }));
   * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
   */
      function matches(source) {
        return baseMatches(baseClone(source, !0));
      }
      /**
   * A no-operation function which returns `undefined` regardless of the
   * arguments it receives.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @example
   *
   * var object = { 'user': 'fred' };
   *
   * _.noop(object) === undefined;
   * // => true
   */
      function noop() {}
      /**
   * Generates a unique ID. If `prefix` is provided the ID is appended to it.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {string} [prefix] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
      function uniqueId(prefix) {
        var id = ++idCounter;
        return baseToString(prefix) + id;
      }
      /** Used as a safe reference for `undefined` in pre-ES5 environments. */
      var undefined, VERSION = "3.5.0", BIND_FLAG = 1, BIND_KEY_FLAG = 2, CURRY_BOUND_FLAG = 4, CURRY_FLAG = 8, CURRY_RIGHT_FLAG = 16, PARTIAL_FLAG = 32, PARTIAL_RIGHT_FLAG = 64, REARG_FLAG = 128, ARY_FLAG = 256, HOT_COUNT = 150, HOT_SPAN = 16, FUNC_ERROR_TEXT = "Expected a function", PLACEHOLDER = "__lodash_placeholder__", argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reFlags = /\w*$/, reFuncName = /^\s*function[ \n\r\t]+\w/, reHostCtor = /^\[object .+?Constructor\]$/, reRegExpChars = /[.*+?^${}()|[\]\/\\]/g, reHasRegExpChars = RegExp(reRegExpChars.source), reThis = /\bthis\b/, typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
      /** Used to identify `toStringTag` values supported by `_.clone`. */
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = !1;
      /** Used to determine if values are of the language type `Object`. */
      var objectTypes = {
        "function": !0,
        object: !0
      }, freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports, freeModule = objectTypes[typeof module] && module && !module.nodeType && module, freeGlobal = freeExports && freeModule && "object" == typeof global && global, freeWindow = objectTypes[typeof window] && window, root = freeGlobal || freeWindow !== (this && this.window) && freeWindow || this, objectProto = Object.prototype, fnToString = Function.prototype.toString, getLength = baseProperty("length"), hasOwnProperty = objectProto.hasOwnProperty, idCounter = 0, objToString = objectProto.toString, reNative = RegExp("^" + escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ArrayBuffer = isNative(ArrayBuffer = root.ArrayBuffer) && ArrayBuffer, bufferSlice = isNative(bufferSlice = ArrayBuffer && new ArrayBuffer(0).slice) && bufferSlice, floor = Math.floor, propertyIsEnumerable = objectProto.propertyIsEnumerable, Uint8Array = isNative(Uint8Array = root.Uint8Array) && Uint8Array, WeakMap = isNative(WeakMap = root.WeakMap) && WeakMap, Float64Array = function() {
        // Safari 5 errors when using an array buffer to initialize a typed array
        // where the array buffer's `byteLength` is not a multiple of the typed
        // array's `BYTES_PER_ELEMENT`.
        try {
          var func = isNative(func = root.Float64Array) && func, result = new func(new ArrayBuffer(10), 0, 1) && func;
        } catch (e) {}
        return result;
      }(), nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray, nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys, nativeMax = Math.max, nativeMin = Math.min, nativeNow = isNative(nativeNow = Date.now) && nativeNow, NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, POSITIVE_INFINITY = Number.POSITIVE_INFINITY, MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1, FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0, MAX_SAFE_INTEGER = Math.pow(2, 53) - 1, metaMap = WeakMap && new WeakMap(), support = lodash.support = {};
      !function() {
        /**
     * Detect if functions can be decompiled by `Function#toString`
     * (all but Firefox OS certified apps, older Opera mobile browsers, and
     * the PlayStation 3; forced `false` for Windows 8 apps).
     *
     * @memberOf _.support
     * @type boolean
     */
        support.funcDecomp = !isNative(root.WinRTError) && reThis.test(function() {
          return this;
        });
        /**
     * Detect if `Function#name` is supported (all but IE).
     *
     * @memberOf _.support
     * @type boolean
     */
        support.funcNames = "string" == typeof Function.name;
        /**
     * Detect if `arguments` object indexes are non-enumerable.
     *
     * In Firefox < 4, IE < 9, PhantomJS, and Safari < 5.1 `arguments` object
     * indexes are non-enumerable. Chrome < 25 and Node.js < 0.11.0 treat
     * `arguments` object indexes as non-enumerable and fail `hasOwnProperty`
     * checks for indexes that exceed their function's formal parameters with
     * associated values of `0`.
     *
     * @memberOf _.support
     * @type boolean
     */
        try {
          support.nonEnumArgs = !propertyIsEnumerable.call(arguments, 1);
        } catch (e) {
          support.nonEnumArgs = !0;
        }
      }(0, 0);
      /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
      var baseCreate = function() {
        function Object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            Object.prototype = prototype;
            var result = new Object();
            Object.prototype = null;
          }
          return result || root.Object();
        };
      }(), baseSetData = metaMap ? function(func, data) {
        metaMap.set(func, data);
        return func;
      } : identity;
      bufferSlice || (// PhantomJS has `ArrayBuffer` and `Uint8Array` but not `Float64Array`.
      bufferClone = ArrayBuffer && Uint8Array ? function(buffer) {
        var byteLength = buffer.byteLength, floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0, offset = floatLength * FLOAT64_BYTES_PER_ELEMENT, result = new ArrayBuffer(byteLength);
        if (floatLength) {
          var view = new Float64Array(result, 0, floatLength);
          view.set(new Float64Array(buffer, 0, floatLength));
        }
        if (byteLength != offset) {
          view = new Uint8Array(result, offset);
          view.set(new Uint8Array(buffer, offset));
        }
        return result;
      } : constant(null));
      /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
      var getData = metaMap ? function(func) {
        return metaMap.get(func);
      } : noop, setData = function() {
        var count = 0, lastCalled = 0;
        return function(key, value) {
          var stamp = now(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) return key;
          } else count = 0;
          return baseSetData(key, value);
        };
      }(), now = nativeNow || function() {
        return new Date().getTime();
      }, isArray = nativeIsArray || function(value) {
        return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag || !1;
      }, isFunction = baseIsFunction(/x/) || Uint8Array && !baseIsFunction(Uint8Array) ? function(value) {
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in older versions of Chrome and Safari which return 'function' for regexes
        // and Safari 8 equivalents which return 'object' for typed array constructors.
        return objToString.call(value) == funcTag;
      } : baseIsFunction, assign = createAssigner(baseAssign), keys = nativeKeys ? function(object) {
        if (object) var Ctor = object.constructor, length = object.length;
        return "function" == typeof Ctor && Ctor.prototype === object || "function" != typeof object && length && isLength(length) ? shimKeys(object) : isObject(object) ? nativeKeys(object) : [];
      } : shimKeys, max = createExtremum(arrayMax), min = createExtremum(arrayMin, !0);
      /*------------------------------------------------------------------------*/
      // Add functions to the `Map` cache.
      MapCache.prototype["delete"] = mapDelete;
      MapCache.prototype.get = mapGet;
      MapCache.prototype.has = mapHas;
      MapCache.prototype.set = mapSet;
      // Assign cache to `_.memoize`.
      memoize.Cache = MapCache;
      // Add functions that return wrapped values when chaining.
      lodash.assign = assign;
      lodash.before = before;
      lodash.callback = callback;
      lodash.constant = constant;
      lodash.defaults = defaults;
      lodash.flatten = flatten;
      lodash.flattenDeep = flattenDeep;
      lodash.forEach = forEach;
      lodash.keys = keys;
      lodash.keysIn = keysIn;
      lodash.map = map;
      lodash.mapValues = mapValues;
      lodash.matches = matches;
      lodash.memoize = memoize;
      lodash.once = once;
      lodash.partialRight = partialRight;
      lodash.sortBy = sortBy;
      lodash.unzip = unzip;
      lodash.values = values;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      // Add aliases.
      lodash.collect = map;
      lodash.each = forEach;
      lodash.extend = assign;
      lodash.iteratee = callback;
      lodash.object = zipObject;
      /*------------------------------------------------------------------------*/
      // Add functions that return unwrapped values when chaining.
      lodash.capitalize = capitalize;
      lodash.clone = clone;
      lodash.escapeRegExp = escapeRegExp;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findLast = findLast;
      lodash.identity = identity;
      lodash.includes = includes;
      lodash.indexOf = indexOf;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray;
      lodash.isEmpty = isEmpty;
      lodash.isFunction = isFunction;
      lodash.isNative = isNative;
      lodash.isObject = isObject;
      lodash.isString = isString;
      lodash.isTypedArray = isTypedArray;
      lodash.isUndefined = isUndefined;
      lodash.max = max;
      lodash.min = min;
      lodash.noop = noop;
      lodash.now = now;
      lodash.reduce = reduce;
      lodash.size = size;
      lodash.some = some;
      lodash.uniqueId = uniqueId;
      // Add aliases.
      lodash.any = some;
      lodash.contains = includes;
      lodash.detect = find;
      lodash.foldl = reduce;
      lodash.include = includes;
      lodash.inject = reduce;
      /*------------------------------------------------------------------------*/
      /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type string
   */
      lodash.VERSION = VERSION;
      // Assign default placeholders.
      partialRight.placeholder = lodash;
      /*--------------------------------------------------------------------------*/
      // Export for a browser or Rhino.
      root._ = lodash;
    }).call(lodashContainer, lodashContainer, lodashContainer);
    var _ = lodashContainer._;
    SignalBinding.prototype = {
      /**
     * If binding is active and should be executed.
     * @type boolean
     */
      active: !0,
      /**
     * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
     * @type Array|null
     */
      params: null,
      /**
     * Call listener passing arbitrary parameters.
     * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
     * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
     * @return {*} Value returned by the listener.
     */
      execute: function(paramsArr) {
        var handlerReturn, params;
        if (this.active && this._listener) {
          params = this.params ? this.params.concat(paramsArr) : paramsArr;
          handlerReturn = this._listener.apply(this.context, params);
          this._isOnce && this.detach();
        }
        return handlerReturn;
      },
      /**
     * Detach binding from signal.
     * - alias to: mySignal.remove(myBinding.getListener());
     * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
     */
      detach: function() {
        return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
      },
      /**
     * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
     */
      isBound: function() {
        return !!this._signal && !!this._listener;
      },
      /**
     * @return {boolean} If SignalBinding will only be executed once.
     */
      isOnce: function() {
        return this._isOnce;
      },
      /**
     * @return {Function} Handler function bound to the signal.
     */
      getListener: function() {
        return this._listener;
      },
      /**
     * @return {Signal} Signal that listener is currently bound to.
     */
      getSignal: function() {
        return this._signal;
      },
      /**
     * Delete instance properties
     * @private
     */
      _destroy: function() {
        delete this._signal;
        delete this._listener;
        delete this.context;
      },
      /**
     * @return {string} String representation of the object.
     */
      toString: function() {
        return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]";
      }
    };
    Signal.prototype = {
      /**
     * Signals Version Number
     * @type String
     * @const
     */
      VERSION: "1.0.0",
      /**
     * If Signal should keep record of previously dispatched parameters and
     * automatically execute listener during `add()`/`addOnce()` if Signal was
     * already dispatched before.
     * @type boolean
     */
      memorize: !1,
      /**
     * @type boolean
     * @private
     */
      _shouldPropagate: !0,
      /**
     * If Signal is active and should broadcast events.
     * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
     * @type boolean
     */
      active: !0,
      /**
     * @param {Function} listener
     * @param {boolean} isOnce
     * @param {Object} [listenerContext]
     * @param {Number} [priority]
     * @return {SignalBinding}
     * @private
     */
      _registerListener: function(listener, isOnce, listenerContext, priority) {
        var binding, prevIndex = this._indexOfListener(listener, listenerContext);
        if (-1 !== prevIndex) {
          binding = this._bindings[prevIndex];
          if (binding.isOnce() !== isOnce) throw new Error("You cannot add" + (isOnce ? "" : "Once") + "() then add" + (isOnce ? "Once" : "") + "() the same listener without removing the relationship first.");
        } else {
          binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
          this._addBinding(binding);
        }
        this.memorize && this._prevParams && binding.execute(this._prevParams);
        return binding;
      },
      /**
     * @param {SignalBinding} binding
     * @private
     */
      _addBinding: function(binding) {
        //simplified insertion sort
        var n = this._bindings.length;
        do --n; while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
        this._bindings.splice(n + 1, 0, binding);
      },
      /**
     * @param {Function} listener
     * @return {number}
     * @private
     */
      _indexOfListener: function(listener, context) {
        for (var cur, n = this._bindings.length; n--; ) {
          cur = this._bindings[n];
          if (cur._listener === listener && cur.context === context) return n;
        }
        return -1;
      },
      /**
     * Check if listener was attached to Signal.
     * @param {Function} listener
     * @param {Object} [context]
     * @return {boolean} if Signal has the specified listener.
     */
      has: function(listener, context) {
        return -1 !== this._indexOfListener(listener, context);
      },
      /**
     * Add a listener to the signal.
     * @param {Function} listener Signal handler function.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
     * @return {SignalBinding} An Object representing the binding between the Signal and listener.
     */
      add: function(listener, listenerContext, priority) {
        validateListener(listener, "add");
        return this._registerListener(listener, !1, listenerContext, priority);
      },
      /**
     * Add listener to the signal that should be removed after first execution (will be executed only once).
     * @param {Function} listener Signal handler function.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
     * @return {SignalBinding} An Object representing the binding between the Signal and listener.
     */
      addOnce: function(listener, listenerContext, priority) {
        validateListener(listener, "addOnce");
        return this._registerListener(listener, !0, listenerContext, priority);
      },
      /**
     * Remove a single listener from the dispatch queue.
     * @param {Function} listener Handler function that should be removed.
     * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
     * @return {Function} Listener handler function.
     */
      remove: function(listener, context) {
        validateListener(listener, "remove");
        var i = this._indexOfListener(listener, context);
        if (-1 !== i) {
          this._bindings[i]._destroy();
          //no reason to a SignalBinding exist if it isn't attached to a signal
          this._bindings.splice(i, 1);
        }
        return listener;
      },
      /**
     * Remove all listeners from the Signal.
     */
      removeAll: function() {
        for (var n = this._bindings.length; n--; ) this._bindings[n]._destroy();
        this._bindings.length = 0;
      },
      /**
     * @return {number} Number of listeners attached to the Signal.
     */
      getNumListeners: function() {
        return this._bindings.length;
      },
      /**
     * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
     * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
     * @see Signal.prototype.disable
     */
      halt: function() {
        this._shouldPropagate = !1;
      },
      /**
     * Dispatch/Broadcast Signal to all listeners added to the queue.
     * @param {...*} [params] Parameters that should be passed to each handler.
     */
      dispatch: function() {
        if (this.active) {
          var bindings, paramsArr = Array.prototype.slice.call(arguments), n = this._bindings.length;
          this.memorize && (this._prevParams = paramsArr);
          if (n) {
            bindings = this._bindings.slice();
            //clone array in case add/remove items during dispatch
            this._shouldPropagate = !0;
            //in case `halt` was called before dispatch or during the previous dispatch.
            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do n--; while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== !1);
          }
        }
      },
      /**
     * Forget memorized arguments.
     * @see Signal.memorize
     */
      forget: function() {
        this._prevParams = null;
      },
      /**
     * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
     * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
     */
      dispose: function() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
      },
      /**
     * @return {string} String representation of the object.
     */
      toString: function() {
        return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]";
      }
    };
    // --------- 
    // creates a global "addWheelListener" method
    // example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
    !function(window, document) {
      function _addWheelListener(elem, eventName, callback, useCapture) {
        elem[_addEventListener](prefix + eventName, "wheel" == support ? callback : function(originalEvent) {
          !originalEvent && (originalEvent = window.event);
          // create a normalized event object
          var event = {
            // keep a ref to the original event object
            originalEvent: originalEvent,
            target: originalEvent.target || originalEvent.srcElement,
            type: "wheel",
            deltaMode: "MozMousePixelScroll" == originalEvent.type ? 0 : 1,
            deltaX: 0,
            deltaZ: 0,
            preventDefault: function() {
              originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = !1;
            }
          };
          // calculate deltaY (and deltaX) according to the event
          if ("mousewheel" == support) {
            event.deltaY = -1 / 40 * originalEvent.wheelDelta;
            // Webkit also support wheelDeltaX
            originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
          } else event.deltaY = originalEvent.detail;
          // it's time to fire the callback
          return callback(event);
        }, useCapture || !1);
      }
      var _addEventListener, support, prefix = "";
      // detect event model
      if (window.addEventListener) _addEventListener = "addEventListener"; else {
        _addEventListener = "attachEvent";
        prefix = "on";
      }
      // detect available wheel event
      support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
      document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
      "DOMMouseScroll";
      // let's assume that remaining browsers are older Firefox
      window.addWheelListener = function(elem, callback, useCapture) {
        _addWheelListener(elem, support, callback, useCapture);
        // handle MozMousePixelScroll in older Firefox
        "DOMMouseScroll" == support && _addWheelListener(elem, "MozMousePixelScroll", callback, useCapture);
      };
    }(window, document);
    // --------- 
    var BaseComponent, Button, CanvasBasedComponent, CanvasManager, CanvasTextMetricProcessor, Component, ComponentRenderer, ComponentRendererFactory, CoreFunctions, DataProvider, DateUtil, Detect, DomainModel, Drawing, Ease, Icon, Label, ListElement, ListView, ListViewport, LocaleManager, MenuBar, Panel, Period, PixelRatioManager, Point, PoolBasedComponent, RolloverTweener, Scrollbar, Theme, ThemeManager, Ticker, TimeViewport, Tween, camelToDash, getTime, gs, ns, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    };
    CoreFunctions = {};
    !function(CF) {
      var browserPrefixes, getterFnFor, now, setterFnFor;
      CF.formatDate = function(dateToFormat, formatFunctions) {
        var formatFunction, result, _i, _len;
        result = "";
        for (_i = 0, _len = formatFunctions.length; _len > _i; _i++) {
          formatFunction = formatFunctions[_i];
          result += formatFunction(dateToFormat);
        }
        return result;
      };
      CF.elmt = function(tagName, idPrefix, clazz) {
        var e;
        e = document.createElement(tagName);
        idPrefix && (e.id = _.uniqueId(idPrefix + "-"));
        clazz && (e.className = clazz);
        return e;
      };
      CF.text = function(el, txt) {
        typeof el.textContent !== undefinedstr ? el.textContent = txt : el.innerText = txt;
      };
      CF.prependChild = function(parent, child) {
        parent.insertBefore(child, parent.firstChild);
      };
      CF.appendChild = function(parent, child) {
        parent.appendChild(child);
      };
      CF.removeChild = function(parent, child) {
        parent.removeChild(child);
      };
      CF.getElementById = function(id) {
        return document.getElementById(id);
      };
      CF.elmtWithCustomId = function(tagName, customId, clazz) {
        var e;
        e = document.createElement(tagName);
        e.id = customId;
        clazz && (e.className = clazz);
        return e;
      };
      CF.offset = function(el) {
        var box, doc, docElem, win;
        box = {
          top: 0,
          left: 0
        };
        doc = el && el.ownerDocument;
        docElem = doc.documentElement;
        el.getBoundingClientRect && (box = el.getBoundingClientRect());
        win = window;
        return {
          top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
          left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
      };
      setterFnFor = function(obj) {
        return function(propName, setterFunction) {
          Object.defineProperty(obj, propName, {
            set: setterFunction,
            configurable: !0,
            enumerable: !0
          });
        };
      };
      getterFnFor = function(obj) {
        return function(propName, getterFunction) {
          Object.defineProperty(obj, propName, {
            get: getterFunction,
            configurable: !0,
            enumerable: !0
          });
        };
      };
      CF.gs = function(obj) {
        var proto;
        proto = obj.prototype;
        return {
          getter: getterFnFor(proto),
          setter: setterFnFor(proto)
        };
      };
      CF.mixinProto = function(object, source) {
        CF.mixin(object.prototype, source.prototype);
      };
      CF.mixin = function(object, source) {
        Object.keys(source).forEach(function(property) {
          return Object.defineProperty(object, property, Object.getOwnPropertyDescriptor(source, property));
        });
      };
      now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
      CF.getTime = function() {
        return now && now.call(performance) || new Date().getTime();
      };
      CF.stringHashCode = function(s) {
        var c, hash, i, strlen;
        hash = 0;
        strlen = s.length;
        if (0 === strlen) return hash;
        i = 0;
        for (;strlen > i; ) {
          c = s.charCodeAt(i);
          hash = (hash << 5) - hash + c;
          hash &= hash;
          i++;
        }
        return hash;
      };
      CF.hexToRgb = function(hex) {
        var bigint;
        bigint = parseInt(hex.substring(1), 16);
        return {
          r: bigint >> 16 & 255,
          g: bigint >> 8 & 255,
          b: 255 & bigint
        };
      };
      CF.hexToRgbStr = function(hex) {
        var rgb;
        rgb = CF.hexToRgb(hex);
        return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
      };
      CF.hexToRgbaStr = function(hex, alpha) {
        var rgb;
        rgb = CF.hexToRgb(hex);
        return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + alpha + ")";
      };
      browserPrefixes = [ "Moz", "Webkit", "Khtml", "ms", "O" ];
      CF.applyNonStdStyle = function(style, styleKey, styleValue) {
        var styleKeyUpperFirst, styleKeys;
        styleKeyUpperFirst = _.capitalize(styleKey);
        styleKeys = _.map(browserPrefixes, function(p) {
          return p + styleKeyUpperFirst;
        });
        _.forEach(styleKeys, function(sk) {
          return style[sk] = styleValue;
        });
        style[styleKey] = styleValue;
      };
      CF.applyUserSelectNoneStyle = function(style) {
        CF.applyNonStdStyle(style, "userSelect", "none");
      };
      CF.setUnselectable = function(elmt) {
        elmt.setAttribute("unselectable", "on");
        CF.applyUserSelectNoneStyle(elmt.style);
      };
      CF.camelToDash = function(str) {
        return str.replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase().substr(1);
      };
      CF.simpleParseDate = function(input) {
        var parts;
        parts = input.split("-");
        return new Date(parts[0], parts[1] - 1, parts[2]);
      };
      CF.simpleDateFormat = function(date) {
        var ap;
        ap = CF.applyPadding;
        return "" + date.getFullYear() + "-" + ap(date.getMonth() + 1, 2) + "-" + ap(date.getDate(), 2);
      };
      CF.applyPadding = function(value, key) {
        var n, result, vLen;
        result = "";
        vLen = value.toString().length;
        if (key > vLen) {
          n = key - vLen + 1;
          for (;n -= 1; ) result += "0";
        }
        return result += value;
      };
      CF.isAttachedToDocument = function(element) {
        var doc;
        doc = window.document;
        if ("undefined" != typeof doc.compareDocumentPosition) return doc === element || Boolean(16 & doc.compareDocumentPosition(element));
        for (;element && doc !== element; ) element = element.parentNode;
        return element === parent;
      };
      CF.acos = function() {
        var acosTable, i, len;
        i = 0;
        len = 100;
        acosTable = [];
        for (;len >= i; ) {
          acosTable[i] = Math.acos(i / 100);
          i++;
        }
        return function(percent) {
          return acosTable[Math.round(100 * percent)];
        };
      }();
      CF.sign = function(nb) {
        return nb > 0 ? 1 : 0 > nb ? -1 : nb;
      };
      CF.cssReset = function(elmt) {
        var s;
        s = elmt.style;
        s.border = s.margin = s.padding = "0px";
        s.boxSizing = "border-box";
        return s;
      };
    }(CoreFunctions);
    gs = CoreFunctions.gs, camelToDash = CoreFunctions.camelToDash, getTime = CoreFunctions.getTime;
    Detect = {};
    !function(D) {
      D.touchIsSupported = function() {
        return !!("ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof DocumentTouch);
      }();
      D.canvasIsSupported = function() {
        var elem;
        elem = document.createElement("canvas");
        return !(!elem.getContext || !elem.getContext("2d"));
      }();
      D.canvasTextIsSupported = function() {
        return !(!D.canvasIsSupported || !_.isFunction(document.createElement("canvas").getContext("2d").fillText));
      }();
    }(Detect);
    DateUtil = {};
    !function(DU) {
      DU.now = function() {
        return new Date();
      };
      DU.datePlusYears = function(date, years) {
        var result;
        result = new Date();
        result.setTime(date.getTime());
        result.setFullYear(result.getFullYear() + years);
        return result;
      };
      DU.nowPlusYears = function(years) {
        return DU.datePlusYears(DU.now(), years);
      };
      DU.nowPlusOneYear = function() {
        return DU.nowPlusYears(1);
      };
      DU.dateCompare = function(d1, d2) {
        var diff;
        diff = d1.getTime() - d2.getTime();
        return 0 === diff ? 0 : 0 > diff ? -1 : 1;
      };
      DU.millisecondsToPixels = function(milliseconds, millisByPixel) {
        return Math.round(milliseconds / millisByPixel);
      };
      DU.startOfNextDay = function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
      };
    }(DateUtil);
    Period = function() {
      function Period(start, end) {
        var self;
        self = this;
        self._durationInMillis = null;
        self.start = new Date(start.getTime());
        self.end = new Date(end.getTime());
        self._valid = null;
      }
      var P, datePlusYears, now, nowPlusYears;
      P = Period;
      now = DateUtil.now, nowPlusYears = DateUtil.nowPlusYears, datePlusYears = DateUtil.datePlusYears;
      P.fromNowPlusYears = function(years) {
        return new P(now(), nowPlusYears(years));
      };
      P.fromDatePlusYears = function(date, years) {
        return new P(date, datePlusYears(date, years));
      };
      Period.prototype.durationInMillis = function() {
        var self;
        self = this;
        self._durationInMillis || (self._durationInMillis = self.end.getTime() - self.start.getTime());
        return self._durationInMillis;
      };
      Period.prototype.valid = function() {
        var self;
        self = this;
        null === self._valid && (self._valid = self.start.getTime() < self.end.getTime());
        return self._valid;
      };
      Period.prototype.clone = function() {
        var self;
        self = this;
        return new P(new Date(self.start.getTime()), new Date(self.end.getTime()));
      };
      Period.prototype.equals = function(period) {
        var self;
        self = this;
        return self.start.getTime() === period.start.getTime() && self.end.getTime() === period.end.getTime();
      };
      return Period;
    }();
    LocaleManager = function() {
      function LocaleManager() {
        var self;
        self = this;
        self._locale = null;
        self.localeChanged = new Signal();
      }
      return LocaleManager;
    }();
    CanvasTextMetricProcessor = function() {
      function CanvasTextMetricProcessor(parent) {
        var canvasId, div, self, spanId, spanStyle;
        if (Detect.canvasIsSupported && Detect.canvasTextIsSupported) {
          self = this;
          self.parent = parent;
          canvasId = CTMP.TEXT_METRIC_CANVAS_ID;
          self.font = null;
          self.canvas = document.getElementById(canvasId) || elmtWithCustomId("canvas", canvasId);
          _configureCanvasStyle(self.canvas.style);
          self.ctx = self.canvas.getContext("2d");
          appendChild(self.parent, self.canvas);
          spanId = CTMP.TEXT_METRIC_SPAN_ID;
          self.span = document.getElementById(spanId);
          if (!self.span) {
            self.span = elmtWithCustomId("span", spanId);
            spanStyle = self.span.style;
            spanStyle.lineHeight = "0";
            spanStyle.color = "#FFFFFF";
            self.block = elmt("div");
            _configureBlockStyle(self.block.style);
            div = elmt("div");
            _configureDivStyle(div.style);
            appendChild(div, self.span);
            appendChild(div, self.block);
            appendChild(self.parent, div);
          }
        }
      }
      var BASELINE, BOTTOM, CTMP, HEIGHT_COMPUTATION_REF, appendChild, elmt, elmtWithCustomId, offset, text, _computeHeights, _computeWidth, _configureBlockStyle, _configureCanvasStyle, _configureDivStyle;
      CTMP = CanvasTextMetricProcessor;
      elmtWithCustomId = CoreFunctions.elmtWithCustomId, elmt = CoreFunctions.elmt, text = CoreFunctions.text, 
      appendChild = CoreFunctions.appendChild, offset = CoreFunctions.offset;
      _computeWidth = function(ctx, font, txt) {
        var width;
        ctx.font = font;
        width = ctx.measureText(txt).width;
        return width;
      };
      HEIGHT_COMPUTATION_REF = "H█g";
      BASELINE = "baseline";
      BOTTOM = "bottom";
      _computeHeights = function(span, block, font, txt) {
        var blockStyle, result, t;
        span.style.font = font;
        t = txt || HEIGHT_COMPUTATION_REF;
        text(span, t);
        result = {};
        blockStyle = block.style;
        blockStyle.verticalAlign = BASELINE;
        result.ascent = offset(block).top - offset(span).top;
        blockStyle.verticalAlign = BOTTOM;
        result.height = offset(block).top - offset(span).top;
        result.descent = result.height - result.ascent;
        return result;
      };
      _configureCanvasStyle = function(canvasStyle) {
        canvasStyle.position = "absolute";
        canvasStyle.opacity = "0";
        canvasStyle.right = "10px";
        canvasStyle.bottom = "10px";
        canvasStyle.pointerEvents = "none";
        canvasStyle.zIndex = -1e3;
      };
      _configureBlockStyle = function(blockStyle) {
        blockStyle.display = "inline-block";
        blockStyle.width = "1px";
        blockStyle.height = "0px";
        blockStyle.border = "0";
        blockStyle.padding = "0";
        blockStyle.pointerEvents = "none";
        blockStyle.zIndex = -1001;
      };
      _configureDivStyle = function(divStyle) {
        divStyle.whiteSpace = "nowrap";
        divStyle.opacity = "0";
        divStyle.filter = "alpha(opacity=0)";
        divStyle.bottom = "10px";
        divStyle.right = "10px";
        divStyle.position = "absolute";
        divStyle.border = "0";
        divStyle.padding = "0";
        divStyle.pointerEvents = "none";
      };
      CTMP.TEXT_METRIC_CANVAS_ID = "canvas-tmp-canvas";
      CTMP.TEXT_METRIC_SPAN_ID = "canvas-tmp-span";
      CanvasTextMetricProcessor.prototype.width = function(txt) {
        var self;
        self = this;
        return _computeWidth(self.ctx, self.font, txt);
      };
      CanvasTextMetricProcessor.prototype.heights = function(txt) {
        var self;
        self = this;
        return _computeHeights(self.span, self.block, self.font, txt);
      };
      return CanvasTextMetricProcessor;
    }();
    CanvasTextMetricProcessor.INSTANCE = new CanvasTextMetricProcessor(document.body);
    Point = function() {
      function Point(x, y) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
      }
      Point.prototype.copy = function(p) {
        var self;
        self = this;
        self.constructor(p.x, p.y);
        return self;
      };
      Point.prototype.clone = function() {
        var self;
        self = this;
        return new Point(self.x, self.y);
      };
      return Point;
    }();
    /*
* Ticker
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
 */
    /**
 * @module CreateJS
 */
    Ticker = function() {
      function Ticker() {
        throw "Ticker cannot be instantiated.";
      }
      /**
   * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
   * event to be notified when a set time interval has elapsed.
   *
   * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
   * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
   * can not be instantiated.
   *
   * <h4>Example</h4>
   *
   *      createjs.Ticker.addEventListener("tick", handleTick);
   *      function handleTick(event) {
   *          // Actions carried out each tick (aka frame)
   *          if (!event.paused) {
   *              // Actions carried out when the Ticker is not paused.
   *          }
   *      }
   *
   * @class Ticker
   * @uses EventDispatcher
   * @static
   *
   */
      var now;
      Ticker.ticked = new Signal();
      /**
   * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
   * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
   * dispatches the tick when the time is within a certain threshold.
   *
   * This mode has a higher variance for time between frames than TIMEOUT, but does not require that content be time
   * based as with RAF while gaining the benefits of that API (screen synch, background throttling).
   *
   * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
   * framerates of 10, 12, 15, 20, and 30 work well.
   *
   * Falls back on TIMEOUT if the requestAnimationFrame API is not supported.
   * @property RAF_SYNCHED
   * @static
   * @type {String}
   * @default "synched"
   * @readonly
   *
   */
      Ticker.RAF_SYNCHED = "synched";
      /**
   * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
   * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
   * You can leverage {{#crossLink "Ticker/getTime"}}{{/crossLink}} and the tick event object's "delta" properties
   * to make this easier.
   *
   * Falls back on TIMEOUT if the requestAnimationFrame API is not supported.
   * @property RAF
   * @static
   * @type {String}
   * @default "raf"
   * @readonly
   *
   */
      Ticker.RAF = "raf";
      /**
   * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
   * provide the benefits of requestAnimationFrame (screen synch, background throttling).
   * @property TIMEOUT
   * @static
   * @type {String}
   * @default "timer"
   * @readonly
   *
   */
      Ticker.TIMEOUT = "timeout";
      /**
   * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused using
   * {{#crossLink "Ticker/setPaused"}}{{/crossLink}}.
   *
   * <h4>Example</h4>
   *
   *      createjs.Ticker.addEventListener("tick", handleTick);
   *      function handleTick(event) {
   *          console.log("Paused:", event.paused, event.delta);
   *      }
   *
   * @event tick
   * @param {Object} target The object that dispatched the event.
   * @param {String} type The event type.
   * @param {Boolean} paused Indicates whether the ticker is currently paused.
   * @param {Number} delta The time elapsed in ms since the last tick.
   * @param {Number} time The total time in ms since Ticker was initialized.
   * @param {Number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
   * 	you could determine the amount of time that the Ticker has been paused since initialization with time-runTime.
   * @since 0.6.0
   */
      /**
   * Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}, and will be removed in a future version. If true, timingMode will
   * use {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} by default.
   * @deprecated Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}.
   * @property useRAF
   * @static
   * @type {Boolean}
   * @default false
   *
   */
      Ticker.useRAF = !1;
      /**
   * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use. See
   * {{#crossLink "Ticker/TIMEOUT"}}{{/crossLink}}, {{#crossLink "Ticker/RAF"}}{{/crossLink}}, and
   * {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} for mode details.
   * @property timingMode
   * @static
   * @type {String}
   * @default Ticker.TIMEOUT
   *
   */
      Ticker.timingMode = null;
      /**
   * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
   * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
   * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
   * (ex. maxDelta=50 when running at 40fps).
   *
   * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
   * when using both delta and other values.
   *
   * If 0, there is no maximum.
   * @property maxDelta
   * @static
   * @type {number}
   * @default 0
   */
      Ticker.maxDelta = 0;
      /**
   * When the ticker is paused, all listeners will still receive a tick event, but the <code>paused</code> property of the event will be false.
   * Also, while paused the `runTime` will not increase. See {{#crossLink "Ticker/tick:event"}}{{/crossLink}},
   * {{#crossLink "Ticker/getTime"}}{{/crossLink}}, and {{#crossLink "Ticker/getEventTime"}}{{/crossLink}} for more info.
   *
   * <h4>Example</h4>
   *
   *      createjs.Ticker.addEventListener("tick", handleTick);
   *      createjs.Ticker.paused = true;
   *      function handleTick(event) {
   *          console.log(event.paused,
   *          	createjs.Ticker.getTime(false),
   *          	createjs.Ticker.getTime(true));
   *      }
   *
   * @property paused
   * @static
   * @type {Boolean}
   * @default false
   *
   */
      Ticker.paused = !1;
      Ticker.addTickListener = function() {
        !Ticker._inited && Ticker.init();
        return Ticker.ticked.add.apply(Ticker.ticked, arguments);
      };
      /**
   * @property _inited
   * @static
   * @type {Boolean}
   * @protected
   *
   */
      Ticker._inited = !1;
      /**
   * @property _startTime
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._startTime = 0;
      /**
   * @property _pausedTime
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._pausedTime = 0;
      /**
   * The number of ticks that have passed
   * @property _ticks
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._ticks = 0;
      /**
   * The number of ticks that have passed while Ticker has been paused
   * @property _pausedTicks
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._pausedTicks = 0;
      /**
   * @property _interval
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._interval = 50;
      /**
   * @property _lastTime
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._lastTime = 0;
      /**
   * @property _times
   * @static
   * @type {Array}
   * @protected
   *
   */
      Ticker._times = null;
      /**
   * @property _tickTimes
   * @static
   * @type {Array}
   * @protected
   *
   */
      Ticker._tickTimes = null;
      /**
   * Stores the timeout or requestAnimationFrame id.
   * @property _timerId
   * @static
   * @type {Number}
   * @protected
   *
   */
      Ticker._timerId = null;
      /**
   * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
   * if that property changed and a tick hasn't fired.
   * @property _raf
   * @static
   * @type {Boolean}
   * @protected
   *
   */
      Ticker._raf = !0;
      /**
   * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
   * @method setInterval
   * @static
   * @param {Number} interval
   * @deprecated
   *
   */
      Ticker.setInterval = function(interval) {
        Ticker._interval = interval;
        Ticker._inited && Ticker._setupTick();
      };
      /**
   * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
   * @method getInterval
   * @static
   * @return {Number}
   * @deprecated
   *
   */
      Ticker.getInterval = function() {
        return Ticker._interval;
      };
      /**
   * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
   * @method setFPS
   * @static
   * @param {Number} value
   * @deprecated
   *
   */
      Ticker.setFPS = function(value) {
        Ticker.setInterval(1e3 / value);
      };
      /**
   * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
   * @method getFPS
   * @static
   * @return {Number}
   * @deprecated
   *
   */
      Ticker.getFPS = function() {
        return 1e3 / Ticker._interval;
      };
      /**
   * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
   * Note that actual time between ticks may be more than specified depending on CPU load.
   * This property is ignored if the ticker is using the `RAF` timing mode.
   * @property interval
   * @static
   * @type {Number}
   *
   */
      /**
   * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
   * `framerate == 1000/interval`.
   * @property framerate
   * @static
   * @type {Number}
   *
   */
      try {
        Object.defineProperties(Ticker, {
          interval: {
            get: Ticker.getInterval,
            set: Ticker.setInterval
          },
          framerate: {
            get: Ticker.getFPS,
            set: Ticker.setFPS
          }
        });
      } catch (_error) {}
      /**
   * Starts the tick. This is called automatically when the first listener is added.
   * @method init
   * @static
   *
   */
      Ticker.init = function() {
        if (!Ticker._inited) {
          Ticker._inited = !0;
          Ticker._times = [];
          Ticker._tickTimes = [];
          Ticker._startTime = Ticker._getTime();
          Ticker._times.push(Ticker._lastTime = 0);
          Ticker.interval = Ticker._interval;
        }
      };
      /**
   * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
   * @method reset
   * @static
   *
   */
      Ticker.reset = function() {
        var f;
        if (Ticker._raf) {
          f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
          f && f(Ticker._timerId);
        } else clearTimeout(Ticker._timerId);
        Ticker.ticked.removeAll();
        Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
        Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
        Ticker._inited = !1;
      };
      /**
   * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
   * because it only measures the time spent within the tick execution stack.
   *
   * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between
   * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that
   * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
   *
   * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
   * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
   * other than the tick is using ~80ms (another script, DOM rendering, etc).
   * @method getMeasuredTickTime
   * @static
   * @param {Number} [ticks] The number of previous ticks over which to measure the average time spent in a tick.
   * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
   * @return {Number} The average time spent in a tick in milliseconds.
   *
   */
      Ticker.getMeasuredTickTime = function(ticks) {
        var i, times, ttl;
        ttl = 0;
        times = Ticker._tickTimes;
        if (!times || times.length < 1) return -1;
        ticks = Math.min(times.length, ticks || 0 | Ticker.getFPS());
        i = 0;
        for (;ticks > i; ) {
          ttl += times[i];
          i++;
        }
        return ttl / ticks;
      };
      /**
   * Returns the actual frames / ticks per second.
   * @method getMeasuredFPS
   * @static
   * @param {Number} [ticks] The number of previous ticks over which to measure the actual frames / ticks per second.
   * Defaults to the number of ticks per second.
   * @return {Number} The actual frames / ticks per second. Depending on performance, this may differ
   * from the target frames per second.
   *
   */
      Ticker.getMeasuredFPS = function(ticks) {
        var times;
        times = Ticker._times;
        if (!times || times.length < 2) return -1;
        ticks = Math.min(times.length - 1, ticks || 0 | Ticker.getFPS());
        return 1e3 / ((times[0] - times[ticks]) / ticks);
      };
      /**
   * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
   * @method setPaused
   * @static
   * @param {Boolean} value
   * @deprecated
   *
   */
      Ticker.setPaused = function(value) {
        Ticker.paused = value;
      };
      /**
   * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
   * @method getPaused
   * @static
   * @return {Boolean}
   * @deprecated
   *
   */
      Ticker.getPaused = function() {
        return Ticker.paused;
      };
      /**
   * Returns the number of milliseconds that have elapsed since Ticker was initialized via {{#crossLink "Ticker/init"}}.
   * Returns -1 if Ticker has not been initialized. For example, you could use
   * this in a time synchronized animation to determine the exact amount of time that has elapsed.
   * @method getTime
   * @static
   * @param {Boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
   * If false, the value returned will be total time elapsed since the first tick event listener was added.
   * @return {Number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
   *
   */
      Ticker.getTime = function(runTime) {
        return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
      };
      /**
   * Similar to getTime(), but returns the time on the most recent tick event object.
   * @method getEventTime
   * @static
   * @param runTime {Boolean} [runTime=false] If true, the runTime property will be returned instead of time.
   * @returns {number} The time or runTime property from the most recent tick event or -1.
   */
      Ticker.getEventTime = function(runTime) {
        return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
      };
      /**
   * Returns the number of ticks that have been broadcast by Ticker.
   * @method getTicks
   * @static
   * @param {Boolean} pauseable Indicates whether to include ticks that would have been broadcast
   * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
   * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
   * value. The default value is false.
   * @return {Number} of ticks that have been broadcast.
   *
   */
      Ticker.getTicks = function(pauseable) {
        return Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
      };
      /**
   * @method _handleSynch
   * @static
   * @protected
   *
   */
      Ticker._handleSynch = function() {
        Ticker._timerId = null;
        Ticker._setupTick();
        Ticker._getTime() - Ticker._lastTime >= .97 * (Ticker._interval - 1) && Ticker._tick();
      };
      /**
   * @method _handleRAF
   * @static
   * @protected
   *
   */
      Ticker._handleRAF = function() {
        Ticker._timerId = null;
        Ticker._setupTick();
        Ticker._tick();
      };
      /**
   * @method _handleTimeout
   * @static
   * @protected
   *
   */
      Ticker._handleTimeout = function() {
        Ticker._timerId = null;
        Ticker._setupTick();
        Ticker._tick();
      };
      /**
   * @method _setupTick
   * @static
   * @protected
   *
   */
      Ticker._setupTick = function() {
        var f, mode;
        if (!Ticker._timerId) {
          mode = Ticker.timingMode || Ticker.useRAF && Ticker.RAF_SYNCHED;
          if (mode === Ticker.RAF_SYNCHED || mode === Ticker.RAF) {
            f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            if (f) {
              Ticker._timerId = f(mode === Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
              Ticker._raf = !0;
              return;
            }
          }
          Ticker._raf = !1;
          Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
        }
      };
      /**
   * @method _tick
   * @static
   * @protected
   *
   */
      Ticker._tick = function() {
        var elapsedTime, event, maxDelta, paused, time;
        paused = Ticker.paused;
        time = Ticker._getTime();
        elapsedTime = time - Ticker._lastTime;
        Ticker._lastTime = time;
        Ticker._ticks++;
        if (paused) {
          Ticker._pausedTicks++;
          Ticker._pausedTime += elapsedTime;
        }
        if (Ticker.ticked.getNumListeners()) {
          event = {};
          maxDelta = Ticker.maxDelta;
          event.delta = maxDelta && elapsedTime > maxDelta ? maxDelta : elapsedTime;
          event.paused = paused;
          event.time = time;
          event.runTime = time - Ticker._pausedTime;
          Ticker.ticked.dispatch(event);
        }
        Ticker._tickTimes.unshift(Ticker._getTime() - time);
        for (;Ticker._tickTimes.length > 100; ) Ticker._tickTimes.pop();
        Ticker._times.unshift(time);
        for (;Ticker._times.length > 100; ) Ticker._times.pop();
      };
      /**
   * @method _getTime
   * @static
   * @protected
   *
   */
      now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
      Ticker._getTime = function() {
        return (now && now.call(performance) || new Date().getTime()) - Ticker._startTime;
      };
      return Ticker;
    }();
    /*
* Ease
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
 */
    /**
 * @module TweenJS
 */
    /**
 * The Ease class provides a collection of easing functions for use with TweenJS. It does not use the standard 4 param
 * easing signature. Instead it uses a single param which indicates the current linear ratio (0 to 1) of the tween.
 *
 * Most methods on Ease can be passed directly as easing functions:
 *
 *      Tween.get(target).to({x:100}, 500, Ease.linear);
 *
 * However, methods beginning with "get" will return an easing function based on parameter values:
 *
 *      Tween.get(target).to({y:200}, 500, Ease.getPowIn(2.2));
 *
 * Please see the <a href="http://www.createjs.com/Demos/TweenJS/Tween_SparkTable">spark table demo</a> for an
 * overview of the different ease types on <a href="http://tweenjs.com">TweenJS.com</a>.
 *
 * <em>Equations derived from work by Robert Penner.</em>
 * @class Ease
 * @static
 *
 */
    Ease = function() {
      throw "Ease cannot be instantiated.";
    };
    /**
 * @method linear
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.linear = function(t) {
      return t;
    };
    /**
 * Identical to linear.
 * @method none
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.none = Ease.linear;
    /**
 * Mimics the simple -100 to 100 easing in Flash Pro.
 * @method get
 * @param {Number} amount A value from -1 (ease in) to 1 (ease out) indicating the strength and direction of the ease.
 * @static
 * @return {Function}
 *
 */
    Ease.get = function(amount) {
      -1 > amount && (amount = -1);
      amount > 1 && (amount = 1);
      return function(t) {
        return 0 === amount ? t : 0 > amount ? t * (t * -amount + 1 + amount) : t * ((2 - t) * amount + 1 - amount);
      };
    };
    /**
 * Configurable exponential ease.
 * @method getPowIn
 * @param {Number} pow The exponent to use (ex. 3 would return a cubic ease).
 * @static
 * @return {Function}
 *
 */
    Ease.getPowIn = function(pow) {
      return function(t) {
        return Math.pow(t, pow);
      };
    };
    /**
 * Configurable exponential ease.
 * @method getPowOut
 * @param {Number} pow The exponent to use (ex. 3 would return a cubic ease).
 * @static
 * @return {Function}
 *
 */
    Ease.getPowOut = function(pow) {
      return function(t) {
        return 1 - Math.pow(1 - t, pow);
      };
    };
    /**
 * Configurable exponential ease.
 * @method getPowInOut
 * @param {Number} pow The exponent to use (ex. 3 would return a cubic ease).
 * @static
 * @return {Function}
 *
 */
    Ease.getPowInOut = function(pow) {
      return function(t) {
        return (t *= 2) < 1 ? .5 * Math.pow(t, pow) : 1 - .5 * Math.abs(Math.pow(2 - t, pow));
      };
    };
    /**
 * @method quadIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quadIn = Ease.getPowIn(2);
    /**
 * @method quadOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quadOut = Ease.getPowOut(2);
    /**
 * @method quadInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quadInOut = Ease.getPowInOut(2);
    /**
 * @method cubicIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.cubicIn = Ease.getPowIn(3);
    /**
 * @method cubicOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.cubicOut = Ease.getPowOut(3);
    /**
 * @method cubicInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.cubicInOut = Ease.getPowInOut(3);
    /**
 * @method quartIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quartIn = Ease.getPowIn(4);
    /**
 * @method quartOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quartOut = Ease.getPowOut(4);
    /**
 * @method quartInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quartInOut = Ease.getPowInOut(4);
    /**
 * @method quintIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quintIn = Ease.getPowIn(5);
    /**
 * @method quintOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quintOut = Ease.getPowOut(5);
    /**
 * @method quintInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.quintInOut = Ease.getPowInOut(5);
    /**
 * @method sineIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.sineIn = function(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    };
    /**
 * @method sineOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.sineOut = function(t) {
      return Math.sin(t * Math.PI / 2);
    };
    /**
 * @method sineInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.sineInOut = function(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    };
    /**
 * Configurable "back in" ease.
 * @method getBackIn
 * @param {Number} amount The strength of the ease.
 * @static
 * @return {Function}
 *
 */
    Ease.getBackIn = function(amount) {
      return function(t) {
        return t * t * ((amount + 1) * t - amount);
      };
    };
    /**
 * @method backIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.backIn = Ease.getBackIn(1.7);
    /**
 * Configurable "back out" ease.
 * @method getBackOut
 * @param {Number} amount The strength of the ease.
 * @static
 * @return {Function}
 *
 */
    Ease.getBackOut = function(amount) {
      return function(t) {
        return --t * t * ((amount + 1) * t + amount) + 1;
      };
    };
    /**
 * @method backOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.backOut = Ease.getBackOut(1.7);
    /**
 * Configurable "back in out" ease.
 * @method getBackInOut
 * @param {Number} amount The strength of the ease.
 * @static
 * @return {Function}
 *
 */
    Ease.getBackInOut = function(amount) {
      amount *= 1.525;
      return function(t) {
        return (t *= 2) < 1 ? .5 * t * t * ((amount + 1) * t - amount) : .5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
      };
    };
    /**
 * @method backInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.backInOut = Ease.getBackInOut(1.7);
    /**
 * @method circIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.circIn = function(t) {
      return -(Math.sqrt(1 - t * t) - 1);
    };
    /**
 * @method circOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.circOut = function(t) {
      return Math.sqrt(1 - --t * t);
    };
    /**
 * @method circInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.circInOut = function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    };
    /**
 * @method bounceIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.bounceIn = function(t) {
      return 1 - Ease.bounceOut(1 - t);
    };
    /**
 * @method bounceOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.bounceOut = function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    };
    /**
 * @method bounceInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.bounceInOut = function(t) {
      return .5 > t ? .5 * Ease.bounceIn(2 * t) : .5 * Ease.bounceOut(2 * t - 1) + .5;
    };
    /**
 * Configurable elastic ease.
 * @method getElasticIn
 * @param {Number} amplitude
 * @param {Number} period
 * @static
 * @return {Function}
 *
 */
    Ease.getElasticIn = function(amplitude, period) {
      var pi2;
      pi2 = 2 * Math.PI;
      return function(t) {
        var s;
        if (0 === t || 1 === t) return t;
        s = period / pi2 * Math.asin(1 / amplitude);
        return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
      };
    };
    /**
 * @method elasticIn
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.elasticIn = Ease.getElasticIn(1, .3);
    /**
 * Configurable elastic ease.
 * @method getElasticOut
 * @param {Number} amplitude
 * @param {Number} period
 * @static
 * @return {Function}
 *
 */
    Ease.getElasticOut = function(amplitude, period) {
      var pi2;
      pi2 = 2 * Math.PI;
      return function(t) {
        var s;
        if (0 === t || 1 === t) return t;
        s = period / pi2 * Math.asin(1 / amplitude);
        return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
      };
    };
    /**
 * @method elasticOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.elasticOut = Ease.getElasticOut(1, .3);
    /**
 * Configurable elastic ease.
 * @method getElasticInOut
 * @param {Number} amplitude
 * @param {Number} period
 * @static
 * @return {Function}
 *
 */
    Ease.getElasticInOut = function(amplitude, period) {
      var pi2;
      pi2 = 2 * Math.PI;
      return function(t) {
        var s;
        s = period / pi2 * Math.asin(1 / amplitude);
        return (t *= 2) < 1 ? -.5 * amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) : amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * .5 + 1;
      };
    };
    /**
 * @method elasticInOut
 * @param {Number} t
 * @static
 * @return {Number}
 *
 */
    Ease.elasticInOut = Ease.getElasticInOut(1, .3 * 1.5);
    /*
* Tween
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
 */
    /**
 * The TweenJS Javascript library provides a simple but powerful tweening interface. It supports tweening of both
 * numeric object properties & CSS style properties, and allows you to chain tweens and actions together to create
 * complex sequences.
 *
 * <h4>Simple Tween</h4>
 * This tween will tween the target's alpha property from 0 to 1 for 1s then call the <code>handleComplete</code> function.
 *
 *	    target.alpha = 0;
 *	    Tween.get(target).to({alpha:1}, 1000).call(handleComplete);
 *	    function handleComplete() {
 *	    	//Tween complete
 *	    }
 *
 * <strong>Arguments and Scope</strong>
 * Tween also supports a `call()` with arguments and/or a scope. If no scope is passed, then the function is called
 * anonymously (normal JavaScript behaviour). The scope is useful for maintaining scope when doing object-oriented
 * style development.
 *
 *      Tween.get(target).to({alpha:0})
 *          .call(handleComplete, [argument1, argument2], this);
 *
 * <h4>Chainable Tween</h4>
 * This tween will wait 0.5s, tween the target's alpha property to 0 over 1s, set it's visible to false, then call the
 * <code>handleComplete</code> function.
 *
 *	    target.alpha = 1;
 *	    Tween.get(target).wait(500).to({alpha:0, visible:false}, 1000).call(handleComplete);
 *	    function handleComplete() {
 *	    	//Tween complete
 *	    }
 *
 * <h4>Browser Support</h4>
 * TweenJS will work in all browsers.
 *
 * @module TweenJS
 * @main TweenJS
 */
    Tween = function() {
      /**
   * A Tween instance tweens properties for a single target. Instance methods can be chained for easy construction and sequencing:
   *
   * <h4>Example</h4>
   *
   *      target.alpha = 1;
   *	    Tween.get(target)
   *	         .wait(500)
   *	         .to({alpha:0, visible:false}, 1000)
   *	         .call(handleComplete);
   *	    function handleComplete() {
   *	    	//Tween complete
   *	    }
   *
   * Multiple tweens can point to the same instance, however if they affect the same properties there could be unexpected
   * behaviour. To stop all tweens on an object, use {{#crossLink "Tween/removeTweens"}}{{/crossLink}} or pass `override:true`
   * in the props argument.
   *
   *      Tween.get(target, {override:true}).to({x:100});
   *
   * Subscribe to the {{#crossLink "Tween/change:event"}}{{/crossLink}} event to get notified when a property of the
   * target is changed.
   *
   *      tw = Tween.get(target, {override:true}).to({x:100})
         tw.changed.add(handleChange);
   *      function handleChange(event) {
   *          // The tween changed.
   *      }
   *
   * See the Tween {{#crossLink "Tween/get"}}{{/crossLink}} method for additional param documentation.
   * @class Tween
   * @param {Object} target The target object that will have its properties tweened.
   * @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`.
   * All properties default to false. Supported props are:<UL>
   *    <LI> loop: sets the loop property on this tween.</LI>
   *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
   *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on this tween.</LI>
   *    <LI> override: if true, `Tween.removeTweens(target)` will be called to remove any other tweens with the same target.
   *    <LI> paused: indicates whether to start the tween paused.</LI>
   *    <LI> position: indicates the initial position for this tween.</LI>
   *    <LI> onChange: specifies a listener for the "change" event.</LI>
   * </UL>
   * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual
   * plugins' documentation for details.
   * @extends EventDispatcher
   * @constructor
   */
      function Tween(target, props, pluginData) {
        var self;
        self = this;
        self.changed = new Signal();
        /**
     * Causes this tween to continue playing when a global pause is active. For example, if TweenJS is using {{#crossLink "Ticker"}}{{/crossLink}},
     * then setting this to true (the default) will cause this tween to be paused when <code>Ticker.setPaused(true)</code>
     * is called. See the Tween {{#crossLink "Tween/tick"}}{{/crossLink}} method for more info. Can be set via the props
     * parameter.
     * @property ignoreGlobalPause
     * @type Boolean
     * @default false
     */
        self.ignoreGlobalPause = !1;
        /**
     * If true, the tween will loop when it reaches the end. Can be set via the props param.
     * @property loop
     * @type {Boolean}
     * @default false
     */
        self.loop = !1;
        /**
     * Specifies the total duration of this tween in milliseconds (or ticks if useTicks is true).
     * This value is automatically updated as you modify the tween. Changing it directly could result in unexpected
     * behaviour.
     * @property duration
     * @type {Number}
     * @default 0
     * @readonly
     */
        self.duration = 0;
        /**
     * Allows you to specify data that will be used by installed plugins. Each plugin uses this differently, but in general
     * you specify data by setting it to a property of pluginData with the same name as the plugin class.
     * @example
     *	myTween.pluginData.PluginClassName = data;
     * <br/>
     * Also, most plugins support a property to enable or disable them. This is typically the plugin class name followed by "_enabled".<br/>
     * @example
     *	myTween.pluginData.PluginClassName_enabled = false;<br/>
     * <br/>
     * Some plugins also store instance data in this object, usually in a property named _PluginClassName.
     * See the documentation for individual plugins for more details.
     * @property pluginData
     * @type {Object}
     */
        self.pluginData = pluginData || {};
        /**
     * The target of this tween. This is the object on which the tweened properties will be changed. Changing
     * this property after the tween is created will not have any effect.
     * @property target
     * @type {Object}
     * @readonly
     */
        self.target = target;
        /**
     * The current normalized position of the tween. This will always be a value between 0 and duration.
     * Changing this property directly will have no effect.
     * @property position
     * @type {Object}
     * @readonly
     */
        self.position = null;
        /**
     * Indicates the tween's current position is within a passive wait.
     * @property passive
     * @type {Boolean}
     * @default false
     * @readonly
     *
     */
        self.passive = !1;
        /**
     * @property _paused
     * @type {Boolean}
     * @default false
     * @protected
     */
        self._paused = !1;
        /**
     * @property _curQueueProps
     * @type {Object}
     * @protected
     */
        self._curQueueProps = {};
        /**
     * @property _initQueueProps
     * @type {Object}
     * @protected
     */
        self._initQueueProps = {};
        /**
     * @property _steps
     * @type {Array}
     * @protected
     */
        self._steps = [];
        /**
     * @property _actions
     * @type {Array}
     * @protected
     */
        self._actions = [];
        /**
     * Raw position.
     * @property _prevPosition
     * @type {Number}
     * @default 0
     * @protected
     */
        self._prevPosition = 0;
        /**
     * The position within the current step.
     * @property _stepPosition
     * @type {Number}
     * @default 0
     * @protected
     */
        self._stepPosition = 0;
        /**
     * Normalized position.
     * @property _prevPos
     * @type {Number}
     * @default -1
     * @protected
     */
        self._prevPos = -1;
        /**
     * @property _target
     * @type {Object}
     * @protected
     */
        self._target = target;
        /**
     * @property _useTicks
     * @type {Boolean}
     * @default false
     * @protected
     */
        self._useTicks = !1;
        /**
     * @property _inited
     * @type {boolean}
     * @default false
     * @protected
     */
        self._inited = !1;
        if (props) {
          self._useTicks = props.useTicks;
          self.ignoreGlobalPause = props.ignoreGlobalPause;
          self.loop = props.loop;
          props.onChange && self.changed.add(props.onChange);
          props.override && Tween.removeTweens(target);
        }
        props && props.paused ? self._paused = !0 : Tween._register(this, !0);
        props && null != props.position && self.setPosition(props.position, Tween.NONE);
      }
      /**
   * Constant defining the none actionsMode for use with setPosition.
   * @property NONE
   * @type Number
   * @default 0
   * @static
   */
      Tween.NONE = 0;
      /**
   * Constant defining the loop actionsMode for use with setPosition.
   * @property LOOP
   * @type Number
   * @default 1
   * @static
   */
      Tween.LOOP = 1;
      /**
   * Constant defining the reverse actionsMode for use with setPosition.
   * @property REVERSE
   * @type Number
   * @default 2
   * @static
   */
      Tween.REVERSE = 2;
      /**
   * Constant returned by plugins to tell the tween not to use default assignment.
   * @property IGNORE
   * @type Object
   * @static
   */
      Tween.IGNORE = {};
      /**
   * @property _listeners
   * @type Array[Tween]
   * @static
   * @protected
   */
      Tween._tweens = [];
      /**
   * @property _plugins
   * @type Object
   * @static
   * @protected
   */
      Tween._plugins = {};
      /**
   * Returns a new tween instance. This is functionally identical to using "new Tween(...)", but looks cleaner
   * with the chained syntax of TweenJS.
   * <h4>Example</h4>
   *
   *		var tween = Tween.get(target);
   *
   * @method get
   * @param {Object} target The target object that will have its properties tweened.
   * @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`).
   * All properties default to `false`. Supported props are:
   * <UL>
   *    <LI> loop: sets the loop property on this tween.</LI>
   *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
   *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on
   *    this tween.</LI>
   *    <LI> override: if true, `Tween.removeTweens(target)` will be called to remove any other tweens with
   *    the same target.
   *    <LI> paused: indicates whether to start the tween paused.</LI>
   *    <LI> position: indicates the initial position for this tween.</LI>
   *    <LI> onChange: specifies a listener for the {{#crossLink "Tween/change:event"}}{{/crossLink}} event.</LI>
   * </UL>
   * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual plugins'
   * documentation for details.
   * @param {Boolean} [override=false] If true, any previous tweens on the same target will be removed. This is the
   * same as calling `Tween.removeTweens(target)`.
   * @return {Tween} A reference to the created tween. Additional chained tweens, method calls, or callbacks can be
   * applied to the returned tween instance.
   * @static
   */
      Tween.get = function(target, props, pluginData, override) {
        override && Tween.removeTweens(target);
        return new Tween(target, props, pluginData);
      };
      /**
   * Advances all tweens. This typically uses the {{#crossLink "Ticker"}}{{/crossLink}} class, but you can call it
   * manually if you prefer to use your own "heartbeat" implementation.
   * @method tick
   * @param {Number} delta The change in time in milliseconds since the last tick. Required unless all tweens have
   * `useTicks` set to true.
   * @param {Boolean} paused Indicates whether a global pause is in effect. Tweens with {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}}
   * will ignore this, but all others will pause if this is `true`.
   * @static
   */
      Tween.tick = function(delta, paused) {
        var i, tween, tweens;
        tweens = Tween._tweens.slice();
        i = tweens.length - 1;
        for (;i >= 0; ) {
          tween = tweens[i];
          if (paused && !tween.ignoreGlobalPause || tween._paused) i--; else {
            tween.tick(tween._useTicks ? 1 : delta);
            i--;
          }
        }
      };
      /**
   * Handle events that result from Tween being used as an event handler. This is included to allow Tween to handle
   * {{#crossLink "Ticker/tick:event"}}{{/crossLink}} events from the createjs {{#crossLink "Ticker"}}{{/crossLink}}.
   * No other events are handled in Tween.
   * @method handleEvent
   * @param {Object} event An event object passed in by the {{#crossLink "EventDispatcher"}}{{/crossLink}}. Will
   * usually be of type "tick".
   * @private
   * @static
   * @since 0.4.2
   */
      Tween.handleTickEvent = function(event) {
        this.tick(event.delta, event.paused);
      };
      /**
   * Removes all existing tweens for a target. This is called automatically by new tweens if the `override`
   * property is `true`.
   * @method removeTweens
   * @param {Object} target The target object to remove existing tweens from.
   * @static
   */
      Tween.removeTweens = function(target) {
        var i, tween, tweens;
        if (target.tweenjs_count) {
          tweens = Tween._tweens;
          i = tweens.length - 1;
          for (;i >= 0; ) {
            tween = tweens[i];
            if (tween._target === target) {
              tween._paused = !0;
              tweens.splice(i, 1);
            }
            i--;
          }
          target.tweenjs_count = 0;
        }
      };
      /**
   * Stop and remove all existing tweens.
   * @method removeAllTweens
   * @static
   * @since 0.4.1
   */
      Tween.removeAllTweens = function() {
        var i, l, tween, tweens;
        tweens = Tween._tweens;
        i = 0;
        l = tweens.length;
        for (;l > i; ) {
          tween = tweens[i];
          tween._paused = !0;
          tween.target.tweenjs_count = 0;
          i++;
        }
        tweens.length = 0;
      };
      /**
   * Indicates whether there are any active tweens (and how many) on the target object (if specified) or in general.
   * @method hasActiveTweens
   * @param {Object} [target] The target to check for active tweens. If not specified, the return value will indicate
   * if there are any active tweens on any target.
   * @return {Boolean} If there are active tweens.
   * @static
   */
      Tween.hasActiveTweens = function(target) {
        return target ? target.tweenjs_count : Tween._tweens && !!Tween._tweens.length;
      };
      /**
   * Installs a plugin, which can modify how certain properties are handled when tweened. See the {{#crossLink "CSSPlugin"}}{{/crossLink}}
   * for an example of how to write TweenJS plugins.
   * @method installPlugin
   * @static
   * @param {Object} plugin The plugin class to install
   * @param {Array} properties An array of properties that the plugin will handle.
   */
      Tween.installPlugin = function(plugin, properties) {
        var arr, i, j, jl, n, priority, ps;
        priority = plugin.priority;
        priority || (plugin.priority = priority = 0);
        ps = Tween._plugins;
        i = 0;
        for (;i < properties.length; ) {
          n = properties[i];
          if (ps[n]) {
            arr = ps[n];
            j = 0;
            jl = arr.length;
            for (;jl > j && !(priority < arr[j].priority); ) j++;
            ps[n].splice(j, 0, plugin);
          } else ps[n] = [ plugin ];
          i++;
        }
      };
      /**
   * Registers or unregisters a tween with the ticking system.
   * @method _register
   * @param {Tween} tween The tween instance to register or unregister.
   * @param {Boolean} value If `true`, the tween is registered. If `false` the tween is unregistered.
   * @static
   * @protected
   */
      Tween._register = function(tween, value) {
        var i, target, tweens;
        target = tween._target;
        tweens = Tween._tweens;
        if (value) {
          target && (target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count + 1 : 1);
          tweens.push(tween);
          if (!Tween._inited && Ticker) {
            Ticker.addTickListener(Tween.handleTickEvent, this);
            Tween._inited = !0;
          }
        } else {
          target && target.tweenjs_count--;
          i = tweens.length;
          for (;i--; ) if (tweens[i] === tween) {
            tweens.splice(i, 1);
            return;
          }
        }
      };
      /**
   * Called whenever the tween's position changes.
   * @event change
   * @since 0.4.0
   *
   */
      /**
   * Queues a wait (essentially an empty tween).
   * <h4>Example</h4>
   *
   *		//This tween will wait 1s before alpha is faded to 0.
   *		Tween.get(target).wait(1000).to({alpha:0}, 1000);
   *
   * @method wait
   * @param {Number} duration The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
   * @param {Boolean} [passive] Tween properties will not be updated during a passive wait. This
   * is mostly useful for use with {{#crossLink "Timeline"}}{{/crossLink}} instances that contain multiple tweens
   * affecting the same target at different times.
   * @return {Tween} This tween instance (for chaining calls).
   *
   */
      Tween.prototype.wait = function(duration, passive) {
        var o;
        if (null == duration || 0 >= duration) return this;
        o = this._cloneProps(this._curQueueProps);
        return this._addStep({
          d: duration,
          p0: o,
          e: this._linearEase,
          p1: o,
          v: passive
        });
      };
      /**
   * Queues a tween from the current values to the target properties. Set duration to 0 to jump to these value.
   * Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric
   * properties will be set at the end of the specified duration.
   * <h4>Example</h4>
   *
   *		Tween.get(target).to({alpha:0}, 1000);
   *
   * @method to
   * @param {Object} props An object specifying property target values for this tween (Ex. `{x:300}` would tween the x
   * property of the target to 300).
   * @param {Number} [duration=0] The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
   * @param {Function} [ease="linear"] The easing function to use for this tween. See the {{#crossLink "Ease"}}{{/crossLink}}
   * class for a list of built-in ease functions.
   * @return {Tween} This tween instance (for chaining calls).
   */
      Tween.prototype.to = function(props, duration, ease) {
        (isNaN(duration) || 0 > duration) && (duration = 0);
        return this._addStep({
          d: duration || 0,
          p0: this._cloneProps(this._curQueueProps),
          e: ease,
          p1: this._cloneProps(this._appendQueueProps(props))
        });
      };
      /**
   * Queues an action to call the specified function.
   * <h4>Example</h4>
   *
   *   	//would call myFunction() after 1 second.
   *   	myTween.wait(1000).call(myFunction);
   *
   * @method call
   * @param {Function} callback The function to call.
   * @param {Array} [params]. The parameters to call the function with. If this is omitted, then the function
   *      will be called with a single param pointing to this tween.
   * @param {Object} [scope]. The scope to call the function in. If omitted, it will be called in the target's
   *      scope.
   * @return {Tween} This tween instance (for chaining calls).
   */
      Tween.prototype.call = function(callback, params, scope) {
        return this._addAction({
          f: callback,
          p: params ? params : [ this ],
          o: scope ? scope : this._target
        });
      };
      /**
   * Queues an action to set the specified props on the specified target. If target is null, it will use this tween's
   * target.
   * <h4>Example</h4>
   *
   *		myTween.wait(1000).set({visible:false},foo);
   *
   * @method set
   * @param {Object} props The properties to set (ex. `{visible:false}`).
   * @param {Object} [target] The target to set the properties on. If omitted, they will be set on the tween's target.
   * @return {Tween} This tween instance (for chaining calls).
   */
      Tween.prototype.set = function(props, target) {
        return this._addAction({
          f: this._set,
          o: this,
          p: [ props, target ? target : this._target ]
        });
      };
      /**
   * Queues an action to play (unpause) the specified tween. This enables you to sequence multiple tweens.
   * <h4>Example</h4>
   *
   *		myTween.to({x:100},500).play(otherTween);
   *
   * @method play
   * @param {Tween} tween The tween to play.
   * @return {Tween} This tween instance (for chaining calls).
   */
      Tween.prototype.play = function(tween) {
        tween || (tween = this);
        return this.call(tween.setPaused, [ !1 ], tween);
      };
      /**
   * Queues an action to pause the specified tween.
   * @method pause
   * @param {Tween} tween The tween to play. If null, it pauses this tween.
   * @return {Tween} This tween instance (for chaining calls)
   */
      Tween.prototype.pause = function(tween) {
        tween || (tween = this);
        return this.call(tween.setPaused, [ !0 ], tween);
      };
      /**
   * Advances the tween to a specified position.
   * @method setPosition
   * @param {Number} value The position to seek to in milliseconds (or ticks if useTicks is true).
   * @param {Number} [actionsMode=1] Specifies how actions are handled (ie. call, set, play, pause):
   * <ul>
   *      <li>{{#crossLink "Tween/NONE:property"}}{{/crossLink}} (0) - run no actions.</li>
   *      <li>{{#crossLink "Tween/LOOP:property"}}{{/crossLink}} (1) - if new position is less than old, then run all
   *      actions between old and duration, then all actions between 0 and new.</li>
   *      <li>{{#crossLink "Tween/REVERSE:property"}}{{/crossLink}} (2) - if new position is less than old, run all
   *      actions between them in reverse.</li>
   * </ul>
   * @return {Boolean} Returns `true` if the tween is complete (ie. the full tween has run & {{#crossLink "Tween/loop:property"}}{{/crossLink}}
   * is `false`).
   */
      Tween.prototype.setPosition = function(value, actionsMode) {
        var end, i, l, prevPos, self, step, t;
        self = this;
        0 > value && (value = 0);
        null == actionsMode && (actionsMode = 1);
        t = value;
        end = !1;
        if (t >= self.duration) if (self.loop) t %= self.duration; else {
          t = self.duration;
          end = !0;
        }
        if (t === self._prevPos) return end;
        prevPos = self._prevPos;
        self.position = self._prevPos = t;
        self._prevPosition = value;
        if (self._target) if (end) self._updateTargetProps(null, 1); else if (self._steps.length > 0) {
          i = 0;
          l = self._steps.length;
          for (;l > i && !(self._steps[i].t > t); ) i++;
          step = self._steps[i - 1];
          self._updateTargetProps(step, (self._stepPosition = t - step.t) / step.d);
        }
        if (0 !== actionsMode && self._actions.length > 0) if (self._useTicks) self._runActions(t, t); else if (1 === actionsMode && prevPos > t) {
          prevPos !== self.duration && self._runActions(prevPos, self.duration);
          self._runActions(0, t, !0);
        } else self._runActions(prevPos, t);
        end && self.setPaused(!0);
        self.changed.dispatch();
        return end;
      };
      /**
   * Advances this tween by the specified amount of time in milliseconds (or ticks if`useTicks` is `true`).
   * This is normally called automatically by the Tween engine (via {{#crossLink "Tween/tick"}}{{/crossLink}}), but is
   * exposed for advanced uses.
   * @method tick
   * @param {Number} delta The time to advance in milliseconds (or ticks if `useTicks` is `true`).
   */
      Tween.prototype.tick = function(delta) {
        this._paused || this.setPosition(this._prevPosition + delta);
      };
      /**
   * Pauses or plays this tween.
   * @method setPaused
   * @param {Boolean} [value=true] Indicates whether the tween should be paused (`true`) or played (`false`).
   * @return {Tween} This tween instance (for chaining calls)
   */
      Tween.prototype.setPaused = function(value) {
        if (this._paused === !!value) return this;
        this._paused = !!value;
        Tween._register(this, !value);
        return this;
      };
      Tween.prototype.w = Tween.prototype.wait;
      Tween.prototype.t = Tween.prototype.to;
      Tween.prototype.c = Tween.prototype.call;
      Tween.prototype.s = Tween.prototype.set;
      /**
   * Returns a string representation of this object.
   * @method toString
   * @return {String} a string representation of the instance.
   */
      Tween.prototype.toString = function() {
        return "[Tween]";
      };
      /**
   * @method clone
   * @protected
   */
      Tween.prototype.clone = function() {
        throw "Tween can not be cloned.";
      };
      /**
   * @method _updateTargetProps
   * @param {Object} step
   * @param {Number} ratio
   * @protected
   */
      Tween.prototype._updateTargetProps = function(step, ratio) {
        var arr, i, ignore, l, n, p0, p1, v, v0, v1, v2;
        p0 = void 0;
        p1 = void 0;
        v = void 0;
        v0 = void 0;
        v1 = void 0;
        arr = void 0;
        if (step || 1 !== ratio) {
          this.passive = !!step.v;
          if (this.passive) return;
          step.e && (ratio = step.e(ratio, 0, 1, 1));
          p0 = step.p0;
          p1 = step.p1;
        } else {
          this.passive = !1;
          p0 = p1 = this._curQueueProps;
        }
        for (n in this._initQueueProps) {
          null == (v0 = p0[n]) && (p0[n] = v0 = this._initQueueProps[n]);
          null == (v1 = p1[n]) && (p1[n] = v1 = v0);
          v = v0 === v1 || 0 === ratio || 1 === ratio || "number" != typeof v0 ? 1 === ratio ? v1 : v0 : v0 + (v1 - v0) * ratio;
          ignore = !1;
          if (arr = Tween._plugins[n]) {
            i = 0;
            l = arr.length;
            for (;l > i; ) {
              v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 === p1, !step);
              v2 === Tween.IGNORE ? ignore = !0 : v = v2;
              i++;
            }
          }
          ignore || (this._target[n] = v);
        }
      };
      /**
   * @method _runActions
   * @param {Number} startPos
   * @param {Number} endPos
   * @param {Boolean} includeStart
   * @protected
   */
      Tween.prototype._runActions = function(startPos, endPos, includeStart) {
        var action, ePos, i, j, k, pos, sPos;
        sPos = startPos;
        ePos = endPos;
        i = -1;
        j = this._actions.length;
        k = 1;
        if (startPos > endPos) {
          sPos = endPos;
          ePos = startPos;
          i = j;
          j = k = -1;
        }
        for (;(i += k) !== j; ) {
          action = this._actions[i];
          pos = action.t;
          (pos === ePos || pos > sPos && ePos > pos || includeStart && pos === startPos) && action.f.apply(action.o, action.p);
        }
      };
      /**
   * @method _appendQueueProps
   * @param {Object} o
   * @protected
   */
      Tween.prototype._appendQueueProps = function(o) {
        var arr, i, i2, injectProps, l, l2, n, n2, oldValue;
        arr = void 0;
        oldValue = void 0;
        i = void 0;
        l = void 0;
        injectProps = void 0;
        for (n in o) if (void 0 === this._initQueueProps[n]) {
          oldValue = this._target[n];
          if (arr = Tween._plugins[n]) {
            i = 0;
            l = arr.length;
            for (;l > i; ) {
              oldValue = arr[i].init(this, n, oldValue);
              i++;
            }
          }
          this._initQueueProps[n] = this._curQueueProps[n] = void 0 === oldValue ? null : oldValue;
        } else oldValue = this._curQueueProps[n];
        for (n2 in o) {
          oldValue = this._curQueueProps[n2];
          if (arr = Tween._plugins[n2]) {
            injectProps = injectProps || {};
            i2 = 0;
            l2 = arr.length;
            for (;l2 > i2; ) {
              arr[i2].step && arr[i2].step(this, n2, oldValue, o[n2], injectProps);
              i2++;
            }
          }
          this._curQueueProps[n2] = o[n2];
        }
        injectProps && this._appendQueueProps(injectProps);
        return this._curQueueProps;
      };
      /**
   * @method _cloneProps
   * @param {Object} props
   * @protected
   */
      Tween.prototype._cloneProps = function(props) {
        var n, o;
        o = {};
        for (n in props) o[n] = props[n];
        return o;
      };
      /**
   * @method _addStep
   * @param {Object} o
   * @protected
   */
      Tween.prototype._addStep = function(o) {
        if (o.d > 0) {
          this._steps.push(o);
          o.t = this.duration;
          this.duration += o.d;
        }
        return this;
      };
      /**
   * @method _addAction
   * @param {Object} o
   * @protected
   */
      Tween.prototype._addAction = function(o) {
        o.t = this.duration;
        this._actions.push(o);
        return this;
      };
      /**
   * @method _set
   * @param {Object} props
   * @param {Object} o
   * @protected
   */
      Tween.prototype._set = function(props, o) {
        var n;
        for (n in props) o[n] = props[n];
      };
      return Tween;
    }();
    DomainModel = function() {
      function DomainModel() {
        var self;
        self = this;
        self.__uid = _.uniqueId();
        self.propertyChanged = new Signal();
        self.__dp_visible = !1;
      }
      var getter, setter, _ref;
      _ref = gs(DomainModel), getter = _ref.getter, setter = _ref.setter;
      getter("_dp_visible", function() {
        return this.__dp_visible;
      });
      setter("_dp_visible", function(visible) {
        this.__dp_visible = visible;
      });
      return DomainModel;
    }();
    DataProvider = function() {
      function DataProvider() {}
      var falseFn, nullIterator, trueFn;
      trueFn = function() {
        return !0;
      };
      falseFn = function() {
        return !1;
      };
      nullIterator = {
        hasNext: falseFn,
        hasPrevious: falseFn
      };
      DataProvider.prototype.iterator = function() {
        return this.iteratorFrom(this.first());
      };
      DataProvider.prototype.iteratorFrom = function(element) {
        var currentElement, frst, hasCache, it, self;
        self = this;
        if (element) {
          it = {};
          currentElement = element;
          hasCache = null;
          frst = function() {
            it.next = function() {
              if (hasCache) {
                currentElement = hasCache;
                hasCache = null;
              } else currentElement = self._nextOf(currentElement);
              return currentElement;
            };
            it.previous = function() {
              if (hasCache) {
                currentElement = hasCache;
                hasCache = null;
              } else currentElement = self._previousOf(currentElement);
              return currentElement;
            };
            it.hasPrevious = function() {
              var e;
              e = self._previousOf(currentElement);
              e && (hasCache = e);
              return !!hasCache;
            };
            it.hasNext = function() {
              var e;
              e = self._nextOf(currentElement);
              e && (hasCache = e);
              return !!hasCache;
            };
            it.current = function() {
              return currentElement;
            };
            return currentElement;
          };
          it.hasNext = trueFn;
          it.hasPrevious = trueFn;
          it.next = frst;
          it.previous = frst;
          it.current = function() {
            return element;
          };
          return it;
        }
        return nullIterator;
      };
      DataProvider.prototype._nextOf = function() {};
      DataProvider.prototype._previousOf = function() {};
      DataProvider.prototype.first = function() {};
      DataProvider.prototype.last = function() {};
      return DataProvider;
    }();
    TimeViewport = function() {
      function TimeViewport(options) {
        var self;
        null == options && (options = {});
        self = this;
        self.enablePeriodTweening = !0;
        self._periodTweening = {};
        self._period = null;
        self._oldPeriod = null;
        self._maxPeriod = null;
        self._minPeriodDuration = null;
        self._periodEaseProvider = null;
        self._initialize(options);
        self.periodChanged = new Signal();
        self.maxPeriodChanged = new Signal();
        self.minPeriodDurationChanged = new Signal();
      }
      var TV, defaultMaxPeriod, defaultPeriod, fromNowPlusYears, getter, setter, _ref;
      TV = TimeViewport;
      _ref = gs(TimeViewport), getter = _ref.getter, setter = _ref.setter;
      fromNowPlusYears = Period.fromNowPlusYears;
      defaultPeriod = fromNowPlusYears(1);
      defaultMaxPeriod = new Period(new Date(defaultPeriod.start.getFullYear() - 1, 0, 1), new Date(defaultPeriod.end.getFullYear() + 2, 0, 1));
      TV.DEFAULT_OPTIONS = {
        period: defaultPeriod,
        maxPeriod: defaultMaxPeriod,
        minPeriodDuration: 1e3,
        periodEaseProvider: {
          duration: 500,
          provide: function(newPeriod, oldPeriod) {
            var E, ease, pDuration, periodDuration;
            pDuration = newPeriod.durationInMillis();
            periodDuration = oldPeriod.durationInMillis();
            E = Ease;
            ease = 1.05 * periodDuration > pDuration && pDuration > .95 * periodDuration ? E.quintInOut : periodDuration > pDuration ? E.cubicOut : E.cubicOut;
            return ease;
          }
        }
      };
      getter("period", function() {
        return this._period;
      });
      setter("period", function(pParam) {
        var p, self, tweening, update;
        self = this;
        if (null != pParam ? pParam.valid() : void 0) {
          p = self.normalizePeriod(pParam);
          if (self._period && self._period.equals(p)) return;
          update = function(newPeriod) {
            var _ref2;
            self._oldPeriod = self._period;
            self._period = newPeriod;
            self.periodChanged.dispatch(null != (_ref2 = self._oldPeriod) ? _ref2.clone() : void 0, self._period.clone());
          };
          if (self._period && self.enablePeriodTweening) {
            if (!self._period.equals(p)) {
              tweening = self._periodTweening;
              tweening.start = self._period.start.getTime();
              tweening.end = self._period.end.getTime();
              Tween.get(tweening, {
                override: !0
              }).to({
                start: p.start.getTime(),
                end: p.end.getTime()
              }, self._periodEaseProvider.duration, self._periodEaseProvider.provide(p, self._period)).changed.add(function() {
                var newPeriod;
                try {
                  newPeriod = new Period(new Date(self._periodTweening.start), new Date(self._periodTweening.end));
                } catch (_error) {}
                (null != newPeriod ? newPeriod.valid() : void 0) && update(newPeriod);
              });
            }
          } else update(p);
        }
      });
      getter("oldPeriod", function() {
        return this._oldPeriod;
      });
      getter("maxPeriod", function() {
        return this._maxPeriod;
      });
      setter("maxPeriod", function(p) {
        var old, self, _ref2;
        if (null != p ? p.valid() : void 0) {
          self = this;
          if (!(null != (_ref2 = self._maxPeriod) ? _ref2.equals(p) : void 0)) {
            old = self._maxPeriod;
            self._maxPeriod = p.clone();
            self._maxPeriod.durationInMillis() < self._minPeriodDuration && self._maxPeriod.end.setTime(self._maxPeriod.start.getTime() + self._minPeriodDuration);
            self._normalizeThisPeriod();
            self.maxPeriodChanged.dispatch(null != old ? old.clone() : void 0, self._maxPeriod.clone());
          }
        }
      });
      getter("minPeriodDuration", function() {
        return this._minPeriodDuration;
      });
      setter("minPeriodDuration", function(minDuration) {
        var old, self;
        self = this;
        if (self._minPeriodDuration !== minDuration) {
          old = self._minPeriodDuration;
          self._minPeriodDuration = minDuration;
          self._normalizeThisPeriod();
          return self.minPeriodDurationChanged.dispatch(old, self._minPeriodDuration);
        }
      });
      TimeViewport.prototype.normalizePeriod = function(pParam) {
        var p, ret, self;
        self = this;
        p = pParam || self.period;
        if (p.durationInMillis() < self._minPeriodDuration) {
          p = p.clone();
          p.end.setTime(p.start.getTime() + self._minPeriodDuration);
        }
        ret = new Period(new Date(p.start.getTime() < self._maxPeriod.start.getTime() ? self._maxPeriod.start.getTime() : p.start.getTime()), new Date(p.end.getTime() > self._maxPeriod.end.getTime() ? self._maxPeriod.end.getTime() : p.end.getTime()));
        return ret;
      };
      TimeViewport.prototype.zoomToMaxPeriod = function() {
        return this.period = this.maxPeriod;
      };
      TimeViewport.prototype._zoom = function(inBool, leftDelta, rightDelta) {
        var factor, p;
        factor = inBool ? 1 : -1;
        p = new Period(new Date(this._period.start.getTime() + factor * leftDelta), new Date(this._period.end.getTime() - factor * rightDelta));
        this.period = p;
      };
      TimeViewport.prototype.zoomInOn = function(date, perc) {
        var percent;
        percent = null != perc ? perc : .5;
        this._zoom(!0, new Period(this._period.start, date).durationInMillis() * percent, new Period(date, this._period.end).durationInMillis() * percent);
      };
      TimeViewport.prototype.zoomOutOn = function(date, perc) {
        var percent;
        percent = null != perc ? perc : 1;
        this._zoom(!1, new Period(this._period.start, date).durationInMillis() * percent, new Period(date, this._period.end).durationInMillis() * percent);
      };
      TimeViewport.prototype.zoomIn = function(perc) {
        var delta, durationInMillis, percent;
        percent = null != perc ? perc : .5;
        durationInMillis = this._period.durationInMillis();
        delta = percent * durationInMillis / 2;
        this._zoom(!0, delta, delta);
      };
      TimeViewport.prototype.zoomOut = function(perc) {
        var delta, durationInMillis, percent;
        percent = null != perc ? perc : 1;
        durationInMillis = this._period.durationInMillis();
        delta = percent * durationInMillis / 2;
        this._zoom(!1, delta, delta);
      };
      TimeViewport.prototype.endIsNow = function() {
        var durationInMillis, now, start;
        durationInMillis = this._period.durationInMillis();
        now = new Date();
        start = new Date();
        start.setTime(now.getTime() - durationInMillis);
        this.period = new Period(start, now);
      };
      TimeViewport.prototype.endToStart = function() {
        var durationInMillis;
        durationInMillis = this._period.durationInMillis();
        this.period = new Period(this._period.end, new Date(this._period.end.getTime() + durationInMillis));
      };
      TimeViewport.prototype.periodIsOutOfBounds = function(p) {
        return p.start.getTime() < this._maxPeriod.start.getTime() || p.end.getTime() > this._maxPeriod.end.getTime();
      };
      TimeViewport.prototype._normalizeThisPeriod = function() {
        this.period && (this.period = this.normalizePeriod(this.period));
      };
      TimeViewport.prototype._initialize = function(options) {
        var maxPeriod, minPeriodDuration, optionsWithDefault, period, periodEaseProvider;
        optionsWithDefault = _.defaults(_.clone(options, !0), TV.DEFAULT_OPTIONS);
        period = optionsWithDefault.period, maxPeriod = optionsWithDefault.maxPeriod, minPeriodDuration = optionsWithDefault.minPeriodDuration, 
        periodEaseProvider = optionsWithDefault.periodEaseProvider;
        this._maxPeriod = maxPeriod.clone();
        this._minPeriodDuration = minPeriodDuration;
        this._period = this.normalizePeriod(period);
        this._periodEaseProvider = periodEaseProvider;
      };
      return TimeViewport;
    }();
    Theme = function() {
      function Theme(conf) {
        var pa, ps, sa, self, ss;
        self = this;
        this.name = conf.name;
        this.displayName = conf.displayName;
        fieldsGenerator(self, "p", T.SHADE_SUFFIXES, ps = conf.primaryShades);
        fieldsGenerator(self, "pa", T.ACCENT_SUFFIXES, pa = conf.primaryAccents);
        fieldsGenerator(self, "s", T.SHADE_SUFFIXES, (ss = conf.secondaryShades) ? ss : ps);
        fieldsGenerator(self, "sa", T.ACCENT_SUFFIXES, (sa = conf.secondaryAccents) ? sa : pa);
      }
      var T, alphas, fieldsGenerator, generateDelegates, hexToRgb, textTypeKeys;
      T = Theme;
      hexToRgb = CoreFunctions.hexToRgb;
      textTypeKeys = [ "divider", "disabled", "secondary", "primary", "title" ];
      alphas = [ .12, .26, .54, .87, 1 ];
      T.SHADE_SUFFIXES = [ "50", "100", "200", "300", "400", "500", "600", "700", "800", "900" ];
      T.ACCENT_SUFFIXES = [ "100", "200", "400", "700" ];
      T.ALPHAS = _.zipObject(textTypeKeys, alphas);
      T.BLACK_TEXT = _.mapValues(T.ALPHAS, function(v) {
        return function(alphaPercent) {
          return "rgba(0, 0, 0, " + v * alphaPercent + ")";
        };
      });
      T.WHITE_TEXT = _.mapValues(T.ALPHAS, function(v) {
        return function(alphaPercent) {
          return "rgba(255, 255, 255, " + v * alphaPercent + ")";
        };
      });
      generateDelegates = function(getterGen, prefixes, suffixes) {
        _.forEach(prefixes, function(prefix) {
          _.forEach(suffixes, function(suffix) {
            var fName, fNameTxt;
            fName = prefix + suffix;
            fNameTxt = fName + "txt";
            _.forEach([ fName, fNameTxt ], function(name) {
              getterGen(name, function() {
                return this._themeManager.theme[name];
              });
            });
          });
        });
      };
      T.generateDelegateGetters = function(getterGen) {
        generateDelegates(getterGen, [ "p", "s" ], T.SHADE_SUFFIXES);
        return generateDelegates(getterGen, [ "pa", "sa" ], T.ACCENT_SUFFIXES);
      };
      fieldsGenerator = function(fieldHolder, prefix, suffixes, shades) {
        var keyValues, shadeFieldNames;
        shadeFieldNames = _.map(suffixes, function(suffix) {
          return prefix + suffix;
        });
        keyValues = _.zip(shadeFieldNames, shades);
        _.forEach(keyValues, function(kv) {
          var k, lumi, rgb, v;
          k = kv[0];
          v = kv[1];
          fieldHolder[k] = v;
          rgb = hexToRgb(v);
          lumi = .299 * rgb.r + .587 * rgb.g + .114 * rgb.b;
          fieldHolder[k + "txt"] = lumi > 140 ? T.BLACK_TEXT : T.WHITE_TEXT;
        });
      };
      return Theme;
    }();
    CanvasManager = function() {
      function CanvasManager() {
        throw "forbidden";
      }
      var CM, canvasRegistrations, isAttachedToDocument, onTickerTick, tick, updateDrawingSurface;
      CM = CanvasManager;
      isAttachedToDocument = CoreFunctions.isAttachedToDocument;
      canvasRegistrations = [];
      tick = 0;
      onTickerTick = function() {
        if (!Ticker.paused && tick++ % 30 === 0) {
          tick = 1;
          CM.updateDrawingSurfaces();
        }
      };
      CM.updateDrawingSurfaces = function() {
        var c0, i, len, reg;
        i = 0;
        len = canvasRegistrations.length;
        for (;len > i; ) {
          reg = canvasRegistrations[i];
          c0 = reg.canvasBasedComponent.canvasArray[0];
          if (isAttachedToDocument(c0) && (reg.width !== c0.offsetWidth || reg.height !== c0.offsetHeight)) {
            updateDrawingSurface(reg);
            reg.drawingSurfaceChangedCbk();
          }
          i++;
        }
      };
      updateDrawingSurface = function(reg) {
        var c, c0, canvas, canvasBasedComponent, hIsVariable, i, len, offsetHeight, offsetWidth, scale, wIsVariable;
        i = 0;
        canvasBasedComponent = reg.canvasBasedComponent;
        canvas = canvasBasedComponent.canvasArray;
        len = canvas.length;
        c0 = canvas[0];
        wIsVariable = canvasBasedComponent.widthIsVariable;
        hIsVariable = canvasBasedComponent.heightIsVariable;
        (wIsVariable || isNaN(reg.width)) && (offsetWidth = c0.offsetWidth);
        (hIsVariable || isNaN(reg.height)) && (offsetHeight = c0.offsetHeight);
        for (;len > i; ) {
          c = canvas[i];
          scale = PixelRatioManager.backingScale();
          null != offsetWidth && (c.width = (reg.width = offsetWidth) * scale);
          null != offsetHeight && (c.height = (reg.height = offsetHeight) * scale);
          i++;
        }
      };
      Ticker.addTickListener(onTickerTick);
      CM.registerCanvas = function(canvasBasedComponent, drawingSurfaceChangedCbk) {
        var reg;
        reg = {
          id: _.uniqueId(),
          canvasBasedComponent: canvasBasedComponent,
          width: 0 / 0,
          height: 0 / 0,
          drawingSurfaceChangedCbk: drawingSurfaceChangedCbk
        };
        canvasRegistrations.push(reg);
        updateDrawingSurface(reg);
        return reg;
      };
      return CanvasManager;
    }();
    PixelRatioManager = function() {
      function PixelRatioManager() {
        throw "forbidden";
      }
      var backingScaleCache;
      backingScaleCache = null;
      PixelRatioManager.backingScale = function() {
        return backingScaleCache || (backingScaleCache = "devicePixelRatio" in window && window.devicePixelRatio > 1 ? window.devicePixelRatio : 1);
      };
      return PixelRatioManager;
    }();
    ThemeManager = function() {
      function ThemeManager() {
        var self;
        self = this;
        self._theme = ThemeManager.defaultTheme;
        self.themeChanged = new Signal();
      }
      var TM, getter, setter, themes, _ref;
      TM = ThemeManager;
      _ref = gs(ThemeManager), getter = _ref.getter, setter = _ref.setter;
      themes = {};
      TM.defaultTheme = null;
      TM.define = function(conf) {
        var t;
        t = new Theme(conf);
        themes[conf.name] = t;
        return TM.defaultTheme = t;
      };
      TM.define({
        name: "indigo-pink",
        displayName: "Indigo / Pink",
        primaryShades: [ "#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e" ],
        primaryAccents: [ "#ff80ab", "#ff4081", "#f50057", "#c51162" ],
        secondaryShades: [ "#B49F5B", "#A5904C", "#95803C", "#86712D", "#77621E", "#68530F", "#584300", "#493400", "#3A2500", "#2A1500" ],
        secondaryAccents: [ "#ff80a0", "#ff4080", "#f50050", "#c51160" ]
      });
      getter("themes", function() {
        return themes;
      });
      getter("theme", function() {
        return this._theme;
      });
      setter("theme", function(themeName) {
        var self;
        self = this;
        if (self._theme.name !== themeName) {
          self._theme = themes[themeName];
          self.themeChanged.dispatch();
        }
      });
      return ThemeManager;
    }();
    Drawing = function() {
      function Drawing(component, canvas, autoClear, preserveTransform) {
        var self;
        null == autoClear && (autoClear = !0);
        null == preserveTransform && (preserveTransform = !1);
        self = this;
        self.hashCode = self.id = _.uniqueId();
        self._component = component;
        self._themeManager = component.themeManager;
        self._canvas = canvas;
        self._autoClear = autoClear;
        self._preserveTransform = preserveTransform;
      }
      var getter, setter, supportLineDash, _ref;
      _ref = gs(Drawing), getter = _ref.getter, setter = _ref.setter;
      Drawing.DEFAULT_ALPHAS = [ "0.30", "0.20", "0.10", "0.05" ];
      Theme.generateDelegateGetters(getter);
      Drawing.prototype.update = function() {
        var canvas, ctx, scale, self;
        self = this;
        canvas = self._canvas;
        ctx = canvas.getContext("2d");
        scale = PixelRatioManager.backingScale();
        self._preserveTransform || ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.save();
        self._autoClear && ctx.clearRect(0, 0, canvas.width, canvas.height);
        self._update(ctx);
        ctx.restore();
      };
      Drawing.prototype._update = function() {};
      Drawing.prototype._approximateEllipsisLengthForSpace = function(str, strWidth, spaceForText) {
        return Math.floor(.85 * spaceForText / strWidth * (str.length - 2));
      };
      Drawing.prototype._drawHArrow = function(ctx, vertexX, baseX, centerY, arrowWidth) {
        ctx.beginPath();
        ctx.moveTo(vertexX, centerY);
        ctx.lineTo(baseX, centerY + arrowWidth);
        ctx.lineTo(baseX, centerY - arrowWidth);
        ctx.closePath();
        ctx.fill();
      };
      Drawing.prototype._fillText = function(ctx, str, x, y) {
        return ctx.fillText(str, x, y);
      };
      supportLineDash = !1;
      Drawing.prototype._setLineDash = function(ctx, array) {
        (supportLineDash || (supportLineDash = _.isFunction(ctx.setLineDash))) && ctx.setLineDash(array);
      };
      return Drawing;
    }();
    RolloverTweener = function() {
      function RolloverTweener(duration, nbFrames, ease) {
        var self;
        null == duration && (duration = DEFAULT_DURATION);
        null == nbFrames && (nbFrames = DEFAULT_NB_FRAMES);
        null == ease && (ease = Ease.cubicInOut);
        self = this;
        self._duration = duration;
        self._nbFrames = nbFrames;
        self._ease = ease;
        self._enabled = !0;
        self.tweenings = {};
        self.rolloverTweened = new Signal();
      }
      var DEFAULT_DURATION, DEFAULT_NB_FRAMES, getter, lastMouseoverKey, setter, _ref;
      _ref = gs(RolloverTweener), getter = _ref.getter, setter = _ref.setter;
      lastMouseoverKey = null;
      DEFAULT_DURATION = 250;
      DEFAULT_NB_FRAMES = 15;
      getter("nbFrames", function() {
        return this._nbFrames;
      });
      setter("enabled", function(enabled) {
        var self;
        self = this;
        self._enabled = enabled;
        !enabled && lastMouseoverKey ? self._tweenMouseout(lastMouseoverKey) : lastMouseoverKey && self._tweenMouseover(lastMouseoverKey);
      });
      RolloverTweener.prototype.tweenMouseover = function(key) {
        lastMouseoverKey = key + "";
        this._enabled && this._tweenMouseover(lastMouseoverKey);
      };
      RolloverTweener.prototype.tweenMouseout = function(key) {
        lastMouseoverKey = null;
        this._enabled && this._tweenMouseout(key + "");
      };
      RolloverTweener.prototype._tweenMouseover = function(key) {
        var duration, maxDuration, self, tweening;
        self = this;
        tweening = self.tweenings[key];
        maxDuration = self._duration;
        if (tweening) {
          Tween.removeTweens(tweening);
          duration = getTime() - tweening.startTime;
          duration > maxDuration && (duration = maxDuration);
        } else {
          self.tweenings[key] = tweening = {
            previousFrame: 0,
            frame: 0,
            startTime: getTime()
          };
          duration = maxDuration;
        }
        Tween.get(tweening, {
          override: !0
        }).to({
          frame: self._nbFrames
        }, duration, self._ease).changed.add(function() {
          self._updateTweening(tweening, key);
        });
      };
      RolloverTweener.prototype._tweenMouseout = function(key) {
        var duration, maxDuration, self, tweening;
        self = this;
        tweening = self.tweenings[key];
        if (tweening) {
          maxDuration = self._duration;
          Tween.removeTweens(tweening);
          duration = getTime() - tweening.startTime;
          duration > maxDuration && (duration = maxDuration);
          tweening.startTime = getTime();
          return self._dragging ? void 0 : Tween.get(tweening, {
            override: !0
          }).to({
            frame: 0
          }, duration, self._ease).call(function() {
            0 === tweening.frame && delete self.tweenings[key];
          }).changed.add(function() {
            self._updateTweening(tweening, key);
          });
        }
      };
      RolloverTweener.prototype._updateTweening = function(tweening, key) {
        if (tweening.frame !== tweening.previousFrame) {
          tweening.previousFrame = tweening.frame;
          tweening.percent = Math.round(100 * tweening.frame / this._nbFrames) / 100;
          this.rolloverTweened.dispatch(tweening, +key);
        }
      };
      return RolloverTweener;
    }();
    BaseComponent = function() {
      function BaseComponent(conf) {
        var domContainer, self;
        self = this;
        self.widthIsVariable = !0;
        self.heightIsVariable = !0;
        self.widthFromParent = !1;
        self.heightFromParent = !1;
        self._id = _.uniqueId();
        self._conf = conf;
        self._name = conf.name;
        self._domContainer = domContainer = conf.domContainer || elmt(conf.domContainerTagName || "div", conf.name);
        cssReset(domContainer);
        setUnselectable(domContainer);
        self._fontFamily = conf.fontFamily;
        self._fontWeight = conf.fontWeight;
        self._fontStyle = conf.fontStyle;
        self._fontSize = conf.fontSize;
        self._fontChangedFlag = !0;
        self._themeManager = conf.themeManager;
        self._localeManager = conf.localeManager;
        self._ticks = -1;
        self._dragging = self._dndMouseDownStopImmediatePropagation = !1;
        self._dragStartPoint = self._dragDelta = null;
        self._dragStartedSignal = self._dragMovedSignal = self._dragEndedSignal = null;
        self._mouseListeners = [];
        self._lastComputedWidthTicks = self._lastComputedWidth = null;
        self._lastComputedHeightTicks = self._lastComputedHeight = null;
        self._widthChangedFlag = self._heightChangedFlag = !1;
        self._parent = null;
        self._domContainerStyleWidthChangedFlag = !1;
        self._domContainerStyleWidth = null;
        self._domContainerStyleHeightChangedFlag = !1;
        self._domContainerStyleHeight = null;
        self._parentChangedFlag = self._themeChangedFlag = self._localeChangedFlag = self._invalidatePropertiesFlag = self._invalidateSizeFlag = self._invalidateDisplayListFlag = !1;
        self._themeChangedFlag = !0;
        self._themeManager.themeChanged.add(function() {
          self._themeChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        });
        if (self._localeManager) {
          self._localeChangedFlag = !0;
          self._localeManager.localeChanged.add(function() {
            self._localeChangedFlag = !0;
            self.invalidatePropsAndDisplayList();
          });
        }
        self._children = [];
        self._childAddedFlag = !1;
        self._childRemovedFlag = !1;
        self._isAttached = !1;
        self._alreadyInitialized = !1;
      }
      var appendChild, cssReset, elmt, firstTouch, getter, hexToRgb, identity, mouseEventFromTouch, prependChild, preventDefault, removeChild, setUnselectable, setter, stopImmediatePropagation, _ref;
      _ref = gs(BaseComponent), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, prependChild = CoreFunctions.prependChild, 
      removeChild = CoreFunctions.removeChild, setUnselectable = CoreFunctions.setUnselectable, 
      hexToRgb = CoreFunctions.hexToRgb, cssReset = CoreFunctions.cssReset;
      Theme.generateDelegateGetters(getter);
      getter("id", function() {
        return this._id;
      });
      getter("dragging", function() {
        return this._dragging;
      });
      getter("dragDelta", function() {
        return this._dragDelta;
      });
      getter("isAttached", function() {
        return this._isAttached;
      });
      getter("name", function() {
        return this._name;
      });
      getter("domContainer", function() {
        return this._domContainer;
      });
      getter("domStyle", function() {
        return this._domContainer.style;
      });
      getter("themeManager", function() {
        return this._themeManager;
      });
      getter("localeManager", function() {
        return this._localeManager;
      });
      getter("dragStartedSignal", function() {
        return this._dragStartedSignal || (this._dragStartedSignal = new Signal());
      });
      getter("dragMovedSignal", function() {
        return this._dragMovedSignal || (this._dragMovedSignal = new Signal());
      });
      getter("dragEndedSignal", function() {
        return this._dragEndedSignal || (this._dragEndedSignal = new Signal());
      });
      getter("parent", function() {
        return this._parent;
      });
      setter("parent", function(parent) {
        var self;
        self = this;
        if (self._parent !== parent) {
          self._parentChangedFlag = !0;
          self._parent = parent;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("font", function() {
        var components, self, tmpFm, tmpFs, tmpFsz, tmpFw;
        self = this;
        components = [];
        (tmpFs = self._fontStyle) && components.push(tmpFs);
        (tmpFw = self._fontWeight) && components.push(tmpFw);
        (tmpFsz = self._fontSize) && components.push(tmpFsz);
        (tmpFm = self._fontFamily) && components.push(tmpFm);
        return components.join(" ");
      });
      getter("fontSize", function() {
        return this._fontSize;
      });
      setter("fontSize", function(fontSize) {
        var self;
        self = this;
        if (self._fontSize !== fontSize) {
          self._fontChangedFlag = !0;
          self._fontSize = fontSize;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("fontFamily", function() {
        return this._fontFamily;
      });
      setter("fontFamily", function(fontFamily) {
        var self;
        self = this;
        if (self._fontFamily !== fontFamily) {
          self._fontChangedFlag = !0;
          self._fontFamily = fontFamily;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("fontWeight", function() {
        return this._fontWeight;
      });
      setter("fontWeight", function(fontWeight) {
        var self;
        self = this;
        if (self._fontWeight !== fontWeight) {
          self._fontChangedFlag = !0;
          self._fontWeight = fontWeight;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("fontStyle", function() {
        return this._fontStyle;
      });
      setter("fontStyle", function(fontStyle) {
        var self;
        self = this;
        if (self._fontStyle !== fontStyle) {
          self._fontChangedFlag = !0;
          self._fontStyle = fontStyle;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("width", function() {
        var newWidth, self;
        self = this;
        self.widthFromParent && self._parent.width;
        if (!self.widthIsVariable && null != self._lastComputedWidth) return self._lastComputedWidth;
        if (self._ticks !== self._lastComputedWidthTicks) {
          self._lastComputedWidthTicks = self._ticks;
          newWidth = self._domContainer.offsetWidth;
          if (self._lastComputedWidth !== newWidth) {
            self._widthChangedFlag = !0;
            self._lastComputedWidth = newWidth;
            self.invalidatePropsAndDisplayList();
          }
        }
        return self._lastComputedWidth;
      });
      getter("height", function() {
        var newHeight, self;
        self = this;
        self.heightFromParent && self._parent.height;
        if (!self.heightIsVariable && null != self._lastComputedHeight) return self._lastComputedHeight;
        if (self._ticks !== self._lastComputedHeightTicks) {
          self._lastComputedHeightTicks = self._ticks;
          newHeight = self._domContainer.offsetHeight;
          if (self._lastComputedHeight !== newHeight) {
            self._heightChangedFlag = !0;
            self._lastComputedHeight = newHeight;
            self.invalidatePropsAndDisplayList();
          }
        }
        return self._lastComputedHeight;
      });
      getter("domContainerStyleWidth", function() {
        return this._domContainerStyleWidth;
      });
      setter("domContainerStyleWidth", function(domContainerStyleWidth) {
        var self;
        self = this;
        if (self._domContainerStyleWidth !== domContainerStyleWidth) {
          self._domContainerStyleWidth = domContainerStyleWidth;
          self._domContainerStyleWidthChangedFlag = !0;
          self.invalidateSize();
        }
      });
      getter("domContainerStyleHeight", function() {
        return this._domContainerStyleHeight;
      });
      setter("domContainerStyleHeight", function(domContainerStyleHeight) {
        var self;
        self = this;
        if (self._domContainerStyleHeight !== domContainerStyleHeight) {
          self._domContainerStyleHeight = domContainerStyleHeight;
          self._domContainerStyleHeightChangedFlag = !0;
          self.invalidateSize();
        }
      });
      getter("children", function() {
        return this._children;
      });
      BaseComponent.prototype._createChildren = function() {};
      BaseComponent.prototype._initBindings = function() {
        var self;
        self = this;
        self._configureUiBindings(!0);
        self._configureModelBindings(!0);
      };
      BaseComponent.prototype._configureUiBindings = function(enable) {
        var i, l, len, ls, self;
        self = this;
        self._uiBindingsEnabled = enable;
        ls = self._mouseListeners;
        len = ls.length;
        if (enable) {
          i = 0;
          for (;len > i; ) {
            l = ls[i];
            l.elmt.addEventListener(l.type, l.listener, l.useCapture);
            i++;
          }
        } else {
          i = len - 1;
          for (;i >= 0; ) {
            l = ls[i];
            l.elmt.removeEventListener(l.type, l.listener, l.useCapture);
            i--;
          }
        }
      };
      BaseComponent.prototype._configureModelBindings = function(enable) {
        this._modelBindingsEnabled = enable;
      };
      BaseComponent.prototype.resetCache = function() {
        var self;
        self = this;
        self._lastComputedWidthTicks = null;
        self._lastComputedWidth = null;
        self._lastComputedHeightTicks = null;
        self._lastComputedHeight = null;
      };
      BaseComponent.prototype.invalidateProperties = function() {
        var self;
        self = this;
        self._parent && !self._invalidatePropertiesFlag && self._parent.invalidateProperties();
        self._invalidatePropertiesFlag = !0;
      };
      BaseComponent.prototype.invalidateSize = function() {
        this._invalidateSizeFlag = !0;
      };
      BaseComponent.prototype.invalidateDisplayList = function() {
        var self;
        self = this;
        self._parent && !self._invalidateDisplayListFlag && self._parent.invalidateDisplayList();
        self._invalidateDisplayListFlag = !0;
      };
      BaseComponent.prototype.invalidatePropsAndDisplayList = function() {
        var self;
        self = this;
        self.invalidateProperties();
        self.invalidateDisplayList();
      };
      BaseComponent.prototype.tick = function() {
        var self;
        self = this;
        self._ticks = Ticker.getTicks();
        if (Ticker.paused) return !1;
        self._invalidatePropertiesFlag && self._commitProperties();
        self._invalidateDisplayListFlag && self._updateDisplayList();
        if (self._invalidateSizeFlag) {
          (null === self._domContainerStyleHeight || null === self._domContainerStyleWidth) && self._measure();
          self.layout();
        }
        self._invalidatePropertiesFlag && self._resetPropFlags();
      };
      BaseComponent.prototype.layout = function() {
        this._invalidateSizeFlag = !1;
      };
      BaseComponent.prototype.attach = function() {
        var i, k, kids, len, self;
        self = this;
        self._isAttached = !0;
        if (self._alreadyInitialized) {
          self._configureModelBindings(!0);
          self._configureUiBindings(!0);
        }
        len = (kids = self._children).length;
        i = 0;
        for (;len > i; ) {
          k = kids[i];
          k.attach();
          i++;
        }
      };
      BaseComponent.prototype.detach = function() {
        var k, kids, len, self;
        self = this;
        len = (kids = self._children).length;
        for (;len > 0; ) {
          k = kids[len - 1];
          k.detach();
          len--;
        }
        self._configureUiBindings(!1);
        self._configureModelBindings(!1);
        self._isAttached = !1;
      };
      BaseComponent.prototype._lastChild = function() {
        var kids, len;
        return (len = (kids = this._children).length) > 0 ? kids[len - 1] : null;
      };
      BaseComponent.prototype._firstChild = function() {
        var kids;
        return (kids = this._children).length > 0 ? kids[0] : null;
      };
      BaseComponent.prototype._removeAllChildren = function() {
        var kids, len, self;
        self = this;
        len = (kids = self._children).length;
        for (;len > 0; ) {
          self._removeChild(kids[len - 1]);
          len--;
        }
      };
      BaseComponent.prototype._removeChild = function(child) {
        var i, k, kids, len, self;
        self = this;
        child.detach();
        len = (kids = self._children).length;
        i = 0;
        for (;len > i; ) {
          k = kids[i];
          if (k === child) {
            kids.splice(i, 1);
            break;
          }
          i++;
        }
        removeChild(self._domContainer, child.domContainer);
        self._childRemovedFlag = !0;
        self.invalidatePropsAndDisplayList();
      };
      BaseComponent.prototype._commitProperties = function() {};
      BaseComponent.prototype._updateDisplayList = function() {
        var fm, fs, fsz, fw, inheritStr, s, self;
        self = this;
        self._domContainerStyleHeightChangedFlag && (self.domStyle.height = self._domContainerStyleHeight);
        self._domContainerStyleWidthChangedFlag && (self.domStyle.width = self._domContainerStyleWidth);
        self._themeChangedFlag && self._handleThemeChanged();
        self._localeChangedFlag && self._handleLocaleChanged();
        if (self._fontChangedFlag) {
          s = self.domStyle;
          inheritStr = "inherit";
          s.fontFamily = (fm = self._fontFamily) ? fm : inheritStr;
          s.fontWeight = (fw = self._fontWeight) ? fw : inheritStr;
          s.fontStyle = (fs = self._fontStyle) ? fs : inheritStr;
          s.fontSize = (fsz = self._fontSize) ? fsz : inheritStr;
        }
        _.forEach(self._children, function(c) {
          c.tick();
        });
      };
      BaseComponent.prototype._handleThemeChanged = function() {};
      BaseComponent.prototype._handleLocaleChanged = function() {};
      BaseComponent.prototype._measure = function() {};
      BaseComponent.prototype._setupConf = function(conf) {
        var self;
        self = this;
        conf.themeManager = self._themeManager;
        conf.localeManager = self._localeManager;
        return conf;
      };
      BaseComponent.prototype.__addChild = function(component, prepend) {
        var self;
        null == prepend && (prepend = !1);
        self = this;
        component.parent = self;
        if (prepend) {
          self._children.length > 0 ? prependChild(self._domContainer, component.domContainer) : appendChild(self._domContainer, component.domContainer);
          self._children.unshift(component);
        } else {
          appendChild(self._domContainer, component.domContainer);
          self._children.push(component);
        }
        self._childAddedFlag = !0;
        self.invalidatePropsAndDisplayList();
        component.attach();
        return component;
      };
      BaseComponent.prototype.initLifecyle = function() {
        var self;
        self = this;
        if (!self._alreadyInitialized) {
          self._createChildren();
          self._handleThemeChanged();
          self._handleLocaleChanged();
          self._initBindings();
          this instanceof CanvasBasedComponent && self._registerCanvas();
          self.invalidateProperties();
          self.invalidateSize();
          self.invalidateDisplayList();
          self._initCompleted();
          self._alreadyInitialized = !0;
          return self;
        }
      };
      BaseComponent.prototype._initCompleted = function() {};
      BaseComponent.prototype._resetPropFlags = function() {
        var self;
        self = this;
        self._localeChangedFlag = self._parentChangedFlag = self._invalidatePropertiesFlag = self._themeChangedFlag = self._widthChangedFlag = self._heightChangedFlag = self._domContainerStyleWidthChangedFlag = self._domContainerStyleHeightChangedFlag = self._invalidateDisplayListFlag = self._childAddedFlag = self._childRemovedFlag = self._fontChangedFlag = !1;
      };
      BaseComponent.prototype._addEventListener = function(type, listener, useCapture) {
        var self;
        self = this;
        return self._addEventListenerFor(self._domContainer, type, listener, useCapture);
      };
      BaseComponent.prototype._addEventListenerFor = function(elmt, type, listener, useCapture) {
        this._mouseListeners.push({
          elmt: elmt,
          type: type,
          listener: listener,
          useCapture: useCapture
        });
        return elmt.addEventListener(type, listener, useCapture);
      };
      BaseComponent.prototype._removeEventListener = function(type, listener, useCapture) {
        var self;
        self = this;
        return self._removeEventListenerFor(self._domContainer, type, listener, useCapture);
      };
      BaseComponent.prototype._removeEventListenerFor = function(elmt, type, listener, useCapture) {
        return elmt.removeEventListener(type, listener, useCapture);
      };
      BaseComponent.prototype._localX = function(e) {
        return e.pageX - this._domContainer.getBoundingClientRect().left;
      };
      BaseComponent.prototype._dragStarted = function(e, mousedownPageX, mousedownPageY) {
        var self;
        self = this;
        self._dragStartPoint = new Point(mousedownPageX, mousedownPageY);
        self.dragStartedSignal.dispatch(e, mousedownPageX, mousedownPageY);
      };
      BaseComponent.prototype._dragMoved = function(e, pageX, pageY) {
        var self;
        self = this;
        self._dragDelta = new Point(pageX - self._dragStartPoint.x, pageY - self._dragStartPoint.y);
        self.dragMovedSignal.dispatch(e, pageX, pageY);
      };
      BaseComponent.prototype._dragEnded = function(e, pageX, pageY) {
        var self;
        self = this;
        self.dragEndedSignal.dispatch(e, pageX, pageY);
        self._dragStartPoint = null;
        self._dragDelta = null;
      };
      mouseEventFromTouch = function(type, touch) {
        var e;
        e = new MouseEvent(type, {
          canBubble: !0,
          cancelable: !0,
          view: window,
          detail: 1,
          screenX: touch.screenX,
          screenY: touch.screenY,
          clientX: touch.clientX,
          clientY: touch.clientY,
          ctrlKey: !1,
          altKey: !1,
          shiftKey: !1,
          metaKey: !1,
          button: 0,
          relatedTarget: null
        });
        e.__fromTouch = !0;
        return e;
      };
      preventDefault = function(fn) {
        return function(e) {
          e.preventDefault && e.preventDefault();
          fn(e);
        };
      };
      stopImmediatePropagation = function(fn) {
        return function(e) {
          e.stopImmediatePropagation && e.stopImmediatePropagation();
          fn(e);
        };
      };
      identity = function(fn) {
        return function(e) {
          fn(e);
        };
      };
      firstTouch = function(e) {
        return e.changedTouches[0];
      };
      BaseComponent.prototype._enableDnd = function(elmt) {
        var fn, mousedown, mousedownPageX, mousedownPageY, mousemove, mouseup, self, sip, touchIsSupported, touchcancel, touchend, touchmove, touchstart, win, _clean, _mousedown, _mousemove, _mouseup;
        null == elmt && (elmt = this._domContainer);
        self = this;
        touchIsSupported = Detect.touchIsSupported;
        win = window;
        mousedownPageX = null;
        mousedownPageY = null;
        mousedown = null;
        mousemove = null;
        mouseup = null;
        touchstart = null;
        touchmove = null;
        touchend = null;
        touchcancel = null;
        _clean = function() {
          mousedownPageX = null;
          mousedownPageY = null;
          win.removeEventListener("mousemove", mousemove);
          win.removeEventListener("mouseup", mouseup);
          if (touchIsSupported) {
            win.removeEventListener("touchmove", touchmove);
            win.removeEventListener("touchend", touchend);
            return win.removeEventListener("touchcancel", touchcancel);
          }
        };
        _mousemove = function(e, pageX, pageY) {
          if (!self._dragging) {
            self._dragging = !0;
            self._dragStarted(e, mousedownPageX, mousedownPageY);
          }
          e.preventDefault();
          self._dragMoved(e, pageX, pageY);
        };
        _mouseup = function(e, pageX, pageY) {
          var dragOccured;
          dragOccured = self._dragging;
          self._dragging = !1;
          _clean();
          dragOccured && self._dragEnded(e, pageX, pageY);
        };
        _mousedown = function(e, pageX, pageY) {
          if (0 === e.button) {
            self._dragging && _mouseup(e, pageX, pageY);
            if (null === mousedownPageX) {
              mousedownPageX = pageX;
              mousedownPageY = pageY;
              if (e.__fromTouch) {
                self._addEventListenerFor(win, "touchmove", touchmove = preventDefault(function(e) {
                  var e2;
                  e2 = mouseEventFromTouch("mousemove", firstTouch(e));
                  _mousemove(e2, e2.pageX, e2.pageY);
                }));
                self._addEventListenerFor(win, "touchend", touchend = function(e) {
                  var e2;
                  e2 = mouseEventFromTouch("mouseup", firstTouch(e));
                  _mouseup(e2, e2.pageX, e2.pageY);
                });
                self._addEventListenerFor(win, "touchcancel", touchcancel = function(e) {
                  var e2;
                  e2 = mouseEventFromTouch("mouseup", firstTouch(e));
                  _mouseup(e2, e2.pageX, e2.pageY);
                });
              } else {
                self._addEventListenerFor(win, "mousemove", mousemove = function(e) {
                  _mousemove(e, e.pageX, e.pageY);
                });
                self._addEventListenerFor(win, "mouseup", mouseup = function(e) {
                  _mouseup(e, e.pageX, e.pageY);
                });
              }
            }
          }
        };
        sip = self._dndMouseDownStopImmediatePropagation;
        fn = sip ? stopImmediatePropagation : identity;
        self._addEventListenerFor(elmt, "mousedown", mousedown = fn(function(e) {
          _mousedown(e, e.pageX, e.pageY);
        }));
        touchIsSupported && self._addEventListenerFor(elmt, "touchstart", touchstart = fn(function(e) {
          elmt.dispatchEvent(mouseEventFromTouch("mousedown", firstTouch(e)));
        }));
      };
      BaseComponent.prototype._computeRolloverTextColor = function(percent, targetColor, sourceAlpha) {
        var b, g, p, r, _ref2;
        _ref2 = hexToRgb(targetColor), r = _ref2.r, g = _ref2.g, b = _ref2.b;
        p = percent;
        return "rgba(" + Math.round(255 - (255 - r) * p) + "," + Math.round(255 - (255 - g) * p) + "," + Math.round(255 - (255 - b) * p) + ", " + Math.round(100 * (sourceAlpha + (1 - sourceAlpha) * p)) / 100 + ")";
      };
      BaseComponent.prototype._i18n = function(key) {
        var self;
        self = this;
        return self._localeManager.locale.i18n(key);
      };
      return BaseComponent;
    }();
    Component = function(_super) {
      function Component(conf) {
        Component.__super__.constructor.call(this, conf);
      }
      __extends(Component, _super);
      Component.prototype._addChild = function(clazz, conf, prepend) {
        var component, self;
        self = this;
        self._setupConf(conf);
        component = new clazz(conf);
        self.__addChild(component, prepend);
        component.initLifecyle();
        return component;
      };
      Component.prototype._addButton = function(name, iconClass, title, backgroundColor, accentColor, clickHandler) {
        var self;
        self = this;
        return self._addChild(Button, {
          name: name,
          iconClass: iconClass,
          title: title,
          backgroundColor: backgroundColor,
          accentColor: accentColor,
          clickHandler: clickHandler
        });
      };
      Component.prototype._addIcon = function(iconClass) {
        var self;
        self = this;
        return self._addChild(Icon, {
          iconClass: iconClass,
          fontSize: "14px"
        });
      };
      Component.prototype._addLabel = function(i18nKey) {
        var self;
        self = this;
        return self._addChild(Label, {
          text: i18nKey
        });
      };
      Component.prototype._addComponent = function(name) {
        var self;
        self = this;
        return self._addChild(Component, {
          name: name
        });
      };
      return Component;
    }(BaseComponent);
    Scrollbar = function(_super) {
      function Scrollbar(conf) {
        var self;
        Scrollbar.__super__.constructor.call(this, conf);
        self = this;
        self._handle = null;
        self._dndMouseDownStopImmediatePropagation = !0;
        self._mousedownY = null;
        self._mousedownHandleTop = null;
        self._handleTop = 0;
        self._handleTopChangedFlag = !1;
        self._handleHeight = MIN_HANDLE_HEIGHT;
        self._handleHeightChangedFlag = !1;
        self.percentPositionChanged = new Signal();
      }
      var MIN_HANDLE_HEIGHT, appendChild, elmt, getter, oldBodyCursor, setter, _ref;
      __extends(Scrollbar, _super);
      _ref = gs(Scrollbar), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      MIN_HANDLE_HEIGHT = 20;
      Scrollbar.WIDTH = MIN_HANDLE_HEIGHT;
      getter("handleTop", function() {
        return this._handleTop;
      });
      setter("handleTop", function(pHandleTop) {
        var handleTop, self;
        self = this;
        handleTop = self._normalizedHandleTop(pHandleTop);
        if (self._handleTop !== handleTop) {
          self._handleTop = handleTop;
          self.percentPositionChanged.dispatch(self.percentPosition);
          self._handleTopChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("handleHeight", function() {
        return this._handleHeight;
      });
      setter("handleHeight", function(pHandleHeight) {
        var handleHeight, self;
        self = this;
        handleHeight = self._normalizedHandleHeight(pHandleHeight);
        if (self._handleHeight !== handleHeight) {
          self._handleHeight = handleHeight;
          self._handleHeightChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("percentPosition", function() {
        var denom, self;
        self = this;
        denom = self.height - self._handleHeight;
        return 0 === denom ? 0 : self._handleTop / (self.height - self._handleHeight);
      });
      Scrollbar.prototype._createChildren = function() {
        var s, self;
        Scrollbar.__super__._createChildren.call(this);
        self = this;
        s = self.domStyle;
        s.position = "relative";
        s.overflow = "hidden";
        s.backgroundColor = self.p400;
        s.boxShadow = "inset 1px 0px 3px #404040";
        s.boxSizing = "border-box";
        s.borderLeftColor = self.p200;
        self.domStyle.height = "100%";
        self.domStyle.width = "20px";
        self._createHandle();
      };
      Scrollbar.prototype._createHandle = function() {
        var hd, s, self;
        self = this;
        hd = self._handle = elmt("div", "handle");
        self._enableDnd(hd);
        s = hd.style;
        s.position = "absolute";
        s.width = "100%";
        s.height = MIN_HANDLE_HEIGHT + PX;
        s.top = "0px";
        s.boxShadow = "0px -1px 3px #404040, 0px 1px 3px #404040";
        s.background = self.p500;
        s.cursor = "pointer";
        hd.addEventListener("mouseenter", function() {
          self._dragging || (s.background = self.p600);
        });
        hd.addEventListener("mouseleave", function() {
          self._dragging || (s.background = self.p500);
        });
        appendChild(self._domContainer, hd);
      };
      Scrollbar.prototype._updateDisplayList = function() {
        var domContainerStyle, s, self;
        Scrollbar.__super__._updateDisplayList.call(this);
        self = this;
        domContainerStyle = self.domStyle;
        s = self._handle.style;
        self._handleTopChangedFlag && (s.top = self._handleTop + PX);
        if (self._handleHeightChangedFlag) {
          s.height = self._handleHeight + PX;
          domContainerStyle.visibility = self._handleHeight === self.height ? "hidden" : "visible";
        }
      };
      Scrollbar.prototype._handleThemeChanged = function() {
        var hd, s, self;
        Scrollbar.__super__._handleThemeChanged.call(this);
        self = this;
        hd = self._handle;
        s = hd.style;
        s.background = self.p500;
        s = self.domStyle;
        s.background = self.p400;
      };
      Scrollbar.prototype._resetPropFlags = function() {
        var self;
        Scrollbar.__super__._resetPropFlags.call(this);
        self = this;
        self._handleTopChangedFlag = !1;
        self._handleHeightChangedFlag = !1;
      };
      oldBodyCursor = null;
      Scrollbar.prototype._dragStarted = function(e, mousedownPageX, mousedownPageY) {
        var h, s, self;
        Scrollbar.__super__._dragStarted.call(this, e, mousedownPageX, mousedownPageY);
        self = this;
        self._handle.style.background = self.pa700;
        h = self._handle;
        self._mousedownY = mousedownPageY;
        self._mousedownHandleTop = h.offsetTop;
        self._handle.style.cursor = "move";
        oldBodyCursor = (s = document.body.style).cursor;
        s.cursor = "move";
      };
      Scrollbar.prototype._dragMoved = function(e, pageX, pageY) {
        var self;
        Scrollbar.__super__._dragMoved.call(this, e, pageX, pageY);
        self = this;
        e.stopImmediatePropagation();
        self.handleTop = pageY - self._mousedownY + self._mousedownHandleTop;
      };
      Scrollbar.prototype._dragEnded = function(e, pageX, pageY) {
        var self;
        self = this;
        self._handle.style.background = self.p600;
        self._handle.style.cursor = "pointer";
        document.body.style.cursor = oldBodyCursor;
        Scrollbar.__super__._dragEnded.call(this, e, pageX, pageY);
      };
      Scrollbar.prototype._normalizedHandleTop = function(handleTop) {
        var self;
        self = this;
        return 0 > handleTop ? 0 : self.handleHeight + handleTop > self.height ? self.height - self.handleHeight : handleTop;
      };
      Scrollbar.prototype._normalizedHandleHeight = function(handleHeight) {
        var self;
        self = this;
        return handleHeight > self.height ? self.height : MIN_HANDLE_HEIGHT > handleHeight ? MIN_HANDLE_HEIGHT : handleHeight;
      };
      return Scrollbar;
    }(Component);
    PoolBasedComponent = function(_super) {
      function PoolBasedComponent(conf) {
        PoolBasedComponent.__super__.constructor.call(this, conf);
      }
      var _unusedInstances, _unusedInstancesOf;
      __extends(PoolBasedComponent, _super);
      _unusedInstances = {};
      _unusedInstancesOf = function(className) {
        var unusedInstancesOf;
        unusedInstancesOf = _unusedInstances[className];
        if (!unusedInstancesOf) {
          unusedInstancesOf = [];
          _unusedInstances[className] = unusedInstancesOf;
        }
        return unusedInstancesOf;
      };
      PoolBasedComponent.prototype._removeChild = function(child) {
        var className, unusedInstancesOf;
        PoolBasedComponent.__super__._removeChild.call(this, child);
        className = child.constructor.getName();
        unusedInstancesOf = _unusedInstancesOf(className);
        unusedInstancesOf.push(child);
      };
      PoolBasedComponent.prototype._addChild = function(pChildClass, prepend) {
        var childClass, className, component, conf, self, unusedInstancesOf;
        null == prepend && (prepend = !1);
        self = this;
        childClass = pChildClass instanceof ComponentRendererFactory ? pChildClass.rendererClass : pChildClass;
        className = childClass.getName();
        unusedInstancesOf = _unusedInstancesOf(className);
        if (unusedInstancesOf.length > 0) {
          component = unusedInstancesOf.pop();
          component.resetCache();
          self.__addChild(component, prepend);
          component.invalidatePropsAndDisplayList();
        } else {
          conf = self._provideConf() || {};
          conf.name = camelToDash(className);
          self._setupConf(conf);
          component = new childClass(conf);
          self.__addChild(component, prepend);
          component.initLifecyle();
        }
        return component;
      };
      PoolBasedComponent.prototype._provideConf = function() {
        return null;
      };
      return PoolBasedComponent;
    }(BaseComponent);
    CanvasBasedComponent = function(_super) {
      function CanvasBasedComponent(conf) {
        var self;
        CanvasBasedComponent.__super__.constructor.call(this, conf);
        self = this;
        self.domStyle.position = "relative";
        self._canvasArray = [];
        self._canvasRegistration = null;
        self._drawingSurfaceChangedFlag = !1;
      }
      var appendChild, elmt, getter, setUnselectable, setter, _ref;
      __extends(CanvasBasedComponent, _super);
      _ref = gs(CanvasBasedComponent), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, setUnselectable = CoreFunctions.setUnselectable;
      getter("canvasArray", function() {
        return this._canvasArray;
      });
      CanvasBasedComponent.prototype._registerCanvas = function() {
        var self;
        self = this;
        return self._canvasRegistration = CanvasManager.registerCanvas(self, function() {
          self._drawingSurfaceChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        });
      };
      CanvasBasedComponent.prototype._addCanvas = function(idPrefix) {
        var canvas, s, self;
        self = this;
        canvas = elmt("canvas", idPrefix);
        s = canvas.style;
        s.display = "block";
        s.position = "absolute";
        s.width = "100%";
        s.height = "100%";
        setUnselectable(canvas);
        appendChild(self._domContainer, canvas);
        self._canvasArray.push(canvas);
        return canvas;
      };
      CanvasBasedComponent.prototype._resetPropFlags = function() {
        CanvasBasedComponent.__super__._resetPropFlags.call(this);
        this._drawingSurfaceChangedFlag = !1;
      };
      CanvasBasedComponent.prototype._themeOrSurfaceChangedFlag = function() {
        var self;
        self = this;
        return self._themeChangedFlag || self._drawingSurfaceChangedFlag;
      };
      return CanvasBasedComponent;
    }(Component);
    ListElement = function(_super) {
      function ListElement(conf) {
        var s, self;
        ListElement.__super__.constructor.call(this, conf);
        self = this;
        self.widthFromParent = !0;
        self._isFirst = !1;
        self._isFirstChangedFlag = !1;
        self._isLast = !1;
        self._isLastChangedFlag = !1;
        self._hiddenPercent = 0;
        self._hiddenPercentChangedFlag = !1;
        self._lastComputedTopTicks = null;
        self._lastComputedTop = null;
        self._dataChangedFlag = !1;
        self._rendererFactory = null;
        self._rendererFactoryChangedFlag = !1;
        self._rendererClass = null;
        self._rendererClassChangedFlag = !1;
        self._renderer = null;
        s = self.domStyle;
        s.boxSizing = "border-box";
        s.position = "absolute";
        s.right = "0px";
        s.left = "0px";
      }
      var getter, setter, _ref;
      __extends(ListElement, _super);
      _ref = gs(ListElement), getter = _ref.getter, setter = _ref.setter;
      ListElement.getName = function() {
        return "ListElement";
      };
      getter("rolloverTweened", function() {
        return this._parent.rolloverTweened;
      });
      getter("renderer", function() {
        return this._renderer;
      });
      getter("isFirst", function() {
        return this._isFirst;
      });
      setter("isFirst", function(isFirst) {
        var self;
        self = this;
        if (self._isFirst !== isFirst) {
          self._isFirst = isFirst;
          self._isFirstChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("isLast", function() {
        return this._isLast;
      });
      setter("isLast", function(isLast) {
        var self;
        self = this;
        if (self._isLast !== isLast) {
          self._isLast = isLast;
          self._isLastChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("hiddenPercent", function() {
        return this._hiddenPercent;
      });
      setter("hiddenPercent", function(hiddenPercent) {
        var self;
        self = this;
        if (self._hiddenPercent !== hiddenPercent) {
          self._hiddenPercent = hiddenPercent;
          self._hiddenPercentChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("data", function() {
        return this._data;
      });
      setter("data", function(data) {
        var self;
        self = this;
        if (self._data !== data) {
          self._data && (self._data._dp_visible = !1);
          data && (data._dp_visible = self._isAttached);
          self._data = data;
          self._dataChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("rendererFactory", function() {
        return this._rendererFactory;
      });
      setter("rendererFactory", function(rendererFactory) {
        var self;
        self = this;
        if (self._rendererFactory !== rendererFactory) {
          self._rendererFactory = rendererFactory;
          self._rendererFactoryChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("rendererClass", function() {
        return this._rendererClass;
      });
      setter("rendererClass", function(rendererClass) {
        var self;
        self = this;
        if (self._rendererClass !== rendererClass) {
          self._rendererClass = rendererClass;
          self._rendererClassChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("top", function() {
        var self;
        self = this;
        if (self._ticks !== self._lastComputedTopTicks) {
          self._lastComputedTopTicks = self._ticks;
          return self._lastComputedTop = self._domContainer.offsetTop;
        }
        return self._lastComputedTop;
      });
      ListElement.prototype.attach = function() {
        var self;
        ListElement.__super__.attach.call(this);
        self = this;
        self._data && (self._data._dp_visible = !0);
      };
      ListElement.prototype.detach = function() {
        var self;
        self = this;
        if (self._data) {
          self._data._dp_visible = !1;
          self._data = null;
        }
        ListElement.__super__.detach.call(this);
      };
      ListElement.prototype.isScrollbarVisible = function() {
        var listViewport;
        listViewport = this.parent;
        return listViewport.isScrollbarVisible();
      };
      ListElement.prototype.updateListViewportFromDataRequest = function(req) {
        var listViewport;
        listViewport = this.parent;
        return listViewport.updateFromDataRequest = req;
      };
      ListElement.prototype.toViewLocalCoord = function(y) {
        return y + this._parent.viewportTop + this._domContainer.offsetTop;
      };
      ListElement.prototype.resetCache = function() {
        ListElement.__super__.resetCache.call(this);
        this._lastComputedTopTicks = null;
        this._lastComputedTop = null;
      };
      ListElement.prototype._createChildren = function() {
        ListElement.__super__._createChildren.call(this);
      };
      ListElement.prototype._provideConf = function() {
        return this._rendererFactory.provideConf(this._data);
      };
      ListElement.prototype._commitProperties = function() {
        var self;
        ListElement.__super__._commitProperties.call(this);
        self = this;
        (self._dataChangedFlag || self._rendererFactoryChangedFlag) && (self.rendererClass = self._rendererFactory.provideClass(self._data));
      };
      ListElement.prototype._updateDisplayList = function() {
        var self;
        self = this;
        if (self._rendererClassChangedFlag) {
          self._switchRenderer();
          self._renderer.data = self._data;
          self._renderer.isFirst = self._isFirst;
          self._renderer.isLast = self._isLast;
          self._renderer.hiddenPercent = self._hiddenPercent;
        } else {
          self._dataChangedFlag && (self._renderer.data = self._data);
          self._isFirstChangedFlag && (self._renderer.isFirst = self._isFirst);
          self._isLastChangedFlag && (self._renderer.isLast = self._isLast);
          self._hiddenPercentChangedFlag && (self._renderer.hiddenPercent = self._hiddenPercent);
        }
        ListElement.__super__._updateDisplayList.call(this);
      };
      ListElement.prototype._resetPropFlags = function() {
        var self;
        ListElement.__super__._resetPropFlags.call(this);
        self = this;
        self._isFirstChangedFlag = !1;
        self._isLastChangedFlag = !1;
        self._hiddenPercentChangedFlag = !1;
        self._dataChangedFlag = !1;
        self._rendererClassChangedFlag = !1;
        self._rendererFactoryChangedFlag = !1;
      };
      ListElement.prototype._switchRenderer = function() {
        var self;
        self = this;
        if (self._renderer) {
          self._removeChild(self._renderer);
          self._renderer = null;
        }
        self._rendererClass && (self._renderer = self._addChild(self._rendererClass));
      };
      return ListElement;
    }(PoolBasedComponent);
    ListViewport = function(_super) {
      function ListViewport(conf) {
        var self;
        ListViewport.__super__.constructor.call(this, conf);
        self = this;
        self._dataProvider = null;
        self._dataProviderChangedFlag = !1;
        self._rendererFactory = null;
        self._rendererFactoryChangedFlag = !1;
        self._overallHeight = null;
        self._overallHeightChangedFlag = !1;
        self._mousedownX = null;
        self._mousedownY = null;
        self._dragStartViewportTop = null;
        self._dragStartViewportLeft = null;
        self._viewportTopChangedFlag = !1;
        self._viewportTop = null;
        self._viewportLeftChangedFlag = !1;
        self._viewportLeft = null;
        self._updateFromDataRequest = null;
        self._updateFromDataRequestChangedFlag = !1;
        self.viewportTopChanged = new Signal();
      }
      var getter, oldBodyCursor, setter, sign, _ref;
      __extends(ListViewport, _super);
      _ref = gs(ListViewport), getter = _ref.getter, setter = _ref.setter;
      sign = CoreFunctions.sign;
      getter("rolloverTweened", function() {
        return this._parent.rolloverTweened;
      });
      getter("dataProvider", function() {
        return this._dataProvider;
      });
      setter("dataProvider", function(dataProvider) {
        var self;
        self = this;
        if (dataProvider !== self._dataProvider) {
          self._dataProvider = dataProvider;
          self._dataProviderChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("rendererFactory", function() {
        return this._rendererFactory;
      });
      setter("rendererFactory", function(rendererFactory) {
        var self;
        self = this;
        if (rendererFactory !== self._rendererFactory) {
          self._rendererFactory = rendererFactory;
          self._rendererFactoryChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("overallHeight", function() {
        return this._overallHeight;
      });
      setter("overallHeight", function(overallHeight) {
        var self;
        self = this;
        if (self._overallHeight !== overallHeight) {
          self._overallHeight = overallHeight;
          self._overallHeightChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("viewportTop", function() {
        return this._viewportTop;
      });
      setter("viewportTop", function(pViewportTop) {
        this._setViewportTop(pViewportTop, !1);
      });
      ListViewport.prototype._setViewportTop = function(pViewportTop, force) {
        var self, viewportTop;
        self = this;
        viewportTop = self._normalizedViewportTop(pViewportTop);
        if (viewportTop !== self._viewportTop || force) {
          self._viewportTopChangedFlag = !0;
          self._viewportTop = viewportTop;
          self.viewportTopChanged.dispatch(viewportTop);
          self.invalidatePropsAndDisplayList();
        }
      };
      ListViewport.prototype.forceViewportTopUpdate = function() {
        var self;
        self = this;
        self._viewportTopChangedFlag || self._setViewportTop(self.viewportTop, !0);
      };
      getter("viewportLeft", function() {
        return this._viewportLeft;
      });
      setter("viewportLeft", function(viewportLeft) {
        var self;
        self = this;
        if (viewportLeft !== self._viewportLeft) {
          self._viewportLeftChangedFlag = !0;
          self._viewportLeft = viewportLeft;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("updateFromDataRequest", function() {
        return this._updateFromDataRequest;
      });
      setter("updateFromDataRequest", function(updateFromDataRequest) {
        var self;
        self = this;
        if (updateFromDataRequest !== self._updateFromDataRequest) {
          self._updateFromDataRequestChangedFlag = !0;
          self._updateFromDataRequest = updateFromDataRequest;
          self._parent.updateFromDataRequest = updateFromDataRequest;
          self.invalidatePropsAndDisplayList();
        }
      });
      ListViewport.prototype.isScrollbarVisible = function() {
        return this._overallHeight > this.height;
      };
      ListViewport.prototype._createChildren = function() {
        var s, self;
        ListViewport.__super__._createChildren.call(this);
        self = this;
        s = self.domStyle;
        s.position = "absolute";
        s.height = "100%";
        s.left = "0px";
        s.right = "0px";
        s.cursor = "auto";
        self.parent.wheelSignal.add(self._wheel, this);
        self.parent.dragStartedSignal.add(self._parentDragStarted, this);
        self.parent.dragMovedSignal.add(self._parentDragMoved, this);
        self.parent.dragEndedSignal.add(self._parentDragEnded, this);
      };
      ListViewport.prototype.scrollToPercent = function(percent) {
        var self;
        self = this;
        self.viewportTop = Math.round(-((self._overallHeight - self.height) * percent));
      };
      ListViewport.prototype.scrollToData = function(toData) {
        var data, dp, it, lastHeight, self, viewportTop;
        self = this;
        dp = self._dataProvider;
        it = dp.iterator();
        viewportTop = 0;
        data = null;
        lastHeight = null;
        for (;data !== toData; ) {
          data = it.next();
          viewportTop += lastHeight = self._rendererFactory.computeDataUiHeight(data);
        }
        self.viewportTop = -viewportTop + lastHeight;
      };
      ListViewport.prototype._updateDisplayList = function() {
        var data, dp, i, inclusive, k, kids, len, parentHeight, parentHeightChanged, request, self;
        self = this;
        dp = self._dataProvider;
        if (!dp) return ListViewport.__super__._updateDisplayList.call(this);
        parentHeight = self._parent.height;
        parentHeightChanged = self._parent._heightChangedFlag;
        parentHeightChanged && self._updateRightPosition();
        if (self._dataProviderChangedFlag) {
          self._handleDataProviderChanged(parentHeight, dp);
          self._updateChildrenMetadata();
          ListViewport.__super__._updateDisplayList.call(this);
        } else if (self._rendererFactoryChangedFlag && self._children.length > 0) {
          self._handleRendererFactoryChanged(parentHeight, dp);
          self._updateChildrenMetadata();
          ListViewport.__super__._updateDisplayList.call(this);
        } else if (self._viewportTopChangedFlag || parentHeightChanged) {
          self._handleDiffRendering(parentHeight, dp);
          self._updateChildrenMetadata();
          ListViewport.__super__._updateDisplayList.call(this);
        } else if (self._updateFromDataRequestChangedFlag) {
          request = self._updateFromDataRequest;
          self._updateRightPosition();
          data = request.data;
          inclusive = request.inclusive;
          kids = self._children;
          len = kids.length;
          i = len - 1;
          for (;data !== (k = kids[i]).data; ) {
            self._removeChild(k);
            i--;
          }
          inclusive && self._removeChild(k);
          self._handleDiffRendering(parentHeight, dp);
          self._updateChildrenMetadata();
          ListViewport.__super__._updateDisplayList.call(this);
        } else ListViewport.__super__._updateDisplayList.call(this);
      };
      ListViewport.prototype._computeRightPosition = function() {
        var self;
        self = this;
        return self.isScrollbarVisible() ? Scrollbar.WIDTH : 0;
      };
      ListViewport.prototype._updateRightPosition = function() {
        var self;
        self = this;
        self.domStyle.right = self._computeRightPosition() + PX;
      };
      ListViewport.prototype._updateChildrenMetadata = function() {
        var i, k, kHeight, kids, len, self, _results;
        self = this;
        kids = self._children;
        len = kids.length;
        i = 0;
        _results = [];
        for (;len > i; ) {
          k = kids[i];
          if (i === len - 1) {
            k.isLast = !0;
            kHeight = self._rendererFactory.computeDataUiHeight(k.data);
            k.hiddenPercent = (kHeight - (self.height - self._localYToParentY(k.top))) / kHeight;
          } else if (0 === i) {
            k.isFirst = !0;
            k.isLast = i === len - 1;
            k.hiddenPercent = 0;
          } else {
            k.hiddenPercent = 0;
            k.isFirst = !1;
            k.isLast = !1;
          }
          _results.push(i++);
        }
        return _results;
      };
      ListViewport.prototype._resetPropFlags = function() {
        var self;
        ListViewport.__super__._resetPropFlags.call(this);
        self = this;
        self._dataProviderChangedFlag = !1;
        self._viewportTopChangedFlag = !1;
        self._viewportLeftChangedFlag = !1;
        self._rendererFactoryChangedFlag = !1;
        self._overallHeightChangedFlag = !1;
        self._updateFromDataRequest = null;
        return self._updateFromDataRequestChangedFlag = !1;
      };
      ListViewport.prototype._removeChild = function(child) {
        ListViewport.__super__._removeChild.call(this, child);
      };
      ListViewport.prototype._addChild = function(childClass, prepend) {
        return ListViewport.__super__._addChild.call(this, childClass, prepend);
      };
      ListViewport.prototype._localYToParentY = function(localTop) {
        return this._viewportTop + localTop;
      };
      ListViewport.prototype._parentYToLocalY = function(parentTop) {
        return -this._viewportTop + parentTop;
      };
      ListViewport.prototype._handleDataProviderChanged = function(parentHeight, dataProvider) {
        var self;
        self = this;
        self._updateRightPosition();
        self.viewportTop = 0;
        self._updateViewportTop();
        self._removeAllChildren();
        dataProvider.first() && self._appendElements(0, parentHeight, dataProvider.iterator());
      };
      ListViewport.prototype._handleRendererFactoryChanged = function(parentHeight, dataProvider) {
        var firstData, it, kBottom, kTop, rendererFactory, self;
        self = this;
        rendererFactory = self._rendererFactory;
        firstData = self._children[0].data;
        self._removeAllChildren();
        self.scrollToData(firstData);
        self._updateViewportTop();
        it = dataProvider.iterator();
        kBottom = self._localYToParentY(rendererFactory.computeDataUiHeight(it.next()));
        for (;0 >= kBottom && it.hasNext(); ) kBottom += rendererFactory.computeDataUiHeight(it.next());
        kTop = kBottom - rendererFactory.computeDataUiHeight(it.current());
        self._appendElements(kTop, parentHeight, dataProvider.iteratorFrom(it.current()));
        self._normalizeViewportTop();
      };
      ListViewport.prototype._handleDiffRendering = function(parentHeight, dataProvider) {
        var data, it, k0, k0Data, k0Top, kBottom, kLen, kLenBottom, kLenData, kLenHeight, kLenTop, kTop, kids, len, rendererFactory, self;
        self = this;
        rendererFactory = self._rendererFactory;
        self._updateViewportTop();
        kids = self._children;
        len = kids.length;
        k0 = kids[0];
        if (k0) {
          k0Data = k0.data;
          k0Top = self._localYToParentY(k0.top);
          kLen = kids[len - 1];
          kLenData = kLen.data;
          kLenTop = self._localYToParentY(kLen.top);
          kLenHeight = kLen.height;
          kLenBottom = kLenTop + kLenHeight;
          self._removeHiddenChildren();
          len = self._children.length;
          if (0 === len) if (k0Top >= parentHeight) {
            it = dataProvider.iteratorFrom(k0Data);
            it.previous();
            kTop = k0Top;
            for (;kTop >= parentHeight && it.hasPrevious(); ) {
              data = it.previous();
              kTop -= rendererFactory.computeDataUiHeight(data);
            }
            if (parentHeight > kTop) {
              kTop += rendererFactory.computeDataUiHeight(data);
              self._prependElements(kTop, 0, dataProvider.iteratorFrom(data));
            }
          } else {
            it = dataProvider.iteratorFrom(kLenData);
            it.next();
            kBottom = kLenBottom;
            for (;0 >= kBottom && it.hasNext(); ) kBottom += rendererFactory.computeDataUiHeight(it.next());
            if (kBottom > 0) {
              kBottom -= rendererFactory.computeDataUiHeight(it.current());
              self._appendElements(kBottom, parentHeight, dataProvider.iteratorFrom(it.current()));
            }
          } else {
            kids = self._children;
            len = kids.length;
            k0 = kids[0];
            k0Top = self._localYToParentY(k0.top);
            if (k0Top > 0) {
              it = dataProvider.iteratorFrom(k0Data);
              it.previous();
              self._prependElements(k0Top, 0, it);
            } else {
              kLen = kids[len - 1];
              kLenTop = self._localYToParentY(kLen.top);
              kLenHeight = kLen.height;
              kLenBottom = kLenTop + kLenHeight;
              if (parentHeight > kLenBottom && dataProvider.last() !== kLenData) {
                it = dataProvider.iteratorFrom(kLenData);
                it.next();
                self._appendElements(kLenBottom, parentHeight, it);
              }
            }
          }
        }
      };
      ListViewport.prototype._updateViewportTop = function() {
        var s, self, viewportTop;
        self = this;
        viewportTop = self._viewportTop;
        s = self.domStyle;
        return s.top = viewportTop + PX;
      };
      ListViewport.prototype._removeHiddenChildren = function() {
        var i, k, kTop, kids, len, parentHeight, self;
        self = this;
        parentHeight = self._parent.height;
        kids = self._children;
        len = kids.length;
        i = 0;
        for (;len > i; ) {
          k = kids[i];
          kTop = self._localYToParentY(k.top);
          if (kTop + k.height <= 0 || kTop >= parentHeight) {
            self._removeChild(k);
            len--;
          } else i++;
        }
      };
      ListViewport.prototype._prependElements = function(from, to, it) {
        var data, dataHeight, self, topOfLastElementAdded;
        self = this;
        topOfLastElementAdded = from;
        for (;topOfLastElementAdded > to && it.hasPrevious(); ) {
          data = it.previous();
          dataHeight = self._rendererFactory.computeDataUiHeight(data);
          topOfLastElementAdded -= dataHeight;
          self._addAndUpdateElement(!0, self._parentYToLocalY(topOfLastElementAdded), data);
        }
      };
      ListViewport.prototype._appendElements = function(from, to, it) {
        var bottomOfLastElementAdded, data, dataHeight, self;
        self = this;
        bottomOfLastElementAdded = from;
        for (;to > bottomOfLastElementAdded && it.hasNext(); ) {
          data = it.next();
          dataHeight = self._rendererFactory.computeDataUiHeight(data);
          self._addAndUpdateElement(!1, self._parentYToLocalY(bottomOfLastElementAdded), data);
          bottomOfLastElementAdded = dataHeight + bottomOfLastElementAdded;
        }
      };
      ListViewport.prototype._addAndUpdateElement = function(prepend, top, data) {
        var dataHeight, e, rf, s, self;
        self = this;
        rf = self._rendererFactory;
        dataHeight = rf.computeDataUiHeight(data);
        e = self._addChild(ListElement, prepend);
        s = e.domStyle;
        s.top = top + PX;
        s.height = dataHeight + PX;
        e.data = data;
        e.rendererFactory = rf;
      };
      ListViewport.prototype._normalizedViewportTop = function(pViewportTop) {
        var data, diff, dp, firstData, it, k0, k0Top, kBottomSim, kLen, kLenBottom, kLenBottomSim, kLenTop, lastData, parentHeight, self, viewportTop;
        self = this;
        viewportTop = pViewportTop;
        if (0 === self._children.length) return viewportTop;
        if (pViewportTop > 0) viewportTop = 0; else {
          diff = pViewportTop - self._viewportTop;
          parentHeight = self._parent.height;
          dp = self._dataProvider;
          firstData = dp.first();
          lastData = dp.last();
          k0 = self._firstChild();
          k0Top = self._localYToParentY(k0.top);
          kLen = self._lastChild();
          kLenTop = self._localYToParentY(kLen.top);
          kLenBottom = kLenTop + kLen.height;
          kLenBottomSim = kLenBottom + diff;
          if (k0.data === firstData && kLen.data === lastData && parentHeight > kLenBottom - k0Top) viewportTop = 0; else {
            it = dp.iteratorFrom(kLen.data);
            data = it.next();
            kBottomSim = kLenBottomSim;
            for (;parentHeight > kBottomSim && it.hasNext(); ) {
              data = it.next();
              kBottomSim += self._rendererFactory.computeDataUiHeight(data);
            }
            parentHeight > kBottomSim && data === lastData && (viewportTop = parentHeight - self._parentYToLocalY(kBottomSim - diff));
          }
        }
        return Math.round(viewportTop);
      };
      ListViewport.prototype._normalizeViewportTop = function() {
        var self;
        self = this;
        self.viewportTop = self._viewportTop;
      };
      ListViewport.prototype._wheel = function(e) {
        var dY;
        dY = e.deltaY;
        this.viewportTop -= 25 * sign(dY);
      };
      oldBodyCursor = null;
      ListViewport.prototype._parentDragStarted = function() {
        var c, s, self;
        self = this;
        c = self._domContainer;
        self._dragStartViewportLeft = c.offsetLeft;
        self._dragStartViewportTop = c.offsetTop;
        self.domStyle.cursor = "move";
        oldBodyCursor = (s = document.body.style).cursor;
        s.cursor = "move";
      };
      ListViewport.prototype._parentDragMoved = function() {
        var self;
        self = this;
        self.viewportLeft = self._dragStartViewportLeft + self._parent.dragDelta.x;
        self.viewportTop = self._dragStartViewportTop + self._parent.dragDelta.y;
      };
      ListViewport.prototype._parentDragEnded = function() {
        var self;
        self = this;
        self._dragStartViewportLeft = null;
        self._dragStartViewportTop = null;
        self.domStyle.cursor = "auto";
        document.body.style.cursor = oldBodyCursor;
      };
      return ListViewport;
    }(PoolBasedComponent);
    ListView = function(_super) {
      function ListView(conf) {
        var self;
        ListView.__super__.constructor.call(this, conf);
        self = this;
        self._enableDnd();
        self._dataProvider = null;
        self._dataProviderChangedFlag = !1;
        self._rendererFactoryChangedFlag = !1;
        self.rendererFactory = conf.rendererFactory;
        self._overallHeight = null;
        self._overallHeightChangedFlag = !1;
        self._updateFromDataRequest = null;
        self._updateFromDataRequestChangedFlag = !1;
        self._listViewport = null;
        self._scrollbar = null;
        self.wheelSignal = new Signal();
        self.rolloverTweened = new Signal();
      }
      var computeOverallHeight, getter, setter, _ref;
      __extends(ListView, _super);
      _ref = gs(ListView), getter = _ref.getter, setter = _ref.setter;
      computeOverallHeight = function(dataProvider, rendererFactory) {
        var data, it, overallHeight;
        it = dataProvider.iterator();
        overallHeight = 0;
        for (;it.hasNext(); ) {
          data = it.next();
          overallHeight += rendererFactory.computeDataUiHeight(data);
        }
        return overallHeight;
      };
      getter("listElements", function() {
        return this._listViewport.children;
      });
      getter("renderers", function() {
        return _.map(this.listElements, function(listElement) {
          return listElement.renderer;
        });
      });
      getter("dataProvider", function() {
        return this._dataProvider;
      });
      setter("dataProvider", function(dataProvider) {
        var self;
        self = this;
        if (self._dataProvider !== dataProvider) {
          self._dataProvider = dataProvider;
          self._dataProviderChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("overallHeight", function() {
        return this._overallHeight;
      });
      setter("overallHeight", function(overallHeight) {
        var self;
        self = this;
        if (self._overallHeight !== overallHeight) {
          self._overallHeight = overallHeight;
          self._overallHeightChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("rendererFactory", function() {
        return this._rendererFactory;
      });
      setter("rendererFactory", function(rendererFactory) {
        var self;
        self = this;
        if (self._rendererFactory !== rendererFactory) {
          self._rendererFactoryChangedFlag = !0;
          self._rendererFactory = rendererFactory;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("updateFromDataRequest", function() {
        return this._updateFromDataRequest;
      });
      setter("updateFromDataRequest", function(updateFromDataRequest) {
        var self;
        self = this;
        if (updateFromDataRequest !== self._updateFromDataRequest) {
          self._updateFromDataRequestChangedFlag = !0;
          self._updateFromDataRequest = updateFromDataRequest;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("viewportTop", function() {
        return this._listViewport.viewportTop;
      });
      getter("viewportLeft", function() {
        return this._listViewport.viewportLeft;
      });
      ListView.prototype._initCompleted = function() {
        var onTickerTick, self, tick;
        self = this;
        tick = 0;
        onTickerTick = function() {
          if (!Ticker.paused && tick++ % 30 === 0) {
            tick = 1;
            self.height;
          }
        };
        Ticker.addTickListener(onTickerTick);
      };
      ListView.prototype._createChildren = function() {
        var s, self;
        ListView.__super__._createChildren.call(this);
        self = this;
        s = self.domStyle;
        s.position = "relative";
        s.overflow = "hidden";
        self._createListViewport();
        self._createScrollbar();
      };
      ListView.prototype._createListViewport = function() {
        var self;
        self = this;
        self._listViewport = self._addChild(ListViewport, {
          name: "list-viewport"
        });
        self._listViewport.viewportTopChanged.add(self._listViewportTopChanged, this);
        window.addWheelListener(self._domContainer, function(e) {
          e.preventDefault();
          self.wheelSignal.dispatch(e);
        });
      };
      ListView.prototype._createScrollbar = function() {
        var domContainer, self, style;
        self = this;
        self._scrollbar = self._addChild(Scrollbar, {
          name: "scrollbar"
        });
        domContainer = self._scrollbar.domContainer;
        style = domContainer.style;
        style.position = "absolute";
        style.top = 0;
        style.bottom = 0;
        style.right = 0;
        self._scrollbar.percentPositionChanged.add(self._scrollbarPercentPositionChanged, this);
      };
      ListView.prototype._commitProperties = function() {
        var self;
        ListView.__super__._commitProperties.call(this);
        self = this;
        (self._dataProviderChangedFlag || self._rendererFactoryChangedFlag || self._updateFromDataRequestChangedFlag) && self._dataProvider && (self.overallHeight = computeOverallHeight(self._dataProvider, self._rendererFactory));
      };
      ListView.prototype._updateDisplayList = function() {
        var dp, h, lv, oh, sb, self;
        self = this;
        sb = self._scrollbar;
        dp = self._dataProvider;
        oh = self._overallHeight;
        h = self.height;
        lv = self._listViewport;
        if (self._dataProviderChangedFlag) {
          lv.dataProvider = dp;
          sb.handleTop = 0;
        }
        self._overallHeightChangedFlag && (lv.overallHeight = oh);
        if (self._overallHeightChangedFlag || self._heightChangedFlag) {
          lv.invalidatePropsAndDisplayList();
          sb.handleHeight = 0 === oh ? h : h / oh * h;
        }
        self._rendererFactoryChangedFlag && (lv.rendererFactory = self._rendererFactory);
        ListView.__super__._updateDisplayList.call(this);
      };
      ListView.prototype._resetPropFlags = function() {
        var self;
        ListView.__super__._resetPropFlags.call(this);
        self = this;
        self._dataProviderChangedFlag = !1;
        self._rendererFactoryChangedFlag = !1;
        self._overallHeightChangedFlag = !1;
        self._updateFromDataRequest = null;
        self._updateFromDataRequestChangedFlag = !1;
      };
      ListView.prototype._listViewportTopChanged = function(viewportTop) {
        var denom, h, sb, self;
        self = this;
        sb = self._scrollbar;
        h = self.height;
        denom = self._overallHeight - self.height;
        sb.handleTop = 0 === denom ? 0 : -viewportTop / denom * (h - sb.handleHeight);
      };
      ListView.prototype._scrollbarPercentPositionChanged = function(percent) {
        this._listViewport.scrollToPercent(percent);
      };
      return ListView;
    }(Component);
    Button = function(_super) {
      function Button(conf) {
        var self;
        Button.__super__.constructor.call(this, conf);
        self = this;
        self._title = conf.title;
        self._clickHandler = conf.clickHandler;
        self._iconClass = conf.iconClass;
        self._backgroundColor = conf.backgroundColor;
        self._accentColor = conf.accentColor;
        self.disableBackgroundTweening = conf.disableBackgroundTweening;
        self._i = null;
        self._rolloverTweener = new RolloverTweener();
        self._rolloverTweener.rolloverTweened.add(self._rolloverTweened, this);
        self._rolloverChangedFlag = !1;
      }
      var getter, setter, _ref;
      __extends(Button, _super);
      _ref = gs(Button), getter = _ref.getter, setter = _ref.setter;
      setter("iconClass", function(iconClass) {
        var self;
        self = this;
        self._iconClass = iconClass;
        self._i.domContainer.className = iconClass;
      });
      Button.prototype._createChildren = function() {
        var c, id, s, self, tweener;
        Button.__super__._createChildren.call(this);
        self = this;
        tweener = self._rolloverTweener;
        id = self.id;
        c = self._domContainer;
        s = self.domStyle;
        s.position = "relative";
        s.display = "inline-block";
        s.boxSizing = "border-box";
        s.outline = "none";
        s.border = "0px";
        s.margin = "0px";
        s.padding = "7px 7px 7px 7px";
        s.height = "28px";
        s.cursor = "pointer";
        s.textAlign = "center";
        s.lineHeight = "14px";
        if (!Detect.touchIsSupported) {
          self._addEventListenerFor(c, "mouseenter", function() {
            tweener._tweenMouseover(id);
          });
          self._addEventListenerFor(c, "mouseleave", function() {
            tweener._tweenMouseout(id);
          });
        }
        self._addEventListenerFor(c, "click", self._clickHandler);
        self._i = self._addIcon(self._iconClass);
      };
      Button.prototype._handleLocaleChanged = function() {
        var c, self;
        Button.__super__._handleLocaleChanged.call(this);
        self = this;
        c = self._domContainer;
        self._title && (c.title = self._i18n(self._title));
      };
      Button.prototype._updateDisplayList = function() {
        var self;
        Button.__super__._updateDisplayList.call(this);
        self = this;
        self._rolloverChangedFlag && self._handleRolloverChanged();
      };
      Button.prototype._handleThemeChanged = function() {
        var s, self;
        Button.__super__._handleThemeChanged.call(this);
        self = this;
        s = self.domStyle;
        s.backgroundColor = self[self._backgroundColor];
        s.color = self[self._backgroundColor + "txt"].primary(1);
      };
      Button.prototype._handleRolloverChanged = function() {
        var perc, self, style, tweening, tweenings;
        self = this;
        tweenings = self._rolloverTweener.tweenings;
        style = self.domStyle;
        if (tweening = tweenings[self.id]) {
          perc = tweening.percent;
          self.disableBackgroundTweening || (style.backgroundColor = "rgba(255, 255, 255, " + perc + ")");
          return style.color = perc > 0 ? self._computeRolloverTextColor(perc, self[self._accentColor], .87) : self[self._backgroundColor + "txt"].primary(1);
        }
        return this._handleThemeChanged();
      };
      Button.prototype._rolloverTweened = function() {
        var self;
        self = this;
        self._rolloverChangedFlag = !0;
        self.invalidatePropsAndDisplayList();
      };
      Button.prototype._resetPropFlags = function() {
        var self;
        Button.__super__._resetPropFlags.call(this);
        self = this;
        self._rolloverChangedFlag = !1;
      };
      return Button;
    }(Component);
    MenuBar = function(_super) {
      function MenuBar(conf) {
        var self;
        MenuBar.__super__.constructor.call(this, conf);
        self = this;
        self._backgroundColor = conf.backgroundColor;
        self._accentColor = conf.accentColor;
      }
      var getter, setter, _ref;
      __extends(MenuBar, _super);
      _ref = gs(MenuBar), getter = _ref.getter, setter = _ref.setter;
      MenuBar.prototype._createChildren = function() {
        var c, s, self;
        MenuBar.__super__._createChildren.call(this);
        self = this;
        c = self._domContainer;
        s = c.style;
        s.position = "relative";
        this._createButtons();
      };
      MenuBar.prototype._createButtons = function() {};
      MenuBar.prototype._updateDisplayList = function() {
        var self;
        MenuBar.__super__._updateDisplayList.call(this);
        self = this;
      };
      MenuBar.prototype._handleThemeChanged = function() {
        var s, self;
        MenuBar.__super__._handleThemeChanged.call(this);
        self = this;
        s = self.domStyle;
        s.backgroundColor = self[self._backgroundColor];
      };
      MenuBar.prototype._addButton = function(name, iconClass, title, clickHandler) {
        var self;
        self = this;
        MenuBar.__super__._addButton.call(this, name, iconClass, title, self._backgroundColor, self._accentColor, clickHandler);
      };
      return MenuBar;
    }(Component);
    Panel = function(_super) {
      function Panel(conf) {
        var c, s, self;
        Panel.__super__.constructor.call(this, conf);
        self = this;
        self._title = conf.title;
        self._closeHandler = conf.closeHandler;
        self._ganttChart = conf.ganttChart;
        self._iconClass = conf.iconClass;
        self.tweening = {
          scale: 0,
          opacity: 0
        };
        c = self._domContainer;
        s = c.style;
        s.position = "relative";
        self._headerDiv = null;
        self._headerDivTitle = null;
        self._titleLabel = null;
        self._closeButton = null;
        self._panelContainer = null;
      }
      __extends(Panel, _super);
      Panel.prototype._createChildren = function() {
        var self;
        Panel.__super__._createChildren.call(this);
        self = this;
        self._createHeader();
        self._createPanelContainer();
        self._createPanelContainerChildren(self._panelContainer);
      };
      Panel.prototype._createHeader = function() {
        var cb, cbStyle, h, headerStyle, self;
        self = this;
        self._header = h = self._addChild(Component, {
          name: "panel-header",
          fontSize: "14px",
          fontWeight: "bold"
        });
        headerStyle = h.domStyle;
        headerStyle.textAlign = "center";
        headerStyle.height = "28px";
        headerStyle.lineHeight = "28px";
        self._i = h._addIcon(self._iconClass);
        self._titleLabel = h._addLabel(self._title);
        self._closeButton = cb = h._addButton("close", "icon-tt-cancel", "Close", "p700", "pa400", self._closeHandler);
        cbStyle = cb.domStyle;
        cbStyle.position = "absolute";
        cbStyle.top = "0px";
        return cbStyle.right = "0px";
      };
      Panel.prototype._createPanelContainer = function() {
        var s, self;
        self = this;
        self._panelContainer = self._addComponent("panel-container");
        s = self._panelContainer.domStyle;
        s.position = "absolute";
        s.top = "28px";
        s.left = s.right = s.bottom = "0px";
        s.overflow = "auto";
      };
      Panel.prototype._createPanelContainerChildren = function() {};
      Panel.prototype._updateDisplayList = function() {
        Panel.__super__._updateDisplayList.call(this);
      };
      Panel.prototype._handleThemeChanged = function() {
        var domContainerStyle, headerStyle, panelContainerStyle, self;
        Panel.__super__._handleThemeChanged.call(this);
        self = this;
        headerStyle = self._header.domStyle;
        headerStyle.backgroundColor = self.p700;
        headerStyle.color = self.p700txt.primary(1);
        domContainerStyle = self.domStyle;
        domContainerStyle.backgroundColor = self.p500;
        panelContainerStyle = self._panelContainer.domStyle;
        panelContainerStyle.color = self.p500txt.primary(1);
      };
      Panel.prototype._handleLocaleChanged = function() {
        Panel.__super__._handleLocaleChanged.call(this);
      };
      Panel.prototype._rolloverTweened = function() {
        var self;
        self = this;
        self._rolloverChangedFlag = !0;
        self.invalidatePropsAndDisplayList();
      };
      return Panel;
    }(Component);
    Label = function(_super) {
      function Label(conf) {
        var self;
        conf.domContainerTagName = "span";
        conf.name = "label";
        Label.__super__.constructor.call(this, conf);
        self = this;
        self._text = conf.text;
      }
      var text;
      __extends(Label, _super);
      text = CoreFunctions.text;
      Label.prototype._handleLocaleChanged = function() {
        var self;
        Label.__super__._handleLocaleChanged.call(this);
        self = this;
        text(self._domContainer, self._i18n(self._text));
      };
      return Label;
    }(Component);
    Icon = function(_super) {
      function Icon(conf) {
        var i, iStyle, self;
        conf.domContainerTagName = "i";
        conf.name = "icon";
        Icon.__super__.constructor.call(this, conf);
        self = this;
        self._iconClass = conf.iconClass;
        i = self._domContainer;
        i.className = conf.iconClass;
        iStyle = i.style;
        iStyle.fontSize = "14px";
      }
      __extends(Icon, _super);
      return Icon;
    }(Component);
    ComponentRenderer = function(_super) {
      function ComponentRenderer(conf) {
        this._mouseleave = __bind(this._mouseleave, this);
        this._mouseenter = __bind(this._mouseenter, this);
        var self;
        ComponentRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._isFirst = !1;
        self._isFirstChangedFlag = !1;
        self._isLast = !1;
        self._isLastChangedFlag = !1;
        self._hiddenPercent = 0;
        self._hiddenPercentChangedFlag = !1;
        self._data = null;
        self._dataChangedFlag = !1;
        self._dataPropertyChangedFlag = !1;
        self._currentRolloverTwenning = null;
        self._currentRolloverTwenningChangedFlag = !1;
        self._rolloverTweener = new RolloverTweener();
        self._rolloverTweener.rolloverTweened.add(self._rolloverTweened, this);
      }
      var getter, setter, _ref;
      __extends(ComponentRenderer, _super);
      _ref = gs(ComponentRenderer), getter = _ref.getter, setter = _ref.setter;
      getter("hashCode", function() {
        return this._data.__uid;
      });
      getter("rolloverTweened", function() {
        return this._parent.rolloverTweened;
      });
      getter("isFirst", function() {
        return this._isFirst;
      });
      setter("isFirst", function(isFirst) {
        var self;
        self = this;
        if (self._isFirst !== isFirst) {
          self._isFirst = isFirst;
          self._isFirstChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("currentRolloverTwenning", function() {
        return this._currentRolloverTwenning;
      });
      setter("currentRolloverTwenning", function(currentRolloverTwenning) {
        var self;
        self = this;
        if (self._currentRolloverTwenning !== currentRolloverTwenning) {
          self._currentRolloverTwenning = currentRolloverTwenning;
          self._currentRolloverTwenningChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("isLast", function() {
        return this._isLast;
      });
      setter("isLast", function(isLast) {
        var self;
        self = this;
        if (self._isLast !== isLast) {
          self._isLast = isLast;
          self._isLastChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("hiddenPercent", function() {
        return this._hiddenPercent;
      });
      setter("hiddenPercent", function(hiddenPercent) {
        var self;
        self = this;
        if (self._hiddenPercent !== hiddenPercent) {
          self._hiddenPercent = hiddenPercent;
          self._hiddenPercentChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("data", function() {
        return this._data;
      });
      setter("data", function(data) {
        var oldData, self;
        self = this;
        if (self._data !== data) {
          oldData = self._data;
          oldData && oldData.propertyChanged.remove(self._dataPropertyChanged, self);
          data.propertyChanged.add(self._dataPropertyChanged, self);
          self._data = data;
          self._dataChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      ComponentRenderer.prototype.attach = function() {
        ComponentRenderer.__super__.attach.call(this);
      };
      ComponentRenderer.prototype.detach = function() {
        ComponentRenderer.__super__.detach.call(this);
        this._rolloverTweener.tweenMouseout(this.hashCode);
      };
      ComponentRenderer.prototype.isScrollbarVisible = function() {
        var listElement;
        listElement = this.parent;
        return listElement.isScrollbarVisible();
      };
      ComponentRenderer.prototype.toViewLocalCoord = function(y) {
        var listElement;
        listElement = this.parent;
        return listElement.toViewLocalCoord(y);
      };
      ComponentRenderer.prototype._resetPropFlags = function() {
        var self;
        ComponentRenderer.__super__._resetPropFlags.call(this);
        self = this;
        self._isFirstChangedFlag = !1;
        self._isLastChangedFlag = !1;
        self._hiddenPercentChangedFlag = !1;
        self._dataChangedFlag = !1;
        self._dataPropertyChangedFlag = !1;
        self._currentRolloverTwenningChangedFlag = !1;
      };
      ComponentRenderer.prototype._configureModelBindings = function(enable) {
        ComponentRenderer.__super__._configureModelBindings.call(this, enable);
      };
      ComponentRenderer.prototype._configureUiBindings = function(enable) {
        var c, self;
        ComponentRenderer.__super__._configureUiBindings.call(this, enable);
        self = this;
        c = self._domContainer;
        if (!Detect.touchIsSupported) if (enable) {
          c.addEventListener("mouseenter", self._mouseenter);
          c.addEventListener("mouseleave", self._mouseleave);
        } else {
          c.removeEventListener("mouseenter", self._mouseenter);
          c.removeEventListener("mouseleave", self._mouseleave);
        }
      };
      ComponentRenderer.prototype._mouseenter = function() {
        this._rolloverTweener.tweenMouseover(this.hashCode);
      };
      ComponentRenderer.prototype._mouseleave = function() {
        this._rolloverTweener.tweenMouseout(this.hashCode);
      };
      ComponentRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        this.currentRolloverTwenning = tweening;
      };
      ComponentRenderer.prototype._dataPropertyChanged = function(propName, oldValue, newValue) {
        this._dataPropertyChangedFlag = !0;
        this.invalidatePropsAndDisplayList();
      };
      return ComponentRenderer;
    }(Component);
    ComponentRendererFactory = function() {
      function ComponentRendererFactory() {}
      ComponentRendererFactory.prototype.computeDataUiHeight = function(data) {
        return this.provideClass(data).computeDataUiHeight(data);
      };
      ComponentRendererFactory.prototype.provideClass = function() {
        return null;
      };
      ComponentRendererFactory.prototype.provideConf = function() {
        return {};
      };
      return ComponentRendererFactory;
    }();
    /*
  Exporting common classes
 */
    ns = {};
    !function() {
      ns = {
        Button: Button,
        CanvasBasedComponent: CanvasBasedComponent,
        CanvasManager: CanvasManager,
        CanvasTextMetricProcessor: CanvasTextMetricProcessor,
        Component: Component,
        ComponentRenderer: ComponentRenderer,
        ComponentRendererFactory: ComponentRendererFactory,
        CoreFunctions: CoreFunctions,
        DateUtil: DateUtil,
        DataProvider: DataProvider,
        Detect: Detect,
        DomainModel: DomainModel,
        Drawing: Drawing,
        Ease: Ease,
        Icon: Icon,
        Label: Label,
        ListView: ListView,
        ListViewport: ListViewport,
        LocaleManager: LocaleManager,
        MenuBar: MenuBar,
        Panel: Panel,
        Period: Period,
        PixelRatioManager: PixelRatioManager,
        Point: Point,
        PoolBasedComponent: PoolBasedComponent,
        PX: PX,
        RolloverTweener: RolloverTweener,
        Scrollbar: Scrollbar,
        Theme: Theme,
        ThemeManager: ThemeManager,
        Ticker: Ticker,
        TimeViewport: TimeViewport,
        Tween: Tween,
        _: _,
        Signal: Signal
      };
      return ns;
    }();
    return ns;
  });
}).call(this);
(function() {
  !function(root, factory) {
    if ("function" == typeof define && "object" == typeof define.amd && define.amd) define("tt.timeline", [ "tt.common" ], function(common) {
      root.tt = root.tt || {};
      return root.tt.timeline = factory(common);
    }); else {
      root.tt = root.tt || {};
      root.tt.timeline = factory(root.tt.common);
    }
  }(this, function(common) {
    var BaseTimeline, CanvasBasedComponent, CanvasTextMetricProcessor, Component, CondensedTickDateRendererConfig, Constants, CoreFunctions, DateUtil, Detect, Drawing, Ease, EventDispatcher, Feedback, Period, PeriodBasedComponent, PixelRatioManager, Point, RENDERING_TYPES, RolloverTweener, RowScale, SelectionRegionDrawing, Signal, TickDateRenderer, TickDateRendererFactory, TickDateRendererFactoryManager, TickDateRendererUtil, Ticker, TimeBender, TimeBenderBackground, TimeBenderForeground, TimeScale, TimeScaleTickDateIterator, TimeScaleTickUtil, TimeScalesProvider, TimeViewport, TimeViewportContainer, TimeViewportResizer, TimeViewportResizerRow, TimeViewportRow, Timeline, TimelineLocale, TimelineLocaleManager, TimelineScales, TimelineViewportRow, Tween, TypicalRenderingMetrics, TypicalTextMetrics, getTime, gs, mixin, mixinProto, ns, stringHashCode, _, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    }, __slice = [].slice;
    CoreFunctions = common.CoreFunctions, Detect = common.Detect, DateUtil = common.DateUtil, 
    CanvasTextMetricProcessor = common.CanvasTextMetricProcessor, EventDispatcher = common.EventDispatcher, 
    Period = common.Period, Tween = common.Tween, Ticker = common.Ticker, Ease = common.Ease, 
    Point = common.Point, CanvasBasedComponent = common.CanvasBasedComponent, Drawing = common.Drawing, 
    TimeViewport = common.TimeViewport, Component = common.Component, RolloverTweener = common.RolloverTweener, 
    PixelRatioManager = common.PixelRatioManager, _ = common._, Signal = common.Signal;
    gs = CoreFunctions.gs, mixinProto = CoreFunctions.mixinProto, mixin = CoreFunctions.mixin, 
    getTime = CoreFunctions.getTime, stringHashCode = CoreFunctions.stringHashCode;
    Constants = {
      RENDERING_TYPE_CONDENSED: "condensed",
      RENDERING_TYPE_ICONIC: "iconic"
    };
    RENDERING_TYPES = [ Constants.RENDERING_TYPE_CONDENSED, Constants.RENDERING_TYPE_ICONIC ];
    TimeScale = function() {
      function TimeScale(scaleDepth, dateParamIndex, dateParamIncrement, averageDuration) {
        var self;
        self = this;
        self.scaleDepth = scaleDepth;
        self.dateParamIndex = dateParamIndex;
        self.dateParamIncrement = dateParamIncrement;
        self.averageDuration = averageDuration;
      }
      var TS, depth;
      TS = TimeScale;
      TS.YEAR_PARAM_INDEX = 0;
      TS.MONTH_PARAM_INDEX = 1;
      TS.DATE_PARAM_INDEX = 2;
      TS.HOURS_PARAM_INDEX = 3;
      TS.MINUTES_PARAM_INDEX = 4;
      TS.SECONDS_PARAM_INDEX = 5;
      TS.MILLISECONDS_PARAM_INDEX = 6;
      depth = 0;
      TS.CENTURY_D = depth++;
      TS.HALF_CENTURY_D = depth++;
      TS.QUARTER_OF_A_CENTURY_D = depth++;
      TS.DECADE_D = depth++;
      TS.QUINQUENNIUM_D = depth++;
      TS.YEAR_D = depth++;
      TS.HALF_YEAR_D = depth++;
      TS.QUARTER_OF_A_YEAR_D = depth++;
      TS.MONTH_D = depth++;
      TS.WEEK_D = depth++;
      TS.DATE_D = depth++;
      TS.MORNING_AFTERNOON_D = depth++;
      TS.SIXTH_OF_A_DAY_D = depth++;
      TS.TWELFTH_OF_A_DAY_D = depth++;
      TS.HOUR_D = depth++;
      TS.QUARTER_OF_AN_HOUR_D = depth++;
      TS.SIXTH_OF_AN_HOUR_D = depth++;
      TS.TWELFTH_OF_AN_HOUR_D = depth++;
      TS.MINUTE_D = depth++;
      TS.QUARTER_OF_MINUTE_D = depth++;
      TS.SIXTH_OF_A_MINUTE_D = depth++;
      TS.TWELFTH_OF_A_MINUTE_D = depth++;
      TS.SECOND_D = depth++;
      TS.HALF_OF_SECOND_D = depth++;
      TS.TENTH_OF_A_SECOND_D = depth++;
      TS.TWENTIETH_OF_A_SECOND_D = depth++;
      TS.LIST = [];
      TS.get = function(depth) {
        return TS.LIST[depth];
      };
      return TimeScale;
    }();
    !function(T) {
      var L, construct, paramIndex;
      L = T.LIST;
      construct = function(scaleDepth, dateParamIndex, dateParamIncrement, averageDuration) {
        return L[scaleDepth] = new T(scaleDepth, dateParamIndex, dateParamIncrement, averageDuration);
      };
      paramIndex = T.YEAR_PARAM_INDEX;
      construct(T.CENTURY_D, paramIndex, 100, 31536e8);
      construct(T.HALF_CENTURY_D, paramIndex, 50, 15768e8);
      construct(T.QUARTER_OF_A_CENTURY_D, paramIndex, 25, 7884e8);
      construct(T.DECADE_D, paramIndex, 10, 31536e7);
      construct(T.QUINQUENNIUM_D, paramIndex, 5, 15768e7);
      construct(T.YEAR_D, paramIndex, 1, 31536e6);
      paramIndex = T.MONTH_PARAM_INDEX;
      construct(T.HALF_YEAR_D, paramIndex, 6, 15768e6);
      construct(T.QUARTER_OF_A_YEAR_D, paramIndex, 3, 7884e6);
      construct(T.MONTH_D, paramIndex, 1, 2628e6);
      paramIndex = T.DATE_PARAM_INDEX;
      construct(T.WEEK_D, paramIndex, 7, 6048e5);
      construct(T.DATE_D, paramIndex, 1, 864e5);
      paramIndex = T.HOURS_PARAM_INDEX;
      construct(T.MORNING_AFTERNOON_D, paramIndex, 12, 432e5);
      construct(T.SIXTH_OF_A_DAY_D, paramIndex, 4, 144e5);
      construct(T.TWELFTH_OF_A_DAY_D, paramIndex, 2, 72e5);
      construct(T.HOUR_D, paramIndex, 1, 36e5);
      paramIndex = T.MINUTES_PARAM_INDEX;
      construct(T.QUARTER_OF_AN_HOUR_D, paramIndex, 15, 9e5);
      construct(T.SIXTH_OF_AN_HOUR_D, paramIndex, 10, 6e5);
      construct(T.TWELFTH_OF_AN_HOUR_D, paramIndex, 5, 3e5);
      construct(T.MINUTE_D, paramIndex, 1, 6e4);
      paramIndex = T.SECONDS_PARAM_INDEX;
      construct(T.QUARTER_OF_MINUTE_D, paramIndex, 15, 15e3);
      construct(T.SIXTH_OF_A_MINUTE_D, paramIndex, 10, 1e4);
      construct(T.TWELFTH_OF_A_MINUTE_D, paramIndex, 5, 5e3);
      construct(T.SECOND_D, paramIndex, 1, 1e3);
      paramIndex = T.MILLISECONDS_PARAM_INDEX;
      construct(T.HALF_OF_SECOND_D, paramIndex, 500, 500);
      construct(T.TENTH_OF_A_SECOND_D, paramIndex, 100, 100);
      return construct(T.TWENTIETH_OF_A_SECOND_D, paramIndex, 50, 50);
    }(TimeScale);
    TimeScaleTickUtil = {};
    !function(TSTU) {
      var TS, dateCompare, fcts, getCentury, getCenturyTickDate, getDateTickDate, getDecade, getDecadeTickDate, getHalfCenturyTickDate, getHalfOfSecondTickDate, getHalfYearTickDate, getHourTickDate, getMinuteTickDate, getMonthTickDate, getMorningAfternoonTickDate, getQuarterOfAMinuteTickDate, getQuarterOfAYearTickDate, getQuarterOfAnHourTickDate, getQuarterOfCenturyTickDate, getQuinqueniumTickDate, getSecondTickDate, getSixthOfADayTickDate, getSixthOfAnHourTickDate, getSixthOfMinuteTickDate, getTenthOfASecondTickDate, getTwelfthOfADayTickDate, getTwelfthOfAMinuteTickDate, getTwelfthOfAnHourTickDate, getTwentiethOfASecondTickDate, getWeekTickDate, getYearTickDate;
      TS = TimeScale;
      dateCompare = DateUtil.dateCompare;
      getCentury = function(date) {
        return 100 * Math.floor(date.getFullYear() / 100);
      };
      getDecade = function(date) {
        return 10 * Math.floor(date.getFullYear() / 10);
      };
      getCenturyTickDate = function(date) {
        return new Date(getCentury(date), 0, 1);
      };
      getHalfCenturyTickDate = function(date) {
        var centuryYear, fullYear, yearsInCentury;
        fullYear = date.getFullYear();
        centuryYear = getCentury(date);
        yearsInCentury = fullYear - centuryYear;
        return yearsInCentury >= 50 ? new Date(centuryYear + 50, 0, 1) : new Date(centuryYear, 0, 1);
      };
      getQuarterOfCenturyTickDate = function(date) {
        var centuryYear, fullYear, yearsInCentury;
        fullYear = date.getFullYear();
        centuryYear = getCentury(date);
        yearsInCentury = fullYear - centuryYear;
        return yearsInCentury >= 75 ? new Date(centuryYear + 75, 0, 1) : yearsInCentury >= 50 ? new Date(centuryYear + 50, 0, 1) : yearsInCentury >= 25 ? new Date(centuryYear + 25, 0, 1) : new Date(centuryYear, 0, 1);
      };
      getDecadeTickDate = function(date) {
        return new Date(getDecade(date), 0, 1);
      };
      getQuinqueniumTickDate = function(date) {
        var decadeYear, fullYear, yearsInDecade;
        fullYear = date.getFullYear();
        decadeYear = getDecade(date);
        yearsInDecade = fullYear - decadeYear;
        return yearsInDecade >= 5 ? new Date(decadeYear + 5, 0, 1) : new Date(decadeYear, 0, 1);
      };
      getYearTickDate = function(date) {
        return new Date(date.getFullYear(), 0, 1);
      };
      getHalfYearTickDate = function(date) {
        var halfYear, y;
        y = date.getFullYear();
        halfYear = new Date(y, 6, 1);
        return dateCompare(date, halfYear) < 0 ? new Date(y, 0, 1) : halfYear;
      };
      getQuarterOfAYearTickDate = function(date) {
        var q2, q3, q4, y;
        y = date.getFullYear();
        q2 = new Date(y, 3, 1);
        q3 = new Date(y, 6, 1);
        q4 = new Date(y, 9, 1);
        return dateCompare(date, q2) < 0 ? new Date(y, 0, 1) : dateCompare(date, q3) < 0 ? q2 : dateCompare(date, q4) < 0 ? q3 : q4;
      };
      getMonthTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
      };
      getWeekTickDate = function(date) {
        var d, m, y;
        y = date.getFullYear();
        m = date.getMonth();
        d = date.getDate();
        switch (date.getDay()) {
         case 0:
          return new Date(y, m, d - 6);

         case 1:
          return new Date(y, m, d);

         case 2:
          return new Date(y, m, d - 1);

         case 3:
          return new Date(y, m, d - 2);

         case 4:
          return new Date(y, m, d - 3);

         case 5:
          return new Date(y, m, d - 4);

         case 6:
          return new Date(y, m, d - 5);

         default:
          throw "out of range";
        }
      };
      getDateTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
      };
      getMorningAfternoonTickDate = function(date) {
        var afternoon;
        afternoon = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
        return dateCompare(date, afternoon) < 0 ? new Date(date.getFullYear(), date.getMonth(), date.getDate()) : afternoon;
      };
      getSixthOfADayTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 4 * Math.floor(6 * date.getHours() / 24));
      };
      getTwelfthOfADayTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 2 * Math.floor(12 * date.getHours() / 24));
      };
      getHourTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
      };
      getQuarterOfAnHourTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 15 * Math.floor(4 * date.getMinutes() / 60));
      };
      getSixthOfAnHourTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 10 * Math.floor(6 * date.getMinutes() / 60));
      };
      getTwelfthOfAnHourTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 5 * Math.floor(12 * date.getMinutes() / 60));
      };
      getMinuteTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());
      };
      getQuarterOfAMinuteTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 15 * Math.floor(4 * date.getSeconds() / 60));
      };
      getSixthOfMinuteTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 10 * Math.floor(6 * date.getSeconds() / 60));
      };
      getTwelfthOfAMinuteTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 5 * Math.floor(12 * date.getSeconds() / 60));
      };
      getSecondTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      };
      getHalfOfSecondTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 500 * Math.floor(2 * date.getMilliseconds() / 1e3));
      };
      getTenthOfASecondTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 100 * Math.floor(10 * date.getMilliseconds() / 1e3));
      };
      getTwentiethOfASecondTickDate = function(date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 50 * Math.floor(20 * date.getMilliseconds() / 1e3));
      };
      fcts = new Array();
      fcts[TS.CENTURY_D] = getCenturyTickDate;
      fcts[TS.HALF_CENTURY_D] = getHalfCenturyTickDate;
      fcts[TS.QUARTER_OF_A_CENTURY_D] = getQuarterOfCenturyTickDate;
      fcts[TS.DECADE_D] = getDecadeTickDate;
      fcts[TS.QUINQUENNIUM_D] = getQuinqueniumTickDate;
      fcts[TS.YEAR_D] = getYearTickDate;
      fcts[TS.HALF_YEAR_D] = getHalfYearTickDate;
      fcts[TS.QUARTER_OF_A_YEAR_D] = getQuarterOfAYearTickDate;
      fcts[TS.MONTH_D] = getMonthTickDate;
      fcts[TS.WEEK_D] = getWeekTickDate;
      fcts[TS.DATE_D] = getDateTickDate;
      fcts[TS.MORNING_AFTERNOON_D] = getMorningAfternoonTickDate;
      fcts[TS.SIXTH_OF_A_DAY_D] = getSixthOfADayTickDate;
      fcts[TS.TWELFTH_OF_A_DAY_D] = getTwelfthOfADayTickDate;
      fcts[TS.HOUR_D] = getHourTickDate;
      fcts[TS.QUARTER_OF_AN_HOUR_D] = getQuarterOfAnHourTickDate;
      fcts[TS.SIXTH_OF_AN_HOUR_D] = getSixthOfAnHourTickDate;
      fcts[TS.TWELFTH_OF_AN_HOUR_D] = getTwelfthOfAnHourTickDate;
      fcts[TS.MINUTE_D] = getMinuteTickDate;
      fcts[TS.QUARTER_OF_MINUTE_D] = getQuarterOfAMinuteTickDate;
      fcts[TS.SIXTH_OF_A_MINUTE_D] = getSixthOfMinuteTickDate;
      fcts[TS.TWELFTH_OF_A_MINUTE_D] = getTwelfthOfAMinuteTickDate;
      fcts[TS.SECOND_D] = getSecondTickDate;
      fcts[TS.HALF_OF_SECOND_D] = getHalfOfSecondTickDate;
      fcts[TS.TENTH_OF_A_SECOND_D] = getTenthOfASecondTickDate;
      fcts[TS.TWENTIETH_OF_A_SECOND_D] = getTwentiethOfASecondTickDate;
      return TSTU.getTimeScaleTickDate = function(date, timeScale) {
        return fcts[timeScale.scaleDepth](date);
      };
    }(TimeScaleTickUtil);
    TimeScaleTickDateIterator = function() {
      function TimeScaleTickDateIterator(start, timeScale) {
        var self;
        self = this;
        self.start = start;
        self.timeScale = timeScale;
        self._lastComputedDate = self.start;
        self._nextDateFunction = self._getFirstTickDate;
        self._previousDateFunction = self._getFirstTickDate;
      }
      var computeNextDateParamValue, computePreviousDateParamValue, functions, nextDateFunction, nextFunctions, previousDateFunction, previousFunctions;
      computeNextDateParamValue = function(timeScale, paramValue) {
        return paramValue + timeScale.dateParamIncrement;
      };
      computePreviousDateParamValue = function(timeScale, paramValue) {
        return paramValue - timeScale.dateParamIncrement;
      };
      functions = function(incrementFunction) {
        return [ function(timeScale, date) {
          return new Date(incrementFunction(timeScale, date.getFullYear()), 0, 1);
        }, function(timeScale, date) {
          return new Date(date.getFullYear(), incrementFunction(timeScale, date.getMonth()), 1);
        }, function(timeScale, date) {
          return new Date(date.getFullYear(), date.getMonth(), incrementFunction(timeScale, date.getDate()));
        }, function(timeScale, date) {
          return new Date(date.getFullYear(), date.getMonth(), date.getDate(), incrementFunction(timeScale, date.getHours()));
        }, function(timeScale, date) {
          return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), incrementFunction(timeScale, date.getMinutes()));
        }, function(timeScale, date) {
          return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), incrementFunction(timeScale, date.getSeconds()));
        }, function(timeScale, date) {
          return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), incrementFunction(timeScale, date.getMilliseconds()));
        } ];
      };
      nextFunctions = functions(computeNextDateParamValue);
      previousFunctions = functions(computePreviousDateParamValue);
      nextDateFunction = function(timeScale) {
        return nextFunctions[timeScale.dateParamIndex];
      };
      previousDateFunction = function(timeScale) {
        return previousFunctions[timeScale.dateParamIndex];
      };
      TimeScaleTickDateIterator.prototype.next = function() {
        var self;
        self = this;
        return self._lastComputedDate = self._nextDateFunction(self.timeScale, self._lastComputedDate);
      };
      TimeScaleTickDateIterator.prototype.previous = function() {
        var self;
        self = this;
        return self._lastComputedDate = self._previousDateFunction(self.timeScale, self._lastComputedDate);
      };
      TimeScaleTickDateIterator.prototype._getFirstTickDate = function(timeScale, date) {
        var self;
        self = this;
        self._nextDateFunction = nextDateFunction(timeScale);
        self._previousDateFunction = previousDateFunction(timeScale);
        return TimeScaleTickUtil.getTimeScaleTickDate(date, timeScale);
      };
      return TimeScaleTickDateIterator;
    }();
    TimeScalesProvider = function() {
      function TimeScalesProvider(timelineLocaleManager, tickDateRendererFactoryManagers) {
        var self;
        self = this;
        self._timelineLocaleManager = timelineLocaleManager;
        self._tickDateRendererFactoryManagers = tickDateRendererFactoryManagers;
        self._init();
        self._timelineLocaleManager.localeChanged.add(function() {
          return self._init();
        }).context = this;
      }
      var TSP, ThresholdEntry, fillRowThresholdEntries, initRowThresholdEntries;
      TSP = TimeScalesProvider;
      initRowThresholdEntries = function(tickDateRendererFactory, timeScaleExclusions, rowRendererConfigs) {
        var rowThresholdEntries, timeScale, _i, _len, _ref;
        rowThresholdEntries = [];
        _ref = TimeScale.LIST;
        for (_i = 0, _len = _ref.length; _len > _i; _i++) {
          timeScale = _ref[_i];
          -1 === _.indexOf(timeScaleExclusions, timeScale) && _.forEach(fillRowThresholdEntries(timeScale, tickDateRendererFactory, rowRendererConfigs), function(e) {
            rowThresholdEntries.push(e);
          });
        }
        return _.sortBy(rowThresholdEntries, function(e) {
          return e.threshold;
        });
      };
      fillRowThresholdEntries = function(timeScale, tickDateRendererFactory, rowRendererConfigs) {
        var config, configsForTimeScale, minNbMillisecondsByPixel, renderingMetrics, rowThresholdEntries, w, _i, _len;
        rowThresholdEntries = [];
        configsForTimeScale = rowRendererConfigs[timeScale.scaleDepth];
        for (_i = 0, _len = configsForTimeScale.length; _len > _i; _i++) {
          config = configsForTimeScale[_i];
          renderingMetrics = tickDateRendererFactory.typicalRenderingMetrics(config);
          w = renderingMetrics.width;
          if (w > 0) {
            minNbMillisecondsByPixel = timeScale.averageDuration / w;
            rowThresholdEntries.push(new ThresholdEntry(minNbMillisecondsByPixel, renderingMetrics, timeScale, config));
          }
        }
        return rowThresholdEntries;
      };
      ThresholdEntry = function() {
        function ThresholdEntry(threshold, renderingMetrics, timeScale, rendererConfig) {
          var self;
          self = this;
          self.threshold = threshold;
          self.renderingMetrics = renderingMetrics;
          self.timeScale = timeScale;
          self.rendererConfig = rendererConfig;
        }
        return ThresholdEntry;
      }();
      TimeScalesProvider.prototype.timelineScales = function(millisByPixel) {
        var firstRowThresholdEntry, rowScales, secondRowThresholdEntry, self, thresholdEntry, tss, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
        self = this;
        if (millisByPixel === self._lastMillisByPixelUsed) return self._lastTimelineScalesReturned;
        _ref = self._secondRowThresholdEntries;
        for (_i = 0, _len = _ref.length; _len > _i; _i++) {
          thresholdEntry = _ref[_i];
          if (millisByPixel < thresholdEntry.threshold) {
            secondRowThresholdEntry = thresholdEntry;
            break;
          }
        }
        secondRowThresholdEntry || (secondRowThresholdEntry = thresholdEntry);
        _ref1 = self._firstRowThresholdEntries;
        for (_j = 0, _len1 = _ref1.length; _len1 > _j; _j++) {
          thresholdEntry = _ref1[_j];
          if (thresholdEntry.timeScale.scaleDepth < secondRowThresholdEntry.timeScale.scaleDepth && millisByPixel < thresholdEntry.threshold) {
            firstRowThresholdEntry = thresholdEntry;
            break;
          }
        }
        firstRowThresholdEntry || (firstRowThresholdEntry = thresholdEntry);
        if (secondRowThresholdEntry.timeScale.scaleDepth - firstRowThresholdEntry.timeScale.scaleDepth > 1) {
          _ref2 = self._secondRowThresholdEntries;
          for (_k = 0, _len2 = _ref2.length; _len2 > _k; _k++) {
            thresholdEntry = _ref2[_k];
            if (millisByPixel < thresholdEntry.threshold && thresholdEntry.timeScale.dateParamIndex === firstRowThresholdEntry.timeScale.dateParamIndex + 1) {
              secondRowThresholdEntry = thresholdEntry;
              break;
            }
          }
        }
        rowScales = [];
        rowScales.push(new RowScale(firstRowThresholdEntry.timeScale, firstRowThresholdEntry.rendererConfig, firstRowThresholdEntry.renderingMetrics));
        rowScales.push(new RowScale(secondRowThresholdEntry.timeScale, secondRowThresholdEntry.rendererConfig, secondRowThresholdEntry.renderingMetrics));
        tss = new TimelineScales(rowScales);
        self._lastMillisByPixelUsed = millisByPixel;
        self._lastTimelineScalesReturned = tss;
        return tss;
      };
      TimeScalesProvider.prototype._init = function() {
        var self;
        self = this;
        self._lastMillisByPixelUsed = null;
        self._lastTimelineScalesReturned = null;
        self._firstRowThresholdEntries = self._initFirstRowThresholdEntries();
        self._secondRowThresholdEntries = self._initSecondRowThresholdEntries();
      };
      TimeScalesProvider.prototype._initFirstRowThresholdEntries = function() {
        var self;
        self = this;
        return initRowThresholdEntries(self._tickDateRendererFactoryManagers[0].factory, [ TimeScale.get(TimeScale.TWENTIETH_OF_A_SECOND_D) ], self._timelineLocaleManager.locale.firstRowRendererConfigs);
      };
      TimeScalesProvider.prototype._initSecondRowThresholdEntries = function() {
        var self;
        self = this;
        return initRowThresholdEntries(self._tickDateRendererFactoryManagers[1].factory, [ TimeScale.get(TimeScale.CENTURY_D) ], self._timelineLocaleManager.locale.secondRowRendererConfigs);
      };
      return TimeScalesProvider;
    }();
    TickDateRendererUtil = {};
    !function(U) {
      var formatDate, textMetricProcessor;
      formatDate = CoreFunctions.formatDate;
      textMetricProcessor = CanvasTextMetricProcessor.INSTANCE;
      U.typicalFormattedDateWidth = function(typicalDate, formatFunctions, font) {
        var formattedDate;
        formattedDate = formatDate(typicalDate, formatFunctions);
        textMetricProcessor.font = font;
        return textMetricProcessor.width(formattedDate);
      };
      U.typicalFormattedDateHeights = function(typicalDate, formatFunctions, font) {
        var formattedDate;
        formattedDate = formatDate(typicalDate, formatFunctions);
        textMetricProcessor.font = font;
        return textMetricProcessor.heights(formattedDate);
      };
      return U.roundMetric = function(m) {
        return .5 > m ? 1 : Math.round(m);
      };
    }(TickDateRendererUtil);
    TypicalRenderingMetrics = function() {
      function TypicalRenderingMetrics(width, height, typicalTextMetrics) {
        this.typicalTextMetrics = typicalTextMetrics;
        this.width = roundMetric(width);
        this.height = roundMetric(height);
      }
      var roundMetric;
      roundMetric = TickDateRendererUtil.roundMetric;
      return TypicalRenderingMetrics;
    }();
    TypicalTextMetrics = function() {
      function TypicalTextMetrics(width, heights) {
        this.width = roundMetric(width);
        this.heights = {
          ascent: roundMetric(heights.ascent),
          height: roundMetric(heights.height),
          descent: roundMetric(heights.descent)
        };
      }
      var roundMetric;
      roundMetric = TickDateRendererUtil.roundMetric;
      return TypicalTextMetrics;
    }();
    TickDateRendererFactory = function() {
      function TickDateRendererFactory(_arg) {
        var canvas, self, timeViewportRow, timelineLocaleManager;
        timelineLocaleManager = _arg.timelineLocaleManager, timeViewportRow = _arg.timeViewportRow, 
        canvas = _arg.canvas;
        self = this;
        self._timelineLocaleManager = timelineLocaleManager;
        self._timeViewportRow = timeViewportRow;
        self._canvas = canvas;
        self._themes = [];
        self._unusedInstances = [];
      }
      var typicalFormattedDateHeights, typicalFormattedDateWidth;
      typicalFormattedDateWidth = TickDateRendererUtil.typicalFormattedDateWidth, typicalFormattedDateHeights = TickDateRendererUtil.typicalFormattedDateHeights;
      TickDateRendererFactory.prototype.typicalFormattedDateTextMetrics = function(formatFunctions, font) {
        null == font && (font = this._timeViewportRow.defaultFont);
        return new TypicalTextMetrics(typicalFormattedDateWidth(this._timelineLocaleManager.typicalDate, formatFunctions, font), typicalFormattedDateHeights(this._timelineLocaleManager.typicalDate, formatFunctions, font));
      };
      TickDateRendererFactory.prototype.getRenderer = function(params) {
        var rHashCode, rendererInstance;
        rHashCode = stringHashCode(params.tickDate.getTime() + "-" + params.nextTickDate.getTime());
        params.hashCode = rHashCode;
        rendererInstance = this._unusedInstances.length > 0 ? this._unusedInstances.pop() : this._createRenderer();
        return this._configureRenderer(rendererInstance, params);
      };
      TickDateRendererFactory.prototype.releaseRenderer = function(r) {
        this._unusedInstances.push(r);
      };
      TickDateRendererFactory.prototype.provideTheme = function() {
        throw "to implement";
      };
      TickDateRendererFactory.prototype._createRenderer = function() {
        throw "to implement";
      };
      TickDateRendererFactory.prototype._configureRenderer = function(r, params) {
        r.rowIndex = params.rowIndex;
        r.tickDate = params.tickDate;
        r.nextTickDate = params.nextTickDate;
        r.config = params.rendererConfig;
        r.renderingMetrics = params.renderingMetrics;
        r.theme = this.provideTheme(params);
        r.hashCode = params.hashCode;
        r.rolloverPercent = 0;
        return r;
      };
      return TickDateRendererFactory;
    }();
    TickDateRenderer = function(_super) {
      function TickDateRenderer(timeViewportRow, canvas) {
        var self;
        TickDateRenderer.__super__.constructor.call(this, timeViewportRow, canvas, !1, !0);
        self = this;
        self.config = null;
        self.tickDate = null;
        self.nextTickDate = null;
        self.renderingMetrics = null;
        self.rowIndex = -1;
        self.theme = null;
        self.cursor = "pointer";
        self.rolloverPercent = 0;
      }
      __extends(TickDateRenderer, _super);
      TickDateRenderer.prototype._pixelWidthFromTickDateToNextTickDate = function() {
        var self;
        self = this;
        return self._component.dateToPixelPosition(self.nextTickDate) - self._component.dateToPixelPosition(self.tickDate);
      };
      return TickDateRenderer;
    }(Drawing);
    PeriodBasedComponent = function() {
      function PeriodBasedComponent() {}
      var getter, mtp, setter, _ref;
      _ref = gs(PeriodBasedComponent), getter = _ref.getter, setter = _ref.setter;
      mtp = DateUtil.millisecondsToPixels;
      PeriodBasedComponent.prototype.PeriodBasedComponent_init = function() {
        var self;
        self = this;
        self._period = null;
        self._periodChangedFlag = !1;
        return self._millisByPixel = null;
      };
      getter("period", function() {
        return this._period;
      });
      setter("period", function(p) {
        var self;
        self = this;
        if (!self._period || !self._period.equals(p)) {
          self._periodChangedFlag = !0;
          self._period = p.clone();
          self._updateMillisByPixel();
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("millisByPixel", function() {
        return this._millisByPixel;
      });
      PeriodBasedComponent.prototype.millisecondsToPixels = function(milliseconds) {
        return mtp(milliseconds, this._millisByPixel);
      };
      PeriodBasedComponent.prototype.dateToPixelPosition = function(date) {
        return this.millisecondsToPixels(date.getTime() - this._period.start.getTime());
      };
      PeriodBasedComponent.prototype.pixelPositionToDate = function(pixelPosition) {
        var d;
        d = new Date();
        d.setTime(this._period.start.getTime() + pixelPosition * this._millisByPixel);
        return d;
      };
      PeriodBasedComponent.prototype.PeriodBasedComponent_resetPropFlags = function() {
        this._periodChangedFlag = !1;
      };
      PeriodBasedComponent.prototype._updateMillisByPixel = function() {
        var self, width;
        self = this;
        width = self.width;
        0 === width && (width = 1920);
        self._millisByPixel = self._period.durationInMillis() / width;
      };
      return PeriodBasedComponent;
    }();
    TimeViewportRow = function(_super) {
      function TimeViewportRow(conf) {
        this._rowMouseout = __bind(this._rowMouseout, this);
        this._tickDataRendererMousemove = __bind(this._tickDataRendererMousemove, this);
        this._tickDateRendererClick = __bind(this._tickDateRendererClick, this);
        var self;
        this.PeriodBasedComponent_init();
        TimeViewportRow.__super__.constructor.call(this, conf);
        self = this;
        self.heightIsVariable = !1;
        self.widthFromParent = !0;
        self._rowIndex = conf.rowIndex;
        self._timelineLocaleManager = conf.timelineLocaleManager;
        self._rowScaleProvider = conf.rowScaleProvider;
        self._timeViewport = conf.timeViewport;
        self._inversed = conf.inversed;
        self._tickDateRendererFactoryNameProvider = null;
        self._tickDateRendererFactoryManager = null;
        self._dragStartPeriod = null;
        self._timelineLocaleChangedFlag = !1;
        self._timelineLocaleManager.localeChanged.add(function() {
          self._timelineLocaleChangedFlag = !0;
          return self.invalidatePropsAndDisplayList();
        });
        self._tickDateRendererRolloverTweener = new RolloverTweener();
        self._rolloverTweenedFlag = !1;
        self._tickDateRendererRolloverTweener.rolloverTweened.add(self._rolloverTweened, this);
        self.previousMouseOverRendererHashCode = null;
        self._defaultFont = null;
        self._ticksCanvas = null;
        self._tickDateRenderers = [];
        self._tickDateRendererMouseoverTweenings = {};
        self._tickDateRendererMouseoutTweenings = {};
        self.ticksDateChanged = new Signal();
        self._processOptions(conf.options);
      }
      var getter, setter, _ref;
      __extends(TimeViewportRow, _super);
      _ref = gs(TimeViewportRow), getter = _ref.getter, setter = _ref.setter;
      TimeViewportRow.DEFAULT_OPTIONS = {
        defaultFont: "16px arial, sans-serif",
        height: "30px",
        width: "100%",
        tickDateRendererFactoryNameProvider: function() {
          return TickDateRendererFactoryManager.defaultFactoryName;
        }
      };
      mixinProto(TimeViewportRow, PeriodBasedComponent);
      TimeViewportRow.prototype._initCompleted = function() {
        var self;
        TimeViewportRow.__super__._initCompleted.call(this);
        self = this;
        (self._tickDateRendererFactoryManager = new TickDateRendererFactoryManager()).factory = {
          factoryName: self._tickDateRendererFactoryNameProvider(),
          timelineLocaleManager: self._timelineLocaleManager,
          timeViewportRow: self,
          canvas: self._ticksCanvas
        };
      };
      getter("tickDateRendererFactoryManager", function() {
        return this._tickDateRendererFactoryManager;
      });
      getter("defaultFont", function() {
        return this._defaultFont;
      });
      getter("inversed", function() {
        return this._inversed;
      });
      TimeViewportRow.prototype.forEachTickDateRenderer = function(it) {
        var i, len, rs;
        i = 0;
        rs = this._tickDateRenderers;
        len = rs.length;
        for (;len > i; ) {
          it(rs[i]);
          i++;
        }
      };
      TimeViewportRow.prototype._createChildren = function() {
        var s, self;
        TimeViewportRow.__super__._createChildren.call(this);
        self = this;
        s = self.domStyle;
        s.boxShadow = "1px 0px 3px #404040";
        s.zIndex = 10 - self._rowIndex;
        s.cursor = "inherit";
        self._createTicks();
      };
      TimeViewportRow.prototype._commitProperties = function() {
        TimeViewportRow.__super__._commitProperties.call(this);
        this._drawingSurfaceChangedFlag && this._updateMillisByPixel();
      };
      TimeViewportRow.prototype._updateDisplayList = function() {
        var self, tos;
        TimeViewportRow.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        (self._rolloverTweenedFlag || self._periodChangedFlag || self._timelineLocaleChangedFlag || tos) && self._updateTicks();
      };
      TimeViewportRow.prototype._resetPropFlags = function() {
        TimeViewportRow.__super__._resetPropFlags.call(this);
        this.PeriodBasedComponent_resetPropFlags();
        this._rolloverTweenedFlag = !1;
      };
      TimeViewportRow.prototype._createTicks = function() {
        var c;
        this._ticksCanvas = c = this._addCanvas("ticks-canvas");
        c.style.cursor = "inherit";
      };
      TimeViewportRow.prototype._releaseRenderers = function() {
        var i, len, renderer, rs, self;
        self = this;
        i = 0;
        rs = self._tickDateRenderers;
        len = rs.length;
        for (;len > i; ) {
          renderer = rs[i];
          self._tickDateRendererFactoryManager.factory.releaseRenderer(renderer);
          i++;
        }
        self._tickDateRenderers.length = 0;
      };
      TimeViewportRow.prototype._handleThemeChanged = function() {
        var s, self;
        TimeViewportRow.__super__._handleThemeChanged.call(this);
        self = this;
        s = self.domStyle;
        s.backgroundColor = 0 === self._rowIndex ? self.p500 : self.p400;
      };
      TimeViewportRow.prototype._updateTicks = function() {
        var canvas, ctx, it, nextTickDate, r, rendererConfig, renderingMetrics, rowScale, scale, self, tickDate, ticksDate, timeScale, tweening, tweeningExists, tweenings;
        self = this;
        tweenings = self._tickDateRendererRolloverTweener.tweenings;
        tweeningExists = Object.keys(tweenings).length > 0;
        rowScale = self._rowScaleProvider(self._millisByPixel);
        canvas = self._ticksCanvas;
        ctx = canvas.getContext("2d");
        scale = PixelRatioManager.backingScale();
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        self._releaseRenderers();
        timeScale = rowScale.timeScale, rendererConfig = rowScale.rendererConfig, renderingMetrics = rowScale.renderingMetrics;
        it = new TimeScaleTickDateIterator(self._period.start, timeScale);
        tickDate = it.next();
        ticksDate = [];
        for (;DateUtil.dateCompare(tickDate, self._period.end) < 0; ) {
          nextTickDate = it.next();
          r = self._tickDateRendererFactoryManager.factory.getRenderer({
            rowIndex: self._rowIndex,
            tickDate: tickDate,
            nextTickDate: nextTickDate,
            rendererConfig: rendererConfig,
            renderingMetrics: renderingMetrics
          });
          if (tweeningExists) {
            tweening = tweenings[r.hashCode];
            tweening && (r.rolloverPercent = tweening.percent);
          }
          r.x = self.dateToPixelPosition(tickDate);
          ticksDate.push(new Date(tickDate.getTime()));
          self._tickDateRenderers.push(r);
          r.update();
          tickDate = nextTickDate;
        }
        self.ticksDateChanged.dispatch(ticksDate);
      };
      TimeViewportRow.prototype._rolloverTweened = function() {
        this._rolloverTweenedFlag = !0;
        this.invalidatePropsAndDisplayList();
      };
      TimeViewportRow.prototype._processOptions = function(options) {
        var defaultFont, height, self, tickDateRendererFactoryNameProvider, width, _ref2;
        self = this;
        _ref2 = self._normalizedOptions(options || {}), defaultFont = _ref2.defaultFont, 
        height = _ref2.height, width = _ref2.width, tickDateRendererFactoryNameProvider = _ref2.tickDateRendererFactoryNameProvider;
        self._defaultFont = defaultFont;
        self.domStyle.height = height;
        self.domStyle.width = width;
        self._tickDateRendererFactoryNameProvider = tickDateRendererFactoryNameProvider;
      };
      TimeViewportRow.prototype._normalizedOptions = function(options) {
        var factoryName, locale, m, normalizedOptions, rType;
        normalizedOptions = _.clone(options);
        _.defaults(normalizedOptions, TimeViewportRow.DEFAULT_OPTIONS);
        factoryName = normalizedOptions.tickDateRendererFactoryNameProvider();
        rType = TickDateRendererFactoryManager.factoryTypes[factoryName];
        if (!rType) {
          m = "unable to find TickDateRendererFactory of name " + factoryName;
          throw m;
        }
        locale = this._timelineLocaleManager.locale;
        if (rType.renderingType !== locale.renderingType) {
          m = "incomptible rendering types " + factoryName + " : " + rType.renderingType + " <-> " + locale.name + " : " + locale.renderingType;
          throw m;
        }
        return normalizedOptions;
      };
      TimeViewportRow.prototype._configureUiBindings = function(enable) {
        var self;
        TimeViewportRow.__super__._configureUiBindings.call(this, enable);
        self = this;
        if (enable) {
          self._addEventListener("click", self._tickDateRendererClick);
          if (!Detect.touchIsSupported) {
            self._addEventListener("mousemove", self._tickDataRendererMousemove);
            self._addEventListener("mouseout", self._rowMouseout);
          }
        }
      };
      TimeViewportRow.prototype._findRendererByLocalX = function(localX) {
        var self;
        self = this;
        return _.find(this._tickDateRenderers, function(tdr) {
          var nextTickDate;
          nextTickDate = tdr.nextTickDate;
          return localX < self.dateToPixelPosition(nextTickDate);
        });
      };
      TimeViewportRow.prototype._findRendererByHashCode = function(hashCode) {
        return _.find(this._tickDateRenderers, function(tdr) {
          return tdr.hashCode === hashCode;
        });
      };
      TimeViewportRow.prototype._tickDateRendererClick = function(e) {
        var r, self;
        self = this;
        if (e.shiftKey) self._timeViewport.zoomOut(); else {
          r = self._findRendererByLocalX(self._localX(e));
          r && (self._timeViewport.period = new Period(r.tickDate, r.nextTickDate));
        }
      };
      TimeViewportRow.prototype._tickDataRendererMousemove = function(e) {
        var prevHashCode, r, self;
        self = this;
        r = self._findRendererByLocalX(self._localX(e));
        prevHashCode = self.previousMouseOverRendererHashCode;
        if (r) {
          if (r.hashCode !== prevHashCode) {
            if (prevHashCode) {
              e.__targetHashCode = prevHashCode;
              self._tickDateRendererMouseout(e);
            }
            e.__targetHashCode = r.hashCode;
            self.previousMouseOverRendererHashCode = r.hashCode;
            self._tickDateRendererMouseover(e);
          }
        } else if (prevHashCode) {
          e.__targetHashCode = prevHashCode;
          self._tickDateRendererMouseout(e);
          self.previousMouseOverRendererHashCode = null;
        }
      };
      TimeViewportRow.prototype._rowMouseout = function(e) {
        var prevHashCode, self;
        self = this;
        prevHashCode = self.previousMouseOverRendererHashCode;
        if (prevHashCode) {
          e.__targetHashCode = prevHashCode;
          self._tickDateRendererMouseout(e);
          return self.previousMouseOverRendererHashCode = null;
        }
      };
      TimeViewportRow.prototype._tickDateRendererMouseover = function(event) {
        this._tickDateRendererRolloverTweener.tweenMouseover(event.__targetHashCode);
      };
      TimeViewportRow.prototype._tickDateRendererMouseout = function(event) {
        this._tickDateRendererRolloverTweener.tweenMouseout(event.__targetHashCode);
      };
      TimeViewportRow.prototype._configureModelBindings = function(enable) {
        var self, tv;
        TimeViewportRow.__super__._configureModelBindings.call(this, enable);
        self = this;
        if (enable) {
          tv = self._timeViewport;
          tv.periodChanged.add(self._periodChanged, this);
          tv.maxPeriodChanged.add(self._maxPeriodChanged, this);
          tv.minPeriodDurationChanged.add(self._minPeriodDurationChanged, this);
        }
      };
      TimeViewportRow.prototype._periodChanged = function() {};
      TimeViewportRow.prototype._maxPeriodChanged = function() {};
      TimeViewportRow.prototype._minPeriodDurationChanged = function() {};
      TimeViewportRow.prototype._dragStarted = function(e, mousedownPageX, mousedownPageY) {
        TimeViewportRow.__super__._dragStarted.call(this, e, mousedownPageX, mousedownPageY);
        this._removeEventListener("click", this._tickDateRendererClick);
      };
      TimeViewportRow.prototype._dragEnded = function(e, pageX, pageY) {
        var self;
        self = this;
        setTimeout(function() {
          return self._addEventListener("click", self._tickDateRendererClick);
        }, 0);
        TimeViewportRow.__super__._dragEnded.call(this, e, pageX, pageY);
      };
      return TimeViewportRow;
    }(CanvasBasedComponent);
    TimeViewportContainer = function(_super) {
      function TimeViewportContainer(conf) {
        TimeViewportContainer.__super__.constructor.call(this, conf);
        this._timelineLocaleManager = conf.timelineLocaleManager;
        this._timeViewport = conf.timeViewport;
      }
      __extends(TimeViewportContainer, _super);
      TimeViewportContainer.prototype._addChild = function(clazz, conf) {
        conf.timelineLocaleManager = this._timelineLocaleManager;
        conf.timeViewport = this._timeViewport;
        return TimeViewportContainer.__super__._addChild.call(this, clazz, conf);
      };
      return TimeViewportContainer;
    }(Component);
    BaseTimeline = function(_super) {
      function BaseTimeline(conf) {
        var self;
        BaseTimeline.__super__.constructor.call(this, conf);
        self = this;
        self._timeScalesProvider = null;
        self._rows = [];
        self.ticksDateChanged = new Signal();
      }
      var getter, setter, _ref;
      __extends(BaseTimeline, _super);
      _ref = gs(BaseTimeline), getter = _ref.getter, setter = _ref.setter;
      getter("millisByPixel", function() {
        return this.lastRow().millisByPixel;
      });
      BaseTimeline.prototype._createChildren = function() {
        var i, nbRows, rowIndex, self, _i;
        BaseTimeline.__super__._createChildren.call(this);
        self = this;
        nbRows = 2;
        for (i = _i = 0; nbRows >= 0 ? nbRows > _i : _i > nbRows; i = nbRows >= 0 ? ++_i : --_i) {
          rowIndex = self._inverseRows() ? nbRows - i - 1 : i;
          self._rows[rowIndex] = self._addChild(self._timeViewportRowClass(), {
            name: "timeline-viewport-row-" + i,
            rowIndex: rowIndex,
            rowScaleProvider: self._provideRowScale(rowIndex, self),
            inversed: self._inverseRows(),
            options: self._getRowOptions(rowIndex)
          });
        }
        self._timeScalesProvider = new TimeScalesProvider(self._timelineLocaleManager, _.map(self._rows, function(rComponent) {
          return rComponent.tickDateRendererFactoryManager;
        }));
      };
      getter("rows", function() {
        return this._rows;
      });
      BaseTimeline.prototype.lastRow = function() {
        return this._rows[this._rows.length - 1];
      };
      BaseTimeline.prototype.forEachTickDateRenderer = function(fn) {
        var i, l, r;
        i = 0;
        l = this._rows.length;
        for (;l > i; ) {
          r = this._rows[i];
          r.forEachTickDateRenderer(fn);
          i++;
        }
      };
      BaseTimeline.prototype._getRowOptions = function() {
        return null;
      };
      BaseTimeline.prototype._inverseRows = function() {
        return !1;
      };
      BaseTimeline.prototype._timeViewportRowClass = function() {
        return TimeViewportRow;
      };
      BaseTimeline.prototype._configureUiBindings = function(enable) {
        BaseTimeline.__super__._configureUiBindings.call(this, enable);
        enable && this._configureTicksDateChangedBinding();
      };
      BaseTimeline.prototype._configureTicksDateChangedBinding = function() {
        this.lastRow().ticksDateChanged.add(function(ticksDate) {
          return this.ticksDateChanged.dispatch(ticksDate);
        }, this);
      };
      BaseTimeline.prototype._configureModelBindings = function(enable) {
        BaseTimeline.__super__._configureModelBindings.call(this, enable);
      };
      BaseTimeline.prototype._provideRowScale = function(i, self) {
        return function(millisByPixel) {
          return self._timeScalesProvider.timelineScales(millisByPixel).rowScales[i];
        };
      };
      return BaseTimeline;
    }(TimeViewportContainer);
    RowScale = function() {
      function RowScale(timeScale, rendererConfig, renderingMetrics) {
        var self;
        self = this;
        self.timeScale = timeScale;
        self.rendererConfig = rendererConfig;
        self.renderingMetrics = renderingMetrics;
      }
      return RowScale;
    }();
    TimelineScales = function() {
      function TimelineScales(rowScales) {
        var self;
        self = this;
        self.rowScales = rowScales;
      }
      return TimelineScales;
    }();
    Timeline = function(_super) {
      function Timeline(conf) {
        Timeline.__super__.constructor.call(this, conf);
      }
      __extends(Timeline, _super);
      Timeline.prototype._configureUiBindings = function(enable) {
        var self;
        Timeline.__super__._configureUiBindings.call(this, enable);
        self = this;
        if (enable) {
          self._configureDragStartEndBindings();
          window.addWheelListener(self._domContainer, function(e) {
            var date, dy, tv;
            e.preventDefault();
            dy = e.deltaY;
            tv = self._timeViewport;
            if (void 0 !== e.pageX) {
              date = self._rows[0].pixelPositionToDate(self._localX(e));
              dy > 0 ? tv.zoomInOn(date, .25) : tv.zoomOutOn(date, .25);
            } else dy > 0 ? tv.zoomIn(.25) : tv.zoomOut(.25);
          });
        } else ;
      };
      Timeline.prototype._getRowOptions = function(rowIndex) {
        return 1 === rowIndex ? {
          defaultFont: "14px arial, sans-serif",
          height: "25px",
          width: "100%"
        } : 0 === rowIndex ? {
          defaultFont: "16px arial, sans-serif",
          height: "30px",
          width: "100%"
        } : null;
      };
      Timeline.prototype._timeViewportRowClass = function() {
        return TimelineViewportRow;
      };
      Timeline.prototype._configureDragStartEndBindings = function() {
        var self;
        self = this;
        _.forEach(self._rows, function(r) {
          r.dragStartedSignal.add(self._dragStarted, self);
          r.dragEndedSignal.add(self._dragEnded, self);
        });
      };
      Timeline.prototype._dragStarted = function() {
        return this.forEachTickDateRenderer(function(r) {
          r.cursor = null;
        });
      };
      Timeline.prototype._dragEnded = function() {
        return this.forEachTickDateRenderer(function(r) {
          r.cursor = "pointer";
        });
      };
      return Timeline;
    }(BaseTimeline);
    TimelineViewportRow = function(_super) {
      function TimelineViewportRow(conf) {
        var self;
        TimelineViewportRow.__super__.constructor.call(this, conf);
        self = this;
        self._enableDnd();
        self.heightIsVariable = !1;
        self.rolloverTweened = new Signal();
      }
      var oldBodyCursor;
      __extends(TimelineViewportRow, _super);
      TimelineViewportRow.prototype._initCompleted = function() {
        var self;
        TimelineViewportRow.__super__._initCompleted.call(this);
        self = this;
        self.period = self._timeViewport.period;
      };
      TimelineViewportRow.prototype._configureUiBindings = function(enable) {
        TimelineViewportRow.__super__._configureUiBindings.call(this, enable);
      };
      oldBodyCursor = null;
      TimelineViewportRow.prototype._dragStarted = function(e, mousedownPageX, mousedownPageY) {
        var s, self;
        TimelineViewportRow.__super__._dragStarted.call(this, e, mousedownPageX, mousedownPageY);
        self = this;
        self._timeViewport.enablePeriodTweening = !1;
        self._dragStartPeriod = self._timeViewport.period.clone();
        self._parent.domStyle.cursor = "ew-resize";
        oldBodyCursor = (s = document.body.style).cursor;
        s.cursor = "ew-resize";
      };
      TimelineViewportRow.prototype._dragMoved = function(e, pageX, pageY) {
        var deltaMs, maxEndTime, maxPeriod, maxStartTime, newDuration, newEndTime, newPeriod, newStartTime, self;
        TimelineViewportRow.__super__._dragMoved.call(this, e, pageX, pageY);
        self = this;
        deltaMs = self._dragDelta.x * self._millisByPixel;
        newStartTime = self._dragStartPeriod.start.getTime() - deltaMs;
        newEndTime = self._dragStartPeriod.end.getTime() - deltaMs;
        newDuration = newEndTime - newStartTime;
        maxPeriod = self._timeViewport.maxPeriod;
        maxStartTime = maxPeriod.start.getTime();
        maxEndTime = maxPeriod.end.getTime();
        if (maxStartTime > newStartTime) {
          newStartTime = maxStartTime;
          newEndTime = maxStartTime + newDuration;
        } else if (newEndTime > maxEndTime) {
          newStartTime = maxEndTime - newDuration;
          newEndTime = maxEndTime;
        }
        newPeriod = new Period(new Date(newStartTime), new Date(newEndTime));
        self._timeViewport.period = newPeriod;
      };
      TimelineViewportRow.prototype._dragEnded = function(e, pageX, pageY) {
        var self;
        self = this;
        self._timeViewport.enablePeriodTweening = !0;
        self._dragStartPeriod = null;
        self._parent.domStyle.cursor = "pointer";
        document.body.style.cursor = oldBodyCursor;
        TimelineViewportRow.__super__._dragEnded.call(this, e, pageX, pageY);
      };
      TimelineViewportRow.prototype._rolloverTweened = function(tweening, hashCode) {
        var renderer, self;
        self = this;
        renderer = self._findRendererByHashCode(hashCode);
        renderer && self.rolloverTweened.dispatch({
          start: renderer.tickDate,
          end: renderer.nextTickDate,
          tweening: tweening
        });
        TimelineViewportRow.__super__._rolloverTweened.call(this, tweening, hashCode);
      };
      TimelineViewportRow.prototype._configureModelBindings = function(enable) {
        TimelineViewportRow.__super__._configureModelBindings.call(this, enable);
      };
      TimelineViewportRow.prototype._periodChanged = function(oldPeriod, newPeriod) {
        TimelineViewportRow.__super__._periodChanged.call(this, oldPeriod, newPeriod);
        this.period = newPeriod;
      };
      TimelineViewportRow.prototype._maxPeriodChanged = function(oldMaxPeriod, newMaxPeriod) {
        TimelineViewportRow.__super__._maxPeriodChanged.call(this, oldMaxPeriod, newMaxPeriod);
      };
      TimelineViewportRow.prototype._minPeriodDurationChanged = function(oldMin, newMin) {
        TimelineViewportRow.__super__._minPeriodDurationChanged.call(this, oldMin, newMin);
      };
      return TimelineViewportRow;
    }(TimeViewportRow);
    SelectionRegionDrawing = function(_super) {
      function SelectionRegionDrawing(timeViewportRow, canvas) {
        var self;
        SelectionRegionDrawing.__super__.constructor.call(this, timeViewportRow, canvas);
        self = this;
        self.xStart = null;
        self.xEnd = null;
      }
      __extends(SelectionRegionDrawing, _super);
      SelectionRegionDrawing.prototype._update = function(ctx) {
        var component, h, self, w, x1, x2;
        self = this;
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        component = self._component;
        w = component.width;
        h = component.height;
        x1 = self.xStart + 1;
        ctx.fillRect(0, 0, x1, h);
        _.forEach(Drawing.DEFAULT_ALPHAS, function(a, i) {
          var x;
          x = x1 + i + .5;
          ctx.strokeStyle = "rgba(0, 0, 0, " + a + ")";
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        });
        x2 = self.xEnd;
        ctx.fillRect(x2, 0, w, h);
        _.forEach(Drawing.DEFAULT_ALPHAS, function(a, i) {
          var x;
          x = x2 - i - .5;
          ctx.strokeStyle = "rgba(0, 0, 0, " + a + ")";
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        });
      };
      return SelectionRegionDrawing;
    }(Drawing);
    TimeViewportResizer = function(_super) {
      function TimeViewportResizer(conf) {
        TimeViewportResizer.__super__.constructor.call(this, conf);
      }
      __extends(TimeViewportResizer, _super);
      TimeViewportResizer.prototype._configureUiBindings = function(enable) {
        var self;
        TimeViewportResizer.__super__._configureUiBindings.call(this, enable);
        self = this;
        enable && window.addWheelListener(self._domContainer, function(e) {
          var dy, tv;
          e.preventDefault();
          dy = e.deltaY;
          tv = self._timeViewport;
          dy > 0 ? tv.zoomIn() : tv.zoomOut();
        });
      };
      TimeViewportResizer.prototype._getRowOptions = function(rowIndex) {
        return 1 === rowIndex ? {
          defaultFont: "12px arial, sans-serif",
          height: "20px",
          width: "100%"
        } : 0 === rowIndex ? {
          defaultFont: "14px arial, sans-serif",
          height: "25px",
          width: "100%"
        } : null;
      };
      TimeViewportResizer.prototype._inverseRows = function() {
        return !0;
      };
      TimeViewportResizer.prototype._timeViewportRowClass = function() {
        return TimeViewportResizerRow;
      };
      return TimeViewportResizer;
    }(BaseTimeline);
    TimeViewportResizerRow = function(_super) {
      function TimeViewportResizerRow(conf) {
        var self;
        TimeViewportResizerRow.__super__.constructor.call(this, conf);
        self = this;
        self._enableDnd();
        self._selectionRegionPeriod = null;
        self._selectionRegionPeriodChangedFlag = !1;
        self._dragMovedToDispatch = null;
        self._dragEndedToDispatch = null;
        self.periodStartDragMoved = new Signal();
        self.periodEndDragMoved = new Signal();
        self.periodDragMoved = new Signal();
        _.forEach([ self.periodStartDragStarted = new Signal(), self.periodEndDragStarted = new Signal(), self.periodDragStarted = new Signal() ], function(s) {
          s.add(function() {
            self._tickDateRendererRolloverTweener.enabled = !1;
          });
        });
        _.forEach([ self.periodStartDragEnded = new Signal(), self.periodEndDragEnded = new Signal(), self.periodDragEnded = new Signal() ], function(s) {
          s.add(function() {
            self._tickDateRendererRolloverTweener.enabled = !0;
          });
        });
        self._selectionRegionCanvas = null;
        self._selectionRegionDrawing = null;
        self._selectionRegionPeriod = null;
      }
      var getter, oldBodyCursor, setter, _ref;
      __extends(TimeViewportResizerRow, _super);
      _ref = gs(TimeViewportResizerRow), getter = _ref.getter, setter = _ref.setter;
      getter("selectionRegionPeriod", function() {
        return this._selectionRegionPeriod;
      });
      setter("selectionRegionPeriod", function(p) {
        var self;
        self = this;
        if (!self._selectionRegionPeriod || !self._selectionRegionPeriod.equals(p)) {
          self._selectionRegionPeriodChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
          self._selectionRegionPeriod = p.clone();
        }
      });
      TimeViewportResizerRow.prototype.onTickDateRendererClicked = function(event) {
        var self;
        self = this;
        self._dragging || self.tickDateRendererClicked.dispatch(event);
      };
      TimeViewportResizerRow.prototype._createChildren = function() {
        var self;
        TimeViewportResizerRow.__super__._createChildren.call(this);
        self = this;
        return self._createSelectionRegion();
      };
      TimeViewportResizerRow.prototype._updateDisplayList = function() {
        var self, tos;
        TimeViewportResizerRow.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        return self._periodChangedFlag || self._selectionRegionPeriodChangedFlag || tos ? self._updateSelectionRegion() : void 0;
      };
      TimeViewportResizerRow.prototype._resetPropFlags = function() {
        var self;
        TimeViewportResizerRow.__super__._resetPropFlags.call(this);
        self = this;
        self._selectionRegionPeriodChangedFlag = !1;
      };
      TimeViewportResizerRow.prototype._initCompleted = function() {
        var self;
        TimeViewportResizerRow.__super__._initCompleted.call(this);
        self = this;
        self.period = self._timeViewport.maxPeriod;
        self.selectionRegionPeriod = self._timeViewport.period;
      };
      TimeViewportResizerRow.prototype._createSelectionRegion = function() {
        var c, self;
        self = this;
        self._selectionRegionCanvas = c = self._addCanvas("selection-region-canvas");
        c.style.cursor = "inherit";
        self._selectionRegionDrawing = new SelectionRegionDrawing(self, self._selectionRegionCanvas);
      };
      TimeViewportResizerRow.prototype._updateSelectionRegion = function() {
        var d, self;
        self = this;
        d = self._selectionRegionDrawing;
        d.xStart = self.dateToPixelPosition(self._selectionRegionPeriod.start);
        d.xEnd = self.dateToPixelPosition(self._selectionRegionPeriod.end);
        d.update();
      };
      TimeViewportResizerRow.prototype._configureUiBindings = function(enable) {
        var self;
        TimeViewportResizerRow.__super__._configureUiBindings.call(this, enable);
        self = this;
        if (enable) {
          self.periodDragStarted.add(self._periodDragStarted, this);
          self.periodDragMoved.add(self._periodDragMoved, this);
          self.periodDragEnded.add(self._periodDragEnded, this);
          self.periodStartDragStarted.add(self._periodStartDragStarted, this);
          self.periodStartDragMoved.add(self._periodStartDragMoved, this);
          self.periodStartDragEnded.add(self._periodDragEnded, this);
          self.periodEndDragStarted.add(self._periodEndDragStarted, this);
          self.periodEndDragMoved.add(self._periodEndDragMoved, this);
          self.periodEndDragEnded.add(self._periodDragEnded, this);
        }
      };
      oldBodyCursor = null;
      TimeViewportResizerRow.prototype.__periodDragStarted = function(cursor) {
        var s, self;
        self = this;
        self._timeViewport.enablePeriodTweening = !1;
        self._dragStartPeriod = self._timeViewport.period.clone();
        self._parent.domStyle.cursor = cursor;
        oldBodyCursor = (s = document.body.style).cursor;
        s.cursor = cursor;
      };
      TimeViewportResizerRow.prototype._periodDragStarted = function() {
        this.__periodDragStarted("ew-resize");
      };
      TimeViewportResizerRow.prototype._periodStartDragStarted = function() {
        this.__periodDragStarted("w-resize");
      };
      TimeViewportResizerRow.prototype._periodEndDragStarted = function() {
        this.__periodDragStarted("e-resize");
      };
      TimeViewportResizerRow.prototype._periodDragEnded = function() {
        var self;
        self = this;
        self._timeViewport.enablePeriodTweening = !0;
        self._dragStartPeriod = null;
        self._parent.domStyle.cursor = "pointer";
        document.body.style.cursor = oldBodyCursor;
      };
      TimeViewportResizerRow.prototype._periodDragMoved = function(deltaMs) {
        var maxEndTime, maxPeriod, maxStartTime, newDuration, newEndTime, newPeriod, newStartTime, self;
        self = this;
        newStartTime = self._dragStartPeriod.start.getTime() + deltaMs;
        newEndTime = self._dragStartPeriod.end.getTime() + deltaMs;
        newDuration = newEndTime - newStartTime;
        maxPeriod = self._timeViewport.maxPeriod;
        maxStartTime = maxPeriod.start.getTime();
        maxEndTime = maxPeriod.end.getTime();
        if (maxStartTime > newStartTime) {
          newStartTime = maxStartTime;
          newEndTime = maxStartTime + newDuration;
        } else if (newEndTime > maxEndTime) {
          newStartTime = maxEndTime - newDuration;
          newEndTime = maxEndTime;
        }
        newPeriod = new Period(new Date(newStartTime), new Date(newEndTime));
        self._timeViewport.period = newPeriod;
      };
      TimeViewportResizerRow.prototype._periodStartDragMoved = function(deltaMs) {
        var endTime, maxPeriod, maxStartTime, minPeriodDuration, newPeriod, newStartTime, self, tv;
        self = this;
        tv = self._timeViewport;
        newStartTime = self._dragStartPeriod.start.getTime() + deltaMs;
        endTime = self._dragStartPeriod.end.getTime();
        maxPeriod = tv.maxPeriod;
        minPeriodDuration = tv.minPeriodDuration;
        maxStartTime = maxPeriod.start.getTime();
        maxStartTime > newStartTime && (newStartTime = maxStartTime);
        minPeriodDuration > endTime - newStartTime && (newStartTime = endTime - minPeriodDuration);
        newPeriod = new Period(new Date(newStartTime), new Date(endTime));
        self._timeViewport.period = newPeriod;
      };
      TimeViewportResizerRow.prototype._periodEndDragMoved = function(deltaMs) {
        var maxEndTime, maxPeriod, minPeriodDuration, newEndTime, newPeriod, self, startTime, tv;
        self = this;
        tv = self._timeViewport;
        startTime = self._dragStartPeriod.start.getTime();
        newEndTime = self._dragStartPeriod.end.getTime() + deltaMs;
        maxPeriod = tv.maxPeriod;
        minPeriodDuration = tv.minPeriodDuration;
        maxEndTime = maxPeriod.end.getTime();
        newEndTime > maxEndTime && (newEndTime = maxEndTime);
        minPeriodDuration > newEndTime - startTime && (newEndTime = startTime + minPeriodDuration);
        newPeriod = new Period(new Date(startTime), new Date(newEndTime));
        self._timeViewport.period = newPeriod;
      };
      TimeViewportResizerRow.prototype._dragStarted = function(e, mousedownPageX, mousedownPageY) {
        var handleDrag, localDragStartX, rightThreshold, selectionRegionPeriodEndX, selectionRegionPeriodStartX, self, w;
        TimeViewportResizerRow.__super__._dragStarted.call(this, e, mousedownPageX, mousedownPageY);
        self = this;
        handleDrag = function(startSignal, moveSignal, endSignal) {
          startSignal.dispatch();
          self._dragMovedToDispatch = moveSignal;
          return self._dragEndedToDispatch = endSignal;
        };
        selectionRegionPeriodStartX = self.dateToPixelPosition(self._selectionRegionPeriod.start);
        selectionRegionPeriodEndX = self.dateToPixelPosition(self._selectionRegionPeriod.end);
        w = self.width;
        rightThreshold = w - 20;
        localDragStartX = self._localX(e);
        selectionRegionPeriodStartX > localDragStartX || 20 > selectionRegionPeriodStartX && 20 > localDragStartX ? handleDrag(self.periodStartDragStarted, self.periodStartDragMoved, self.periodStartDragEnded) : localDragStartX > selectionRegionPeriodEndX || selectionRegionPeriodEndX > rightThreshold && localDragStartX > rightThreshold ? handleDrag(self.periodEndDragStarted, self.periodEndDragMoved, self.periodEndDragEnded) : handleDrag(self.periodDragStarted, self.periodDragMoved, self.periodDragEnded);
      };
      TimeViewportResizerRow.prototype._dragMoved = function(e, pageX, pageY) {
        var deltaMs, self;
        TimeViewportResizerRow.__super__._dragMoved.call(this, e, pageX, pageY);
        self = this;
        deltaMs = self._dragDelta.x * self._millisByPixel;
        self._dragMovedToDispatch.dispatch(deltaMs);
      };
      TimeViewportResizerRow.prototype._dragEnded = function(e, pageX, pageY) {
        var self;
        self = this;
        self._dragEndedToDispatch.dispatch();
        self._dragMovedToDispatch = null;
        self._dragEndedToDispatch = null;
        TimeViewportResizerRow.__super__._dragEnded.call(this, e, pageX, pageY);
      };
      TimeViewportResizerRow.prototype._configureModelBindings = function(enable) {
        TimeViewportResizerRow.__super__._configureModelBindings.call(this, enable);
      };
      TimeViewportResizerRow.prototype._periodChanged = function(oldPeriod, newPeriod) {
        var self;
        TimeViewportResizerRow.__super__._periodChanged.call(this);
        self = this;
        self.selectionRegionPeriod = newPeriod;
      };
      TimeViewportResizerRow.prototype._maxPeriodChanged = function(oldMaxPeriod, newMaxPeriod) {
        var self;
        TimeViewportResizerRow.__super__._maxPeriodChanged.call(this);
        self = this;
        self.period = newMaxPeriod.clone();
      };
      return TimeViewportResizerRow;
    }(TimeViewportRow);
    TimeBenderBackground = function(_super) {
      function TimeBenderBackground(component, canvas) {
        TimeBenderBackground.__super__.constructor.call(this, component, canvas);
      }
      __extends(TimeBenderBackground, _super);
      TimeBenderBackground.prototype._update = function(ctx) {
        var c, grd, h, w;
        TimeBenderBackground.__super__._update.call(this, ctx);
        c = ctx;
        w = this._component.width;
        h = this._component.height;
        grd = c.createLinearGradient(0, 0, 0, h);
        grd.addColorStop(0, "white");
        grd.addColorStop(1, this.p200);
        c.fillStyle = grd;
        c.fillRect(0, 0, w, h);
      };
      return TimeBenderBackground;
    }(Drawing);
    TimeBenderForeground = function(_super) {
      function TimeBenderForeground(component, canvas) {
        TimeBenderForeground.__super__.constructor.call(this, component, canvas);
      }
      var startOfNextDay;
      __extends(TimeBenderForeground, _super);
      startOfNextDay = DateUtil.startOfNextDay;
      TimeBenderForeground.prototype._update = function(ctx) {
        var c, component, ctrlY1, ctrlY2, fillColor, h, i, len, self, sxEnd, sxStart, td, timeViewportResizerRow, timelineTicksDate, timelineViewportRow, w, x1, x2;
        TimeBenderForeground.__super__._update.call(this, ctx);
        self = this;
        c = ctx;
        component = self._component;
        timelineViewportRow = component.timelineViewportRow;
        timeViewportResizerRow = component.timeViewportResizerRow;
        timelineTicksDate = component.timelineTicksDate;
        w = component.width;
        h = component.height;
        fillColor = self.p300;
        ctrlY1 = h / 2;
        ctrlY2 = h - ctrlY1;
        c.shadowColor = "black";
        c.shadowBlur = 5;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        c.fillStyle = fillColor;
        c.beginPath();
        c.moveTo(0, 0);
        sxStart = timeViewportResizerRow.dateToPixelPosition(timeViewportResizerRow.selectionRegionPeriod.start) + 1;
        sxEnd = timeViewportResizerRow.dateToPixelPosition(timeViewportResizerRow.selectionRegionPeriod.end);
        c.bezierCurveTo(0, ctrlY1, sxStart, ctrlY2, sxStart, h + .5);
        c.lineTo(sxEnd, h + .5);
        c.bezierCurveTo(sxEnd, ctrlY2, w, ctrlY1, w, 0);
        c.closePath();
        c.fill();
        c.shadowColor = "black";
        c.shadowBlur = 0;
        c.shadowOffsetX = 0;
        c.shadowOffsetY = 0;
        if (timelineTicksDate && (len = timelineTicksDate.length) > 0) {
          c.strokeStyle = self.p300txt.divider(1);
          c.lineWidth = 1;
          i = 0;
          for (;len > i; ) {
            td = timelineTicksDate[i];
            x1 = timelineViewportRow.dateToPixelPosition(td);
            if (0 > x1) i++; else {
              x1 += .5;
              x2 = timeViewportResizerRow.dateToPixelPosition(td) + .5;
              c.beginPath();
              c.moveTo(x1, 0);
              c.bezierCurveTo(x1, ctrlY1, x2, ctrlY2, x2, h);
              c.stroke();
              i++;
            }
          }
        }
        self._setLineDash(ctx, [ 4, 8 ]);
        if (component.displayToday) {
          ctx.strokeStyle = self.pa700;
          self._drawTick(ctx, new Date(), h, ctrlY1, ctrlY2);
        }
        ctx.strokeStyle = self.p700;
        component.displayStart && component.start && self._drawTick(ctx, component.start, h, ctrlY1, ctrlY2);
        component.displayFinish && component.finish && self._drawTick(ctx, startOfNextDay(component.finish), h, ctrlY1, ctrlY2);
      };
      TimeBenderForeground.prototype._drawTick = function(ctx, d, h, ctrlY1, ctrlY2) {
        var component, dX, self, timeViewportResizerRow, timelineViewportRow, w, x1, x2;
        if (d) {
          self = this;
          component = self._component;
          w = component.width;
          timelineViewportRow = component.timelineViewportRow;
          timeViewportResizerRow = component.timeViewportResizerRow;
          dX = timelineViewportRow.dateToPixelPosition(d) + .5;
          if (dX > 0 && w > dX) {
            x1 = dX;
            x2 = timeViewportResizerRow.dateToPixelPosition(d) + .5;
            ctx.beginPath();
            ctx.moveTo(x1, 0);
            ctx.bezierCurveTo(x1, ctrlY1, x2, ctrlY2, x2, h);
            ctx.stroke();
          }
        }
      };
      return TimeBenderForeground;
    }(Drawing);
    Feedback = function(_super) {
      function Feedback(component, canvas) {
        Feedback.__super__.constructor.call(this, component, canvas);
      }
      __extends(Feedback, _super);
      Feedback.prototype._update = function(ctx) {
        var c, component, ctrlY1, ctrlY2, drawTick, h, i, len, p, self, t, timeViewportResizerRow, timelineViewportRow, tweenings;
        Feedback.__super__._update.call(this, ctx);
        self = this;
        component = self._component;
        tweenings = component.periodRolloverTweenings;
        c = ctx;
        timelineViewportRow = component.timelineViewportRow;
        timeViewportResizerRow = component.timeViewportResizerRow;
        h = component.height;
        ctrlY1 = h / 2;
        ctrlY2 = h - ctrlY1;
        c.lineWidth = 1;
        self._setLineDash(c, [ 5 ]);
        drawTick = function(x1, x2) {
          c = ctx;
          if (!(0 > x1)) {
            x1 += .5;
            x2 += .5;
            c.beginPath();
            c.moveTo(x1, 0);
            c.bezierCurveTo(x1, ctrlY1, x2, ctrlY2, x2, h);
            c.stroke();
          }
        };
        i = 0;
        len = tweenings.length;
        for (;len > i; ) {
          t = tweenings[i];
          p = t.tweening.percent;
          if (!p) break;
          c.strokeStyle = self.p400txt.secondary(p);
          drawTick(timelineViewportRow.dateToPixelPosition(t.start), timeViewportResizerRow.dateToPixelPosition(t.start));
          drawTick(timelineViewportRow.dateToPixelPosition(t.end), timeViewportResizerRow.dateToPixelPosition(t.end));
          i++;
        }
      };
      return Feedback;
    }(Drawing);
    TimeBender = function(_super) {
      function TimeBender(conf) {
        var self;
        TimeBender.__super__.constructor.call(this, conf);
        self = this;
        self.heightIsVariable = !1;
        self._timeline = conf.timeline;
        self._timeViewportResizer = conf.timeViewportResizer;
        self._periodRolloverTweened = conf.periodRolloverTweened;
        self._periodRolloverTweened.add(function(e) {
          return self.addPeriodRolloverTweening(e);
        });
        self._timelineViewportRow = self._timeline.lastRow();
        self._timeViewportResizerRow = self._timeViewportResizer.lastRow();
        self._timelineTicksDate = null;
        self._timelineTicksDateChangedFlag = !1;
        self._timeViewportResizerTicksDate = null;
        self._timeViewportResizerTicksDateChangedFlag = !1;
        self._periodRolloverTweenings = [];
        self._periodRolloverTweeningsChangedFlag = !1;
        self._displayToday = !0;
        self._displayTodayChangedFlag = !1;
        self._start = null;
        self._startChangedFlag = !1;
        self._finish = null;
        self._finishChangedFlag = !1;
        self._displayStart = !0;
        self._displayStartChangedFlag = !1;
        self._displayFinish = !0;
        self._displayFinishChangedFlag = !1;
        self._backgroundCanvas = null;
        self._backgroundDrawing = null;
        self._foregroundCanvas = null;
        self._foregroundDrawing = null;
        self._feedbackCanvas = null;
        self._feedbackDrawing = null;
        self._processOptions(conf.options);
      }
      var getter, setter, _ref;
      __extends(TimeBender, _super);
      _ref = gs(TimeBender), getter = _ref.getter, setter = _ref.setter;
      TimeBender.DEFAULT_OPTIONS = {
        width: "100%",
        height: "30px"
      };
      getter("timelineViewportRow", function() {
        return this._timelineViewportRow;
      });
      getter("timeViewportResizerRow", function() {
        return this._timeViewportResizerRow;
      });
      getter("timelineTicksDate", function() {
        return this._timelineTicksDate;
      });
      getter("displayToday", function() {
        return this._displayToday;
      });
      setter("displayToday", function(displayToday) {
        var self;
        self = this;
        if (self._displayToday !== displayToday) {
          self._displayToday = displayToday;
          self._displayTodayChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("start", function() {
        return this._start;
      });
      setter("start", function(start) {
        var self;
        self = this;
        if (self._start !== start) {
          self._start = start;
          self._startChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("finish", function() {
        return this._finish;
      });
      setter("finish", function(finish) {
        var self;
        self = this;
        if (self._finish !== finish) {
          self._finish = finish;
          self._finishChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("displayStart", function() {
        return this._displayStart;
      });
      setter("displayStart", function(displayStart) {
        var self;
        self = this;
        if (self._displayStart !== displayStart) {
          self._displayStart = displayStart;
          self._displayStartChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("displayFinish", function() {
        return this._displayFinish;
      });
      setter("displayFinish", function(displayFinish) {
        var self;
        self = this;
        if (self._displayFinish !== displayFinish) {
          self._displayFinish = displayFinish;
          self._displayFinishChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      setter("timelineTicksDate", function(td) {
        var self;
        self = this;
        self._timelineTicksDateChangedFlag = !0;
        self.invalidatePropsAndDisplayList();
        self._timelineTicksDate = td;
      });
      getter("timeViewportResizerTicksDate", function() {
        return this._timeViewportResizerTicksDate;
      });
      setter("timeViewportResizerTicksDate", function(td) {
        var self;
        self = this;
        self._timeViewportResizerTicksDateChangedFlag = !0;
        self.invalidatePropsAndDisplayList();
        self._timeViewportResizerTicksDate = td;
      });
      getter("periodRolloverTweenings", function() {
        return this._periodRolloverTweenings;
      });
      TimeBender.prototype.addPeriodRolloverTweening = function(e) {
        var self;
        self = this;
        self._periodRolloverTweeningsChangedFlag = !0;
        self._periodRolloverTweenings.push(e);
        self.invalidatePropsAndDisplayList();
      };
      TimeBender.prototype._createChildren = function() {
        var self;
        TimeBender.__super__._createChildren.call(this);
        self = this;
        self._createBackground();
        self._createForeground();
        self._createFeedback();
      };
      TimeBender.prototype._configureUiBindings = function(enable) {
        var self;
        TimeBender.__super__._configureUiBindings.call(this, enable);
        self = this;
        if (enable) {
          self._timeline.ticksDateChanged.add(function(ticksDate) {
            return self.timelineTicksDate = ticksDate;
          }, this);
          self._timeViewportResizer.ticksDateChanged.add(function(ticksDate) {
            return self.timeViewportResizerTicksDate = ticksDate;
          }, this);
        }
      };
      TimeBender.prototype._updateDisplayList = function() {
        var self, tos;
        TimeBender.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        tos && self._updateBackground();
        (self._timelineTicksDateChangedFlag || self._timeViewportResizerTicksDateChangedFlag || self._displayTodayChangedFlag || self._startChangedFlag || self._finishChangedFlag || self._displayStartChangedFlag || self._displayFinishChangedFlag || tos) && self._updateForeground();
        return self._timelineTicksDateChangedFlag || self._timeViewportResizerTicksDateChangedFlag || self._periodRolloverTweeningsChangedFlag || tos ? self._updateFeedback() : void 0;
      };
      TimeBender.prototype._resetPropFlags = function() {
        var self;
        TimeBender.__super__._resetPropFlags.call(this);
        self = this;
        self._timelineTicksDateChangedFlag = !1;
        self._timeViewportResizerTicksDateChangedFlag = !1;
        self._periodRolloverTweeningsChangedFlag = !1;
        self._periodRolloverTweenings = [];
        self._displayTodayChangedFlag = !1;
        self._startChangedFlag = !1;
        self._finishChangedFlag = !1;
        self._displayStartChangedFlag = !1;
        self._displayFinishChangedFlag = !1;
      };
      TimeBender.prototype._createBackground = function() {
        var bc, self;
        self = this;
        bc = self._backgroundCanvas = self._addCanvas("background-canvas");
        self._backgroundDrawing = new TimeBenderBackground(self, bc);
      };
      TimeBender.prototype._createForeground = function() {
        var fc, self;
        self = this;
        fc = self._foregroundCanvas = self._addCanvas("foreground-canvas");
        self._foregroundDrawing = new TimeBenderForeground(self, fc);
      };
      TimeBender.prototype._createFeedback = function() {
        var fb, self;
        self = this;
        fb = self._feedbackCanvas = self._addCanvas("feedback-canvas");
        self._feedbackDrawing = new Feedback(self, fb);
      };
      TimeBender.prototype._updateBackground = function() {
        this._backgroundDrawing.update();
      };
      TimeBender.prototype._updateForeground = function() {
        this._foregroundDrawing.update();
      };
      TimeBender.prototype._updateFeedback = function() {
        this._feedbackDrawing.update();
      };
      TimeBender.prototype._processOptions = function(options) {
        var height, self, width, _ref2;
        self = this;
        _ref2 = self._normalizedOptions(options || {}), height = _ref2.height, width = _ref2.width;
        self.domStyle.height = height;
        self.domStyle.width = width;
      };
      TimeBender.prototype._normalizedOptions = function(options) {
        var normalizedOptions;
        normalizedOptions = _.clone(options);
        _.defaults(normalizedOptions, TimeBender.DEFAULT_OPTIONS);
        return normalizedOptions;
      };
      return TimeBender;
    }(CanvasBasedComponent);
    CondensedTickDateRendererConfig = function() {
      function CondensedTickDateRendererConfig(formatFcts) {
        var self;
        self = this;
        self.formatFunctions = _.flattenDeep(formatFcts);
      }
      return CondensedTickDateRendererConfig;
    }();
    CondensedTickDateRendererConfig.CONFIG = function() {
      var formatFunctions;
      formatFunctions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return new CondensedTickDateRendererConfig(formatFunctions);
    };
    TimelineLocale = function() {
      function TimelineLocale(name) {
        var A, COL, COM, D, DD, DMYY, DMYYYY, DOT, E, EDMYY, EE, EEDMYY, EEDMYYYY, EEE, EEEDMYYYY, EEEE, EEEEDMMMMMYYYY, EEEEDMMMMYYYY, EEEEDMMMYYYY, HH, J, JJ, K, KK, L, L2, LL, LN, LNS, LNSQ, LP, M, MM, MMM, MMMM, MMMMM, MMMMMYYYY, MMMMYYYY, MMMYYYY, N, NN, PAR, Q, QQQ, RP, S, SP, SPA, SS, STR, T, TF, TS, TT, TTT, TTTYYYY, TTYYYY, TYYYY, W, WW, WWW, WWWYYYY, WWYYYY, WYYYY, X, XX, XXX, XXXYYYY, XXYYYY, XYYYY, YY, YYYY, YYYY_W, f, s, self;
        self = this;
        self._name = name;
        self._renderingType = Constants.RENDERING_TYPE_CONDENSED;
        self._nouns = {
          months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
          monthsShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
          monthsMin: [ "Ja", "Fe", "Ma", "Ap", "Ma", "Ju", "Ju", "Au", "Se", "Oc", "No", "De" ],
          weekdays: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
          weekdaysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
          weekdaysAlmostMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
          weekdaysMin: [ "S", "M", "T", "W", "T", "F", "S" ],
          week: "Week n°",
          weekShort: "WK n°",
          weekMin: "W",
          halfYear: "Semester n°",
          halfYearShort: "Sem n°",
          halfYearMin: "S",
          quarterYear: "Quarter n°",
          quarterYearShort: "QTR n°",
          quarterYearMin: "Q",
          timeOfDay: [ "am", "pm" ]
        };
        self._week = {
          dow: 0,
          doy: 6
        };
        self._typicalDate = new Date(2e3, 11, 20, 23, 59, 59, 999);
        TF = self.constructor.formatTokenFunctions({
          nouns: self._nouns,
          week: self._week
        });
        STR = TF.STR, YYYY = TF.YYYY, YY = TF.YY, TTT = TF.TTT, TT = TF.TT, T = TF.T, XXX = TF.XXX, 
        XX = TF.XX, X = TF.X, MMMMM = TF.MMMMM, MMMM = TF.MMMM, MMM = TF.MMM, MM = TF.MM, 
        M = TF.M, WWW = TF.WWW, WW = TF.WW, W = TF.W, DD = TF.DD, D = TF.D, EEEE = TF.EEEE, 
        EEE = TF.EEE, EE = TF.EE, E = TF.E, A = TF.A, HH = TF.HH, H = TF.H, JJ = TF.JJ, 
        J = TF.J, KK = TF.KK, K = TF.K, LL = TF.LL, L = TF.L, NN = TF.NN, N = TF.N, SS = TF.SS, 
        S = TF.S, QQQ = TF.QQQ, Q = TF.Q;
        SP = STR(" ");
        DOT = STR(".");
        COM = STR(", ");
        COL = STR(":");
        LP = STR("(");
        RP = STR(")");
        PAR = function(FORMAT) {
          return [ SP, LP, FORMAT, RP ];
        };
        MMMMMYYYY = [ MMMMM, SP, YYYY ];
        MMMMYYYY = [ MMMM, SP, YYYY ];
        MMMYYYY = [ MMM, SP, YYYY ];
        TTTYYYY = [ TTT, COM, YYYY ];
        TTYYYY = [ TT, COM, YYYY ];
        TYYYY = [ T, COM, YYYY ];
        XXXYYYY = [ XXX, COM, YYYY ];
        XXYYYY = [ XX, COM, YYYY ];
        XYYYY = [ X, COM, YYYY ];
        YYYY_W = _.partialRight(YYYY, !0);
        WWWYYYY = [ WWW, COM, YYYY_W ];
        WWYYYY = [ WW, COM, YYYY_W ];
        WYYYY = [ W, COM, YYYY_W ];
        DMYYYY = [ D, STR("/"), M, STR("/"), YYYY ];
        DMYY = [ D, STR("/"), M, STR("/"), YY ];
        EEEEDMMMMMYYYY = [ EEEE, SP, D, SP, MMMMMYYYY ];
        EEEEDMMMMYYYY = [ EEEE, SP, D, SP, MMMMYYYY ];
        EEEEDMMMYYYY = [ EEEE, SP, D, SP, MMMYYYY ];
        EEEDMYYYY = [ EEE, SP, DMYYYY ];
        EEDMYYYY = [ EE, SP, DMYYYY ];
        EEDMYY = [ EE, SP, DMYY ];
        EDMYY = [ E, SP, DMYY ];
        SPA = [ SP, A ];
        L2 = [ COM, L, SPA ];
        LN = [ COM, LL, COL, NN, SPA ];
        LNS = [ COM, LL, COL, NN, COL, SS, SPA ];
        LNSQ = [ COM, LL, COL, NN, COL, SS, DOT, QQQ, SPA ];
        TS = TimeScale;
        f = [];
        f[TS.CENTURY_D] = [ CONFIG(YYYY) ];
        f[TS.HALF_CENTURY_D] = f[TS.CENTURY_D];
        f[TS.QUARTER_OF_A_CENTURY_D] = f[TS.CENTURY_D];
        f[TS.DECADE_D] = f[TS.CENTURY_D];
        f[TS.QUINQUENNIUM_D] = f[TS.CENTURY_D];
        f[TS.YEAR_D] = f[TS.CENTURY_D];
        f[TS.HALF_YEAR_D] = [ CONFIG(TTTYYYY), CONFIG(TTYYYY), CONFIG(TYYYY) ];
        f[TS.QUARTER_OF_A_YEAR_D] = [ CONFIG(XXXYYYY), CONFIG(XXYYYY), CONFIG(XYYYY) ];
        f[TS.MONTH_D] = [ CONFIG(MMMMMYYYY), CONFIG(MMMMYYYY), CONFIG(MMMYYYY) ];
        f[TS.WEEK_D] = [ CONFIG(EEEEDMMMMMYYYY, PAR(WWW)), CONFIG(EEEEDMMMMYYYY, PAR(WWW)), CONFIG(EEEEDMMMYYYY, PAR(WWW)), CONFIG(EEEDMYYYY, PAR(WW)), CONFIG(EEDMYYYY, PAR(WW)), CONFIG(EEDMYY, PAR(WW)), CONFIG(EDMYY, PAR(W)), CONFIG(DMYY, PAR(W)) ];
        f[TS.DATE_D] = [ CONFIG(EEEEDMMMMMYYYY), CONFIG(EEEEDMMMMYYYY), CONFIG(EEEEDMMMYYYY), CONFIG(EEEDMYYYY), CONFIG(EEDMYYYY), CONFIG(EEDMYY), CONFIG(EDMYY), CONFIG(DMYY) ];
        f[TS.MORNING_AFTERNOON_D] = [ CONFIG(EEEEDMMMMMYYYY, L2), CONFIG(EEEEDMMMMYYYY, L2), CONFIG(EEEEDMMMYYYY, L2), CONFIG(EEEDMYYYY, L2), CONFIG(EEDMYYYY, L2), CONFIG(EEDMYY, L2), CONFIG(EDMYY, L2), CONFIG(DMYY, L2) ];
        f[TS.SIXTH_OF_A_DAY_D] = f[TS.MORNING_AFTERNOON_D];
        f[TS.TWELFTH_OF_A_DAY_D] = f[TS.MORNING_AFTERNOON_D];
        f[TS.HOUR_D] = f[TS.MORNING_AFTERNOON_D];
        f[TS.QUARTER_OF_AN_HOUR_D] = [ CONFIG(EEEEDMMMMMYYYY, LN), CONFIG(EEEEDMMMMYYYY, LN), CONFIG(EEEEDMMMYYYY, LN), CONFIG(EEEDMYYYY, LN), CONFIG(EEDMYYYY, LN), CONFIG(EEDMYY, LN), CONFIG(EDMYY, LN), CONFIG(DMYY, LN) ];
        f[TS.SIXTH_OF_AN_HOUR_D] = f[TS.QUARTER_OF_AN_HOUR_D];
        f[TS.TWELFTH_OF_AN_HOUR_D] = f[TS.QUARTER_OF_AN_HOUR_D];
        f[TS.MINUTE_D] = f[TS.QUARTER_OF_AN_HOUR_D];
        f[TS.QUARTER_OF_MINUTE_D] = [ CONFIG(EEEEDMMMMMYYYY, LNS), CONFIG(EEEEDMMMMYYYY, LNS), CONFIG(EEEEDMMMYYYY, LNS), CONFIG(EEEDMYYYY, LNS), CONFIG(EEDMYYYY, LNS), CONFIG(EEDMYY, LNS), CONFIG(EDMYY, LNS), CONFIG(DMYY, LNS) ];
        f[TS.SIXTH_OF_A_MINUTE_D] = f[TS.QUARTER_OF_MINUTE_D];
        f[TS.TWELFTH_OF_A_MINUTE_D] = f[TS.QUARTER_OF_MINUTE_D];
        f[TS.SECOND_D] = f[TS.QUARTER_OF_MINUTE_D];
        f[TS.HALF_OF_SECOND_D] = [ CONFIG(EEEEDMMMMMYYYY, LNSQ), CONFIG(EEEEDMMMMYYYY, LNSQ), CONFIG(EEEEDMMMYYYY, LNSQ), CONFIG(EEEDMYYYY, LNSQ), CONFIG(EEDMYYYY, LNSQ), CONFIG(EEDMYY, LNSQ), CONFIG(EDMYY, LNSQ), CONFIG(DMYY, LNSQ) ];
        f[TS.TENTH_OF_A_SECOND_D] = f[TS.HALF_OF_SECOND_D];
        f[TS.TWENTIETH_OF_A_SECOND_D] = f[TS.HALF_OF_SECOND_D];
        s = [];
        s[TS.CENTURY_D] = [ CONFIG(YY) ];
        s[TS.HALF_CENTURY_D] = s[TS.CENTURY_D];
        s[TS.QUARTER_OF_A_CENTURY_D] = s[TS.CENTURY_D];
        s[TS.DECADE_D] = s[TS.CENTURY_D];
        s[TS.QUINQUENNIUM_D] = s[TS.CENTURY_D];
        s[TS.YEAR_D] = s[TS.CENTURY_D];
        s[TS.HALF_YEAR_D] = [ CONFIG(TTT), CONFIG(TT), CONFIG(T) ];
        s[TS.QUARTER_OF_A_YEAR_D] = [ CONFIG(XXX), CONFIG(XX), CONFIG(X) ];
        s[TS.MONTH_D] = [ CONFIG(MMMMM), CONFIG(MMMM), CONFIG(MMM), CONFIG(MM), CONFIG(M) ];
        s[TS.WEEK_D] = [ CONFIG(WWW), CONFIG(WW), CONFIG(W) ];
        s[TS.DATE_D] = [ CONFIG(EEEE, SP, D), CONFIG(EEE, SP, D), CONFIG(EE, SP, D), CONFIG(E, SP, D), CONFIG(E) ];
        s[TS.MORNING_AFTERNOON_D] = [ CONFIG(L, SPA) ];
        s[TS.SIXTH_OF_A_DAY_D] = s[TS.MORNING_AFTERNOON_D];
        s[TS.TWELFTH_OF_A_DAY_D] = s[TS.MORNING_AFTERNOON_D];
        s[TS.HOUR_D] = s[TS.MORNING_AFTERNOON_D];
        s[TS.QUARTER_OF_AN_HOUR_D] = [ CONFIG(N, STR(" minutes")), CONFIG(N, STR(" min")), CONFIG(N, STR("m")) ];
        s[TS.SIXTH_OF_AN_HOUR_D] = s[TS.QUARTER_OF_AN_HOUR_D];
        s[TS.TWELFTH_OF_AN_HOUR_D] = s[TS.QUARTER_OF_AN_HOUR_D];
        s[TS.MINUTE_D] = s[TS.QUARTER_OF_AN_HOUR_D];
        s[TS.QUARTER_OF_MINUTE_D] = [ CONFIG(S, STR(" seconds")), CONFIG(S, STR(" sec")), CONFIG(S, STR("s")) ];
        s[TS.SIXTH_OF_A_MINUTE_D] = s[TS.QUARTER_OF_MINUTE_D];
        s[TS.TWELFTH_OF_A_MINUTE_D] = s[TS.QUARTER_OF_MINUTE_D];
        s[TS.SECOND_D] = s[TS.QUARTER_OF_MINUTE_D];
        s[TS.HALF_OF_SECOND_D] = [ CONFIG(Q, STR(" milliseconds")), CONFIG(Q, STR("ms")) ];
        s[TS.TENTH_OF_A_SECOND_D] = s[TS.HALF_OF_SECOND_D];
        s[TS.TWENTIETH_OF_A_SECOND_D] = s[TS.HALF_OF_SECOND_D];
        self._firstRowRendererConfigs = f;
        self._secondRowRendererConfigs = s;
      }
      var CONFIG, H, LOCALE, applyPadding, dayInTheWeek, getter, halfYear, halfYearNumber, quarterYear, quarterYearNumber, setter, weakOfYear, weakOfYearNumber, weekOfYear, _K, _L, _ref;
      LOCALE = TimelineLocale;
      _ref = gs(LOCALE), getter = _ref.getter, setter = _ref.setter;
      CONFIG = CondensedTickDateRendererConfig.CONFIG;
      applyPadding = CoreFunctions.applyPadding;
      H = function(date) {
        var hours;
        hours = date.getHours();
        0 === hours && (hours = 24);
        return hours;
      };
      _K = function(date) {
        var hours;
        hours = date.getHours();
        hours >= 12 && (hours -= 12);
        return hours;
      };
      _L = function(date) {
        var hours;
        hours = date.getHours();
        return 0 === hours ? 12 : hours > 12 ? hours - 12 : hours;
      };
      weekOfYear = function(d, firstDayOfWeek, firstDayOfWeekOfYear) {
        var adjustedDate, dayOfYear, daysToDayOfWeek, end, oneJan;
        end = firstDayOfWeekOfYear - firstDayOfWeek;
        daysToDayOfWeek = firstDayOfWeekOfYear - d.getDay();
        daysToDayOfWeek > end && (daysToDayOfWeek -= 7);
        end - 7 > daysToDayOfWeek && (daysToDayOfWeek += 7);
        adjustedDate = new Date(d.getTime() + 24 * daysToDayOfWeek * 36e5);
        oneJan = new Date(adjustedDate.getFullYear(), 0, 1);
        dayOfYear = Math.round((adjustedDate.getTime() - oneJan.getTime()) / 864e5) + 1;
        return {
          week: Math.ceil(dayOfYear / 7),
          year: adjustedDate.getFullYear()
        };
      };
      halfYearNumber = function(date) {
        return date.getMonth() < 6 ? "1" : "2";
      };
      halfYear = function(noun) {
        return function(date) {
          return noun + halfYearNumber(date);
        };
      };
      quarterYearNumber = function(date) {
        var m;
        m = date.getMonth();
        return 3 > m ? "1" : 6 > m ? "2" : 9 > m ? "3" : "4";
      };
      quarterYear = function(noun) {
        return function(date) {
          return noun + quarterYearNumber(date);
        };
      };
      weakOfYearNumber = function(date, week) {
        var woy;
        woy = weekOfYear(date, week.dow, week.doy);
        return woy.week.toString();
      };
      weakOfYear = function(noun, week) {
        return function(date) {
          return noun + weakOfYearNumber(date, week);
        };
      };
      dayInTheWeek = function(weekdays) {
        return function(date) {
          return weekdays[date.getDay()];
        };
      };
      LOCALE.formatTokenFunctions = function(conf) {
        var nouns, week;
        nouns = conf.nouns;
        week = conf.week;
        return {
          STR: function(str) {
            return function() {
              return str;
            };
          },
          YYYY: function(date, forWeek) {
            var woy;
            null == forWeek && (forWeek = !1);
            if (forWeek) {
              woy = weekOfYear(date, week.dow, week.doy);
              return woy.year;
            }
            return date.getFullYear().toString();
          },
          YY: function(date, forWeek) {
            var woy;
            null == forWeek && (forWeek = !1);
            if (forWeek) {
              woy = weekOfYear(date, week.dow, week.doy);
              return woy.year.toString().substring(2);
            }
            return forWeek ? void 0 : date.getFullYear().toString().substring(2);
          },
          TTT: halfYear(nouns.halfYear),
          TT: halfYear(nouns.halfYearShort),
          T: halfYear(nouns.halfYearMin),
          XXX: quarterYear(nouns.quarterYear),
          XX: quarterYear(nouns.quarterYearShort),
          X: quarterYear(nouns.quarterYearMin),
          MMMMM: function(date) {
            return nouns.months[date.getMonth()];
          },
          MMMM: function(date) {
            return nouns.monthsShort[date.getMonth()];
          },
          MMM: function(date) {
            return nouns.monthsMin[date.getMonth()];
          },
          MM: function(date) {
            return applyPadding(date.getMonth() + 1, 2);
          },
          M: function(date) {
            return (date.getMonth() + 1).toString();
          },
          WWW: weakOfYear(nouns.week, week),
          WW: weakOfYear(nouns.weekShort, week),
          W: weakOfYear(nouns.weekMin, week),
          DD: function(date) {
            return applyPadding(date.getDate(), 2);
          },
          D: function(date) {
            return date.getDate().toString();
          },
          EEEE: dayInTheWeek(nouns.weekdays),
          EEE: dayInTheWeek(nouns.weekdaysShort),
          EE: dayInTheWeek(nouns.weekdaysAlmostMin),
          E: dayInTheWeek(nouns.weekdaysMin),
          A: function(date) {
            return date.getHours() < 12 ? nouns.timeOfDay[0] : nouns.timeOfDay[1];
          },
          HH: function(date) {
            return applyPadding(H(date), 2);
          },
          H: function(date) {
            return H(date).toString();
          },
          JJ: function(date) {
            return applyPadding(date.getHours(), 2);
          },
          J: function(date) {
            return date.getHours().toString();
          },
          KK: function(date) {
            return applyPadding(_K(date), 2);
          },
          K: function(date) {
            return _K(date).toString();
          },
          LL: function(date) {
            return applyPadding(_L(date), 2);
          },
          L: function(date) {
            return _L(date).toString();
          },
          NN: function(date) {
            return applyPadding(date.getMinutes(), 2);
          },
          N: function(date) {
            return date.getMinutes().toString();
          },
          SS: function(date) {
            return applyPadding(date.getSeconds(), 2);
          },
          S: function(date) {
            return date.getSeconds().toString();
          },
          QQQ: function(date) {
            return applyPadding(date.getMilliseconds(), 3);
          },
          Q: function(date) {
            return date.getMilliseconds().toString();
          }
        };
      };
      TimelineLocale.prototype.set = function(config) {
        var i, prop, self;
        self = this;
        for (i in config) {
          prop = config[i];
          "function" == typeof prop ? self[i] = prop : self["_" + i] = prop;
        }
      };
      getter("name", function() {
        return this._name;
      });
      getter("renderingType", function() {
        return this._renderingType;
      });
      getter("nouns", function() {
        return this._nouns;
      });
      getter("week", function() {
        return this._week;
      });
      getter("typicalDate", function() {
        return this._typicalDate;
      });
      getter("firstRowRendererConfigs", function() {
        return this._firstRowRendererConfigs;
      });
      getter("secondRowRendererConfigs", function() {
        return this._secondRowRendererConfigs;
      });
      return TimelineLocale;
    }();
    TimelineLocaleManager = function() {
      function TimelineLocaleManager() {
        this.localeChanged = new Signal();
        this._locale = null;
        this.locale = TimelineLocaleManager.defaultLocaleName;
      }
      var checkLocaleValues, getter, locales, setter, _ref;
      _ref = gs(TimelineLocaleManager), getter = _ref.getter, setter = _ref.setter;
      locales = {};
      checkLocaleValues = function(values) {
        var m, t;
        if (null != (null != values ? values.renderingType : void 0)) {
          t = values.renderingType;
          if (!_.contains(RENDERING_TYPES, t)) {
            m = "unknown rendering type : " + t;
            throw m;
          }
        }
      };
      TimelineLocaleManager.defaultLocaleName = null;
      TimelineLocaleManager.defineLocale = function(name, values) {
        checkLocaleValues(values);
        locales[name] || (locales[name] = new TimelineLocale(name));
        locales[name].set(values);
        TimelineLocaleManager.defaultLocaleName = name;
      };
      TimelineLocaleManager.defineLocale("en-us-condensed", {});
      setter("locale", function(name) {
        if (!name || !locales[name]) throw "locale " + name + " inconnue";
        if (!this._locale || this._locale.name !== name) {
          this._locale = locales[name];
          this.localeChanged.dispatch();
        }
      });
      getter("locale", function() {
        return this._locale;
      });
      getter("typicalDate", function() {
        return this._locale.typicalDate;
      });
      return TimelineLocaleManager;
    }();
    TickDateRendererFactoryManager = function() {
      function TickDateRendererFactoryManager() {
        this._factory = null;
      }
      var TDRFM, getter, setter, _ref;
      TDRFM = TickDateRendererFactoryManager;
      _ref = gs(TDRFM), getter = _ref.getter, setter = _ref.setter;
      TDRFM.factoryTypes = {};
      TDRFM.defaultFactoryName = null;
      TDRFM.defineFactoryType = function(rendererFactoryType) {
        TickDateRendererFactoryManager.defaultFactoryName = rendererFactoryType.factoryName;
        TickDateRendererFactoryManager.factoryTypes[rendererFactoryType.factoryName] = rendererFactoryType;
        return rendererFactoryType;
      };
      getter("factory", function() {
        return this._factory;
      });
      setter("factory", function(_arg) {
        var canvas, factoryName, timeViewportRow, timelineLocaleManager;
        factoryName = _arg.factoryName, timelineLocaleManager = _arg.timelineLocaleManager, 
        timeViewportRow = _arg.timeViewportRow, canvas = _arg.canvas;
        this._factory = new TDRFM.factoryTypes[factoryName]({
          timelineLocaleManager: timelineLocaleManager,
          timeViewportRow: timeViewportRow,
          canvas: canvas
        });
      });
      return TickDateRendererFactoryManager;
    }();
    /*
  Exporting timeline classes
 */
    ns = {};
    !function() {
      ns = {
        Constants: Constants,
        CondensedTickDateRendererConfig: CondensedTickDateRendererConfig,
        TimelineLocale: TimelineLocale,
        TimelineLocaleManager: TimelineLocaleManager,
        PeriodBasedComponent: PeriodBasedComponent,
        TickDateRenderer: TickDateRenderer,
        TickDateRendererFactory: TickDateRendererFactory,
        TickDateRendererFactoryManager: TickDateRendererFactoryManager,
        TickDateRendererUtil: TickDateRendererUtil,
        TimeBender: TimeBender,
        Timeline: Timeline,
        TimeViewportContainer: TimeViewportContainer,
        TimeViewportResizer: TimeViewportResizer,
        TimeScale: TimeScale,
        TimeScalesProvider: TimeScalesProvider,
        TimeScaleTickDateIterator: TimeScaleTickDateIterator,
        TimeScaleTickUtil: TimeScaleTickUtil,
        TimeViewport: TimeViewport,
        TypicalRenderingMetrics: TypicalRenderingMetrics,
        TypicalTextMetrics: TypicalTextMetrics
      };
      return ns;
    }();
    return ns;
  });
}).call(this);
(function() {
  var __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
    function ctor() {
      this.constructor = child;
    }
    for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  };
  !function(root, factory) {
    "function" == typeof define && define.amd ? define([ "tt.common", "tt.timeline" ], factory) : factory(root.tt.common, root.tt.timeline);
  }(this, function(common, timeline) {
    var CondensedTickDateRenderer, CondensedTickDateRendererFactory, Constants, CoreFunctions, Drawing, LABEL_MARGIN_LEFT, LABEL_MARGIN_RIGHT, TICK_WIDTH, TickDateRenderer, TickDateRendererFactory, TickDateRendererFactoryManager, TypicalRenderingMetrics, formatDate, gs, hexToRgb, _;
    CoreFunctions = common.CoreFunctions, Drawing = common.Drawing, _ = common._;
    formatDate = CoreFunctions.formatDate, gs = CoreFunctions.gs, hexToRgb = CoreFunctions.hexToRgb;
    TickDateRendererFactoryManager = timeline.TickDateRendererFactoryManager, TickDateRendererFactory = timeline.TickDateRendererFactory, 
    TickDateRenderer = timeline.TickDateRenderer, TypicalRenderingMetrics = timeline.TypicalRenderingMetrics, 
    Constants = timeline.Constants;
    TICK_WIDTH = 1;
    LABEL_MARGIN_LEFT = TICK_WIDTH + 3;
    LABEL_MARGIN_RIGHT = 5;
    CondensedTickDateRendererFactory = function(_super) {
      function CondensedTickDateRendererFactory(conf) {
        CondensedTickDateRendererFactory.__super__.constructor.call(this, conf);
      }
      var F, defaultThemes;
      __extends(CondensedTickDateRendererFactory, _super);
      F = CondensedTickDateRendererFactory;
      F.factoryName = "CondensedTickDateRendererFactory";
      F.renderingType = Constants.RENDERING_TYPE_CONDENSED;
      CondensedTickDateRendererFactory.prototype.farctoryName = function() {
        return CondensedTickDateRenderer.factoryName;
      };
      CondensedTickDateRendererFactory.prototype.renderingType = function() {
        return CondensedTickDateRenderer.renderingType;
      };
      CondensedTickDateRendererFactory.prototype.typicalRenderingMetrics = function(config) {
        var textMetrics;
        textMetrics = this.typicalFormattedDateTextMetrics(config.formatFunctions);
        return new TypicalRenderingMetrics(LABEL_MARGIN_LEFT + 1.1 * textMetrics.width + LABEL_MARGIN_RIGHT, textMetrics.heights.height, textMetrics);
      };
      defaultThemes = [ {
        fontStyle: "normal 400"
      }, {
        fontStyle: "normal 300"
      } ];
      CondensedTickDateRendererFactory.prototype.provideTheme = function(params) {
        return defaultThemes[params.rowIndex];
      };
      CondensedTickDateRendererFactory.prototype._createRenderer = function() {
        return new CondensedTickDateRenderer(this._timeViewportRow, this._canvas);
      };
      return CondensedTickDateRendererFactory;
    }(TickDateRendererFactory);
    CondensedTickDateRenderer = function(_super) {
      function CondensedTickDateRenderer(timeViewportRow, canvas) {
        CondensedTickDateRenderer.__super__.constructor.call(this, timeViewportRow, canvas);
      }
      var getter, setter, _ref;
      __extends(CondensedTickDateRenderer, _super);
      _ref = gs(CondensedTickDateRenderer), getter = _ref.getter, setter = _ref.setter;
      getter("name", function() {
        var _ref1;
        return this.tickDate && (null != (_ref1 = this.config) ? _ref1.formatFunctions : void 0) ? "[id:" + this.id + ", hashCode:" + this.hashCode + "] " + formatDate(this.tickDate, this.config.formatFunctions) : "[id:" + this.id + ", hashCode:" + this.hashCode + "] ???";
      });
      CondensedTickDateRenderer.prototype._update = function(ctx) {
        var component, fontStyle, formattedDateFillStyle, h, rowHeight, self, tickPixelPosition, tickStrokeStyle, x;
        CondensedTickDateRenderer.__super__._update.call(this, ctx);
        self = this;
        x = self.x;
        if (self.rolloverPercent > 0) {
          ctx.fillStyle = "rgba(255, 255, 255, " + self.rolloverPercent + ")";
          h = self._component.height;
          ctx.fillRect(x, 0, self._pixelWidthFromTickDateToNextTickDate(), h);
        }
        fontStyle = self.theme.fontStyle;
        component = self._component;
        formattedDateFillStyle = self.rolloverPercent > 0 ? 0 === component._rowIndex ? self._computeRolloverTextColor(self.p500, .87) : self._computeRolloverTextColor(self.p400, .54) : 0 === component._rowIndex ? self.p500txt.primary(1) : self.p400txt.secondary(1);
        tickStrokeStyle = 0 === component._rowIndex ? self.p500txt.primary(1) : self.p400txt.secondary(1);
        rowHeight = self._component.height;
        tickPixelPosition = x + .5;
        ctx.font = fontStyle + " " + self._component.defaultFont;
        ctx.textBaseline = "middle";
        ctx.fillStyle = formattedDateFillStyle;
        self._fillText(ctx, formatDate(self.tickDate, self.config.formatFunctions), self._computeTickLabelPadding(), rowHeight / 2);
        ctx.lineWidth = TICK_WIDTH;
        ctx.strokeStyle = tickStrokeStyle;
        ctx.beginPath();
        ctx.moveTo(tickPixelPosition, 0);
        ctx.lineTo(tickPixelPosition, rowHeight);
        ctx.stroke();
        if (self.rolloverPercent > 0) {
          self._drawUnderline(ctx);
          self._drawShadows(ctx);
        }
        return !0;
      };
      CondensedTickDateRenderer.prototype._computeTickLabelPadding = function() {
        var pixelWidthFromTickDateToNextTickDate, self, textWidth, x;
        self = this;
        x = self.x;
        if (x >= 0) return x + LABEL_MARGIN_LEFT;
        pixelWidthFromTickDateToNextTickDate = self._pixelWidthFromTickDateToNextTickDate();
        textWidth = self.renderingMetrics.typicalTextMetrics.width;
        return x + pixelWidthFromTickDateToNextTickDate - LABEL_MARGIN_RIGHT - LABEL_MARGIN_LEFT > textWidth ? LABEL_MARGIN_LEFT : x + pixelWidthFromTickDateToNextTickDate - LABEL_MARGIN_RIGHT - textWidth;
      };
      CondensedTickDateRenderer.prototype._drawUnderline = function(ctx) {
        var offset, percent, self, w, x, y;
        self = this;
        x = self.x;
        percent = self.rolloverPercent;
        w = self._pixelWidthFromTickDateToNextTickDate();
        offset = .5 * w * (1 - percent);
        y = self._component.inversed ? 1 : self._component.height - 1;
        ctx.lineWidth = 2;
        ctx.strokeStyle = self.pa400;
        ctx.beginPath();
        ctx.moveTo(x + offset, y);
        ctx.lineTo(x + w - offset, y);
        ctx.stroke();
      };
      CondensedTickDateRenderer.prototype._drawShadows = function(ctx) {
        var a, al, alphas, h, i, percent, self, w, x, x1, x2, y;
        self = this;
        percent = self.rolloverPercent;
        x = self.x;
        w = self._pixelWidthFromTickDateToNextTickDate();
        h = self._component.height;
        i = 0;
        alphas = Drawing.DEFAULT_ALPHAS;
        al = alphas.length;
        for (;al > i; ) {
          a = alphas[i];
          x1 = x + i + 1;
          y = h;
          x2 = x + w - i + 1;
          ctx.strokeStyle = "rgba(0, 0, 0, " + a * percent + ")";
          ctx.beginPath();
          ctx.moveTo(x1, 0);
          ctx.lineTo(x1, y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x2, 0);
          ctx.lineTo(x2, y);
          ctx.stroke();
          i++;
        }
      };
      CondensedTickDateRenderer.prototype._computeRolloverTextColor = function(targetColor, sourceAlpha) {
        var self;
        self = this;
        return self._component._computeRolloverTextColor(self.rolloverPercent, targetColor, sourceAlpha);
      };
      return CondensedTickDateRenderer;
    }(TickDateRenderer);
    TickDateRendererFactoryManager.defineFactoryType(CondensedTickDateRendererFactory);
  });
}).call(this);
(function() {
  !function(root, factory) {
    if ("function" == typeof define && "object" == typeof define.amd && define.amd) define("tt.timechart", [ "tt.common", "tt.timeline" ], function(common, timeline) {
      root.tt = root.tt || {};
      return root.tt.timechart = factory(common, timeline);
    }); else {
      root.tt = root.tt || {};
      root.tt.timechart = factory(root.tt.common, root.tt.timeline);
    }
  }(this, function(common, timeline) {
    var CanvasBasedComponent, CanvasRenderer, CanvasTextMetricProcessor, CoreFunctions, DateUtil, Drawing, Ease, EventDispatcher, Feedback, PX, Period, PeriodBasedComponent, Point, Ticker, Ticks, TimeChartViewport, TimeChartViewportBackground, TimeViewportContainer, Timeline, Tween, gs, mixinProto, ns, undefinedstr, _, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
    undefinedstr = "undefined";
    CoreFunctions = common.CoreFunctions, DateUtil = common.DateUtil, CanvasTextMetricProcessor = common.CanvasTextMetricProcessor, 
    EventDispatcher = common.EventDispatcher, Period = common.Period, _ = common._, 
    PX = common.PX, Tween = common.Tween, Ticker = common.Ticker, Ease = common.Ease, 
    Point = common.Point, CanvasRenderer = common.CanvasRenderer, CanvasBasedComponent = common.CanvasBasedComponent, 
    Drawing = common.Drawing;
    gs = CoreFunctions.gs, mixinProto = CoreFunctions.mixinProto;
    PeriodBasedComponent = timeline.PeriodBasedComponent, Timeline = timeline.Timeline, 
    TimeViewportContainer = timeline.TimeViewportContainer;
    Ticks = function(_super) {
      function Ticks(timeChart, canvas) {
        Ticks.__super__.constructor.call(this, timeChart, canvas);
      }
      var startOfNextDay;
      __extends(Ticks, _super);
      startOfNextDay = DateUtil.startOfNextDay;
      Ticks.prototype._update = function(ctx) {
        var cf, component, cs, finish, finishX, i, len, self, startX, td, ticksDate, todayX, w;
        self = this;
        ctx.strokeStyle = self.p300txt.divider(1);
        ctx.lineWidth = 1;
        component = self._component;
        w = component.width;
        ticksDate = component.ticksDate;
        if (ticksDate && (len = ticksDate.length) > 0) {
          i = 0;
          for (;len > i; ) {
            td = ticksDate[i];
            self._drawTick(ctx, td);
            i++;
          }
        }
        self._setLineDash(ctx, [ 4, 8 ]);
        if (component.displayToday) {
          todayX = component.dateToPixelPosition(new Date()) + .5;
          if (todayX > 0 && w > todayX) {
            ctx.strokeStyle = self.pa700;
            self.__drawTick(ctx, todayX);
          }
        }
        ctx.strokeStyle = self.p700;
        if (component.displayStart && (cs = component.start)) {
          startX = component.dateToPixelPosition(cs) + .5;
          startX > 0 && w > startX && self.__drawTick(ctx, startX);
        }
        if (component.displayFinish && (cf = component.finish)) {
          finish = startOfNextDay(cf);
          finishX = component.dateToPixelPosition(finish) + .5;
          finishX > 0 && w > finishX && self.__drawTick(ctx, finishX);
        }
      };
      Ticks.prototype._drawTick = function(ctx, td) {
        var component, self, x;
        self = this;
        component = self._component;
        x = component.dateToPixelPosition(td) + .5;
        self.__drawTick(ctx, x);
      };
      Ticks.prototype.__drawTick = function(ctx, x) {
        var component, self;
        self = this;
        component = self._component;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, component.height);
        ctx.stroke();
      };
      return Ticks;
    }(Drawing);
    Feedback = function(_super) {
      function Feedback(timeChart, canvas) {
        Feedback.__super__.constructor.call(this, timeChart, canvas);
      }
      var hexToRgbaStr;
      __extends(Feedback, _super);
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      Feedback.prototype._update = function(ctx) {
        var c, component, drawTick, h, self, tweenings;
        Feedback.__super__._update.call(this, ctx);
        self = this;
        c = ctx;
        component = this._component;
        h = component.height;
        tweenings = component.periodRolloverTweenings;
        c.lineWidth = 1;
        self._setLineDash(c, [ 5 ]);
        drawTick = function(x) {
          c.beginPath();
          c.moveTo(x, 0);
          c.lineTo(x, h);
          return c.stroke();
        };
        _.forEach(tweenings, function(t) {
          var p;
          p = t.tweening.percent;
          if (p) {
            c.strokeStyle = self.p400txt.secondary(p);
            drawTick(component.dateToPixelPosition(t.start) + .5);
            drawTick(component.dateToPixelPosition(t.end) + .5);
          }
        });
      };
      return Feedback;
    }(Drawing);
    TimeChartViewportBackground = function(_super) {
      function TimeChartViewportBackground(conf) {
        var self;
        self = this;
        self.PeriodBasedComponent_init();
        TimeChartViewportBackground.__super__.constructor.call(this, conf);
        self._timeline = conf.timeline;
        self._timelineLocaleManager = conf.timelineLocaleManager;
        self._timeViewport = conf.timeViewport;
        self._periodRolloverTweened = conf.periodRolloverTweened;
        self._periodRolloverTweened.add(function(e) {
          return self.addPeriodRolloverTweening(e);
        });
        self._periodRolloverTweenings = [];
        self._periodRolloverTweeningsChangedFlag = !1;
        self._displayToday = !0;
        self._displayTodayChangedFlag = !1;
        self._start = null;
        self._startChangedFlag = !1;
        self._finish = null;
        self._finishChangedFlag = !1;
        self._displayStart = !0;
        self._displayStartChangedFlag = !1;
        self._displayFinish = !0;
        self._displayFinishChangedFlag = !1;
        self._ticksCanvas = null;
        self._ticksDrawing = null;
        self._feedbackCanvas = null;
        self._feedback = null;
        self._ticksDate = null;
        self._processOptions(conf.options);
      }
      var getter, setter, _ref;
      __extends(TimeChartViewportBackground, _super);
      _ref = gs(TimeChartViewportBackground), getter = _ref.getter, setter = _ref.setter;
      TimeChartViewportBackground.DEFAULT_OPTIONS = {
        width: "100%",
        height: "100%"
      };
      mixinProto(TimeChartViewportBackground, PeriodBasedComponent);
      getter("ticksDate", function() {
        return this._ticksDate;
      });
      setter("ticksDate", function(td) {
        var self;
        self = this;
        self._ticksDateChangedFlag = td;
        self._ticksDate = td;
        self.invalidatePropsAndDisplayList();
      });
      getter("displayToday", function() {
        return this._displayToday;
      });
      setter("displayToday", function(displayToday) {
        var self;
        self = this;
        if (self._displayToday !== displayToday) {
          self._displayToday = displayToday;
          self._displayTodayChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("start", function() {
        return this._start;
      });
      setter("start", function(start) {
        var self;
        self = this;
        if (self._start !== start) {
          self._start = start;
          self._startChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("finish", function() {
        return this._finish;
      });
      setter("finish", function(finish) {
        var self;
        self = this;
        if (self._finish !== finish) {
          self._finish = finish;
          self._finishChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("displayStart", function() {
        return this._displayStart;
      });
      setter("displayStart", function(displayStart) {
        var self;
        self = this;
        if (self._displayStart !== displayStart) {
          self._displayStart = displayStart;
          self._displayStartChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("displayFinish", function() {
        return this._displayFinish;
      });
      setter("displayFinish", function(displayFinish) {
        var self;
        self = this;
        if (self._displayFinish !== displayFinish) {
          self._displayFinish = displayFinish;
          self._displayFinishChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("periodRolloverTweenings", function() {
        return this._periodRolloverTweenings;
      });
      TimeChartViewportBackground.prototype.addPeriodRolloverTweening = function(e) {
        this._periodRolloverTweeningsChangedFlag = !0;
        this._periodRolloverTweenings.push(e);
        this.invalidatePropsAndDisplayList();
      };
      TimeChartViewportBackground.prototype._createChildren = function() {
        TimeChartViewportBackground.__super__._createChildren.call(this);
        this._createTicks();
        this._createFeedback();
      };
      TimeChartViewportBackground.prototype._initCompleted = function() {
        var self;
        TimeChartViewportBackground.__super__._initCompleted.call(this);
        self = this;
        self.period = self._timeViewport.period;
      };
      TimeChartViewportBackground.prototype._updateDisplayList = function() {
        var self, tos;
        TimeChartViewportBackground.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        if (self._ticksDateChangedFlag || tos || self._displayTodayChangedFlag || self._startChangedFlag || self._finishChangedFlag || self._displayStartChangedFlag || self._displayFinishChangedFlag) {
          self._updateMillisByPixel();
          self._updateTicks();
        }
        (self._periodRolloverTweeningsChangedFlag || self._ticksDateChangedFlag || tos) && self._updateFeedback();
      };
      TimeChartViewportBackground.prototype._resetPropFlags = function() {
        var self;
        TimeChartViewportBackground.__super__._resetPropFlags.call(this);
        self = this;
        self.PeriodBasedComponent_resetPropFlags();
        self._ticksDateChangedFlag = !1;
        self._periodRolloverTweeningsChangedFlag = !1;
        self._periodRolloverTweenings = [];
        self._displayTodayChangedFlag = !1;
        self._startChangedFlag = !1;
        self._finishChangedFlag = !1;
        self._displayStartChangedFlag = !1;
        self._displayFinishChangedFlag = !1;
      };
      TimeChartViewportBackground.prototype._createTicks = function() {
        var self;
        self = this;
        self._ticksCanvas = self._addCanvas("ticks-canvas");
        self._ticksDrawing = new Ticks(self, self._ticksCanvas);
      };
      TimeChartViewportBackground.prototype._createFeedback = function() {
        var self;
        self = this;
        self._feedbackCanvas = self._addCanvas("feedback-canvas");
        self._feedback = new Feedback(self, self._feedbackCanvas);
      };
      TimeChartViewportBackground.prototype._handleThemeChanged = function() {
        var self;
        TimeChartViewportBackground.__super__._handleThemeChanged.call(this);
        self = this;
        self.domStyle.backgroundColor = self.p300;
      };
      TimeChartViewportBackground.prototype._updateTicks = function() {
        this._ticksDrawing.update();
      };
      TimeChartViewportBackground.prototype._updateFeedback = function() {
        this._feedback.update();
      };
      TimeChartViewportBackground.prototype._configureUiBindings = function(enable) {
        var self;
        TimeChartViewportBackground.__super__._configureUiBindings.call(this, enable);
        self = this;
        enable && self._timeline.ticksDateChanged.add(function(ticksDate) {
          return self.ticksDate = ticksDate;
        }, this);
      };
      TimeChartViewportBackground.prototype._configureModelBindings = function(enable) {
        var self, tv;
        TimeChartViewportBackground.__super__._configureModelBindings.call(this, enable);
        self = this;
        if (enable) {
          tv = self._timeViewport;
          tv.periodChanged.add(self._periodChanged, this);
        }
      };
      TimeChartViewportBackground.prototype._periodChanged = function(oldPeriod, newPeriod) {
        this.period = newPeriod;
      };
      TimeChartViewportBackground.prototype._processOptions = function(options) {
        var height, self, width, _ref2;
        self = this;
        _ref2 = self._normalizedOptions(options || {}), width = _ref2.width, height = _ref2.height;
        self.domStyle.height = height;
        return self.domStyle.width = width;
      };
      TimeChartViewportBackground.prototype._normalizedOptions = function(options) {
        var normalizedOptions;
        normalizedOptions = _.clone(options);
        _.defaults(normalizedOptions, TimeChartViewportBackground.DEFAULT_OPTIONS);
        return normalizedOptions;
      };
      return TimeChartViewportBackground;
    }(CanvasBasedComponent);
    /*
  Main class to create graphical TimeChartViewport
 */
    TimeChartViewport = function(_super) {
      function TimeChartViewport(conf) {
        var self;
        TimeChartViewport.__super__.constructor.call(this, conf);
        self = this;
        self._timeline = conf.timeline;
        self._periodRolloverTweened = conf.periodRolloverTweened;
        self.timeChartViewportBackground = null;
      }
      var getter, setter, _ref;
      __extends(TimeChartViewport, _super);
      _ref = gs(TimeChartViewport), getter = _ref.getter, setter = _ref.setter;
      setter("start", function(start) {
        this.timeChartViewportBackground.start = start;
      });
      setter("displayStart", function(displayStart) {
        this.timeChartViewportBackground.displayStart = displayStart;
      });
      setter("finish", function(finish) {
        this.timeChartViewportBackground.finish = finish;
      });
      setter("displayFinish", function(displayFinish) {
        this.timeChartViewportBackground.displayFinish = displayFinish;
      });
      setter("displayToday", function(displayToday) {
        this.timeChartViewportBackground.displayToday = displayToday;
      });
      TimeChartViewport.prototype._createChildren = function() {
        var self;
        TimeChartViewport.__super__._createChildren.call(this);
        self = this;
        self.timeChartViewportBackground = self._addChild(TimeChartViewportBackground, {
          name: "time-chart-viewport-background",
          timeline: self._timeline,
          timelineLocaleManager: self._timelineLocaleManager,
          timeViewport: self._timeViewport,
          periodRolloverTweened: self._periodRolloverTweened,
          options: null
        });
      };
      return TimeChartViewport;
    }(TimeViewportContainer);
    ns = {};
    !function() {
      ns = {
        TimeChartViewport: TimeChartViewport
      };
      return ns;
    }();
    return ns;
  });
}).call(this);
(function() {
  !function(root, factory) {
    if ("function" == typeof define && "object" == typeof define.amd && define.amd) define("tt.ganttchart", [ "tt.common", "tt.timeline", "tt.timechart" ], function(common, timeline, timechart) {
      root.tt = root.tt || {};
      return root.tt.ganttchart = factory(common, timeline, timechart);
    }); else {
      root.tt = root.tt || {};
      root.tt.ganttchart = factory(root.tt.common, root.tt.timeline, root.tt.timechart);
    }
  }(this, function(common, timeline, timechart) {
    var AboutPanel, Button, CanvasBasedComponent, CanvasManager, CanvasTextMetricProcessor, CompactMilestoneRenderer, CompactSummaryRenderer, CompactTaskRenderer, CompactTemporalDataRendererFactory, Component, ComponentRenderer, ComponentRendererFactory, ConfigurationPanel, CoreFunctions, DM, DataProvider, DateUtil, Detect, DomainModel, Drawing, Ease, ExtendedMilestoneRenderer, ExtendedSummaryRenderer, ExtendedTaskRenderer, ExtendedTemporalDataRendererFactory, GanttChart, GanttChartHMenuBar, GanttChartLocale, GanttChartLocaleManager, GanttChartVMenuBar, GanttModel, GanttModelDataProvider, GanttModelFactory, Icon, Label, Link, ListView, LocaleChooser, LocaleManager, LocaleRenderer, MenuBar, Milestone, MilestoneComponent, MilestoneDrawing, MilestoneRenderer, NormalMilestoneRenderer, NormalSummaryRenderer, NormalTaskRenderer, NormalTemporalDataRendererFactory, PX, Panel, Period, PeriodBasedComponent, PixelRatioManager, Point, PredecessorLink, PredecessorLinksComponent, PredecessorLinksDrawing, RolloverTweener, Scrollbar, Signal, Summary, SummaryBarComponent, SummaryBarDrawing, SummaryRenderer, Task, TaskBarComponent, TaskBarDrawing, TaskRenderer, TemporalCanvasBasedComponent, TemporalData, TemporalDataDrawing, TemporalDataRenderer, TemporalDataRendererFactory, Theme, ThemeChooser, ThemeManager, ThemeRenderer, Ticker, TimeBender, TimeChartViewport, TimeViewport, TimeViewportResizer, Timeline, TimelineLocaleManager, Tween, gs, mixinProto, ns, simpleParseDate, undefinedstr, _, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, __bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    };
    undefinedstr = "undefined";
    CanvasTextMetricProcessor = common.CanvasTextMetricProcessor, CoreFunctions = common.CoreFunctions, 
    DateUtil = common.DateUtil, LocaleManager = common.LocaleManager, Signal = common.Signal, 
    Period = common.Period, _ = common._, PX = common.PX, Detect = common.Detect, Ticker = common.Ticker, 
    Point = common.Point, Tween = common.Tween, Ease = common.Ease, Button = common.Button, 
    DataProvider = common.DataProvider, DomainModel = common.DomainModel, Drawing = common.Drawing, 
    TimeViewport = common.TimeViewport, ThemeManager = common.ThemeManager, Component = common.Component, 
    ComponentRenderer = common.ComponentRenderer, ComponentRendererFactory = common.ComponentRendererFactory, 
    CanvasManager = common.CanvasManager, CanvasBasedComponent = common.CanvasBasedComponent, 
    Icon = common.Icon, Label = common.Label, ListView = common.ListView, MenuBar = common.MenuBar, 
    Panel = common.Panel, PixelRatioManager = common.PixelRatioManager, RolloverTweener = common.RolloverTweener, 
    Scrollbar = common.Scrollbar, Theme = common.Theme;
    gs = CoreFunctions.gs, simpleParseDate = CoreFunctions.simpleParseDate, mixinProto = CoreFunctions.mixinProto;
    TimelineLocaleManager = timeline.TimelineLocaleManager, PeriodBasedComponent = timeline.PeriodBasedComponent, 
    Timeline = timeline.Timeline, TimeViewportResizer = timeline.TimeViewportResizer, 
    TimeBender = timeline.TimeBender;
    TimeChartViewport = timechart.TimeChartViewport;
    TemporalDataDrawing = function(_super) {
      function TemporalDataDrawing(component, canvas) {
        var self;
        TemporalDataDrawing.__super__.constructor.call(this, component, canvas);
        self = this;
        self.lastComputedStartLinkAnchorPoint = new Point(void 0, void 0);
        self.lastComputedFinishLinkAnchorPoint = new Point(void 0, void 0);
        self.lastComputedLinkStrokeStyle = null;
      }
      var DATE_H_MARGIN, DATE_MIN_DISTANCE, TDD, hexToRgbaStr, simpleDateFormat;
      __extends(TemporalDataDrawing, _super);
      TDD = TemporalDataDrawing;
      hexToRgbaStr = CoreFunctions.hexToRgbaStr, simpleDateFormat = CoreFunctions.simpleDateFormat;
      TemporalDataDrawing.ARROW_INDICATOR_WIDTH = 5;
      DATE_MIN_DISTANCE = 15;
      DATE_H_MARGIN = 5;
      TDD.DATE_H_MARGIN = DATE_H_MARGIN;
      TemporalDataDrawing.prototype._temporalDataNameWidth = function() {
        var font, name, self, temporalData, width;
        self = this;
        font = self._component.defaultFont;
        temporalData = self._component.temporalData;
        width = temporalData._dp_nameWidth;
        if (null === width || temporalData._dp_nameWidthFont !== font) {
          temporalData._dp_nameWidth = width = (name = self._component.temporalData.name) ? (CanvasTextMetricProcessor.INSTANCE.font = font, 
          CanvasTextMetricProcessor.INSTANCE.width(name)) : 0;
          temporalData._dp_nameWidthFont = font;
        }
        return width;
      };
      TemporalDataDrawing.prototype._temporalDataDateWidth = function() {
        var font, self, temporalData, width;
        self = this;
        font = self._component.dateFont;
        temporalData = self._component.temporalData;
        width = temporalData._dp_dateWidth;
        if (null === width || temporalData._dp_dateWidthFont !== font) {
          CanvasTextMetricProcessor.INSTANCE.font = font;
          temporalData._dp_dateWidth = width = CanvasTextMetricProcessor.INSTANCE.width("8888/88/88");
          temporalData._dp_dateWidthFont = font;
        }
        return width;
      };
      TemporalDataDrawing.prototype._update = function(ctx) {
        var p, self;
        TemporalDataDrawing.__super__._update.call(this, ctx);
        self = this;
        p = self.lastComputedStartLinkAnchorPoint;
        p.x = void 0;
        p.y = void 0;
        p = self.lastComputedFinishLinkAnchorPoint;
        p.x = void 0;
        p.y = void 0;
      };
      TemporalDataDrawing.prototype._leftPredecessorLinkArrowReservedWidth = function(startX) {
        var arrowWidth, comp, predecessorLinkTypes, self, temporalData, w;
        self = this;
        comp = self._component;
        w = comp.width;
        temporalData = comp.temporalData;
        predecessorLinkTypes = temporalData.getPredecessorLinkTypes();
        arrowWidth = Link.ARROW_PLUS_TAIL_WIDTH;
        return predecessorLinkTypes[PredecessorLink.TYPE_FS] && w > startX - arrowWidth ? arrowWidth : 0;
      };
      TemporalDataDrawing.prototype._updateLinkMetadata = function(strokeStyle, startX, endX, y) {
        var finishLinkAnchorPoint, normalizedY, self, startLinkAnchorPoint;
        self = this;
        normalizedY = y - .5;
        self.lastComputedLinkStrokeStyle = strokeStyle;
        startLinkAnchorPoint = self.lastComputedStartLinkAnchorPoint;
        startLinkAnchorPoint.x = startX + .5;
        startLinkAnchorPoint.y = normalizedY;
        finishLinkAnchorPoint = self.lastComputedFinishLinkAnchorPoint;
        finishLinkAnchorPoint.x = endX + .5;
        return finishLinkAnchorPoint.y = normalizedY;
      };
      TemporalDataDrawing.prototype._rolloverPercent = function() {
        var self, _ref1;
        self = this;
        return self._component.rolloverPercent || (null != (_ref1 = self._component.temporalData._dp_parentRolloverTweening) ? _ref1.percent : void 0);
      };
      TemporalDataDrawing.prototype._drawDates = function(ctx, rolloverPercent, startDate, finishDate, startX, endX, barStartX, barEndX, barOffsetTop, arrowWidth, paddingTop, paddingBottom) {
        var comp, dashedLineEndX, dashedLineTop, dateFont, dateTxtTop, dateTxtWidth, datesCenterSpace, endDateTxt, endDateX, enoughLeftSpace, enoughRightSpace, leftArrowEndX, leftArrowStartX, neededDateSideSpace, neededDatesCenterSpace, neededDatesSideSpace, rightArrowEndX, self, startDateTxt, startDateX, tickBottom, tickHeight, tickTop, tickX, w;
        self = this;
        comp = self._component;
        w = comp.width;
        dateFont = comp.dateFont;
        ctx.fillStyle = ctx.strokeStyle = self.p300txt.primary(rolloverPercent ? .35 + .65 * rolloverPercent : .35);
        ctx.font = dateFont;
        ctx.textBaseline = "middle";
        tickTop = paddingTop + .5;
        tickBottom = barOffsetTop - paddingBottom + .5;
        tickHeight = tickBottom - tickTop;
        dateTxtTop = tickTop + tickHeight / 2;
        dateTxtWidth = self._temporalDataDateWidth(comp._temporalData);
        neededDatesCenterSpace = 2 * (2 * DATE_H_MARGIN + dateTxtWidth + arrowWidth) + DATE_MIN_DISTANCE;
        neededDateSideSpace = DATE_H_MARGIN + dateTxtWidth + arrowWidth;
        neededDatesSideSpace = 2 * (DATE_H_MARGIN + neededDateSideSpace) + DATE_MIN_DISTANCE;
        datesCenterSpace = barEndX - barStartX;
        startDateTxt = simpleDateFormat(startDate);
        endDateTxt = simpleDateFormat(finishDate);
        dashedLineTop = Math.floor(dateTxtTop) === dateTxtTop ? dateTxtTop - .5 : dateTxtTop;
        if (startX >= 0 && w > startX) {
          tickX = startX + .5;
          ctx.beginPath();
          ctx.moveTo(tickX, tickTop);
          ctx.lineTo(tickX, tickBottom);
          ctx.stroke();
        }
        if (endX >= 0 && w > endX) {
          tickX = endX + .5;
          ctx.beginPath();
          ctx.moveTo(tickX, tickTop);
          ctx.lineTo(tickX, tickBottom);
          ctx.stroke();
        }
        self._setLineDash(ctx, [ 4, 2 ]);
        if (datesCenterSpace > neededDatesCenterSpace) {
          startDateX = barStartX + arrowWidth + DATE_H_MARGIN;
          endDateX = barEndX - arrowWidth - DATE_H_MARGIN - dateTxtWidth;
          self._drawHArrow(ctx, barStartX + 1, barStartX + 1 + arrowWidth, dashedLineTop, arrowWidth);
          self._fillText(ctx, startDateTxt, startDateX, dateTxtTop);
          self._fillText(ctx, endDateTxt, endDateX, dateTxtTop);
          self._drawHArrow(ctx, barEndX, barEndX - arrowWidth, dashedLineTop, arrowWidth);
          ctx.beginPath();
          ctx.moveTo(startDateX + dateTxtWidth + DATE_H_MARGIN, dashedLineTop);
          ctx.lineTo(endDateX - DATE_H_MARGIN, dashedLineTop);
          ctx.stroke();
        } else {
          if (endX >= 0 && w > startX) {
            ctx.beginPath();
            ctx.moveTo(barStartX + .5, dashedLineTop);
            ctx.lineTo(barEndX, dashedLineTop);
            ctx.stroke();
          }
          enoughLeftSpace = barStartX >= neededDateSideSpace;
          enoughRightSpace = w - barEndX >= neededDateSideSpace;
          if (enoughLeftSpace && enoughRightSpace) {
            self._drawHArrow(ctx, barStartX, barStartX - arrowWidth, dashedLineTop, arrowWidth);
            self._fillText(ctx, startDateTxt, barStartX - neededDateSideSpace, dateTxtTop);
            self._drawHArrow(ctx, barEndX + 1, barEndX + 1 + arrowWidth, dashedLineTop, arrowWidth);
            self._fillText(ctx, endDateTxt, barEndX + 1 + arrowWidth + DATE_H_MARGIN, dateTxtTop);
          } else if (enoughLeftSpace) {
            if (!enoughRightSpace) {
              self._fillText(ctx, startDateTxt, barStartX - neededDatesSideSpace, dateTxtTop);
              leftArrowStartX = barStartX - neededDatesSideSpace + 2 * DATE_H_MARGIN + dateTxtWidth;
              leftArrowEndX = leftArrowStartX + arrowWidth;
              dashedLineEndX = leftArrowEndX + DATE_MIN_DISTANCE;
              rightArrowEndX = dashedLineEndX + arrowWidth;
              self._drawHArrow(ctx, leftArrowStartX, leftArrowEndX, dashedLineTop, arrowWidth);
              ctx.beginPath();
              ctx.moveTo(leftArrowEndX + .5, dashedLineTop);
              ctx.lineTo(dashedLineEndX, dashedLineTop);
              ctx.stroke();
              self._drawHArrow(ctx, dashedLineEndX + arrowWidth, dashedLineEndX, dashedLineTop, arrowWidth);
              self._fillText(ctx, endDateTxt, rightArrowEndX + DATE_H_MARGIN, dateTxtTop);
            }
          } else {
            self._fillText(ctx, startDateTxt, barEndX + DATE_H_MARGIN, dateTxtTop);
            leftArrowStartX = barEndX + 2 * DATE_H_MARGIN + dateTxtWidth;
            leftArrowEndX = leftArrowStartX + arrowWidth;
            dashedLineEndX = leftArrowEndX + DATE_MIN_DISTANCE;
            rightArrowEndX = dashedLineEndX + arrowWidth;
            self._drawHArrow(ctx, leftArrowStartX, leftArrowEndX, dashedLineTop, arrowWidth);
            ctx.beginPath();
            ctx.moveTo(leftArrowEndX + .5, dashedLineTop);
            ctx.lineTo(dashedLineEndX, dashedLineTop);
            ctx.stroke();
            self._drawHArrow(ctx, dashedLineEndX + arrowWidth, dashedLineEndX, dashedLineTop, arrowWidth);
            self._fillText(ctx, endDateTxt, rightArrowEndX + DATE_H_MARGIN, dateTxtTop);
          }
        }
        return self._setLineDash(ctx, []);
      };
      return TemporalDataDrawing;
    }(Drawing);
    TaskBarDrawing = function(_super) {
      function TaskBarDrawing(component, canvas) {
        TaskBarDrawing.__super__.constructor.call(this, component, canvas);
      }
      var BAR_PADDING_BOTTOM, BAR_PADDING_TOP, PERCENT_BAR_HEIGHT, TASK_NAME_MARGIN_LEFT, TASK_NAME_MARGIN_RIGHT, ZIGZAG_Y, hexToRgbaStr;
      __extends(TaskBarDrawing, _super);
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      PERCENT_BAR_HEIGHT = 2;
      ZIGZAG_Y = 5;
      TASK_NAME_MARGIN_LEFT = 7;
      TASK_NAME_MARGIN_RIGHT = 7;
      BAR_PADDING_TOP = 2;
      BAR_PADDING_BOTTOM = 2;
      TaskBarDrawing.prototype._update = function(ctx) {
        var TCBC, barBottom, barEndX, barHeight, barOffsetTop, barStartX, barTop, centerSpace, comp, compactMode, currentY, endX, finishDate, h, leftPredecessorLinkArrowReservedWidth, leftSpace, mode, nameWidth, newLen, odd, percentTop, percentX, rightSpace, rolloverPercent, self, spaceForText, startDate, startX, task, taskFillStyle, taskName, textTop, w, zigzagX;
        TaskBarDrawing.__super__._update.call(this, ctx);
        self = this;
        TCBC = TemporalCanvasBasedComponent;
        compactMode = TCBC.MODE_COMPACT;
        comp = self._component;
        mode = comp.mode;
        task = comp.task;
        startDate = task.start;
        finishDate = task.finish;
        h = comp.height;
        if (mode === compactMode) {
          barHeight = h - BAR_PADDING_TOP - BAR_PADDING_BOTTOM;
          barTop = BAR_PADDING_TOP;
          barBottom = BAR_PADDING_TOP + barHeight;
          textTop = BAR_PADDING_TOP + barHeight / 2;
        } else {
          barOffsetTop = h / 2;
          barHeight = barOffsetTop - BAR_PADDING_TOP - BAR_PADDING_BOTTOM;
          barTop = barOffsetTop + BAR_PADDING_TOP;
          barBottom = barOffsetTop + BAR_PADDING_TOP + barHeight;
          textTop = barOffsetTop + BAR_PADDING_TOP + barHeight / 2;
        }
        w = comp.width;
        startX = comp.taskBarStartPx;
        endX = comp.taskBarEndPx;
        leftPredecessorLinkArrowReservedWidth = self._leftPredecessorLinkArrowReservedWidth(startX);
        barStartX = 0 > startX ? 0 : startX;
        barStartX = barStartX > w ? w : barStartX;
        barEndX = endX > w ? w : endX;
        barEndX = 0 > barEndX ? 0 : barEndX;
        rolloverPercent = self._rolloverPercent();
        mode > compactMode && this._drawDates(ctx, rolloverPercent, startDate, finishDate, startX, endX, barStartX, barEndX, barOffsetTop, ZIGZAG_Y, BAR_PADDING_TOP, BAR_PADDING_BOTTOM);
        ctx.fillStyle = ctx.strokeStyle = taskFillStyle = rolloverPercent ? hexToRgbaStr(self.p900, .5 + .25 * rolloverPercent) : hexToRgbaStr(self.p900, .5);
        self._updateLinkMetadata(taskFillStyle, startX, endX, textTop);
        if (0 >= endX - ZIGZAG_Y) self._drawHArrow(ctx, 0, ZIGZAG_Y, textTop, ZIGZAG_Y); else if (startX + ZIGZAG_Y >= w) self._drawHArrow(ctx, w, w - ZIGZAG_Y, textTop, ZIGZAG_Y); else if ((barStartX > startX || endX > barEndX) && endX - startX > ZIGZAG_Y) {
          currentY = barTop;
          ctx.beginPath();
          ctx.moveTo(barStartX, currentY);
          if (barStartX > startX) {
            zigzagX = barStartX - startX > ZIGZAG_Y ? ZIGZAG_Y : barStartX - startX;
            odd = !0;
            for (;barBottom >= currentY + ZIGZAG_Y; ) {
              ctx.lineTo(barStartX + (odd ? zigzagX : 0), currentY + ZIGZAG_Y);
              odd = !odd;
              currentY += ZIGZAG_Y;
            }
          } else ctx.lineTo(barStartX, barBottom);
          ctx.lineTo(barEndX, barBottom);
          if (endX > barEndX) {
            currentY = barBottom;
            zigzagX = endX - barEndX > ZIGZAG_Y ? ZIGZAG_Y : endX - barEndX;
            odd = !0;
            for (;currentY - ZIGZAG_Y >= barTop; ) {
              ctx.lineTo(barEndX + (odd ? -zigzagX : 0), currentY - ZIGZAG_Y);
              odd = !odd;
              currentY -= ZIGZAG_Y;
            }
          } else ctx.lineTo(barEndX, barTop);
          ctx.closePath();
          ctx.fill();
        } else ctx.fillRect(barStartX, barTop, barEndX - barStartX, barHeight);
        if (task.percentComplete > 0) {
          ctx.fillStyle = self.pa400;
          percentX = startX + (endX - startX) * task.percentComplete;
          if (percentX >= 0 || w >= percentX) {
            percentTop = barBottom - PERCENT_BAR_HEIGHT;
            ctx.fillRect(barStartX, percentTop, percentX - barStartX, PERCENT_BAR_HEIGHT);
          }
          if (rolloverPercent) {
            ctx.fillStyle = self.p900txt.title(1);
            percentX = startX + (endX - startX) * task.percentComplete * rolloverPercent;
            if (percentX >= 0 || w >= percentX) {
              percentTop = barBottom - PERCENT_BAR_HEIGHT;
              ctx.fillRect(barStartX, percentTop, percentX - barStartX, PERCENT_BAR_HEIGHT);
            }
          }
        }
        ctx.font = self._component.defaultFont;
        ctx.textBaseline = "middle";
        taskName = task.name;
        nameWidth = self._temporalDataNameWidth();
        centerSpace = barEndX - barStartX - TASK_NAME_MARGIN_LEFT;
        leftSpace = barStartX - TASK_NAME_MARGIN_LEFT - TASK_NAME_MARGIN_RIGHT - leftPredecessorLinkArrowReservedWidth;
        rightSpace = w - barEndX - TASK_NAME_MARGIN_LEFT;
        if (centerSpace > 0 && centerSpace >= nameWidth || centerSpace >= leftSpace && centerSpace >= rightSpace) {
          spaceForText = centerSpace;
          ctx.fillStyle = rolloverPercent ? self.p900txt.title(Theme.ALPHAS.secondary + (1 - Theme.ALPHAS.secondary) * rolloverPercent) : self.p900txt.secondary(1);
          if (nameWidth > spaceForText) {
            newLen = self._approximateEllipsisLengthForSpace(taskName, nameWidth, spaceForText);
            if (newLen >= 5) {
              taskName = taskName.substr(0, newLen) + "…";
              self._fillText(ctx, taskName, TASK_NAME_MARGIN_LEFT + barStartX, textTop);
            }
          } else self._fillText(ctx, taskName, TASK_NAME_MARGIN_LEFT + barStartX, textTop);
        } else if (leftSpace > 0 && leftSpace >= nameWidth || leftSpace > centerSpace && leftSpace > rightSpace) {
          spaceForText = leftSpace;
          if (nameWidth > spaceForText) {
            newLen = self._approximateEllipsisLengthForSpace(taskName, nameWidth, spaceForText);
            if (newLen >= 5) {
              taskName = taskName.substr(0, newLen) + "…";
              ctx.fillStyle = taskFillStyle;
              self._fillText(ctx, taskName, TASK_NAME_MARGIN_LEFT, textTop);
            }
          } else {
            ctx.fillStyle = taskFillStyle;
            self._fillText(ctx, taskName, barStartX - nameWidth - TASK_NAME_MARGIN_RIGHT - leftPredecessorLinkArrowReservedWidth, textTop);
          }
        } else if (rightSpace > 0) {
          spaceForText = rightSpace;
          ctx.fillStyle = taskFillStyle;
          self._fillText(ctx, taskName, barEndX + TASK_NAME_MARGIN_LEFT, textTop);
        }
      };
      return TaskBarDrawing;
    }(TemporalDataDrawing);
    SummaryBarDrawing = function(_super) {
      function SummaryBarDrawing(component, canvas) {
        SummaryBarDrawing.__super__.constructor.call(this, component, canvas);
      }
      var BAR_PADDING_BOTTOM, BAR_PADDING_TOP, EXPAND_BUTTON_MARGIN_LEFT, EXPAND_BUTTON_MARGIN_RIGHT, EXPAND_BUTTON_WIDTH, PERCENT_BAR_HEIGHT, SUMMARY_NAME_MARGIN_LEFT, SUMMARY_NAME_MARGIN_RIGHT, ZIGZAG_Y, drawCollapseButton, hexToRgbaStr;
      __extends(SummaryBarDrawing, _super);
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      PERCENT_BAR_HEIGHT = 2;
      ZIGZAG_Y = 5;
      SUMMARY_NAME_MARGIN_LEFT = 2;
      SUMMARY_NAME_MARGIN_RIGHT = 2;
      EXPAND_BUTTON_WIDTH = 12;
      EXPAND_BUTTON_MARGIN_RIGHT = ZIGZAG_Y + 2;
      EXPAND_BUTTON_MARGIN_LEFT = ZIGZAG_Y + 2;
      BAR_PADDING_TOP = 2;
      BAR_PADDING_BOTTOM = 2;
      drawCollapseButton = function(ctx, startX, barTop, barHeight, strokeStyle, summary) {
        var centerX, centerY, rectHeight, rectStartX, rectTop, rectWidth;
        ctx.strokeStyle = strokeStyle;
        centerY = barTop + barHeight / 2;
        centerY = Math.floor(centerY) === centerY ? centerY : centerY - .5;
        rectWidth = rectHeight = EXPAND_BUTTON_WIDTH - 1;
        rectStartX = startX + EXPAND_BUTTON_MARGIN_LEFT;
        rectTop = barTop + (barHeight - EXPAND_BUTTON_WIDTH) / 2 + .5;
        rectTop = Math.floor(rectTop) === rectTop ? rectTop - .5 : rectTop;
        ctx.beginPath();
        ctx.rect(rectStartX + .5, rectTop, rectWidth, rectHeight);
        ctx.stroke();
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(rectStartX + 3, centerY);
        ctx.lineTo(rectStartX - 3 + EXPAND_BUTTON_WIDTH, centerY);
        ctx.stroke();
        if (summary._dp_collapsed) {
          centerX = rectStartX + EXPAND_BUTTON_WIDTH / 2;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY - EXPAND_BUTTON_WIDTH / 2 + 3);
          ctx.lineTo(centerX, centerY + EXPAND_BUTTON_WIDTH / 2 - 3);
          ctx.stroke();
        }
      };
      SummaryBarDrawing.prototype._update = function(ctx) {
        var TCBC, barBottom, barEndX, barHeight, barOffsetTop, barStartX, barTop, centerSpace, centerTxtFillStyle, comp, compactMode, currentY, endX, expandButtonSpace, finishDate, h, leftPredecessorLinkArrowReservedWidth, leftSpace, mode, nameWidth, newLen, odd, percentTop, percentX, rightSpace, rolloverPercent, self, spaceForText, startDate, startX, summary, summaryFillStyle, summaryName, textTop, w, zigzagX;
        SummaryBarDrawing.__super__._update.call(this, ctx);
        self = this;
        TCBC = TemporalCanvasBasedComponent;
        compactMode = TCBC.MODE_COMPACT;
        comp = self._component;
        mode = comp.mode;
        summary = comp.summary;
        startDate = summary.start;
        finishDate = summary.finish;
        h = comp.height;
        if (mode === compactMode) {
          barHeight = h - BAR_PADDING_TOP - BAR_PADDING_BOTTOM;
          barTop = BAR_PADDING_TOP;
          barBottom = BAR_PADDING_TOP + barHeight;
          textTop = BAR_PADDING_TOP + barHeight / 2;
        } else {
          barOffsetTop = h / 2;
          barHeight = barOffsetTop - BAR_PADDING_TOP - BAR_PADDING_BOTTOM;
          barTop = barOffsetTop + BAR_PADDING_TOP;
          barBottom = barOffsetTop + BAR_PADDING_TOP + barHeight;
          textTop = barOffsetTop + BAR_PADDING_TOP + barHeight / 2;
        }
        w = comp.width;
        startX = comp.summaryBarStartPx;
        endX = comp.summaryBarEndPx;
        leftPredecessorLinkArrowReservedWidth = self._leftPredecessorLinkArrowReservedWidth(startX);
        barStartX = 0 > startX ? 0 : startX;
        barStartX = barStartX > w ? w : barStartX;
        barEndX = endX > w ? w : endX;
        barEndX = 0 > barEndX ? 0 : barEndX;
        rolloverPercent = self._rolloverPercent();
        mode > compactMode && this._drawDates(ctx, rolloverPercent, startDate, finishDate, startX, endX, barStartX, barEndX, barOffsetTop, ZIGZAG_Y, BAR_PADDING_TOP, BAR_PADDING_BOTTOM);
        ctx.fillStyle = summaryFillStyle = rolloverPercent ? hexToRgbaStr(self.p900, .75 + .25 * rolloverPercent) : hexToRgbaStr(self.p900, .75);
        self._updateLinkMetadata(summaryFillStyle, startX, endX, textTop);
        if (summary.start) {
          if (0 >= endX - ZIGZAG_Y) self._drawHArrow(ctx, 0, ZIGZAG_Y, textTop, ZIGZAG_Y); else if (startX + ZIGZAG_Y >= w) self._drawHArrow(ctx, w, w - ZIGZAG_Y, textTop, ZIGZAG_Y); else if ((barStartX > startX || endX > barEndX) && endX - startX > ZIGZAG_Y) {
            currentY = barTop;
            ctx.beginPath();
            ctx.moveTo(barStartX, currentY);
            if (barStartX > startX) {
              zigzagX = barStartX - startX > ZIGZAG_Y ? ZIGZAG_Y : barStartX - startX;
              odd = !0;
              for (;barBottom >= currentY + ZIGZAG_Y; ) {
                ctx.lineTo(barStartX + (odd ? zigzagX : 0), currentY + ZIGZAG_Y);
                odd = !odd;
                currentY += ZIGZAG_Y;
              }
            } else ctx.lineTo(barStartX, barBottom);
            ctx.lineTo(barEndX, barBottom);
            if (endX > barEndX) {
              currentY = barBottom;
              zigzagX = endX - barEndX > ZIGZAG_Y ? ZIGZAG_Y : endX - barEndX;
              odd = !0;
              for (;currentY - ZIGZAG_Y >= barTop; ) {
                ctx.lineTo(barEndX + (odd ? -zigzagX : 0), currentY - ZIGZAG_Y);
                odd = !odd;
                currentY -= ZIGZAG_Y;
              }
            } else ctx.lineTo(barEndX, barTop);
            ctx.closePath();
            ctx.fill();
          } else ctx.fillRect(barStartX, barTop, barEndX - barStartX, barHeight);
          if (summary.percentComplete > 0) {
            ctx.fillStyle = self.pa400;
            percentX = startX + (endX - startX) * summary.percentComplete;
            if (percentX >= 0 || w >= percentX) {
              percentTop = barBottom - PERCENT_BAR_HEIGHT;
              ctx.fillRect(barStartX, percentTop, percentX - barStartX, PERCENT_BAR_HEIGHT);
            }
            if (rolloverPercent) {
              ctx.fillStyle = self.p900txt.primary(1);
              percentX = startX + (endX - startX) * summary.percentComplete * rolloverPercent;
              if (percentX >= 0 || w >= percentX) {
                percentTop = barBottom - PERCENT_BAR_HEIGHT;
                ctx.fillRect(barStartX, percentTop, percentX - barStartX, PERCENT_BAR_HEIGHT);
              }
            }
          }
        }
        ctx.font = self._component.defaultFont;
        ctx.textBaseline = "middle";
        summaryName = summary.name;
        nameWidth = self._temporalDataNameWidth();
        expandButtonSpace = EXPAND_BUTTON_MARGIN_LEFT + EXPAND_BUTTON_WIDTH + EXPAND_BUTTON_MARGIN_RIGHT;
        centerSpace = barEndX - barStartX - SUMMARY_NAME_MARGIN_LEFT - expandButtonSpace;
        leftSpace = barStartX - SUMMARY_NAME_MARGIN_LEFT - SUMMARY_NAME_MARGIN_RIGHT - expandButtonSpace - leftPredecessorLinkArrowReservedWidth;
        rightSpace = w - barEndX - SUMMARY_NAME_MARGIN_LEFT - expandButtonSpace;
        if (centerSpace > 0 && centerSpace >= nameWidth || centerSpace >= leftSpace && centerSpace >= rightSpace) {
          spaceForText = centerSpace;
          centerTxtFillStyle = rolloverPercent ? self.p900txt.title(Theme.ALPHAS.secondary + (1 - Theme.ALPHAS.secondary) * rolloverPercent) : self.p900txt.secondary(1);
          if (nameWidth > spaceForText) {
            newLen = self._approximateEllipsisLengthForSpace(summaryName, nameWidth, spaceForText);
            if (newLen >= 5) {
              drawCollapseButton(ctx, barStartX, barTop, barHeight, centerTxtFillStyle, summary);
              summaryName = summaryName.substr(0, newLen) + "…";
              ctx.fillStyle = centerTxtFillStyle;
              self._fillText(ctx, summaryName, expandButtonSpace + SUMMARY_NAME_MARGIN_LEFT + barStartX, textTop);
            }
          } else {
            drawCollapseButton(ctx, barStartX, barTop, barHeight, centerTxtFillStyle, summary);
            ctx.fillStyle = centerTxtFillStyle;
            self._fillText(ctx, summaryName, expandButtonSpace + SUMMARY_NAME_MARGIN_LEFT + barStartX, textTop);
          }
        } else if (leftSpace > 0 && leftSpace >= nameWidth || leftSpace > centerSpace && leftSpace > rightSpace) {
          spaceForText = leftSpace;
          if (nameWidth > spaceForText) {
            newLen = self._approximateEllipsisLengthForSpace(summaryName, nameWidth, spaceForText);
            if (newLen >= 5) {
              drawCollapseButton(ctx, barStartX - expandButtonSpace - leftPredecessorLinkArrowReservedWidth, barTop, barHeight, summaryFillStyle, summary);
              summaryName = summaryName.substr(0, newLen) + "…";
              ctx.fillStyle = summaryFillStyle;
              self._fillText(ctx, summaryName, SUMMARY_NAME_MARGIN_LEFT, textTop);
            }
          } else {
            drawCollapseButton(ctx, barStartX - expandButtonSpace - leftPredecessorLinkArrowReservedWidth, barTop, barHeight, summaryFillStyle, summary);
            ctx.fillStyle = summaryFillStyle;
            self._fillText(ctx, summaryName, barStartX - nameWidth - SUMMARY_NAME_MARGIN_RIGHT - expandButtonSpace - leftPredecessorLinkArrowReservedWidth, textTop);
          }
        } else if (rightSpace > 0) {
          drawCollapseButton(ctx, barEndX, barTop, barHeight, summaryFillStyle, summary);
          spaceForText = rightSpace;
          ctx.fillStyle = summaryFillStyle;
          self._fillText(ctx, summaryName, barEndX + expandButtonSpace + SUMMARY_NAME_MARGIN_LEFT, textTop);
        }
      };
      return SummaryBarDrawing;
    }(TemporalDataDrawing);
    MilestoneDrawing = function(_super) {
      function MilestoneDrawing(component, canvas) {
        MilestoneDrawing.__super__.constructor.call(this, component, canvas);
      }
      var MILESTONE_NAME_MARGIN_LEFT, MILESTONE_NAME_MARGIN_RIGHT, MILESTONE_PADDING_BOTTOM, MILESTONE_PADDING_TOP, hexToRgbaStr, simpleDateFormat;
      __extends(MilestoneDrawing, _super);
      hexToRgbaStr = CoreFunctions.hexToRgbaStr, simpleDateFormat = CoreFunctions.simpleDateFormat;
      MILESTONE_NAME_MARGIN_LEFT = 7;
      MILESTONE_NAME_MARGIN_RIGHT = 7;
      MILESTONE_PADDING_TOP = 2;
      MILESTONE_PADDING_BOTTOM = 2;
      MilestoneDrawing.prototype._update = function(ctx) {
        var DATE_H_MARGIN, TCBC, TDD, arrowWidth, comp, compactMode, dateEndArrowX, dateFont, dateStartArrowX, dateTxtTop, dateTxtWidth, diamondEndX, diamondStartX, endAnchorPoint, enoughLeftSpace, h, leftPredecessorLinkArrowReservedWidth, leftSpace, milestone, milestoneBottom, milestoneDiamondOffsetTop, milestoneFillStyle, milestoneHeight, milestoneHeightBy2, milestoneName, milestonePx, milestoneTop, mode, nameWidth, neededDateSideSpace, newLen, rightSpace, rolloverPercent, self, spaceForText, startDate, startDateTxt, textTop, tickBottom, tickHeight, tickTop, w;
        MilestoneDrawing.__super__._update.call(this, ctx);
        self = this;
        TCBC = TemporalCanvasBasedComponent;
        TDD = TemporalDataDrawing;
        compactMode = TCBC.MODE_COMPACT;
        comp = self._component;
        mode = comp.mode;
        dateFont = comp.dateFont;
        arrowWidth = TDD.ARROW_INDICATOR_WIDTH;
        h = comp.height;
        if (mode === compactMode) {
          milestoneHeight = h - MILESTONE_PADDING_TOP - MILESTONE_PADDING_BOTTOM;
          milestoneTop = MILESTONE_PADDING_TOP;
          milestoneBottom = MILESTONE_PADDING_TOP + milestoneHeight;
          milestoneHeightBy2 = milestoneHeight / 2;
          textTop = MILESTONE_PADDING_TOP + milestoneHeightBy2;
        } else {
          milestoneDiamondOffsetTop = h / 2;
          milestoneHeight = milestoneDiamondOffsetTop - MILESTONE_PADDING_TOP - MILESTONE_PADDING_BOTTOM;
          milestoneTop = milestoneDiamondOffsetTop + MILESTONE_PADDING_TOP;
          milestoneBottom = milestoneDiamondOffsetTop + MILESTONE_PADDING_TOP + milestoneHeight;
          milestoneHeightBy2 = milestoneHeight / 2;
          textTop = milestoneDiamondOffsetTop + MILESTONE_PADDING_TOP + milestoneHeightBy2;
        }
        w = comp.width;
        milestonePx = comp.milestonePx;
        milestone = comp.milestone;
        startDate = milestone.start;
        startDateTxt = simpleDateFormat(startDate);
        rolloverPercent = self._rolloverPercent();
        if (mode > compactMode) {
          DATE_H_MARGIN = TDD.DATE_H_MARGIN;
          ctx.font = dateFont;
          ctx.textBaseline = "middle";
          tickTop = MILESTONE_PADDING_TOP + .5;
          tickBottom = milestoneTop - MILESTONE_PADDING_BOTTOM + .5;
          tickHeight = tickBottom - tickTop;
          dateTxtWidth = self._temporalDataDateWidth(comp._temporalData);
          dateTxtTop = tickTop + tickHeight / 2;
          ctx.fillStyle = ctx.strokeStyle = self.p300txt.primary(rolloverPercent ? .35 + .65 * rolloverPercent : .35);
          if (milestonePx >= 0 && w > milestonePx) {
            ctx.beginPath();
            ctx.moveTo(milestonePx + .5, MILESTONE_PADDING_TOP + .5);
            ctx.lineTo(milestonePx + .5, milestoneDiamondOffsetTop - MILESTONE_PADDING_BOTTOM + .5);
            ctx.stroke();
          }
          neededDateSideSpace = DATE_H_MARGIN + dateTxtWidth + arrowWidth;
          enoughLeftSpace = milestonePx >= neededDateSideSpace;
          if (enoughLeftSpace) {
            dateStartArrowX = milestonePx + 1 > w ? w : milestonePx + 1;
            dateEndArrowX = dateStartArrowX - arrowWidth;
            self._drawHArrow(ctx, dateStartArrowX, dateEndArrowX, dateTxtTop, arrowWidth);
            self._fillText(ctx, startDateTxt, dateEndArrowX - dateTxtWidth - DATE_H_MARGIN, dateTxtTop);
          } else {
            dateStartArrowX = 0 > milestonePx + 1 ? 0 : milestonePx + 1;
            dateEndArrowX = dateStartArrowX + arrowWidth;
            self._drawHArrow(ctx, dateStartArrowX, dateEndArrowX, dateTxtTop, arrowWidth);
            self._fillText(ctx, startDateTxt, dateEndArrowX + DATE_H_MARGIN, dateTxtTop);
          }
        }
        ctx.fillStyle = ctx.strokeStyle = milestoneFillStyle = rolloverPercent ? hexToRgbaStr(self.p900, .5 + .25 * rolloverPercent) : hexToRgbaStr(self.p900, .5);
        diamondStartX = milestonePx - milestoneHeightBy2;
        diamondEndX = milestonePx + milestoneHeightBy2;
        self._updateLinkMetadata(milestoneFillStyle, diamondStartX, diamondEndX, textTop);
        endAnchorPoint = self.lastComputedFinishLinkAnchorPoint;
        endAnchorPoint.x = diamondEndX;
        endAnchorPoint.y = textTop - .5;
        leftPredecessorLinkArrowReservedWidth = self._leftPredecessorLinkArrowReservedWidth(diamondStartX);
        if (0 > diamondEndX) self._drawHArrow(ctx, 0, arrowWidth, textTop, arrowWidth); else if (diamondStartX > w) self._drawHArrow(ctx, w, w - arrowWidth, textTop, arrowWidth); else {
          ctx.beginPath();
          ctx.moveTo(milestonePx, milestoneTop);
          ctx.lineTo(diamondStartX, textTop);
          ctx.lineTo(milestonePx, milestoneBottom);
          ctx.lineTo(diamondEndX, textTop);
          ctx.fill();
        }
        ctx.font = self._component.defaultFont;
        ctx.textBaseline = "middle";
        milestoneName = milestone.name;
        nameWidth = self._temporalDataNameWidth();
        leftSpace = diamondStartX - MILESTONE_NAME_MARGIN_LEFT - MILESTONE_NAME_MARGIN_RIGHT - leftPredecessorLinkArrowReservedWidth;
        rightSpace = w - diamondStartX - MILESTONE_NAME_MARGIN_LEFT;
        if (leftSpace > 0 && leftSpace >= nameWidth || leftSpace >= rightSpace) {
          spaceForText = leftSpace;
          if (nameWidth > spaceForText) {
            newLen = self._approximateEllipsisLengthForSpace(milestoneName, nameWidth, spaceForText);
            if (newLen >= 5) {
              milestoneName = milestoneName.substr(0, newLen) + "…";
              ctx.fillStyle = milestoneFillStyle;
              self._fillText(ctx, milestoneName, MILESTONE_NAME_MARGIN_LEFT, textTop);
            }
          } else {
            ctx.fillStyle = milestoneFillStyle;
            self._fillText(ctx, milestoneName, (diamondStartX > w ? w : diamondStartX) - nameWidth - MILESTONE_NAME_MARGIN_RIGHT - leftPredecessorLinkArrowReservedWidth, textTop);
          }
        } else if (rightSpace > 0) {
          spaceForText = rightSpace;
          ctx.fillStyle = milestoneFillStyle;
          self._fillText(ctx, milestoneName, (0 > diamondEndX ? 0 : diamondEndX) + MILESTONE_NAME_MARGIN_LEFT, textTop);
        }
      };
      return MilestoneDrawing;
    }(TemporalDataDrawing);
    PredecessorLinksDrawing = function(_super) {
      function PredecessorLinksDrawing(component, canvas) {
        PredecessorLinksDrawing.__super__.constructor.call(this, component, canvas);
      }
      var sign;
      __extends(PredecessorLinksDrawing, _super);
      sign = CoreFunctions.sign;
      PredecessorLinksDrawing.prototype._update = function(ctx) {
        var i, len, links, self;
        PredecessorLinksDrawing.__super__._update.call(this, ctx);
        self = this;
        links = self._component.predecessorLinks;
        len = links.length;
        i = 0;
        for (;len > i; ) {
          self._drawLink(ctx, links[i]);
          i++;
        }
      };
      PredecessorLinksDrawing.prototype._drawLink = function(ctx, link) {
        var arrowPlusTailWidth, arrowWidth, end, endX, endXMinusArrowPlusTailWidth, endXMinusTailWidth, endY, self, sig, slidingBottomDistance, slidingTopDistance, slidingY, start, startX, startXPlusTailWidth, startY, tailWidth, type;
        self = this;
        ctx.fillStyle = ctx.strokeStyle = link.strokeStyle;
        end = link.end;
        start = link.start;
        startX = start.x;
        endX = end.x;
        startY = start.y;
        endY = end.y;
        tailWidth = Link.TAIL_WIDTH;
        arrowWidth = Link.ARROW_WIDTH;
        arrowPlusTailWidth = Link.ARROW_PLUS_TAIL_WIDTH;
        slidingTopDistance = link.startLinkAnchorDistanceToSlidingTopPosition;
        slidingBottomDistance = link.startLinkAnchorDistanceToSlidingBottomPosition;
        type = link.type;
        startXPlusTailWidth = startX + tailWidth;
        endXMinusArrowPlusTailWidth = endX - arrowPlusTailWidth;
        endXMinusTailWidth = endX - tailWidth;
        if (type === PredecessorLink.TYPE_FS) {
          sig = sign(endY - startY);
          slidingY = startY + (0 > sig ? -slidingTopDistance : slidingBottomDistance) + (0 > sig ? 0 : 1);
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(startXPlusTailWidth, startY);
          ctx.lineTo(startXPlusTailWidth, slidingY);
          ctx.lineTo(endXMinusArrowPlusTailWidth, slidingY);
          ctx.lineTo(endXMinusArrowPlusTailWidth, endY);
          ctx.lineTo(endXMinusTailWidth - .5, endY);
          ctx.stroke();
          self._drawHArrow(ctx, endXMinusTailWidth + arrowWidth - .5, endX - arrowWidth - .5, endY, arrowWidth);
        }
      };
      return PredecessorLinksDrawing;
    }(Drawing);
    DM = DomainModel;
    TemporalData = function(_super) {
      function TemporalData() {
        var self;
        TemporalData.__super__.constructor.call(this);
        self = this;
        self.uid = null;
        self._name = null;
        self._parent = null;
        self._predecessorLinks = [];
        self._previousTemporalData = null;
        self._nextTemporalData = null;
        self._predecessorLinkTypesCache = null;
        self.__dp_nameWidth = null;
        self.__dp_nameWidthFont = null;
        self.__dp_dateWidth = null;
        self.__dp_dateWidthFont = null;
        self.__dp_previousTemporalData = void 0;
        self.__dp_nextTemporalData = void 0;
      }
      var getter, setter, _ref;
      __extends(TemporalData, _super);
      _ref = gs(TemporalData), getter = _ref.getter, setter = _ref.setter;
      getter("_dp_nameWidth", function() {
        return this.__dp_nameWidth;
      });
      setter("_dp_nameWidth", function(nameWidth) {
        this.__dp_nameWidth = nameWidth;
      });
      getter("_dp_nameWidthFont", function() {
        return this.__dp_nameWidthFont;
      });
      setter("_dp_nameWidthFont", function(nameWidthFont) {
        this.__dp_nameWidthFont = nameWidthFont;
      });
      getter("_dp_dateWidth", function() {
        return this.__dp_dateWidth;
      });
      setter("_dp_dateWidth", function(dateWidth) {
        this.__dp_dateWidth = dateWidth;
      });
      getter("_dp_dateWidthFont", function() {
        return this.__dp_dateWidthFont;
      });
      setter("_dp_dateWidthFont", function(dateWidthFont) {
        this.__dp_dateWidthFont = dateWidthFont;
      });
      getter("_dp_parentRolloverTweening", function() {
        var parent, _ref1;
        parent = this._parent;
        return parent ? (null != (_ref1 = parent._dp_rolloverTweening) ? _ref1.frame : void 0) > 0 ? parent._dp_rolloverTweening : parent._dp_parentRolloverTweening : void 0;
      });
      TemporalData.prototype._dp_parentRolloverTweeningChanged = function(parentRolloverTweening) {
        this.propertyChanged.dispatch("_dp_parentRolloverTweeningChanged", parentRolloverTweening, parentRolloverTweening);
      };
      getter("_dp_previousTemporalData", function() {
        var self;
        self = this;
        return typeof self.__dp_previousTemporalData === undefinedstr ? self._previousTemporalData : self.__dp_previousTemporalData;
      });
      setter("_dp_previousTemporalData", function(_dp_previousTemporalData) {
        this.__dp_previousTemporalData = _dp_previousTemporalData;
      });
      getter("_dp_nextTemporalData", function() {
        var self;
        self = this;
        return typeof self.__dp_nextTemporalData === undefinedstr ? self._nextTemporalData : self.__dp_nextTemporalData;
      });
      setter("_dp_nextTemporalData", function(_dp_nextTemporalData) {
        this.__dp_nextTemporalData = _dp_nextTemporalData;
      });
      getter("name", function() {
        return this._name;
      });
      setter("name", function(name) {
        this._name = name;
      });
      getter("parent", function() {
        return this._parent;
      });
      setter("parent", function(parent) {
        this._parent = parent;
      });
      getter("previousTemporalData", function() {
        return this._previousTemporalData;
      });
      setter("previousTemporalData", function(previousTemporalData) {
        this._previousTemporalData = previousTemporalData;
      });
      getter("nextTemporalData", function() {
        return this._nextTemporalData;
      });
      setter("nextTemporalData", function(nextTemporalData) {
        this._nextTemporalData = nextTemporalData;
      });
      getter("ganttModel", function() {
        return parent instanceof GanttModel ? parent : parent.ganttModel;
      });
      getter("predecessorLinks", function() {
        return this._predecessorLinks;
      });
      setter("predecessorLinks", function(predecessorLinks) {
        this._predecessorLinks = predecessorLinks;
      });
      TemporalData.prototype.addToPredecessorLinks = function(predecessorLink) {
        return this._predecessorLinks.push(predecessorLink);
      };
      TemporalData.prototype.getPredecessorLinkTypes = function() {
        var PL, cache, i, pLink, pLinks, pLinksLen, self;
        self = this;
        if (!(cache = self._predecessorLinkTypesCache)) {
          self._predecessorLinkTypesCache = cache = {};
          PL = PredecessorLink;
          cache[PL.TYPE_FF] = cache[PL.TYPE_FS] = cache[PL.TYPE_SF] = cache[PL.TYPE_SS] = !1;
          pLinks = self._predecessorLinks;
          pLinksLen = pLinks.length;
          i = 0;
          for (;pLinksLen > i; ) {
            pLink = pLinks[i];
            cache[pLink.type] = !0;
            i++;
          }
        }
        return cache;
      };
      return TemporalData;
    }(DM);
    Summary = function(_super) {
      function Summary() {
        var self;
        Summary.__super__.constructor.call(this);
        self = this;
        self._temporalData = [];
        self._startCache = null;
        self._finishCache = null;
        self.__dp_collapsed = !1;
        self.__dp_rolloverTweening = !1;
      }
      var getter, setter, _ref;
      __extends(Summary, _super);
      _ref = gs(Summary), getter = _ref.getter, setter = _ref.setter;
      getter("_dp_collapsed", function() {
        return this.__dp_collapsed;
      });
      setter("_dp_collapsed", function(collapsed) {
        var nextSibling, self;
        self = this;
        if (self.__dp_collapsed !== collapsed) {
          self.__dp_collapsed = collapsed;
          nextSibling = this._nextSibling();
          nextSibling && (nextSibling._dp_previousTemporalData = collapsed ? self : void 0);
          self.__dp_nextTemporalData = collapsed ? nextSibling || null : void 0;
          self.propertyChanged.dispatch("_dp_collapsed", !collapsed, collapsed);
        }
      });
      Summary.prototype._nextSibling = function() {
        var nextSibling, p, ptd, self;
        self = this;
        if (!(p = self._parent)) return null;
        ptd = p.temporalData;
        nextSibling = ptd[_.indexOf(ptd, self) + 1];
        return nextSibling ? nextSibling : p._nextSibling();
      };
      getter("_dp_rolloverTweening", function() {
        return this.__dp_rolloverTweening;
      });
      setter("_dp_rolloverTweening", function(rolloverTweening) {
        var self;
        self = this;
        self.__dp_rolloverTweening = rolloverTweening;
        self.__notifyRollover(rolloverTweening);
      });
      Summary.prototype._dp_parentRolloverTweeningChanged = function(parentRolloverTweening) {
        Summary.__super__._dp_parentRolloverTweeningChanged.call(this, parentRolloverTweening);
        this.__notifyRollover(parentRolloverTweening);
      };
      Summary.prototype.__notifyRollover = function(rolloverTweening) {
        return _.forEach(this._temporalData, function(td) {
          td._dp_visible && td._dp_parentRolloverTweeningChanged(rolloverTweening);
        });
      };
      getter("temporalData", function() {
        return this._temporalData;
      });
      setter("temporalData", function(temporalData) {
        this._temporalData = temporalData;
      });
      getter("start", function() {
        var min, self;
        self = this;
        if (self._startCache) return self._startCache;
        min = _.min(self._temporalData, function(temporalData) {
          return temporalData.start;
        });
        return self._startCache = min.start;
      });
      getter("finish", function() {
        var max, self;
        self = this;
        if (self._finishCache) return self._finishCache;
        max = _.max(self._temporalData, function(temporalData) {
          return temporalData.finish;
        });
        return self._finishCache = max.finish;
      });
      Summary.prototype.hasChildren = function() {
        return this._temporalData.length > 0;
      };
      return Summary;
    }(TemporalData);
    GanttModel = function(_super) {
      function GanttModel() {
        GanttModel.__super__.constructor.call(this);
      }
      var getter, setter, _ref;
      __extends(GanttModel, _super);
      _ref = gs(GanttModel), getter = _ref.getter, setter = _ref.setter;
      return GanttModel;
    }(Summary);
    Milestone = function(_super) {
      function Milestone() {
        Milestone.__super__.constructor.call(this);
        this._start = null;
      }
      var getter, setter, _ref;
      __extends(Milestone, _super);
      _ref = gs(Milestone), getter = _ref.getter, setter = _ref.setter;
      getter("start", function() {
        return this._start;
      });
      setter("start", function(start) {
        this._start = start;
      });
      getter("finish", function() {
        return this._start;
      });
      return Milestone;
    }(TemporalData);
    Task = function(_super) {
      function Task() {
        var self;
        Task.__super__.constructor.call(this);
        self = this;
        self._start = null;
        self._finish = null;
        self._percentComplete = null;
      }
      var getter, setter, _ref;
      __extends(Task, _super);
      _ref = gs(Task), getter = _ref.getter, setter = _ref.setter;
      getter("start", function() {
        return this._start;
      });
      setter("start", function(start) {
        this._start = start;
      });
      getter("finish", function() {
        return this._finish;
      });
      setter("finish", function(finish) {
        this._finish = finish;
      });
      getter("percentComplete", function() {
        return this._percentComplete;
      });
      setter("percentComplete", function(percentComplete) {
        this._percentComplete = percentComplete;
      });
      return Task;
    }(TemporalData);
    PredecessorLink = function(_super) {
      function PredecessorLink() {
        var self;
        PredecessorLink.__super__.constructor.call(this);
        self = this;
        self._type = PL.TYPE_FS;
        self._predecessor = null;
      }
      var PL, getter, setter, _ref;
      __extends(PredecessorLink, _super);
      PL = PredecessorLink;
      _ref = gs(PL), getter = _ref.getter, setter = _ref.setter;
      PL.TYPE_FF = "FF";
      PL.TYPE_FS = "FS";
      PL.TYPE_SF = "SF";
      PL.TYPE_SS = "SS";
      getter("type", function() {
        return this._type;
      });
      setter("type", function(type) {
        this._type = type;
      });
      getter("predecessor", function() {
        return this._predecessor;
      });
      setter("predecessor", function(predecessor) {
        this._predecessor = predecessor;
      });
      return PredecessorLink;
    }(DM);
    Link = function() {
      function Link() {
        var self;
        self = this;
        self.type = null;
        self.start = null;
        self.startLinkAnchorDistanceToSlidingTopPosition = null;
        self.startLinkAnchorDistanceToSlidingBottomPosition = null;
        self.end = null;
        self.strokeStyle = null;
      }
      var getter, setter, _ref;
      _ref = gs(Link), getter = _ref.getter, setter = _ref.setter;
      Link.ARROW_WIDTH = 5;
      Link.TAIL_WIDTH = 5;
      Link.ARROW_PLUS_TAIL_WIDTH = Link.ARROW_WIDTH + Link.TAIL_WIDTH;
      return Link;
    }();
    GanttModelDataProvider = function(_super) {
      function GanttModelDataProvider(ganttModel) {
        GanttModelDataProvider.__super__.constructor.call(this);
        this._ganttModel = ganttModel;
      }
      var getter, last, setter, _ref;
      __extends(GanttModelDataProvider, _super);
      _ref = gs(GanttModelDataProvider), getter = _ref.getter, setter = _ref.setter;
      last = function(temporalData) {
        var kids;
        if (temporalData instanceof Summary) {
          kids = temporalData.temporalData;
          return temporalData._dp_collapsed || 0 === kids.length ? temporalData : last(kids[kids.length - 1]);
        }
        return temporalData;
      };
      GanttModelDataProvider.prototype.first = function() {
        var td;
        td = this._ganttModel.temporalData;
        return td ? td[0] : null;
      };
      GanttModelDataProvider.prototype.last = function() {
        var td;
        td = this._ganttModel.temporalData;
        return td ? last(td[td.length - 1]) : null;
      };
      GanttModelDataProvider.prototype._nextOf = function(temporalData) {
        return temporalData._dp_nextTemporalData;
      };
      GanttModelDataProvider.prototype._previousOf = function(temporalData) {
        return temporalData._dp_previousTemporalData;
      };
      return GanttModelDataProvider;
    }(DataProvider);
    GanttChartLocale = function() {
      function GanttChartLocale(name, timelineLocaleName, i18n) {
        var self;
        self = this;
        self.name = name;
        self.timelineLocaleName = timelineLocaleName;
        self._i18n = _.assign(_.defaults({}, DEFAULT), i18n);
      }
      var DEFAULT;
      DEFAULT = {
        menu: "Menu",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        verticalZoomIn: "Vertical Zoom In",
        verticalZoomOut: "Vertical Zoom Out",
        configuration: "Configuration",
        configurationPanelTitle: " Configuration",
        displayToday: "Display today date.",
        displayStart: "Display project start date.",
        displayFinish: "Display project end date.",
        language: "Language",
        theme: "Theme",
        themeChooser: " Theme Chooser",
        language: " Language Chooser",
        about: "About Timetraveljs Gantt Reader",
        "indigo-pink": "Indigo / Pink",
        "grey-red": "Grey / Red",
        "bluegrey-lightblue": "Blue Grey / Light Blue",
        "cyan-orange": "Cyan / Orange",
        "teal-yellow": "Teal / Yellow",
        "brown-cyan": "Brown / Cyan",
        "deeppurple-purple": "Deep Purple / Purple",
        "deeporange-cyan": "Deep Orange / Cyan",
        "blue-yellow": "Blue / Yellow"
      };
      GanttChartLocale.prototype.i18n = function(key) {
        var i18n, self, val;
        self = this;
        i18n = self._i18n;
        return typeof (val = i18n[key]) === undefinedstr ? key : val;
      };
      return GanttChartLocale;
    }();
    GanttChartLocaleManager = function(_super) {
      function GanttChartLocaleManager() {
        var self;
        GanttChartLocaleManager.__super__.constructor.call(this);
        self = this;
        self.locale = GCLM.defaultLocaleName;
      }
      var DEFAULT_LOCALE_NAME, GCLM, getter, locales, setter, _ref;
      __extends(GanttChartLocaleManager, _super);
      GCLM = GanttChartLocaleManager;
      _ref = gs(GanttChartLocaleManager), getter = _ref.getter, setter = _ref.setter;
      DEFAULT_LOCALE_NAME = "en-us";
      locales = {};
      GCLM.defaultLocaleName = null;
      GCLM.defineLocale = function(name, timelineLocaleName, i18n) {
        locales[name] || (locales[name] = new GanttChartLocale(name, timelineLocaleName, i18n));
        GanttChartLocaleManager.defaultLocaleName = name;
      };
      GCLM.defineLocale(DEFAULT_LOCALE_NAME, "en-us-condensed", {});
      getter("locale", function() {
        return this._locale;
      });
      getter("locales", function() {
        return locales;
      });
      setter("locale", function(name) {
        var self;
        self = this;
        if (!name || !locales[name]) throw "locale " + name + " inconnue";
        if (!self._locale || self._locale.name !== name) {
          self._locale = locales[name];
          self.localeChanged.dispatch();
        }
      });
      return GanttChartLocaleManager;
    }(LocaleManager);
    TemporalDataRenderer = function(_super) {
      function TemporalDataRenderer(conf) {
        var s, self;
        self = this;
        self.PeriodBasedComponent_init();
        TemporalDataRenderer.__super__.constructor.call(this, conf);
        self.widthFromParent = !0;
        self._timeViewport = conf.timeViewport;
        s = self.domStyle;
        s.position = "relative";
        s.boxSizing = "border-box";
        s.height = "100%";
        self._maxPeriod = null;
        self._maxPeriodChangedFlag = !1;
      }
      var acos, getter, hexToRgbaStr, setter, _ref;
      __extends(TemporalDataRenderer, _super);
      _ref = gs(TemporalDataRenderer), getter = _ref.getter, setter = _ref.setter;
      hexToRgbaStr = CoreFunctions.hexToRgbaStr, acos = CoreFunctions.acos;
      TemporalDataRenderer.BORDER_WIDTH = 1;
      mixinProto(TemporalDataRenderer, PeriodBasedComponent);
      TemporalDataRenderer.prototype._updateMillisByPixel = function() {
        var self, width;
        self = this;
        width = self.width + (self.isScrollbarVisible() ? Scrollbar.WIDTH : 0);
        0 === width && (width = 1920);
        self._millisByPixel = self._period.durationInMillis() / width;
      };
      getter("temporalData", function() {
        return this._data;
      });
      getter("maxPeriod", function() {
        return this._maxPeriod;
      });
      setter("maxPeriod", function(p) {
        var self;
        self = this;
        if (!self._maxPeriod || !self._maxPeriod.equals(p)) {
          self._maxPeriodChangedFlag = !0;
          self._maxPeriod = p.clone();
          self.invalidatePropsAndDisplayList();
        }
      });
      TemporalDataRenderer.prototype.attach = function() {
        var self;
        TemporalDataRenderer.__super__.attach.call(this);
        self = this;
        self.period = self._timeViewport.period;
        self.maxPeriod = self._timeViewport.maxPeriod;
      };
      TemporalDataRenderer.prototype.detach = function() {
        TemporalDataRenderer.__super__.detach.call(this);
      };
      TemporalDataRenderer.prototype.updateListViewportFromDataRequest = function(req) {
        this._parent.updateListViewportFromDataRequest(req);
      };
      TemporalDataRenderer.prototype.getStartLinkAnchorPoint = function() {
        var p, self;
        self = this;
        p = self._getGraphicalTemporalDataRepresentationComponent().lastComputedStartLinkAnchorPoint.clone();
        p.y = self.toViewLocalCoord(p.y);
        return p;
      };
      TemporalDataRenderer.prototype.getFinishLinkAnchorPoint = function() {
        var p, self;
        self = this;
        p = self._getGraphicalTemporalDataRepresentationComponent().lastComputedFinishLinkAnchorPoint.clone();
        p.y = self.toViewLocalCoord(p.y);
        return p;
      };
      TemporalDataRenderer.prototype.getLinkStrokeStyle = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().lastComputedLinkStrokeStyle;
      };
      TemporalDataRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 2;
      };
      TemporalDataRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 2;
      };
      TemporalDataRenderer.prototype._createChildren = function() {
        TemporalDataRenderer.__super__._createChildren.call(this);
      };
      TemporalDataRenderer.prototype._commitProperties = function() {
        TemporalDataRenderer.__super__._commitProperties.call(this);
      };
      TemporalDataRenderer.prototype._updateDisplayList = function() {
        var self;
        TemporalDataRenderer.__super__._updateDisplayList.call(this);
        self = this;
        (self._isLastChangedFlag || self._hiddenPercentChangedFlag || self._periodChangedFlag || self._maxPeriodChangedFlag) && self._updateLastTemporalDataVisibility();
      };
      TemporalDataRenderer.prototype._handleThemeChanged = function() {
        var self;
        TemporalDataRenderer.__super__._handleThemeChanged.call(this);
        self = this;
        self.domStyle.borderBottom = "dashed " + TemporalDataRenderer.BORDER_WIDTH + "px " + self.p300txt.divider(1);
      };
      TemporalDataRenderer.prototype._updateLastTemporalDataVisibility = function() {
        var endTime, maxPeriod, maxTime, middleTime, minTime, origin, parentStyle, period, s, self, startTime, tv;
        self = this;
        parentStyle = self._parent.domStyle;
        s = self.domStyle;
        tv = self._timeViewport;
        if (self._isLastChangedFlag || self._periodChangedFlag || self._maxPeriodChangedFlag) if (self._isLast) {
          period = tv.period;
          maxPeriod = tv.maxPeriod;
          s.transformOrigin = "top center";
          parentStyle.perspective = "800px";
          startTime = period.start.getTime();
          endTime = period.end.getTime();
          middleTime = startTime + (endTime - startTime) / 2;
          minTime = maxPeriod.start.getTime();
          maxTime = maxPeriod.end.getTime();
          origin = Math.round(100 * (middleTime - minTime) / (maxTime - minTime));
          parentStyle.perspectiveOrigin = "" + origin + "% 50%";
        } else {
          s.transformOrigin = "initial";
          s.transform = "none";
          s.opacity = "initial";
          parentStyle.perspective = "none";
          parentStyle.perspectiveOrigin = "initial";
        }
        if (self._hiddenPercentChangedFlag) {
          if (0 === self._hiddenPercent) {
            s.opacity = null;
            return s.transform = null;
          }
          s.opacity = 1 - self._hiddenPercent;
          return s.transform = "rotateX(-" + acos(1 - self._hiddenPercent) + "rad)";
        }
      };
      TemporalDataRenderer.prototype._resetPropFlags = function() {
        var self;
        TemporalDataRenderer.__super__._resetPropFlags.call(this);
        self = this;
        self.PeriodBasedComponent_resetPropFlags();
        self._maxPeriodChangedFlag = !1;
      };
      TemporalDataRenderer.prototype._configureModelBindings = function(enable) {
        var mpc, pc, self, tv;
        TemporalDataRenderer.__super__._configureModelBindings.call(this, enable);
        self = this;
        tv = self._timeViewport;
        pc = tv.periodChanged;
        mpc = tv.maxPeriodChanged;
        if (enable) {
          pc.add(self._periodChanged, this);
          mpc.add(self._maxPeriodChanged, this);
        } else {
          pc.remove(self._periodChanged, this);
          mpc.remove(self._maxPeriodChanged, this);
        }
      };
      TemporalDataRenderer.prototype._configureUiBindings = function(enable) {
        TemporalDataRenderer.__super__._configureUiBindings.call(this, enable);
      };
      TemporalDataRenderer.prototype._periodChanged = function(oldPeriod, newPeriod) {
        this.period = newPeriod;
      };
      TemporalDataRenderer.prototype._maxPeriodChanged = function(oldMaxPeriod, newMaxPeriod) {
        this.maxPeriod = newMaxPeriod;
      };
      TemporalDataRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var s, self;
        TemporalDataRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        s = self.domStyle;
        s.backgroundColor = 0 === tweening.percent || Number(hashCode) !== Number(self.hashCode) ? "transparent" : hexToRgbaStr(self.p200, .5 * tweening.percent);
      };
      return TemporalDataRenderer;
    }(ComponentRenderer);
    TaskRenderer = function(_super) {
      function TaskRenderer(conf) {
        TaskRenderer.__super__.constructor.call(this, conf);
      }
      var appendChild, elmt, getter, setter, startOfNextDay, _ref;
      __extends(TaskRenderer, _super);
      _ref = gs(TaskRenderer), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      startOfNextDay = DateUtil.startOfNextDay;
      getter("task", function() {
        return this._data;
      });
      TaskRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var f, self;
        TaskRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        f = self.task.finish;
        self.rolloverTweened.dispatch({
          start: self.task.start,
          end: startOfNextDay(f),
          tweening: tweening
        });
      };
      return TaskRenderer;
    }(TemporalDataRenderer);
    SummaryRenderer = function(_super) {
      function SummaryRenderer(conf) {
        SummaryRenderer.__super__.constructor.call(this, conf);
      }
      var appendChild, elmt, getter, setter, startOfNextDay, _ref;
      __extends(SummaryRenderer, _super);
      _ref = gs(SummaryRenderer), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      startOfNextDay = DateUtil.startOfNextDay;
      getter("summary", function() {
        return this._data;
      });
      SummaryRenderer.prototype._commitProperties = function() {
        SummaryRenderer.__super__._commitProperties.call(this);
      };
      SummaryRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var f, self, sum;
        SummaryRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        sum = self.summary;
        if (sum.start) {
          sum._dp_rolloverTweening = tweening;
          f = sum.finish;
          self.rolloverTweened.dispatch({
            start: sum.start,
            end: startOfNextDay(f),
            tweening: tweening
          });
        }
      };
      return SummaryRenderer;
    }(TemporalDataRenderer);
    MilestoneRenderer = function(_super) {
      function MilestoneRenderer(conf) {
        MilestoneRenderer.__super__.constructor.call(this, conf);
      }
      var appendChild, elmt, getter, setter, _ref;
      __extends(MilestoneRenderer, _super);
      _ref = gs(MilestoneRenderer), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      getter("milestone", function() {
        return this._data;
      });
      return MilestoneRenderer;
    }(TemporalDataRenderer);
    TemporalDataRendererFactory = function(_super) {
      function TemporalDataRendererFactory(timeViewport) {
        var self;
        TemporalDataRendererFactory.__super__.constructor.call(this);
        self = this;
        self._timeViewport = timeViewport;
      }
      var getter, setter, _ref;
      __extends(TemporalDataRendererFactory, _super);
      _ref = gs(TemporalDataRendererFactory), getter = _ref.getter, setter = _ref.setter;
      TemporalDataRendererFactory.prototype.provideClass = function(data) {
        return TemporalDataRendererFactory.__super__.provideClass.call(this, data);
      };
      TemporalDataRendererFactory.prototype.provideConf = function() {
        return {
          timeViewport: this._timeViewport
        };
      };
      return TemporalDataRendererFactory;
    }(ComponentRendererFactory);
    CompactTaskRenderer = function(_super) {
      function CompactTaskRenderer(conf) {
        var self;
        CompactTaskRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._taskBarComponent = null;
      }
      var R, TASK_BAR_HEIGHT, appendChild, elmt, getter, setter, _ref;
      __extends(CompactTaskRenderer, _super);
      R = CompactTaskRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      TASK_BAR_HEIGHT = 24;
      R.getName = function() {
        return "CompactTaskRenderer";
      };
      R.computeDataUiHeight = function() {
        return TASK_BAR_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      CompactTaskRenderer.prototype._createChildren = function() {
        var self;
        CompactTaskRenderer.__super__._createChildren.call(this);
        self = this;
        self._taskBarComponent = self._addChild(TaskBarComponent, {
          name: "task-bar-component",
          timeViewport: self._timeViewport,
          options: {
            height: TASK_BAR_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_COMPACT
          }
        });
      };
      CompactTaskRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._taskBarComponent;
      };
      CompactTaskRenderer.prototype._commitProperties = function() {
        var self;
        CompactTaskRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._taskBarComponent.temporalData = this._data);
      };
      CompactTaskRenderer.prototype._updateDisplayList = function() {
        CompactTaskRenderer.__super__._updateDisplayList.call(this);
      };
      CompactTaskRenderer.prototype._updateTask = function() {
        CompactTaskRenderer.__super__._updateTask.call(this);
      };
      CompactTaskRenderer.prototype._resetPropFlags = function() {
        CompactTaskRenderer.__super__._resetPropFlags.call(this);
      };
      CompactTaskRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        CompactTaskRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._taskBarComponent.rolloverPercent = tweening.percent;
      };
      return CompactTaskRenderer;
    }(TaskRenderer);
    CompactSummaryRenderer = function(_super) {
      function CompactSummaryRenderer(conf) {
        var self;
        CompactSummaryRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._summaryBarComponent = null;
      }
      var R, SUMMARY_BAR_HEIGHT, appendChild, elmt, getter, setter, _ref;
      __extends(CompactSummaryRenderer, _super);
      R = CompactSummaryRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      SUMMARY_BAR_HEIGHT = 24;
      R.getName = function() {
        return "CompactSummaryRenderer";
      };
      R.computeDataUiHeight = function() {
        return SUMMARY_BAR_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      CompactSummaryRenderer.prototype._createChildren = function() {
        var self;
        CompactSummaryRenderer.__super__._createChildren.call(this);
        self = this;
        self._summaryBarComponent = self._addChild(SummaryBarComponent, {
          name: "summary-bar-component",
          timeViewport: self._timeViewport,
          options: {
            defaultFont: "normal 700 12px arial, sans-serif",
            dateFont: "normal 700 10px arial, sans-serif",
            height: SUMMARY_BAR_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_COMPACT
          }
        });
      };
      CompactSummaryRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._summaryBarComponent;
      };
      CompactSummaryRenderer.prototype._commitProperties = function() {
        var self;
        CompactSummaryRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._summaryBarComponent.temporalData = self._data);
      };
      CompactSummaryRenderer.prototype._updateDisplayList = function() {
        CompactSummaryRenderer.__super__._updateDisplayList.call(this);
      };
      CompactSummaryRenderer.prototype._resetPropFlags = function() {
        CompactSummaryRenderer.__super__._resetPropFlags.call(this);
      };
      CompactSummaryRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        CompactSummaryRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._summaryBarComponent.rolloverPercent = tweening.percent;
      };
      return CompactSummaryRenderer;
    }(SummaryRenderer);
    CompactMilestoneRenderer = function(_super) {
      function CompactMilestoneRenderer(conf) {
        var self;
        CompactMilestoneRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._milestoneComponent = null;
      }
      var MILESTONE_HEIGHT, R, appendChild, elmt, getter, setter, _ref;
      __extends(CompactMilestoneRenderer, _super);
      R = CompactMilestoneRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      MILESTONE_HEIGHT = 24;
      R.getName = function() {
        return "CompactMilestoneRenderer";
      };
      R.computeDataUiHeight = function() {
        return MILESTONE_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      CompactMilestoneRenderer.prototype._createChildren = function() {
        var self;
        CompactMilestoneRenderer.__super__._createChildren.call(this);
        self = this;
        self._milestoneComponent = self._addChild(MilestoneComponent, {
          name: "milestone-component",
          timeViewport: self._timeViewport,
          options: {
            height: MILESTONE_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_COMPACT
          }
        });
      };
      CompactMilestoneRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._milestoneComponent;
      };
      CompactMilestoneRenderer.prototype._commitProperties = function() {
        var self;
        CompactMilestoneRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._milestoneComponent.temporalData = this._data);
      };
      CompactMilestoneRenderer.prototype._updateDisplayList = function() {
        CompactMilestoneRenderer.__super__._updateDisplayList.call(this);
      };
      CompactMilestoneRenderer.prototype._updateMilestone = function() {
        CompactMilestoneRenderer.__super__._updateMilestone.call(this);
      };
      CompactMilestoneRenderer.prototype._resetPropFlags = function() {
        CompactMilestoneRenderer.__super__._resetPropFlags.call(this);
      };
      CompactMilestoneRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        CompactMilestoneRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._milestoneComponent.rolloverPercent = tweening.percent;
      };
      return CompactMilestoneRenderer;
    }(MilestoneRenderer);
    CompactTemporalDataRendererFactory = function(_super) {
      function CompactTemporalDataRendererFactory(timeViewport) {
        var self;
        CompactTemporalDataRendererFactory.__super__.constructor.call(this);
        self = this;
        self._timeViewport = timeViewport;
      }
      var getter, setter, _ref;
      __extends(CompactTemporalDataRendererFactory, _super);
      _ref = gs(CompactTemporalDataRendererFactory), getter = _ref.getter, setter = _ref.setter;
      CompactTemporalDataRendererFactory.prototype.provideClass = function(data) {
        return data instanceof Task ? CompactTaskRenderer : data instanceof Milestone ? CompactMilestoneRenderer : data instanceof Summary ? CompactSummaryRenderer : null;
      };
      CompactTemporalDataRendererFactory.prototype.provideConf = function(data) {
        return CompactTemporalDataRendererFactory.__super__.provideConf.call(this, data);
      };
      return CompactTemporalDataRendererFactory;
    }(TemporalDataRendererFactory);
    ExtendedTaskRenderer = function(_super) {
      function ExtendedTaskRenderer(conf) {
        var self;
        ExtendedTaskRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._taskBarComponent = null;
      }
      var R, TASK_BAR_HEIGHT, appendChild, elmt, getter, setter, _ref;
      __extends(ExtendedTaskRenderer, _super);
      R = ExtendedTaskRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      TASK_BAR_HEIGHT = 78;
      R.getName = function() {
        return "ExtendedTaskRenderer";
      };
      R.computeDataUiHeight = function() {
        return TASK_BAR_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      ExtendedTaskRenderer.prototype._createChildren = function() {
        var self;
        ExtendedTaskRenderer.__super__._createChildren.call(this);
        self = this;
        self._taskBarComponent = self._addChild(TaskBarComponent, {
          name: "task-bar-component",
          timeViewport: self._timeViewport,
          options: {
            defaultFont: "normal 400 14px arial, sans-serif",
            dateFont: "normal 400 12px arial, sans-serif",
            height: TASK_BAR_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_EXTENDED
          }
        });
      };
      ExtendedTaskRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._taskBarComponent;
      };
      ExtendedTaskRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return 3 * self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      ExtendedTaskRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      ExtendedTaskRenderer.prototype._commitProperties = function() {
        var self;
        ExtendedTaskRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._taskBarComponent.temporalData = this._data);
      };
      ExtendedTaskRenderer.prototype._updateDisplayList = function() {
        ExtendedTaskRenderer.__super__._updateDisplayList.call(this);
      };
      ExtendedTaskRenderer.prototype._updateTask = function() {
        ExtendedTaskRenderer.__super__._updateTask.call(this);
      };
      ExtendedTaskRenderer.prototype._resetPropFlags = function() {
        ExtendedTaskRenderer.__super__._resetPropFlags.call(this);
      };
      ExtendedTaskRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        ExtendedTaskRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._taskBarComponent.rolloverPercent = tweening.percent;
      };
      return ExtendedTaskRenderer;
    }(TaskRenderer);
    ExtendedSummaryRenderer = function(_super) {
      function ExtendedSummaryRenderer(conf) {
        var self;
        ExtendedSummaryRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._summaryBarComponent = null;
      }
      var R, TASK_BAR_HEIGHT, appendChild, elmt, getter, setter, _ref;
      __extends(ExtendedSummaryRenderer, _super);
      R = ExtendedSummaryRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      TASK_BAR_HEIGHT = 78;
      R.getName = function() {
        return "ExtendedSummaryRenderer";
      };
      R.computeDataUiHeight = function() {
        return TASK_BAR_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      ExtendedSummaryRenderer.prototype._createChildren = function() {
        var self;
        ExtendedSummaryRenderer.__super__._createChildren.call(this);
        self = this;
        self._summaryBarComponent = self._addChild(SummaryBarComponent, {
          name: "summary-bar-component",
          timeViewport: this._timeViewport,
          options: {
            defaultFont: "normal 700 14px arial, sans-serif",
            dateFont: "normal 700 12px arial, sans-serif",
            height: TASK_BAR_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_EXTENDED
          }
        });
      };
      ExtendedSummaryRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._summaryBarComponent;
      };
      ExtendedSummaryRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return 3 * self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      ExtendedSummaryRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      ExtendedSummaryRenderer.prototype._commitProperties = function() {
        var self;
        ExtendedSummaryRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._summaryBarComponent.temporalData = self._data);
      };
      ExtendedSummaryRenderer.prototype._updateDisplayList = function() {
        ExtendedSummaryRenderer.__super__._updateDisplayList.call(this);
      };
      ExtendedSummaryRenderer.prototype._updateSummary = function() {
        ExtendedSummaryRenderer.__super__._updateSummary.call(this);
      };
      ExtendedSummaryRenderer.prototype._resetPropFlags = function() {
        ExtendedSummaryRenderer.__super__._resetPropFlags.call(this);
      };
      ExtendedSummaryRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        ExtendedSummaryRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._summaryBarComponent.rolloverPercent = tweening.percent;
      };
      return ExtendedSummaryRenderer;
    }(SummaryRenderer);
    ExtendedMilestoneRenderer = function(_super) {
      function ExtendedMilestoneRenderer(conf) {
        var self;
        ExtendedMilestoneRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._milestoneComponent = null;
      }
      var MILESTONE_HEIGHT, R, appendChild, elmt, getter, setter, _ref;
      __extends(ExtendedMilestoneRenderer, _super);
      R = ExtendedMilestoneRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      MILESTONE_HEIGHT = 78;
      R.getName = function() {
        return "ExtendedMilestoneRenderer";
      };
      R.computeDataUiHeight = function() {
        return MILESTONE_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      ExtendedMilestoneRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return 3 * self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      ExtendedMilestoneRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      ExtendedMilestoneRenderer.prototype._createChildren = function() {
        var self;
        ExtendedMilestoneRenderer.__super__._createChildren.call(this);
        self = this;
        self._milestoneComponent = self._addChild(MilestoneComponent, {
          name: "milestone-component",
          timeViewport: self._timeViewport,
          options: {
            defaultFont: "normal 400 14px arial, sans-serif",
            dateFont: "normal 400 12px arial, sans-serif",
            height: MILESTONE_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_EXTENDED
          }
        });
      };
      ExtendedMilestoneRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._milestoneComponent;
      };
      ExtendedMilestoneRenderer.prototype._commitProperties = function() {
        var self;
        ExtendedMilestoneRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._milestoneComponent.temporalData = self._data);
      };
      ExtendedMilestoneRenderer.prototype._updateDisplayList = function() {
        ExtendedMilestoneRenderer.__super__._updateDisplayList.call(this);
      };
      ExtendedMilestoneRenderer.prototype._updateMilestone = function() {
        ExtendedMilestoneRenderer.__super__._updateMilestone.call(this);
      };
      ExtendedMilestoneRenderer.prototype._resetPropFlags = function() {
        ExtendedMilestoneRenderer.__super__._resetPropFlags.call(this);
      };
      ExtendedMilestoneRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        ExtendedMilestoneRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._milestoneComponent.rolloverPercent = tweening.percent;
      };
      return ExtendedMilestoneRenderer;
    }(MilestoneRenderer);
    ExtendedTemporalDataRendererFactory = function(_super) {
      function ExtendedTemporalDataRendererFactory(timeViewport) {
        var self;
        ExtendedTemporalDataRendererFactory.__super__.constructor.call(this);
        self = this;
        self._timeViewport = timeViewport;
      }
      var getter, setter, _ref;
      __extends(ExtendedTemporalDataRendererFactory, _super);
      _ref = gs(ExtendedTemporalDataRendererFactory), getter = _ref.getter, setter = _ref.setter;
      ExtendedTemporalDataRendererFactory.prototype.provideClass = function(data) {
        return data instanceof Task ? ExtendedTaskRenderer : data instanceof Milestone ? ExtendedMilestoneRenderer : data instanceof Summary ? ExtendedSummaryRenderer : null;
      };
      ExtendedTemporalDataRendererFactory.prototype.provideConf = function(data) {
        return ExtendedTemporalDataRendererFactory.__super__.provideConf.call(this, data);
      };
      return ExtendedTemporalDataRendererFactory;
    }(TemporalDataRendererFactory);
    NormalTaskRenderer = function(_super) {
      function NormalTaskRenderer(conf) {
        var self;
        NormalTaskRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._taskBarComponent = null;
      }
      var R, TASK_BAR_HEIGHT, appendChild, elmt, getter, setter, _ref;
      __extends(NormalTaskRenderer, _super);
      R = NormalTaskRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      TASK_BAR_HEIGHT = 48;
      R.getName = function() {
        return "NormalTaskRenderer";
      };
      R.computeDataUiHeight = function() {
        return TASK_BAR_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      NormalTaskRenderer.prototype._createChildren = function() {
        var self;
        NormalTaskRenderer.__super__._createChildren.call(this);
        self = this;
        self._taskBarComponent = self._addChild(TaskBarComponent, {
          name: "task-bar-component",
          timeViewport: self._timeViewport,
          options: {
            height: TASK_BAR_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_NORMAL
          }
        });
      };
      NormalTaskRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._taskBarComponent;
      };
      NormalTaskRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return 3 * self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      NormalTaskRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      NormalTaskRenderer.prototype._commitProperties = function() {
        var self;
        NormalTaskRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._taskBarComponent.temporalData = self._data);
      };
      NormalTaskRenderer.prototype._updateDisplayList = function() {
        NormalTaskRenderer.__super__._updateDisplayList.call(this);
      };
      NormalTaskRenderer.prototype._updateTask = function() {
        NormalTaskRenderer.__super__._updateTask.call(this);
      };
      NormalTaskRenderer.prototype._resetPropFlags = function() {
        NormalTaskRenderer.__super__._resetPropFlags.call(this);
      };
      NormalTaskRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        NormalTaskRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._taskBarComponent.rolloverPercent = tweening.percent;
      };
      return NormalTaskRenderer;
    }(TaskRenderer);
    NormalSummaryRenderer = function(_super) {
      function NormalSummaryRenderer(conf) {
        var self;
        NormalSummaryRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._summaryBarComponent = null;
      }
      var R, TASK_BAR_HEIGHT, appendChild, elmt, getter, setter, _ref;
      __extends(NormalSummaryRenderer, _super);
      R = NormalSummaryRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      TASK_BAR_HEIGHT = 48;
      R.getName = function() {
        return "NormalSummaryRenderer";
      };
      R.computeDataUiHeight = function() {
        return TASK_BAR_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      NormalSummaryRenderer.prototype._createChildren = function() {
        var self;
        NormalSummaryRenderer.__super__._createChildren.call(this);
        self = this;
        self._summaryBarComponent = self._addChild(SummaryBarComponent, {
          name: "summary-bar-component",
          timeViewport: self._timeViewport,
          options: {
            defaultFont: "normal 700 12px arial, sans-serif",
            dateFont: "normal 700 10px arial, sans-serif",
            height: TASK_BAR_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_NORMAL
          }
        });
      };
      NormalSummaryRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._summaryBarComponent;
      };
      NormalSummaryRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return 3 * self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      NormalSummaryRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      NormalSummaryRenderer.prototype._commitProperties = function() {
        var self;
        NormalSummaryRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._summaryBarComponent.temporalData = this._data);
      };
      NormalSummaryRenderer.prototype._updateDisplayList = function() {
        NormalSummaryRenderer.__super__._updateDisplayList.call(this);
      };
      NormalSummaryRenderer.prototype._updateSummary = function() {
        NormalSummaryRenderer.__super__._updateSummary.call(this);
      };
      NormalSummaryRenderer.prototype._resetPropFlags = function() {
        NormalSummaryRenderer.__super__._resetPropFlags.call(this);
      };
      NormalSummaryRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        NormalSummaryRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._summaryBarComponent.rolloverPercent = tweening.percent;
      };
      return NormalSummaryRenderer;
    }(SummaryRenderer);
    NormalMilestoneRenderer = function(_super) {
      function NormalMilestoneRenderer(conf) {
        var self;
        NormalMilestoneRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._milestoneComponent = null;
      }
      var MILESTONE_HEIGHT, R, appendChild, elmt, getter, setter, _ref;
      __extends(NormalMilestoneRenderer, _super);
      R = NormalMilestoneRenderer;
      _ref = gs(R), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt;
      MILESTONE_HEIGHT = 48;
      R.getName = function() {
        return "NormalMilestoneRenderer";
      };
      R.computeDataUiHeight = function() {
        return MILESTONE_HEIGHT + TemporalDataRenderer.BORDER_WIDTH;
      };
      NormalMilestoneRenderer.prototype._createChildren = function() {
        var self;
        NormalMilestoneRenderer.__super__._createChildren.call(this);
        self = this;
        self._milestoneComponent = self._addChild(MilestoneComponent, {
          name: "milestone-component",
          timeViewport: self._timeViewport,
          options: {
            height: MILESTONE_HEIGHT + PX,
            mode: TemporalCanvasBasedComponent.MODE_NORMAL
          }
        });
      };
      NormalMilestoneRenderer.prototype._getGraphicalTemporalDataRepresentationComponent = function() {
        var self;
        self = this;
        return self._milestoneComponent;
      };
      NormalMilestoneRenderer.prototype.getStartLinkAnchorDistanceToSlidingTopPosition = function() {
        var self;
        self = this;
        return 3 * self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      NormalMilestoneRenderer.prototype.getStartLinkAnchorDistanceToSlidingBottomPosition = function() {
        var self;
        self = this;
        return self._getGraphicalTemporalDataRepresentationComponent().height / 4;
      };
      NormalMilestoneRenderer.prototype._commitProperties = function() {
        var self;
        NormalMilestoneRenderer.__super__._commitProperties.call(this);
        self = this;
        self._dataChangedFlag && (self._milestoneComponent.temporalData = self._data);
      };
      NormalMilestoneRenderer.prototype._updateDisplayList = function() {
        NormalMilestoneRenderer.__super__._updateDisplayList.call(this);
      };
      NormalMilestoneRenderer.prototype._updateMilestone = function() {
        NormalMilestoneRenderer.__super__._updateMilestone.call(this);
      };
      NormalMilestoneRenderer.prototype._resetPropFlags = function() {
        NormalMilestoneRenderer.__super__._resetPropFlags.call(this);
      };
      NormalMilestoneRenderer.prototype._rolloverTweened = function(tweening, hashCode) {
        var self;
        NormalMilestoneRenderer.__super__._rolloverTweened.call(this, tweening, hashCode);
        self = this;
        self._milestoneComponent.rolloverPercent = tweening.percent;
      };
      return NormalMilestoneRenderer;
    }(MilestoneRenderer);
    NormalTemporalDataRendererFactory = function(_super) {
      function NormalTemporalDataRendererFactory(timeViewport) {
        var self;
        NormalTemporalDataRendererFactory.__super__.constructor.call(this);
        self = this;
        self._timeViewport = timeViewport;
      }
      var getter, setter, _ref;
      __extends(NormalTemporalDataRendererFactory, _super);
      _ref = gs(NormalTemporalDataRendererFactory), getter = _ref.getter, setter = _ref.setter;
      NormalTemporalDataRendererFactory.prototype.provideClass = function(data) {
        return data instanceof Task ? NormalTaskRenderer : data instanceof Milestone ? NormalMilestoneRenderer : data instanceof Summary ? NormalSummaryRenderer : null;
      };
      NormalTemporalDataRendererFactory.prototype.provideConf = function(data) {
        return NormalTemporalDataRendererFactory.__super__.provideConf.call(this, data);
      };
      return NormalTemporalDataRendererFactory;
    }(TemporalDataRendererFactory);
    GanttModelFactory = function() {
      function GanttModelFactory() {}
      var Initializer;
      Initializer = function() {
        function Initializer(json, ganttModel, ganttModelDataProvider) {
          var self;
          self = this;
          self._jsonObject = _.isString(json) ? JSON.parse(json) : json;
          self._ganttModel = ganttModel;
          self._ganttModelDataProvider = ganttModelDataProvider;
          self._previousTemporalData = null;
          self._uid_temporalData_map = {};
        }
        Initializer.prototype.initialize = function() {
          var ganttModel, i, jsonOject, l, len, links, pred, predUid, predecessorLink, self, temporalData, uidStr, _ref1;
          self = this;
          ganttModel = self._ganttModel;
          jsonOject = self._jsonObject;
          ganttModel.name = jsonOject.name;
          jsonOject.temporalData && (ganttModel.temporalData = _.map(jsonOject.temporalData, self._createTemporalDataFn(ganttModel), self));
          _ref1 = self._uid_temporalData_map;
          for (uidStr in _ref1) {
            temporalData = _ref1[uidStr];
            links = temporalData.__predecessorLinks;
            if (links && (len = links.length) > 0) {
              i = 0;
              for (;len > i; ) {
                l = links[i];
                predUid = l.predecessorUID;
                pred = self._uid_temporalData_map[predUid + ""];
                if (pred) {
                  predecessorLink = new PredecessorLink();
                  predecessorLink.predecessor = pred;
                  temporalData.addToPredecessorLinks(predecessorLink);
                }
                i++;
              }
              delete temporalData.__predecessorLinks;
            }
          }
          self._uid_temporalData_map = null;
        };
        Initializer.prototype._addToMap = function(temporalData) {
          var self, uid;
          self = this;
          uid = temporalData.uid;
          return typeof uid !== undefinedstr && null !== uid ? self._uid_temporalData_map[uid + ""] = temporalData : void 0;
        };
        Initializer.prototype._backupPredecessorLinks = function(temporalData, jsonTemporalData) {
          jsonTemporalData.predecessorLinks && (temporalData.__predecessorLinks = jsonTemporalData.predecessorLinks);
        };
        Initializer.prototype._createTask = function(parent, jsonTask) {
          var self, task;
          self = this;
          task = new Task();
          task.uid = jsonTask.uid;
          task.parent = parent;
          task.previousTemporalData = self._previousTemporalData;
          task.name = jsonTask.name || "???";
          task.percentComplete = (jsonTask.percentComplete || 0) / 100;
          task.start = simpleParseDate(jsonTask.start);
          task.finish = simpleParseDate(jsonTask.finish);
          self._previousTemporalData && (self._previousTemporalData.nextTemporalData = task);
          self._previousTemporalData = task;
          self._addToMap(task);
          return task;
        };
        Initializer.prototype._createMilestone = function(parent, jsonMilestone) {
          var milestone, self;
          self = this;
          milestone = new Milestone();
          milestone.uid = jsonMilestone.uid;
          milestone.parent = parent;
          milestone.previousTemporalData = self._previousTemporalData;
          milestone.name = jsonMilestone.name;
          milestone.start = simpleParseDate(jsonMilestone.start);
          self._previousTemporalData && (self._previousTemporalData.nextTemporalData = milestone);
          self._previousTemporalData = milestone;
          self._addToMap(milestone);
          return milestone;
        };
        Initializer.prototype._createSummary = function(parent, jsonSummary) {
          var self, summary;
          self = this;
          summary = new Summary();
          summary.uid = jsonSummary.uid;
          summary.parent = parent;
          summary.previousTemporalData = self._previousTemporalData;
          summary.name = jsonSummary.name || "???";
          summary.percentComplete = (jsonSummary.percentComplete || 0) / 100;
          self._previousTemporalData && (self._previousTemporalData.nextTemporalData = summary);
          self._previousTemporalData = summary;
          summary.temporalData = _.map(jsonSummary.temporalData, self._createTemporalDataFn(summary), self);
          self._addToMap(summary);
          return summary;
        };
        Initializer.prototype._createTemporalDataFn = function(parent) {
          var self;
          self = this;
          return function(jsonTemporalData) {
            var temporalData, type;
            type = jsonTemporalData.type;
            temporalData = "Task" === type ? self._createTask(parent, jsonTemporalData) : "Milestone" === type ? self._createMilestone(parent, jsonTemporalData) : "Summary" === type ? self._createSummary(parent, jsonTemporalData) : null;
            temporalData && self._backupPredecessorLinks(temporalData, jsonTemporalData);
            return temporalData;
          };
        };
        return Initializer;
      }();
      GanttModelFactory.prototype.createGanttModelFromJson = function(json) {
        var ganttModel, ganttModelDataProvider, initializer;
        ganttModel = new GanttModel();
        ganttModelDataProvider = new GanttModelDataProvider(ganttModel);
        initializer = new Initializer(json, ganttModel, ganttModelDataProvider);
        initializer.initialize();
        return {
          ganttModel: ganttModel,
          ganttModelDataProvider: ganttModelDataProvider
        };
      };
      return GanttModelFactory;
    }();
    TemporalCanvasBasedComponent = function(_super) {
      function TemporalCanvasBasedComponent(conf) {
        var self;
        self = this;
        self.PeriodBasedComponent_init();
        TemporalCanvasBasedComponent.__super__.constructor.call(this, conf);
        self.heightIsVariable = !1;
        self.widthFromParent = !0;
        self._timeViewport = conf.timeViewport;
        self._canvas = null;
        self._drawing = null;
        self._temporalData = null;
        self._temporalDataChangedFlag = !1;
        self._rolloverPercent = null;
        self._rolloverPercentChangedFlag = !1;
        self._temporalDataPropertyChangedFlag = !1;
        self._processOptions(conf.options);
      }
      var TCBC, getter, setter, _ref;
      __extends(TemporalCanvasBasedComponent, _super);
      TCBC = TemporalCanvasBasedComponent;
      _ref = gs(TCBC), getter = _ref.getter, setter = _ref.setter;
      TCBC.MODE_COMPACT = 0;
      TCBC.MODE_NORMAL = 1;
      TCBC.MODE_EXTENDED = 2;
      TCBC.DEFAULT_OPTIONS = {
        defaultFont: "normal 400 12px arial, sans-serif",
        dateFont: "normal 400 10px arial, sans-serif",
        height: "10px",
        width: "100%",
        mode: TCBC.MODE_COMPACT
      };
      mixinProto(TemporalCanvasBasedComponent, PeriodBasedComponent);
      TemporalCanvasBasedComponent.prototype._updateMillisByPixel = function() {
        var self, width;
        self = this;
        width = self.width + (self.isScrollbarVisible() ? Scrollbar.WIDTH : 0);
        0 === width && (width = 1920);
        self._millisByPixel = self._period.durationInMillis() / width;
      };
      getter("defaultFont", function() {
        return this._defaultFont;
      });
      getter("lastComputedStartLinkAnchorPoint", function() {
        return this._drawing.lastComputedStartLinkAnchorPoint;
      });
      getter("lastComputedFinishLinkAnchorPoint", function() {
        return this._drawing.lastComputedFinishLinkAnchorPoint;
      });
      getter("lastComputedLinkStrokeStyle", function() {
        return this._drawing.lastComputedLinkStrokeStyle;
      });
      getter("rolloverPercent", function() {
        return this._rolloverPercent;
      });
      setter("rolloverPercent", function(rolloverPercent) {
        var self;
        self = this;
        if (self._rolloverPercent !== rolloverPercent) {
          self._rolloverPercent = rolloverPercent;
          self._rolloverPercentChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("temporalData", function() {
        return this._temporalData;
      });
      setter("temporalData", function(temporalData) {
        var oldData, self;
        self = this;
        if (self._temporalData !== temporalData) {
          oldData = self._temporalData;
          oldData && oldData.propertyChanged.remove(self._temporalDataPropertyChanged, self);
          temporalData.propertyChanged.add(self._temporalDataPropertyChanged, self);
          self._temporalData = temporalData;
          self._temporalDataChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      TemporalCanvasBasedComponent.prototype.isScrollbarVisible = function() {
        return this._parent.isScrollbarVisible();
      };
      TemporalCanvasBasedComponent.prototype.updateListViewportFromDataRequest = function(req) {
        return this._parent.updateListViewportFromDataRequest(req);
      };
      TemporalCanvasBasedComponent.prototype._createChildren = function() {
        TemporalCanvasBasedComponent.__super__._createChildren.call(this);
      };
      TemporalCanvasBasedComponent.prototype.attach = function() {
        var self;
        TemporalCanvasBasedComponent.__super__.attach.call(this);
        self = this;
        self.period = self._timeViewport.period;
      };
      TemporalCanvasBasedComponent.prototype.detach = function() {
        TemporalCanvasBasedComponent.__super__.detach.call(this);
      };
      TemporalCanvasBasedComponent.prototype._commitProperties = function() {
        var self;
        TemporalCanvasBasedComponent.__super__._commitProperties.call(this);
        self = this;
        self._drawingSurfaceChangedFlag && self._updateMillisByPixel();
      };
      TemporalCanvasBasedComponent.prototype._updateDisplayList = function() {
        TemporalCanvasBasedComponent.__super__._updateDisplayList.call(this);
      };
      TemporalCanvasBasedComponent.prototype._resetPropFlags = function() {
        var self;
        TemporalCanvasBasedComponent.__super__._resetPropFlags.call(this);
        self = this;
        self.PeriodBasedComponent_resetPropFlags();
        self._temporalDataChangedFlag = !1;
        self._rolloverPercentChangedFlag = !1;
        self._temporalDataPropertyChangedFlag = !1;
      };
      TemporalCanvasBasedComponent.prototype._processOptions = function(options) {
        var dateFont, defaultFont, height, mode, self, width, _ref2;
        self = this;
        _ref2 = self._normalizedOptions(options || {}), defaultFont = _ref2.defaultFont, 
        dateFont = _ref2.dateFont, height = _ref2.height, width = _ref2.width, mode = _ref2.mode;
        self._defaultFont = defaultFont;
        self.dateFont = dateFont;
        self.mode = mode;
        self.domStyle.height = height;
        self.domStyle.width = width;
      };
      TemporalCanvasBasedComponent.prototype._normalizedOptions = function(options) {
        var normalizedOptions;
        normalizedOptions = _.clone(options);
        _.defaults(normalizedOptions, TemporalCanvasBasedComponent.DEFAULT_OPTIONS);
        return normalizedOptions;
      };
      TemporalCanvasBasedComponent.prototype._configureModelBindings = function(enable) {
        var pc, self, tv;
        TemporalCanvasBasedComponent.__super__._configureModelBindings.call(this, enable);
        self = this;
        tv = self._timeViewport;
        pc = tv.periodChanged;
        enable ? pc.add(self._periodChanged, this) : pc.remove(self._periodChanged, this);
      };
      TemporalCanvasBasedComponent.prototype._configureUiBindings = function(enable) {
        TemporalCanvasBasedComponent.__super__._configureUiBindings.call(this, enable);
      };
      TemporalCanvasBasedComponent.prototype._periodChanged = function(oldPeriod, newPeriod) {
        this.period = newPeriod;
      };
      TemporalCanvasBasedComponent.prototype._temporalDataPropertyChanged = function(propName, oldValue, newValue) {
        var self;
        self = this;
        self._temporalDataPropertyChangedFlag = !0;
        self.invalidatePropsAndDisplayList();
      };
      return TemporalCanvasBasedComponent;
    }(CanvasBasedComponent);
    TaskBarComponent = function(_super) {
      function TaskBarComponent(conf) {
        var self;
        TaskBarComponent.__super__.constructor.call(this, conf);
        self = this;
        self._taskBarStartPx = null;
        self._taskBarStartPxChangedFlag = !1;
        self._taskBarEndPx = null;
        self._taskBarEndPxChangedFlag = !1;
      }
      var TASK_NAME_MARGIN_LEFT, appendChild, applyUserSelectNoneStyle, elmt, getter, setter, startOfNextDay, _ref;
      __extends(TaskBarComponent, _super);
      _ref = gs(TaskBarComponent), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt, applyUserSelectNoneStyle = CoreFunctions.applyUserSelectNoneStyle;
      startOfNextDay = DateUtil.startOfNextDay;
      TASK_NAME_MARGIN_LEFT = 7;
      getter("task", function() {
        return this._temporalData;
      });
      getter("taskBarStartPx", function() {
        return this._taskBarStartPx;
      });
      setter("taskBarStartPx", function(taskBarStartPx) {
        var self;
        self = this;
        if (self._taskBarStartPx !== taskBarStartPx) {
          self._taskBarStartPx = taskBarStartPx;
          self._taskBarStartPxChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("taskBarEndPx", function() {
        return this._taskBarEndPx;
      });
      setter("taskBarEndPx", function(taskBarEndPx) {
        var self;
        self = this;
        if (self._taskBarEndPx !== taskBarEndPx) {
          self._taskBarEndPx = taskBarEndPx;
          self._taskBarEndPxChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      TaskBarComponent.prototype.attach = function() {
        TaskBarComponent.__super__.attach.call(this);
      };
      TaskBarComponent.prototype.detach = function() {
        TaskBarComponent.__super__.detach.call(this);
      };
      TaskBarComponent.prototype._createChildren = function() {
        var self;
        TaskBarComponent.__super__._createChildren.call(this);
        self = this;
        self._createTaskBar();
      };
      TaskBarComponent.prototype._commitProperties = function() {
        var f, self;
        TaskBarComponent.__super__._commitProperties.call(this);
        self = this;
        if (self._periodChangedFlag || self._temporalDataChangedFlag || self._drawingSurfaceChangedFlag) {
          self.taskBarStartPx = self.dateToPixelPosition(self._temporalData.start);
          f = self._temporalData.finish;
          self.taskBarEndPx = self.dateToPixelPosition(startOfNextDay(f));
        }
      };
      TaskBarComponent.prototype._updateDisplayList = function() {
        var self, tos;
        TaskBarComponent.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        (tos || self._temporalDataChangedFlag || self._temporalDataPropertyChangedFlag || self._taskBarStartPxChangedFlag || self._taskBarEndPxChangedFlag || self._rolloverPercentChangedFlag) && self._updateTaskBar();
      };
      TaskBarComponent.prototype._resetPropFlags = function() {
        var self;
        TaskBarComponent.__super__._resetPropFlags.call(this);
        self = this;
        self._taskBarStartPxChangedFlag = !1;
        self._taskBarEndPxChangedFlag = !1;
      };
      TaskBarComponent.prototype._createTaskBar = function() {
        var self;
        self = this;
        self._canvas = self._addCanvas("task-bar-canvas");
        self._drawing = new TaskBarDrawing(self, self._canvas);
      };
      TaskBarComponent.prototype._updateTaskBar = function() {
        this._drawing.update();
      };
      TaskBarComponent.prototype._processOptions = function(options) {
        TaskBarComponent.__super__._processOptions.call(this, options);
      };
      TaskBarComponent.prototype._normalizedOptions = function(options) {
        var normalizedOptions;
        normalizedOptions = TaskBarComponent.__super__._normalizedOptions.call(this, options);
        return normalizedOptions;
      };
      TaskBarComponent.prototype._configureUiBindings = function(enable) {
        TaskBarComponent.__super__._configureUiBindings.call(this, enable);
      };
      TaskBarComponent.prototype._configureModelBindings = function(enable) {
        TaskBarComponent.__super__._configureModelBindings.call(this, enable);
      };
      return TaskBarComponent;
    }(TemporalCanvasBasedComponent);
    SummaryBarComponent = function(_super) {
      function SummaryBarComponent(conf) {
        var self;
        SummaryBarComponent.__super__.constructor.call(this, conf);
        self = this;
        self._summaryBarStartPx = null;
        self._summaryBarStartPxChangedFlag = !1;
        self._summaryBarEndPx = null;
        self._summaryBarEndPxChangedFlag = !1;
      }
      var TASK_NAME_MARGIN_LEFT, appendChild, applyUserSelectNoneStyle, elmt, getter, setter, startOfNextDay, _ref;
      __extends(SummaryBarComponent, _super);
      _ref = gs(SummaryBarComponent), getter = _ref.getter, setter = _ref.setter;
      appendChild = CoreFunctions.appendChild, elmt = CoreFunctions.elmt, applyUserSelectNoneStyle = CoreFunctions.applyUserSelectNoneStyle;
      startOfNextDay = DateUtil.startOfNextDay;
      TASK_NAME_MARGIN_LEFT = 7;
      getter("summary", function() {
        return this._temporalData;
      });
      getter("summaryBarStartPx", function() {
        return this._summaryBarStartPx;
      });
      setter("summaryBarStartPx", function(summaryBarStartPx) {
        var self;
        self = this;
        if (self._summaryBarStartPx !== summaryBarStartPx) {
          self._summaryBarStartPx = summaryBarStartPx;
          self._summaryBarStartPxChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      getter("summaryBarEndPx", function() {
        return this._summaryBarEndPx;
      });
      setter("summaryBarEndPx", function(summaryBarEndPx) {
        var self;
        self = this;
        if (self._summaryBarEndPx !== summaryBarEndPx) {
          self._summaryBarEndPx = summaryBarEndPx;
          self._summaryBarEndPxChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      SummaryBarComponent.prototype.attach = function() {
        SummaryBarComponent.__super__.attach.call(this);
      };
      SummaryBarComponent.prototype.detach = function() {
        SummaryBarComponent.__super__.detach.call(this);
      };
      SummaryBarComponent.prototype._createChildren = function() {
        var self;
        SummaryBarComponent.__super__._createChildren.call(this);
        self = this;
        self._createSummaryBar();
      };
      SummaryBarComponent.prototype._commitProperties = function() {
        var f, self;
        SummaryBarComponent.__super__._commitProperties.call(this);
        self = this;
        if (self._periodChangedFlag || self._temporalDataChangedFlag || self._drawingSurfaceChangedFlag) if (self._temporalData.start) {
          self.summaryBarStartPx = self.dateToPixelPosition(self._temporalData.start);
          f = self._temporalData.finish;
          self.summaryBarEndPx = self.dateToPixelPosition(startOfNextDay(f));
        } else self.summaryBarStartPx = self.summaryBarEndPx = 0;
      };
      SummaryBarComponent.prototype._updateDisplayList = function() {
        var self, tos;
        SummaryBarComponent.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        (tos || self._temporalDataChangedFlag || self._temporalDataPropertyChangedFlag || self._summaryBarStartPxChangedFlag || self._summaryBarEndPxChangedFlag || self._rolloverPercentChangedFlag) && self._updateSummaryBar();
      };
      SummaryBarComponent.prototype._resetPropFlags = function() {
        var self;
        SummaryBarComponent.__super__._resetPropFlags.call(this);
        self = this;
        self._summaryBarStartPxChangedFlag = !1;
        self._summaryBarEndPxChangedFlag = !1;
      };
      SummaryBarComponent.prototype._createSummaryBar = function() {
        var c, self;
        self = this;
        self._canvas = c = self._addCanvas("summary-bar-canvas");
        c.style.cursor = "pointer";
        self._drawing = new SummaryBarDrawing(self, self._canvas);
        return self._configureCollapse();
      };
      SummaryBarComponent.prototype._configureCollapse = function() {
        var mousedown, mousemove, mouseup, moved, self;
        self = this;
        moved = !1;
        mousedown = function() {
          return moved = !1;
        };
        mousemove = function() {
          return moved = !0;
        };
        mouseup = function() {
          if (moved) moved = !1; else {
            self.summary._dp_collapsed = !self.summary._dp_collapsed;
            self.updateListViewportFromDataRequest({
              data: self.summary,
              inclusive: !1
            });
          }
        };
        self._addEventListenerFor(self._canvas, "mousedown", mousedown);
        self._addEventListenerFor(self._canvas, "mouseup", mouseup);
        self._addEventListenerFor(self._canvas, "mousemove", mousemove);
      };
      SummaryBarComponent.prototype._updateSummaryBar = function() {
        this._drawing.update();
      };
      SummaryBarComponent.prototype._processOptions = function(options) {
        SummaryBarComponent.__super__._processOptions.call(this, options);
      };
      SummaryBarComponent.prototype._normalizedOptions = function(options) {
        var normalizedOptions;
        normalizedOptions = SummaryBarComponent.__super__._normalizedOptions.call(this, options);
        return normalizedOptions;
      };
      SummaryBarComponent.prototype._configureUiBindings = function(enable) {
        SummaryBarComponent.__super__._configureUiBindings.call(this, enable);
      };
      SummaryBarComponent.prototype._configureModelBindings = function(enable) {
        SummaryBarComponent.__super__._configureModelBindings.call(this, enable);
      };
      return SummaryBarComponent;
    }(TemporalCanvasBasedComponent);
    MilestoneComponent = function(_super) {
      function MilestoneComponent(conf) {
        var self;
        MilestoneComponent.__super__.constructor.call(this, conf);
        self = this;
        self._milestonePx = null;
        self._milestonePxChangedFlag = !1;
      }
      var getter, setter, startOfNextDay, _ref;
      __extends(MilestoneComponent, _super);
      _ref = gs(MilestoneComponent), getter = _ref.getter, setter = _ref.setter;
      startOfNextDay = DateUtil.startOfNextDay;
      getter("milestone", function() {
        return this._temporalData;
      });
      getter("milestonePx", function() {
        return this._milestonePx;
      });
      setter("milestonePx", function(milestonePx) {
        var self;
        self = this;
        if (self._milestonePx !== milestonePx) {
          self._milestonePx = milestonePx;
          self._milestonePxChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      MilestoneComponent.prototype.attach = function() {
        MilestoneComponent.__super__.attach.call(this);
      };
      MilestoneComponent.prototype.detach = function() {
        MilestoneComponent.__super__.detach.call(this);
      };
      MilestoneComponent.prototype._createChildren = function() {
        var self;
        MilestoneComponent.__super__._createChildren.call(this);
        self = this;
        self._createMilestone();
      };
      MilestoneComponent.prototype._commitProperties = function() {
        var s, self;
        MilestoneComponent.__super__._commitProperties.call(this);
        self = this;
        if (self._periodChangedFlag || self._temporalDataChangedFlag || self._drawingSurfaceChangedFlag) {
          s = self._temporalData.start;
          self.milestonePx = self.dateToPixelPosition(startOfNextDay(s));
        }
      };
      MilestoneComponent.prototype._updateDisplayList = function() {
        var self, tos;
        MilestoneComponent.__super__._updateDisplayList.call(this);
        self = this;
        tos = self._themeOrSurfaceChangedFlag();
        return tos || self._temporalDataChangedFlag || self._temporalDataPropertyChangedFlag || self._milestonePxChangedFlag || self._rolloverPercentChangedFlag ? self._updateMilestone() : void 0;
      };
      MilestoneComponent.prototype._resetPropFlags = function() {
        var self;
        MilestoneComponent.__super__._resetPropFlags.call(this);
        self = this;
        self._milestonePxChangedFlag = !1;
      };
      MilestoneComponent.prototype._createMilestone = function() {
        var self;
        self = this;
        self._canvas = self._addCanvas("milestone-canvas");
        self._drawing = new MilestoneDrawing(self, self._canvas);
      };
      MilestoneComponent.prototype._updateMilestone = function() {
        var self;
        self = this;
        self._drawing.update();
      };
      MilestoneComponent.prototype._processOptions = function(options) {
        MilestoneComponent.__super__._processOptions.call(this, options);
      };
      MilestoneComponent.prototype._normalizedOptions = function(options) {
        var normalizedOptions;
        normalizedOptions = MilestoneComponent.__super__._normalizedOptions.call(this, options);
        return normalizedOptions;
      };
      MilestoneComponent.prototype._configureUiBindings = function(enable) {
        MilestoneComponent.__super__._configureUiBindings.call(this, enable);
      };
      MilestoneComponent.prototype._configureModelBindings = function(enable) {
        MilestoneComponent.__super__._configureModelBindings.call(this, enable);
      };
      return MilestoneComponent;
    }(TemporalCanvasBasedComponent);
    LocaleChooser = function(_super) {
      function LocaleChooser(conf) {
        var self;
        conf.iconClass = "icon-tt-flag";
        conf.title = "language";
        conf.name = "locale-chooser";
        LocaleChooser.__super__.constructor.call(this, conf);
        self = this;
        self._ganttChart = conf.ganttChart;
      }
      var appendChild, elmt, getter, hexToRgbaStr, setter, text, _ref;
      __extends(LocaleChooser, _super);
      _ref = gs(LocaleChooser), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text, 
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      setter("locale", function(localeName) {
        this._ganttChart.locale = localeName;
      });
      getter("timelineLocaleManager", function() {
        return this._ganttChart.timelineLocaleManager;
      });
      LocaleChooser.prototype._createPanelContainerChildren = function() {
        var locale, locales, name, self;
        self = this;
        locales = self._ganttChart.localeManager.locales;
        for (name in locales) {
          locale = locales[name];
          self._panelContainer._addChild(LocaleRenderer, {
            name: "locale-renderer",
            localeChooser: self,
            locale: locale
          });
        }
      };
      return LocaleChooser;
    }(Panel);
    LocaleRenderer = function(_super) {
      function LocaleRenderer(conf) {
        var self;
        LocaleRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._localeChooser = conf.localeChooser;
        self._locale = conf.locale;
        self._toggleButton = null;
        self._localeNameLabel = null;
        self._primaryShadesDiv = null;
      }
      var appendChild, clickHandler, cssReset, elmt, getter, hexToRgbaStr, setter, text, _ref;
      __extends(LocaleRenderer, _super);
      _ref = gs(LocaleRenderer), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text, 
      hexToRgbaStr = CoreFunctions.hexToRgbaStr, cssReset = CoreFunctions.cssReset;
      clickHandler = function(self) {
        return function() {
          self._localeChooser.locale = self._locale.name;
        };
      };
      LocaleRenderer.prototype._createChildren = function() {
        var c, cStyle, iconClass, locale, localeManager, self;
        LocaleRenderer.__super__._createChildren.call(this);
        self = this;
        localeManager = self._localeChooser.localeManager;
        locale = self._locale;
        c = self._domContainer;
        cStyle = c.style;
        cStyle.cursor = "pointer";
        cStyle.display = "inline-block";
        cStyle.textAlign = "center";
        cStyle.minWidth = "75px";
        cStyle.marginTop = "10px";
        cStyle.marginBottom = "10px";
        iconClass = locale.name === localeManager.locale.name ? "icon-tt-toggle-on" : "icon-tt-toggle-off";
        self._toggleButton = self._addChild(Button, {
          name: "locale-switch",
          iconClass: iconClass,
          backgroundColor: "p500",
          accentColor: "pa400",
          disableBackgroundTweening: !0
        });
        self._localeNameLabel = self._addLabel(locale.name);
        self._addEventListenerFor(c, "click", clickHandler(self));
      };
      LocaleRenderer.prototype._handleLocaleChanged = function() {
        var b, iconClass, locale, localeManager, self;
        LocaleRenderer.__super__._handleLocaleChanged.call(this);
        self = this;
        localeManager = self._localeChooser.localeManager;
        locale = self._locale;
        b = self._toggleButton;
        iconClass = locale.name === localeManager.locale.name ? "icon-tt-toggle-on" : "icon-tt-toggle-off";
        b.iconClass = iconClass;
      };
      return LocaleRenderer;
    }(Component);
    ThemeChooser = function(_super) {
      function ThemeChooser(conf) {
        var self;
        conf.iconClass = "icon-tt-brush";
        conf.title = "themeChooser";
        conf.name = "theme-chooser";
        ThemeChooser.__super__.constructor.call(this, conf);
        self = this;
        self._ganttChart = conf.ganttChart;
      }
      var appendChild, elmt, getter, hexToRgbaStr, setter, text, _ref;
      __extends(ThemeChooser, _super);
      _ref = gs(ThemeChooser), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text, 
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      setter("theme", function(themeName) {
        this._ganttChart.theme = themeName;
      });
      getter("themeManager", function() {
        return this._ganttChart.themeManager;
      });
      ThemeChooser.prototype._createPanelContainerChildren = function() {
        var name, self, theme, themes;
        self = this;
        themes = self._ganttChart.themeManager.themes;
        for (name in themes) {
          theme = themes[name];
          self._panelContainer._addChild(ThemeRenderer, {
            name: "theme-renderer",
            themeChooser: self,
            theme: theme
          });
        }
      };
      return ThemeChooser;
    }(Panel);
    ThemeRenderer = function(_super) {
      function ThemeRenderer(conf) {
        var self;
        ThemeRenderer.__super__.constructor.call(this, conf);
        self = this;
        self._themeChooser = conf.themeChooser;
        self._theme = conf.theme;
        self._toggleButton = null;
        self._themeNameLabel = null;
        self._primaryShades = null;
      }
      var appendChild, clickHandler, cssReset, elmt, getter, hexToRgbaStr, setter, text, _ref;
      __extends(ThemeRenderer, _super);
      _ref = gs(ThemeRenderer), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text, 
      hexToRgbaStr = CoreFunctions.hexToRgbaStr, cssReset = CoreFunctions.cssReset;
      clickHandler = function(self) {
        return function() {
          self._themeChooser.theme = self._theme.name;
        };
      };
      ThemeRenderer.prototype._createChildren = function() {
        var b, c, cStyle, iconClass, primaryShades, primaryShadesStyle, self, theme, themeManager;
        ThemeRenderer.__super__._createChildren.call(this);
        self = this;
        themeManager = self._themeChooser.themeManager;
        theme = self._theme;
        c = self._domContainer;
        cStyle = c.style;
        cStyle.cursor = "pointer";
        cStyle.display = "inline-block";
        cStyle.textAlign = "center";
        cStyle.minWidth = "200px";
        cStyle.marginTop = "10px";
        cStyle.marginBottom = "10px";
        iconClass = theme.name === themeManager.theme.name ? "icon-tt-toggle-on" : "icon-tt-toggle-off";
        self._toggleButton = b = self._addChild(Button, {
          name: "theme-switch",
          iconClass: iconClass,
          backgroundColor: "p500",
          accentColor: "pa400",
          disableBackgroundTweening: !0
        });
        self._themeNameLabel = self._addLabel(theme.name);
        self._addEventListenerFor(c, "click", clickHandler(self));
        self._primaryShades = primaryShades = self._addComponent("shades");
        primaryShadesStyle = primaryShades.domStyle;
        primaryShadesStyle.marginLeft = "28px";
        primaryShadesStyle.border = "solid 2px";
        primaryShadesStyle.lineHeight = "10px";
        primaryShadesStyle.height = "14px";
        primaryShadesStyle.width = 4 + 10 * (Theme.SHADE_SUFFIXES.length + Theme.ACCENT_SUFFIXES.length) + PX;
        self._addColors(theme, primaryShades, Theme.SHADE_SUFFIXES, "p");
        self._addColors(theme, primaryShades, Theme.ACCENT_SUFFIXES, "pa");
      };
      ThemeRenderer.prototype._addColors = function(theme, colors, prefixes, prefix) {
        return _.forEach(prefixes, function(suffix) {
          var colorDiv, colorDivStyle;
          colorDiv = elmt("div", "shade");
          colorDivStyle = cssReset(colorDiv);
          colorDivStyle.height = colorDivStyle.width = "10px";
          colorDivStyle.display = "inline-block";
          colorDivStyle.backgroundColor = theme[prefix + suffix];
          return appendChild(colors.domContainer, colorDiv);
        });
      };
      ThemeRenderer.prototype._handleThemeChanged = function() {
        var b, iconClass, self, theme, themeManager;
        ThemeRenderer.__super__._handleThemeChanged.call(this);
        self = this;
        themeManager = self._themeChooser.themeManager;
        theme = self._theme;
        b = self._toggleButton;
        iconClass = theme.name === themeManager.theme.name ? "icon-tt-toggle-on" : "icon-tt-toggle-off";
        b.iconClass = iconClass;
        self._primaryShades.domStyle.borderColor = theme.p900;
      };
      return ThemeRenderer;
    }(Component);
    AboutPanel = function(_super) {
      function AboutPanel(conf) {
        conf.iconClass = "icon-tt-info";
        conf.title = "about";
        conf.name = "about";
        AboutPanel.__super__.constructor.call(this, conf);
      }
      var appendChild, elmt, getter, hexToRgbaStr, setter, text, _ref;
      __extends(AboutPanel, _super);
      _ref = gs(AboutPanel), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text, 
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      AboutPanel.prototype._createPanelContainerChildren = function(parent) {
        var copyrightElmt, logoElmt, self;
        self = this;
        logoElmt = elmt("div", "logo");
        logoElmt.className = "about";
        appendChild(parent.domContainer, logoElmt);
        copyrightElmt = elmt("span", "copyright");
        copyrightElmt.style.marginRight = "30px";
        parent.domStyle.textAlign = "right";
        text(copyrightElmt, "© 2015 Mickaël Gauvin");
        appendChild(parent.domContainer, copyrightElmt);
      };
      return AboutPanel;
    }(Panel);
    ConfigurationPanel = function(_super) {
      function ConfigurationPanel(conf) {
        var self;
        conf.iconClass = "icon-tt-cog-alt";
        conf.title = "configurationPanelTitle";
        conf.name = "configuration";
        ConfigurationPanel.__super__.constructor.call(this, conf);
        self = this;
        self._ganttChart = conf.ganttChart;
        self._displayTodayToggle = null;
        self._displayStartToggle = null;
        self._displayFinishToggle = null;
      }
      var appendChild, elmt, getter, hexToRgbaStr, setter, text, _ref;
      __extends(ConfigurationPanel, _super);
      _ref = gs(ConfigurationPanel), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text, 
      hexToRgbaStr = CoreFunctions.hexToRgbaStr;
      ConfigurationPanel.prototype._createPanelContainerChildren = function() {
        var panelContainer, self;
        self = this;
        panelContainer = self._panelContainer;
        self._displayTodayToggle = self._createToggleOption(panelContainer, "displayToday", self._ganttChart.displayToday, function() {
          self._ganttChart.displayToday = !self._ganttChart.displayToday;
          self._updateIconClass(self._displayTodayToggle.button, self._ganttChart.displayToday);
        });
        self._displayStartToggle = self._createToggleOption(panelContainer, "displayStart", self._ganttChart.displayStart, function() {
          self._ganttChart.displayStart = !self._ganttChart.displayStart;
          self._updateIconClass(self._displayStartToggle.button, self._ganttChart.displayStart);
        });
        self._displayFinishToggle = self._createToggleOption(panelContainer, "displayFinish", self._ganttChart.displayFinish, function() {
          self._ganttChart.displayFinish = !self._ganttChart.displayFinish;
          self._updateIconClass(self._displayFinishToggle.button, self._ganttChart.displayFinish);
        });
      };
      ConfigurationPanel.prototype._updateIconClass = function(button, enable) {
        button.iconClass = enable ? "icon-tt-toggle-on" : "icon-tt-toggle-off";
      };
      ConfigurationPanel.prototype._createToggleOption = function(parent, labelText, enable, clickHandler) {
        var button, component, label, self;
        self = this;
        component = parent._addChild(Component, {
          name: "toggle-option"
        });
        component._addEventListener("click", clickHandler);
        button = component._addChild(Button, {
          name: "toggle-option-button",
          iconClass: enable ? "icon-tt-toggle-on" : "icon-tt-toggle-off",
          backgroundColor: "p500",
          accentColor: "pa400",
          disableBackgroundTweening: !0,
          clickHandler: function() {}
        });
        label = component._addLabel(labelText);
        label.domStyle.cursor = "pointer";
        return {
          component: component,
          button: button,
          label: label
        };
      };
      ConfigurationPanel.prototype._updateDisplayList = function() {
        var self;
        ConfigurationPanel.__super__._updateDisplayList.call(this);
        self = this;
      };
      return ConfigurationPanel;
    }(Panel);
    PredecessorLinksComponent = function(_super) {
      function PredecessorLinksComponent(conf) {
        var self;
        PredecessorLinksComponent.__super__.constructor.call(this, conf);
        self = this;
        self._predecessorLinks = null;
        self._predecessorLinksChangedFlag = !1;
        self._predecessorLinksCanvas = null;
        self._predecessorLinksDrawing = null;
      }
      var getter, setter, _ref;
      __extends(PredecessorLinksComponent, _super);
      _ref = gs(PredecessorLinksComponent), getter = _ref.getter, setter = _ref.setter;
      getter("predecessorLinks", function() {
        return this._predecessorLinks;
      });
      setter("predecessorLinks", function(predecessorLinks) {
        var self, _ref2;
        self = this;
        if (self._predecessorLinks !== predecessorLinks) {
          if (0 === (null != (_ref2 = self._predecessorLinks) ? _ref2.length : void 0) && 0 === (null != predecessorLinks ? predecessorLinks.length : void 0)) return;
          self._predecessorLinks = predecessorLinks;
          self._predecessorLinksChangedFlag = !0;
          self.invalidatePropsAndDisplayList();
        }
      });
      PredecessorLinksComponent.prototype._createChildren = function() {
        var self;
        PredecessorLinksComponent.__super__._createChildren.call(this);
        self = this;
        self._createPredecessorLinksCanvas();
      };
      PredecessorLinksComponent.prototype._createPredecessorLinksCanvas = function() {
        var self;
        self = this;
        self.domStyle.pointerEvents = "none";
        self._predecessorLinksCanvas = self._addCanvas("predecessor-links-canvas");
        self._predecessorLinksDrawing = new PredecessorLinksDrawing(self, self._predecessorLinksCanvas);
      };
      PredecessorLinksComponent.prototype.attach = function() {
        PredecessorLinksComponent.__super__.attach.call(this);
      };
      PredecessorLinksComponent.prototype.detach = function() {
        PredecessorLinksComponent.__super__.detach.call(this);
      };
      PredecessorLinksComponent.prototype._commitProperties = function() {
        PredecessorLinksComponent.__super__._commitProperties.call(this);
      };
      PredecessorLinksComponent.prototype._updateDisplayList = function() {
        var self;
        PredecessorLinksComponent.__super__._updateDisplayList.call(this);
        self = this;
        self._predecessorLinksChangedFlag && self._predecessorLinksDrawing.update();
      };
      PredecessorLinksComponent.prototype._resetPropFlags = function() {
        var self;
        PredecessorLinksComponent.__super__._resetPropFlags.call(this);
        self = this;
        self._predecessorLinksChangedFlag = !1;
      };
      PredecessorLinksComponent.prototype._configureModelBindings = function(enable) {
        PredecessorLinksComponent.__super__._configureModelBindings.call(this, enable);
      };
      PredecessorLinksComponent.prototype._configureUiBindings = function(enable) {
        PredecessorLinksComponent.__super__._configureUiBindings.call(this, enable);
      };
      return PredecessorLinksComponent;
    }(CanvasBasedComponent);
    GanttChartVMenuBar = function(_super) {
      function GanttChartVMenuBar(conf) {
        var self;
        GanttChartVMenuBar.__super__.constructor.call(this, conf);
        self = this;
        self._ganttChart = conf.ganttChart;
        self._configButton = null;
        self._themeButton = null;
        self._languageButton = null;
        self._aboutButton = null;
      }
      var appendChild, elmt, getter, setter, text, _ref;
      __extends(GanttChartVMenuBar, _super);
      _ref = gs(GanttChartVMenuBar), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text;
      GanttChartVMenuBar.prototype._createChildren = function() {
        var bts, c, ganttChart, s, self;
        GanttChartVMenuBar.__super__._createChildren.call(this);
        self = this;
        c = self._domContainer;
        s = c.style;
        s.width = "30px";
        s.boxShadow = "1px 1px 3px #404040";
        s.zIndex = 1e3;
        ganttChart = self._ganttChart;
        self._buttons = bts = [ self._configButton = self._addButton("menu", "icon-tt-cog-alt", "configuration", function() {
          return ganttChart.openConfigurationPanel();
        }), self._themeButton = self._addButton("theme", "icon-tt-brush", "theme", function() {
          return ganttChart.openThemeChooser();
        }), self._languageButton = self._addButton("language", "icon-tt-flag", "language", function() {
          return ganttChart.openLocaleChooser();
        }), self._aboutButton = self._addButton("about", "icon-tt-info", "about", function() {
          return ganttChart.openAboutPanel();
        }) ];
        s.height = 28 * bts.length + 2 + PX;
      };
      return GanttChartVMenuBar;
    }(MenuBar);
    GanttChartHMenuBar = function(_super) {
      function GanttChartHMenuBar(conf) {
        var self;
        GanttChartHMenuBar.__super__.constructor.call(this, conf);
        self = this;
        self._ganttChart = conf.ganttChart;
        self._menuButton = null;
        self._zoomInButton = null;
        self._zoomOutButton = null;
        self._tallerButton = null;
        self._smallerButton = null;
      }
      var appendChild, elmt, getter, setter, text, _ref;
      __extends(GanttChartHMenuBar, _super);
      _ref = gs(GanttChartHMenuBar), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild, text = CoreFunctions.text;
      GanttChartHMenuBar.prototype._createChildren = function() {
        var c, ganttChart, s, self;
        GanttChartHMenuBar.__super__._createChildren.call(this);
        self = this;
        c = self._domContainer;
        s = c.style;
        s.width = "100%";
        s.height = "30px";
        s.boxShadow = "1px 0px 3px #404040";
        s.zIndex = 1e4;
        self._backgroundColor;
        ganttChart = self._ganttChart;
        self._buttons = [ self._menuButton = self._addButton("menu", "icon-tt-menu", "menu", function() {
          return ganttChart.openVMenu();
        }), self._zoomInButton = self._addButton("zoom-in", "icon-tt-zoom-in", "zoomIn", function() {
          return ganttChart.zoomIn();
        }), self._zoomOutButton = self._addButton("zoom-out", "icon-tt-zoom-out", "zoomOut", function() {
          return ganttChart.zoomOut();
        }), self._tallerButton = self._addButton("taller", "icon-tt-resize-full", "verticalZoomIn", function() {
          return ganttChart.verticalZoomIn();
        }), self._smallerButton = self._addButton("smaller", "icon-tt-resize-small", "verticalZoomOut", function() {
          return ganttChart.verticalZoomOut();
        }) ];
      };
      return GanttChartHMenuBar;
    }(MenuBar);
    GanttChart = function(_super) {
      function GanttChart(container) {
        this._closeCurrentPanel = __bind(this._closeCurrentPanel, this);
        this._closePanel = __bind(this._closePanel, this);
        this._closeAboutPanel = __bind(this._closeAboutPanel, this);
        this._closeLocaleChooser = __bind(this._closeLocaleChooser, this);
        this._closeThemeChooser = __bind(this._closeThemeChooser, this);
        this._closeConfigurationPanel = __bind(this._closeConfigurationPanel, this);
        var conf, domContainer, self;
        Ticker.timingMode = tt.common.Ticker.RAF;
        Ticker.framerate = 60;
        domContainer = elmt("div", "gantt-chart");
        appendChild(container, domContainer);
        self = this;
        conf = {
          name: "gantt-chart",
          themeManager: new ThemeManager(),
          localeManager: new GanttChartLocaleManager(),
          domContainer: domContainer,
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "12px",
          fontFamily: "arial, sans-serif"
        };
        GanttChart.__super__.constructor.call(this, conf);
        self._ganttModelFactory = new GanttModelFactory();
        self._timeViewport = new TimeViewport();
        self._timelineLocaleManager = new TimelineLocaleManager();
        self._ganttModel = null;
        self._ganttChartHMenuBar = null;
        self._ganttChartVMenuBar = null;
        self._configurationPanel = null;
        self._themeChooser = null;
        self._localeChooser = null;
        self._aboutPanel = null;
        self._timeline = null;
        self._timeBender = null;
        self._timeChartViewport = null;
        self._predecessorLinksComponent = null;
        self._tasksList = null;
        self._timeViewportResizer = null;
        self._currentTemporalDataRendererFactoryClass = DEFAULT_TEMPORAL_DATA_RENDERER_FACTORY_CLASS;
        self._periodRolloverTweened = new Signal();
        self._vMenuTweening = null;
        self._currentPanel = null;
        self.initLifecyle();
        self.layout();
        CanvasManager.updateDrawingSurfaces();
        Ticker.addTickListener(function() {
          return self.tick();
        });
      }
      var DEFAULT_OPTIONS, DEFAULT_TEMPORAL_DATA_RENDERER_FACTORY_CLASS, TEMPORAL_DATA_RENDERER_FACTORY_CLASSES, appendChild, elmt, getter, setter, _ref;
      __extends(GanttChart, _super);
      _ref = gs(GanttChart), getter = _ref.getter, setter = _ref.setter;
      elmt = CoreFunctions.elmt, appendChild = CoreFunctions.appendChild;
      DEFAULT_TEMPORAL_DATA_RENDERER_FACTORY_CLASS = CompactTemporalDataRendererFactory;
      DEFAULT_OPTIONS = {
        topTimeline: {},
        bottomTimeline: {}
      };
      TEMPORAL_DATA_RENDERER_FACTORY_CLASSES = [ CompactTemporalDataRendererFactory, NormalTemporalDataRendererFactory, ExtendedTemporalDataRendererFactory ];
      setter("ganttModel", function(ganttModel) {
        var gm, res, self, tb, tcv;
        self = this;
        res = self._ganttModelFactory.createGanttModelFromJson(ganttModel);
        self._ganttModel = gm = res.ganttModel;
        self._tasksList.dataProvider = res.ganttModelDataProvider;
        tcv = self._timeChartViewport;
        tb = self._timeBender;
        tcv.start = tb.start = gm.start || null;
        tcv.finish = tb.finish = gm.finish || null;
        self.zoomModel();
      });
      setter("temporalDataRendererFactoryClass", function(temporalDataRendererFactoryClass) {
        var self;
        null == temporalDataRendererFactoryClass && (temporalDataRendererFactoryClass = DEFAULT_TEMPORAL_DATA_RENDERER_FACTORY_CLASS);
        self = this;
        self._currentTemporalDataRendererFactoryClass = temporalDataRendererFactoryClass;
        self._tasksList.rendererFactory = new temporalDataRendererFactoryClass(self._timeViewport);
      });
      getter("themeManager", function() {
        return this._themeManager;
      });
      setter("theme", function(themeName) {
        this._themeManager.theme = themeName;
      });
      getter("timelineLocaleManager", function() {
        return this._timelineLocaleManager;
      });
      setter("locale", function(locale) {
        this._localeManager.locale = locale;
      });
      setter("period", function(period) {
        this._timeViewport.period = period;
      });
      setter("maxPeriod", function(maxPeriod) {
        this._timeViewport.maxPeriod = maxPeriod;
      });
      GanttChart.prototype.zoomModel = function() {
        var delta, duration, finishTime, gm, self, startTime;
        self = this;
        gm = self._ganttModel;
        if (0 !== gm.temporalData.length) {
          startTime = gm.start.getTime();
          finishTime = gm.finish.getTime() + 864e5;
          duration = finishTime - startTime;
          delta = .04 * duration;
          if (startTime && finishTime && startTime !== finishTime) {
            self._timeViewport.maxPeriod = new Period(new Date(startTime - duration / 5), new Date(finishTime + duration / 5));
            self._timeViewport.period = new Period(new Date(startTime - delta), new Date(finishTime + delta));
          }
        }
      };
      GanttChart.prototype.zoomToMaxPeriod = function() {
        this._timeViewport.zoomToMaxPeriod();
      };
      GanttChart.prototype.zoomIn = function(perc) {
        this._timeViewport.zoomIn(perc);
      };
      GanttChart.prototype.zoomOut = function(perc) {
        this._timeViewport.zoomOut(perc);
      };
      GanttChart.prototype.endIsNow = function() {
        this._timeViewport.endIsNow();
      };
      GanttChart.prototype.endToStart = function() {
        this._timeViewport.endToStart();
      };
      getter("displayToday", function() {
        return this._timeBender.displayToday;
      });
      setter("displayToday", function(displayToday) {
        var self, tb, tv;
        self = this;
        tb = self._timeBender;
        tv = self._timeChartViewport;
        tb.displayToday = tv.displayToday = displayToday;
      });
      getter("displayStart", function() {
        return this._timeBender.displayStart;
      });
      setter("displayStart", function(displayStart) {
        var self, tb, tv;
        self = this;
        tb = self._timeBender;
        tv = self._timeChartViewport;
        tb.displayStart = tv.displayStart = displayStart;
      });
      getter("displayFinish", function() {
        return this._timeBender.displayFinish;
      });
      setter("displayFinish", function(displayFinish) {
        var self, tb, tv;
        self = this;
        tb = self._timeBender;
        tv = self._timeChartViewport;
        tb.displayFinish = tv.displayFinish = displayFinish;
      });
      GanttChart.prototype.openVMenu = function() {
        var self, tweening, tweeningChanged;
        self = this;
        tweening = self._vMenuTweening;
        tweeningChanged = function() {
          self._ganttChartVMenuBar.domStyle.top = tweening.top + PX;
        };
        if (self._ganttChartVMenuBarOpened) {
          self._closeCurrentPanel();
          Tween.get(tweening, {
            override: !0
          }).to({
            top: -self._ganttChartVMenuBar.height
          }, 250, Ease.quintIn).changed.add(tweeningChanged);
          self._ganttChartVMenuBarOpened = !1;
        } else {
          Tween.get(tweening, {
            override: !0
          }).to({
            top: 30
          }, 250, Ease.quintOut).changed.add(tweeningChanged);
          self._ganttChartVMenuBarOpened = !0;
        }
      };
      GanttChart.prototype.verticalZoomIn = function() {
        var i, next, self;
        self = this;
        i = _.indexOf(TEMPORAL_DATA_RENDERER_FACTORY_CLASSES, self._currentTemporalDataRendererFactoryClass);
        (next = TEMPORAL_DATA_RENDERER_FACTORY_CLASSES[i + 1]) && (self.temporalDataRendererFactoryClass = next);
      };
      GanttChart.prototype.verticalZoomOut = function() {
        var i, previousIndex, self;
        self = this;
        i = _.indexOf(TEMPORAL_DATA_RENDERER_FACTORY_CLASSES, self._currentTemporalDataRendererFactoryClass);
        (previousIndex = i - 1) >= 0 && (self.temporalDataRendererFactoryClass = TEMPORAL_DATA_RENDERER_FACTORY_CLASSES[previousIndex]);
      };
      GanttChart.prototype.openConfigurationPanel = function() {
        var self;
        self = this;
        self._configurationPanel || (self._configurationPanel = this._createPanel(ConfigurationPanel, self._closeConfigurationPanel));
        this._openPanel(self._configurationPanel);
      };
      GanttChart.prototype._closeConfigurationPanel = function() {
        var self;
        self = this;
        self._closePanel(self._configurationPanel);
      };
      GanttChart.prototype.openThemeChooser = function() {
        var self;
        self = this;
        self._themeChooser || (self._themeChooser = this._createPanel(ThemeChooser, self._closeThemeChooser));
        this._openPanel(self._themeChooser);
      };
      GanttChart.prototype._closeThemeChooser = function() {
        var self;
        self = this;
        self._closePanel(self._themeChooser);
      };
      GanttChart.prototype.openLocaleChooser = function() {
        var self;
        self = this;
        self._localeChooser || (self._localeChooser = this._createPanel(LocaleChooser, self._closeLocaleChooser));
        this._openPanel(self._localeChooser);
      };
      GanttChart.prototype._closeLocaleChooser = function() {
        var self;
        self = this;
        self._closePanel(self._localeChooser);
      };
      GanttChart.prototype.openAboutPanel = function() {
        var self;
        self = this;
        self._aboutPanel || (self._aboutPanel = this._createPanel(AboutPanel, self._closeAboutPanel));
        this._openPanel(self._aboutPanel);
      };
      GanttChart.prototype._closeAboutPanel = function() {
        var self;
        self = this;
        self._closePanel(self._aboutPanel);
      };
      GanttChart.prototype._createPanel = function(clazz, closeHandler) {
        var self;
        self = this;
        return self._addChild(clazz, {
          ganttChart: self,
          closeHandler: closeHandler
        });
      };
      GanttChart.prototype._openPanel = function(panel) {
        var curPan, self;
        self = this;
        return (curPan = self._currentPanel) && curPan !== panel ? self._closeCurrentPanel(function() {
          return self.__openPanel(panel);
        }) : self.__openPanel(panel);
      };
      GanttChart.prototype.__openPanel = function(panel) {
        var scale, self;
        self = this;
        scale = panel.tweening.scale;
        0 === scale && this._tweenPanel(panel, 0, 1, 0, 1);
        1 === scale && this._tweenPanel(panel, 1, 0, 1, 0);
        return self._currentPanel = panel;
      };
      GanttChart.prototype._tweenPanel = function(panel, scaleFrom, scaleTo, opacityFrom, opacityTo, finishCallback) {
        var s, tween, tweening;
        s = panel.domStyle;
        s.position = "absolute";
        s.top = "30px";
        s.bottom = "0px";
        s.maxHeight = "500px";
        s.left = "30px";
        s.right = "0px";
        s.maxWidth = "500px";
        s.zIndex = 1e5;
        s.transformOrigin = "0 0";
        s.transform = "scale(" + scaleFrom + ")";
        s.opacity = opacityFrom;
        opacityTo > 0 && (panel.domStyle.visibility = "visible");
        tweening = panel.tweening;
        tween = Tween.get(tweening, {
          override: !0
        }).to({
          scale: scaleTo,
          opacity: opacityTo
        }, 250, Ease.quintInOut);
        tween.call(function() {
          0 === tweening.opacity && (panel.domStyle.visibility = "hidden");
          finishCallback && finishCallback();
        });
        tween.changed.add(function() {
          s.transform = "scale(" + tweening.scale + ")";
          return s.opacity = tweening.opacity;
        });
      };
      GanttChart.prototype._closePanel = function(panel) {
        var self;
        self = this;
        panel.tweening.scale < 1 || self._tweenPanel(panel, 1, 0, 1, 0, function() {
          self._currentPanel = null;
        });
      };
      GanttChart.prototype._closeCurrentPanel = function(cbk) {
        var curPan, curPanTw, self;
        self = this;
        if (curPan = self._currentPanel) {
          curPanTw = curPan.tweening;
          self._tweenPanel(curPan, curPanTw.scale, 0, curPanTw.opacity, 0, cbk);
        } else cbk && cbk();
      };
      GanttChart.prototype._createChildren = function() {
        var s, self;
        GanttChart.__super__._createChildren.call(this);
        self = this;
        if (Detect.canvasIsSupported && Detect.canvasTextIsSupported) {
          s = self.domStyle;
          s.height = "100%";
          s.width = "100%";
          s.overflow = "hidden";
          self._createComponents();
        } else self._domContainer.textContent = "HTML 5 Canvas is not supported by your browser";
      };
      GanttChart.prototype.layout = function() {
        var s, self;
        GanttChart.__super__.layout.call(this);
        self = this;
        s = self._timeBender.domStyle;
        s.bottom = self._timeViewportResizer.height + PX;
        _.forEach([ self._timeChartViewport, self._predecessorLinksComponent, self._tasksList ], function(c) {
          s = c.domStyle;
          s.top = self._timeline.height + self._ganttChartHMenuBar.height + PX;
          return s.bottom = self._timeBender.height + self._timeViewportResizer.height + PX;
        });
      };
      GanttChart.prototype._createComponents = function() {
        var self;
        self = this;
        self.domStyle.position = "relative";
        self._createGanttChartHMenuBar();
        self._createGanttChartVMenuBar();
        self._createTimeline();
        self._createTimeChartViewport();
        self._createPredecessorLinksComponent();
        self._createTasksList();
        self._createTimeViewportResizer();
        self._createTimeBender();
      };
      GanttChart.prototype._createGanttChartHMenuBar = function() {
        var self;
        self = this;
        self._ganttChartHMenuBar = self._addChild(GanttChartHMenuBar, {
          name: "gantt-h-chart-menu",
          ganttChart: self,
          backgroundColor: "p900",
          accentColor: "pa400"
        });
      };
      GanttChart.prototype._createGanttChartVMenuBar = function() {
        var comp, s, self, topValue;
        self = this;
        self._ganttChartVMenuBar = comp = self._addChild(GanttChartVMenuBar, {
          name: "gantt-v-chart-menu",
          ganttChart: self,
          backgroundColor: "p900",
          accentColor: "pa400"
        });
        s = comp.domStyle;
        s.position = "absolute";
        s.left = "0px";
        topValue = -comp.height;
        s.top = topValue + PX;
        self._vMenuTweening = {
          top: topValue
        };
      };
      GanttChart.prototype._createTimeline = function() {
        var comp, s, self;
        self = this;
        self._timeline = comp = self._addChild(Timeline, {
          name: "timeline",
          timelineLocaleManager: self._timelineLocaleManager,
          timeViewport: self._timeViewport
        });
        s = comp.domStyle;
        s.position = "absolute";
        s.right = "0px";
        s.left = "0px";
        _.forEach(self._timeline.rows, function(r) {
          r.rolloverTweened.add(function(e) {
            return self._periodRolloverTweened.dispatch(e);
          });
        });
      };
      GanttChart.prototype._createTimeChartViewport = function() {
        var comp, s, self;
        self = this;
        self._timeChartViewport = comp = self._addChild(TimeChartViewport, {
          name: "time-chart-viewport",
          timeline: self._timeline,
          timelineLocaleManager: self._timelineLocaleManager,
          timeViewport: self._timeViewport,
          periodRolloverTweened: self._periodRolloverTweened
        });
        s = comp.domStyle;
        s.position = "absolute";
        s.right = "0px";
        s.left = "0px";
      };
      GanttChart.prototype._createPredecessorLinksComponent = function() {
        var comp, s, self;
        self = this;
        self._predecessorLinksComponent = comp = self._addChild(PredecessorLinksComponent, {
          name: "predecessor-links-component"
        });
        s = comp.domStyle;
        s.position = "absolute";
        s.right = "0px";
        s.left = "0px";
      };
      GanttChart.prototype._createTasksList = function() {
        var dragStartPeriod, s, self, timeline, tl, tv;
        self = this;
        tl = self._tasksList = self._addChild(ListView, {
          name: "tasks-list",
          rendererFactory: new DEFAULT_TEMPORAL_DATA_RENDERER_FACTORY_CLASS(self._timeViewport)
        });
        tv = self._timeViewport;
        timeline = self._timeline;
        s = tl.domStyle;
        s.position = "absolute";
        s.right = "0px";
        s.left = "0px";
        dragStartPeriod = null;
        tl.dragStartedSignal.add(function() {
          dragStartPeriod = tv.period;
          return tv.enablePeriodTweening = !1;
        });
        tl.dragMovedSignal.add(function() {
          var deltaMs, maxEndTime, maxPeriod, maxStartTime, newDuration, newEndTime, newPeriod, newStartTime;
          deltaMs = tl.dragDelta.x * timeline.millisByPixel;
          newStartTime = dragStartPeriod.start.getTime() - deltaMs;
          newEndTime = dragStartPeriod.end.getTime() - deltaMs;
          newDuration = newEndTime - newStartTime;
          maxPeriod = tv.maxPeriod;
          maxStartTime = maxPeriod.start.getTime();
          maxEndTime = maxPeriod.end.getTime();
          if (maxStartTime > newStartTime) {
            newStartTime = maxStartTime;
            newEndTime = maxStartTime + newDuration;
          } else if (newEndTime > maxEndTime) {
            newStartTime = maxEndTime - newDuration;
            newEndTime = maxEndTime;
          }
          newPeriod = new Period(new Date(newStartTime), new Date(newEndTime));
          tv.period = newPeriod;
        });
        tl.dragEndedSignal.add(function() {
          dragStartPeriod = null;
          return tv.enablePeriodTweening = !0;
        });
        tl.rolloverTweened.add(function(e) {
          return self._periodRolloverTweened.dispatch(e);
        });
      };
      GanttChart.prototype._createTimeViewportResizer = function() {
        var s, self;
        self = this;
        self._timeViewportResizer = self._addChild(TimeViewportResizer, {
          name: "time-viewport-resizer",
          timelineLocaleManager: self._timelineLocaleManager,
          timeViewport: self._timeViewport
        });
        s = self._timeViewportResizer.domStyle;
        s.position = "absolute";
        s.bottom = "0px";
        s.right = "0px";
        s.left = "0px";
      };
      GanttChart.prototype._createTimeBender = function() {
        var s, self;
        self = this;
        self._timeBender = self._addChild(TimeBender, {
          name: "time-bender",
          timeline: self._timeline,
          timeViewportResizer: self._timeViewportResizer,
          periodRolloverTweened: self._periodRolloverTweened
        });
        s = self._timeBender.domStyle;
        s.position = "absolute";
        s.right = "0px";
        s.left = "0px";
      };
      GanttChart.prototype._updateDisplayList = function() {
        var self;
        GanttChart.__super__._updateDisplayList.call(this);
        self = this;
        self._updatePredecessorLinks();
      };
      GanttChart.prototype._handleThemeChanged = function() {
        var s, self;
        GanttChart.__super__._handleThemeChanged.call(this);
        self = this;
        s = self.domStyle;
        s.border = "solid 2px " + self.p900;
      };
      GanttChart.prototype._handleLocaleChanged = function() {
        var self;
        GanttChart.__super__._handleLocaleChanged.call(this);
        self = this;
        self._timelineLocaleManager.locale = self._localeManager.locale.timelineLocaleName;
      };
      GanttChart.prototype._updatePredecessorLinks = function() {
        var i, i2, len, len2, link, predIsVisible, predLink, predLinks, predRenderer, predecessor, predecessorLinks, r, renderers, self, temporalData, temporalDataList;
        self = this;
        predecessorLinks = [];
        renderers = self._tasksList.renderers;
        temporalDataList = _.map(renderers, function(r) {
          return r.data;
        });
        len = renderers.length;
        i = 0;
        for (;len > i; ) {
          r = renderers[i];
          temporalData = r.data;
          if (0 === r.hiddenPercent && (predLinks = temporalData.predecessorLinks).length > 0) {
            len2 = predLinks.length;
            i2 = 0;
            for (;len2 > i2; ) {
              predLink = predLinks[i2];
              predecessor = predLink.predecessor;
              predIsVisible = _.indexOf(temporalDataList, predecessor) >= 0;
              if (predIsVisible) {
                predRenderer = _.find(renderers, function(r) {
                  return r.data === predecessor;
                });
                link = new Link();
                link.start = predRenderer.getFinishLinkAnchorPoint().clone();
                link.startLinkAnchorDistanceToSlidingTopPosition = predRenderer.getStartLinkAnchorDistanceToSlidingTopPosition();
                link.startLinkAnchorDistanceToSlidingBottomPosition = predRenderer.getStartLinkAnchorDistanceToSlidingBottomPosition();
                link.end = r.getStartLinkAnchorPoint();
                link.type = predLink.type;
                link.strokeStyle = r.getLinkStrokeStyle();
                predecessorLinks.push(link);
              }
              i2++;
            }
          }
          i++;
        }
        self._predecessorLinksComponent.predecessorLinks = predecessorLinks;
        self._predecessorLinksComponent.tick();
      };
      return GanttChart;
    }(Component);
    ns = {};
    !function() {
      ns = {
        CompactTemporalDataRendererFactory: CompactTemporalDataRendererFactory,
        NormalTemporalDataRendererFactory: NormalTemporalDataRendererFactory,
        ExtendedTemporalDataRendererFactory: ExtendedTemporalDataRendererFactory,
        GanttChartLocaleManager: GanttChartLocaleManager,
        GanttChart: GanttChart
      };
      return ns;
    }();
    return ns;
  });
}).call(this);
(function() {
  !function(root, factory) {
    if ("function" == typeof define && "object" == typeof define.amd && define.amd) define("tt.ganttreader", [ "tt.common", "tt.timeline", "tt.timechart", "tt.ganttchart" ], function(common, timeline, timechart, ganttchart) {
      root.tt = root.tt || {};
      return root.tt.ganttreader = factory(common, timeline, timechart, ganttchart);
    }); else {
      root.tt = root.tt || {};
      root.tt.ganttreader = factory(root.tt.common, root.tt.timeline, root.tt.timechart, root.tt.ganttchart);
    }
  }(this, function(common, timeline, timechart, ganttchart) {
    var CoreFunctions, Detect, GanttChart, GanttReader, PX, Period, Signal, gs, ns, undefinedstr, _, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
    undefinedstr = "undefined";
    CoreFunctions = common.CoreFunctions, Signal = common.Signal, Period = common.Period, 
    _ = common._, PX = common.PX, Detect = common.Detect;
    gs = CoreFunctions.gs;
    GanttChart = ganttchart.GanttChart;
    GanttReader = function(_super) {
      function GanttReader(container) {
        GanttReader.__super__.constructor.call(this, container);
      }
      var getter, setter, _ref;
      __extends(GanttReader, _super);
      _ref = gs(GanttReader), getter = _ref.getter, setter = _ref.setter;
      return GanttReader;
    }(GanttChart);
    ns = {};
    !function() {
      ns = {
        GanttReader: GanttReader
      };
      return ns;
    }();
    return ns;
  });
}).call(this);