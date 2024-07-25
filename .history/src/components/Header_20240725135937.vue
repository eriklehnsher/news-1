<template>
  <div class="header uk-box-shadow-small">
    <div class="header__top" style="background: #282829">
      <div class="uk-container">
        <nav
          class="uk-navbar-container uk-navbar-transparent uk-navbar"
          uk-navbar
        >
          <div class="uk-navbar-left">
            <div class="uk-navbar-item header__top__navItem uk-visible@m">
              <div class="uk-flex-middle uk-grid-5 uk-grid" uk-grid>
                <div class="uk-width-auto uk-first-column">
                  <span
                    class="header__top__icon uk-icon"
                    uk-icon="icon: clock ; ratio:0.75; "
                  ></span>
                </div>
                <div class="uk-width-expand">
                  <span class="header__top__txt">
                    Thứ 4, Ngày 24/07/2024 15:35
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-navbar-right">
            <div
              class="uk-navbar-item header__top__navItem uk-padding-remove-right"
              uk-toggle="cls: uk-padding-remove-right; mode: media; media: @l"
              aria-expanded="true"
            >
              <div class="uk-flex-middle uk-grid-5 uk-grid" uk-grid>
                <div class="uk-width-auto uk-first-column">
                  <span
                    class="header__top__icon uk-icon"
                    uk-icon="icon:sign-icon; ratio:1;"
                    ><svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"
                      ></polygon>
                      <polygon
                        points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"
                      ></polygon></svg
                  ></span>
                </div>
                <div class="uk-width-expand">
                  <ul
                    class="header__top__subnav uk-subnav uk-subnav-divider"
                    uk-margin
                  >
                    <li class="uk-first-column">
                      <a href="">Đăng Nhập</a>
                    </li>
                    <li>
                      <a href="">Đăng Ký</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div
      uk-sticky="top: 100vh; animation: uk-animation-slide-top;"
      class="uk-sticky"
    >
      <div
        class="uk-background-default header__bottom"
        style="
          background-image: -webkit-linear-gradient(
            left,
            #34333e,
            #494852,
            #494852,
            #34333e
          );
        "
      >
        <div class="uk-container uk-padding-remove">
          <nav class="uk-nav-container uk-nav-transparent" uk-navbar>
            <div class="uk-navbar-left">
              <a
                href="."
                class="uk-navbar-item header__bottom__navItem uk-logo uk-padding-remove-left"
                uk-toggle="cls: uk-padding-remove-left; mode: media; media: @l"
                aria-expanded="true"
              >
                <img src="../assets/imgs/kenhtao_logo.png" alt=""
              /></a>
            </div>
            <div class="uk-navbar-right">
              <ul class="ul-fsc uk-navbar-nav uk-text-uppercase">
                <li><a href="">Tin mới</a></li>
                <li><a href="">Tin nóng </a></li>
                <li><a href="">Tin Xem nhiều</a></li>
                <li><a href="">Tin Yêu thích</a></li>
                <li><a href="">Tin Sôi động</a></li>
                <li><a href="">Tin Đang xem </a></li>
                <li><a href="">Tin Đã xem </a></li>
              </ul>
              <transition name="mobile-nav">
                <ul class="ul-mobile uk-navbar-nav uk-text-uppercase">
                  <li><a href="">Tin mới</a></li>
                  <li><a href="">Tin nóng </a></li>
                  <li><a href="">Tin Xem nhiều</a></li>
                  <li><a href="">Tin Yêu thích</a></li>
                  <li><a href="">Tin Sôi động</a></li>
                  <li><a href="">Tin Đang xem </a></li>
                  <li><a href="">Tin Đã xem </a></li>
                </ul>
              </transition>
              <a href="" style="color: #494852;" class="uk-icon-button" uk-icon=" icon: instagram"></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  

</script>
<style lang="">
</style>