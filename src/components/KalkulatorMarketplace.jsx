"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";

const platforms = {
  shopee: {
    name: "Shopee",
    color: "#EE4D2D",
    bg: "#fff5f3",
    border: "#ffd0c7",
    logo: "/images/shopee.png",
    categories: [
      { label: "Fashion (Kategori A) — 10%", admin: 10, processFee: 1250 },
      { label: "Elektronik (Kategori B) — 8%", admin: 8, processFee: 1250 },
      { label: "FMCG / Makanan (Kategori C) — 7%", admin: 7, processFee: 1250 },
      { label: "Lifestyle / Hobi (Kategori D) — 6%", admin: 6, processFee: 1250 },
      { label: "Lainnya (Kategori E) — 5%", admin: 5, processFee: 1250 },
    ],
    iklan: 5,
    iklanLabel: "Estimasi biaya iklan Shopee Ads",
    notes: "Biaya proses Rp1.250/transaksi sudah termasuk dalam kalkulasi.",
  },
  tokopedia: {
    name: "Tokopedia",
    color: "#03AC0E",
    bg: "#f0fff2",
    border: "#b8f0bc",
    logo: "/images/Tokopedia.webp",
    categories: [
      { label: "Umum — 6.97% (inkl. pajak)", admin: 6.97, processFee: 0 },
      { label: "Kategori tertentu — 8%", admin: 8, processFee: 0 },
    ],
    iklan: 5,
    iklanLabel: "Estimasi biaya TopAds",
    notes: "Biaya komisi dinamis maks Rp40.000/item belum termasuk.",
  },
  tiktok: {
    name: "TikTok Shop",
    color: "#010101",
    bg: "#f5f5f5",
    border: "#d0d0d0",
    logo: "/images/Tiktok%20Seller.jpg",
    categories: [
      { label: "Fashion — 8%", admin: 8, processFee: 0 },
      { label: "Elektronik — 5%", admin: 5, processFee: 0 },
      { label: "Kecantikan — 9%", admin: 9, processFee: 0 },
      { label: "Makanan & Minuman — 5%", admin: 5, processFee: 0 },
      { label: "Lainnya — 6%", admin: 6, processFee: 0 },
    ],
    iklan: 10,
    iklanLabel: "Estimasi biaya Shop Ads + Affiliate",
    notes: "Dengan affiliate & iklan, total bisa mencapai 15–30% per transaksi.",
  },
};

function formatRp(val) {
  if (val >= 1_000_000_000) return `Rp ${(val / 1_000_000_000).toFixed(1)}M`;
  if (val >= 1_000_000) return `Rp ${(val / 1_000_000).toFixed(1)} Juta`;
  if (val >= 1_000) return `Rp ${(val / 1_000).toFixed(0)} Ribu`;
  return `Rp ${val.toLocaleString("id-ID")}`;
}

function formatFull(val) {
  return `Rp ${Math.round(val).toLocaleString("id-ID")}`;
}

const InputField = ({ label, value, onChange, prefix, suffix, helper }) => (
  <div style={{ marginBottom: 20 }}>
    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#443627", marginBottom: 6, letterSpacing: "0.3px" }}>
      {label}
    </label>
    <div style={{ display: "flex", alignItems: "center", border: "1.5px solid #DCC58F", borderRadius: 10, overflow: "hidden", background: "#fff", transition: "border 0.2s" }}>
      {prefix && (
        <span style={{ padding: "0 12px", background: "#FBF5E6", color: "#92724F", fontSize: 13, borderRight: "1.5px solid #DCC58F", height: "100%", display: "flex", alignItems: "center", whiteSpace: "nowrap", minHeight: 44 }}>
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ flex: 1, border: "none", outline: "none", padding: "10px 14px", fontSize: 15, fontWeight: 500, color: "#443627", background: "transparent", fontFamily: "inherit" }}
        min={0}
      />
      {suffix && (
        <span style={{ padding: "0 12px", background: "#FBF5E6", color: "#92724F", fontSize: 13, borderLeft: "1.5px solid #DCC58F", minHeight: 44, display: "flex", alignItems: "center" }}>
          {suffix}
        </span>
      )}
    </div>
    {helper && <p style={{ fontSize: 11, color: "#92724F", marginTop: 4, marginLeft: 2 }}>{helper}</p>}
  </div>
);

