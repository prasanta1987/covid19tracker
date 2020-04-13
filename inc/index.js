// alert(day);



const
    infected = document.querySelector('#inf'),
    active = document.querySelector('#active'),
    cured = document.querySelector('#cured'),
    death = document.querySelector('#death'),
    updated = document.querySelector('#updated')


// const url = 'https://corona.lmao.ninja/all'
const url = 'https://corona.lmao.ninja/countries/ind'

const fetchData = () => {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderDom(data)
        })
        .catch(err => console.error(err))
}


const renderDom = (data) => {
    console.log(data)
    let time = data.updated
    let day = moment(time).fromNow()

    updated.innerHTML = `Updated ${day}`
    infected.innerHTML = data.cases
    active.innerHTML = data.active
    cured.innerHTML = data.recovered
    death.innerHTML = data.deaths

}

fetchData()
setInterval(fetchData, 60000)