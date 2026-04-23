"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WA_BASE = "https://wa.me/6285608537600";
const WA_KONSULTASI = `${WA_BASE}?text=Halo%20Good.code%2C%20saya%20ingin%20konsultasi%20soal%20website%20untuk%20bisnis%20saya`;
const WA_DUKUNGAN = `${WA_BASE}?text=Halo%20Good.code%2C%20saya%20ingin%20diskusi%20dukungan%2012%20bulan%20setelah%20website%20live`;
const WA_FAQ = `${WA_BASE}?text=Halo%20Good.code%2C%20saya%20punya%20pertanyaan%20tentang%20jasa%20website%20kamu`;

const TICKER_ITEMS = [
  "Ecommerce Custom", "Ongkir Otomatis", "Payment Gateway",
  "Dashboard Admin", "Kedaulatan Digital UMKM", "30+ Kurir Terintegrasi", "Tracking Pengiriman",
];

const PROB_CARDS = [
  {
    n: "01 ·",
    title: <>Platform yang harusnya bantu, <span className="prob-hot prob-pulse">malah makan duluan</span></>,
    body: <>Setiap transaksi <span className="prob-hot">dipotong komisi</span>. <span className="prob-key">Iklan makin mahal</span>. Flash sale ditekan terus. Makin keras kamu kerja, <span className="prob-hot">makin besar yang diambil platform</span>.</>,
  },
  {
    n: "02 ·",
    title: <>Brand kamu <span className="prob-hot">tidak terlihat</span>, hanya produknya</>,
    body: <>Di marketplace semua halaman terlihat sama. Pembeli <span className="prob-key">bandingkan harga</span>, <span className="prob-hot">bukan nilai brand</span>. Susah bangun loyalitas kalau identitas kamu tenggelam di antara ribuan toko.</>,
  },
  {
    n: "03 ·",
    title: <>Kamu <span className="prob-hot">tidak kenal siapa yang beli</span> produkmu</>,
    body: <>Nama, nomor, histori pembelian — <span className="prob-hot">semua dikunci rapat</span> oleh platform. Mau follow up? <span className="prob-key">Tidak bisa</span>. Mau broadcast promo? <span className="prob-key">Tidak bisa</span>.</>,
  },
  {
    n: "04 ·",
    title: <>Semua effort kamu <span className="prob-hot">membesarkan platform</span>, <span className="prob-key">bukan brand</span></>,
    body: <>Konten tiap hari, followers IG ribuan — tapi semua traffic akhirnya diarahkan ke Shopee. Kamu yang capek, <span className="prob-hot prob-pulse">platform yang panen</span>.</>,
  },
];

const SOL_CARDS = [
  { arrow: "→ yourbrand.com", title: "Alamat toko yang benar-benar milikmu", desc: "Bukan username di platform orang lain. Domain atas nama kamu, bisa dibawa ke mana saja, tidak bisa diambil siapapun." },
  { arrow: "→ Tampilan sesuai karakter brand", title: "Desain yang mencerminkan produkmu", desc: "Saya rancang tampilannya sesuai tone brand kamu — bukan template massal yang dipakai ribuan toko lain di internet." },
  { arrow: "→ Transfer, QRIS, semua e-wallet", title: "Pembeli bisa langsung bayar, tanpa drama", desc: 'Tidak ada lagi "transfer dulu ya, nanti saya konfirmasi." Semua metode pembayaran populer Indonesia sudah terintegrasi dari awal.' },
  { arrow: "→ Data masuk ke dashboard kamu", title: "Kenali siapa yang beli produkmu", desc: "Setiap pembeli meninggalkan jejaknya di sistem kamu. Kamu bisa follow up, broadcast promo, bangun repeat order kapan pun." },
  { arrow: "→ 30+ kurir, hitung sendiri", title: "Ongkir transparan sejak awal checkout", desc: "Biaya kirim muncul otomatis sebelum pembeli bayar. Tidak ada yang kaget, tidak ada yang batal di last minute karena ongkir." },
  { arrow: "→ Tanpa sentuh kode sama sekali", title: "Kamu yang kelola, bukan saya terus", desc: "Dashboard admin dirancang untuk non-teknis. Tambah produk, proses order, cetak resi — kamu bisa lakukan sendiri setelah satu sesi onboarding." },
];

