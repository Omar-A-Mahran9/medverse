<template>
  <section class="container-fluid pb-5 mt-5">
    <div class="sectitle mb-5">
      <div class="d-flex align-items-center gap-2" style="color: #f59e0b">
        <div style="border-bottom: 2px solid #f59e0b; width: 30px"></div>
        Our Recommendation
      </div>
      <div style="margin-left: 35px"><h4>Our Subscription Plans</h4></div>
    </div>
    <h1 class="text-center mb-4">Choose Yor Plan</h1>
    <div
      class="p-1 row justify-content-center align-items-center text-center mb-5 plan"
      style="
        background-color: #d3e7f0;
        color: #034f75;
        border-radius: 7px;

        margin: auto;
      "
    >
      <div
        class="p-2 col-6 bg-white"
        style="border-radius: 7pxfont-size: font-size: 100%"
      >
        Monthly
      </div>
      <div class="col-6" style="font-size: font-size: 100%">
        Yearly <span style="color: #19875480; font-size: 90%">(Save 2.5%)</span>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div
        v-for="(pack, i) in packages"
        :key="i"
        class="col-sm-6 col-md-4"
        style="width: 362px"
      >
        <div class="card mb-4 text-center coll">
          <div class="card-body">
            <h5 class="card-title mb-3">
              {{ pack.type }}
            </h5>
            <h1>{{ pack.price }}</h1>
            <p>User/Month</p>
            <ul class="list-group">
              <div
                v-for="(feature, i) in pack.features.active"
                :key="i"
                class="d-flex"
                style="width: 100%"
              >
                <li
                  class="list-group-item text-left"
                  style="border: 0px; padding: 0px"
                >
                  <img src="@/assets/image/trueicon.svg" class="me-2" />
                  <span class="acti">{{ feature }}</span>
                </li>
              </div>
              <div
                v-for="(feature, i) in pack.features.notactive"
                :key="i"
                class="d-flex"
                style="width: 100%"
              >
                <li
                  class="list-group-item text-left"
                  style="border: 0px; padding: 0px"
                >
                  <img src="@/assets/image/falseicon.svg" class="me-2" />
                  <span class="not">{{ feature }}</span>
                </li>
              </div>
            </ul>
            <div
              class="card-footer mt-3"
              style="background-color: #fff; border: none"
            >
              <a href="#" class="byn">Choose Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      packages: [
        {
          type: "Basic",
          price: "19$",
          Date: "User/Month",
          features: {
            active: [
              "Attendance Management",
              "Leave System Management",
              "Employee Management",
              "Chat Support",
            ],
            notactive: [
              "Expense Tracking ",
              "Invoice Generate ",
              " Purchase Generate ",
              "Payroll",
              "App Management",
            ],
          },
        },
        {
          type: "Advance ",
          price: "49$",
          Date: "User/Month",
          features: {
            active: [
              "App Management",
              "Attendance Management",
              "Leave System Management",
              "Employee Management",
              "Expense Tracking ",
              "Chat Support",
              "Invoice Generate ",
            ],
            notactive: [" Purchase Generate ", "Payroll"],
          },
        },
        {
          type: "Student ",
          price: "9$",
          Date: "User/Month",
          features: {
            active: [
              "App Management",
              "Attendance Management",
              "Leave System Management",
              "Employee Management",
              "Expense Tracking ",
              "Chat Support",
              "Invoice Generate ",
              " Purchase Generate ",
              "Payroll",
            ],
            notactive: [],
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.coll {
  cursor: pointer;
  background-color: #ffffff !important;
}
.coll:hover {
  .not,
  h1,
  p,
  .card-title,
  .acti {
    color: #ffffff !important;
  }
}

.coll:hover {
  background-color: #1d617a !important;
  scale: 105%;
}
.coll:hover .byn {
  color: #1d617a;
  background-color: #ffffff;
}

.byn {
  margin-top: 100px;
  color: #1d617a;
  background-color: #d3e7f0;
  padding: 10px;
  text-decoration: none;
  border-radius: 10px;
  padding-left: 35px;
  padding-right: 35px;
}
h1,
p {
  color: #1d617a !important;
}
.card-title {
  border: 1px solid;
  border-radius: 7px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 45%;
  margin: auto;
}
h5 {
  color: #1d617a !important;
}
.acti {
  font-weight: normal;
  color: #1d617a;
  font-size: 80%;
}
.not {
  font-weight: lighter;
  color: #1d617a;
  font-size: 80%;
  text-decoration-line: line-through;
}
li {
  background-color: transparent !important;
}
.card-footer {
  background-color: transparent !important;
}
.plan {
  width: 23%;
}
@media screen and (max-width: 992px) {
  .plan {
    width: 100%;
  }
}
</style>
