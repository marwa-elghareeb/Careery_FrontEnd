// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api : {
    host : "http://dev.careery.com:5030/",    
    // socketHost : "http://13.233.250.14:5030/",    
    prefix : "api/1.0/"
  },
  s3url: 'https://s3.us-west-2.amazonaws.com/test-projects.co.in/',
  adminUrl: 'http://localhost:8000/admin/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.