import { storyMapper } from '../../data/api-mapper';

export default class BookmarkPresenter {
    #view;
    #model;

    constructor({ view, model }) {
        this.#view = view;
        this.#model = model;
    }

    async initialGallery() {
        this.#view.showStoriesListLoading();

        try {
            const response = await this.#model.getAllStories();
            const stories = await Promise.all(response.map(storyMapper));

            const message = 'Berhasil mendapatkan daftar cerita tersimpan.';
            this.#view.populateBookmarkedStories(message, stories);
        } catch (error) {
            console.error('initialGallery: error:', error);
            this.#view.populateBookmarkedStoriesError(error.message);
        } finally {
            this.#view.hideStoriesListLoading();
        }
    }
}
