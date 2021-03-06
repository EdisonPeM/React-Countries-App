// This optional code is used to register a service worker.
// register() is not called by default.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) return;

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

async function registerValidSW(swUrl, config) {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) return;

      installingWorker.onstatechange = () => {
        if (installingWorker.state !== 'installed') return;
        if (navigator.serviceWorker.controller) {
          console.log(
            '[SW] New content is available and will be used when all tabs for this page are closed.'
          );

          if (config && config.onUpdate) config.onUpdate(registration);
        } else {
          console.log('[SW] Content is cached for offline use.');

          // Execute callback
          if (config && config.onSuccess) config.onSuccess(registration);
        }
      };
    };
  } catch (error) {
    console.error('[SW] Error during service worker registration:', error);
  }
}

async function checkValidServiceWorker(swUrl, config) {
  try {
    // Check if the service worker can be found. If it can't reload the page.
    const response = await fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    });

    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (
      response.status === 404 ||
      (contentType != null && contentType.indexOf('javascript') === -1)
    ) {
      // No service worker found. Probably a different app. Reload the page.
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
      window.location.reload();
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  } catch {
    console.log(
      '[SW] No internet connection found. App is running in offline mode.'
    );
  }
}
