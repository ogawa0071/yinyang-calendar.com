<template>
  <fix-height>
    <main>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 main">
            <div class="moon">
              <img src="~assets/moon@2x.png" alt />
            </div>
            <div class="title">
              <img src="~assets/title@2x.png" alt="Yin&Yang Calendar 2018" />
            </div>
            <div class="text">
              <img
                src="~assets/text@2x.png"
                alt="和暦は月と太陽のリズムを組み合わせた、「太陽太陰暦」。"
              />
            </div>
          </div>
          <div class="col-md-8 col-md-offset-2 banner">
            <ul class="list-inline">
              <li class="center-block">
                <a
                  href="https://www.amazon.co.jp/o/ASIN/B07YTF5W5F/chiakira-22/"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <i class="fab fa-amazon fa-fw"></i>
                  <span class="network-name">Amazon.co.jpで購入する</span>
                </a>
              </li>
              <div>
                <nuxt-link to="/pricing/">10部以上ご購入の方へ</nuxt-link>
              </div>
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
                  href="https://tukiyomi.in/"
                  target="_blank"
                  class="btn btn-default btn-lg"
                >
                  <span class="network-name">
                    <small>Salon</small>つきよみ白金台
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <global-footer />
  </fix-height>
</template>

<script>
import GlobalFooter from '~/components/Footer.vue'
import FixHeight from '~/components/FixHeight.vue'

export default {
  components: {
    GlobalFooter,
    FixHeight,
  },
}
</script>
