class Eventbus{
	constructor() {
		this.content = {};
	}
	pub(name, data) {
		if(this.content[name]) {
			for(var i = 0; i < this.content[name].length; i++) {
				this.content[name][i](data);
			}
		}
	}
	sub(name, callback) {
		this.content[name] = this.content[name] || [];
		this.content[name].push(callback);
	}
}