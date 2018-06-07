# UniversalV6Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7, and has been modified in order to work with SSR. It is a simple demo to show a flickering issue happening with lazy-loading routes when using SSR.

## How to reproduce the issue

1. Run `npm install` to install all dependencies
2. Run `npm run build:universal` to build the project
3. Run `npm run serve:universal` to execute the server
4. Open your browser and set the network conditions to slow 3G, so you can appreciate better the issue
5. Navigate to *http://localhost:4000/lazy*. 

You should see how the content appears, then disapears and then appears again.
If you watch the elements with the inspector, you can see how the lazy loaded component is received with the initial render of the page, and then (when the page is rehydrated) how it suddenly disapears, leaving the `<router-outlet>` alone. Finally, it appears again.


**NOTE:** If the router is imported with the `initialNavigation` set to `enabled`, like this:

```js
    RouterModule.forRoot(routes,{
      initialNavigation:'enabled'
    }),
```

Then it works in this demo. However, I've a more complex project that does not load when `initialNavigation` is set to `enabled`. The `<app-root>` keeps empty all the time.

I'm gonna investigate it further in a new branch.

