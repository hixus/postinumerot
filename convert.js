const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const DELIMITER = ",";

const files = {
  BAF: {
    name: "Postinumerotiedosto",
    columns: {
      Tietuetunnus: { start: 1, length: 5 },
      Ajopäivämäärä: { start: 6, length: 8 },
      Postinumero: { start: 14, length: 5 },
      "Postinumeron nimi suomeksi": { start: 19, length: 30 },
      "Postinumeron nimi ruotsiksi": { start: 49, length: 30 },
      "Postinumeron nimen lyhenne suomeksi": { start: 79, length: 12 },
      "Postinumeron nimen lyhenne ruotsiksi": { start: 91, length: 12 },
      "Kadun (paikan) nimi suomeksi": { start: 103, length: 30 },
      "Kadun (paikan) nimi ruotsiksi": { start: 133, length: 30 },
      "Kiinteistötietojen tyyppi": { start: 187, length: 1 },
      "Pienin kiinteistönumero: Kiinteistönumero 1": { start: 188, length: 5 },
      "Pienin kiinteistönumero: Kiinteistön jakokirjain 1": {
        start: 193,
        length: 1,
      },
      "Pienin kiinteistönumero: Välimerkki": { start: 194, length: 1 },
      "Pienin kiinteistönumero: Kiinteistönumero 2": { start: 195, length: 5 },
      "Pienin kiinteistönumero: Kiinteistön jakokirjain 2": {
        start: 200,
        length: 1,
      },
      "Suurin kiinteistönumero: Kiinteistönumero 1": { start: 201, length: 5 },
      "Suurin kiinteistönumero: Kiinteistön jakokirjain 1": {
        start: 206,
        length: 1,
      },
      "Suurin kiinteistönumero: Välimerkki": { start: 207, length: 1 },
      "Suurin kiinteistönumero: Kiinteistönumero 2": { start: 208, length: 5 },
      "Suurin kiinteistönumero: Kiinteistön jakokirjain 2": {
        start: 213,
        length: 1,
      },
      "Kunnan koodi": { start: 214, length: 3 },
      "Kunnan nimi suomeksi": { start: 217, length: 20 },
      "Kunnan nimi ruotsiksi": { start: 237, length: 20 },
    },
  },
  PCF: {
    name: "Perusosoitteisto",
    columns: {
      Tietuetunnus: { start: 1, length: 5 },
      Ajopäivämäärä: { start: 6, length: 8 },
      Postinumero: { start: 14, length: 5 },
      "Postinumeron nimi suomeksi": { start: 19, length: 30 },
      "Postinumeron nimi ruotsiksi": { start: 49, length: 30 },
      "Postinumeron nimen lyhenne suomeksi": { start: 79, length: 12 },
      "Postinumeron nimen lyhenne ruotsiksi": { start: 91, length: 12 },
      Voimaantulopäivämäärä: { start: 103, length: 8 },
      Tyyppikoodi: { start: 111, length: 1 },
      "Hallinnollisen alueen koodi ": { start: 112, length: 5 },
      "Hallinnollisen alueen nimi suomeksi": { start: 117, length: 30 },
      "Hallinnollisen alueen ruotsiksi": { start: 147, length: 30 },
      "Kunnan koodi": { start: 177, length: 3 },
      "Kunnan nimi suomeksi": { start: 180, length: 20 },
      "Kunnan nimi ruotsiksi": { start: 200, length: 20 },
      "Kunnan kielisuhdekoodi": { start: 220, length: 1 },
    },
  },
};

const { columns } = files[process.argv[2]];

const convert = (line) => {
  return Object.values(columns)
    .map(({ start, length }) =>
      line.slice(start - 1, start - 1 + length).trim()
    )
    .join(DELIMITER);
};

rl.on("line", function (line) {
  console.log(convert(line));
});
