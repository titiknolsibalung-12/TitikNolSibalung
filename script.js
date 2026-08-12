const details = document.querySelectorAll("details");

details.forEach((target) => {

  target.addEventListener("click", (event) => {
    if (!event.target.closest("summary")) return;

    // Simpan posisi tombol sebelum perubahan
    target.dataset.top = target.getBoundingClientRect().top;
  });

  target.addEventListener("toggle", () => {
    if (!target.open) return;

    const posisiAwal = Number(target.dataset.top);

    // Tutup menu lainnya
    details.forEach((detail) => {
      if (detail !== target) {
        detail.open = false;
      }
    });

    // Kembalikan posisi tombol seperti sebelum diklik
    requestAnimationFrame(() => {
      const posisiSekarang = target.getBoundingClientRect().top;
      const selisih = posisiSekarang - posisiAwal;

      window.scrollBy(0, selisih);
    });
  });

});