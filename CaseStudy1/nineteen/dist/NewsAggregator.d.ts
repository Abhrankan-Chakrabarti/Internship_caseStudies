import type { NewsSource } from "./NewsSource";
export declare class NewsAggregator {
    private source;
    constructor(source: NewsSource);
    getAllLatestArticles(): Promise<void>;
}
//# sourceMappingURL=NewsAggregator.d.ts.map