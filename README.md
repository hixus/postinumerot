# Postinumerot

Posti tarjoaa postinumerojärjestelmän ja kotimaisen osoitteiston perus- ja muutostietoja määrämuotoisina sähköisinä tiedostoina. Täältä löydät postin tarjoamat tiedot csv-formaattiin muunnettuna.

CSV-tiedostot ja muunnoskoodi on tehty omaan tarpeeseen, eivätkä ne liitty Postiin muutoin kuin alkuperäisten tiedostojen osalta.

## CSV-tiedostojen kuvaus ja käyttöehdot

CSV-tiedostoja on kolme:

- [Perusosoitteisto.csv](Perusosoitteisto.csv)
- [Postinumeromuutokset.csv](Postinumeromuutokset.csv)
- [Postinumerotiedosto.csv](Postinumerotiedosto.csv)

CSV-tiedostoissa samat käyttöehdot kuin alkuperäisissä dat-tiedostoissa.

Alkuperäisten tiedostojen palvelukuvauksen ja käyttöehdot löydät [täältä.](https://www.posti.fi/mzj3zpe8qb7p/1eKbwM2WAEY5AuGi5TrSZ7/36bf406d5fbd322cedf0e1330f0b7dcb/postinumeropalvelut-palvelukuvaus-ja-kayttoehdot.pdf)

Alkuperäiset tiedostot voit ladata [Postin-sivuilta.](https://www.posti.fi/fi/asiakastuki/postinumerotiedostot)

## Koodin käyttö ja lisenssi

Jos haluat ajaa muunnoskoodia itse, tarvitset vähintään:

- [node.js](https://nodejs.org/en/)
- wget
- unzip
- iconv
- komentorivi

Katso viimeisimmät tiedostostot postin sivuilta ja päivitä niiden päivämäärät `./run.sh` tiedostoon. Tämän jälkeen aja `./run.sh`.

Koodi on lisensoitu [Creative Commons Nimeä-JaaSamoin 4.0 Kansainvälinen -lisenssillä.](http://creativecommons.org/licenses/by-sa/4.0/)

## TODO

- automatisoi tietojen päivittäminen GitHub-actionsseilla
