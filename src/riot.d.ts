/**
* obserable object
*/
declare interface RiotObservable {
  /**
  * add event listeners
  */
  on(events: string, handler: Function): RiotObservable;

  /**
  * add event listeners that will be triggered only once
  */
  one(events: string, handler: Function): RiotObservable;

  /**
  * remove event listeners
  */
  off(events: string, handler?: Function): RiotObservable;

  /**
  * trigger a event by event names
  */
  trigger(events: string, ...data: any[]): RiotObservable;
}

/**
* HTMLElement that riot tag mounted on
*/
declare interface RiotHtmlElement extends HTMLElement {
  /**
  * riot tag instance attached on current html element
  */
  _tag?: RiotTag;
}

/**
* riot tag
*/
declare interface RiotTag extends RiotObservable {
  isMounted: boolean;
  /**
  * passed in options
  */
  opts: Object;

  /**
  * the html element current tag instance attached on
  */
  root: RiotHtmlElement;

  /**
  * parent tag
  */
  parent?: RiotTag;

  /**
  * child tags
  */
  tags: { [tagNameOrNameOnTheTag: string]: (RiotTag | Array<RiotTag>) };

  /**
   * refs to HTML Element or riot tags
   */
  refs: {
    [refNameOnTheElementOrTag: string]: (HTMLElement | RiotTag | Array<HTMLElement | RiotTag>)
  }

  /**
  * apply update to trigger ui changes
  */
  update(data?: any);

  /**
  * unmount the tag
  */
  unmount(): void;

  /**
  * unmount the tag but keep the root element
  */
  unmount(keepTheParent: boolean): void;

  /**
  * mixin registered mixin object or given mixin object
  */
  mixin(...mixins: Array<string | { init: Function }>): void;
}

/**
 * Note: route has been separated from riot since riot@3.0.0. You should import riot-route if you want to use it.
 */
declare interface RiotRouterBase {
  /**
  * stop the router
  */
  stop();

  /**
  * define route rule
  */
  (filter: string, fn: Function);
}

/**
* riot route
* Note: route has been separated from riot since riot@3.0.0. You should import riot-route if you want to use it.
*/
declare interface RiotRouter extends RiotRouterBase {
  /**
  * default route if no rule matched
  */
  (fn: Function): void;

  /**
  * route to url
  */
  (url: string, title?: string, shouldReplace?: boolean): void;

  /**
  * start routing
  */
  start(): void;

  /**
  * start routing
  */
  start(autoExec: boolean): void;

  /**
  * create sub router
  */
  create(): RiotRouterBase;

  /**
  * query parameters parsed from the url for current working route rule
  */
  query(): any;

  /**
  * set base url for router
  */
  base(baseUrl: string): void;

  /**
  * set custom parsers for router
  */
  parser(first: (path: string) => string, second?: (path: string, filter: string) => string);
}

declare namespace riot {
  export var version: string;
  export var settings: {
    brackets: string;
  };
  /**
  * make object observable or create a new observable object
  */
  export function observable(obj?: any): RiotObservable;

  /**
  * mount tags by selector, if element has riot-tag attribute or tagName of element is registered
  */
  export function mount(selector: string, opts?: any): RiotTag[];

  /**
  * mount specified tags by selector
  */
  export function mount(selector: string, tagName: string, opts?: any): RiotTag[];

  export function mount(element: HTMLElement, tagName: string, opts?: any): RiotTag[];

  export function tag(tagName: string, html: string, init?: (opts: any) => any): string;

  export function tag(tagName: string, html: string, css?: string, init?: (opts: any) => any): string;

  export function tag(tagName: string, html: string, css?: string, attrs?: string, init?: (opts: any) => any): string;

  /**
  * register named mixin object
  * usage:
  *   riot.mixin('namedMixin', mixinobj);
  *   ...
  *   <myTag>
  *       this.mixin('namedMixin');
  *   </myTag>
  */
  export function mixin(name: string, mixinObj: { init: Function });

  /**
  * register global mixin object, so that all tags will mixin this object automatically
  * note: this function added since 2.3.16
  */
  export function mixin(mixinObj: { init: Function });

  /**
  * forcely update all mounted riot tags
  */
  export function update(): void;

  /**
  * only work on nodejs
  * usage:
  *   timer = require('timer.tag');
  *   html = riot.render(timer, data);
  */
  export function render(tagText: string, data?: any): string;

  /**
  * Note: since riot@3.0.0, the exposed Tag class is actually not the base class for riot tags
  */
  export class Tag{
    constructor(el: HTMLElement, opts?: any)
    
    /**
     * tag name
     */
    name: string;

    tmpl: string;

    attrs: string;

    css: string;

    onCreate(opts):void;

    mount():void;
  }

  export var route: RiotRouter;
}

declare module "riot" {
  export = riot;
}
