// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
    
// }

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then((reg) => console.log('Service Worker register', reg))
        .catch((err) => console.log('Service Worker error', err))
    })
}