global.requestAnimationFrame = cb => setTimeout(cb, 0);
global.navigator.geolocation = {
  getCurrentPosition: cb => cb({
    coords: {
      latitude: 100,
      longitude: -100,
    },
  }),
};

Object.defineProperty(document, 'execCommand', {
  value: () => {},
});
