
export interface NewsSource {
    fetchArticles() : Promise<string[]>;
}