export default vm => {
  const bodyOffsetHeight = document.body.offsetHeight
  const windowInnerHeight = window.innerHeight

  if (bodyOffsetHeight < windowInnerHeight) {
    vm.styleObject = {
      height: `${windowInnerHeight}px`
    }
  } else {
    vm.styleObject = {}
  }
}
