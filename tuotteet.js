/*
  KAUPAN ASETUKSET JA TUOTTEET
  ============================
  Tätä tiedostoa muokkaamalla muutat kaupan sisältöä. Koodiin ei tarvitse koskea.

  Uusi tuote: kopioi yksi { ... } -lohko, liitä se listaan ja muuta tiedot.
  - id:          lyhyt tunnus ilman välilyöntejä (esim. "pyjama-sininen")
  - nimi:        tuotteen nimi
  - kategoria:   jokin alla olevista kategorioista
  - hinta:       hinta euroina (desimaalit pisteellä, esim. 49.90)
  - kuvaus:      lyhyt kuvaus
  - koot:        lista kokoja, tai [] jos tuotteella ei ole kokoja
  - kuva:        kuvatiedoston polku, esim. "kuvat/pyjama.jpg" (tyhjä = värillinen paikkamerkki)
  - maksulinkki: Stripe-maksulinkki, kun maksut on otettu käyttöön (tyhjä = tuote menee ostoskoriin)
  - uutuus:      true näyttää "Uutuus"-merkin
*/

window.KAUPPA = {
  asetukset: {
    nimi: "ANNAN Living",
    iskulause: "Pehmeitä asioita kotipäiviin",
    esittely: "Pyjamat, kylpytakit ja alusvaatteet, joissa on hyvä olla. Lisäksi petivaatteet ja tarjoiluastiat, joilla koti tuntuu kodilta.",
    sahkoposti: "tilaukset@esimerkki.fi",
    toimitusmaksu: 5.90,
    ilmainenToimitusAlkaen: 80
  },

  kategoriat: ["Yöasut", "Kylpytakit", "Alusvaatteet", "Petivaatteet", "Tarjoiluastiat"],

  tuotteet: [
    {
      id: "pyjama-pellava",
      nimi: "Pellavapyjama, sumunsininen",
      kategoria: "Yöasut",
      hinta: 89.00,
      kuvaus: "Pesty pellava, väljä paita ja kiristysnauhalliset housut.",
      koot: ["XS", "S", "M", "L", "XL"],
      kuva: "",
      maksulinkki: "",
      uutuus: true
    },
    {
      id: "pyjama-trikoo",
      nimi: "Trikoopyjama, luumu",
      kategoria: "Yöasut",
      hinta: 59.00,
      kuvaus: "Pehmeä luomupuuvillatrikoo, joustava vyötärö.",
      koot: ["XS", "S", "M", "L", "XL"],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "kylpytakki-vohveli",
      nimi: "Vohvelikylpytakki",
      kategoria: "Kylpytakit",
      hinta: 79.00,
      kuvaus: "Kevyt vohvelikangas, kuivuu nopeasti. Taskut ja vyö.",
      koot: ["S/M", "L/XL"],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "kylpytakki-frotee",
      nimi: "Paksu froteekylpytakki",
      kategoria: "Kylpytakit",
      hinta: 99.00,
      kuvaus: "Painava 400 g/m² frotee ja huppu. Saunan jälkeen.",
      koot: ["S/M", "L/XL"],
      kuva: "",
      maksulinkki: "",
      uutuus: true
    },
    {
      id: "alushousut-modaali",
      nimi: "Modaalialushousut, 3 kpl",
      kategoria: "Alusvaatteet",
      hinta: 35.00,
      kuvaus: "Silkinpehmeä modaali, korkea vyötärö, ei saumoja.",
      koot: ["XS", "S", "M", "L", "XL"],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "toppi-rento",
      nimi: "Rento toppi ilman kaaria",
      kategoria: "Alusvaatteet",
      hinta: 32.00,
      kuvaus: "Kevyesti tukeva, pehmeä toppi kotiin ja nukkumiseen.",
      koot: ["XS", "S", "M", "L"],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "pussilakana-pellava",
      nimi: "Pellavapussilakanasetti",
      kategoria: "Petivaatteet",
      hinta: 129.00,
      kuvaus: "Pussilakana 150×210 cm ja tyynyliina 50×60 cm.",
      koot: [],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "torkkupeitto",
      nimi: "Villasekoitetorkkupeitto",
      kategoria: "Petivaatteet",
      hinta: 69.00,
      kuvaus: "130×170 cm, lämmin ja kevyt. Hapsureunat.",
      koot: [],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "tarjoiluvati-keramiikka",
      nimi: "Keraaminen tarjoiluvati",
      kategoria: "Tarjoiluastiat",
      hinta: 45.00,
      kuvaus: "Käsin lasitettu, 34 cm. Juustoille, leivonnaisille ja aamiaiselle.",
      koot: [],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    },
    {
      id: "kulhosetti",
      nimi: "Tarjoilukulhot, 2 kpl",
      kategoria: "Tarjoiluastiat",
      hinta: 38.00,
      kuvaus: "Matta kivitavara, Ø 18 cm ja Ø 24 cm.",
      koot: [],
      kuva: "",
      maksulinkki: "",
      uutuus: false
    }
  ]
};