function ResultBar({ label, value, total, color }) {
  const pct = total > 0 ? Math.min((value / total) * 100, 100) : 0;
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span style={{ fontSize: 12, color: "#92724F", fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color }}>{formatFull(value)}</span>
      </div>
      <div style={{ height: 8, background: "#F0E8D4", borderRadius: 99 }}>
        <div style={{ height: 8, background: color, borderRadius: 99, width: `${pct}%`, transition: "width 0.6s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

export default function KalkulatorMarketplace() {
  const [platform, setPlatform] = useState("shopee");
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [hargaJual, setHargaJual] = useState(150000);
  const [orderPerBulan, setOrderPerBulan] = useState(50);
  const [bulanJualan, setBulanJualan] = useState(12);
  const [includeIklan, setIncludeIklan] = useState(true);
  const [hasil, setHasil] = useState(null);
  const [animated, setAnimated] = useState(false);

  const p = platforms[platform];
  const cat = p.categories[categoryIdx];

  useEffect(() => {
    setCategoryIdx(0);
  }, [platform]);

  function hitung() {
    const adminPct = cat.admin / 100;
    const iklanPct = includeIklan ? p.iklan / 100 : 0;
    const processFeePerOrder = cat.processFee;

    const adminPerOrder = hargaJual * adminPct;
    const iklanPerOrder = hargaJual * iklanPct;
    const totalPotonganPerOrder = adminPerOrder + iklanPerOrder + processFeePerOrder;
    const totalPotonganPerBulan = totalPotonganPerOrder * orderPerBulan;
    const totalPotonganTotal = totalPotonganPerBulan * bulanJualan;
    const totalOmset = hargaJual * orderPerBulan * bulanJualan;
    const pctPotongan = (totalPotonganTotal / totalOmset) * 100;

    const websitePotonganPerOrder = hargaJual * 0.025;
    const websitePotonganTotal = websitePotonganPerOrder * orderPerBulan * bulanJualan;
    const selisih = totalPotonganTotal - websitePotonganTotal;

    setHasil({ adminPerOrder, iklanPerOrder, processFeePerOrder, totalPotonganPerOrder, totalPotonganPerBulan, totalPotonganTotal, totalOmset, pctPotongan, websitePotonganTotal, selisih });
    setAnimated(false);
    setTimeout(() => setAnimated(true), 50);
  }

  const accent = p.color;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FBF5E6 0%, #F0E8D4 100%)", fontFamily: "var(--font-dm-sans, 'DM Sans', 'Segoe UI', sans-serif)" }}>
      <Navbar />

      {/* Hero Header */}
      <div style={{ background: "#443627", color: "#fff", padding: "52px 24px 36px", textAlign: "center", paddingTop: "calc(57px + 40px)" }}>
        <div style={{ fontSize: 11, letterSpacing: "3px", color: "#DCC58F", textTransform: "uppercase", marginBottom: 10 }}>
          Good.code · Tool Gratis
        </div>
        <h1 style={{ fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 700, margin: 0, lineHeight: 1.2, letterSpacing: "-0.5px", fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}>
          Kalkulator Potongan Marketplace
        </h1>
        <p style={{ fontSize: 14, color: "#C4A882", marginTop: 10, marginBottom: 0, maxWidth: 440, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
          Hitung berapa yang sudah dipotong Shopee, TikTok Shop, dan Tokopedia dari kamu selama ini.
        </p>
      </div>

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 16px 60px" }}>

        {/* Platform Selector */}
        <div style={{ marginTop: 28, marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#92724F", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>
            Pilih Platform
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {Object.entries(platforms).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setPlatform(key)}
                style={{
                  border: platform === key ? `2px solid ${val.color}` : "2px solid #DCC58F",
                  background: platform === key ? val.bg : "#FEFCF7",
                  borderRadius: 14,
                  padding: "14px 8px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s",
                  transform: platform === key ? "scale(1.04)" : "scale(1)",
                  boxShadow: platform === key ? `0 4px 16px ${val.color}22` : "0 2px 8px rgba(180,140,80,0.08)",
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, overflow: "hidden", margin: "0 auto 8px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #F0E8D4" }}>
                  <Image
                    src={val.logo}
                    alt={val.name}
                    width={44}
                    height={44}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: platform === key ? val.color : "#92724F" }}>{val.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div style={{ background: "#FEFCF7", borderRadius: 18, padding: "24px 22px", boxShadow: "0 4px 24px rgba(180,140,80,0.10)", border: "1px solid #DCC58F", marginBottom: 18 }}>

          {/* Category */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#443627", marginBottom: 6 }}>Kategori Produk</label>
            <select
              value={categoryIdx}
              onChange={e => setCategoryIdx(Number(e.target.value))}
              style={{ width: "100%", border: "1.5px solid #DCC58F", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#443627", background: "#fff", outline: "none", fontFamily: "inherit" }}
            >
              {p.categories.map((c, i) => (
                <option key={i} value={i}>{c.label}</option>
              ))}
            </select>
          </div>

          <InputField
            label="Rata-rata harga jual per produk"
            value={hargaJual}
            onChange={v => setHargaJual(Number(v))}
            prefix="Rp"
            helper="Harga yang pembeli bayar ke kamu"
          />

          <InputField
            label="Rata-rata order per bulan"
            value={orderPerBulan}
            onChange={v => setOrderPerBulan(Number(v))}
            suffix="order/bln"
          />

          <InputField
            label="Sudah jualan berapa bulan?"
            value={bulanJualan}
            onChange={v => setBulanJualan(Number(v))}
            suffix="bulan"
            helper="Hitung total sejak pertama buka toko"
          />

          {/* Iklan Toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", background: "#FBF5E6", borderRadius: 10, border: "1px solid #DCC58F", marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#443627" }}>Ikut hitung biaya iklan?</div>
              <div style={{ fontSize: 11, color: "#92724F", marginTop: 2 }}>{p.iklanLabel} (~{p.iklan}%)</div>
            </div>
            <button
              onClick={() => setIncludeIklan(!includeIklan)}
              style={{
                width: 46, height: 26, borderRadius: 99, border: "none", cursor: "pointer",
                background: includeIklan ? "#D98324" : "#DCC58F",
                position: "relative", transition: "background 0.3s", flexShrink: 0,
              }}
            >
              <div style={{
                position: "absolute", top: 3, left: includeIklan ? 23 : 3,
                width: 20, height: 20, borderRadius: "50%", background: "#fff",
                transition: "left 0.3s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }} />
            </button>
          </div>

          {p.notes && (
            <p style={{ fontSize: 11, color: "#92724F", marginTop: 6, marginBottom: 16, paddingLeft: 4 }}>ℹ️ {p.notes}</p>
          )}

          <button
            onClick={hitung}
            style={{
              width: "100%", background: "#D98324", color: "#fff",
              border: "none", borderRadius: 12, padding: "14px",
              fontSize: 15, fontWeight: 700, cursor: "pointer",
              letterSpacing: "0.3px", transition: "transform 0.15s, background 0.2s",
              marginTop: 4, boxShadow: "0 6px 16px rgba(217,131,36,0.28)",
            }}
            onMouseOver={e => e.currentTarget.style.background = "#B86B1A"}
            onMouseOut={e => e.currentTarget.style.background = "#D98324"}
          >
            Hitung Sekarang
          </button>
        </div>

        {/* Hasil */}
        {hasil && (
          <div style={{ opacity: animated ? 1 : 0, transform: animated ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s cubic-bezier(.4,0,.2,1)" }}>

            {/* Big Number */}
            <div style={{ background: "#443627", borderRadius: 18, padding: "28px 24px", marginBottom: 14, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#DCC58F", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>
                Total yang sudah dipotong {p.name}
              </div>
              <div style={{ fontSize: "clamp(28px, 8vw, 44px)", fontWeight: 800, color: "#ff6b6b", letterSpacing: "-1px", lineHeight: 1 }}>
                {formatRp(hasil.totalPotonganTotal)}
              </div>
              <div style={{ fontSize: 13, color: "#C4A882", marginTop: 8 }}>
                selama <strong style={{ color: "#F2F6D0" }}>{bulanJualan} bulan</strong> dari omset <strong style={{ color: "#F2F6D0" }}>{formatRp(hasil.totalOmset)}</strong>
              </div>
              <div style={{ marginTop: 14, display: "inline-block", background: "#ff6b6b22", borderRadius: 99, padding: "5px 14px", border: "1px solid #ff6b6b44" }}>
                <span style={{ fontSize: 13, color: "#ff8f8f", fontWeight: 600 }}>≈ {hasil.pctPotongan.toFixed(1)}% dari total omset kamu hilang</span>
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ background: "#FEFCF7", borderRadius: 18, padding: "22px", boxShadow: "0 4px 24px rgba(180,140,80,0.10)", border: "1px solid #DCC58F", marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#92724F", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
                Rincian per Bulan
              </div>

              <ResultBar label={`Biaya admin ${p.name} (${cat.admin}%)`} value={hasil.adminPerOrder * orderPerBulan} total={hargaJual * orderPerBulan} color={accent} />
              {includeIklan && (
                <ResultBar label={`Biaya iklan (~${p.iklan}%)`} value={hasil.iklanPerOrder * orderPerBulan} total={hargaJual * orderPerBulan} color="#D98324" />
              )}
              {cat.processFee > 0 && (
                <ResultBar label={`Biaya proses (Rp${cat.processFee.toLocaleString("id-ID")}/order)`} value={hasil.processFeePerOrder * orderPerBulan} total={hargaJual * orderPerBulan} color="#8b5cf6" />
              )}

              <div style={{ borderTop: "1.5px solid #F0E8D4", paddingTop: 14, marginTop: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#443627" }}>Total potongan/bulan</span>
                  <span style={{ fontSize: 15, fontWeight: 800, color: "#EE4D2D" }}>{formatFull(hasil.totalPotonganPerBulan)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span style={{ fontSize: 12, color: "#92724F" }}>Per transaksi</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#92724F" }}>{formatFull(hasil.totalPotonganPerOrder)}</span>
                </div>
              </div>
            </div>

            {/* Perbandingan Website */}
            <div style={{ background: "linear-gradient(135deg, #f0fff4, #e6ffed)", border: "1.5px solid #86efac", borderRadius: 18, padding: "22px", marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 14 }}>
                Kalau pakai website sendiri?
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div style={{ background: "#fff5f5", borderRadius: 12, padding: "14px", textAlign: "center", border: "1px solid #fecaca" }}>
                  <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 600, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: "clamp(16px,4vw,20px)", fontWeight: 800, color: "#ef4444" }}>{formatRp(hasil.totalPotonganTotal)}</div>
                  <div style={{ fontSize: 10, color: "#f87171", marginTop: 2 }}>total dipotong</div>
                </div>
                <div style={{ background: "#f0fff4", borderRadius: 12, padding: "14px", textAlign: "center", border: "1px solid #86efac" }}>
                  <div style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, marginBottom: 4 }}>Website Sendiri</div>
                  <div style={{ fontSize: "clamp(16px,4vw,20px)", fontWeight: 800, color: "#16a34a" }}>{formatRp(hasil.websitePotonganTotal)}</div>
                  <div style={{ fontSize: 10, color: "#16a34a", marginTop: 2 }}>biaya payment gateway</div>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #86efac" }}>
                <div>
                  <div style={{ fontSize: 12, color: "#443627", fontWeight: 500 }}>Yang bisa kamu hemat</div>
                  <div style={{ fontSize: 10, color: "#92724F" }}>dalam {bulanJualan} bulan</div>
                </div>
                <div style={{ fontSize: "clamp(18px,5vw,26px)", fontWeight: 800, color: "#16a34a" }}>+{formatRp(hasil.selisih)}</div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: "#443627", borderRadius: 18, padding: "28px 22px", textAlign: "center" }}>
              <div style={{ fontSize: 11, letterSpacing: "2px", color: "#DCC58F", textTransform: "uppercase", marginBottom: 10 }}>
                Saatnya beralih
              </div>
              <div style={{ fontSize: "clamp(16px,4vw,20px)", fontWeight: 700, color: "#F2F6D0", marginBottom: 10, fontFamily: "var(--font-fraunces, 'Fraunces', serif)" }}>
                {formatRp(hasil.selisih)} itu bisa balik ke kantong kamu.
              </div>
              <p style={{ fontSize: 13, color: "#C4A882", marginBottom: 20, lineHeight: 1.6 }}>
                Good.code bantu kamu punya website toko sendiri — lengkap, siap jualan, tanpa potongan platform.
              </p>
              <a
                href="https://wa.me/6285608537600?text=Halo%20Good.code%2C%20saya%20mau%20konsultasi%20soal%20website%20ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block", background: "#D98324", color: "#fff",
                  borderRadius: 12, padding: "13px 28px", fontWeight: 700, fontSize: 14,
                  textDecoration: "none", letterSpacing: "0.3px",
                  boxShadow: "0 6px 16px rgba(217,131,36,0.35)",
                }}
              >
                Konsultasi Gratis via WhatsApp
              </a>
              <div style={{ fontSize: 11, color: "#92724F", marginTop: 10 }}>Balas &lt; 2 jam · Tanpa komitmen</div>
            </div>

          </div>
        )}

        {/* Disclaimer */}
        <p style={{ fontSize: 11, color: "#92724F", textAlign: "center", marginTop: 24, lineHeight: 1.6, padding: "0 8px" }}>
          *Kalkulasi berdasarkan data biaya admin marketplace per April 2026. Angka aktual dapat berbeda tergantung kategori spesifik, level toko, dan program promosi yang diikuti.
        </p>

      </div>
    </div>
  );
}
