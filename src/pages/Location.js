import React from 'react'

function Location() {
  let today = new Date(); 
  let month = today.getMonth() + 1; 
  let year = today.getFullYear();
  let date = today.getDate(); 
  let day=year*10000+month*100+date;
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        window.localStorage.setItem('lat', position.coords.latitude)
        window.localStorage.setItem('lon', position.coords.longitude)
        window.localStorage.setItem('day',day)
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
