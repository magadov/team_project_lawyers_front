const {NODE_ENV} = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3000';
} else {
  serverUrl = 'https://lawyers-frontend.onrender.com';
}