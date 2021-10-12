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
                  <td>¥700</td>
                  <td>¥70</td>
                  <td>¥770</td>
                  <td>¥120</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>¥6,300</td>
                  <td>¥630</td>
                  <td>¥6,930</td>
                  <td>¥198</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>¥11,200</td>
                  <td>¥1,120</td>
                  <td>¥12,320</td>
                  <td>¥198</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>¥15,750</td>
                  <td>¥1,570</td>
                  <td>¥17,325</td>
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
                  <td>¥24,500</td>
                  <td>¥2,450</td>
                  <td>¥26,950</td>
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
                  <td>¥42,000</td>
                  <td>¥4,200</td>
                  <td>¥46,200</td>
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