const STEPS = [
  { n: "1", dur: "± 30 menit", sub: "01/04", title: "Ngobrol dulu via WhatsApp", desc: "Ceritakan bisnis dan kebutuhanmu. Tidak ada form panjang, tidak ada presentasi sales. Saya dengarkan, saya catat, kita tentukan arah bersama.", out: "✓ Kebutuhan tercatat, paket ditentukan" },
  { n: "2", dur: "3–5 hari kerja", sub: "02/04", title: "Saya siapkan konsep & rancangan awal", desc: "Berdasarkan brief, saya rancang konsep tampilan dan struktur toko. Kamu review, kasih masukan, kita sepakati arahnya sebelum mulai bangun.", out: "✓ Mockup dikirim untuk review" },
  { n: "3", dur: "2–3 minggu", sub: "03/04", title: "Website dibangun", desc: "Dari katalog, checkout, hingga dashboard admin — semua dikerjakan. Kamu bisa pantau progress dan kasih feedback di setiap tahap.", out: "✓ Website siap untuk review final" },
  { n: "4", dur: "3–5 hari kerja", sub: "04/04", title: "Live, dan kamu siap pegang sendiri", desc: "Revisi terakhir, testing menyeluruh, lalu website live di domain kamu. Saya temenin satu sesi onboarding sampai kamu nyaman kelola sendiri.", out: "✓ Toko online live & kamu bisa mandiri" },
];

const DUK_LIST = [
  "Update konten visual sesuai momen campaign: banner Ramadhan, promo gajian, Harbolnas, dan event musiman lain.",
  "Penyesuaian konten ringan: copy, gambar, headline, susunan section, dan elemen promosi.",
  "Troubleshooting teknis jika ada kendala operasional agar website tetap stabil.",
  "Konsultasi via WhatsApp untuk diskusi kebutuhan campaign, prioritas update, atau evaluasi alur belanja.",
  "Support tetap berjalan selama tidak ada penambahan fitur baru atau perubahan scope besar.",
];

const VS_ROWS: [string, React.ReactNode, React.ReactNode, React.ReactNode][] = [
  ["Biaya per transaksi", <span key="a" className="check">Gratis</span>, <span key="b" className="cross">5–12% dipotong</span>, <span key="c" className="mid">Gratis</span>],
  ["Domain atas nama sendiri", <span key="a" className="check">✓ Termasuk</span>, <span key="b" className="cross">✗ Tidak ada</span>, <span key="c" className="mid">Biaya tambahan</span>],
  ["Data pembeli milik kamu", <span key="a" className="check">100% milikmu</span>, <span key="b" className="cross">Dikunci platform</span>, <span key="c" className="mid">Milikmu</span>],
  ["Perlu skill teknis", <span key="a" className="check">Tidak, saya setup</span>, <span key="b" className="check">Tidak</span>, <span key="c" className="cross">Lumayan tinggi</span>],
  ["Support bahasa Indonesia", <span key="a" className="check">Chat WA langsung</span>, <span key="b" className="mid">Tiket & bot</span>, <span key="c" className="cross">Forum bahasa Inggris</span>],
  ["Ongkir otomatis 30+ kurir", <span key="a" className="check">✓ Termasuk</span>, <span key="b" className="mid">Bawaan platform</span>, <span key="c" className="mid">Perlu setup sendiri</span>],
  ["Struktur biaya", <span key="a" className="check">Jelas dari awal</span>, <span key="b" className="cross">Komisi terus jalan</span>, <span key="c" className="mid">Langganan + add-on</span>],
];

const TESTI = [
  { av: "P", name: "Piamour Studios", sub: "Fashion wanita · Semarang", q: "\"Dulu tiap bulan deg-degan lihat potongan komisi Shopee. Sekarang semua transaksi masuk penuh, data pembeli ada di tangan saya, dan saya bisa follow up sendiri kapan pun. Rasanya beda banget.\"", result: "Checkout langsung tanpa perantara platform", delay: "" },
  { av: "A", name: "Aruna Cloth", sub: "Batik modern · Yogyakarta", q: "\"Yang saya takutin dulu adalah ribet ngurusnya. Ternyata setelah onboarding, saya bisa tambah produk dan proses order sendiri. Dashboard-nya beneran mudah dipakai.\"", result: "Kelola toko mandiri tanpa bantuan teknis", delay: " d1" },
  { av: "N", name: "Nara Studio", sub: "Aksesoris handmade · Bandung", q: "\"Tiga minggu dari pertama ngobrol sampai website live. Cepat, komunikasinya enak, dan hasilnya jauh di atas ekspektasi saya.\"", result: "Live dalam 3 minggu dari konsultasi pertama", delay: " d2" },
];

