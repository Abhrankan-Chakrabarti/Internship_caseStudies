"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const NewsAggregator_1 = require("./NewsAggregator");
const APISource_1 = require("./APISource");
const RSSFeedSource_1 = require("./RSSFeedSource");
// this will return object of NewsAggregator
async function wait() {
    await typedi_1.Container.set(RSSFeedSource_1.RSSFeedSource, new APISource_1.APISource());
    let aggregator = typedi_1.Container.get(NewsAggregator_1.NewsAggregator);
    await aggregator.getAllLatestArticles();
    await console.log(typedi_1.Container.get(RSSFeedSource_1.RSSFeedSource));
}
wait();
// Container.rebind<NewsSource>(TYPES.NewsSource).to(APISource);
/*
Output
    [ 'API 1 : Article A', 'API 2 : Article B' ]
    API 1 : Article A
    API 2 : Article B
    APISource {}
*/ 
//# sourceMappingURL=index.js.map