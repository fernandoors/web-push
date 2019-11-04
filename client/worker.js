console.log('Service Worker Loaded...')

self.addEventListener('push', e => {
  const data = e.data.json()
  console.log('Push Recieved...')

  self.registration.showNotification(data.title, {
    body: 'Notified by Fernando Silva',
    icon: 'https://raw.githubusercontent.com/fernandoors/start-wars/master/public/assets/image/vehicles-min.jpg'
  })

})