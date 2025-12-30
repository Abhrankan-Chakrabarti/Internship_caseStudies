import { Service } from "typedi";
import { NewsSource } from "./NewsSource";
@Service()
export class APISource implements NewsSource {
    async fetchArticles(){
        return ["API 1 : Article A", "API 2 : Article B"];
    }
}
