import Cookie from 'js-cookie'
import _ from 'lodash'

export default {
	
	install: function(Vue, options){
		
		let optionsDefaults = {
			name: 'yCart',
			coin: 'BRL',
			language: 'pt-BR'
		}

		var options = _.merge(optionsDefaults, options)

		if(!Cookie.get(options.name)){

			Cookie.set(options.name, {})

		}

		Vue.mixin({
			
			methods: {
				
				yCart_do_Remove: function(id){
					
					Vue.delete(this.yCart_data_items, id)
					
					this.yCart_do_Update()

				},
				
				yCart_do_Add: function(id, value, data){
					
					if(!this.yCart_do_check(id)){
						
						let item = {

							id: id,
							value: value,
							data: data,
							count: 1
						}

						Vue.set(this.yCart_data_items, id, item)

					} else {

						this.yCart_data_items[id].count++

					}

					this.yCart_do_Update()

				},

				yCart_do_check: function(id){

					return _.get(this.yCart_data_items, id)

				},

				yCart_do_Update: function(){

					Cookie.set(options.name, this.yCart_data_items)

				}
			},

			computed: {

				yCart_see_Total: function(){

					let total = 0

					_.forEach(this.yCart_data_items, function(item){
						total = total + (item.value * item.count)
					})

					return total

				},

				yCart_see_Count: function(){

					return _.size(this.yCart_data_items)

				}

			},

			data: ()=>{

				return {

					yCart_data_items: Cookie.getJSON(options.name)

				} 

			},

			filters: {

				money: function(value){
					
					var formater = new Intl.NumberFormat(options.language, {
						style: 'currency',
						currency: options.coin,
						minimumFractionDigits: 2,
					})

					return formater.format(value).replace('$', '$ ')

				}

			}

		})

	}
}