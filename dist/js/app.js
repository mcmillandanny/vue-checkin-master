"use strict";

console.log("Vue-HW-week2-");

var app = new Vue({
	el: "#app",
	data: {
		newName: "",
		newEmail: "",
		people: []
	},
	methods: {
		addPerson: function addPerson() {
			var newPerson = {
				image: "https://www.gravatar.com/avatar/" + md5(this.newEmail),
				name: this.newName,
				email: this.newEmail,
				timestamp: new Date().getTime(),
				checkin: moment(this.timestamp).format('LL, @ LT')

			};

			this.newEmail = "", this.newName = "", this.people.push(newPerson);

			if (this.people.length > 3) {
				this.people.splice(this.index, 1);
			}
			this.focus();
		},

		focus: function focus() {
			this.$refs.nameInp.focus();
		}
	}
});

var explosion = function explosion() {

	var img = document.createElement("img");
	img.src = "https://media.giphy.com/media/XUFPGrX5Zis6Y/giphy.gif";
	var src = document.getElementById('explosion');
	src.classList.add('explosion');
	src.appendChild(img);
};

var btn = document.querySelector('button').addEventListener('click', explosion);
//# sourceMappingURL=app.js.map