const FAQ_ITEMS = [
  { q: "Berapa lama pengerjaan website saya?", a: "Rata-rata 2–4 minggu dari konsultasi pertama sampai live — tergantung jumlah produk dan seberapa kustom tampilannya. Mockup dikirim di minggu pertama, pengerjaan di minggu kedua dan ketiga, review final sebelum live. Timeline pastinya saya kirim setelah ngobrol dan tahu kebutuhan kamu." },
  { q: "Apakah saya perlu paham teknis?", a: "Tidak perlu sama sekali. Domain, database, payment gateway — semua saya yang urus. Kamu hanya perlu approve tampilan, kirim foto produk, dan ikut satu sesi onboarding singkat untuk belajar pakai dashboard admin." },
  { q: "Bisa tetap jalan bersamaan dengan Shopee?", a: "Bisa, dan justru itu yang saya rekomendasikan di awal. Tidak perlu tutup toko Shopee dulu. Banyak brand mulai keduanya paralel, lalu perlahan mengalihkan fokus ke website sendiri saat sudah terasa manfaatnya." },
  { q: "Metode pembayaran apa saja yang bisa dipakai pembeli?", a: "Transfer bank, QRIS, dan e-wallet populer Indonesia — semua sudah terintegrasi lewat payment gateway. Tidak ada setup tambahan dari pihak kamu." },
  { q: "Kalau nanti mau tambah fitur, bisa?", a: "Bisa didiskusikan kapan saja. Beberapa hal bisa ditambah tanpa biaya ekstra dalam periode support, ada yang perlu biaya tambahan untuk fitur yang lebih besar. Semuanya transparan dan disepakati sebelum dikerjakan." },
  { q: "Apakah ada biaya yang muncul setelah website live?", a: "Dari sisi jasa pembuatan, tidak ada. Yang perlu kamu siapkan adalah biaya operasional bulanan sekitar Rp 860rb untuk hosting, database, dan integrasi kurir — dibayar langsung ke masing-masing vendor, bukan ke saya." },
];

