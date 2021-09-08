/**
 * Bundle of json-form
 * Generated: 2018-11-01
 * Version: 1.12.3
 * Bundled Dependencies:
 *
 * rxjs -- 5.5.6
 *
 * External Dependencies:
 * jQuery -- ^3.3.1
 * doT.js -- ^1.1.2
 */

(function (exports,doT,$$1,Choices) {
    'use strict';
    
    doT = doT && doT.hasOwnProperty('default') ? doT['default'] : doT;
    $$1 = $$1 && $$1.hasOwnProperty('default') ? $$1['default'] : $$1;
    
    // CommonJS / Node have global context exposed as "global" variable.
    // We don't want to include the whole node.d.ts this this compilation unit so we'll just fake
    // the global "global" var for now.
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var __window = typeof window !== 'undefined' && window;
    var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
        self instanceof WorkerGlobalScope && self;
    var __global = typeof global !== 'undefined' && global;
    var _root = __window || __global || __self;
    // Workaround Closure Compiler restriction: The body of a goog.module cannot use throw.
    // This is needed when used with angular/tsickle which inserts a goog.module statement.
    // Wrap in IIFE
    /*@__PURE__*/ (function () {
        if (!_root) {
            throw new Error('RxJS could not find any global context (window, self, global)');
        }
    })();
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isFunction(x) {
        return typeof x === 'function';
    }
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isObject(x) {
        return x != null && typeof x === 'object';
    }
    
    // typeof any so that it we don't have to cast when comparing a result to the error object
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var errorObject = { e: {} };
    
    /** PURE_IMPORTS_START ._errorObject PURE_IMPORTS_END */
    var tryCatchTarget;
    function tryCatcher() {
        try {
            return tryCatchTarget.apply(this, arguments);
        }
        catch (e) {
            errorObject.e = e;
            return errorObject;
        }
    }
    function tryCatch(fn) {
        tryCatchTarget = fn;
        return tryCatcher;
    }
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var __extends = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when one or more errors have occurred during the
     * `unsubscribe` of a {@link Subscription}.
     */
    var UnsubscriptionError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends(UnsubscriptionError, _super);
        function UnsubscriptionError(errors) {
            _super.call(this);
            this.errors = errors;
            var err = Error.call(this, errors ?
                errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
            this.name = err.name = 'UnsubscriptionError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return UnsubscriptionError;
    }(Error));
    
    /** PURE_IMPORTS_START ._util_isArray,._util_isObject,._util_isFunction,._util_tryCatch,._util_errorObject,._util_UnsubscriptionError PURE_IMPORTS_END */
    /**
     * Represents a disposable resource, such as the execution of an Observable. A
     * Subscription has one important method, `unsubscribe`, that takes no argument
     * and just disposes the resource held by the subscription.
     *
     * Additionally, subscriptions may be grouped together through the `add()`
     * method, which will attach a child Subscription to the current Subscription.
     * When a Subscription is unsubscribed, all its children (and its grandchildren)
     * will be unsubscribed as well.
     *
     * @class Subscription
     */
    var Subscription = /*@__PURE__*/ (/*@__PURE__*/ function () {
        /**
         * @param {function(): void} [unsubscribe] A function describing how to
         * perform the disposal of resources when the `unsubscribe` method is called.
         */
        function Subscription(unsubscribe) {
            /**
             * A flag to indicate whether this Subscription has already been unsubscribed.
             * @type {boolean}
             */
            this.closed = false;
            this._parent = null;
            this._parents = null;
            this._subscriptions = null;
            if (unsubscribe) {
                this._unsubscribe = unsubscribe;
            }
        }
        /**
         * Disposes the resources held by the subscription. May, for instance, cancel
         * an ongoing Observable execution or cancel any other type of work that
         * started when the Subscription was created.
         * @return {void}
         */
        Subscription.prototype.unsubscribe = function () {
            var hasErrors = false;
            var errors;
            if (this.closed) {
                return;
            }
            var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
            this.closed = true;
            this._parent = null;
            this._parents = null;
            // null out _subscriptions first so any child subscriptions that attempt
            // to remove themselves from this subscription will noop
            this._subscriptions = null;
            var index = -1;
            var len = _parents ? _parents.length : 0;
            // if this._parent is null, then so is this._parents, and we
            // don't have to remove ourselves from any parent subscriptions.
            while (_parent) {
                _parent.remove(this);
                // if this._parents is null or index >= len,
                // then _parent is set to null, and the loop exits
                _parent = ++index < len && _parents[index] || null;
            }
            if (isFunction(_unsubscribe)) {
                var trial = tryCatch(_unsubscribe).call(this);
                if (trial === errorObject) {
                    hasErrors = true;
                    errors = errors || (errorObject.e instanceof UnsubscriptionError ?
                        flattenUnsubscriptionErrors(errorObject.e.errors) : [errorObject.e]);
                }
            }
            if (isArray(_subscriptions)) {
                index = -1;
                len = _subscriptions.length;
                while (++index < len) {
                    var sub = _subscriptions[index];
                    if (isObject(sub)) {
                        var trial = tryCatch(sub.unsubscribe).call(sub);
                        if (trial === errorObject) {
                            hasErrors = true;
                            errors = errors || [];
                            var err = errorObject.e;
                            if (err instanceof UnsubscriptionError) {
                                errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
            }
            if (hasErrors) {
                throw new UnsubscriptionError(errors);
            }
        };
        /**
         * Adds a tear down to be called during the unsubscribe() of this
         * Subscription.
         *
         * If the tear down being added is a subscription that is already
         * unsubscribed, is the same reference `add` is being called on, or is
         * `Subscription.EMPTY`, it will not be added.
         *
         * If this subscription is already in an `closed` state, the passed
         * tear down logic will be executed immediately.
         *
         * @param {TeardownLogic} teardown The additional logic to execute on
         * teardown.
         * @return {Subscription} Returns the Subscription used or created to be
         * added to the inner subscriptions list. This Subscription can be used with
         * `remove()` to remove the passed teardown logic from the inner subscriptions
         * list.
         */
        Subscription.prototype.add = function (teardown) {
            if (!teardown || (teardown === Subscription.EMPTY)) {
                return Subscription.EMPTY;
            }
            if (teardown === this) {
                return this;
            }
            var subscription = teardown;
            switch (typeof teardown) {
                case 'function':
                    subscription = new Subscription(teardown);
                case 'object':
                    if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                        return subscription;
                    }
                    else if (this.closed) {
                        subscription.unsubscribe();
                        return subscription;
                    }
                    else if (typeof subscription._addParent !== 'function' /* quack quack */) {
                        var tmp = subscription;
                        subscription = new Subscription();
                        subscription._subscriptions = [tmp];
                    }
                    break;
                default:
                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
            var subscriptions = this._subscriptions || (this._subscriptions = []);
            subscriptions.push(subscription);
            subscription._addParent(this);
            return subscription;
        };
        /**
         * Removes a Subscription from the internal list of subscriptions that will
         * unsubscribe during the unsubscribe process of this Subscription.
         * @param {Subscription} subscription The subscription to remove.
         * @return {void}
         */
        Subscription.prototype.remove = function (subscription) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                var subscriptionIndex = subscriptions.indexOf(subscription);
                if (subscriptionIndex !== -1) {
                    subscriptions.splice(subscriptionIndex, 1);
                }
            }
        };
        Subscription.prototype._addParent = function (parent) {
            var _a = this, _parent = _a._parent, _parents = _a._parents;
            if (!_parent || _parent === parent) {
                // If we don't have a parent, or the new parent is the same as the
                // current parent, then set this._parent to the new parent.
                this._parent = parent;
            }
            else if (!_parents) {
                // If there's already one parent, but not multiple, allocate an Array to
                // store the rest of the parent Subscriptions.
                this._parents = [parent];
            }
            else if (_parents.indexOf(parent) === -1) {
                // Only add the new parent to the _parents list if it's not already there.
                _parents.push(parent);
            }
        };
        Subscription.EMPTY = (function (empty) {
            empty.closed = true;
            return empty;
        }(new Subscription()));
        return Subscription;
    }());
    function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
    }
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var empty = {
        closed: true,
        next: function (value) { },
        error: function (err) { throw err; },
        complete: function () { }
    };
    
    /** PURE_IMPORTS_START .._util_root PURE_IMPORTS_END */
    var Symbol$1 = _root.Symbol;
    var rxSubscriber = (typeof Symbol$1 === 'function' && typeof Symbol$1.for === 'function') ?
        /*@__PURE__*/ Symbol$1.for('rxSubscriber') : '@@rxSubscriber';
    /**
     * @deprecated use rxSubscriber instead
     */
    
    /** PURE_IMPORTS_START ._util_isFunction,._Subscription,._Observer,._symbol_rxSubscriber PURE_IMPORTS_END */
    var __extends$1 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Implements the {@link Observer} interface and extends the
     * {@link Subscription} class. While the {@link Observer} is the public API for
     * consuming the values of an {@link Observable}, all Observers get converted to
     * a Subscriber, in order to provide Subscription-like capabilities such as
     * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
     * implementing operators, but it is rarely used as a public API.
     *
     * @class Subscriber<T>
     */
    var Subscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$1(Subscriber, _super);
        /**
         * @param {Observer|function(value: T): void} [destinationOrNext] A partially
         * defined Observer or a `next` callback function.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         */
        function Subscriber(destinationOrNext, error, complete) {
            _super.call(this);
            this.syncErrorValue = null;
            this.syncErrorThrown = false;
            this.syncErrorThrowable = false;
            this.isStopped = false;
            switch (arguments.length) {
                case 0:
                    this.destination = empty;
                    break;
                case 1:
                    if (!destinationOrNext) {
                        this.destination = empty;
                        break;
                    }
                    if (typeof destinationOrNext === 'object') {
                        if (destinationOrNext instanceof Subscriber) {
                            this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                            this.destination = destinationOrNext;
                            this.destination.add(this);
                        }
                        else {
                            this.syncErrorThrowable = true;
                            this.destination = new SafeSubscriber(this, destinationOrNext);
                        }
                        break;
                    }
                default:
                    this.syncErrorThrowable = true;
                    this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                    break;
            }
        }
        Subscriber.prototype[rxSubscriber] = function () { return this; };
        /**
         * A static factory for a Subscriber, given a (potentially partial) definition
         * of an Observer.
         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
         * @param {function(e: ?any): void} [error] The `error` callback of an
         * Observer.
         * @param {function(): void} [complete] The `complete` callback of an
         * Observer.
         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
         * Observer represented by the given arguments.
         */
        Subscriber.create = function (next, error, complete) {
            var subscriber = new Subscriber(next, error, complete);
            subscriber.syncErrorThrowable = false;
            return subscriber;
        };
        /**
         * The {@link Observer} callback to receive notifications of type `next` from
         * the Observable, with a value. The Observable may call this method 0 or more
         * times.
         * @param {T} [value] The `next` value.
         * @return {void}
         */
        Subscriber.prototype.next = function (value) {
            if (!this.isStopped) {
                this._next(value);
            }
        };
        /**
         * The {@link Observer} callback to receive notifications of type `error` from
         * the Observable, with an attached {@link Error}. Notifies the Observer that
         * the Observable has experienced an error condition.
         * @param {any} [err] The `error` exception.
         * @return {void}
         */
        Subscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                this.isStopped = true;
                this._error(err);
            }
        };
        /**
         * The {@link Observer} callback to receive a valueless notification of type
         * `complete` from the Observable. Notifies the Observer that the Observable
         * has finished sending push-based notifications.
         * @return {void}
         */
        Subscriber.prototype.complete = function () {
            if (!this.isStopped) {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
        };
        Subscriber.prototype._next = function (value) {
            this.destination.next(value);
        };
        Subscriber.prototype._error = function (err) {
            this.destination.error(err);
            this.unsubscribe();
        };
        Subscriber.prototype._complete = function () {
            this.destination.complete();
            this.unsubscribe();
        };
        Subscriber.prototype._unsubscribeAndRecycle = function () {
            var _a = this, _parent = _a._parent, _parents = _a._parents;
            this._parent = null;
            this._parents = null;
            this.unsubscribe();
            this.closed = false;
            this.isStopped = false;
            this._parent = _parent;
            this._parents = _parents;
            return this;
        };
        return Subscriber;
    }(Subscription));
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SafeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$1(SafeSubscriber, _super);
        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
            _super.call(this);
            this._parentSubscriber = _parentSubscriber;
            var next;
            var context = this;
            if (isFunction(observerOrNext)) {
                next = observerOrNext;
            }
            else if (observerOrNext) {
                next = observerOrNext.next;
                error = observerOrNext.error;
                complete = observerOrNext.complete;
                if (observerOrNext !== empty) {
                    context = Object.create(observerOrNext);
                    if (isFunction(context.unsubscribe)) {
                        this.add(context.unsubscribe.bind(context));
                    }
                    context.unsubscribe = this.unsubscribe.bind(this);
                }
            }
            this._context = context;
            this._next = next;
            this._error = error;
            this._complete = complete;
        }
        SafeSubscriber.prototype.next = function (value) {
            if (!this.isStopped && this._next) {
                var _parentSubscriber = this._parentSubscriber;
                if (!_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._next, value);
                }
                else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.error = function (err) {
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._error) {
                    if (!_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(this._error, err);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, this._error, err);
                        this.unsubscribe();
                    }
                }
                else if (!_parentSubscriber.syncErrorThrowable) {
                    this.unsubscribe();
                    throw err;
                }
                else {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.complete = function () {
            var _this = this;
            if (!this.isStopped) {
                var _parentSubscriber = this._parentSubscriber;
                if (this._complete) {
                    var wrappedComplete = function () { return _this._complete.call(_this._context); };
                    if (!_parentSubscriber.syncErrorThrowable) {
                        this.__tryOrUnsub(wrappedComplete);
                        this.unsubscribe();
                    }
                    else {
                        this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                        this.unsubscribe();
                    }
                }
                else {
                    this.unsubscribe();
                }
            }
        };
        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                this.unsubscribe();
                throw err;
            }
        };
        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
            try {
                fn.call(this._context, value);
            }
            catch (err) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            return false;
        };
        SafeSubscriber.prototype._unsubscribe = function () {
            var _parentSubscriber = this._parentSubscriber;
            this._context = null;
            this._parentSubscriber = null;
            _parentSubscriber.unsubscribe();
        };
        return SafeSubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START .._Subscriber,.._symbol_rxSubscriber,.._Observer PURE_IMPORTS_END */
    function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
            if (nextOrObserver instanceof Subscriber) {
                return nextOrObserver;
            }
            if (nextOrObserver[rxSubscriber]) {
                return nextOrObserver[rxSubscriber]();
            }
        }
        if (!nextOrObserver && !error && !complete) {
            return new Subscriber(empty);
        }
        return new Subscriber(nextOrObserver, error, complete);
    }
    
    /** PURE_IMPORTS_START .._util_root PURE_IMPORTS_END */
    function getSymbolObservable(context) {
        var $$observable;
        var Symbol = context.Symbol;
        if (typeof Symbol === 'function') {
            if (Symbol.observable) {
                $$observable = Symbol.observable;
            }
            else {
                $$observable = Symbol('observable');
                Symbol.observable = $$observable;
            }
        }
        else {
            $$observable = '@@observable';
        }
        return $$observable;
    }
    var observable = /*@__PURE__*/ getSymbolObservable(_root);
    /**
     * @deprecated use observable instead
     */
    
    /* tslint:disable:no-empty */
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function noop() { }
    
    /** PURE_IMPORTS_START ._noop PURE_IMPORTS_END */
    /* tslint:enable:max-line-length */
    function pipe() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i - 0] = arguments[_i];
        }
        return pipeFromArray(fns);
    }
    /* @internal */
    function pipeFromArray(fns) {
        if (!fns) {
            return noop;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function (prev, fn) { return fn(prev); }, input);
        };
    }
    
    /** PURE_IMPORTS_START ._util_root,._util_toSubscriber,._symbol_observable,._util_pipe PURE_IMPORTS_END */
    /**
     * A representation of any set of values over any amount of time. This is the most basic building block
     * of RxJS.
     *
     * @class Observable<T>
     */
    var Observable = /*@__PURE__*/ (/*@__PURE__*/ function () {
        /**
         * @constructor
         * @param {Function} subscribe the function that is called when the Observable is
         * initially subscribed to. This function is given a Subscriber, to which new values
         * can be `next`ed, or an `error` method can be called to raise an error, or
         * `complete` can be called to notify of a successful completion.
         */
        function Observable(subscribe) {
            this._isScalar = false;
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        /**
         * Creates a new Observable, with this Observable as the source, and the passed
         * operator defined as the new observable's operator.
         * @method lift
         * @param {Operator} operator the operator defining the operation to take on the observable
         * @return {Observable} a new observable with the Operator applied
         */
        Observable.prototype.lift = function (operator) {
            var observable$$1 = new Observable();
            observable$$1.source = this;
            observable$$1.operator = operator;
            return observable$$1;
        };
        /**
         * Invokes an execution of an Observable and registers Observer handlers for notifications it will emit.
         *
         * <span class="informal">Use it when you have all these Observables, but still nothing is happening.</span>
         *
         * `subscribe` is not a regular operator, but a method that calls Observable's internal `subscribe` function. It
         * might be for example a function that you passed to a {@link create} static factory, but most of the time it is
         * a library implementation, which defines what and when will be emitted by an Observable. This means that calling
         * `subscribe` is actually the moment when Observable starts its work, not when it is created, as it is often
         * thought.
         *
         * Apart from starting the execution of an Observable, this method allows you to listen for values
         * that an Observable emits, as well as for when it completes or errors. You can achieve this in two
         * following ways.
         *
         * The first way is creating an object that implements {@link Observer} interface. It should have methods
         * defined by that interface, but note that it should be just a regular JavaScript object, which you can create
         * yourself in any way you want (ES6 class, classic function constructor, object literal etc.). In particular do
         * not attempt to use any RxJS implementation details to create Observers - you don't need them. Remember also
         * that your object does not have to implement all methods. If you find yourself creating a method that doesn't
         * do anything, you can simply omit it. Note however, that if `error` method is not provided, all errors will
         * be left uncaught.
         *
         * The second way is to give up on Observer object altogether and simply provide callback functions in place of its methods.
         * This means you can provide three functions as arguments to `subscribe`, where first function is equivalent
         * of a `next` method, second of an `error` method and third of a `complete` method. Just as in case of Observer,
         * if you do not need to listen for something, you can omit a function, preferably by passing `undefined` or `null`,
         * since `subscribe` recognizes these functions by where they were placed in function call. When it comes
         * to `error` function, just as before, if not provided, errors emitted by an Observable will be thrown.
         *
         * Whatever style of calling `subscribe` you use, in both cases it returns a Subscription object.
         * This object allows you to call `unsubscribe` on it, which in turn will stop work that an Observable does and will clean
         * up all resources that an Observable used. Note that cancelling a subscription will not call `complete` callback
         * provided to `subscribe` function, which is reserved for a regular completion signal that comes from an Observable.
         *
         * Remember that callbacks provided to `subscribe` are not guaranteed to be called asynchronously.
         * It is an Observable itself that decides when these functions will be called. For example {@link of}
         * by default emits all its values synchronously. Always check documentation for how given Observable
         * will behave when subscribed and if its default behavior can be modified with a {@link Scheduler}.
         *
         * @example <caption>Subscribe with an Observer</caption>
         * const sumObserver = {
         *   sum: 0,
         *   next(value) {
         *     console.log('Adding: ' + value);
         *     this.sum = this.sum + value;
         *   },
         *   error() { // We actually could just remove this method,
         *   },        // since we do not really care about errors right now.
         *   complete() {
         *     console.log('Sum equals: ' + this.sum);
         *   }
         * };
         *
         * Rx.Observable.of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
         * .subscribe(sumObserver);
         *
         * // Logs:
         * // "Adding: 1"
         * // "Adding: 2"
         * // "Adding: 3"
         * // "Sum equals: 6"
         *
         *
         * @example <caption>Subscribe with functions</caption>
         * let sum = 0;
         *
         * Rx.Observable.of(1, 2, 3)
         * .subscribe(
         *   function(value) {
         *     console.log('Adding: ' + value);
         *     sum = sum + value;
         *   },
         *   undefined,
         *   function() {
         *     console.log('Sum equals: ' + sum);
         *   }
         * );
         *
         * // Logs:
         * // "Adding: 1"
         * // "Adding: 2"
         * // "Adding: 3"
         * // "Sum equals: 6"
         *
         *
         * @example <caption>Cancel a subscription</caption>
         * const subscription = Rx.Observable.interval(1000).subscribe(
         *   num => console.log(num),
         *   undefined,
         *   () => console.log('completed!') // Will not be called, even
         * );                                // when cancelling subscription
         *
         *
         * setTimeout(() => {
         *   subscription.unsubscribe();
         *   console.log('unsubscribed!');
         * }, 2500);
         *
         * // Logs:
         * // 0 after 1s
         * // 1 after 2s
         * // "unsubscribed!" after 2.5s
         *
         *
         * @param {Observer|Function} observerOrNext (optional) Either an observer with methods to be called,
         *  or the first of three possible handlers, which is the handler for each value emitted from the subscribed
         *  Observable.
         * @param {Function} error (optional) A handler for a terminal event resulting from an error. If no error handler is provided,
         *  the error will be thrown as unhandled.
         * @param {Function} complete (optional) A handler for a terminal event resulting from successful completion.
         * @return {ISubscription} a subscription reference to the registered handlers
         * @method subscribe
         */
        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
            var operator = this.operator;
            var sink = toSubscriber(observerOrNext, error, complete);
            if (operator) {
                operator.call(sink, this.source);
            }
            else {
                sink.add(this.source || !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
            }
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
            return sink;
        };
        Observable.prototype._trySubscribe = function (sink) {
            try {
                return this._subscribe(sink);
            }
            catch (err) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
                sink.error(err);
            }
        };
        /**
         * @method forEach
         * @param {Function} next a handler for each value emitted by the observable
         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
         * @return {Promise} a promise that either resolves on observable completion or
         *  rejects with the handled error
         */
        Observable.prototype.forEach = function (next, PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (_root.Rx && _root.Rx.config && _root.Rx.config.Promise) {
                    PromiseCtor = _root.Rx.config.Promise;
                }
                else if (_root.Promise) {
                    PromiseCtor = _root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                // Must be declared in a separate statement to avoid a RefernceError when
                // accessing subscription below in the closure due to Temporal Dead Zone.
                var subscription;
                subscription = _this.subscribe(function (value) {
                    if (subscription) {
                        // if there is a subscription, then we can surmise
                        // the next handling is asynchronous. Any errors thrown
                        // need to be rejected explicitly and unsubscribe must be
                        // called manually
                        try {
                            next(value);
                        }
                        catch (err) {
                            reject(err);
                            subscription.unsubscribe();
                        }
                    }
                    else {
                        // if there is NO subscription, then we're getting a nexted
                        // value synchronously during subscription. We can just call it.
                        // If it errors, Observable's `subscribe` will ensure the
                        // unsubscription logic is called, then synchronously rethrow the error.
                        // After that, Promise will trap the error and send it
                        // down the rejection path.
                        next(value);
                    }
                }, reject, resolve);
            });
        };
        Observable.prototype._subscribe = function (subscriber) {
            return this.source.subscribe(subscriber);
        };
        /**
         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
         * @method Symbol.observable
         * @return {Observable} this instance of the observable
         */
        Observable.prototype[observable] = function () {
            return this;
        };
        /* tslint:enable:max-line-length */
        /**
         * Used to stitch together functional operators into a chain.
         * @method pipe
         * @return {Observable} the Observable result of all of the operators having
         * been called in the order they were passed in.
         *
         * @example
         *
         * import { map, filter, scan } from 'rxjs/operators';
         *
         * Rx.Observable.interval(1000)
         *   .pipe(
         *     filter(x => x % 2 === 0),
         *     map(x => x + x),
         *     scan((acc, x) => acc + x)
         *   )
         *   .subscribe(x => console.log(x))
         */
        Observable.prototype.pipe = function () {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i - 0] = arguments[_i];
            }
            if (operations.length === 0) {
                return this;
            }
            return pipeFromArray(operations)(this);
        };
        /* tslint:enable:max-line-length */
        Observable.prototype.toPromise = function (PromiseCtor) {
            var _this = this;
            if (!PromiseCtor) {
                if (_root.Rx && _root.Rx.config && _root.Rx.config.Promise) {
                    PromiseCtor = _root.Rx.config.Promise;
                }
                else if (_root.Promise) {
                    PromiseCtor = _root.Promise;
                }
            }
            if (!PromiseCtor) {
                throw new Error('no Promise impl found');
            }
            return new PromiseCtor(function (resolve, reject) {
                var value;
                _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
            });
        };
        // HACK: Since TypeScript inherits static properties too, we have to
        // fight against TypeScript here so Subject can have a different static create signature
        /**
         * Creates a new cold Observable by calling the Observable constructor
         * @static true
         * @owner Observable
         * @method create
         * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
         * @return {Observable} a new cold observable
         */
        Observable.create = function (subscribe) {
            return new Observable(subscribe);
        };
        return Observable;
    }());
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isPromise(value) {
        return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
    }
    
    /** PURE_IMPORTS_START .._util_root,.._Observable PURE_IMPORTS_END */
    var __extends$2 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var PromiseObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$2(PromiseObservable, _super);
        function PromiseObservable(promise, scheduler) {
            _super.call(this);
            this.promise = promise;
            this.scheduler = scheduler;
        }
        /**
         * Converts a Promise to an Observable.
         *
         * <span class="informal">Returns an Observable that just emits the Promise's
         * resolved value, then completes.</span>
         *
         * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
         * Observable. If the Promise resolves with a value, the output Observable
         * emits that resolved value as a `next`, and then completes. If the Promise
         * is rejected, then the output Observable emits the corresponding Error.
         *
         * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
         * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
         * result.subscribe(x => console.log(x), e => console.error(e));
         *
         * @see {@link bindCallback}
         * @see {@link from}
         *
         * @param {PromiseLike<T>} promise The promise to be converted.
         * @param {Scheduler} [scheduler] An optional IScheduler to use for scheduling
         * the delivery of the resolved value (or the rejection).
         * @return {Observable<T>} An Observable which wraps the Promise.
         * @static true
         * @name fromPromise
         * @owner Observable
         */
        PromiseObservable.create = function (promise, scheduler) {
            return new PromiseObservable(promise, scheduler);
        };
        PromiseObservable.prototype._subscribe = function (subscriber) {
            var _this = this;
            var promise = this.promise;
            var scheduler = this.scheduler;
            if (scheduler == null) {
                if (this._isScalar) {
                    if (!subscriber.closed) {
                        subscriber.next(this.value);
                        subscriber.complete();
                    }
                }
                else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.closed) {
                            subscriber.next(value);
                            subscriber.complete();
                        }
                    }, function (err) {
                        if (!subscriber.closed) {
                            subscriber.error(err);
                        }
                    })
                        .then(null, function (err) {
                        // escape the promise trap, throw unhandled errors
                        _root.setTimeout(function () { throw err; });
                    });
                }
            }
            else {
                if (this._isScalar) {
                    if (!subscriber.closed) {
                        return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                    }
                }
                else {
                    promise.then(function (value) {
                        _this.value = value;
                        _this._isScalar = true;
                        if (!subscriber.closed) {
                            subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                        }
                    }, function (err) {
                        if (!subscriber.closed) {
                            subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                        }
                    })
                        .then(null, function (err) {
                        // escape the promise trap, throw unhandled errors
                        _root.setTimeout(function () { throw err; });
                    });
                }
            }
        };
        return PromiseObservable;
    }(Observable));
    function dispatchNext(arg) {
        var value = arg.value, subscriber = arg.subscriber;
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }
    function dispatchError(arg) {
        var err = arg.err, subscriber = arg.subscriber;
        if (!subscriber.closed) {
            subscriber.error(err);
        }
    }
    
    /** PURE_IMPORTS_START .._util_root PURE_IMPORTS_END */
    function symbolIteratorPonyfill(root) {
        var Symbol = root.Symbol;
        if (typeof Symbol === 'function') {
            if (!Symbol.iterator) {
                Symbol.iterator = Symbol('iterator polyfill');
            }
            return Symbol.iterator;
        }
        else {
            // [for Mozilla Gecko 27-35:](https://mzl.la/2ewE1zC)
            var Set_1 = root.Set;
            if (Set_1 && typeof new Set_1()['@@iterator'] === 'function') {
                return '@@iterator';
            }
            var Map_1 = root.Map;
            // required for compatability with es6-shim
            if (Map_1) {
                var keys = Object.getOwnPropertyNames(Map_1.prototype);
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    // according to spec, Map.prototype[@@iterator] and Map.orototype.entries must be equal.
                    if (key !== 'entries' && key !== 'size' && Map_1.prototype[key] === Map_1.prototype['entries']) {
                        return key;
                    }
                }
            }
            return '@@iterator';
        }
    }
    var iterator = /*@__PURE__*/ symbolIteratorPonyfill(_root);
    /**
     * @deprecated use iterator instead
     */
    
    /** PURE_IMPORTS_START .._util_root,.._Observable,.._symbol_iterator PURE_IMPORTS_END */
    var __extends$3 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var IteratorObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$3(IteratorObservable, _super);
        function IteratorObservable(iterator$$1, scheduler) {
            _super.call(this);
            this.scheduler = scheduler;
            if (iterator$$1 == null) {
                throw new Error('iterator cannot be null.');
            }
            this.iterator = getIterator(iterator$$1);
        }
        IteratorObservable.create = function (iterator$$1, scheduler) {
            return new IteratorObservable(iterator$$1, scheduler);
        };
        IteratorObservable.dispatch = function (state) {
            var index = state.index, hasError = state.hasError, iterator$$1 = state.iterator, subscriber = state.subscriber;
            if (hasError) {
                subscriber.error(state.error);
                return;
            }
            var result = iterator$$1.next();
            if (result.done) {
                subscriber.complete();
                return;
            }
            subscriber.next(result.value);
            state.index = index + 1;
            if (subscriber.closed) {
                if (typeof iterator$$1.return === 'function') {
                    iterator$$1.return();
                }
                return;
            }
            this.schedule(state);
        };
        IteratorObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var _a = this, iterator$$1 = _a.iterator, scheduler = _a.scheduler;
            if (scheduler) {
                return scheduler.schedule(IteratorObservable.dispatch, 0, {
                    index: index, iterator: iterator$$1, subscriber: subscriber
                });
            }
            else {
                do {
                    var result = iterator$$1.next();
                    if (result.done) {
                        subscriber.complete();
                        break;
                    }
                    else {
                        subscriber.next(result.value);
                    }
                    if (subscriber.closed) {
                        if (typeof iterator$$1.return === 'function') {
                            iterator$$1.return();
                        }
                        break;
                    }
                } while (true);
            }
        };
        return IteratorObservable;
    }(Observable));
    var StringIterator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function StringIterator(str, idx, len) {
            if (idx === void 0) {
                idx = 0;
            }
            if (len === void 0) {
                len = str.length;
            }
            this.str = str;
            this.idx = idx;
            this.len = len;
        }
        StringIterator.prototype[iterator] = function () { return (this); };
        StringIterator.prototype.next = function () {
            return this.idx < this.len ? {
                done: false,
                value: this.str.charAt(this.idx++)
            } : {
                done: true,
                value: undefined
            };
        };
        return StringIterator;
    }());
    var ArrayIterator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function ArrayIterator(arr, idx, len) {
            if (idx === void 0) {
                idx = 0;
            }
            if (len === void 0) {
                len = toLength(arr);
            }
            this.arr = arr;
            this.idx = idx;
            this.len = len;
        }
        ArrayIterator.prototype[iterator] = function () { return this; };
        ArrayIterator.prototype.next = function () {
            return this.idx < this.len ? {
                done: false,
                value: this.arr[this.idx++]
            } : {
                done: true,
                value: undefined
            };
        };
        return ArrayIterator;
    }());
    function getIterator(obj) {
        var i = obj[iterator];
        if (!i && typeof obj === 'string') {
            return new StringIterator(obj);
        }
        if (!i && obj.length !== undefined) {
            return new ArrayIterator(obj);
        }
        if (!i) {
            throw new TypeError('object is not iterable');
        }
        return obj[iterator]();
    }
    var maxSafeInteger = /*@__PURE__*/ Math.pow(2, 53) - 1;
    function toLength(o) {
        var len = +o.length;
        if (isNaN(len)) {
            return 0;
        }
        if (len === 0 || !numberIsFinite(len)) {
            return len;
        }
        len = sign(len) * Math.floor(Math.abs(len));
        if (len <= 0) {
            return 0;
        }
        if (len > maxSafeInteger) {
            return maxSafeInteger;
        }
        return len;
    }
    function numberIsFinite(value) {
        return typeof value === 'number' && _root.isFinite(value);
    }
    function sign(value) {
        var valueAsNumber = +value;
        if (valueAsNumber === 0) {
            return valueAsNumber;
        }
        if (isNaN(valueAsNumber)) {
            return valueAsNumber;
        }
        return valueAsNumber < 0 ? -1 : 1;
    }
    
    /** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
    var __extends$4 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ScalarObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$4(ScalarObservable, _super);
        function ScalarObservable(value, scheduler) {
            _super.call(this);
            this.value = value;
            this.scheduler = scheduler;
            this._isScalar = true;
            if (scheduler) {
                this._isScalar = false;
            }
        }
        ScalarObservable.create = function (value, scheduler) {
            return new ScalarObservable(value, scheduler);
        };
        ScalarObservable.dispatch = function (state) {
            var done = state.done, value = state.value, subscriber = state.subscriber;
            if (done) {
                subscriber.complete();
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                return;
            }
            state.done = true;
            this.schedule(state);
        };
        ScalarObservable.prototype._subscribe = function (subscriber) {
            var value = this.value;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(ScalarObservable.dispatch, 0, {
                    done: false, value: value, subscriber: subscriber
                });
            }
            else {
                subscriber.next(value);
                if (!subscriber.closed) {
                    subscriber.complete();
                }
            }
        };
        return ScalarObservable;
    }(Observable));
    
    /** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
    var __extends$5 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var EmptyObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$5(EmptyObservable, _super);
        function EmptyObservable(scheduler) {
            _super.call(this);
            this.scheduler = scheduler;
        }
        /**
         * Creates an Observable that emits no items to the Observer and immediately
         * emits a complete notification.
         *
         * <span class="informal">Just emits 'complete', and nothing else.
         * </span>
         *
         * <img src="./img/empty.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the complete notification. It can be used for composing with other
         * Observables, such as in a {@link mergeMap}.
         *
         * @example <caption>Emit the number 7, then complete.</caption>
         * var result = Rx.Observable.empty().startWith(7);
         * result.subscribe(x => console.log(x));
         *
         * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
         * var interval = Rx.Observable.interval(1000);
         * var result = interval.mergeMap(x =>
         *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
         * );
         * result.subscribe(x => console.log(x));
         *
         * // Results in the following to the console:
         * // x is equal to the count on the interval eg(0,1,2,3,...)
         * // x will occur every 1000ms
         * // if x % 2 is equal to 1 print abc
         * // if x % 2 is not equal to 1 nothing will be output
         *
         * @see {@link create}
         * @see {@link never}
         * @see {@link of}
         * @see {@link throw}
         *
         * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
         * the emission of the complete notification.
         * @return {Observable} An "empty" Observable: emits only the complete
         * notification.
         * @static true
         * @name empty
         * @owner Observable
         */
        EmptyObservable.create = function (scheduler) {
            return new EmptyObservable(scheduler);
        };
        EmptyObservable.dispatch = function (arg) {
            var subscriber = arg.subscriber;
            subscriber.complete();
        };
        EmptyObservable.prototype._subscribe = function (subscriber) {
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
            }
            else {
                subscriber.complete();
            }
        };
        return EmptyObservable;
    }(Observable));
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    function isScheduler(value) {
        return value && typeof value.schedule === 'function';
    }
    
    /** PURE_IMPORTS_START .._Observable,._ScalarObservable,._EmptyObservable,.._util_isScheduler PURE_IMPORTS_END */
    var __extends$6 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ArrayObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$6(ArrayObservable, _super);
        function ArrayObservable(array, scheduler) {
            _super.call(this);
            this.array = array;
            this.scheduler = scheduler;
            if (!scheduler && array.length === 1) {
                this._isScalar = true;
                this.value = array[0];
            }
        }
        ArrayObservable.create = function (array, scheduler) {
            return new ArrayObservable(array, scheduler);
        };
        /**
         * Creates an Observable that emits some values you specify as arguments,
         * immediately one after the other, and then emits a complete notification.
         *
         * <span class="informal">Emits the arguments you provide, then completes.
         * </span>
         *
         * <img src="./img/of.png" width="100%">
         *
         * This static operator is useful for creating a simple Observable that only
         * emits the arguments given, and the complete notification thereafter. It can
         * be used for composing with other Observables, such as with {@link concat}.
         * By default, it uses a `null` IScheduler, which means the `next`
         * notifications are sent synchronously, although with a different IScheduler
         * it is possible to determine when those notifications will be delivered.
         *
         * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
         * var numbers = Rx.Observable.of(10, 20, 30);
         * var letters = Rx.Observable.of('a', 'b', 'c');
         * var interval = Rx.Observable.interval(1000);
         * var result = numbers.concat(letters).concat(interval);
         * result.subscribe(x => console.log(x));
         *
         * @see {@link create}
         * @see {@link empty}
         * @see {@link never}
         * @see {@link throw}
         *
         * @param {...T} values Arguments that represent `next` values to be emitted.
         * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
         * the emissions of the `next` notifications.
         * @return {Observable<T>} An Observable that emits each given input value.
         * @static true
         * @name of
         * @owner Observable
         */
        ArrayObservable.of = function () {
            var array = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                array[_i - 0] = arguments[_i];
            }
            var scheduler = array[array.length - 1];
            if (isScheduler(scheduler)) {
                array.pop();
            }
            else {
                scheduler = null;
            }
            var len = array.length;
            if (len > 1) {
                return new ArrayObservable(array, scheduler);
            }
            else if (len === 1) {
                return new ScalarObservable(array[0], scheduler);
            }
            else {
                return new EmptyObservable(scheduler);
            }
        };
        ArrayObservable.dispatch = function (state) {
            var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
            if (index >= count) {
                subscriber.complete();
                return;
            }
            subscriber.next(array[index]);
            if (subscriber.closed) {
                return;
            }
            state.index = index + 1;
            this.schedule(state);
        };
        ArrayObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var array = this.array;
            var count = array.length;
            var scheduler = this.scheduler;
            if (scheduler) {
                return scheduler.schedule(ArrayObservable.dispatch, 0, {
                    array: array, index: index, count: count, subscriber: subscriber
                });
            }
            else {
                for (var i = 0; i < count && !subscriber.closed; i++) {
                    subscriber.next(array[i]);
                }
                subscriber.complete();
            }
        };
        return ArrayObservable;
    }(Observable));
    
    /** PURE_IMPORTS_START .._Observable,._ScalarObservable,._EmptyObservable PURE_IMPORTS_END */
    var __extends$7 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var ArrayLikeObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$7(ArrayLikeObservable, _super);
        function ArrayLikeObservable(arrayLike, scheduler) {
            _super.call(this);
            this.arrayLike = arrayLike;
            this.scheduler = scheduler;
            if (!scheduler && arrayLike.length === 1) {
                this._isScalar = true;
                this.value = arrayLike[0];
            }
        }
        ArrayLikeObservable.create = function (arrayLike, scheduler) {
            var length = arrayLike.length;
            if (length === 0) {
                return new EmptyObservable();
            }
            else if (length === 1) {
                return new ScalarObservable(arrayLike[0], scheduler);
            }
            else {
                return new ArrayLikeObservable(arrayLike, scheduler);
            }
        };
        ArrayLikeObservable.dispatch = function (state) {
            var arrayLike = state.arrayLike, index = state.index, length = state.length, subscriber = state.subscriber;
            if (subscriber.closed) {
                return;
            }
            if (index >= length) {
                subscriber.complete();
                return;
            }
            subscriber.next(arrayLike[index]);
            state.index = index + 1;
            this.schedule(state);
        };
        ArrayLikeObservable.prototype._subscribe = function (subscriber) {
            var index = 0;
            var _a = this, arrayLike = _a.arrayLike, scheduler = _a.scheduler;
            var length = arrayLike.length;
            if (scheduler) {
                return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
                    arrayLike: arrayLike, index: index, length: length, subscriber: subscriber
                });
            }
            else {
                for (var i = 0; i < length && !subscriber.closed; i++) {
                    subscriber.next(arrayLike[i]);
                }
                subscriber.complete();
            }
        };
        return ArrayLikeObservable;
    }(Observable));
    
    /** PURE_IMPORTS_START ._Observable PURE_IMPORTS_END */
    /**
     * Represents a push-based event or value that an {@link Observable} can emit.
     * This class is particularly useful for operators that manage notifications,
     * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
     * others. Besides wrapping the actual delivered value, it also annotates it
     * with metadata of, for instance, what type of push message it is (`next`,
     * `error`, or `complete`).
     *
     * @see {@link materialize}
     * @see {@link dematerialize}
     * @see {@link observeOn}
     *
     * @class Notification<T>
     */
    var Notification = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function Notification(kind, value, error) {
            this.kind = kind;
            this.value = value;
            this.error = error;
            this.hasValue = kind === 'N';
        }
        /**
         * Delivers to the given `observer` the value wrapped by this Notification.
         * @param {Observer} observer
         * @return
         */
        Notification.prototype.observe = function (observer) {
            switch (this.kind) {
                case 'N':
                    return observer.next && observer.next(this.value);
                case 'E':
                    return observer.error && observer.error(this.error);
                case 'C':
                    return observer.complete && observer.complete();
            }
        };
        /**
         * Given some {@link Observer} callbacks, deliver the value represented by the
         * current Notification to the correctly corresponding callback.
         * @param {function(value: T): void} next An Observer `next` callback.
         * @param {function(err: any): void} [error] An Observer `error` callback.
         * @param {function(): void} [complete] An Observer `complete` callback.
         * @return {any}
         */
        Notification.prototype.do = function (next, error, complete) {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return next && next(this.value);
                case 'E':
                    return error && error(this.error);
                case 'C':
                    return complete && complete();
            }
        };
        /**
         * Takes an Observer or its individual callback functions, and calls `observe`
         * or `do` methods accordingly.
         * @param {Observer|function(value: T): void} nextOrObserver An Observer or
         * the `next` callback.
         * @param {function(err: any): void} [error] An Observer `error` callback.
         * @param {function(): void} [complete] An Observer `complete` callback.
         * @return {any}
         */
        Notification.prototype.accept = function (nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
                return this.observe(nextOrObserver);
            }
            else {
                return this.do(nextOrObserver, error, complete);
            }
        };
        /**
         * Returns a simple Observable that just delivers the notification represented
         * by this Notification instance.
         * @return {any}
         */
        Notification.prototype.toObservable = function () {
            var kind = this.kind;
            switch (kind) {
                case 'N':
                    return Observable.of(this.value);
                case 'E':
                    return Observable.throw(this.error);
                case 'C':
                    return Observable.empty();
            }
            throw new Error('unexpected notification kind value');
        };
        /**
         * A shortcut to create a Notification instance of the type `next` from a
         * given value.
         * @param {T} value The `next` value.
         * @return {Notification<T>} The "next" Notification representing the
         * argument.
         */
        Notification.createNext = function (value) {
            if (typeof value !== 'undefined') {
                return new Notification('N', value);
            }
            return Notification.undefinedValueNotification;
        };
        /**
         * A shortcut to create a Notification instance of the type `error` from a
         * given error.
         * @param {any} [err] The `error` error.
         * @return {Notification<T>} The "error" Notification representing the
         * argument.
         */
        Notification.createError = function (err) {
            return new Notification('E', undefined, err);
        };
        /**
         * A shortcut to create a Notification instance of the type `complete`.
         * @return {Notification<any>} The valueless "complete" Notification.
         */
        Notification.createComplete = function () {
            return Notification.completeNotification;
        };
        Notification.completeNotification = new Notification('C');
        Notification.undefinedValueNotification = new Notification('N', undefined);
        return Notification;
    }());
    
    /** PURE_IMPORTS_START .._Subscriber,.._Notification PURE_IMPORTS_END */
    var __extends$8 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     *
     * Re-emits all notifications from source Observable with specified scheduler.
     *
     * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
     *
     * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
     * notifications emitted by the source Observable. It might be useful, if you do not have control over
     * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
     *
     * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
     * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
     * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
     * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
     * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
     * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
     * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
     * little bit more, to ensure that they are emitted at expected moments.
     *
     * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
     * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
     * will delay all notifications - including error notifications - while `delay` will pass through error
     * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
     * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
     * for notification emissions in general.
     *
     * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
     * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
     *                                               // with async scheduler by default...
     *
     * intervals
     * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
     * .subscribe(val => {                           // scheduler to ensure smooth animation.
     *   someDiv.style.height = val + 'px';
     * });
     *
     * @see {@link delay}
     *
     * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
     * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
     * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
     * but with provided scheduler.
     *
     * @method observeOn
     * @owner Observable
     */
    
    
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var ObserveOnSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$8(ObserveOnSubscriber, _super);
        function ObserveOnSubscriber(destination, scheduler, delay) {
            if (delay === void 0) {
                delay = 0;
            }
            _super.call(this, destination);
            this.scheduler = scheduler;
            this.delay = delay;
        }
        ObserveOnSubscriber.dispatch = function (arg) {
            var notification = arg.notification, destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
        };
        ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
        };
        ObserveOnSubscriber.prototype._next = function (value) {
            this.scheduleMessage(Notification.createNext(value));
        };
        ObserveOnSubscriber.prototype._error = function (err) {
            this.scheduleMessage(Notification.createError(err));
        };
        ObserveOnSubscriber.prototype._complete = function () {
            this.scheduleMessage(Notification.createComplete());
        };
        return ObserveOnSubscriber;
    }(Subscriber));
    var ObserveOnMessage = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function ObserveOnMessage(notification, destination) {
            this.notification = notification;
            this.destination = destination;
        }
        return ObserveOnMessage;
    }());
    
    /** PURE_IMPORTS_START .._util_isArray,.._util_isArrayLike,.._util_isPromise,._PromiseObservable,._IteratorObservable,._ArrayObservable,._ArrayLikeObservable,.._symbol_iterator,.._Observable,.._operators_observeOn,.._symbol_observable PURE_IMPORTS_END */
    var __extends$9 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var FromObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$9(FromObservable, _super);
        function FromObservable(ish, scheduler) {
            _super.call(this, null);
            this.ish = ish;
            this.scheduler = scheduler;
        }
        /**
         * Creates an Observable from an Array, an array-like object, a Promise, an
         * iterable object, or an Observable-like object.
         *
         * <span class="informal">Converts almost anything to an Observable.</span>
         *
         * <img src="./img/from.png" width="100%">
         *
         * Convert various other objects and data types into Observables. `from`
         * converts a Promise or an array-like or an
         * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
         * object into an Observable that emits the items in that promise or array or
         * iterable. A String, in this context, is treated as an array of characters.
         * Observable-like objects (contains a function named with the ES2015 Symbol
         * for Observable) can also be converted through this operator.
         *
         * @example <caption>Converts an array to an Observable</caption>
         * var array = [10, 20, 30];
         * var result = Rx.Observable.from(array);
         * result.subscribe(x => console.log(x));
         *
         * // Results in the following:
         * // 10 20 30
         *
         * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
         * function* generateDoubles(seed) {
         *   var i = seed;
         *   while (true) {
         *     yield i;
         *     i = 2 * i; // double it
         *   }
         * }
         *
         * var iterator = generateDoubles(3);
         * var result = Rx.Observable.from(iterator).take(10);
         * result.subscribe(x => console.log(x));
         *
         * // Results in the following:
         * // 3 6 12 24 48 96 192 384 768 1536
         *
         * @see {@link create}
         * @see {@link fromEvent}
         * @see {@link fromEventPattern}
         * @see {@link fromPromise}
         *
         * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
         * Observable-like, an Array, an iterable or an array-like object to be
         * converted.
         * @param {Scheduler} [scheduler] The scheduler on which to schedule the
         * emissions of values.
         * @return {Observable<T>} The Observable whose values are originally from the
         * input object that was converted.
         * @static true
         * @name from
         * @owner Observable
         */
        FromObservable.create = function (ish, scheduler) {
            if (ish != null) {
                if (typeof ish[observable] === 'function') {
                    if (ish instanceof Observable && !scheduler) {
                        return ish;
                    }
                    return new FromObservable(ish, scheduler);
                }
                else if (isArray(ish)) {
                    return new ArrayObservable(ish, scheduler);
                }
                else if (isPromise(ish)) {
                    return new PromiseObservable(ish, scheduler);
                }
                else if (typeof ish[iterator] === 'function' || typeof ish === 'string') {
                    return new IteratorObservable(ish, scheduler);
                }
                else if (isArrayLike(ish)) {
                    return new ArrayLikeObservable(ish, scheduler);
                }
            }
            throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
        };
        FromObservable.prototype._subscribe = function (subscriber) {
            var ish = this.ish;
            var scheduler = this.scheduler;
            if (scheduler == null) {
                return ish[observable]().subscribe(subscriber);
            }
            else {
                return ish[observable]().subscribe(new ObserveOnSubscriber(subscriber, scheduler, 0));
            }
        };
        return FromObservable;
    }(Observable));
    
    /** PURE_IMPORTS_START ._FromObservable PURE_IMPORTS_END */
    var from = FromObservable.create;
    
    /** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */
    Observable.from = from;
    
    /** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
    var __extends$10 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    function dispatch(state) {
        var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
        if (index === length) {
            subscriber.complete();
            return;
        }
        var key = keys[index];
        subscriber.next([key, obj[key]]);
        state.index = index + 1;
        this.schedule(state);
    }
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @extends {Ignored}
     * @hide true
     */
    var PairsObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$10(PairsObservable, _super);
        function PairsObservable(obj, scheduler) {
            _super.call(this);
            this.obj = obj;
            this.scheduler = scheduler;
            this.keys = Object.keys(obj);
        }
        /**
         * Convert an object into an observable sequence of [key, value] pairs
         * using an optional IScheduler to enumerate the object.
         *
         * @example <caption>Converts a javascript object to an Observable</caption>
         * var obj = {
         *   foo: 42,
         *   bar: 56,
         *   baz: 78
         * };
         *
         * var source = Rx.Observable.pairs(obj);
         *
         * var subscription = source.subscribe(
         *   function (x) {
         *     console.log('Next: %s', x);
         *   },
         *   function (err) {
         *     console.log('Error: %s', err);
         *   },
         *   function () {
         *     console.log('Completed');
         *   });
         *
         * @param {Object} obj The object to inspect and turn into an
         * Observable sequence.
         * @param {Scheduler} [scheduler] An optional IScheduler to run the
         * enumeration of the input sequence on.
         * @returns {(Observable<Array<string | T>>)} An observable sequence of
         * [key, value] pairs from the object.
         */
        PairsObservable.create = function (obj, scheduler) {
            return new PairsObservable(obj, scheduler);
        };
        PairsObservable.prototype._subscribe = function (subscriber) {
            var _a = this, keys = _a.keys, scheduler = _a.scheduler;
            var length = keys.length;
            if (scheduler) {
                return scheduler.schedule(dispatch, 0, {
                    obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
                });
            }
            else {
                for (var idx = 0; idx < length; idx++) {
                    var key = keys[idx];
                    subscriber.next([key, this.obj[key]]);
                }
                subscriber.complete();
            }
        };
        return PairsObservable;
    }(Observable));
    
    /** PURE_IMPORTS_START ._PairsObservable PURE_IMPORTS_END */
    var pairs = PairsObservable.create;
    
    /** PURE_IMPORTS_START .._.._Observable,.._.._observable_pairs PURE_IMPORTS_END */
    Observable.pairs = pairs;
    
    /** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
    var __extends$11 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /* tslint:enable:max-line-length */
    /**
     * Applies an accumulator function over the source Observable, and returns each
     * intermediate result, with an optional seed value.
     *
     * <span class="informal">It's like {@link reduce}, but emits the current
     * accumulation whenever the source emits a value.</span>
     *
     * <img src="./img/scan.png" width="100%">
     *
     * Combines together all values emitted on the source, using an accumulator
     * function that knows how to join a new source value into the accumulation from
     * the past. Is similar to {@link reduce}, but emits the intermediate
     * accumulations.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var ones = clicks.mapTo(1);
     * var seed = 0;
     * var count = ones.scan((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link reduce}
     *
     * @param {function(acc: R, value: T, index: number): R} accumulator
     * The accumulator function called on each source value.
     * @param {T|R} [seed] The initial accumulation value.
     * @return {Observable<R>} An observable of the accumulated values.
     * @method scan
     * @owner Observable
     */
    function scan(accumulator, seed) {
        var hasSeed = false;
        // providing a seed of `undefined` *should* be valid and trigger
        // hasSeed! so don't use `seed !== undefined` checks!
        // For this reason, we have to check it here at the original call site
        // otherwise inside Operator/Subscriber we won't know if `undefined`
        // means they didn't provide anything or if they literally provided `undefined`
        if (arguments.length >= 2) {
            hasSeed = true;
        }
        return function scanOperatorFunction(source) {
            return source.lift(new ScanOperator(accumulator, seed, hasSeed));
        };
    }
    var ScanOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function ScanOperator(accumulator, seed, hasSeed) {
            if (hasSeed === void 0) {
                hasSeed = false;
            }
            this.accumulator = accumulator;
            this.seed = seed;
            this.hasSeed = hasSeed;
        }
        ScanOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
        };
        return ScanOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var ScanSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$11(ScanSubscriber, _super);
        function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
            _super.call(this, destination);
            this.accumulator = accumulator;
            this._seed = _seed;
            this.hasSeed = hasSeed;
            this.index = 0;
        }
        Object.defineProperty(ScanSubscriber.prototype, "seed", {
            get: function () {
                return this._seed;
            },
            set: function (value) {
                this.hasSeed = true;
                this._seed = value;
            },
            enumerable: true,
            configurable: true
        });
        ScanSubscriber.prototype._next = function (value) {
            if (!this.hasSeed) {
                this.seed = value;
                this.destination.next(value);
            }
            else {
                return this._tryNext(value);
            }
        };
        ScanSubscriber.prototype._tryNext = function (value) {
            var index = this.index++;
            var result;
            try {
                result = this.accumulator(this.seed, value, index);
            }
            catch (err) {
                this.destination.error(err);
            }
            this.seed = result;
            this.destination.next(result);
        };
        return ScanSubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var __extends$12 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an element was queried at a certain index of an
     * Observable, but no such index or position exists in that sequence.
     *
     * @see {@link elementAt}
     * @see {@link take}
     * @see {@link takeLast}
     *
     * @class ArgumentOutOfRangeError
     */
    var ArgumentOutOfRangeError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$12(ArgumentOutOfRangeError, _super);
        function ArgumentOutOfRangeError() {
            var err = _super.call(this, 'argument out of range');
            this.name = err.name = 'ArgumentOutOfRangeError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ArgumentOutOfRangeError;
    }(Error));
    
    /** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError,.._observable_EmptyObservable PURE_IMPORTS_END */
    var __extends$13 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Emits only the last `count` values emitted by the source Observable.
     *
     * <span class="informal">Remembers the latest `count` values, then emits those
     * only when the source completes.</span>
     *
     * <img src="./img/takeLast.png" width="100%">
     *
     * `takeLast` returns an Observable that emits at most the last `count` values
     * emitted by the source Observable. If the source emits fewer than `count`
     * values then all of its values are emitted. This operator must wait until the
     * `complete` notification emission from the source in order to emit the `next`
     * values on the output Observable, because otherwise it is impossible to know
     * whether or not more values will be emitted on the source. For this reason,
     * all values are emitted synchronously, followed by the complete notification.
     *
     * @example <caption>Take the last 3 values of an Observable with many values</caption>
     * var many = Rx.Observable.range(1, 100);
     * var lastThree = many.takeLast(3);
     * lastThree.subscribe(x => console.log(x));
     *
     * @see {@link take}
     * @see {@link takeUntil}
     * @see {@link takeWhile}
     * @see {@link skip}
     *
     * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
     * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
     *
     * @param {number} count The maximum number of values to emit from the end of
     * the sequence of values emitted by the source Observable.
     * @return {Observable<T>} An Observable that emits at most the last count
     * values emitted by the source Observable.
     * @method takeLast
     * @owner Observable
     */
    function takeLast(count) {
        return function takeLastOperatorFunction(source) {
            if (count === 0) {
                return new EmptyObservable();
            }
            else {
                return source.lift(new TakeLastOperator(count));
            }
        };
    }
    var TakeLastOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function TakeLastOperator(total) {
            this.total = total;
            if (this.total < 0) {
                throw new ArgumentOutOfRangeError;
            }
        }
        TakeLastOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
        };
        return TakeLastOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var TakeLastSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$13(TakeLastSubscriber, _super);
        function TakeLastSubscriber(destination, total) {
            _super.call(this, destination);
            this.total = total;
            this.ring = new Array();
            this.count = 0;
        }
        TakeLastSubscriber.prototype._next = function (value) {
            var ring = this.ring;
            var total = this.total;
            var count = this.count++;
            if (ring.length < total) {
                ring.push(value);
            }
            else {
                var index = count % total;
                ring[index] = value;
            }
        };
        TakeLastSubscriber.prototype._complete = function () {
            var destination = this.destination;
            var count = this.count;
            if (count > 0) {
                var total = this.count >= this.total ? this.total : this.count;
                var ring = this.ring;
                for (var i = 0; i < total; i++) {
                    var idx = (count++) % total;
                    destination.next(ring[idx]);
                }
            }
            destination.complete();
        };
        return TakeLastSubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
    var __extends$14 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /* tslint:enable:max-line-length */
    /**
     * Emits a given value if the source Observable completes without emitting any
     * `next` value, otherwise mirrors the source Observable.
     *
     * <span class="informal">If the source Observable turns out to be empty, then
     * this operator will emit a default value.</span>
     *
     * <img src="./img/defaultIfEmpty.png" width="100%">
     *
     * `defaultIfEmpty` emits the values emitted by the source Observable or a
     * specified default value if the source Observable is empty (completes without
     * having emitted any `next` value).
     *
     * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
     * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
     * result.subscribe(x => console.log(x));
     *
     * @see {@link empty}
     * @see {@link last}
     *
     * @param {any} [defaultValue=null] The default value used if the source
     * Observable is empty.
     * @return {Observable} An Observable that emits either the specified
     * `defaultValue` if the source Observable emits no items, or the values emitted
     * by the source Observable.
     * @method defaultIfEmpty
     * @owner Observable
     */
    function defaultIfEmpty(defaultValue) {
        if (defaultValue === void 0) {
            defaultValue = null;
        }
        return function (source) { return source.lift(new DefaultIfEmptyOperator(defaultValue)); };
    }
    var DefaultIfEmptyOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function DefaultIfEmptyOperator(defaultValue) {
            this.defaultValue = defaultValue;
        }
        DefaultIfEmptyOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
        };
        return DefaultIfEmptyOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DefaultIfEmptySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$14(DefaultIfEmptySubscriber, _super);
        function DefaultIfEmptySubscriber(destination, defaultValue) {
            _super.call(this, destination);
            this.defaultValue = defaultValue;
            this.isEmpty = true;
        }
        DefaultIfEmptySubscriber.prototype._next = function (value) {
            this.isEmpty = false;
            this.destination.next(value);
        };
        DefaultIfEmptySubscriber.prototype._complete = function () {
            if (this.isEmpty) {
                this.destination.next(this.defaultValue);
            }
            this.destination.complete();
        };
        return DefaultIfEmptySubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START ._scan,._takeLast,._defaultIfEmpty,.._util_pipe PURE_IMPORTS_END */
    /* tslint:enable:max-line-length */
    /**
     * Applies an accumulator function over the source Observable, and returns the
     * accumulated result when the source completes, given an optional seed value.
     *
     * <span class="informal">Combines together all values emitted on the source,
     * using an accumulator function that knows how to join a new source value into
     * the accumulation from the past.</span>
     *
     * <img src="./img/reduce.png" width="100%">
     *
     * Like
     * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
     * `reduce` applies an `accumulator` function against an accumulation and each
     * value of the source Observable (from the past) to reduce it to a single
     * value, emitted on the output Observable. Note that `reduce` will only emit
     * one value, only when the source Observable completes. It is equivalent to
     * applying operator {@link scan} followed by operator {@link last}.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events that happened in 5 seconds</caption>
     * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
     *   .takeUntil(Rx.Observable.interval(5000));
     * var ones = clicksInFiveSeconds.mapTo(1);
     * var seed = 0;
     * var count = ones.reduce((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link count}
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link scan}
     *
     * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
     * called on each source value.
     * @param {R} [seed] The initial accumulation value.
     * @return {Observable<R>} An Observable that emits a single value that is the
     * result of accumulating the values emitted by the source Observable.
     * @method reduce
     * @owner Observable
     */
    function reduce(accumulator, seed) {
        // providing a seed of `undefined` *should* be valid and trigger
        // hasSeed! so don't use `seed !== undefined` checks!
        // For this reason, we have to check it here at the original call site
        // otherwise inside Operator/Subscriber we won't know if `undefined`
        // means they didn't provide anything or if they literally provided `undefined`
        if (arguments.length >= 2) {
            return function reduceOperatorFunctionWithSeed(source) {
                return pipe(scan(accumulator, seed), takeLast(1), defaultIfEmpty(seed))(source);
            };
        }
        return function reduceOperatorFunction(source) {
            return pipe(scan(function (acc, value, index) {
                return accumulator(acc, value, index + 1);
            }), takeLast(1))(source);
        };
    }
    
    /** PURE_IMPORTS_START .._operators_reduce PURE_IMPORTS_END */
    /* tslint:enable:max-line-length */
    /**
     * Applies an accumulator function over the source Observable, and returns the
     * accumulated result when the source completes, given an optional seed value.
     *
     * <span class="informal">Combines together all values emitted on the source,
     * using an accumulator function that knows how to join a new source value into
     * the accumulation from the past.</span>
     *
     * <img src="./img/reduce.png" width="100%">
     *
     * Like
     * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
     * `reduce` applies an `accumulator` function against an accumulation and each
     * value of the source Observable (from the past) to reduce it to a single
     * value, emitted on the output Observable. Note that `reduce` will only emit
     * one value, only when the source Observable completes. It is equivalent to
     * applying operator {@link scan} followed by operator {@link last}.
     *
     * Returns an Observable that applies a specified `accumulator` function to each
     * item emitted by the source Observable. If a `seed` value is specified, then
     * that value will be used as the initial value for the accumulator. If no seed
     * value is specified, the first item of the source is used as the seed.
     *
     * @example <caption>Count the number of click events that happened in 5 seconds</caption>
     * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
     *   .takeUntil(Rx.Observable.interval(5000));
     * var ones = clicksInFiveSeconds.mapTo(1);
     * var seed = 0;
     * var count = ones.reduce((acc, one) => acc + one, seed);
     * count.subscribe(x => console.log(x));
     *
     * @see {@link count}
     * @see {@link expand}
     * @see {@link mergeScan}
     * @see {@link scan}
     *
     * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
     * called on each source value.
     * @param {R} [seed] The initial accumulation value.
     * @return {Observable<R>} An Observable that emits a single value that is the
     * result of accumulating the values emitted by the source Observable.
     * @method reduce
     * @owner Observable
     */
    function reduce$1(accumulator, seed) {
        // providing a seed of `undefined` *should* be valid and trigger
        // hasSeed! so don't use `seed !== undefined` checks!
        // For this reason, we have to check it here at the original call site
        // otherwise inside Operator/Subscriber we won't know if `undefined`
        // means they didn't provide anything or if they literally provided `undefined`
        if (arguments.length >= 2) {
            return reduce(accumulator, seed)(this);
        }
        return reduce(accumulator)(this);
    }
    
    /** PURE_IMPORTS_START .._.._Observable,.._.._operator_reduce PURE_IMPORTS_END */
    Observable.prototype.reduce = reduce$1;
    
    /** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
    var __extends$15 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * Applies a given `project` function to each value emitted by the source
     * Observable, and emits the resulting values as an Observable.
     *
     * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
     * it passes each source value through a transformation function to get
     * corresponding output values.</span>
     *
     * <img src="./img/map.png" width="100%">
     *
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the output
     * Observable.
     *
     * @example <caption>Map every click to the clientX position of that click</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks.map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link mapTo}
     * @see {@link pluck}
     *
     * @param {function(value: T, index: number): R} project The function to apply
     * to each `value` emitted by the source Observable. The `index` parameter is
     * the number `i` for the i-th emission that has happened since the
     * subscription, starting from the number `0`.
     * @param {any} [thisArg] An optional argument to define what `this` is in the
     * `project` function.
     * @return {Observable<R>} An Observable that emits the values from the source
     * Observable transformed by the given `project` function.
     * @method map
     * @owner Observable
     */
    function map(project, thisArg) {
        return function mapOperation(source) {
            if (typeof project !== 'function') {
                throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
            }
            return source.lift(new MapOperator(project, thisArg));
        };
    }
    var MapOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function MapOperator(project, thisArg) {
            this.project = project;
            this.thisArg = thisArg;
        }
        MapOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
        };
        return MapOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var MapSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$15(MapSubscriber, _super);
        function MapSubscriber(destination, project, thisArg) {
            _super.call(this, destination);
            this.project = project;
            this.count = 0;
            this.thisArg = thisArg || this;
        }
        // NOTE: This looks unoptimized, but it's actually purposefully NOT
        // using try/catch optimizations.
        MapSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.project.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            this.destination.next(result);
        };
        return MapSubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START .._operators_map PURE_IMPORTS_END */
    /**
     * Applies a given `project` function to each value emitted by the source
     * Observable, and emits the resulting values as an Observable.
     *
     * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
     * it passes each source value through a transformation function to get
     * corresponding output values.</span>
     *
     * <img src="./img/map.png" width="100%">
     *
     * Similar to the well known `Array.prototype.map` function, this operator
     * applies a projection to each value and emits that projection in the output
     * Observable.
     *
     * @example <caption>Map every click to the clientX position of that click</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks.map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link mapTo}
     * @see {@link pluck}
     *
     * @param {function(value: T, index: number): R} project The function to apply
     * to each `value` emitted by the source Observable. The `index` parameter is
     * the number `i` for the i-th emission that has happened since the
     * subscription, starting from the number `0`.
     * @param {any} [thisArg] An optional argument to define what `this` is in the
     * `project` function.
     * @return {Observable<R>} An Observable that emits the values from the source
     * Observable transformed by the given `project` function.
     * @method map
     * @owner Observable
     */
    function map$1(project, thisArg) {
        return map(project, thisArg)(this);
    }
    
    /** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */
    Observable.prototype.map = map$1;
    
    /** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
    var __extends$16 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /* tslint:enable:max-line-length */
    /**
     * Perform a side effect for every emission on the source Observable, but return
     * an Observable that is identical to the source.
     *
     * <span class="informal">Intercepts each emission on the source and runs a
     * function, but returns an output which is identical to the source as long as errors don't occur.</span>
     *
     * <img src="./img/do.png" width="100%">
     *
     * Returns a mirrored Observable of the source Observable, but modified so that
     * the provided Observer is called to perform a side effect for every value,
     * error, and completion emitted by the source. Any errors that are thrown in
     * the aforementioned Observer or handlers are safely sent down the error path
     * of the output Observable.
     *
     * This operator is useful for debugging your Observables for the correct values
     * or performing other side effects.
     *
     * Note: this is different to a `subscribe` on the Observable. If the Observable
     * returned by `do` is not subscribed, the side effects specified by the
     * Observer will never happen. `do` therefore simply spies on existing
     * execution, it does not trigger an execution to happen like `subscribe` does.
     *
     * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks
     *   .do(ev => console.log(ev))
     *   .map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link map}
     * @see {@link subscribe}
     *
     * @param {Observer|function} [nextOrObserver] A normal Observer object or a
     * callback for `next`.
     * @param {function} [error] Callback for errors in the source.
     * @param {function} [complete] Callback for the completion of the source.
     * @return {Observable} An Observable identical to the source, but runs the
     * specified Observer or callback(s) for each item.
     * @name tap
     */
    function tap(nextOrObserver, error, complete) {
        return function tapOperatorFunction(source) {
            return source.lift(new DoOperator(nextOrObserver, error, complete));
        };
    }
    var DoOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function DoOperator(nextOrObserver, error, complete) {
            this.nextOrObserver = nextOrObserver;
            this.error = error;
            this.complete = complete;
        }
        DoOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
        };
        return DoOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var DoSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$16(DoSubscriber, _super);
        function DoSubscriber(destination, nextOrObserver, error, complete) {
            _super.call(this, destination);
            var safeSubscriber = new Subscriber(nextOrObserver, error, complete);
            safeSubscriber.syncErrorThrowable = true;
            this.add(safeSubscriber);
            this.safeSubscriber = safeSubscriber;
        }
        DoSubscriber.prototype._next = function (value) {
            var safeSubscriber = this.safeSubscriber;
            safeSubscriber.next(value);
            if (safeSubscriber.syncErrorThrown) {
                this.destination.error(safeSubscriber.syncErrorValue);
            }
            else {
                this.destination.next(value);
            }
        };
        DoSubscriber.prototype._error = function (err) {
            var safeSubscriber = this.safeSubscriber;
            safeSubscriber.error(err);
            if (safeSubscriber.syncErrorThrown) {
                this.destination.error(safeSubscriber.syncErrorValue);
            }
            else {
                this.destination.error(err);
            }
        };
        DoSubscriber.prototype._complete = function () {
            var safeSubscriber = this.safeSubscriber;
            safeSubscriber.complete();
            if (safeSubscriber.syncErrorThrown) {
                this.destination.error(safeSubscriber.syncErrorValue);
            }
            else {
                this.destination.complete();
            }
        };
        return DoSubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START .._operators_tap PURE_IMPORTS_END */
    /* tslint:enable:max-line-length */
    /**
     * Perform a side effect for every emission on the source Observable, but return
     * an Observable that is identical to the source.
     *
     * <span class="informal">Intercepts each emission on the source and runs a
     * function, but returns an output which is identical to the source as long as errors don't occur.</span>
     *
     * <img src="./img/do.png" width="100%">
     *
     * Returns a mirrored Observable of the source Observable, but modified so that
     * the provided Observer is called to perform a side effect for every value,
     * error, and completion emitted by the source. Any errors that are thrown in
     * the aforementioned Observer or handlers are safely sent down the error path
     * of the output Observable.
     *
     * This operator is useful for debugging your Observables for the correct values
     * or performing other side effects.
     *
     * Note: this is different to a `subscribe` on the Observable. If the Observable
     * returned by `do` is not subscribed, the side effects specified by the
     * Observer will never happen. `do` therefore simply spies on existing
     * execution, it does not trigger an execution to happen like `subscribe` does.
     *
     * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var positions = clicks
     *   .do(ev => console.log(ev))
     *   .map(ev => ev.clientX);
     * positions.subscribe(x => console.log(x));
     *
     * @see {@link map}
     * @see {@link subscribe}
     *
     * @param {Observer|function} [nextOrObserver] A normal Observer object or a
     * callback for `next`.
     * @param {function} [error] Callback for errors in the source.
     * @param {function} [complete] Callback for the completion of the source.
     * @return {Observable} An Observable identical to the source, but runs the
     * specified Observer or callback(s) for each item.
     * @method do
     * @name do
     * @owner Observable
     */
    function _do(nextOrObserver, error, complete) {
        return tap(nextOrObserver, error, complete)(this);
    }
    
    /** PURE_IMPORTS_START .._.._Observable,.._.._operator_do PURE_IMPORTS_END */
    Observable.prototype.do = _do;
    Observable.prototype._do = _do;
    
    /** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
    var __extends$17 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /* tslint:enable:max-line-length */
    /**
     * Filter items emitted by the source Observable by only emitting those that
     * satisfy a specified predicate.
     *
     * <span class="informal">Like
     * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
     * it only emits a value from the source if it passes a criterion function.</span>
     *
     * <img src="./img/filter.png" width="100%">
     *
     * Similar to the well-known `Array.prototype.filter` method, this operator
     * takes values from the source Observable, passes them through a `predicate`
     * function and only emits those values that yielded `true`.
     *
     * @example <caption>Emit only click events whose target was a DIV element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
     * clicksOnDivs.subscribe(x => console.log(x));
     *
     * @see {@link distinct}
     * @see {@link distinctUntilChanged}
     * @see {@link distinctUntilKeyChanged}
     * @see {@link ignoreElements}
     * @see {@link partition}
     * @see {@link skip}
     *
     * @param {function(value: T, index: number): boolean} predicate A function that
     * evaluates each value emitted by the source Observable. If it returns `true`,
     * the value is emitted, if `false` the value is not passed to the output
     * Observable. The `index` parameter is the number `i` for the i-th source
     * emission that has happened since the subscription, starting from the number
     * `0`.
     * @param {any} [thisArg] An optional argument to determine the value of `this`
     * in the `predicate` function.
     * @return {Observable} An Observable of values from the source that were
     * allowed by the `predicate` function.
     * @method filter
     * @owner Observable
     */
    function filter(predicate, thisArg) {
        return function filterOperatorFunction(source) {
            return source.lift(new FilterOperator(predicate, thisArg));
        };
    }
    var FilterOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
        function FilterOperator(predicate, thisArg) {
            this.predicate = predicate;
            this.thisArg = thisArg;
        }
        FilterOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
        };
        return FilterOperator;
    }());
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var FilterSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$17(FilterSubscriber, _super);
        function FilterSubscriber(destination, predicate, thisArg) {
            _super.call(this, destination);
            this.predicate = predicate;
            this.thisArg = thisArg;
            this.count = 0;
        }
        // the try catch block below is left specifically for
        // optimization and perf reasons. a tryCatcher is not necessary here.
        FilterSubscriber.prototype._next = function (value) {
            var result;
            try {
                result = this.predicate.call(this.thisArg, value, this.count++);
            }
            catch (err) {
                this.destination.error(err);
                return;
            }
            if (result) {
                this.destination.next(value);
            }
        };
        return FilterSubscriber;
    }(Subscriber));
    
    /** PURE_IMPORTS_START .._operators_filter PURE_IMPORTS_END */
    /* tslint:enable:max-line-length */
    /**
     * Filter items emitted by the source Observable by only emitting those that
     * satisfy a specified predicate.
     *
     * <span class="informal">Like
     * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
     * it only emits a value from the source if it passes a criterion function.</span>
     *
     * <img src="./img/filter.png" width="100%">
     *
     * Similar to the well-known `Array.prototype.filter` method, this operator
     * takes values from the source Observable, passes them through a `predicate`
     * function and only emits those values that yielded `true`.
     *
     * @example <caption>Emit only click events whose target was a DIV element</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
     * clicksOnDivs.subscribe(x => console.log(x));
     *
     * @see {@link distinct}
     * @see {@link distinctUntilChanged}
     * @see {@link distinctUntilKeyChanged}
     * @see {@link ignoreElements}
     * @see {@link partition}
     * @see {@link skip}
     *
     * @param {function(value: T, index: number): boolean} predicate A function that
     * evaluates each value emitted by the source Observable. If it returns `true`,
     * the value is emitted, if `false` the value is not passed to the output
     * Observable. The `index` parameter is the number `i` for the i-th source
     * emission that has happened since the subscription, starting from the number
     * `0`.
     * @param {any} [thisArg] An optional argument to determine the value of `this`
     * in the `predicate` function.
     * @return {Observable} An Observable of values from the source that were
     * allowed by the `predicate` function.
     * @method filter
     * @owner Observable
     */
    function filter$1(predicate, thisArg) {
        return filter(predicate, thisArg)(this);
    }
    
    /** PURE_IMPORTS_START .._.._Observable,.._.._operator_filter PURE_IMPORTS_END */
    Observable.prototype.filter = filter$1;
    
    /** PURE_IMPORTS_START  PURE_IMPORTS_END */
    var __extends$18 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * An error thrown when an action is invalid because the object has been
     * unsubscribed.
     *
     * @see {@link Subject}
     * @see {@link BehaviorSubject}
     *
     * @class ObjectUnsubscribedError
     */
    var ObjectUnsubscribedError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$18(ObjectUnsubscribedError, _super);
        function ObjectUnsubscribedError() {
            var err = _super.call(this, 'object unsubscribed');
            this.name = err.name = 'ObjectUnsubscribedError';
            this.stack = err.stack;
            this.message = err.message;
        }
        return ObjectUnsubscribedError;
    }(Error));
    
    /** PURE_IMPORTS_START ._Subscription PURE_IMPORTS_END */
    var __extends$19 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * We need this JSDoc comment for affecting ESDoc.
     * @ignore
     * @extends {Ignored}
     */
    var SubjectSubscription = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$19(SubjectSubscription, _super);
        function SubjectSubscription(subject, subscriber) {
            _super.call(this);
            this.subject = subject;
            this.subscriber = subscriber;
            this.closed = false;
        }
        SubjectSubscription.prototype.unsubscribe = function () {
            if (this.closed) {
                return;
            }
            this.closed = true;
            var subject = this.subject;
            var observers = subject.observers;
            this.subject = null;
            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
                return;
            }
            var subscriberIndex = observers.indexOf(this.subscriber);
            if (subscriberIndex !== -1) {
                observers.splice(subscriberIndex, 1);
            }
        };
        return SubjectSubscription;
    }(Subscription));
    
    /** PURE_IMPORTS_START ._Observable,._Subscriber,._Subscription,._util_ObjectUnsubscribedError,._SubjectSubscription,._symbol_rxSubscriber PURE_IMPORTS_END */
    var __extends$20 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * @class SubjectSubscriber<T>
     */
    var SubjectSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$20(SubjectSubscriber, _super);
        function SubjectSubscriber(destination) {
            _super.call(this, destination);
            this.destination = destination;
        }
        return SubjectSubscriber;
    }(Subscriber));
    /**
     * @class Subject<T>
     */
    var Subject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$20(Subject, _super);
        function Subject() {
            _super.call(this);
            this.observers = [];
            this.closed = false;
            this.isStopped = false;
            this.hasError = false;
            this.thrownError = null;
        }
        Subject.prototype[rxSubscriber] = function () {
            return new SubjectSubscriber(this);
        };
        Subject.prototype.lift = function (operator) {
            var subject = new AnonymousSubject(this, this);
            subject.operator = operator;
            return subject;
        };
        Subject.prototype.next = function (value) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            if (!this.isStopped) {
                var observers = this.observers;
                var len = observers.length;
                var copy = observers.slice();
                for (var i = 0; i < len; i++) {
                    copy[i].next(value);
                }
            }
        };
        Subject.prototype.error = function (err) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.hasError = true;
            this.thrownError = err;
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].error(err);
            }
            this.observers.length = 0;
        };
        Subject.prototype.complete = function () {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            this.isStopped = true;
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].complete();
            }
            this.observers.length = 0;
        };
        Subject.prototype.unsubscribe = function () {
            this.isStopped = true;
            this.closed = true;
            this.observers = null;
        };
        Subject.prototype._trySubscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return _super.prototype._trySubscribe.call(this, subscriber);
            }
        };
        Subject.prototype._subscribe = function (subscriber) {
            if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else if (this.hasError) {
                subscriber.error(this.thrownError);
                return Subscription.EMPTY;
            }
            else if (this.isStopped) {
                subscriber.complete();
                return Subscription.EMPTY;
            }
            else {
                this.observers.push(subscriber);
                return new SubjectSubscription(this, subscriber);
            }
        };
        Subject.prototype.asObservable = function () {
            var observable = new Observable();
            observable.source = this;
            return observable;
        };
        Subject.create = function (destination, source) {
            return new AnonymousSubject(destination, source);
        };
        return Subject;
    }(Observable));
    /**
     * @class AnonymousSubject<T>
     */
    var AnonymousSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$20(AnonymousSubject, _super);
        function AnonymousSubject(destination, source) {
            _super.call(this);
            this.destination = destination;
            this.source = source;
        }
        AnonymousSubject.prototype.next = function (value) {
            var destination = this.destination;
            if (destination && destination.next) {
                destination.next(value);
            }
        };
        AnonymousSubject.prototype.error = function (err) {
            var destination = this.destination;
            if (destination && destination.error) {
                this.destination.error(err);
            }
        };
        AnonymousSubject.prototype.complete = function () {
            var destination = this.destination;
            if (destination && destination.complete) {
                this.destination.complete();
            }
        };
        AnonymousSubject.prototype._subscribe = function (subscriber) {
            var source = this.source;
            if (source) {
                return this.source.subscribe(subscriber);
            }
            else {
                return Subscription.EMPTY;
            }
        };
        return AnonymousSubject;
    }(Subject));
    
    /** PURE_IMPORTS_START ._Subject,._util_ObjectUnsubscribedError PURE_IMPORTS_END */
    var __extends$21 = (undefined && undefined.__extends) || function (d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    /**
     * @class BehaviorSubject<T>
     */
    var BehaviorSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
        __extends$21(BehaviorSubject, _super);
        function BehaviorSubject(_value) {
            _super.call(this);
            this._value = _value;
        }
        Object.defineProperty(BehaviorSubject.prototype, "value", {
            get: function () {
                return this.getValue();
            },
            enumerable: true,
            configurable: true
        });
        BehaviorSubject.prototype._subscribe = function (subscriber) {
            var subscription = _super.prototype._subscribe.call(this, subscriber);
            if (subscription && !subscription.closed) {
                subscriber.next(this._value);
            }
            return subscription;
        };
        BehaviorSubject.prototype.getValue = function () {
            if (this.hasError) {
                throw this.thrownError;
            }
            else if (this.closed) {
                throw new ObjectUnsubscribedError();
            }
            else {
                return this._value;
            }
        };
        BehaviorSubject.prototype.next = function (value) {
            _super.prototype.next.call(this, this._value = value);
        };
        return BehaviorSubject;
    }(Subject));
    
    var ParserModes;
    (function (ParserModes) {
        ParserModes["DEFAULT"] = "DEFAULT";
        ParserModes["PRINT"] = "PRINT";
        ParserModes["READONLY"] = "READONLY";
    })(ParserModes || (ParserModes = {}));
    
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    
    
    
    
    
    
    
    
    
    
    
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    
    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
    
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    
    
    
    
    
    var defineProperty = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
    
      return obj;
    };
    
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    var get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
    
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
    
        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
    
        if (getter === undefined) {
          return undefined;
        }
    
        return getter.call(receiver);
      }
    };
    
    var inherits = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
    
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    
    
    
    
    
    
    
    
    
    
    
    var possibleConstructorReturn = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
    
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };
    
    
    
    
    
    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
    
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
    
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
    
        return _arr;
      }
    
      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    
    /**
     * A registry of all the Parsers available.
     *
     * @export
     * @class ParserRegistry
     */
    var ParserRegistry = function () {
      /**
       * Creates an instance of ParserRegistry.
       * @memberof ParserRegistry
       */
      function ParserRegistry() {
        classCallCheck(this, ParserRegistry);
    
        this.registry = {};
      }
      /**
       * Get an instance of the ParserRegistry
       *
       * @readonly
       * @static
       * @memberof ParserRegistry
       */
    
    
      createClass(ParserRegistry, [{
        key: "registerParser",
    
        /**
         * Register a new parser
         *
         * @param {string} parserName - Name of the parser
         * @param {*} parser - The parser class.
         * @memberof ParserRegistry
         */
        value: function registerParser(parserName, parser) {
          this.registry[parserName] = parser;
          console.log("Parser[" + parserName + "] registered!");
        }
        /**
         * Fetch a parser by its name.
         *
         * @param {string} parserName
         * @returns
         * @memberof ParserRegistry
         */
    
      }, {
        key: "getParserByName",
        value: function getParserByName(parserName) {
          return this.registry[parserName];
        }
      }], [{
        key: "instance",
        get: function get$$1() {
          return this._instance || (this._instance = new this());
        }
      }]);
      return ParserRegistry;
    }();
    
    /**
     * Factory of all the Parsers available to JsonForm
     *
     * @export
     * @class ParserFactory
     */
    var ParserFactory = function () {
        /**
         * Creates an instance of ParserFactory.
         * @memberof ParserFactory
         */
        function ParserFactory() {
            classCallCheck(this, ParserFactory);
    
            this.availableParsers = null;
            this.parserRegistry = null;
            this.parserRegistry = ParserRegistry.instance;
            this.availableParsers = {};
        }
        /**
         * Get an instance of the parser by its name.
         *
         * @param {string} parserName
         * @returns {IParser}
         * @memberof ParserFactory
         */
    
    
        createClass(ParserFactory, [{
            key: "getParser",
            value: function getParser(parserName) {
                var parser = null,
                    parserClass = null;
                if (parserName) {
                    if (this.availableParsers[parserName]) {
                        parser = this.availableParsers[parserName];
                    } else if (parserClass = this.parserRegistry.getParserByName(parserName)) {
                        parser = new parserClass();
                        this.availableParsers[parserName] = parser;
                    } else {
                        throw new Error("Unable to fetch the parser '" + parserName + "'!!");
                    }
                }
                return parser;
            }
        }]);
        return ParserFactory;
    }();
    
    var WidgetType;
    (function (WidgetType) {
        WidgetType["ACTION"] = "ACTION";
        WidgetType["COMPOSITE"] = "COMPOSITE";
        WidgetType["INPUT"] = "INPUT";
        WidgetType["LAYOUT"] = "LAYOUT";
    })(WidgetType || (WidgetType = {}));
    function Widget(widgetTypeInput) {
        // implementation is unchanged, and still sees a (concrete) constructor
        function createWidget(constructor) {
            return _a = function (_constructor) {
                inherits(_a, _constructor);
    
                function _a() {
                    classCallCheck(this, _a);
                    return possibleConstructorReturn(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));
                }
    
                createClass(_a, [{
                    key: "widgetType",
                    get: function get$$1() {
                        return widgetTypeInput;
                    }
                }]);
                return _a;
            }(constructor), _a.widgetType = widgetTypeInput, _a;
            var _a;
        }
        return createWidget;
    }
    
    var WidgetRegistry = function () {
        function WidgetRegistry() {
            classCallCheck(this, WidgetRegistry);
    
            this.registry = {};
        }
        /**
         * Get the singelton instance of the Widget Registry.
         *
         * @readonly
         * @static
         * @memberof WidgetRegistry
         */
    
    
        createClass(WidgetRegistry, [{
            key: "registerWidget",
    
            /**
             * Add a new widget to the Widget Registry.
             *
             * @param {string} widgetName
             * @param {*} widget
             * @memberof WidgetRegistry
             */
            value: function registerWidget(widgetName, widget) {
                this.registry[widgetName] = widget;
                console.log("Widget[" + widgetName + "] registered");
            }
            /**
             * Check whether the given Widget is a valid widget.
             *
             * @param {string} widgetName
             * @returns
             * @memberof WidgetRegistry
             */
    
        }, {
            key: "isValidWidget",
            value: function isValidWidget(widgetName) {
                return widgetName in this.registry;
            }
            /**
             * Return a widget by it's name.
             *
             * @param {string} widgetName
             * @returns
             * @memberof WidgetRegistry
             */
    
        }, {
            key: "getWidgetByName",
            value: function getWidgetByName(widgetName) {
                var widget = this.registry[widgetName];
                if (!widget) {
                    throw new DOMException("No registered widget by the name \"" + widgetName + "\"");
                }
                return widget;
            }
        }], [{
            key: "instance",
            get: function get$$1() {
                return this._instance || (this._instance = new this());
            }
        }]);
        return WidgetRegistry;
    }();
    
    //External Dependencies
    /**
     * Abstract base class for all widgets.
     *
     * @export
     * @abstract
     * @class AbstractWidget
     */
    var AbstractWidget = function () {
        /**
         * Creates an instance of AbstractInputWidget.
         * @param {*} widgetDefinition
         * @param {JQuery<HTMLElement>} $rootElement
         * @memberof AbstractInputWidget
         */
        function AbstractWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, AbstractWidget);
    
            this.widgetDefinition = {};
            _extends(this.widgetDefinition, widgetDefinition);
            this.$widgetElement = $rootElement.find("#" + widgetDefinition.name);
        }
        /**
         * Set the visibility of the Widget
         *
         * @memberof AbstractInputWidget
         * @param {boolean} show
         */
    
    
        createClass(AbstractWidget, [{
            key: "triggerHandler",
    
            /**
             * Method that brings in data and event to the renderer.
             * @param eventName
             * @param eventTargetField
             * @param data
             */
            value: function triggerHandler(eventName, data) {}
        }, {
            key: "visibility",
            set: function set$$1(show) {
                if (show) {
                    this.$widgetElement.show();
                } else {
                    this.$widgetElement.hide();
                }
            }
            /**
             * Lazily compile the templateString and generate the
             * HTML string using the Widget definition.
             *
             * @protected
             * @static
             * @param {*} widgetDefinition - Definition of the current widget.
             * @returns
             * @memberof AbstractInputWidget
             */
    
        }], [{
            key: "renderTemplate",
            value: function renderTemplate(widgetDefinition) {
                if (!this.compiledTemplate) {
                    this.compiledTemplate = doT.template(this.templateString);
                }
                return this.compiledTemplate(widgetDefinition);
            }
            /**
             * Initialize the widget once for all the instances
             * available.
             *
             * @static
             * @param {JQuery<HTMLElement>} $rootElement
             * @param {(fieldName: string, fieldValue: string) => any} changeCallback
             * @param {(eventName: string, eventTargetField: string, data: any) => any} customEventsCallback
             * @memberof AbstractInputWidget
             */
            //Technically supposed to be an abstract method. No support in TypeScript
    
        }, {
            key: "initializeWidget",
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {}
            /**
             * Get the HTMLString for the given WidgetDefinition.
             *
             * @static
             * @param {*} widgetDefinition
             * @returns {string}
             * @memberof AbstractInputWidget
             */
    
        }, {
            key: "getHTMLString",
            value: function getHTMLString(widgetDefinition) {
                return "";
            }
        }]);
        return AbstractWidget;
    }();
    //Static Members
    AbstractWidget.compiledTemplate = null;
    AbstractWidget.templateString = "";
    
    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    //Internal Dependencies
    /**
     * Abstract base class for all action Widgets
     *
     * @export
     * @abstract
     * @class AbstractLayoutWidget
     */
    var AbstractActionWidget = function (_AbstractWidget) {
        inherits(AbstractActionWidget, _AbstractWidget);
    
        function AbstractActionWidget() {
            classCallCheck(this, AbstractActionWidget);
            return possibleConstructorReturn(this, (AbstractActionWidget.__proto__ || Object.getPrototypeOf(AbstractActionWidget)).apply(this, arguments));
        }
    
        return AbstractActionWidget;
    }(AbstractWidget);
    AbstractActionWidget = __decorate([Widget(WidgetType.ACTION)], AbstractActionWidget);
    
    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    //Internal Dependencies
    /**
     * Composite abstract base class for all input widgets.
     *
     * @export
     * @abstract
     * @class AbstractCompositeWidget
     */
    var AbstractCompositeWidget = function (_AbstractWidget) {
        inherits(AbstractCompositeWidget, _AbstractWidget);
    
        function AbstractCompositeWidget() {
            classCallCheck(this, AbstractCompositeWidget);
            return possibleConstructorReturn(this, (AbstractCompositeWidget.__proto__ || Object.getPrototypeOf(AbstractCompositeWidget)).apply(this, arguments));
        }
    
        createClass(AbstractCompositeWidget, null, [{
            key: "getInputFields",
    
            /**
             * Return the possible inputs for this widget based on
             * the number of inputs
             */
            value: function getInputFields(widgetDefinition) {
                return [];
            }
        }]);
        return AbstractCompositeWidget;
    }(AbstractWidget);
    AbstractCompositeWidget = __decorate$1([Widget(WidgetType.COMPOSITE)], AbstractCompositeWidget);
    
    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    //Internal Dependencies
    /**
     * Abstract base class for all input widgets.
     *
     * @export
     * @abstract
     * @class AbstractInputWidget
     */
    var AbstractInputWidget = function (_AbstractWidget) {
        inherits(AbstractInputWidget, _AbstractWidget);
    
        function AbstractInputWidget() {
            classCallCheck(this, AbstractInputWidget);
            return possibleConstructorReturn(this, (AbstractInputWidget.__proto__ || Object.getPrototypeOf(AbstractInputWidget)).apply(this, arguments));
        }
    
        return AbstractInputWidget;
    }(AbstractWidget);
    AbstractInputWidget = __decorate$2([Widget(WidgetType.INPUT)], AbstractInputWidget);
    
    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    //Internal Dependencies
    /**
     * Abstract base class for all Layout Widgets
     *
     * @export
     * @abstract
     * @class AbstractLayoutWidget
     */
    var AbstractLayoutWidget = function (_AbstractWidget) {
        inherits(AbstractLayoutWidget, _AbstractWidget);
    
        function AbstractLayoutWidget() {
            classCallCheck(this, AbstractLayoutWidget);
            return possibleConstructorReturn(this, (AbstractLayoutWidget.__proto__ || Object.getPrototypeOf(AbstractLayoutWidget)).apply(this, arguments));
        }
    
        createClass(AbstractLayoutWidget, null, [{
            key: "getWidget",
    
            /**
             * Get the instance of Widget which will be used to
             * generate the HTML string.
             *
             * @protected
             * @static
             * @param {string} widgetName - Registered name of the Widget
             * @returns {*}
             * @memberof AbstractLayoutWidget
             */
            value: function getWidget(widgetName) {
                return WidgetRegistry.instance.getWidgetByName(widgetName);
            }
        }]);
        return AbstractLayoutWidget;
    }(AbstractWidget);
    AbstractLayoutWidget = __decorate$3([Widget(WidgetType.LAYOUT)], AbstractLayoutWidget);
    
    var Utils = function () {
        function Utils() {
            classCallCheck(this, Utils);
        }
    
        createClass(Utils, null, [{
            key: "getFormattedDate",
    
            /**
             * Utility function to format a date string in en-US format
             *
             * @static
             * @param {string} dateString
             * @returns
             * @memberof Utils
             */
            value: function getFormattedDate(dateString) {
                var returnValue = dateString;
                var dateSections = dateString.split("-");
                if (!isNaN(Date.parse(dateString))) {
                    returnValue = new Date(dateString).toLocaleDateString("en-US");
                } else if (dateSections.length >= 3) {
                    //Assuming ISO 8601 format
                    returnValue = dateSections[1] + "/" + dateSections[2] + "/" + dateSections[0];
                }
                return returnValue;
            }
        }]);
        return Utils;
    }();
    /**
     * Utility function to invoke requestAnimationFrame
     * from the window object and if it is not available
     * fallback to a simple timeout.
     *
     * @static
     * @memberof Utils
     */
    Utils.rAF = window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (func) {
        window.setTimeout.apply(window, [func]);
    };
    
    //External Dependencies
    //Internal Dependencies
    /**
     * The core class of the JsonForm. This class would be exposed to the end user.
     *
     * @export
     * @class JsonForm
     */
    
    var JsonForm = function () {
        /**
         * Creates an instance of JsonForm.
         * @param {FormElement} element - The DOM element where the JsonForm will be rendered to.
         * @param {FormJSON} formJSON - The input JSON which will be parsed to construct the Form.
         * @param {FormData} [formData={}] - A map of key value pairs with default data for the form.
         * @param {FormConfig} [config] - An optional configuration for the JsonForm which can change the way the rendering happens.
         * @memberof JsonForm
         */
        function JsonForm(element, formJSON) {
            var _this = this;
    
            var formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var config = arguments[3];
            classCallCheck(this, JsonForm);
    
            this.formDataStringName = "frmData";
            this.conditionalsRegex = /([#][\$](.+?)[\$][#])/gi;
            this.conditionalRegexGroupIdx = 2;
            this.formConfig = {
                parser: 'devero',
                parserConfig: {
                    mode: ParserModes.DEFAULT
                }
            };
            this.dataStoreSubject = null;
            this.customEventsSubject = null;
            this.widgetRegistry = null;
            /**
             * A generic function which will be invoked by widgets
             * to notify any changes in their values.
             *
             * - Updates the datastore with the new value for the corresponding field.
             * - Also, reruns conditional evaluation for the fields which may be impacted by
             * this change.
             *
             * @private
             * @param {string} fieldName - The name of the field (widget instance) which is broadcasting its change.
             * @param {any} fieldValue - The new value.
             * @memberof JsonForm
             */
            this.changeCallBack = function (fieldName, fieldValue) {
                var self = _this;
                //Update the Data Store with the new value.
                self.updateDataStore(defineProperty({}, fieldName, fieldValue));
                //Check whether this field change would impact the visibility of any other field.
                if (fieldName in self.fieldsImpactingConditionals) {
                    self.evaluateFieldVisibilities(self.fieldsImpactingConditionals[fieldName], self.dataStore, self.metadata);
                }
            };
            /**
             * Callback method which will be invoked by Widget Instances when there are
             * any new events happening in the Widget and it has to be notified to the
             * external applications.
             *
             * @private
             * @memberof JsonForm
             */
            this.customEventsCallback = function (eventName, eventTargetField, data) {
                var self = _this;
                self.customEventsSubject.next({
                    name: eventName,
                    targetField: eventTargetField,
                    data: data
                });
            };
            this.formElement = element;
            this.formJSON = formJSON;
            this.dataStore = formData;
            this.dataStoreSubject = new BehaviorSubject(this.dataStore);
            this.customEventsSubject = new Subject();
            this.formConfig = $$1.extend(true, this.formConfig, config || {});
            this.initialize();
        }
    
        createClass(JsonForm, [{
            key: 'getParser',
            value: function getParser() {
                return new ParserFactory().getParser(this.formConfig.parser);
            }
            /**
             * Initializes JsonForm by Parsing the Json Input to
             * generate the intermediate Json and the necessary
             * metadata. The metadata and the intermediate json is
             * used to render the form to the DOM. Also, housekeeping
             * functions are started to monitor the changes in data.
             *
             * @private
             * @memberof JsonForm
             */
    
        }, {
            key: 'initialize',
            value: function initialize() {
                var self = this;
                //Get appropriate JSON Parser from Parser Factory
                var jsonParser = this.getParser();
                self.widgetRegistry = WidgetRegistry.instance;
                self.conditionals = [];
                self.fieldsImpactingConditionals = {};
                self.compositeFieldsReverseIndex = {};
                //Parse JSON to get the intermediate JSON/Object (also perform JSON validations)
                var parserOut = jsonParser.parse(this.formJSON, this.dataStore, this.formConfig.parserConfig);
                //Extend default values map with values from Form initialization
                self.dataStore = _extends(parserOut.dataMap, this.dataStore);
                self.metadata = parserOut.metadata;
                //Render JsonForm to DOM
                self.renderHTMLtoDOM(parserOut.intermediateJSON, self.formElement).subscribe(function (htmlString) {
                    //Bind change handlers and emit events 
                    //Bind conditionals        
                    Utils.rAF(function () {
                        self.initializeWidgets(self.metadata, self.dataStore, self.formElement).subscribe(function () {
                            self.updateDataStore(self.dataStore);
                            self.evaluateFieldVisibilities(self.conditionals, self.dataStore, self.metadata);
                        });
                    });
                });
                self.parserOut = parserOut;
            }
            /**
             * Generate HTML String by parsing the intermediate JSON and
             * attach it to the DOM.
             *
             * @private
             * @param {FormJSON} intermediateFormJson
             * @param {FormElement} rootElement
             * @returns {Observable<string>} - The HTML String as an observable.
             * @memberof JsonForm
             */
    
        }, {
            key: 'renderHTMLtoDOM',
            value: function renderHTMLtoDOM(intermediateFormJson, rootElement) {
                var self = this;
                var formRootElement = $$1(rootElement);
                return Observable.from(intermediateFormJson.components || []).reduce(function (htmlString, widgetDefinition) {
                    return htmlString + self.widgetRegistry.getWidgetByName(widgetDefinition.type).getHTMLString(widgetDefinition);
                }, '<div class="jf">').do(function (htmlString) {
                    htmlString += '</div>';
                    //Insert into DOM
                    formRootElement.html(htmlString);
                });
            }
            /**
             * Update the Data Store with values and notify all subscribers of the change.
             *
             * @private
             * @param {FormData} formData
             * @memberof JsonForm
             */
    
        }, {
            key: 'updateDataStore',
            value: function updateDataStore(formData) {
                var self = this;
                self.dataStore = _extends(self.dataStore, formData);
                self.dataStoreSubject.next(_extends({}, self.dataStore));
            }
            /**
             * Process the condition string of a widget and
             * generate the conditional function which can be
             * executed to determine the visibility of the section
             *
             * @private
             * @param {string} conditionString
             * @returns {Function}
             * @memberof JsonForm
             */
    
        }, {
            key: 'processConditionalString',
            value: function processConditionalString(conditionString) {
                var self = this;
                var evalString = conditionString.replace(self.conditionalsRegex, self.formDataStringName + '[\'$2\']');
                return new Function(self.formDataStringName, 'return ' + evalString);
            }
            /**
             * Populates the Conditinals reverse index with the fields
             * which impact the visibility of the current field.
             *
             * @private
             * @param {string} fieldName - Name of the current field
             * @param {*} fieldMetadata  - Metadata of the field
             * @memberof JsonForm
             */
    
        }, {
            key: 'populateConditionalsReverseIndex',
            value: function populateConditionalsReverseIndex(fieldName, fieldMetadata) {
                //Add the conditionals to the reverse index
                var conditionString = fieldMetadata.conditional;
                var matchResult = void 0,
                    dependentField = void 0,
                    dependentFields = {};
                var self = this;
                do {
                    matchResult = self.conditionalsRegex.exec(conditionString);
                    if (matchResult && (dependentField = matchResult[self.conditionalRegexGroupIdx])) {
                        if (!(dependentField in dependentFields)) {
                            dependentFields[dependentField] = null; //A simple structure to mimic the functionality of a Set.
                            //Add or Update the fieldsImpactingConditionals
                            if (self.fieldsImpactingConditionals[dependentField]) {
                                self.fieldsImpactingConditionals[dependentField].push(fieldName);
                            } else {
                                self.fieldsImpactingConditionals[dependentField] = [fieldName];
                            }
                        }
                    }
                } while (matchResult);
            }
            /**
             * Evaluate the conditional function for a field to
             * determine its visibility.
             *
             * @private
             * @param {string} fieldName - Field whose visibility has to be evaluated.
             * @param {FormData} formData - All field values based on which the evaluation would be made.
             * @returns {boolean} - Whether the field widget should be visible or not.
             * @memberof JsonForm
             */
    
        }, {
            key: 'evaluateConditionForField',
            value: function evaluateConditionForField(fieldName, formData) {
                var visibility = void 0;
                var self = this;
                var fieldMetadata = self.metadata[fieldName];
                //TODO: Sandbox the data so that it is not modified inside the eval.
                try {
                    visibility = fieldMetadata.conditionalFunction(formData) ? true : false;
                } catch (e) {
                    console.log('Error in evaluating conditional for "' + fieldName + '"');
                    visibility = false;
                }
                return visibility;
            }
            /**
             * Determine the visibilities for a list of fields which
             * have condtionals defined, by evaluating their conditional
             * functions.
             *
             * @private
             * @param {string[]} conditionalFields
             * @param {FormData} formData
             * @param {Metadata} metadata
             * @memberof JsonForm
             */
    
        }, {
            key: 'evaluateFieldVisibilities',
            value: function evaluateFieldVisibilities(conditionalFields, formData, metadata) {
                var self = this;
                var processedFields = {};
                Observable.from(conditionalFields || []).do(function (fieldName) {
                    if (!(fieldName in processedFields)) {
                        processedFields[fieldName] = fieldName;
                        var fieldMetadata = metadata[fieldName];
                        if (fieldMetadata) {
                            Utils.rAF(function () {
                                fieldMetadata.widgetInstance.visibility = fieldMetadata.visibility = self.evaluateConditionForField(fieldName, formData);
                            });
                        }
                    }
                }).subscribe(function (fieldName) {
                    return fieldName;
                });
            }
            /**
             * Initialize each field in the form and
             * - set its default value
             * - listen for changes
             * - generate the conditional functions
             *
             * Also, update the metadata with the above information.
             *
             * @private
             * @param {*} formMetaData
             * @param {FormData} formData
             * @param {FormElement} formElement
             * @returns {Observable<any>}
             * @memberof JsonForm
             */
    
        }, {
            key: 'initializeWidgets',
            value: function initializeWidgets(formMetaData, formData, formElement) {
                var self = this;
                var formRootElement = $$1(formElement);
                var inputFieldSet = {};
                return Observable.pairs(formMetaData).map(function (kvPair) {
                    var key = void 0,
                        value = void 0;
    
                    var _kvPair = slicedToArray(kvPair, 2);
    
                    key = _kvPair[0];
                    value = _kvPair[1];
    
                    var WidgetObject = self.widgetRegistry.getWidgetByName(value.type);
                    value.widgetInstance = new WidgetObject(_extends({}, value.widgetDefinition), formRootElement);
                    var widgetInstance = value.widgetInstance;
                    //Initialize Each Input Widget
                    if (!value.isLayout) {
                        // Set default / input values
                        var widgetValue = formData[key];
                        if (widgetInstance.widgetType === WidgetType.COMPOSITE) {
                            var compositeFields = WidgetObject.getInputFields(value.widgetDefinition);
                            var compositeValue = {};
                            for (var cntr = 0; cntr < compositeFields.length; cntr++) {
                                if (compositeFields[cntr] in formData) {
                                    compositeValue[compositeFields[cntr]] = formData[compositeFields[cntr]];
                                    /**Populate the reverse index of Composite fields
                                     * so that individual values in a composite field
                                     * can be clumped together later during a form field
                                     * update.
                                     */
                                    self.compositeFieldsReverseIndex[compositeFields[cntr]] = key;
                                }
                            }
                            widgetValue = compositeValue;
                        }
                        widgetInstance.value = widgetValue;
                        // value.widgetInstance.value = dataMap[key];
                        //One time initialization for each field type
                        if (!(value.type in inputFieldSet)) {
                            inputFieldSet[value.type] = undefined; //Emulating a SET, so making the VALUE as undefined.
                            WidgetObject.initializeWidget(formRootElement, self.changeCallBack, self.customEventsCallback);
                        }
                    }
                    //Check if there are any conditionals defined to determine the visibility.
                    if (value.conditional && typeof value.conditional == 'string') {
                        value.conditionalFunction = self.processConditionalString(value.conditional);
                        self.conditionals.push(key);
                        self.populateConditionalsReverseIndex(key, value);
                    }
                    value.visibility = true;
                    return defineProperty({}, '' + key, value);
                }).reduce(function (metadata, field) {
                    //Accumulate the metadata of each field.
                    _extends(metadata, field);
                    return metadata;
                }).do(function (metadata) {
                    //Update the form metadata with initialized data.
                    _extends(formMetaData, metadata);
                });
            }
            /**
             * Update the widgets with the latest data
             *
             * @private
             * @param {*} formMetaData
             * @param {FormData} formData
             * @returns {Observable<any>}
             * @memberof JsonForm
             */
    
        }, {
            key: 'updateWidgets',
            value: function updateWidgets(formMetaData, formData) {
                var self = this;
                var returnedObservable = void 0;
                Observable.pairs(formData).filter(function (kvPair) {
                    var key = void 0;
    
                    var _kvPair2 = slicedToArray(kvPair, 1);
    
                    key = _kvPair2[0];
    
                    return formMetaData[key] || self.compositeFieldsReverseIndex[key] ? true : false;
                }).map(function (kvPair) {
                    return kvPair;
                }).reduce(function (clumpedFormData, kvPair) {
                    var key = void 0,
                        value = void 0;
    
                    var _kvPair3 = slicedToArray(kvPair, 2);
    
                    key = _kvPair3[0];
                    value = _kvPair3[1];
    
                    if (key in formMetaData) {
                        clumpedFormData[key] = value;
                    } else if (key in self.compositeFieldsReverseIndex) {
                        if (!(self.compositeFieldsReverseIndex[key] in clumpedFormData)) {
                            clumpedFormData[self.compositeFieldsReverseIndex[key]] = {};
                        }
                        clumpedFormData[self.compositeFieldsReverseIndex[key]][key] = value;
                    }
                    return clumpedFormData;
                }, {}).subscribe(function (clumpedFormData) {
                    returnedObservable = Observable.pairs(clumpedFormData).do(function (kvPair) {
                        var key = void 0,
                            value = void 0;
    
                        var _kvPair4 = slicedToArray(kvPair, 2);
    
                        key = _kvPair4[0];
                        value = _kvPair4[1];
    
                        if (formMetaData[key].widgetInstance) {
                            formMetaData[key].widgetInstance.value = value;
                        }
                        return defineProperty({}, '' + key, value);
                    }).reduce(function (formDataObject, kvPair) {
                        var key = void 0,
                            value = void 0;
    
                        var _kvPair5 = slicedToArray(kvPair, 2);
    
                        key = _kvPair5[0];
                        value = _kvPair5[1];
    
                        if (key in formMetaData && formMetaData[key].widgetInstance && formMetaData[key].widgetInstance.widgetType === WidgetType.COMPOSITE) {
                            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
                                for (var field in value) {
                                    formDataObject[field] = value[field];
                                }
                            }
                        } else {
                            formDataObject[key] = value;
                        }
                        return formDataObject;
                    }, {});
                });
                return returnedObservable;
            }
            /**
             * Externally exposed accessor to set new value(s) to the form.
             *
             * @memberof JsonForm
             * @param {FormData} formData
             */
    
        }, {
            key: 'trigger',
    
            /**
             * Trigger method which can be used to cast events
             * to a widget instance. The widget instance is
             * identified by it's key.
             *
             * @param {string} eventName
             * @param {string} eventTargetField
             * @param {*} [data]
             * @memberof JsonForm
             */
            value: function trigger(eventName, eventTargetField, data) {
                var self = this;
                Utils.rAF(function () {
                    if (self.metadata[eventTargetField] && self.metadata[eventTargetField].widgetInstance) {
                        self.metadata[eventTargetField].widgetInstance.triggerHandler(eventName, data);
                    }
                });
            }
        }, {
            key: 'data',
            set: function set$$1(formData) {
                var self = this;
                if ((typeof formData === 'undefined' ? 'undefined' : _typeof(formData)) == 'object') {
                    self.updateWidgets(self.metadata, formData).subscribe(function (fData) {
                        fData = _extends(formData, fData);
                        self.updateDataStore(fData);
                        self.evaluateFieldVisibilities(self.conditionals, fData, self.metadata);
                    });
                }
            }
            /**
             * Externally exposed accessor to get the current values of the form.
             *
             * @readonly
             * @type {FormData}
             * @memberof JsonForm
             */
            ,
            get: function get$$1() {
                return this.dataStoreSubject.getValue();
            }
            /**
             * Externally exposed accessor to get the form data as an
             * observable and subscribe for changes.
             *
             * @readonly
             * @memberof JsonForm
             */
    
        }, {
            key: 'observable',
            get: function get$$1() {
                return this.dataStoreSubject.asObservable();
            }
        }, {
            key: 'eventsObservable',
            get: function get$$1() {
                return this.customEventsSubject.asObservable();
            }
        }]);
        return JsonForm;
    }();
    
    var __rest = undefined && undefined.__rest || function (s, e) {
        var t = {};
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        }return t;
    };
    var DeveroParser = function () {
        function DeveroParser() {
            classCallCheck(this, DeveroParser);
    
            this.parserOutput = null;
            this.LAYOUT_WIDGETS = {
                "table": "table",
                "panel": "panel",
                "content": "content"
            };
            this.SINGLE_INSTANCE_WIDGETS = _extends({ 'wound-addendum': 'wound-addendum' }, this.LOC_WIDGETS, this.COP_WIDGETS);
            this.COMPOSITE_WIDGETS = {
                'wound-addendum': 'wound-addendum',
                'COP': 'COP'
            };
            this.COP_WIDGETS = {
                "cop-eligibility": "cp_eligibility",
                "cop-goals": "cp_goals",
                "cop-interventions": "cp_interventions",
                "cop-discharge-planning": "cp_discharge_planning"
            };
            this.LOC_WIDGETS = {
                'level-of-care': 'level_of_care_display',
                'location-of-care': 'location_of_care_display'
            };
            this.KEY_ENFORCED_WIDGETS = _extends({}, this.COP_WIDGETS);
            this.COP_FIELD_NAMES = {
                "cp_eligibility": "cp_eligibility_module_items",
                "cp_goals": "cp_goals_module_items",
                "cp_interventions": "cp_interventions_module_items",
                "cp_discharge_planning": "cp_discharge_planning_module_items"
            };
            this.isPrintForm = false;
            this.isReadOnlyForm = false;
            this.parserConfig = {
                mode: ParserModes.DEFAULT,
                disabledFields: [],
                hiddenFields: []
            };
            this.disabledFieldsMap = {};
            this.hiddenFieldsMap = {};
            this.errors = [];
            this.widgetRegistry = WidgetRegistry.instance;
        }
        /**
         * Generate a map of Disabled Fields for easier searching.
         *
         * @private
         * @memberof DeveroParser
         */
    
    
        createClass(DeveroParser, [{
            key: "generateDisabledFieldsMap",
            value: function generateDisabledFieldsMap() {
                var disabledFields = this.parserConfig.disabledFields;
                for (var cnt = 0; cnt < disabledFields.length; cnt++) {
                    this.disabledFieldsMap[disabledFields[cnt]] = disabledFields[cnt];
                }
            }
            /**
             * Generate a map of Hidden Fields for easier searching.
             *
             * @private
             * @memberof DeveroParser
             */
    
        }, {
            key: "generateHiddenFieldsMap",
            value: function generateHiddenFieldsMap() {
                var hiddenFields = this.parserConfig.hiddenFields;
                for (var cnt = 0; cnt < hiddenFields.length; cnt++) {
                    this.hiddenFieldsMap[hiddenFields[cnt]] = hiddenFields[cnt];
                }
            }
            /**
             * Evaluate the input JSON and return the intermediate JSON and Metadata
             *
             * @param {FormJSON} formJSON
             * @param {FormData} [formData]
             * @param {IParserConfig} [config]
             * @returns {IParserOut}
             * @memberof DeveroParser
             */
    
        }, {
            key: "parse",
            value: function parse(formJSON, formData, config) {
                var _this = this;
    
                this.parserOutput = {
                    intermediateJSON: null,
                    metadata: null,
                    dataMap: null
                };
                this.parserConfig = $$1.extend(true, this.parserConfig, config || {});
                this.generateDisabledFieldsMap();
                this.generateHiddenFieldsMap();
                //Assign Form Data if it is passed
                this.formData = formData && (typeof formData === "undefined" ? "undefined" : _typeof(formData)) === 'object' ? formData : {};
                this.validateJSON(formJSON);
                this.processJSON(formJSON);
                /**
                 * Check whether COP fields have the
                 * corresponding module items field.
                */
                Object.keys(this.COP_FIELD_NAMES).forEach(function (fieldName) {
                    if (fieldName in _this.parserOutput.metadata) {
                        if (!(_this.COP_FIELD_NAMES[fieldName] in _this.parserOutput.metadata)) {
                            _this.errors.push("COP Field '" + fieldName + "' requires the corresponding hidden field '" + _this.COP_FIELD_NAMES[fieldName] + "'");
                        }
                    }
                });
                //Handle Errors
                if (this.errors.length) {
                    throw this.errors;
                }
                return this.parserOutput;
            }
            /**
             * Initialize and process the individual widgets in
             * the JSON.
             *
             * @private
             * @param {FormJSON} formJSON
             * @memberof DeveroParser
             */
    
        }, {
            key: "processJSON",
            value: function processJSON(formJSON) {
                _extends(this.parserOutput, {
                    intermediateJSON: formJSON,
                    metadata: {},
                    dataMap: {}
                });
                this.parserOutput.intermediateJSON.components = this.processWidgets(this.parserOutput.intermediateJSON.components);
            }
            /**
             * Iterate through all the widget definitions in the
             * JSON and process them one by one.
             *
             * @private
             * @param {*} widgets
             * @returns
             * @memberof DeveroParser
             */
    
        }, {
            key: "processWidgets",
            value: function processWidgets(widgets) {
                var processedWidgets = [];
                for (var idx = 0; idx < widgets.length; idx++) {
                    if (this.widgetRegistry.isValidWidget(widgets[idx].type)) {
                        processedWidgets.push(this.processWidget(widgets[idx]));
                    } else {
                        console.log("\"" + widgets[idx].type + "\" is not a valid widget type.");
                    }
                }
                return processedWidgets;
            }
            /**
             * Invoke the necessary widget processors based
             * on their type, viz. Layout, Other etc.
             *
             * @private
             * @param {*} widget
             * @returns
             * @memberof DeveroParser
             */
    
        }, {
            key: "processWidget",
            value: function processWidget(widget) {
                return !(widget.type in this.LAYOUT_WIDGETS) ? this.processNonLayoutWidget(widget) : this.processLayoutWidget(widget);
            }
            /**
             * Helper function to read the widget definition for
             * a select widget and determine the label given the
             * value of it.
             *
             * @private
             * @param {string} value
             * @param {any[]} valueLabelArray
             * @returns
             * @memberof DeveroParser
             */
    
        }, {
            key: "getLabelForValue",
            value: function getLabelForValue(value, valueLabelArray) {
                var length = valueLabelArray && valueLabelArray.length || 0;
                var retVal = "  ";
                for (var ctr = 0; ctr < length && value != ""; ctr++) {
                    if (value == valueLabelArray[ctr].value) {
                        retVal = valueLabelArray[ctr].label;
                        break;
                    }
                }
                return retVal;
            }
            /**
             * Transform the widget definition from Devero Format (Form3.0)
             * to the intermediate JSON format
             *
             * @private
             * @param {*} widget
             * @returns
             * @memberof DeveroParser
             */
    
        }, {
            key: "transformWidgetDefinition",
            value: function transformWidgetDefinition(widget) {
                var _this2 = this;
    
                var name = widget.key,
                    value = widget.defaultValue,
                    type = widget.type,
                    label = widget.label,
                    validate = widget.validate,
                    disabled = widget.disableOnInvalid,
                    classX = widget.customClass,
                    otherProperties = __rest(widget, ["key", "defaultValue", "type", "label", "validate", "disableOnInvalid", "customClass"]);
    
                var transformedWidget = _extends(defineProperty({ name: name,
                    value: value,
                    type: type,
                    label: label,
                    validate: validate,
                    disabled: disabled }, 'class', classX), otherProperties);
                //Merge the initial form data to the widget definition
                if (transformedWidget.name in this.formData) {
                    transformedWidget.value = this.formData[transformedWidget.name];
                    if (this.parserConfig.mode == ParserModes.PRINT) {
                        //Print the label instead of value for select boxes.
                        if (transformedWidget.type == 'select') {
                            transformedWidget.value = this.getLabelForValue(transformedWidget.value, transformedWidget.data.values);
                        }
                        //Print the date in MM/DD/YYYY format.
                        if (transformedWidget.type == 'datetime') {
                            transformedWidget.value = Utils.getFormattedDate(transformedWidget.value);
                        }
                    }
                } else if (transformedWidget.type in this.COMPOSITE_WIDGETS) {
                    var compositeInputs = this.widgetRegistry.getWidgetByName(this.COMPOSITE_WIDGETS[transformedWidget.type]).getInputFields(transformedWidget);
                    compositeInputs.forEach(function (compositeInput) {
                        if (!_this2.formData[compositeInput]) {
                            _this2.formData[compositeInput] = "";
                        }
                    });
                }
                //Disable fields which are in the disabled fields list
                if (transformedWidget.name in this.disabledFieldsMap) {
                    transformedWidget.disabled = true;
                }
                // widgets in the hidden fields are marked hidden
                if (transformedWidget.name in this.hiddenFieldsMap) {
                    transformedWidget.conditional = "false";
                }
                //Update the widget definition with the current mode.
                switch (this.parserConfig.mode) {
                    case ParserModes.PRINT:
                        transformedWidget.isPrintMode = true;
                        break;
                    case ParserModes.READONLY:
                        transformedWidget.disabled = true;
                        break;
                    default:
                        break;
                }
                //Assign the datasource to widget
                if (transformedWidget.dataSource && this.parserConfig.dataSources && this.parserConfig.dataSources[transformedWidget.dataSource]) {
                    transformedWidget.dataSource = this.parserConfig.dataSources[transformedWidget.dataSource];
                }
                return transformedWidget;
            }
            /**
             * Process the widgets and generate the necessary metadata.
             *
             * @private
             * @param {*} widget
             * @returns
             * @memberof DeveroParser
             */
    
        }, {
            key: "processNonLayoutWidget",
            value: function processNonLayoutWidget(widget) {
                var processedWidget = this.transformWidgetDefinition(widget);
                var parserOut = this.parserOutput;
                /**Composite Widgets do not have the values on their own
                 * but their values are spread across multiple values in the
                 * formData object.
                 */
                if (!(processedWidget.type in this.COMPOSITE_WIDGETS)) {
                    parserOut.dataMap[processedWidget.name] = processedWidget.value ? processedWidget.value : '';
                }
                if (processedWidget.name in parserOut.metadata) {
                    this.errors.push("Duplicate field name found: " + processedWidget.name);
                }
                //Checks to ensure that certain fields follow field name restrictions
                if (processedWidget.type in this.KEY_ENFORCED_WIDGETS) {
                    if (this.KEY_ENFORCED_WIDGETS[processedWidget.type] != processedWidget.name) {
                        this.errors.push("The Widget '" + processedWidget.type + "' should have the 'key' as " + this.KEY_ENFORCED_WIDGETS[processedWidget.type] + ". But the 'key' is " + processedWidget.name);
                    }
                }
                // Check for single instance widget
                if (processedWidget.type in this.SINGLE_INSTANCE_WIDGETS) {
                    for (var key in parserOut.metadata) {
                        if (parserOut.metadata[key].type === processedWidget.type) {
                            this.errors.push(processedWidget.type + " can have only one instance");
                        }
                    }
                }
                parserOut.metadata[processedWidget.name] = {
                    type: processedWidget.type,
                    conditional: processedWidget.conditional,
                    isLayout: false,
                    widgetDefinition: _extends({}, processedWidget)
                };
                return processedWidget;
            }
            /**
             * Process the widgets and generate the necessary metadata.
             *
             * @private
             * @param {*} widget
             * @returns
             * @memberof DeveroParser
             */
    
        }, {
            key: "processLayoutWidget",
            value: function processLayoutWidget(widget) {
                var processedWidget = this.transformWidgetDefinition(widget);
                var parserOut = this.parserOutput;
                switch (processedWidget.type) {
                    case this.LAYOUT_WIDGETS.table:
                        for (var row = 0; row < processedWidget.rows.length; row++) {
                            for (var col = 0; col < processedWidget.rows[row].length; col++) {
                                processedWidget.rows[row][col].components = this.processWidgets(processedWidget.rows[row][col].components);
                            }
                        }
                        break;
                    case this.LAYOUT_WIDGETS.panel:
                        processedWidget.components = this.processWidgets(processedWidget.components);
                        break;
                    case this.LAYOUT_WIDGETS.content:
                        break;
                }
                if (processedWidget.name in parserOut.metadata) {
                    this.errors.push("Duplicate field name found: " + processedWidget.name);
                }
                parserOut.metadata[processedWidget.name] = {
                    type: processedWidget.type,
                    conditional: processedWidget.conditional,
                    isLayout: true,
                    widgetDefinition: _extends({}, processedWidget)
                };
                return processedWidget;
            }
            /**
             * Perform validations to the input JSON.
             *
             * @private
             * @param {FormJSON} formJSON
             * @memberof DeveroParser
             */
    
        }, {
            key: "validateJSON",
            value: function validateJSON(formJSON) {
                //TODO: Eventually this logic has to be replaced with schema validation.
                if (!(formJSON.components && formJSON.components.length > 0)) {
                    throw new Error("Invalid Form JSON Structure");
                }
            }
        }]);
        return DeveroParser;
    }();
    
    var TableLayoutWidget = function (_AbstractLayoutWidget) {
        inherits(TableLayoutWidget, _AbstractLayoutWidget);
    
        function TableLayoutWidget() {
            classCallCheck(this, TableLayoutWidget);
            return possibleConstructorReturn(this, (TableLayoutWidget.__proto__ || Object.getPrototypeOf(TableLayoutWidget)).apply(this, arguments));
        }
    
        createClass(TableLayoutWidget, null, [{
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                // let htmlString = '';
                for (var row = 0; row < widgetDefinition.numRows; row++) {
                    for (var col = 0; col < widgetDefinition.numCols; col++) {
                        try {
                            for (var idx = 0; idx < widgetDefinition.rows[row][col].components.length; idx++) {
                                var widgetType = widgetDefinition.rows[row][col].components[idx].type;
                                var tmpString = widgetType ? get(TableLayoutWidget.__proto__ || Object.getPrototypeOf(TableLayoutWidget), 'getWidget', this).call(this, widgetType).getHTMLString(widgetDefinition.rows[row][col].components[idx]) : '';
                                widgetDefinition.rows[row][col].components[idx].htmlString = tmpString;
                            }
                        } catch (e) {
                            console.warn('All rows and columns are not defined:', e);
                        }
                    }
                }
                return this.renderTemplate(widgetDefinition);
            }
        }]);
        return TableLayoutWidget;
    }(AbstractLayoutWidget);
    TableLayoutWidget.compiledTemplate = null;
    TableLayoutWidget.templateString = '<table id="{{=it.name}}" class="jf-table {{?it.class}} {{=it.class}}{{?}} {{?it.border}} set-table-border{{?}} {{?it.noPadding}} unset-padding{{?}}"> {{?it.header && it.header.length}}<tr>{{~it.header :header:headerIdx}}<th {{?it.headerClass}} class="{{=it.headerClass}}"{{?}}>{{=header}}</th>{{~}}</tr>{{?}} {{~it.rows :row:rowIdx}} <tr> {{~row :col:colIdx}} <td {{?col.class}} class="{{=col.class}}"{{?}} {{?col.colspan}} colspan="{{=col.colspan}}"{{?}} {{?col.rowspan}} rowspan="{{=col.rowspan}}"{{?}}> {{~col.components :cell:cellIdx}} {{=cell.htmlString}} {{~}} </td> {{~}} </tr> {{~}} </table>';
    
    var PanelLayoutWidget = function (_AbstractLayoutWidget) {
        inherits(PanelLayoutWidget, _AbstractLayoutWidget);
    
        function PanelLayoutWidget() {
            classCallCheck(this, PanelLayoutWidget);
            return possibleConstructorReturn(this, (PanelLayoutWidget.__proto__ || Object.getPrototypeOf(PanelLayoutWidget)).apply(this, arguments));
        }
    
        createClass(PanelLayoutWidget, null, [{
            key: "getHTMLString",
            value: function getHTMLString(widgetDefinition) {
                for (var col = 0; col < widgetDefinition.components.length; col++) {
                    try {
                        var widgetType = widgetDefinition.components[col].type;
                        var tmpString = widgetType ? get(PanelLayoutWidget.__proto__ || Object.getPrototypeOf(PanelLayoutWidget), "getWidget", this).call(this, widgetType).getHTMLString(widgetDefinition.components[col]) : '';
                        widgetDefinition.components[col].htmlString = tmpString;
                    } catch (e) {
                        console.error(e);
                    }
                }
                return PanelLayoutWidget.renderTemplate(widgetDefinition);
            }
        }]);
        return PanelLayoutWidget;
    }(AbstractLayoutWidget);
    PanelLayoutWidget.compiledTemplate = null;
    PanelLayoutWidget.templateString = "<div id=\"{{=it.name}}\" class=\"jf-panel {{?it.class}} {{=it.class}}{{?}} {{?it.border}} set-panel-border{{?}} {{?it.noPadding}} unset-padding{{?}}\">{{?it.title}}<div class=\"title\">{{=it.title}}</div>{{?}}<div class=\"body\"> {{~it.components :cell:cellIdx}} {{=cell.htmlString}} {{~}} </div></div>";
    
    var ContentLayoutWidget = function (_AbstractLayoutWidget) {
        inherits(ContentLayoutWidget, _AbstractLayoutWidget);
    
        function ContentLayoutWidget() {
            classCallCheck(this, ContentLayoutWidget);
            return possibleConstructorReturn(this, (ContentLayoutWidget.__proto__ || Object.getPrototypeOf(ContentLayoutWidget)).apply(this, arguments));
        }
    
        createClass(ContentLayoutWidget, null, [{
            key: "getHTMLString",
            value: function getHTMLString(widgetDefinition) {
                return ContentLayoutWidget.renderTemplate(widgetDefinition);
            }
        }]);
        return ContentLayoutWidget;
    }(AbstractLayoutWidget);
    ContentLayoutWidget.compiledTemplate = null;
    ContentLayoutWidget.templateString = "<span id=\"{{=it.name}}\" class=\"jf-content {{?it.class}} {{=it.class}}{{?}}\"> {{=it.html}}</span>";
    
    var TextWidget = function (_AbstractInputWidget) {
        inherits(TextWidget, _AbstractInputWidget);
    
        function TextWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, TextWidget);
    
            var _this = possibleConstructorReturn(this, (TextWidget.__proto__ || Object.getPrototypeOf(TextWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            return _this;
        }
    
        createClass(TextWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = this.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return TextWidget;
    }(AbstractInputWidget);
    TextWidget.compiledTemplate = null;
    TextWidget.templateString = '<span id="{{=it.name}}" class="jf-textfield {{?it.class}} {{=it.class}}{{?}}">{{?it.label}}<label for="{{=it.name}}" >{{=it.label}}</label>{{?}}{{?it.isPrintMode}}<span class="print-field">{{=(it.value || "&nbsp;&nbsp;")}}</span>{{?}}{{? !it.isPrintMode}}<input class="field" name="{{=it.name}}" type="text"  {{?it.disabled}}disabled{{?}}/>{{?}}</span>';
    
    var RadioGroupWidget = function (_AbstractInputWidget) {
        inherits(RadioGroupWidget, _AbstractInputWidget);
    
        function RadioGroupWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, RadioGroupWidget);
    
            var _this = possibleConstructorReturn(this, (RadioGroupWidget.__proto__ || Object.getPrototypeOf(RadioGroupWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            return _this;
        }
    
        createClass(RadioGroupWidget, [{
            key: 'value',
            get: function get$$1() {
                var checkedField = this.$fieldElement.filter(':checked');
                return checkedField.length ? checkedField.val() : '';
            },
            set: function set$$1(value) {
                var newField = this.$fieldElement.filter('[value="' + value + '"]');
                this.$fieldElement.removeAttr('checked');
                if (newField.length) {
                    newField.prop('checked', true);
                }
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
                $rootElement.on('click', 'a[data-clear-radio]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    var $this = $(this);
                    var fieldName = $this.attr('data-name');
                    $this.siblings('span').find('[name=' + fieldName + ']:checked').prop('checked', false);
                    //Unset value
                    changeCallback(fieldName, '');
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = RadioGroupWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return RadioGroupWidget;
    }(AbstractInputWidget);
    RadioGroupWidget.compiledTemplate = null;
    RadioGroupWidget.templateString = '<span id="{{=it.name}}" class="jf-radio {{?it.class}} {{=it.class}}{{?}}">\n    {{~it.values :option:idx}}\n    <span>\n    {{?it.isPrintMode}}\n        <img src="images/radio{{?it.value == option.value}}1{{??}}2{{?}}.png" />\n    {{??}}    \n    <input type="radio" class="field" {{?it.disabled}}disabled{{?}} id="{{=(it.name+idx)}}" name="{{=it.name}}" value="{{=option.value}}">\n    {{?}}\n    <label for="{{=(it.name+idx)}}"><span></span>{{=option.label}}</label>\n    </span>\n    {{~}}\n    {{? it.clearable && !it.isPrintMode && !it.disabled}}\n     <a href="#" class="clear" data-clear-radio data-name="{{=it.name}}">Clear</a>\n    {{?}}\n    </span>';
    
    var SelectWidget = function (_AbstractInputWidget) {
        inherits(SelectWidget, _AbstractInputWidget);
    
        function SelectWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, SelectWidget);
    
            var _this = possibleConstructorReturn(this, (SelectWidget.__proto__ || Object.getPrototypeOf(SelectWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('select.field');
            return _this;
        }
    
        createClass(SelectWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = SelectWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return SelectWidget;
    }(AbstractInputWidget);
    SelectWidget.compiledTemplate = null;
    SelectWidget.templateString = '<span id="{{=it.name}}" class="jf-select {{?it.class}} {{=it.class}}{{?}}"><label for="{{=it.name}}">{{=it.label}}</label>{{?it.isPrintMode}}<span class="print-field">{{=(it.value || "&nbsp;&nbsp;")}}</span>{{?}}{{? !it.isPrintMode}}<select name="{{=it.name}}" class="field" {{?it.disabled}}disabled{{?}} >{{~it.data.values :option:idx}}<option value="{{=option.value}}">{{=option.label}}</option>{{~}}</select>{{?}}</span>';
    
    var PasswordWidget = function (_AbstractInputWidget) {
        inherits(PasswordWidget, _AbstractInputWidget);
    
        function PasswordWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, PasswordWidget);
    
            var _this = possibleConstructorReturn(this, (PasswordWidget.__proto__ || Object.getPrototypeOf(PasswordWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            return _this;
        }
    
        createClass(PasswordWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = PasswordWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return PasswordWidget;
    }(AbstractInputWidget);
    PasswordWidget.compiledTemplate = null;
    PasswordWidget.templateString = '<span id="{{=it.name}}" class="jf-password {{?it.class}} {{=it.class}}{{?}}"><label for="{{=it.name}}" >{{=it.label}}</label>{{?it.isPrintMode}}<span class="print-field">{{=(it.value || "&nbsp;&nbsp;")}}</span>{{?}}{{? !it.isPrintMode}}<input class="field" name="{{=it.name}}" type="password"  {{?it.disabled}}disabled{{?}}/>{{?}}</span>';
    
    var DateWidget = function (_AbstractInputWidget) {
        inherits(DateWidget, _AbstractInputWidget);
    
        function DateWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, DateWidget);
    
            var _this = possibleConstructorReturn(this, (DateWidget.__proto__ || Object.getPrototypeOf(DateWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            return _this;
        }
    
        createClass(DateWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = DateWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return DateWidget;
    }(AbstractInputWidget);
    DateWidget.compiledTemplate = null;
    DateWidget.templateString = '<span id="{{=it.name}}" class="jf-datetime {{?it.class}} {{=it.class}}{{?}}"><label for="{{=it.name}}" >{{=it.label}}</label>{{?it.isPrintMode}}<span class="print-field">{{=(it.value || "&nbsp;&nbsp;")}}</span>{{?}}{{? !it.isPrintMode}}<input class="field" name="{{=it.name}}" type="date" {{?(it.enableDate && it.datePicker && it.datePicker.minDate)}}min="{{=it.datePicker.minDate}}"{{?}} {{?(it.enableDate && it.datePicker && it.datePicker.maxDate)}}max="{{=it.datePicker.maxDate}}"{{?}} {{?it.disabled}}disabled{{?}}/>{{?}}</span>';
    
    var TextareaWidget = function (_AbstractInputWidget) {
        inherits(TextareaWidget, _AbstractInputWidget);
    
        function TextareaWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, TextareaWidget);
    
            var _this = possibleConstructorReturn(this, (TextareaWidget.__proto__ || Object.getPrototypeOf(TextareaWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('textarea.field');
            return _this;
        }
    
        createClass(TextareaWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = TextareaWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return TextareaWidget;
    }(AbstractInputWidget);
    TextareaWidget.compiledTemplate = null;
    TextareaWidget.templateString = '<span id="{{=it.name}}" class="jf-textarea {{?it.class}} {{=it.class}}{{?}}"><label for="{{=it.name}}" >{{=it.label}}</label>{{?it.isPrintMode}}<div class="print-field">{{=(it.value || "&nbsp;&nbsp;")}}</div>{{?}}{{? !it.isPrintMode}}<textarea class="field" name="{{=it.name}}" {{?it.rows}}rows="{{=it.rows}}"{{?}} {{?it.disabled}}disabled{{?}}></textarea>{{?}}</span>';
    
    var CheckboxWidget = function (_AbstractInputWidget) {
        inherits(CheckboxWidget, _AbstractInputWidget);
    
        function CheckboxWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, CheckboxWidget);
    
            var _this = possibleConstructorReturn(this, (CheckboxWidget.__proto__ || Object.getPrototypeOf(CheckboxWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            return _this;
        }
    
        createClass(CheckboxWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.is(':checked') ? this.$fieldElement.val() : "";
            },
            set: function set$$1(value) {
                this.$fieldElement.removeAttr('checked');
                if (this.$fieldElement.is('[value="' + value + '"]')) {
                    this.$fieldElement.prop('checked', true);
                }
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', '[type="checkbox"]', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    var target = $(event.target);
                    changeCallback('' + target.attr('name'), '' + (target.is(':checked') ? target.val() : ""));
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = CheckboxWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return CheckboxWidget;
    }(AbstractInputWidget);
    CheckboxWidget.compiledTemplate = null;
    CheckboxWidget.templateString = '<span id="{{=it.name}}" class="jf-checkbox {{?it.class}} {{=it.class}}{{?}}">\n    {{?it.isPrintMode}}\n    <img src="images/check{{?it.value == "on"}}1{{??}}2{{?}}.png" />\n    {{??}}<input type="checkbox" class="field" id="{{=it.name}}_field" name="{{=it.name}}" value="on" {{?it.disabled}}disabled{{?}}>\n    {{?}}\n    <label for="{{=it.name}}_field"><span></span>{{?it.label}}{{=it.label}}{{?}}</label>\n    </span>';
    
    var HiddenWidget = function (_AbstractInputWidget) {
        inherits(HiddenWidget, _AbstractInputWidget);
    
        function HiddenWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, HiddenWidget);
    
            var _this = possibleConstructorReturn(this, (HiddenWidget.__proto__ || Object.getPrototypeOf(HiddenWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            return _this;
        }
    
        createClass(HiddenWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = HiddenWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return HiddenWidget;
    }(AbstractInputWidget);
    HiddenWidget.compiledTemplate = null;
    HiddenWidget.templateString = '<span id="{{=it.name}}" class="jf-hidden {{?it.class}} {{=it.class}}{{?}}"><input class="field" name="{{=it.name}}" type="hidden" /></span>';
    
    var DynamicSelectWidget = function (_AbstractInputWidget) {
        inherits(DynamicSelectWidget, _AbstractInputWidget);
    
        function DynamicSelectWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, DynamicSelectWidget);
    
            var _this = possibleConstructorReturn(this, (DynamicSelectWidget.__proto__ || Object.getPrototypeOf(DynamicSelectWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.data = [];
            _this.disable = function () {
                if (_this.choicesInstance) {
                    _this.choicesInstance.disable();
                    _this.choicesInstance.hideDropdown();
                }
            };
            _this.enable = function () {
                if (_this.choicesInstance && _this.widgetDefinition && !_this.widgetDefinition.disabled) {
                    _this.choicesInstance.enable();
                }
            };
            _this.search = function (params) {
                if (_this.widgetDefinition.dataSource && typeof _this.widgetDefinition.dataSource === 'function') {
                    _this.unsubscribeDataSourcePromises();
                    _this.searchPromiseSubscription = Observable.from(_this.widgetDefinition.dataSource(params)).subscribe(function (data) {
                        _this.data = data ? JSON.parse(JSON.stringify(data)) : [];
                        _this.placeholderObj.selected = false;
                        _this.data.unshift(_this.placeholderObj);
                        _this.choicesInstance.setChoices(_this.data, _this.choicesConfig.valueField, _this.choicesConfig.labelField, true);
                        var currentValue = _this.choicesInstance.getValue(true);
                        _this.choicesInstance.setValueByChoice(currentValue);
                    });
                }
            };
            _this.fetchAndSetChoicesValue = function () {
                /** To check if the datasource is a function or
                 * a datasource is a thenable promise.
                 */
                if (_this.widgetDefinition.dataSource && (typeof _this.widgetDefinition.dataSource === 'function' || typeof _this.widgetDefinition.dataSource.then === 'function')) {
                    _this.unsubscribeDataSourcePromises();
                    _this.fieldValuePromiseSubscription = Observable.from(typeof _this.widgetDefinition.dataSource === 'function' ? _this.widgetDefinition.dataSource({
                        isFromInitalLoad: true,
                        searchText: _this.fieldValue
                    }) : _this.widgetDefinition.dataSource).subscribe(function (data) {
                        _this.data = data ? JSON.parse(JSON.stringify(data)) : [];
                        _this.placeholderObj.selected = false;
                        _this.data.unshift(_this.placeholderObj);
                        _this.choicesInstance.setChoices(_this.data, _this.choicesConfig.valueField, _this.choicesConfig.labelField, true);
                        _this.choicesInstance.setValueByChoice(_this.fieldValue);
                    });
                }
            };
            _this.widgetDefinition = widgetDefinition;
            _this.$fieldElement = _this.$widgetElement.find('select.field');
            var self = _this;
            if (!_this.widgetDefinition.isPrintMode) {
                var _this$placeholderObj;
    
                _this.choicesConfig = _extends({ loadingText: '', noResultsText: 'No results found', noChoicesText: '', itemSelectText: '', searchFloor: -1, searchChoices: true, shouldSort: false, valueField: 'value', selectedLabelField: 'label', labelField: 'label', callbackOnCreateTemplates: function callbackOnCreateTemplates(template) {
                        var _this2 = this;
    
                        var classNames = this.config.classNames;
                        var selectedLabelField = this.config.selectedLabelField;
                        return {
                            item: function item(data) {
                                return template('\n                          <div class="' + classNames.item + ' ' + (data.highlighted ? classNames.highlightedState : classNames.itemSelectable) + '" data-item data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.active ? 'aria-selected="true"' : '') + ' ' + (data.disabled ? 'aria-disabled="true"' : '') + '>\n                            ' + (data.customProperties ? data.customProperties[selectedLabelField] : data[selectedLabelField] ? data[selectedLabelField] : data.label) + '\n                          </div>\n                        ');
                            },
                            choice: function choice(data) {
                                var selectedValue = self.choicesInstance.getValue(true);
                                var isSelected = data.value == selectedValue ? true : false;
                                return template('\n                          <div class="' + classNames.item + ' ' + classNames.itemChoice + ' ' + (data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + ' ' + (isSelected ? 'dropdown_selected' : 'dropdown_unselected') + '" data-select-text="' + _this2.config.itemSelectText + '" data-choice ' + (data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + ' data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '>\n                            ' + data.label + '\n                          </div>\n                        ');
                            }
                        };
                    } }, widgetDefinition.config);
                _this.choicesInstance = new Choices(_this.$fieldElement.get(0), _this.choicesConfig);
                _this.placeholderObj = (_this$placeholderObj = {}, defineProperty(_this$placeholderObj, _this.choicesConfig.valueField, '-1'), defineProperty(_this$placeholderObj, _this.choicesConfig.labelField, widgetDefinition.placeholder || DynamicSelectWidget.defaultPlaceholderText), defineProperty(_this$placeholderObj, 'selected', true), _this$placeholderObj);
                _this.data.unshift(_this.placeholderObj);
                _this.choicesInstance.setChoices(_this.data, _this.choicesConfig.valueField, _this.choicesConfig.labelField, true);
                if (!_this.choicesConfig.searchChoices) {
                    // Search event Handler
                    _this.choicesInstance.passedElement.addEventListener("search", function (event) {
                        _this.search({
                            isFromInitalLoad: false,
                            searchText: event.detail.value
                        });
                        return;
                    });
                    // Show dropdown event handler
                    _this.choicesInstance.passedElement.addEventListener("showDropdown", function (event) {
                        if (_this.choicesInstance.input && !_this.choicesInstance.input.value) {
                            _this.search({
                                isFromInitalLoad: false,
                                searchText: ''
                            });
                        }
                        return;
                    });
                    // Hide dropdown event handler
                    _this.choicesInstance.passedElement.addEventListener("hideDropdown", function (event) {
                        if (_this.choicesInstance.input && _this.choicesInstance.input.value) {
                            _this.choicesInstance.input.value = '';
                        }
                        _this.unsubscribeDataSourcePromises();
                        _this.placeholderObj.selected = false;
                        _this.data = [];
                        _this.data.unshift(_this.placeholderObj);
                        _this.choicesInstance.setChoices(_this.data, _this.choicesConfig.valueField, _this.choicesConfig.labelField, true);
                        return;
                    });
                    // For handling empty search
                    if (_this.choicesInstance.input) {
                        $$1(_this.choicesInstance.input).on('propertychange input', function (e) {
                            var valueChanged = false;
                            if (e.type == 'propertychange') {
                                valueChanged = e.originalEvent.propertyName == 'value';
                            } else {
                                valueChanged = true;
                            }
                            if (valueChanged && !_this.choicesInstance.input.value) {
                                _this.search({
                                    isFromInitalLoad: false,
                                    searchText: ''
                                });
                            }
                        });
                    }
                }
                if (_this.widgetDefinition.disabled) {
                    _this.choicesInstance.disable();
                }
            }
            return _this;
        }
    
        createClass(DynamicSelectWidget, [{
            key: 'unsubscribeDataSourcePromises',
            value: function unsubscribeDataSourcePromises() {
                if (this.searchPromiseSubscription) {
                    this.searchPromiseSubscription.unsubscribe();
                }
                if (this.fieldValuePromiseSubscription) {
                    this.fieldValuePromiseSubscription.unsubscribe();
                }
            }
        }, {
            key: 'triggerHandler',
            value: function triggerHandler(eventName, data) {
                switch (eventName) {
                    case "dynamicSelectWidget.enable":
                        if (this.choicesInstance) {
                            var currentValue = this.choicesInstance.getValue(true);
                            if (currentValue && currentValue !== "-1") {
                                this.placeholderObj.selected = false;
                            }
                            this.choicesInstance.setChoices(this.data, this.choicesConfig.valueField, this.choicesConfig.labelField, true);
                            if (!currentValue || currentValue == "-1") {
                                this.choicesInstance.setValueByChoice(currentValue);
                            }
                        }
                        this.enable();
                        break;
                    case "dynamicSelectWidget.disable":
                        if (this.choicesInstance) {
                            var _currentValue = this.choicesInstance.getValue(true);
                            if (data && (!_currentValue || _currentValue == "-1")) {
                                this.choicesInstance.setChoices(data, this.choicesConfig.valueField, this.choicesConfig.labelField, true);
                            }
                        }
                        this.disable();
                        break;
                }
            }
        }, {
            key: 'value',
            get: function get$$1() {
                return this.fieldValue;
            },
            set: function set$$1(value) {
                this.fieldValue = value;
                if (!this.widgetDefinition.isPrintMode) {
                    this.fetchAndSetChoicesValue();
                }
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $$1(event.target).attr('name'), '' + $$1(event.target).val());
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = DynamicSelectWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return DynamicSelectWidget;
    }(AbstractInputWidget);
    DynamicSelectWidget.defaultPlaceholderText = "Select";
    DynamicSelectWidget.compiledTemplate = null;
    DynamicSelectWidget.templateString = '<span id="{{=it.name}}" class="jf-select {{?it.class}} {{=it.class}}{{?}}"><label for="{{=it.name}}" class="dynamic-select">{{=it.label}}</label>{{?it.isPrintMode}}<span class="print-field">{{=(it.value || "&nbsp;&nbsp;")}}</span>{{?}}{{? !it.isPrintMode}}<select name="{{=it.name}}"  class="field"></select>{{?}}</span>';
    
    var CopEligibilityWidget = function (_AbstractInputWidget) {
        inherits(CopEligibilityWidget, _AbstractInputWidget);
    
        function CopEligibilityWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, CopEligibilityWidget);
    
            console.log('Warning: This widget is deprecated and it will be removed soon.');
    
            var _this = possibleConstructorReturn(this, (CopEligibilityWidget.__proto__ || Object.getPrototypeOf(CopEligibilityWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            _this.$fieldDisplayElement = _this.$widgetElement.find('div.display-field');
            return _this;
        }
    
        createClass(CopEligibilityWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
                this.$fieldDisplayElement.text(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
                $rootElement.on('click', 'a[data-cop-title-el]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("OpenPOCPopup", "Eligibility", {
                        'internalSectionNames': 'eligibility',
                        'activeSection': 'eligibility',
                        'includeType': undefined
                    });
                });
                $rootElement.on('click', 'a[data-clear-cop-field-el]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("ClearPOCField", "Eligibility", {
                        'internalSectionName': 'eligibility'
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = CopEligibilityWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return CopEligibilityWidget;
    }(AbstractInputWidget);
    CopEligibilityWidget.compiledTemplate = null;
    CopEligibilityWidget.templateString = '<div id="{{=it.name}}" class="jf-cop cop-eligibility {{?it.class}} {{=it.class}}{{?}}"><div>{{? !it.isPrintMode  && !it.disabled}}<a href="#" class="cop-title" data-cop-title-el="Eligibility">Eligibility</a><a href="#" class="clear" data-clear-cop-field-el data-name="{{=it.name}}">Clear</a>{{??}}<span class="cop-title">Eligibility</span>{{?}}</div><div><input type=hidden class="field" name="{{=it.name}}"  /><div class="display-field" style="min-height: {{?it.rows}}{{=it.rows}}{{??}}1{{?}}em;">{{?it.isPrintMode}}{{=(it.value || "&nbsp;&nbsp;")}}{{?}}</div></div></div>';
    
    var CopGoalsWidget = function (_AbstractInputWidget) {
        inherits(CopGoalsWidget, _AbstractInputWidget);
    
        function CopGoalsWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, CopGoalsWidget);
    
            console.log('Warning: This widget is deprecated and it will be removed soon.');
    
            var _this = possibleConstructorReturn(this, (CopGoalsWidget.__proto__ || Object.getPrototypeOf(CopGoalsWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            _this.$fieldDisplayElement = _this.$widgetElement.find('div.display-field');
            return _this;
        }
    
        createClass(CopGoalsWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
                this.$fieldDisplayElement.text(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
                $rootElement.on('click', 'a[data-cop-title-go]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("OpenPOCPopup", "Goals", {
                        'internalSectionNames': 'goals',
                        'activeSection': 'goals',
                        'includeType': 'VISIT_NOTE'
                    });
                });
                $rootElement.on('click', 'a[data-clear-cop-field-go]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("ClearPOCField", "Goals", {
                        'internalSectionName': 'goals'
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = CopGoalsWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return CopGoalsWidget;
    }(AbstractInputWidget);
    CopGoalsWidget.compiledTemplate = null;
    CopGoalsWidget.templateString = '<div id="{{=it.name}}" class="jf-cop cop-goals {{?it.class}} {{=it.class}}{{?}}"><div>{{? !it.isPrintMode  && !it.disabled}}<a href="#" class="cop-title" data-cop-title-go="Goals">Goals</a><a href="#" class="clear" data-clear-cop-field-go data-name="{{=it.name}}">Clear</a>{{??}}<span class="cop-title">Goals</span>{{?}}</div><div><input type=hidden class="field" name="{{=it.name}}"  /><div class="display-field" style="min-height: {{?it.rows}}{{=it.rows}}{{??}}1{{?}}em;">{{?it.isPrintMode}}{{=(it.value || "&nbsp;&nbsp;")}}{{?}}</div></div></div>';
    
    var CopInterventionsWidget = function (_AbstractInputWidget) {
        inherits(CopInterventionsWidget, _AbstractInputWidget);
    
        function CopInterventionsWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, CopInterventionsWidget);
    
            console.log('Warning: This widget is deprecated and it will be removed soon.');
    
            var _this = possibleConstructorReturn(this, (CopInterventionsWidget.__proto__ || Object.getPrototypeOf(CopInterventionsWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            _this.$fieldDisplayElement = _this.$widgetElement.find('div.display-field');
            return _this;
        }
    
        createClass(CopInterventionsWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
                this.$fieldDisplayElement.text(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
                $rootElement.on('click', 'a[data-cop-title-in]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("OpenPOCPopup", "Interventions", {
                        'internalSectionNames': 'interventions',
                        'activeSection': 'interventions',
                        'includeType': 'VISIT_NOTE'
                    });
                });
                $rootElement.on('click', 'a[data-clear-cop-field-in]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("ClearPOCField", "Interventions", {
                        'internalSectionName': 'interventions'
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = CopInterventionsWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return CopInterventionsWidget;
    }(AbstractInputWidget);
    CopInterventionsWidget.compiledTemplate = null;
    CopInterventionsWidget.templateString = '<div id="{{=it.name}}" class="jf-cop cop-interventions {{?it.class}} {{=it.class}}{{?}}"><div>{{? !it.isPrintMode && !it.disabled}}<a href="#" class="cop-title" data-cop-title-in="Interventions">Interventions</a><a href="#" class="clear" data-clear-cop-field-in data-name="{{=it.name}}">Clear</a>{{??}}<span class="cop-title">Interventions</span>{{?}}</div><div><input type=hidden class="field" name="{{=it.name}}"  /><div class="display-field" style="min-height: {{?it.rows}}{{=it.rows}}{{??}}1{{?}}em;">{{?it.isPrintMode}}{{=(it.value || "&nbsp;&nbsp;")}}{{?}}</div></div></div>';
    
    var CopDischargePlanningWidget = function (_AbstractInputWidget) {
        inherits(CopDischargePlanningWidget, _AbstractInputWidget);
    
        function CopDischargePlanningWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, CopDischargePlanningWidget);
    
            console.log('Warning: This widget is deprecated and it will be removed soon.');
    
            var _this = possibleConstructorReturn(this, (CopDischargePlanningWidget.__proto__ || Object.getPrototypeOf(CopDischargePlanningWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.$fieldElement = _this.$widgetElement.find('input.field');
            _this.$fieldDisplayElement = _this.$widgetElement.find('div.display-field');
            return _this;
        }
    
        createClass(CopDischargePlanningWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.$fieldElement.val();
            },
            set: function set$$1(value) {
                this.$fieldElement.val(value);
                this.$fieldDisplayElement.text(value);
            }
        }], [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('change', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    changeCallback('' + $(event.target).attr('name'), '' + $(event.target).val());
                });
                $rootElement.on('click', 'a[data-cop-title-dp]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("OpenPOCPopup", "DischargePlanning", {
                        'internalSectionNames': 'discharge_planning',
                        'activeSection': 'discharge_planning',
                        'includeType': undefined
                    });
                });
                $rootElement.on('click', 'a[data-clear-cop-field-dp]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    customEventsCallback("ClearPOCField", "Discharge Planning", {
                        'internalSectionName': 'discharge_planning'
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = CopDischargePlanningWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return CopDischargePlanningWidget;
    }(AbstractInputWidget);
    CopDischargePlanningWidget.compiledTemplate = null;
    CopDischargePlanningWidget.templateString = '<div id="{{=it.name}}" class="jf-cop cop-discharge-planning {{?it.class}} {{=it.class}}{{?}}"><div>{{? !it.isPrintMode && !it.disabled}}<a href="#" class="cop-title" data-cop-title-dp="Discharge Planning">Discharge Planning</a><a href="#" class="clear" data-clear-cop-field-dp data-name="{{=it.name}}">Clear</a>{{??}}<span class="cop-title">Discharge Planning</span>{{?}}</div><div><input type=hidden class="field" name="{{=it.name}}"  /><div class="display-field" style="min-height: {{?it.rows}}{{=it.rows}}{{??}}1{{?}}em;">{{?it.isPrintMode}}{{=(it.value || "&nbsp;&nbsp;")}}{{?}}</div></div></div>';
    
    var InlineReportWidget = function (_AbstractActionWidget) {
        inherits(InlineReportWidget, _AbstractActionWidget);
    
        function InlineReportWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, InlineReportWidget);
    
            var _this = possibleConstructorReturn(this, (InlineReportWidget.__proto__ || Object.getPrototypeOf(InlineReportWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.widgetDefine = {};
            _this.widgetDefine = widgetDefinition;
            return _this;
        }
    
        createClass(InlineReportWidget, null, [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('click', 'a[data-inline-report-go]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    var target = $(event.target);
                    var reportName = target.attr('data-inline-report-go');
                    var maxResults = target.attr('max-results');
                    customEventsCallback("OpenInlineReport", "InlineReport", {
                        'name': reportName,
                        'maxResults': maxResults
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = InlineReportWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return InlineReportWidget;
    }(AbstractActionWidget);
    InlineReportWidget.compiledTemplate = null;
    InlineReportWidget.templateString = '<a href="#" class="inline-report" title="View Historical Data: {{=it.name}}" data-inline-report-go="{{=it.name}}" max-results="{{=it.maxResults}}">{{=it.name}}</a>';
    
    var self$1 = void 0;
    var width = void 0;
    var spacing = void 0;
    var inputs = void 0;
    // Mock input for wound adddendum widget
    // {
    //   "type": "wound-addendum",
    //   "key": "",
    //   "input": false,
    //   "class": "",
    //   "inputs": "12",
    //   "spacing": "5",
    //   "digitWidth": "15"
    // }
    var WoundAddendumWidget = function (_AbstractCompositeWid) {
        inherits(WoundAddendumWidget, _AbstractCompositeWid);
    
        function WoundAddendumWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, WoundAddendumWidget);
    
            var _this = possibleConstructorReturn(this, (WoundAddendumWidget.__proto__ || Object.getPrototypeOf(WoundAddendumWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.curDiv = null;
            _this.x = 0;
            _this.y = 0;
            _this.dx = 0;
            _this.dy = 0;
            _this.root = $rootElement;
            _this.widgetDefinition = widgetDefinition;
            self$1 = _this;
            return _this;
        }
    
        createClass(WoundAddendumWidget, [{
            key: "getImageBoundingClientRect",
            value: function getImageBoundingClientRect() {
                self$1.boundingRect = this.$widgetElement.find(".wound_addendum")[0].getBoundingClientRect();
            }
        }, {
            key: "mouseMove",
            value: function mouseMove(event) {
                if (self$1.curDiv) {
                    self$1.getPos(event);
                    self$1.curDiv.style.top = self$1.y - self$1.dy + "px";
                    self$1.curDiv.style.left = self$1.x - self$1.dx + "px";
                    $(self$1.root[0]).css({ opacity: 0.99 });
                    setTimeout(function () {
                        $(self$1.root[0]).css({ opacity: 1 });
                    });
                }
            }
        }, {
            key: "mouseDown",
            value: function mouseDown(event) {
                if (self$1.curDiv) {
                    self$1.moveUp();
                }
                WoundAddendumWidget.preventDefaultPropagations(event);
                self$1.curDiv = this;
                self$1.getPos(event);
                self$1.dx = self$1.x - parseInt(self$1.curDiv.style.left, 10);
                self$1.dy = self$1.y - parseInt(self$1.curDiv.style.top, 10);
            }
        }, {
            key: "moveToDefaultPosition",
            value: function moveToDefaultPosition(element) {
                if (element) {
                    var id = element && element.id.split("_")[2];
                    element.style.top = 0;
                    element.style.left = (id < 10 ? (id - 1) * (width + spacing) : Math.max(10 - 1, 0) * (width + spacing) + (id - Math.max(10, 1)) * (width * 2 + spacing)) + "px";
                    var updatedValue = {
                        left: element.style.left,
                        top: element.style.top
                    };
                    self$1.updateValue(id, updatedValue);
                    self$1.curDiv = undefined;
                }
            }
        }, {
            key: "moveUp",
            value: function moveUp() {
                if (self$1.curDiv) {
                    self$1.getImageBoundingClientRect();
                    var imgBounding = self$1.boundingRect;
                    var childBounding = self$1.curDiv.getBoundingClientRect();
                    var id = self$1.curDiv && self$1.curDiv.id.split("_")[2];
                    var updatedValue = void 0;
                    // Checking if the elements are drop within the image boundary.
                    if (childBounding.left >= imgBounding.left && childBounding.right <= imgBounding.right && childBounding.top >= imgBounding.top && childBounding.bottom <= imgBounding.bottom) {
                        updatedValue = {
                            left: self$1.curDiv.style.left,
                            top: self$1.curDiv.style.top
                        };
                        self$1.updateValue(id, updatedValue);
                        self$1.curDiv = undefined;
                    } else {
                        // resetting the elements position to its default position
                        self$1.moveToDefaultPosition(self$1.curDiv);
                    }
                }
            }
            /**
             *
             * @param key datastore key which is to be updated
             * @param value value to be updated
             */
    
        }, {
            key: "updateValue",
            value: function updateValue(key, value) {
                self$1.val["XLeft" + key] = value.left;
                self$1.val["XTop" + key] = value.top;
                self$1.changeCallback("XLeft" + key, "" + value.left);
                self$1.changeCallback("XTop" + key, "" + value.top);
            }
        }, {
            key: "getPos",
    
            /**
             * Collects the co-ordinates of the cursor or touch.
             * @param e event
             */
            value: function getPos(e) {
                var scale = this.pinch && this.pinch.scale || 1;
                var touches = e.originalEvent.changedTouches && e.originalEvent.changedTouches[0];
                // collecting co-ordinate in touch devices
                if (touches && e.originalEvent.changedTouches.length === 1) {
                    scale = scale < 1 ? 1 : scale;
                    /*
                     scale = actual scaling value of the screen.
                     So dividing the co-ordinates by scale value
                     will return the exact co-ordinates.
                    */
                    self$1.x = touches.pageX / scale;
                    self$1.y = touches.pageY / scale;
                } else if (!touches) {
                    // collecting co-ordinate in non touch devices
                    self$1.x = e.clientX;
                    self$1.y = e.clientY;
                }
            }
        }, {
            key: "doNotAllow",
            value: function doNotAllow(e) {
                if (e.preventDefault) e.preventDefault();
                return false;
            }
        }, {
            key: "clearImage",
    
            /**
             * Reset all th elements to the default position
             */
            value: function clearImage() {
                for (var i = 0; i < inputs; i++) {
                    var elem = this.$widgetElement.find(".wound_number_" + (i + 1))[0];
                    var left = (i + 1 < 10 ? i * (width + spacing) : Math.max(10 - 1, 0) * (width + spacing) + (i + 1 - Math.max(10, 1)) * (width * 2 + spacing)) + "px";
                    elem.style.top = "0px";
                    elem.style.left = left;
                    var updatedValue = {
                        left: "" + left,
                        top: "0px"
                    };
                    this.updateValue("" + (i + 1), updatedValue);
                }
            }
        }, {
            key: "value",
            get: function get$$1() {
                return this.val;
            }
            /**
             * Set the value and the left and top position for the
             * elements in the ui.
             */
            ,
            set: function set$$1(values) {
                this.val = (typeof values === "undefined" ? "undefined" : _typeof(values)) === "object" ? values : {};
                var length = Object.keys(this.val).length / 2;
                for (var counter = 1; counter <= length; counter++) {
                    var elem = this.$widgetElement.find(".wound_number_" + counter)[0];
                    elem.style.top = values["XTop" + counter] || elem.style.top;
                    elem.style.left = values["XLeft" + counter] || elem.style.left;
                }
            }
            /**
             * Return the possible inputs for this widget based on
             * the number of inputs
             * @param counts
             */
    
        }], [{
            key: "getInputFields",
            value: function getInputFields(widgetDefinition) {
                var inputValues = [];
                var count = widgetDefinition.inputs;
                for (var i = 1; i <= count; i++) {
                    inputValues.push("XLeft" + i);
                    inputValues.push("XTop" + i);
                }
                return inputValues;
            }
        }, {
            key: "initializeWidget",
            value: function initializeWidget($rootElement, changeCallback) {
                self$1.changeCallback = changeCallback;
                setTimeout(function () {
                    self$1.getImageBoundingClientRect();
                }, 400);
                if (!(self$1.widgetDefinition.isPrintMode || self$1.widgetDefinition.disabled)) {
                    $rootElement.on("click touchstart", ".clear-image", function (event) {
                        WoundAddendumWidget.preventDefaultPropagations(event);
                        self$1.clearImage();
                    });
                    $rootElement.on("resize", function (event) {
                        self$1.getImageBoundingClientRect();
                    });
                    $rootElement.on("mousemove touchmove", self$1.mouseMove);
                    $rootElement.on("mousedown touchstart", ".woundNumber", self$1.mouseDown);
                    $rootElement.on("mouseup touchend", self$1.moveUp);
                    $rootElement.on("dragstart", ".woundNumber", self$1.doNotAllow);
                    document.addEventListener("pinch", function (event) {
                        self$1.pinch = event.detail;
                    });
                } else {
                    $rootElement.off("click touchstart", ".clear-image");
                    $rootElement.off("resize mousemove touchmove mouseup touchend");
                    $rootElement.off("mousedown touchstart", ".woundNumber");
                    $rootElement.find(".wound-hide-readonly").hide();
                }
            }
        }, {
            key: "preventDefaultPropagations",
            value: function preventDefaultPropagations(event) {
                event.preventDefault();
            }
        }, {
            key: "getHTMLString",
            value: function getHTMLString(widgetDefinition) {
                width = parseInt(widgetDefinition.digitWidth.toString());
                spacing = parseInt(widgetDefinition.spacing.toString());
                inputs = parseInt(widgetDefinition.inputs.toString());
                widgetDefinition.woundNumbers = [];
                for (var i = 0; i < widgetDefinition.inputs; i++) {
                    var left = (i + 1 < 10 ? i * (width + spacing) : Math.max(10 - 1, 0) * (width + spacing) + (i + 1 - Math.max(10, 1)) * (width * 2 + spacing)) + "px";
                    widgetDefinition.woundNumbers.push({
                        top: 0,
                        left: left,
                        width: (i + 1 >= 10 ? 2 : 1) * width + "px"
                    });
                }
                return WoundAddendumWidget.renderTemplate(widgetDefinition);
            }
        }]);
        return WoundAddendumWidget;
    }(AbstractCompositeWidget);
    WoundAddendumWidget.compiledTemplate = null;
    WoundAddendumWidget.templateString = "\n  <div id=\"{{=it.name}}\">\n    <div class=\"text-center wound-hide-readonly\">Drag and drop a number to the appropriate wound location.<br>\n    </div>\n    <div class=\"divImageMap {{=it.imgType}}\">\n      <div class=\"wound_addendum {{=it.imgType}}\" draggable=\"false\" border=\"0\">\n      </div>\n      <div class=\"number-container\">\n        {{~it.woundNumbers :woundNumber:index}}\n        <div class=\"woundNumber wound_number_{{=index+1}}\"\n            id=\"wound_number_{{=index+1}}\"\n            style=\"top:{{=woundNumber.top}};\n            left:{{=woundNumber.left}};\n            width:{{=woundNumber.width}};\n            index:{{=index}};\">\n              {{=index+1}}\n        </div>\n        {{~}}\n      </div>\n    </div>\n    <div class=\"text-center\">\n      <input type=\"button\" class=\"clear-image wound-hide-readonly\" name=\"ResetPositions\" value=\"Clear\">\n    </div>\n  </div>";
    
    var LevelOfCareFields;
    (function (LevelOfCareFields) {
        LevelOfCareFields["ENTRY"] = "entry";
        LevelOfCareFields["START_DATE"] = "startDate";
        LevelOfCareFields["END_DATE"] = "endDate";
    })(LevelOfCareFields || (LevelOfCareFields = {}));
    var LevelOfCareWidget = function (_AbstractActionWidget) {
        inherits(LevelOfCareWidget, _AbstractActionWidget);
    
        function LevelOfCareWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, LevelOfCareWidget);
    
            var _this = possibleConstructorReturn(this, (LevelOfCareWidget.__proto__ || Object.getPrototypeOf(LevelOfCareWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.EVENT_SET = 'LevelOfCare:Set';
            _this.$entryElement = _this.$widgetElement.find('.current-entry');
            _this.$startDateElement = _this.$widgetElement.find('[name="currentLevelOfCare.startDate"]');
            _this.$endDateElement = _this.$widgetElement.find('[name="currentLevelOfCare.endDate"]');
            return _this;
        }
        /**
         * Set the value and the left and top position for the
         * elements in the ui.
         */
    
    
        createClass(LevelOfCareWidget, [{
            key: "setValue",
            value: function setValue(values) {
                this.val = values || {};
                var isPrintMode = this.widgetDefinition.isPrintMode;
                if (LevelOfCareFields.ENTRY in this.val) {
                    this.$entryElement.text(this.val[LevelOfCareFields.ENTRY]);
                }
                if (LevelOfCareFields.START_DATE in this.val) {
                    isPrintMode ? this.$startDateElement.text(this.val[LevelOfCareFields.START_DATE]) : this.$startDateElement.val(this.val[LevelOfCareFields.START_DATE]);
                }
                if (LevelOfCareFields.END_DATE in this.val) {
                    isPrintMode ? this.$endDateElement.text(this.val[LevelOfCareFields.END_DATE]) : this.$endDateElement.val(this.val[LevelOfCareFields.END_DATE]);
                }
            }
        }, {
            key: "triggerHandler",
            value: function triggerHandler(eventName, data) {
                switch (eventName) {
                    case this.EVENT_SET:
                        this.setValue(data);
                        break;
                }
            }
        }], [{
            key: "getHTMLString",
            value: function getHTMLString(widgetDefinition) {
                var htmlString = LevelOfCareWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return LevelOfCareWidget;
    }(AbstractActionWidget);
    LevelOfCareWidget.templateString = "\n  <div id=\"{{=it.name}}\">\n    <div id=\"{{=it.name}}content\">\n      <span class=\"jf-textfield\"> Level of Care:</span> <span class=\"current-entry\" type=\"text\" disabled=\"true\" class=\"f-bold\"></span>\n      <span class=\"jf-textfield\"> <span class=\"loc-entry\">Start Date: </span>\n        {{?it.isPrintMode}}<span class=\"print-field\" name=\"currentLevelOfCare.startDate\"></span>{{?}}\n        {{? !it.isPrintMode}}<input class=\"field\" type=\"text\" disabled=\"true\" name=\"currentLevelOfCare.startDate\">{{?}}\n      </span>\n      <span class=\"jf-textfield\"><span class=\"loc-entry\"> End Date: </span> \n        {{?it.isPrintMode}}<span class=\"print-field\" name=\"currentLevelOfCare.endDate\"></span>{{?}}\n        {{? !it.isPrintMode}}<input class=\"field\" type=\"text\" disabled=\"true\" name=\"currentLevelOfCare.endDate\">{{?}}\n      </span>\n    </div>\n  </div>";
    
    var LocationOfCareWidget = function (_AbstractActionWidget) {
      inherits(LocationOfCareWidget, _AbstractActionWidget);
    
      function LocationOfCareWidget() {
        classCallCheck(this, LocationOfCareWidget);
        return possibleConstructorReturn(this, (LocationOfCareWidget.__proto__ || Object.getPrototypeOf(LocationOfCareWidget)).apply(this, arguments));
      }
    
      return LocationOfCareWidget;
    }(AbstractActionWidget);
    
    var COPWidget = function (_AbstractCompositeWid) {
        inherits(COPWidget, _AbstractCompositeWid);
    
        function COPWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, COPWidget);
    
            var _this = possibleConstructorReturn(this, (COPWidget.__proto__ || Object.getPrototypeOf(COPWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.widgetDefinition = widgetDefinition;
            _this.$fieldDisplayElement = _this.$widgetElement.find('div.display-field');
            return _this;
        }
    
        createClass(COPWidget, [{
            key: 'value',
            get: function get$$1() {
                return this.val;
            },
            set: function set$$1(valueObject) {
                if (valueObject && (typeof valueObject === 'undefined' ? 'undefined' : _typeof(valueObject)) === 'object') {
                    var sectionName = this.widgetDefinition.section;
                    var value = valueObject['cp_' + sectionName] ? valueObject['cp_' + sectionName] : '';
                    this.val = valueObject;
                    this.$fieldDisplayElement.text(value.toString());
                }
            }
        }], [{
            key: 'getInputFields',
            value: function getInputFields(widgetDefinition) {
                var inputValues = [];
                var sectionName = widgetDefinition.section;
                inputValues.push('cp_' + sectionName);
                inputValues.push('cp_' + sectionName + '_module_items');
                return inputValues;
            }
        }, {
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('click', 'a[data-cop-title-go]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    var target = $(event.target);
                    var title = target.attr('data-cop-title-go');
                    var includeType = target.attr('include-type');
                    var sectionName = target.attr('section');
                    customEventsCallback("OpenPOCPopup", title, {
                        'internalSectionNames': sectionName,
                        'activeSection': sectionName,
                        'includeType': includeType
                    });
                });
                $rootElement.on('click', 'a[data-clear-cop-field-go]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    var target = $(event.target);
                    var title = target.attr('data-cop-title-go');
                    var sectionName = target.attr('section');
                    customEventsCallback("ClearPOCField", title, {
                        'internalSectionName': sectionName
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = COPWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return COPWidget;
    }(AbstractCompositeWidget);
    COPWidget.compiledTemplate = null;
    COPWidget.templateString = '\n    <div id="{{=it.name}}" class="jf-cop {{?it.class}} {{=it.class}}{{?}}">\n        <div>\n            {{?!it.isPrintMode && !it.disabled}}\n            <a href="#" class="cop-title" section="{{=it.section}}" include-type="{{=it.includeType}}"\n                data-cop-title-go="{{=it.label}}">{{=it.label}}</a>\n            <a href="#" class="clear" section="{{=it.section}}" include-type="{{=it.includeType}}"\n                data-clear-cop-field-go="{{=it.label}}" data-name="{{=it.name}}">\n                Clear\n            </a>\n            {{??}}\n                <span class="cop-title">{{=it.label}}</span>\n            {{?}}\n        </div>\n        <div>\n            <div class="display-field" style="min-height: {{?it.rows}}{{=it.rows}}{{??}}1{{?}}em;">\n                {{?it.isPrintMode}}{{=(it.value || "&nbsp;&nbsp;")}}{{?}}\n            </div>\n        </div>\n    </div>';
    
    var TaskWidget = function (_AbstractActionWidget) {
        inherits(TaskWidget, _AbstractActionWidget);
    
        function TaskWidget(widgetDefinition, $rootElement) {
            classCallCheck(this, TaskWidget);
    
            var _this = possibleConstructorReturn(this, (TaskWidget.__proto__ || Object.getPrototypeOf(TaskWidget)).call(this, widgetDefinition, $rootElement));
    
            _this.widgetDefine = {};
            _this.widgetDefine = widgetDefinition;
            return _this;
        }
    
        createClass(TaskWidget, null, [{
            key: 'initializeWidget',
            value: function initializeWidget($rootElement, changeCallback, customEventsCallback) {
                $rootElement.on('click', 'button[data-task-go]', function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    event.stopPropagation();
                    var target = $(event.target);
                    var taskTitleName = target.attr('data-task-go');
                    customEventsCallback("OpenTasksPopup", "Tasks", {
                        'name': taskTitleName
                    });
                });
            }
        }, {
            key: 'getHTMLString',
            value: function getHTMLString(widgetDefinition) {
                var htmlString = TaskWidget.renderTemplate(widgetDefinition);
                return htmlString;
            }
        }]);
        return TaskWidget;
    }(AbstractActionWidget);
    TaskWidget.compiledTemplate = null;
    TaskWidget.templateString = '<button title="{{=it.title}}" type="button" class="{{?it.class}} {{=it.class}}{{?}}" data-task-go="{{=it.name}}" >{{=it.title}}</button>';
    
    //Layout Widgets
    
    var parserRegistry = ParserRegistry.instance;
    var widgetRegistry = WidgetRegistry.instance;
    parserRegistry.registerParser('devero', DeveroParser);
    //Input Fields
    widgetRegistry.registerWidget('textfield', TextWidget);
    widgetRegistry.registerWidget('radio', RadioGroupWidget);
    widgetRegistry.registerWidget('checkbox', CheckboxWidget);
    widgetRegistry.registerWidget('textarea', TextareaWidget);
    widgetRegistry.registerWidget('select', SelectWidget);
    widgetRegistry.registerWidget('password', PasswordWidget);
    widgetRegistry.registerWidget('datetime', DateWidget);
    widgetRegistry.registerWidget('hidden', HiddenWidget);
    widgetRegistry.registerWidget('dynamic-select', DynamicSelectWidget); // Dynamic select box widget
    //Special Inputs
    widgetRegistry.registerWidget('cop-eligibility', CopEligibilityWidget);
    widgetRegistry.registerWidget('cop-goals', CopGoalsWidget);
    widgetRegistry.registerWidget('cop-discharge-planning', CopDischargePlanningWidget);
    widgetRegistry.registerWidget('cop-interventions', CopInterventionsWidget);
    widgetRegistry.registerWidget('inline-report', InlineReportWidget);
    widgetRegistry.registerWidget('task', TaskWidget);
    //Layout Fields
    widgetRegistry.registerWidget('table', TableLayoutWidget);
    widgetRegistry.registerWidget('panel', PanelLayoutWidget);
    widgetRegistry.registerWidget('content', ContentLayoutWidget);
    //composite widget
    widgetRegistry.registerWidget('wound-addendum', WoundAddendumWidget);
    widgetRegistry.registerWidget('level-of-care', LevelOfCareWidget);
    widgetRegistry.registerWidget('location-of-care', LocationOfCareWidget);
    widgetRegistry.registerWidget('COP', COPWidget);
    
    exports.JsonForm = JsonForm;
    
    }((this.window = this.window || {}),doT,jQuery,Choices));
    //# sourceMappingURL=json-form-bundle.js.map
    