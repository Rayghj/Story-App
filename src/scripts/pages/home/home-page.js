import {
    generateLoaderAbsoluteTemplate,
    generateStoriesItemTemplate,
    generateStoriesListEmptyTemplate,
    generateStoriesListErrorTemplate,
} from '../../templates';
import HomePresenter from './home-presenter';
import * as StoryAPI from '../../data/api';

export default class HomePage {
    #presenter = null;

    async render() {
        return `
      <section class="container">
        <h1 class="section-title">Daftar Cerita <i class="fa-solid fa-book-open"></i></h1>

        <div class="stories-list__container">
          <div id="stories-list"></div>
          <div id="stories-list-loading-container"></div>
        </div>
      </section>
    `;
    }

    async afterRender() {
        this.#presenter = new HomePresenter({
            view: this,
            model: StoryAPI,
        });

        await this.#presenter.initialGallery();
    }

    populateStoriesList(message, stories) {
        if (stories.length <= 0) {
            this.populateStoriesListEmpty();
            return;
        }

        const html = stories
            .filter((story) => story.lat != null && story.lon != null)
            .reduce((accumulator, story) => {
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

    populateStoriesListEmpty() {
        document.getElementById('stories-list').innerHTML =
            generateStoriesListEmptyTemplate();
    }

    populateStoriesListError(message) {
        document.getElementById('stories-list').innerHTML =
            generateStoriesListErrorTemplate(message);
    }

    showLoading() {
        document.getElementById('stories-list-loading-container').innerHTML =
            generateLoaderAbsoluteTemplate();
    }

    hideLoading() {
        document.getElementById('stories-list-loading-container').innerHTML =
            '';
    }
}
