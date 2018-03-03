// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBjnxJ9dmx1ydySy0VU5r2J6ijh7e3SK-U",
    authDomain: "chat-devmeeting.firebaseapp.com",
    databaseURL: "https://chat-devmeeting.firebaseio.com",
    projectId: "chat-devmeeting",
    storageBucket: "chat-devmeeting.appspot.com",
    messagingSenderId: "181074998551"
  }
};
