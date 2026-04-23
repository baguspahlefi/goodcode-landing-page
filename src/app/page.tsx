import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Good.code — Website Ecommerce untuk UMKM Indonesia",
  description:
    "Spesialis migrasi marketplace ke website sendiri. Saya bantu pemilik toko online pindah dari Shopee & Tokopedia ke website ecommerce milik sendiri — domain brand kamu, checkout otomatis, ongkir terintegrasi.",
};

export default function Home() {
  return <HomePage />;
}
