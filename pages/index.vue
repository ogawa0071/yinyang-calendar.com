<template>
  <div>
    <main>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 main">
            <div class="title">
              <img src="~assets/title.svg" alt="2021 Yin&Yang Calendar" />
            </div>
            <div class="text">
              <img
                src="~assets/text.svg"
                alt="イン・ヤン カレンダー 和暦・月暦"
              />
            </div>
          </div>
          <div class="col-md-8 col-md-offset-2 banner">
            <ul class="list-inline">
              <li class="center-block">
                <a
                  href="https://www.amazon.co.jp/o/ASIN/B08JH7XT5H/chiakira-22/"
                  target="_blank"
                  class="btn btn-default btn-lg color-gold"
                >
                  <i class="fab fa-amazon fa-fw"></i>
                  <span class="network-name">Amazonで詳しくみる</span>
                </a>
              </li>
              <div>
                <nuxt-link to="/pricing/">卸価格について</nuxt-link>
              </div>
              <li class="center-block">
                <a
                  href="https://tukiyomi.in/"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <span class="network-name">
                    <small>Salon</small>つきよみ白金台
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tukiyomichan/"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <i class="fab fa-instagram fa-fw"></i>
                  <span class="network-name">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/tukiyomichan"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <i class="fab fa-facebook-square fa-fw"></i>
                  <span class="network-name">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tukiyomichan"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <i class="fab fa-twitter fa-fw"></i>
                  <span class="network-name">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ameblo.jp/tukiyomichan/"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <i class="fas fa-edit fa-fw"></i>
                  <span class="network-name">Blog</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main {
  margin-bottom: 50px;
  background-image: url('~assets/moon@2x.png');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
}

.title {
  padding: 50px 0;

  @media (min-width: 768px) {
    padding: 80px 0;
  }
}

.text {
  padding: 20px 0;

  @media (min-width: 768px) {
    padding: 50px 0;

    img {
      width: 420px;
    }
  }
}

.center-block {
  .color-gold {
    border: 1px solid $white;
    color: $gold;
    background-color: $white;
    &:hover,
    &:focus {
      border: 1px solid $gold;
      outline: none;
      color: $white;
      background-color: $gold;
    }
  }
}
</style>

<style lang="scss">
.banner {
  ul {
    div {
      margin-bottom: 30px;

      a {
        color: $white;
      }
    }
  }

  li {
    margin-bottom: 15px;
    &.center-block {
      display: block;
    }

    small {
      font-size: 10px;
      margin-right: 5px;
    }
  }

  .btn {
    // text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    border-radius: 0;
  }

  .btn-default {
    border: 1px solid $white;
    color: $white;
    background-color: transparent;
    &:hover,
    &:focus {
      border: 1px solid $gold;
      outline: none;
      color: $white;
      background-color: $gold;
    }
  }
}
</style>
