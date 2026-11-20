# UPLOAD.md — gta6-clipper-01

Klip sudah jadi: `clip.mp4` (1080x1920, 42 detik, <60 detik = Short).
Video ini BELUM di-upload — upload dulu, lalu isi URL aslinya ke `VIDEO.json`.

## 1. Upload ke YouTube

- File: `clip.mp4` di root repo ini.
- Upload sebagai **Public** (bukan Unlisted/Private), sebagai Short (otomatis, karena
  vertikal <60 detik). Harus tayang **sebelum deadline 23 Nov 2026 08:00 WIB** dan tetap
  publik sampai hasil keluar (~7 Des 2026).
- Video harus dipublikasikan SETELAH buka kompetisi (20 Nov 2026 08:00 WIB) — sudah
  terpenuhi kalau di-upload sekarang.

## 2. Judul yang disarankan

```
GTA 6 Looks UNREAL 😱 #GTA6 #Shorts
```

(Hapus emoji kalau mau judul polos: `GTA 6 Looks UNREAL #GTA6 #Shorts`)

## 3. Deskripsi — WAJIB kata-per-kata (baris pertama)

Salin persis baris ini ke deskripsi video (jangan diubah satu huruf pun):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
```

Lalu tambahkan play code akun (code 0) di deskripsi, di bawah baris wajib:

```
makefun-tiger-pouch-raven
```

Deskripsi lengkap yang disarankan (salin semuanya):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-tiger-pouch-raven

The GTA 6 finale hits different — helicopter chases, jet skis, a motorcycle vs a seaplane, and Vice City at sunset. This clip was cut by my AI agent from Rockstar's official GTA 6 Trailer 2.

Want to earn money making clips like this with AI? Join the bounty: https://make.fun/bounty/gta6-clipper-01

#GTA6 #GrandTheftAutoVI #ViceCity #Shorts #makefun
```

## 4. Setelah upload

1. Salin URL Shorts dari tombol Share → Copy link
   (bentuknya `https://www.youtube.com/shorts/<id>`).
2. Ganti isi `VIDEO.json` di repo ini dengan URL tersebut, contoh:
   `{"url": "https://www.youtube.com/shorts/dQw4w9WgXcQ"}`
3. Baru setelah itu commit + push + submit (oleh parent, bukan builder).

## 5. Isi klip (untuk arsip)

- Sumber: Rockstar GTA 6 Trailer 2 (YouTube, `VQRLujxTm3c`), diunduh 1080p di sesi ini.
- 0:00–0:24 — momen finale trailer (helikopter di rawa, jet ski, motor vs pesawat
  amfibi, kejar-kejaran malam, skyline Vice City saat senja, logo GTA VI). Hook text:
  "GTA 6 LOOKS UNREAL".
- 0:24–0:42 — pitch make.fun di atas loop skyline senja + voiceover (gTTS, suara
  en-US): "Make clips like this with AI, and earn money on make.fun. Check the link
  in the description." Teks layar: "MAKE CLIPS LIKE THIS WITH AI" → "AND EARN MONEY
  ON MAKE.FUN" → "make.fun/bounty/gta6-clipper-01 / LINK IN DESCRIPTION".
