var vue = new Vue({
  el: "#divContent",
  data: {
    code: "",
    name: "",
    phone: "",
    address: "",
    contact: "",
    notes: "",
  },
  methods: {
    getAddress: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const param = position.coords.latitude + "," + position.coords.longitude;
            axios
              .get(
                "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                  param +
                  "&key=AIzaSyCeX8g5LmxzSUlijbQTzGHub0sks3RGsoA"
              )
              .then((res) => {
                const fm_address = res.data.results[0].formatted_address;
                document.getElementById("address").value = fm_address;
              })
              .catch((err) => {
                console.log(err);
                window.alert("Erro ao pegar o endereço da sua GeoLocalização.");
              });
          },
          (err) => {
            console.log(err);
            window.alert("Erro ao pegar a sua GeoLocalização.");
          }
        );
      } else {
        window.alert("Seu navegador não possui GeoLocalização.");
      }
    },
    getByCode: function () {
      console.log(this.code);
    },
  },
});
