const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8eaf3929422605024a3d6e2bf3a660ba&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather survice!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "it is curruntly " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out")
        }
    })
}


module.exports = forecast