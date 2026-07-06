# .gorevler/ Sistemi — eps-con.com

Bu klasör ortak çalışma koordinasyonu için kullanılır.

## Dosyalar

- **KIM.md** — Oturum başında okun, kişi adını belirle
- **YYYY-MM-DD.[KİŞİ].md** — Günlük görev listesi
- **backups/** — Dosya versiyonları (çakışma tespiti)
- **aksiyon-paketleri/** — Planlı görev paketleri

## Workflow

1. Dosya düzenlemeye başlamadan: Backup al → `.gorevler/backups/`
2. Çakışma kontrolü: Başka kişinin `.bak` dosyası var mı? (15 dakika)
3. Görev listesine ekle: `.gorevler/YYYY-MM-DD.[KİŞİ].md`
4. Oturum sonunda: Onay al, yedekleri sil
