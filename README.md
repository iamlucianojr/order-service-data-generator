# Fake Data Generator for Order Service / Order App

Generates a large JSON object full of fake data for simulating the backend of a cafe/restaurant shop. 

Used to simulate a REST / GraphQL backend in [order-service](https://github.com/luciano-jr/order-service).

## Usage

```js
import generateData from 'data-generator-order-service';

const data = generateData();
// now do whatever you want with the data...
console.log(data);
{
    establishments: [ /* ...3 establishments */],
    catalogFlow: [ /* ...3 catalogs */],
    categories: [ /* ...3 categories */],
    products: [ /* ...30 products */],
    orders: [ /* ? */],
}
```

## Data schema

- catalogFlows
  - uuid: string
  - version: integer
- establishments
  - uuid: string
  - name: string
- categories
  - uuid: string
  - name: string
- products
  - uuid: string
  - category_uuid: string
  - reference: string
  - price: float
  - thumbnail: string
  - image: string
  - description: string
  - stock: integer
- orders
  - uuid: integer
  - catalog_flow_uuid: string
  - catalog_flow_version: integer
  - establishment_uuid: string
  - items: [{ product_uuid: integer, quantity: integer }]
  - status: 'ordered' | 'delivered' | 'canceled'
