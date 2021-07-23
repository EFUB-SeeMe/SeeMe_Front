import React from 'react'

function Location() {
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        window.localStorage.setItem('lat', position.coords.latitude)
        window.localStorage.setItem('lon', position.coords.longitude)
      },
      function (error) {
        console.error(error)
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    )
  } else {
    alert('GPS를 지원하지 않습니다')
  }
}
export default Location
