"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsAggregator = void 0;
const typedi_1 = require("typedi");
const RSSFeedSource_1 = require("./RSSFeedSource");
let NewsAggregator = class NewsAggregator {
    source;
    // @Inject(() => RSSFeedSource) tells TypeDI which implementation to inject.
    constructor(source) {
        this.source = source;
    }
    async getAllLatestArticles() {
        const articles = await this.source.fetchArticles();
        console.log(articles);
        articles.forEach((article) => console.log(article));
    }
};
exports.NewsAggregator = NewsAggregator;
exports.NewsAggregator = NewsAggregator = __decorate([
    (0, typedi_1.Service)() // Decorator used to register object of the class below it
    ,
    __param(0, (0, typedi_1.Inject)(() => RSSFeedSource_1.RSSFeedSource)),
    __metadata("design:paramtypes", [Object])
], NewsAggregator);
//# sourceMappingURL=NewsAggregator.js.map