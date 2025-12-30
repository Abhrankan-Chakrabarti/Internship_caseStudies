import "reflect-metadata";

import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { APISource } from "./APISource";
import { NewsSource } from "./NewsSource";
import { RSSFeedSource } from "./RSSFeedSource";

// this will return object of NewsAggregator
async function wait(){
    await Container.set(RSSFeedSource, new APISource());
    let aggregator = Container.get(NewsAggregator);
    await aggregator.getAllLatestArticles();
    await console.log(Container.get(RSSFeedSource));
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