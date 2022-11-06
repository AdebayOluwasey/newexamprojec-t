Website link: https://stellular-lamington-26afbc.netlify.app

1. Setup react-router
Done using React Router Dom and implemented in App.js for each routing

2.Implement Nested routes,
I did this on the Models page with nested routes /models/gallery and /models/locations
3. 404 page 
404 page had a path * and it displays whenever a path that doesn't match the path of routes I had stated
4. I created Error boundary and wrapped it around the home component

5. Set up fake userAuthContext using the context API to always carry out a fake authentication, bonus - extract out a custom hook to get the currently logged-in user.
This was done using usecontext, I saved the userdata in theUser. Anyone would only be able to login with the two users 'Shay' and 'Ifeoluwa' with passwords 12345 and 2468 respectively. A custom hook 'useGetUser' was extracted to get the currently logged in user from the context.

6.  Implement SEO and Navigation menu that will show on each page

Navigation menu was implemented on the home page with home, models and login. SEO was improved using the helmet library which was created specifically for this. A sitemap was also created in the public folder.
