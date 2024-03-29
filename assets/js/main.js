window.onload = function () {
	var bodyindex = document.getElementById("index");
	var bodyAF1 = document.getElementById("AF1");

	if (bodyindex != null) {
		var brojacNazad = 1;
		document.querySelector("#start").addEventListener("click", function () {

			document.getElementById("omot" + brojacNazad).classList.add("hide");
			document.getElementById("omot2").classList.remove("hide");
			document.getElementById("nazad").classList.remove("hide");
			brojacNazad++;

		})
		document.querySelector("#nazad").addEventListener("click", function () {

			document.getElementById("omot" + brojacNazad).classList.add("hide");
			if (brojacNazad == 4) {
				brojacNazad--;
			}
			brojacNazad--;
			document.getElementById("omot" + brojacNazad).classList.remove("hide");
			if (brojacNazad == 1) {
				document.getElementById("nazad").classList.add("hide");
			}

		})
		document.querySelector("#col1").addEventListener("click", function () {
			document.getElementById("omot" + brojacNazad).classList.add("hide");
			brojacNazad++;
			document.getElementById("omot" + brojacNazad).classList.remove("hide");


		})
		document.querySelector("#col2").addEventListener("click", function () {
			document.getElementById("omot" + brojacNazad).classList.add("hide");
			brojacNazad = brojacNazad + 2;
			document.getElementById("omot" + brojacNazad).classList.remove("hide");

		})
		$("#forsica").mouseover(function () {
			$("#textForsica").removeClass("hide")
		})
		$("#forsica").mouseout(function () {
			$("#textForsica").addClass("hide")
		})


		$("#jordanka").mouseover(function () {
			$("#textJordanka").removeClass("hide")
		})
		$("#jordanka").mouseout(function () {
			$("#textJordanka").addClass("hide")
		})


		$("#smitica").mouseover(function () {
			$("#textSmitica").removeClass("hide")
		})
		$("#smitica").mouseout(function () {
			$("#textSmitica").addClass("hide")
		})


		$("#superstarka").mouseover(function () {
			$("#textSuperstarka").removeClass("hide")
		})
		$("#superstarka").mouseout(function () {
			$("#textSuperstarka").addClass("hide")
		})



		var object1 = $("#patika1");
		var object2 = $("#patika2");
		var object3 = $("#patika3");
		var object4 = $("#patika4");

		var layer = $("#omot1");
		layer.mousemove(function (e) {
			var valueX1 = (e.pageX * -1 / 15);
			var valueY1 = (e.pageY * 1 / 15);

			var valueX2 = (e.pageX * -1 / 10);
			var valueY2 = (e.pageY * -1 / 16);

			var valueX3 = (e.pageX * 1 / 11);
			var valueY3 = (e.pageY * -1 / 20);

			var valueX4 = (e.pageX * 1 / 19);
			var valueY4 = (e.pageY * 1 / 8);

			object1.css({
				'transform': 'translate3d(' + valueX1 + 'px,' + valueY1 + 'px,0) '
			});
			object2.css({
				'transform': 'translate3d(' + valueX2 + 'px,' + valueY2 + 'px,0) '
			});
			object3.css({
				'transform': 'translate3d(' + valueX3 + 'px,' + valueY3 + 'px,0) '
			});
			object4.css({
				'transform': 'translate3d(' + valueX4 + 'px,' + valueY4 + 'px,0) '
			});

		})
	}
	$("#demo01").animatedModal();

	//AF1 STRANICA POCETAK
	if (bodyAF1 != null) {
		$("#demo02").animatedModal();
		document.getElementById("selectNumber").innerHTML += '<option value="0"> Choose Size</option>'
		for (i = 39; i < 45; i++) {
			document.getElementById("selectNumber").innerHTML += '<option value="' + i + '">' + i + '</option>';
		}
		document.getElementById("patikeOmot").innerHTML += '<img src="assets/img/belacela.jpg" class="img-fluid slikaPatike " alt="belaAF1"></img>';
		var colors = ["LightBlue", "DarkBlue", "Red", "Grey", "Black", "White"];
		var parts = ["Upper", "Swoosh", "Midsole", "Outsole"]
		for (j = 0; j < parts.length; j++) {
			for (i = 0; i < colors.length; i++) {
				document.getElementById("patikeOmot").innerHTML += '<img src="assets/img/AF1' + parts[j] + colors[i] + '.png"class="img-fluid hide ' + parts[j] + 'SlikaPatike" id="' + parts[j] + colors[i] + 'S" alt="belaAF1">';
			}
		}
		//VALIDACIJA FORME
		document.getElementById("submit").addEventListener("click", function () {
			let ImePolje = document.getElementById("ime");
			let PrezimePolje = document.getElementById("prezime");
			let EmailPolje = document.getElementById("email");
			let GradPolje = document.getElementById("grad");
			let ddlPolje = document.getElementById("selectNumber");

			let ime = ImePolje.value;
			let prezime = PrezimePolje.value;
			let email = EmailPolje.value;
			let grad = GradPolje.value;
			let ddl = ddlPolje.value;

			let regExIme = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,29}$/;
			let regExPrezime = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{3,29}(\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{3,29})*$/;
			let regExEmail = /^([a-z0-9\.\_\,\-]{2,35}@[a-z]{2,10}\.[a-z]{2,5})(\.[a-z]{2,5})*$/;
			let regExGrad = /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,29}(\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,29})*$/;
			let isValid = regExIme.test(ime);
			if (isValid) {
				ImePolje.nextElementSibling.classList.add("hide");
				ImePolje.classList.remove("borderGreska");
			} else {
				ImePolje.nextElementSibling.classList.remove("hide");
				ImePolje.classList.add("borderGreska");
			}

			isValid = regExPrezime.test(prezime);
			if (isValid) {
				PrezimePolje.nextElementSibling.classList.add("hide");
				PrezimePolje.classList.remove("borderGreska");
			} else {
				PrezimePolje.nextElementSibling.classList.remove("hide");
				PrezimePolje.classList.add("borderGreska");
			}

			isValid = regExEmail.test(email);
			if (isValid) {
				EmailPolje.nextElementSibling.classList.add("hide");
				EmailPolje.classList.remove("borderGreska");
			} else {
				EmailPolje.nextElementSibling.classList.remove("hide");
				EmailPolje.classList.add("borderGreska");
			}

			isValid = regExGrad.test(grad);
			if (isValid) {
				GradPolje.nextElementSibling.classList.add("hide");
				GradPolje.classList.remove("borderGreska");
			} else {
				GradPolje.nextElementSibling.classList.remove("hide");
				GradPolje.classList.add("borderGreska");
			}

			if (ddl == "0") {
				ddlPolje.classList.add("borderGreska");
				ddlPolje.nextElementSibling.classList.remove("hide");
			}
			else {
				ddlPolje.classList.remove("borderGreska");
				ddlPolje.nextElementSibling.classList.add("hide");
			}
		})
		//VALIDACIJA FORME
		var MestoBojenja;
		var SvePatike;
		var boja;

		document.querySelector("#LightBlue").addEventListener("click", function () {
			boja = "LightBlue";
			let IzabranaBoja = this.id;
			SvePatike = document.getElementsByClassName(MestoBojenja + "SlikaPatike");
			for (let i = 0; i < SvePatike.length; i++) {
				SvePatike.item(i).classList.add("hide");
			}
			document.getElementById(MestoBojenja + IzabranaBoja + "S").classList.remove("hide");
		})

		document.querySelector("#Red").addEventListener("click", function () {
			boja = "Red";
			let IzabranaBoja = this.id;
			SvePatike = document.getElementsByClassName(MestoBojenja + "SlikaPatike");
			for (let i = 0; i < SvePatike.length; i++) {
				SvePatike.item(i).classList.add("hide");
			}
			document.getElementById(MestoBojenja + IzabranaBoja + "S").classList.remove("hide");
		})
		document.querySelector("#Grey").addEventListener("click", function () {
			boja = "Grey";
			let IzabranaBoja = this.id;
			SvePatike = document.getElementsByClassName(MestoBojenja + "SlikaPatike");
			for (let i = 0; i < SvePatike.length; i++) {
				SvePatike.item(i).classList.add("hide");
			}
			document.getElementById(MestoBojenja + IzabranaBoja + "S").classList.remove("hide");
		})
		document.querySelector("#White").addEventListener("click", function () {
			boja = "White";
			let IzabranaBoja = this.id;
			SvePatike = document.getElementsByClassName(MestoBojenja + "SlikaPatike");
			for (let i = 0; i < SvePatike.length; i++) {
				SvePatike.item(i).classList.add("hide");
			}
			document.getElementById(MestoBojenja + IzabranaBoja + "S").classList.remove("hide");
		})
		document.querySelector("#Black").addEventListener("click", function () {
			boja = "Black";
			let IzabranaBoja = this.id;
			SvePatike = document.getElementsByClassName(MestoBojenja + "SlikaPatike");
			for (let i = 0; i < SvePatike.length; i++) {
				SvePatike.item(i).classList.add("hide");
			}
			SvePatike = "";
			document.getElementById(MestoBojenja + IzabranaBoja + "S").classList.remove("hide");
		})

		document.querySelector("#DarkBlue").addEventListener("click", function () {
			boja = "DarkBlue";
			let IzabranaBoja = this.id;
			SvePatike = document.getElementsByClassName(MestoBojenja + "SlikaPatike");
			for (let i = 0; i < SvePatike.length; i++) {
				SvePatike.item(i).classList.add("hide");
			}
			SvePatike = "";
			document.getElementById(MestoBojenja + IzabranaBoja + "S").classList.remove("hide");
		})


		document.querySelector("#upper").addEventListener("click", function () {
			MestoBojenja = "Upper";
			document.getElementById("birajBoju").classList.add("right");
		}
		)
		document.querySelector("#Swoosh").addEventListener("click", function () {
			MestoBojenja = "Swoosh";
			document.getElementById("birajBoju").classList.add("right");
		}
		)
		document.querySelector("#Midsole").addEventListener("click", function () {
			MestoBojenja = "Midsole";
			document.getElementById("birajBoju").classList.add("right");
		}
		)

		document.querySelector("#Outsole").addEventListener("click", function () {
			MestoBojenja = "Outsole";
			document.getElementById("birajBoju").classList.add("right");
		}
		)
		document.querySelector("#izaberiBoju").addEventListener("click", function () {
			document.getElementById("birajBoju").classList.remove("right");

		}
		)


	}
	//AF1 STRANICA KRAJ
	$(document).ready(function () {
		$(".slide-toggle").click(function () {
			$("#social").animate({

				width: "toggle",
				opacity: "show",

			}
			);

			$("#podaci").animate({


				opacity: "hide",

			}
			);
		});
	});

	$(document).ready(function () {
		$(".slide-toggle2").click(function () {

			$("#podaci").animate({
				width: "toggle",
				opacity: "show",
			}
			);

			$("#social").animate({
				opacity: "hide",
			}
			);

		});
	});
}