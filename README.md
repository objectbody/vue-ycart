# vuejs-ycart

## Usage
``` javascript

import YCart from 'vue-ycart'

Vue.use(YCart, {
	name: 'myCart'
})

```

## Methods

#### Add item to cart
``` javascript
yCart_do_Add(15, 25.00, {title: 'Product Title'})
```

##### Item body
``` javascript
01: {
  id: 01, // INTEGER
  value: 15.00, // NUMBER
  data: {foo: 'bar'}  // OBJECT
}
```

#### Remove item from cart
``` javascript
yCart_do_Remove(15)
```

#### Remove item from cart
``` javascript
yCart_do_Update()
```

## Computed variables 

#### Number of items in cart
``` javascript
yCart_see_Count
```

#### Number of items in cart
``` javascript
yCart_see_Total|money
```
