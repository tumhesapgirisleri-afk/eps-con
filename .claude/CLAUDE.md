# eps-con.com — Claude Code Proje Talimatları

Bu projede Lovable.dev'den export edilen site kodunun üretim deploy'ı yapılacaktır.

---

## ⚠️ ORTAK ÇALIŞMA KURALLARI — ATLANAMAZ

### Oturum Başında — Kim Olduğunu Belirle

`.gorevler/KIM.md` dosyasını oku ve içindeki adı `[KİŞİ]` olarak kullan.
Dosya yoksa kullanıcıdan adını iste ve dosyayı oluştur.

### Her Dosya Düzenlemeden Önce — 3 Adım Zorunlu

**Adım 1 — Yedek al:**
Düzenleyeceğin dosyayı `.gorevler/backups/[dosyaadi].[KİŞİ].bak` olarak kaydet.

**Adım 2 — Çakışma kontrolü:**
`.gorevler/backups/` içinde aynı dosyanın başka kişiye ait `.bak` dosyası var mı bak.
Varsa o dosyanın son değişiklik zamanını kontrol et:
- **15 dakikadan yeni ise:** "⚠️ [kişi] şu anda [dosya] üzerinde çalışıyor, devam etmemi istiyor musun?" diye sor ve onay al.
- **15 dakikadan eskiyse:** Sessizce devam et.

**Adım 3 — Görev listesine ekle:**
`.gorevler/YYYY-MM-DD.[KİŞİ].md` dosyasına yapacağın işi ekle (yoksa oluştur).

### Oturum Sonunda — Onay Al

Tüm görevler tamamlandığında kullanıcıya sor:
"Oturumu kapatayım mı? Onaylarsan bu oturumda oluşturduğum yedek dosyalarını sileceğim."
Kullanıcı **"tamam"** derse `.gorevler/backups/` içindeki `[KİŞİ].bak` dosyalarını sil.

---

## Proje Kimliği

- **Site:** https://eps-con.com
- **Kaynak:** Lovable.dev export (dosya + database)
- **Deploy:** [TBD — Lovable çıktıya göre belirlenecek]
- **Status:** Kurulum aşamasında

---

## Davranış Kuralları

- İstenenin **dışına çıkma** — refactor, yorum, ekstra özellik ekleme
- Değişiklik yapmadan önce ilgili dosyayı oku
- Türkçe konuş, kısa ve net cevap ver
- Güvenlik açığı görürsen hemen bildir ve düzelt

---

## Sıradaki Adım

1. Lovable export'ından dosyalar indirilecek
2. Proje yapısı analiz edilecek
3. CLAUDE.md ve memory sistemi Lovable yapısına göre update edilecek
