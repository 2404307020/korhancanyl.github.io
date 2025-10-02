# korhancanyl.github.io
Basit bir okul sitesi örneği. Aşağıda tam çalışan bir `index.html` ve ona ait `styles.css` örneği bulunuyor — bu dosyaları kopyalayıp proje köküne yerleştirip tarayıcıda açarak önizleyebilirsiniz.

## Neler var

- `index.html`: Sayfanın HTML içeriği (başlık, gezinti, dersler, öğretmenler, iletişim).
# korhancanyl.github.io

Basit bir okul sitesi örneği. Aşağıda tam çalışan bir `index.html` ve ona ait `styles.css` örneği bulunuyor — bu dosyaları kopyalayıp proje köküne yerleştirip tarayıcıda açarak önizleyebilirsiniz.

## Neler var

- `index.html`: Sayfanın HTML içeriği (başlık, gezinti, dersler, öğretmenler, iletişim).
- `styles.css`: Basit, duyarlı (responsive) stil.

## index.html

```html
<!doctype html>
<html lang="tr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Örnek Okul Sitesi</title>
		<link rel="stylesheet" href="styles.css" />
	</head>
	<body>
		<header class="site-header">
			<div class="container">
				<h1>Atatürk İlkokulu</h1>
				<nav>
					<a href="#home">Ana Sayfa</a>
					<a href="#dersler">Dersler</a>
					<a href="#ogretmenler">Öğretmenler</a>
					<a href="#iletisim">İletişim</a>
				</nav>
			</div>
		</header>

		<main class="container">
			<section id="home" class="hero">
				<h2>Hoş geldiniz!</h2>
				<p>Güvenilir, modern ve sevgi dolu bir öğrenme ortamı.</p>
				<a class="btn" href="#dersler">Derslerimize göz atın</a>
			</section>

			<section id="dersler" class="grid">
				<h3>Dersler</h3>
				<article class="card">
					<h4>Matematik</h4>
					<p>Temel aritmetik, problem çözme ve mantık çalışmaları.</p>
				</article>
				<article class="card">
					<h4>Fen Bilimleri</h4>
					<p>Deneyler, keşifler ve bilimsel düşünme becerileri.</p>
				</article>
				<article class="card">
					<h4>Türkçe</h4>
					<p>Okuma, yazma ve iletişim becerileri.</p>
				</article>
			</section>

			<section id="ogretmenler">
				<h3>Öğretmenlerimiz</h3>
				<ul class="teachers">
					<li>
						<strong>Ayşe Yılmaz</strong>
						<span> - Sınıf Öğretmeni</span>
					</li>
					<li>
						<strong>Mehmet Kara</strong>
						<span> - Matematik Öğretmeni</span>
					</li>
					<li>
						<strong>Elif Demir</strong>
						<span> - Fen Bilimleri Öğretmeni</span>
					</li>
				</ul>
			</section>

			<section id="iletisim" class="contact">
				<h3>İletişim</h3>
				<p>Adres: Örnek Mah. Eğitim Cad. No:1</p>
				<p>Telefon: (XXX) XXX XX XX</p>
				<p>Email: bilgi@ornekokul.edu.tr</p>
			</section>
		</main>

		<footer class="site-footer">
			<div class="container">© 2025 Atatürk İlkokulu - Tüm hakları saklıdır.</div>
		</footer>
	</body>
</html>
```

## styles.css

```css
:root{
	--accent:#2b6cb0;
	--muted:#6b7280;
	--bg:#f7fafc;
	--card:#ffffff;
}
*{box-sizing:border-box}
body{font-family:Segoe UI, Roboto, Arial, sans-serif;margin:0;background:var(--bg);color:#111}
.container{max-width:900px;margin:0 auto;padding:1rem}
.site-header{background:var(--card);box-shadow:0 1px 4px rgba(0,0,0,.06)}
.site-header .container{display:flex;align-items:center;justify-content:space-between}
.site-header h1{font-size:1.2rem;margin:0;padding:0.75rem 0}
.site-header nav a{margin-left:1rem;color:var(--muted);text-decoration:none}
.hero{background:linear-gradient(90deg, #e6f0ff, #fff);padding:2rem;border-radius:8px;margin:1.25rem 0;text-align:center}
.hero h2{margin:0 0 .5rem}
.btn{display:inline-block;padding:.5rem 1rem;background:var(--accent);color:#fff;border-radius:6px;text-decoration:none}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin:1rem 0}
.card{background:var(--card);padding:1rem;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.06)}
.teachers{list-style:none;padding:0;margin:0}
.teachers li{background:var(--card);margin:.5rem 0;padding:.6rem;border-radius:6px}
.contact p{margin:.25rem 0;color:var(--muted)}
.site-footer{padding:1rem 0;text-align:center;color:var(--muted);margin-top:2rem}

@media (max-width:480px){.site-header .container{flex-direction:column;align-items:flex-start}.site-header nav{margin-top:.5rem}}
```

## Nasıl kullanılır

1. Proje köküne `index.html` ve `styles.css` dosyalarını oluşturun.
2. Yukarıdaki kodları ilgili dosyalara yapıştırın.
3. `index.html` dosyasını tarayıcıda açın (çift tıklayın veya tarayıcıya sürükleyin).

Geliştirmek için: sayfaya resim ekleyin, daha fazla içerik bölümü oluşturun veya Bootstrap/Tailwind gibi bir çatı kullanarak görünümü zenginleştirin。

---

Bu basit örnek eğitim amaçlıdır ve hızlıca bir okul sitesinin iskeletini kurmanıza yardımcı olur。
			## Nasıl kullanılır

			1. Proje köküne `index.html` ve `styles.css` dosyalarını oluşturun.
			2. Yukarıdaki kodları ilgili dosyalara yapıştırın。
			3. `index.html` dosyasını tarayıcıda açın (çift tıklayın veya tarayıcıya sürükleyin)。

			Geliştirmek için: sayfaya resim ekleyin, daha fazla içerik bölümü oluşturun, veya Bootstrap / Tailwind gibi bir çatı kullanarak görünümü zenginleştirin。

			---

			Bu basit örnek eğitim amaçlıdır ve hızlıca bir okul sitesinin iskeletini kurmanıza yardımcı olur。
