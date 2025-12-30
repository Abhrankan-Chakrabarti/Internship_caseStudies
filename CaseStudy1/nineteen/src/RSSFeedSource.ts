import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class RSSFeedSource implements NewsSource {
    async fetchArticles() : Promise<string[]>{
        return ["RSS 1 : Article 1", "RSS : Article 2"];
    }
}