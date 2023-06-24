# Product-API

## Installation and Run locally
```bash
  git clonehttps://github.com/gaonkarBhai/Product-API.git
  cd Product-API
```
Run with npm
```bash
  npm i
  npm start
```
## Documentation
Query and pagination example for a product database using Mongoose and Express.js.

## Demo
Request : `https://product-api-o31k-5dkf6omqj-gaonkarbhai.vercel.app/api/v1/product?limit=2&rating=4.5` <br>
Responce :
```json
{
  "products": [
    {
      "_id": "647b7d6d4d01cbc54edb7b25",
      "name": "Under Armour Sports T-Shirt",
      "featured": true,
      "price": 1999,
      "rating": 4.5,
      "description": "A comfortable and breathable t-shirt for sports and workouts",
      "company": "Under Armour",
      "createdAt": "2023-06-03T17:50:37.859Z",
      "updatedAt": "2023-06-03T17:50:37.859Z",
      "__v": 0
    },
    {
      "_id": "647b7d6d4d01cbc54edb7b29",
      "name": "Lululemon Yoga Mat",
      "featured": false,
      "price": 3999,
      "rating": 4.5,
      "description": "A high-quality yoga mat for your workout sessions",
      "company": "Lululemon",
      "createdAt": "2023-06-03T17:50:37.859Z",
      "updatedAt": "2023-06-03T17:50:37.859Z",
      "__v": 0
    }
  ],
  "nbHits": 2
}
```
<br>

### End point
Make a GET request to <br>
 https://product-api-o31k-5dkf6omqj-gaonkarbhai.vercel.app/api/v1/product <br>
with the following query parameters:


| Parameter  | Description                                                     | Example         |
|------------|-----------------------------------------------------------------|-----------------|
| featured   | Filter by featured products.                                    | featured=true   |
| rating     | Filter by product rating (numeric value).                        | rating=4        |
| company    | Filter by company name (string value).                           | company=Apple   |
| name       | Search for product names containing the provided value.          | name=iPhone     |
| sort       | Sort the results by field names. Prefix with - for descending order. | sort=-price,name |
| fields     | Select only specific fields in the results.                      | fields=name,price |
| page       | Specify the page number for paginated results.                   | page=2          |
| limit      | Specify the number of results per page.                          | limit=10        |

