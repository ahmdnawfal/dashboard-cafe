import Pusher from 'pusher-js';

const pusher = new Pusher('6e9ab949a5ffc3c65e9f', {
  cluster: 'ap1',
});

export { pusher };
