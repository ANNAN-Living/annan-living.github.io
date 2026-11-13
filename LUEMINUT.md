# Verkkokauppa

Yksinkertainen verkkokauppa, joka toimii ilmaiseksi GitHub Pagesissa.

## Tiedostot

- `index.html`: kaupan ulkoasu ja toiminnot. Tätä ei yleensä tarvitse muokata.
- `tuotteet.js`: kaupan nimi, tekstit, toimitusmaksu ja kaikki tuotteet. Muokkaa tätä.
- `kuvat/`: tuotekuvat. Lisää kuva tänne ja kirjoita sen polku tuotteen `kuva`-kenttään, esim. `"kuvat/pyjama.jpg"`.

## Maksut

Nyt tilaus kopioidaan ja lähetetään sähköpostilla. Kun haluat verkkomaksut, luo Stripeen tuotteelle maksulinkki
ja liitä se tuotteen `maksulinkki`-kenttään. Silloin tuotteen nappi muuttuu "Osta"-napiksi.

## Julkaisu (GitHub Pages)

1. Luo GitHubiin julkinen repositorio, esim. `verkkokauppa`.
2. Lisää nämä tiedostot sinne.
3. Settings → Pages → Branch: `main`, kansio `/ (root)` → Save.
4. Kauppa näkyy osoitteessa https://annan-living.github.io.
