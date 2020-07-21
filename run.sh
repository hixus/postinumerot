#!/bin/bash
BASE_PATH=https://www.posti.fi/webpcode

process_file() {
    local type=$1
    local dt=$2
    local save_to=$3
    rm -f ${type}_${dt}.zip
    wget -q ${BASE_PATH}/${type}_${dt}.zip
    if [ $? -ne 0 ]; then
        echo "No ${type} update for ${dt}, skipping"
    else
        unzip -o ${type}_${dt}.zip
        echo "Converting ${type}_${dt}.dat to ${save_to}"
        cat ${type}_${dt}.dat | iconv -f iso-8859-1 -t utf-8 | node convert.js ${type} >${save_to}
    fi
}

process_file "PCF" "20200721" "Postinumerotiedosto.csv"
process_file "BAF" "20200718" "Perusosoitteisto.csv"
process_file "POM" "20200702" "Postinumeromuutokset.csv"
