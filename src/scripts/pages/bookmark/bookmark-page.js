import {
    generateLoaderAbsoluteTemplate,
    generateStoriesItemTemplate,
    generateStoriesListEmptyTemplate,
    generateStoriesListErrorTemplate,
} from '../../templates';
import BookmarkPresenter from './bookmark-presenter';
import Database from '../../data/database';

export default class BookmarkPage {
    #presenter = null;

    async render() {
        return `
      <section class="container">
        <h1 class="section-title">Daftar Cerita Tersimpan</h1>
 
        <div class="stories-list__container">
          <div id="stories-list"></div>
          <div id="stories-list-loading-container"></div>
        </div>
      </section>
    `;
    }

    async afterRender() {
        this.#presenter = new BookmarkPresenter({
            view: this,
            model: Database,
        });

        await this.#presenter.initialGallery();
    }

    populateBookmarkedStories(message, stories) {
        if (stories.length <= 0) {
            this.populateBookmarkedStoriesListEmpty();
            return;
        }

        const html = stories.reduce((accumulator, story) => {
            const coordinate = [story.lat, story.lon];

            return accumulator.concat(
                generateStoriesItemTemplate({
                    ...story,
                    name: story.name,
                    location: coordinate,
                })
            );
        }, '');

        document.getElementById('stories-list').innerHTML = `
      <div class="stories-list">${html}</div>
    `;
    }

    populateBookmarkedStoriesListEmpty() {
        document.getElementById('stories-list').innerHTML =
            generateStoriesListEmptyTemplate();
    }

    populateBookmarkedStoriesError(message) {
        document.getElementById('stories-list').innerHTML =
            generateStoriesListErrorTemplate(message);
    }

    showStoriesListLoading() {
        document.getElementById('stories-list-loading-container').innerHTML =
            generateLoaderAbsoluteTemplate();
    }

    hideStoriesListLoading() {
        document.getElementById('stories-list-loading-container').innerHTML =
            '';
    }
}
