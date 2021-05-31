var vue = new Vue({
  el: "#divContent",
  data: {
    selected_lang: "",
    need_langs: [],
    need_trans: [],
  },
  mounted: function () {
    axios
      .post("translates-wrk.php", { action: "getNeedLangs" })
      .then((res) => {
        this.need_langs = res.data;
      })
      .catch((err) => {
        adPutError(err);
      });
  },
  methods: {
    getNeedTrans: function () {
      const valLang = document.getElementById("lang").value;
      if (!valLang) {
        return;
      }
      axios
        .post("translates-wrk.php", { action: "getNeedTrans", language: valLang })
        .then((res) => {
          this.need_trans = res.data;
          for (let index = 0; index < 3; index++) {
            const inputDone = document.getElementById("done" + index);
            if (inputDone) {
              inputDone.value = "";
            }
          }
        })
        .catch((err) => {
          adPutError(err);
        });
      this.selected_lang = valLang;
    },
    saveTrans: function () {
      const valLang = this.selected_lang;
      if (!valLang) {
        return;
      }
      for (let index = 0; index < 3; index++) {
        const divSeed = document.getElementById("seed" + index);
        const inputDone = document.getElementById("done" + index);
        if (divSeed && inputDone) {
          const valSeed = divSeed.innerText;
          const valDone = inputDone.value;
          if (valSeed && valDone) {
            axios
              .post("translates-wrk.php", {
                action: "saveTrans",
                lang: valLang,
                seed: valSeed,
                done: valDone,
              })
              .then((res) => {
                adPutSuccess(res.data);
              })
              .catch((err) => {
                adPutError(err);
              });
          }
        }
      }
      this.getNeedTrans();
    },
    lineClean: function (index) {
      document.getElementById("done" + index).value = "";
    },
    lineRemove: function (index) {
      const valLang = this.selected_lang;
      if (!valLang) {
        return;
      }
      const divSeed = document.getElementById("seed" + index);
      if (divSeed) {
        const valSeed = divSeed.innerText;
        if (valSeed) {
          axios
            .post("translates-wrk.php", {
              action: "removeNeed",
              lang: valLang,
              seed: valSeed,
            })
            .then((res) => {
              this.need_trans = this.need_trans.filter((_, idx) => idx != index);
              adPutSuccess(res.data);
            })
            .catch((err) => {
              adPutError(err.response.data);
            });
        }
      }
    },
  },
});
