const
    infected = document.querySelector('#inf'),
    active = document.querySelector('#active'),
    cured = document.querySelector('#cured'),
    death = document.querySelector('#death'),
    updated = document.querySelector('#updated')


const url = 'https://corona.lmao.ninja/all'

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

    let day = moment(data.updated).fromNow()

    updated.innerHTML = `Updated ${day}`
    infected.innerHTML = data.cases
    active.innerHTML = data.active
    cured.innerHTML = data.recovered
    death.innerHTML = data.deaths

}

fetchData()
setInterval(fetchData, 60000)