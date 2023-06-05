# Product-API
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
####
>End point
Make a GET request to <br>
 https://product-api-o31k-5dkf6omqj-gaonkarbhai.vercel.app/api/v1/product <br>
with the following query parameters:
>>*featured* : Set to "true" if you want to filter by featured products. <br>
>>*rating* : Set to a numeric value to filter by product rating.<br>
>>*company* : Set to a string value to filter by company name.<br>
>>*name* : Set to a string value to search for product names containing the provided value.<br>
>>*sort* : Set to a comma-separated string of field names to sort the results. Prefix a field name with - to sort in descending order.<br>
>>*fields*: Set to a comma-separated string of field names to select only specific fields in the results.<br>
>>*page*: Set to a numeric value to specify the page number.<br>
>>*limit* : Set to a numeric value to specify the number of results per page.<br>
>>


