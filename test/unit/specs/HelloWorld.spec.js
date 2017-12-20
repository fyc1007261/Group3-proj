import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('Like and Dislike', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.like()).to.equal(true)
    expect(vm.like()).to.equal(false)
  })
})

describe('Hello.vue', () => {
  it('Put American message', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.message).to.equal('Kobe Bryant Jersey Retirement on Dec.19th!')
  })
})
