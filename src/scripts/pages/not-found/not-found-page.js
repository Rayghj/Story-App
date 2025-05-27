export default class NotFoundPage {
    async render() {
        return `
      <section>
        <div class="not-found__page">
          <h1>404 - Halaman Yang Kamu Cari Ditemukan</h1>
          <p>Maaf ya, halaman yang kamu cari tidak ada nih.</p>
          <a href="#/" class="btn">Kembali ke Halaman Utama</a>
        </div>
      </section>
    `;
    }

    async afterRender() {}
}
