self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
      ])
    })

  )
});




// PUSH: para enviar notificações
self.addEventListener('push', e => {

  console.log('notificação recebida aqui!!!!')

})