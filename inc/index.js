const
    infected = document.querySelector('#inf'),
    active = document.querySelector('#active'),
    cured = document.querySelector('#cured'),
    death = document.querySelector('#death'),
    updated = document.querySelector('#updated'),
    area = document.querySelector('#area')


// const url = 'https://corona.lmao.ninja/all'
const url = 'https://corona.lmao.ninja/v2/countries/ind'

const fetchData = () => {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderDom(data)
        })
        .catch(err => console.error(err))
}


const renderDom = (data) => {

    console.log(data)
    let day = moment(data.updated).fromNow()

    updated.innerHTML = `Updated ${day}`
    infected.innerHTML = numberWithCommas(data.cases)
    active.innerHTML = numberWithCommas(data.active)
    cured.innerHTML = numberWithCommas(data.recovered)
    death.innerHTML = numberWithCommas(data.deaths)
    area.innerHTML = data.country

}



function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


fetchData()
setInterval(fetchData, 60000)