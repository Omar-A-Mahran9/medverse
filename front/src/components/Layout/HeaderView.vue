<template>
  <nav class="navbar navbar-expand-lg mt-xl-5" style="z-index: 9999">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="@/assets/image/Logo.svg" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center align-items-center"
        >
          <!-- <li class="nav-item">
            <a class="nav-link primarycolor" aria-current="page" href="#"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link primarycolor" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link primarycolor me-4 res" href="#">Services</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link seccolor me-4 res" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link seccolor me-4 res" href="#">Services</a>
          </li>
          <li class="">
            <a class="nav-link seccolor me-4 res" href="#">Our Story</a>
          </li>
          <li class="nav-item">
            <a class="nav-link seccolor me-4 res" href="#">Contact Us</a>
          </li>
          <!-- <li class="nav-item me-4 res">
            <a class="nav-link btn btn-primary text-white botto" href="#"
              >Register</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link btn btn-primary text-white botto" href="#"
              >Login</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.res {
  border-radius: 25px;
  font-size: 13px !important;
  border: 1px solid #1b1c57 !important;
}

@media only screen and (max-width: 991px) {
  .botto {
    width: 150px;

    margin: 10px;
  }
  .res {
    margin-left: 20px;
    margin-bottom: 6px;
    border: none !important;
    font-size: 20px !important;
  }
}
</style>
