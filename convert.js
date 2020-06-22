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
    rowLength: 256,
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
      Tyhjä1: { start: 163, length: 12 },
      Tyhjä2: { start: 175, length: 12 },
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
    rowLength: 220,
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
  POM: {
    name: "Postinumeromuutokset",
    rowLength: 453,
    columns: {
      Tietuetunnus: { start: 1, length: 4 },
      Taso: { start: 5, length: 1 },
      Ajopäivämäärä: { start: 6, length: 8 },
      "Poiminnan alkupäivämäärä": { start: 14, length: 8 },
      "Poiminnan loppupäivämäärä": { start: 22, length: 8 },
      "Vanha postinumero": { start: 30, length: 5 },
      "Vanha postinumeron nimi suomeksi": { start: 35, length: 30 },
      "Vanha postinumeron nimi ruotsiksi": { start: 65, length: 30 },
      "Vanha postinumeron nimen lyhenne suomeksi": { start: 95, length: 12 },
      "Vanha postinumeron nimen lyhenne ruotsiksi": { start: 107, length: 12 },
      Varalla: { start: 119, length: 131 },
      "Uusi postinumero": { start: 250, length: 5 },
      "Uusi postinumeron nimi suomeksi": { start: 255, length: 30 },
      "Uusi postinumeron nimi ruotsiksi": { start: 285, length: 30 },
      "Uusi postinumeron nimen lyhenne suomeksi": { start: 315, length: 12 },
      "Uusi postinumeron nimen lyhenne ruotsiksi": { start: 327, length: 12 },
      "Kunnan koodi": { start: 339, length: 3 },
      "Kunnan nimi suomeksi": { start: 342, length: 20 },
      "Kunnan nimi ruotsiksi": { start: 362, length: 20 },
      "Hallinnollisen alueen koodi": { start: 382, length: 2 },
      "Hallinnollisen alueen nimi suomeksi": { start: 384, length: 30 },
      "Hallinnollisen alueen nimi ruotsiksi": { start: 414, length: 30 },
      Muutospäivämäärä: { start: 444, length: 8 },
      Tapahtumakoodi: { start: 452, length: 2 },
    },
  },
};

const validateFiles = (files) => {
  Object.values(files).forEach((file) => {
    let lengthProcessed = 1; // 1-based index
    Object.entries(file.columns).forEach(([columnName, { start, length }]) => {
      if (lengthProcessed !== start) {
        throw new Error(
          `'${columnName}' in '${file.name}' does not start after previous (got ${lengthProcessed}, expected ${start})`
        );
      }
      lengthProcessed += length;
    });

    // back to 0-based index
    if (lengthProcessed - 1 !== file.rowLength) {
      throw new Error(
        `Expected total columns in ${file.name} to be ${file.rowLength} but got ${lengthProcessed}`
      );
    }
  });
};

const file = files[process.argv[2]];

const { columns } = file;

const convert = (line) => {
  return Object.values(columns)
    .map(({ start, length }) =>
      line.slice(start - 1, start - 1 + length).trim()
    )
    .join(DELIMITER);
};

validateFiles(files);


console.log(Object.keys(columns).join(DELIMITER));

rl.on("line", function (line) {
  console.log(convert(line));
});
