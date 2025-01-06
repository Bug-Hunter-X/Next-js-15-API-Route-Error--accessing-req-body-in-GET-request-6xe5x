# Next.js 15 API Route Error: Accessing req.body in GET Request

This repository demonstrates a common error in Next.js 15 API routes when attempting to access the `req.body` property in a GET request.  The `req.body` property is only populated for POST, PUT, or PATCH requests. Accessing it in a GET request will result in an error.

## Bug

The `pages/api/hello.js` file contains a Next.js API route that attempts to access `req.body` in a GET request.  This causes an error because the `req.body` property is undefined for GET requests. 

## Solution

The solution is to check if the request method is POST, PUT, or PATCH before accessing `req.body`.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Make a GET request to `/api/hello`. You will see the error.
5. Modify the `pages/api/hello.js` to the solution file to prevent the error.