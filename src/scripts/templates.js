import { showFormattedDate } from './utils';

export function generateLoaderTemplate() {
    return `
    <div class="loader"></div>
  `;
}

export function generateLoaderAbsoluteTemplate() {
    return `
    <div class="loader loader-absolute"></div>
  `;
}

export function generateMainNavigationListTemplate() {
    return `
    <li><a id="stories-list-button" class="stories-list-button" href="#/">Daftar Cerita</a></li>
    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Tersimpan</a></li>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
    return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="login-button" href="#/login">Login</a></li>
    <li><a id="register-button" href="#/register">Register</a></li>
  `;
}

export function generateAuthenticatedNavigationListTemplate() {
    return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="new-stories-button" class="btn new-stories-button" href="#/new">Buat Cerita Kamu<i></i></a></li>
    <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Keluar</a></li>
  `;
}

export function generateStoriesListEmptyTemplate() {
    return `
    <div id="stories-list-empty" class="stories-list__empty">
      <h2>Tidak ada cerita yang tersedia</h2>
      <p>Saat ini, tidak ada cerita yang dapat ditampilkan.</p>
    </div>
  `;
}

export function generateStoriesListErrorTemplate(message) {
    return `
    <div id="stories-list-error" class="stories-list__error">
      <h2>Terjadi kesalahan pengambilan daftar cerita</h2>
      <p>${message ? message : 'Gunakan jaringan lain atau laporkan error ini.'}</p>
    </div>
  `;
}

export function generateStoriesDetailErrorTemplate(message) {
    return `
    <div id="stories-detail-error" class="stories-detail__error">
      <h2>Terjadi kesalahan pengambilan detail cerita</h2>
      <p>${message ? message : 'Gunakan jaringan lain atau laporkan error ini.'}</p>
    </div>
  `;
}

export function generateStoriesItemTemplate({
    id,
    name,
    description,
    photoUrl,
    createdAt,
    location,
}) {
    return `
    <div tabindex="0" class="story-item" data-storyid="${id}">
      <img class="story-item__image" src="${photoUrl}" alt="${name}">
      <div class="story-item__body">
        <div class="story-item__main">
          <h2 id="story-title" class="story-item__title">${name}</h2>
          <div class="story-item__more-info">
            <div class="story-item__createdat">
              <i class="fa-solid fa-clock"></i> ${showFormattedDate(createdAt, 'id-ID')}
            </div>
            <div class="story-item__location">
               <i class="fa-solid fa-location-dot"></i> ${location}
            </div>
          </div>
        </div>
        <div id="story-description" class="story-item__description">
          ${description}
        </div>
        <div class="story-item__more-info"></div>
        <a class="btn story-item__read-more" href="#/stories/${id}">
          <i class="fa-solid fa-chevron-right"></i> Baca Sekarang
        </a>
      </div>
    </div>
  `;
}

export function generateStoriesDetailTemplate({
    name,
    description,
    photoUrl,
    createdAt,
    lat,
    lon,
    location,
}) {
    const createdAtFormatted = showFormattedDate(createdAt, 'id-ID');
    const imageUrl = photoUrl || 'default-image.jpg';
    const locationDisplay = location;

    return `
    <div class="story-detail__header">
      <h1 id="title" class="story-detail__title">${name}</h1>

      <div class="story-detail__more-info">
        <div class="story-detail__more-info__inline">
          <div class="story-detail__createdat"><i class="fa-solid fa-clock"></i> ${createdAtFormatted}</div>
          <div class="story-detail__location__place-name"><i class="fa-solid fa-location-dot"></i> ${locationDisplay}</div>
        </div>
        <div class="story-detail__more-info__inline">
          <div class="story-detail__location__latitude">Latitude:  ${lat}</div>
          <div class="story-detail__location__longitude">Longitude:  ${lon}</div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="story-detail__images__container">
        <div class="story-detail__images">
          <img class="story-detail__image" src="${imageUrl}" alt="${name}">
        </div>
      </div>
    </div>

    <div class="container">
      <div class="story-detail__body">
        <div class="story-detail__body__description__container">
          <h2 class="story-detail__description__title">Deskripsi </h2>
          <div id="description" class="story-detail__description__body">
            ${description}
          </div>
        </div>
      </div>

      <div class="story-detail__body__map__container">
          <h2 class="story-detail__map__title">Peta Lokasi</h2>
          <div class="story-detail__map__container">
            <div id="map" class="story-detail__map"></div>
            <div id="map-loading-container"></div>
          </div>
        </div>

        <div class="story-detail__actions__buttons">
          <div id="save-actions-container"></div>
        </div>
        

    </div>
  `;
}

export function generateSubscribeButtonTemplate() {
    return `
    <button id="subscribe-button" class="btn subscribe-button">
      Subscribe</i>
    </button>
  `;
}

export function generateUnsubscribeButtonTemplate() {
    return `
    <button id="unsubscribe-button" class="btn unsubscribe-button">
      Unsubscribe</i>
    </button>
  `;
}

export function generateSaveStoryButtonTemplate() {
    return `
    <button id="story-detail-save" class="btn">
      Simpan cerita <i class="far fa-bookmark"></i>
    </button>
  `;
}

export function generateRemoveStoryButtonTemplate() {
    return `
    <button id="story-detail-remove" class="btn">
      Hapus cerita <i class="fas fa-bookmark"></i>
    </button>
  `;
}
