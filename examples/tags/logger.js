var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'riot-typed'], factory);
    }
})(function (require, exports) {
    "use strict";
    var riot_typed_1 = require('riot-typed');
    var Logger = (function (_super) {
        __extends(Logger, _super);
        function Logger() {
            _super.call(this);
            this.logs = ['line 1', 'line 2'];
        }
        Logger = __decorate([
            riot_typed_1.tag('logger', { template: '<p class="red" each="{ item in logs }">{ item }</p>', css: '.red{color:red;}' }), 
            __metadata('design:paramtypes', [])
        ], Logger);
        return Logger;
    }(riot_typed_1.Tag));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Logger;
});
