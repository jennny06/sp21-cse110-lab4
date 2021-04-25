for (let p in statistics) {
    if (p.indexOf('r') == 0 ) {
        console.log(statistics[p])
    }
    else if (statistics[p] % 2 != 0) {
        console.log(statistics[p])
    }
}
