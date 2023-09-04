<template>
  <section class="container-fluid back" style="width;: 100%px">
    <div class="container-fluid contain">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 respo">
          <div>
            <h1 class="txt">Welcome To Med-Verse!</h1>
          </div>
          <div>
            <img src="@/assets/image/RectangleLogin.svg" class="cover" />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h3 style="margin-bottom: 100px !important" class="mb-5 text-center">
            Create Account
          </h3>
          <form class="row g-5" @click.prevent>
            <div class="col-md-6">
              <input
                type="text"
                placeholder="Full Name"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-6">
              <input
                type="number"
                placeholder="Contact Number"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-6">
              <input
                type="email"
                placeholder="Email Address"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-6">
              <input
                type="tex"
                placeholder="City"
                class="form-control"
                id="inputEmail4"
              />
            </div>
            <div class="col-md-6">
              <input
                type="password"
                placeholder="password"
                class="form-control"
                id="inputPassword4"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                id="inputClinic"
                placeholder="Clinic name"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Address"
              />
            </div>

            <div class="col-md-6">
              <select class="form-select">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                id="address"
                placeholder="Choose your location"
                style="border: none !important"
              />
              <GoogleMap
                api-key="AIzaSyCoRS2H7mxHZhH9Lzi9WA_vnvMBvZAHEBw"
                style="
                  width: 100%;
                  height: 140px;
                  border-radius: 25px !important;
                "
                :center="center"
                :zoom="5"
              >
                <Marker :position="center"></Marker>
              </GoogleMap>
            </div>
            <div style="align-items: center" class="col-md-6 mt-5">
              <button type="submit" class="btn btn-primary form-control">
                sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="resg">
      Already have an account?
      <router-link
        :to="{ name: 'login' }"
        class="fw-bold"
        style="text-decoration: none; color: black"
        >Log in
      </router-link>
    </div>
  </section>
</template>
<style scoped>
select {
  background-color: #65c5b9;
  color: white;
  border-radius: 25px;
  width: 100%p;
  border: none;
  width: 100%;
  padding: 10px;
  margin-left: 15px;
  text-align: center;
}
.resg {
  position: absolute;
  bottom: -70px;
  right: 100px;
}
.cover {
  width: 79%;
}
.txt {
  width: 37% !important;
  padding-bottom: 50px !important;
}
.form {
  width: 80%;
  margin: auto;
}
input {
  margin-left: 15px;
  padding: 0px;
  padding-bottom: 13px;
  border: none;
  border-radius: 0px;
  border-bottom: 2px solid rgb(174, 174, 174);
}
.btn-primary {
  background-color: #65c5b9;
  border-radius: 15px;
}
div .mapdiv {
  border-radius: 20px !important;
}
.back {
  width: 100%;
  position: absolute;
  background: url("@/assets/image/Vectorlogin.svg");
  background-repeat: no-repeat;
}
.contain {
  margin-top: 10%;
}
@media only screen and (max-width: 992px) {
  .respo {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    margin-bottom: 70px;
  }
  .txt {
    width: 100% !important;
    font-size: 30px;
    text-align: center;
  }
  .cover {
    width: 100%;
  }

  .container-fluid {
    width: 100%;
  }
  .resg {
    position: relative;
    text-align: center !important;
    width: 100%;
    bottom: -6px;
    right: 0px;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  form input {
    text-align: center !important;
  }
  form {
    width: 100%;
    text-align: center !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 1200px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>

<script>
import { defineComponent, ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = ref({ lat: 37.772, lng: -122.214 });

    return {
      center,
    };
  },
});
</script>
