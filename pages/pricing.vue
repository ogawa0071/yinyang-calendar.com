<template>
  <div :style="styleObject">
    <main>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 pricing">
            <h1>Pricing</h1>
            <table class="table table-hover text-left">
              <thead>
                <tr>
                  <th>部数</th>
                  <th>価格</th>
                  <th>消費税</th>
                  <th>合計</th>
                  <th>送料</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>¥600</td>
                  <td>¥48</td>
                  <td>¥648</td>
                  <td>¥120</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>¥5,400</td>
                  <td>¥432</td>
                  <td>¥5,832</td>
                  <td>¥185</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>¥10,200</td>
                  <td>¥816</td>
                  <td>¥11,016</td>
                  <td>¥185</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>¥14,400</td>
                  <td>¥1,152</td>
                  <td>¥15,552</td>
                  <td><a 
                    href="http://www.kuronekoyamato.co.jp/estimate/kanto.html" 
                    target="_blank">こちら</a></td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>¥21,000</td>
                  <td>¥1,680</td>
                  <td>¥22,680</td>
                  <td><a 
                    href="http://www.kuronekoyamato.co.jp/estimate/kanto.html" 
                    target="_blank">こちら</a></td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>¥36,000</td>
                  <td>¥2,880</td>
                  <td>¥38,880</td>
                  <td><a 
                    href="http://www.kuronekoyamato.co.jp/estimate/kanto.html" 
                    target="_blank">こちら</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-8 col-md-offset-2 banner">
            <ul class="list-inline">
              <li class="center-block">
                <a 
                  href="mailto:info@yinyang-calendar.com" 
                  class="btn btn-default btn-lg">
                  <i class="fa fa-envelope fa-fw"/>
                  <span class="network-name">info@yinyang-calendar.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div></main>
    <footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import fixHeight from '~/assets/fixHeight'

export default {
  components: {
    Footer
  },
  data() {
    return {
      styleObject: {}
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.fixHeight(this))
  },
  mounted() {
    this.fixHeight(this)
    window.addEventListener('resize', this.fixHeight(this))
  },
  methods: {
    fixHeight
  }
}
</script>

<style lang="scss">
@import '~assets/main.scss';
</style>


<style lang="scss" scoped>
@import '~assets/main.scss';

.pricing {
  h1 {
    margin-bottom: 20px;
  }
}
</style>
