import Button from './button/index.vue';
//按需引入
export {
    Button
}

const component = [Button];

const BdUI = {
    install(App) {
		component.forEach((item) => {
			App.component(item.name, item);
		});
	},
}

export default BdUI;