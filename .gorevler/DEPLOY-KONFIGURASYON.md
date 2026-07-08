# eps-con.com — Deploy Konfigürasyonu

**Tarih:** 2026-07-07
**Yapan:** serdar

---

## Genel Bakış

| Bileşen | Detay |
|---|---|
| Site kaynağı | Lovable.dev export (TanStack Start + Vite + React) |
| GitHub Repo | https://github.com/tumhesapgirisleri-afk/eps-con |
| Branch | `main` |
| Hosting | Vercel (proje adı: `eps-con2`) |
| Vercel URL (default) | eps-con2.vercel.app |
| Custom Domain | eps-con.com, www.eps-con.com |
| Form servisi | Formspree |
| Database | YOK — Supabase tamamen kaldırıldı |

---

## Deploy Akışı (Otomatik)

1. Kod değişikliği yapılır → `git commit` → `git push origin main`
2. Vercel, GitHub'daki push'u otomatik algılar
3. Build + deploy otomatik tetiklenir (~1-2 dk)
4. Site canlıya güncellenmiş olarak çıkar

**Ekstra bir işlem gerekmez** — GitHub-Vercel entegrasyonu zaten bağlı.

---

## DNS Kayıtları (cPanel Zone Editor — eps-con.com)

⚠️ **Bu kayıtlara dokunulmadı (MX / mail sistemi — Gmail):**
- Tüm MX kayıtları
- TXT kayıtları (varsa SPF/DKIM)

**Vercel için eklenen/güncellenen kayıtlar:**

| Tip | Ad | Değer |
|---|---|---|
| A | `eps-con.com` (root/@) | `216.198.79.1` |
| CNAME | `www.eps-con.com` | `82bca3aef3e76969.vercel-dns-017.com` |

**Not:** Eski A kaydı (`185.22.187.187` — eski host) silindi, çakışma önlendi.

**Dokunulmayan diğer subdomain A kayıtları (eski host, cPanel servisleri):**
`webmail`, `cpcalendars`, `whm`, `cpcontacts`, `webdisk`, `cpanel`, `autodiscover`, `autoconfig` → hepsi `185.22.187.187`'de kalmaya devam ediyor.

**Dikkat edilmesi gereken risk:** `mail.eps-con.com` ve `ftp.eps-con.com` CNAME kayıtları `eps-con.com`'u (root) işaret ediyor. Root'un A kaydı Vercel'e döndüğü için, bu iki adres de artık Vercel IP'sine gidiyor. Gmail MX ile çalıştığı için mail gönderim/alım etkilenmez, ama `mail.eps-con.com` üzerinden webmail girişi yapılıyorsa bu erişim çalışmaz hale gelmiş olabilir. Kullanılmıyorsa sorun değil.

---

## Formspree (Contact Form)

- **Form ID:** `mrewdlyq`
- **Endpoint:** `https://formspree.io/f/mrewdlyq`
- **Hedef mail:** `serdar@vayes.net` (geçici — müşteri `info@eps-con.com` mailine erişince değiştirilecek)
- **Kod konumu:** `src/routes/contact.tsx` — `handleSubmit` fonksiyonu
- **Ücretsiz plan limiti:** 50 gönderim/ay. Aşılırsa fazla gönderimler reddedilir, ay başında sıfırlanır. Daha fazlası için ücretli plan (~$10/ay).

### Hedef Maili Değiştirmek İçin (ileride)
1. Formspree dashboard → form ayarları → Emails/Recipients
2. Yeni mail adresini gir → doğrulama linkine tıkla (o mail kutusunda)
3. Kodda değişiklik gerekmez, Formspree tarafında yönetiliyor

---

## Vercel Ücretsiz Plan (Hobby) — Sınırlar ve Riskler

- **Bandwidth:** 100 GB/ay (küçük-orta kurumsal site için genelde yeterli)
- **Build dakikaları:** aylık sınırlı, normal kullanımda sorun çıkarmaz
- ⚠️ **ToS notu:** Hobby plan resmi olarak "kişisel, ticari olmayan" kullanım için. Şirket sitesi olarak kullanmak teknik olarak ihlal, ama pratikte küçük ölçekli kurumsal siteler genelde sorun yaşamıyor. Trafik ciddi büyürse Pro plana ($20/ay) geçiş gerekebilir.
- Site "kesilmemesi" için: bandwidth'i aşmamaya dikkat et, GitHub repo bağlantısını koru, domain kaydını (registrar tarafında) her yıl yenile.

---

## Kaldırılan Bileşenler (Supabase)

Aşağıdakiler bilinçli olarak silindi (form artık Formspree kullanıyor, database'e gerek yok):

- `src/integrations/supabase/` (tüm klasör)
- `src/routes/api/public/contact.ts` (eski API route)
- `supabase/` (migration ve config klasörü)
- `package.json` → `@supabase/supabase-js` bağımlılığı
- `src/start.ts` → `attachSupabaseAuth` middleware referansı

Yedekler: `.gorevler/backups/` içinde (`.serdar.bak` uzantılı).

---

## Erişim Bilgileri

- **GitHub hesabı:** tumhesapgirisleri-afk
- **Vercel Team:** tumhesapgirisleri-7789...
- **DNS/cPanel:** eps-con.com:2083 (mevcut hosting sağlayıcı)
- **Formspree hesabı:** serdar@vayes.net ile kayıtlı
- **UptimeRobot hesabı:** Halime Yılmaz — `eps-con.com` monitörü, 5 dakikada bir HTTP kontrolü

---

## UptimeRobot (Site İzleme)

- **Amaç:** Site down olursa haber almak + düzenli trafik/ping sağlamak
- **Monitör:** `eps-con.com`, tip HTTP, 5 dakika aralıkla kontrol
- **Kurulum tarihi:** 2026-07-07 — kurulur kurulmaz "Up" göründü, yani bu noktada DNS zaten yayılmıştı
- **Not:** Vercel trafiksiz siteyi "uyutmuyor/kapatmıyor" (Render/Heroku free tier'ın aksine); bu monitör esas olarak erken uyarı (downtime alert) amaçlı

---

## Sıradaki Olası Adımlar

- [ ] Müşteri `info@eps-con.com` mail erişimini alınca, Formspree hedef mailini değiştir
- [x] DNS yayılması tamamlandı — `https://eps-con.com` erişilebilir durumda (UptimeRobot ile teyit edildi, 2026-07-07)
- [ ] `mail.eps-con.com` webmail kullanımda mı kontrol et, kullanılıyorsa ayrı bir A kaydı ile eski IP'ye sabitle
- [ ] Trafik arttıkça Vercel Pro plana geçiş ihtiyacını değerlendir
- [ ] UptimeRobot'ta mail bildirimini aktif et (site down olursa anında haber almak için)
