export default class HomePresenter {
    #view;
    #model;

    constructor({ view, model }) {
        this.#view = view;
        this.#model = model;
    }

    async initialGallery() {
        this.#view.showLoading();
        try {
            const response = await this.#model.getAllStories();

            if (!response.ok) {
                console.error('initialGallery: response:', response);
                this.#view.populateStoriesListError(response.message);
                return;
            }

            this.#view.populateStoriesList(
                response.message,
                response.listStory
            );
        } catch (error) {
            console.error('initialGallery: error:', error);
            this.#view.populateStoriesListError(error.message);
        } finally {
            this.#view.hideLoading();
        }
    }
}
