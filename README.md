# vuejs-ycart

## Install
``` javascript
npm install vue-ycart // or yarn add ...
```

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
  count: 1, // INTEGER
  data: {foo: 'bar'}  // OBJECT
}
```

#### Remove item from cart
``` javascript
yCart_do_Remove(15)
```

#### Sync Cookie with Vue data
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

## Example of render
``` html
<table>
	<tr>
		<td>Item</td>
		<td>Price</td>
		<td>Qtd.</td>
		<td>Total</td>
		<td>Remove</td>
	</tr>
	<tr v-for="item, id in yCart_data_items">
		<td>{{ item.data.name }}</td>
		<td>{{ item.value|money }}</td>
		<td><input type="number" v-model="item.count" @change="yCart_do_Update()"></td>
		<td>{{ (item.value * item.count)|money }}</td>
		<td><button @click="yCart_do_Remove(id)">X</button></td>
	</tr>
	<tr>
		<td colspan="4">Subtotal: <strong>{{ yCart_see_Total|money }}</strong></td>
	</tr>
</table>
```
