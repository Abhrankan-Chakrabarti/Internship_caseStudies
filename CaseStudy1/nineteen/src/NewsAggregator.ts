import { Service, Inject } from "typedi";
import type { NewsSource } from "./NewsSource";
import { RSSFeedSource } from "./RSSFeedSource";
import { APISource } from "./APISource";

@Service() // Decorator used to register object of the class below it
export class  NewsAggregator{
    // @Inject(() => RSSFeedSource) tells TypeDI which implementation to inject.
    constructor(
        @Inject(() => RSSFeedSource) private source : NewsSource
    ) {}
    async getAllLatestArticles() {
        const articles = await this.source.fetchArticles();
        console.log(articles);
        articles.forEach((article) => console.log(article));
    }
}