export function HomePage() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".gc-home .an").forEach((el) => io.observe(el));
    document.querySelectorAll(".gc-home .hero .an").forEach((el, i) =>
      setTimeout(() => el.classList.add("in"), 60 + i * 120)
    );
    return () => io.disconnect();
  }, []);

  const closeNav = () => setMobileNavOpen(false);

  return (
    <div className="gc-home">
      {/* NAV */}
      <nav className={navScrolled ? "scrolled" : ""} id="nav">
        <div className="container">
          <a href="#" className="nav-logo">Good<span>.</span>code</a>
          <div className="nav-links">
            <a href="#masalah">Masalah</a>
            <Link href="/portfolio">Portofolio</Link>
            <a href="#dukungan">Dukungan</a>
            <a href="#faq">FAQ</a>
            <a href={WA_KONSULTASI} className="nav-cta" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
          </div>
          <button className="nav-burger" onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Menu">☰</button>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mob-nav${mobileNavOpen ? " open" : ""}`}>
        <a href="#masalah" onClick={closeNav}>Masalah</a>
        <Link href="/portfolio" onClick={closeNav}>Portofolio</Link>
        <a href="#dukungan" onClick={closeNav}>Dukungan</a>
        <a href="#faq" onClick={closeNav}>FAQ</a>
        <a href={WA_KONSULTASI} className="mob-cta" target="_blank" rel="noopener noreferrer" onClick={closeNav}>Konsultasi Gratis</a>
      </div>

      {/* § 01 · HERO */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-label an">Spesialis migrasi marketplace ke website sendiri</div>
              <h1 className="an d1">
                Pindah dari marketplace ke website sendiri,<br />
                <em>biar brand, data, dan margin tetap milikmu.</em>
              </h1>
              <p className="hero-sub an d2">
                Saya bantu pemilik toko online migrasi dari Shopee, Tokopedia, dan platform sejenis ke website ecommerce milik sendiri. Lengkap dengan domain brand kamu, checkout otomatis, ongkir terintegrasi, dan alur belanja yang siap dipakai untuk scale jangka panjang.
              </p>
              <div className="hero-actions an d3">
                <a href={WA_KONSULTASI} className="btn-main" target="_blank" rel="noopener noreferrer">💬 Mulai Konsultasi Gratis</a>
                <Link href="/portfolio" className="btn-ghost">Lihat Portofolio →</Link>
              </div>
              <div className="hero-trust an d4">
                <span>Balas &lt; 2 jam</span>
                <span>Tanpa komitmen</span>
                <span>Harga per proyek</span>
              </div>
            </div>
            <div className="hero-img-wrap an d2">
              <Image
                src="/images/hero-image.png"
                alt="Pemilik toko online migrasi dari marketplace ke website sendiri"
                width={600}
                height={420}
                priority
                style={{ width: "100%", height: "auto" }}
              />
              <div className="hero-stat-bar">
                <div className="hero-stat-item">
                  <div className="hero-stat-num">Rp 0</div>
                  <div className="hero-stat-label">Komisi per<br />Transaksi</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-num">100%</div>
                  <div className="hero-stat-label">Data Customer<br />Milikmu</div>
                </div>
                <div className="hero-stat-item">
                  <div className="hero-stat-num">2–4 Minggu</div>
                  <div className="hero-stat-label">Dari Brief<br />ke Live</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-wrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "44px", flexShrink: 0 }}>
              <span className="tick">{t}</span>
              <span className="tick-sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* § 02 · MASALAH */}
      <section className="sec sec-white" id="masalah">
        <div className="container">
          <div className="sec-num an">§ 02 · Masalah</div>
          <div className="s-eye an">Kenapa brand kamu belum tumbuh</div>
          <h2 className="sh an d1">Order masuk, tapi untung<br />kok rasanya <em>segitu-gitu aja?</em></h2>
          <p className="sp an d2">Bukan produknya yang salah. Ini empat masalah yang paling sering saya temui saat brand masih bergantung penuh pada marketplace.</p>
          <div className="prob-grid">
            {PROB_CARDS.map((c, i) => (
              <div key={i} className={`prob-card an${i > 0 ? ` d${i}` : ""}`}>
                <div className="prob-n">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <div className="prob-cta-row">
            <div className="prob-cta-text"><strong>Kenal salah satu dari masalah di atas?</strong> Mari ngobrol — konsultasi gratis, tanpa komitmen.</div>
            <a href={WA_KONSULTASI} className="prob-cta-link" target="_blank" rel="noopener noreferrer">Hubungi via WA →</a>
          </div>
        </div>
      </section>

      {/* § 03 · SOLUSI */}
      <section className="sec" id="solusi">
        <div className="container">
          <div className="sec-num an">§ 03 · Solusi</div>
          <div className="s-eye an">Setelah migrasi ke website sendiri</div>
          <h2 className="sh an d1">Satu website.<br /><em>Semua kendali di tangan kamu.</em></h2>
          <p className="sp an d2">Enam hal ini langsung aktif sejak hari pertama website kamu live setelah migrasi. Semua sudah termasuk dalam pengerjaan, tanpa biaya fitur tersembunyi.</p>
          <div className="sol-grid an d1">
            {SOL_CARDS.map((s, i) => (
              <div key={i} className="sol-card">
                <div className="sol-arrow">{s.arrow}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 04 · PORTO */}
      <section className="sec sec-white" id="porto">
        <div className="container">
          <div className="sec-num an">§ 04 · Portofolio Nyata</div>
          <div className="s-eye an">Sudah jalan, bisa kamu lihat sendiri</div>
          <h2 className="sh an d1">Ini bukan mockup.<br /><em>Website-nya nyata.</em></h2>
          <p className="sp an d2">Bisa dibuka, bisa dirasakan pengalaman belanjaannya langsung dari HP kamu.</p>
          <div className="porto-main">
            {/* Big card — Piamour */}
            <div className="pc big an d1">
              <div className="pc-screen">
                <div className="pc-mock">
                  <div className="pc-bar">
                    <div className="pc-dot r" /><div className="pc-dot y" /><div className="pc-dot g" />
                    <div className="pc-url" />
                  </div>
                  <div className="pc-body">
                    <div className="pc-hero-m">
                      <div className="pc-lines"><div className="pc-l w60" /><div className="pc-l w40" /></div>
                      <div className="pc-cbtn" />
                    </div>
                    <div className="pc-cards">
                      {[
                        "linear-gradient(135deg,#d4c4b0,#a8906e)",
                        "linear-gradient(135deg,#b0c4d4,#6e90a8)",
                        "linear-gradient(135deg,#b0d4b8,#6ea876)",
                      ].map((bg, i) => (
                        <div key={i} className="pc-ci">
                          <div className="pc-ci-img" style={{ background: bg }} />
                          <div className="pc-ci-bd"><div className="pc-ci-l" /><div className="pc-ci-p" /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-info">
                <div className="pc-label">Proyek Aktif · Fashion Wanita · Semarang</div>
                <div className="pc-name">Piamour Studios</div>
                <div className="pc-desc">Sebelumnya hanya mengandalkan Shopee. Sekarang punya toko sendiri — pembeli checkout langsung, ongkir otomatis via Biteship, dan semua data transaksi sepenuhnya ada di tangan mereka.</div>
                <div className="pc-tags">
                  {["Next.js", "Supabase", "Biteship", "Vercel", "Full Ecommerce"].map((t) => (
                    <span key={t} className="pc-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Aruna Cloth */}
            <div className="pc an d1">
              <div className="pc-screen" style={{ height: "160px" }}>
                <div className="pc-mock">
                  <div className="pc-bar"><div className="pc-dot r" /><div className="pc-dot y" /><div className="pc-dot g" /><div className="pc-url" /></div>
                  <div className="pc-body">
                    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                      <div style={{ height: "32px", background: "var(--bg)", borderRadius: "5px" }} />
                      <div style={{ height: "10px", background: "var(--border)", borderRadius: "2px", width: "65%" }} />
                      <div style={{ height: "10px", background: "var(--border)", borderRadius: "2px", width: "45%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-info">
                <div className="pc-label">Demo · Batik Modern · Yogyakarta</div>
                <div className="pc-name">Aruna Cloth</div>
                <div className="pc-desc">Katalog produk yang rapi dan cepat diakses dari HP. Dirancang untuk pembeli yang browse sambil rebahan.</div>
                <div className="pc-tags"><span className="pc-tag">Landing Page</span><span className="pc-tag">Katalog</span></div>
              </div>
            </div>

            {/* Nara Studio */}
            <div className="pc an d2">
              <div className="pc-screen" style={{ height: "160px" }}>
                <div className="pc-mock">
                  <div className="pc-bar"><div className="pc-dot r" /><div className="pc-dot y" /><div className="pc-dot g" /><div className="pc-url" /></div>
                  <div className="pc-body">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      <div style={{ height: "56px", background: "var(--bg)", borderRadius: "5px" }} />
                      <div style={{ height: "56px", background: "var(--bg)", borderRadius: "5px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-info">
                <div className="pc-label">Demo · Aksesoris Handmade · Bandung</div>
                <div className="pc-name">Nara Studio</div>
                <div className="pc-desc">Toko online dengan wishlist dan akun pelanggan — biar pembeli yang belum siap beli sekarang, tidak pergi selamanya.</div>
                <div className="pc-tags"><span className="pc-tag">Ecommerce</span><span className="pc-tag">Wishlist</span></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <Link href="/portfolio" className="btn-main">Lihat Semua Proyek →</Link>
          </div>
        </div>
      </section>

      {/* § 05 · CARA KERJA */}
      <section className="sec" id="proses">
        <div className="container">
          <div className="sec-num an">§ 05 · Alur Kerja</div>
          <div className="s-eye an">Cara kerja</div>
          <h2 className="sh an d1">Dari ngobrol di WhatsApp<br />sampai toko live — <em>empat langkah.</em></h2>
          <p className="sp an d2">Tidak ada proses panjang yang membingungkan. Setiap langkah ada output yang jelas, dan kamu tahu terus sedang di tahap mana.</p>
          <div className="steps-wrap an d1">
            {STEPS.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-left">
                  <div className="step-circle">{s.n}</div>
                  <div className="step-dur">{s.dur}<br />{s.sub}</div>
                </div>
                <div className="step-right">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="step-output">{s.out}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="step-note an">
            <strong>Rata-rata 3–4 minggu.</strong> Dikerjakan langsung oleh saya — tidak di-outsource, tidak ada pihak ketiga, tidak ada biaya yang muncul tiba-tiba.
          </div>
        </div>
      </section>

      {/* § 06 · DUKUNGAN */}
      <section className="sec sec-white" id="dukungan">
        <div className="container">
          <div className="sec-num an">§ 06 · Dukungan Setelah Live</div>
          <div className="s-eye an">Post-launch support</div>
          <h2 className="sh an d1">Website sudah live bukan berarti selesai.<br /><em>Kamu tetap punya partner selama 12 bulan.</em></h2>
          <p className="sp an d2">Setelah website online, saya tetap standby untuk bantu hal-hal operasional harian: update banner momen campaign seperti Ramadhan, penyesuaian konten ringan, troubleshooting, dan konsultasi strategi teknis agar tokomu tetap rapi, cepat, dan siap jualan.</p>
          <div className="duk-grid an d1">
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--r2)", padding: "28px 24px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--accent-dim)", border: "1px solid var(--accent-border)", color: "var(--accent2)", fontSize: "11px", fontWeight: 600, letterSpacing: ".07em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", marginBottom: "16px" }}>
                12 Bulan Pendampingan
              </div>
              <p style={{ fontSize: "19px", lineHeight: 1.75, color: "var(--text)", fontWeight: 400, marginBottom: "18px" }}>
                Tujuan saya sederhana: <strong style={{ color: "var(--accent2)", fontWeight: 600 }}>kamu tenang menjalankan bisnis</strong>, tanpa bingung saat butuh perubahan cepat di toko online.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {DUK_LIST.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "14px", color: "var(--text2)" }}>
                    <span style={{ color: "var(--green)", fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "linear-gradient(165deg,#FFF2D8 0%,#F8E3B8 100%)", border: "1px solid var(--accent-border)", borderRadius: "var(--r2)", padding: "24px 22px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: "12px" }}>Komitmen Support</div>
              <div style={{ fontFamily: "var(--font-d)", fontSize: "42px", lineHeight: 1, color: "var(--text)", marginBottom: "6px" }}>12 bulan</div>
              <div style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7, marginBottom: "18px" }}>Pendampingan setelah website live, fokus ke operasional dan optimasi ringan.</div>
              <div style={{ height: "1px", background: "rgba(68,54,39,.14)", marginBottom: "16px" }} />
              <p style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7, marginBottom: "16px" }}>
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>Catatan:</strong> Jika ada kebutuhan fitur baru, integrasi baru, atau perubahan alur besar, akan saya ajukan sebagai scope pengembangan lanjutan secara terpisah dan transparan.
              </p>
              <a href={WA_DUKUNGAN} className="btn-main" target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center" }}>
                Diskusi Dukungan 12 Bulan
              </a>
            </div>
          </div>
          <div style={{ marginTop: "20px", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "18px 22px" }} className="an">
            <p style={{ fontSize: "13px", color: "var(--text2)", fontWeight: 300, lineHeight: 1.7 }}>
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>Intinya:</strong> saya tetap ada setelah launching. Selama permintaan masih dalam ranah support operasional dan tidak menambah fitur baru, kamu bisa konsultasi kapan pun dan kita kerjakan bersama dengan ritme yang jelas.
            </p>
          </div>
        </div>
      </section>

      {/* § 07 · PERBANDINGAN */}
      <section className="sec" id="perbandingan">
        <div className="container">
          <div className="sec-num an">§ 07 · Perbandingan</div>
          <div className="s-eye an">Kenapa website sendiri menang jangka panjang</div>
          <h2 className="sh an d1">Dalam 2–3 tahun,<br /><em>website sendiri selalu lebih masuk akal.</em></h2>
          <p className="sp an d2">Marketplace bagus untuk mulai, tapi bukan tempat terbaik untuk tumbuh jangka panjang. Website sendiri memberi kontrol penuh atas brand, data customer, dan margin.</p>
          <div className="vs-wrap an d1">
            <table className="vs-table">
              <thead>
                <tr>
                  <th>Kriteria</th>
                  <th className="hl">Good.code</th>
                  <th>Marketplace<br /><span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: ".04em", textTransform: "none", color: "var(--text3)" }}>(Shopee/Tokopedia)</span></th>
                  <th>Wordpress / Shopify</th>
                </tr>
              </thead>
              <tbody>
                {VS_ROWS.map(([crit, gc, mp, wp], i) => (
                  <tr key={i}>
                    <td>{crit}</td>
                    <td className="hl">{gc}</td>
                    <td>{mp}</td>
                    <td>{wp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* § 08 · TESTIMONI */}
      <section className="sec sec-white" id="testimoni">
        <div className="container">
          <div className="sec-num an">§ 08 · Testimoni</div>
          <div className="s-eye an">Kata mereka</div>
          <h2 className="sh an d1">Bukan saya yang bilang.<br /><em>Ini dari yang sudah merasakan.</em></h2>
          <p className="sp an d2">Cerita langsung dari brand yang sudah pindah dari ketergantungan marketplace dan sekarang mengelola toko online mereka sendiri.</p>
          <div className="testi-grid">
            {TESTI.map((t, i) => (
              <div key={i} className={`testi-card an${t.delay}`}>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-q">{t.q}</p>
                <div className="testi-who">
                  <div className="testi-av">{t.av}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-sub">{t.sub}</div>
                  </div>
                </div>
                <div className="testi-result">{t.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 09 · FAQ */}
      <section className="sec" id="faq">
        <div className="container">
          <div className="sec-num an">§ 09 · Pertanyaan</div>
          <div className="s-eye an">FAQ</div>
          <h2 className="sh an d1">Hal yang paling sering<br />ditanyakan <em>sebelum mulai.</em></h2>
          <div className="faq-list an d2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={`faq-i${openFaq === i ? " on" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}
                  <div className="faq-ic">▾</div>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
          <div className="faq-wa-row an">
            <div className="faq-wa-text"><strong>Masih ragu?</strong> Tanya langsung via WhatsApp — biasanya saya balas dalam 2 jam di jam kerja. Gratis, tanpa paksaan.</div>
            <a href={WA_FAQ} className="btn-main" target="_blank" rel="noopener noreferrer" style={{ whiteSpace: "nowrap" }}>💬 Tanya via WhatsApp</a>
          </div>
        </div>
      </section>

      {/* § 10 · CTA FINAL */}
      <section className="cta-sec">
        <div className="container">
          <div className="s-eye an">§ 10 · Mulai Sekarang</div>
          <h2 className="an d1">Toko online kamu<br /><em>bisa live bulan ini.</em></h2>
          <p className="an d2">Konsultasi gratis, tidak ada kewajiban apapun. Ceritakan bisnismu — saya bantu tentukan apa yang paling masuk akal untuk kondisi kamu sekarang.</p>
          <div className="an d3">
            <a href={WA_KONSULTASI} className="wa-btn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Mulai Konsultasi via WhatsApp
            </a>
            <div className="cta-trust">
              <span>Good.code · Semarang</span>
              <span>Balas &lt; 2 jam</span>
              <span>Tanpa komitmen</span>
              <span>Konsultasi 100% gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING WA — mobile only */}
      <a href={WA_KONSULTASI} className="float-wa" target="_blank" rel="noopener noreferrer" aria-label="Konsultasi gratis via WhatsApp">
        <span className="float-wa-icon">
          <Image src="/images/wa-icon.png" alt="" width={24} height={24} aria-hidden="true" />
        </span>
        <span className="float-wa-copy">
          <strong>Konsultasi Gratis</strong>
          <span>Balas &lt; 2 jam · Tanpa komitmen</span>
        </span>
        <span className="float-wa-arrow">→</span>
      </a>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="f-logo">Good<span>.</span>code</div>
          <div className="f-copy">© 2025 Good.code · Spesialis Ecommerce & Migrasi Marketplace · Semarang, Indonesia</div>
        </div>
      </footer>
    </div>
  );
}
