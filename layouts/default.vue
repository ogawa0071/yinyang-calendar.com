<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  background: linear-gradient(0deg, #fbd58b 0%, #008cce 90%);
}

body {
  background: none;
  font-family: $font;
}

img {
  max-width: 100%;
  max-height: 100%;
}

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

.center-block {
  .color {
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
