<template>
  <div>
    <main>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 pricing">
            <h1 class="title">Pricing</h1>
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
                  <td>¥750</td>
                  <td>¥75</td>
                  <td>¥825</td>
                  <td>¥120</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>¥6,750</td>
                  <td>¥675</td>
                  <td>¥7,425</td>
                  <td>¥185</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>¥12,000</td>
                  <td>¥1,200</td>
                  <td>¥13,200</td>
                  <td>¥185</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>¥16,875</td>
                  <td>¥1,688</td>
                  <td>¥18,568</td>
                  <td>
                    <a
                      href="https://www.kuronekoyamato.co.jp/estimate/kanto.html"
                      target="_blank"
                      >こちら</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>50</td>
                  <td>¥26,250</td>
                  <td>¥2,625</td>
                  <td>¥28,875</td>
                  <td>
                    <a
                      href="https://www.kuronekoyamato.co.jp/estimate/kanto.html"
                      target="_blank"
                      >こちら</a
                    >
                  </td>
                </tr>
                <tr>
                  <td>100</td>
                  <td>¥45,000</td>
                  <td>¥4,500</td>
                  <td>¥49,500</td>
                  <td>
                    <a
                      href="https://www.kuronekoyamato.co.jp/estimate/kanto.html"
                      target="_blank"
                      >こちら</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-8 col-md-offset-2 banner">
            <ul class="list-inline">
              <li class="center-block">
                <a
                  href="mailto:info@yinyang-calendar.com"
                  class="btn btn-default btn-lg"
                >
                  <i class="fas fa-envelope fa-fw"></i>
                  <span class="network-name">info@yinyang-calendar.com</span>
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
.title {
  margin-bottom: 20px;
}
</style>
