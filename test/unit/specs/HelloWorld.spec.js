import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('Like', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.like()).to.equal(true)
    expect(vm.like()).to.equal(false)
  })
})

describe('Hello.vue', () => {
  it('Dislike', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.dislike()).to.equal(true)
    expect(vm.dislike()).to.equal(false)
  })
})

describe('Hello.vue', () => {
  it('American Message display', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.message).to.equal('Kobe Bryant Jersey Retirement on Dec.19th!')
    expect(vm.g_region).to.equal('Am')
    expect(vm.inited).to.equal(1)
    vm.delete_n_next()
    vm.Am_click()
    expect(vm.message).to.equal('No news from America')
    expect(vm.pos).to.equal(-1)
  })
})

describe('Hello.vue', () => {
  it('Deletion', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.Am_click()
    expect(vm.delete_n_next()).to.equal(true)
    expect(vm.delete_n_next()).to.equal(false)
  })
})

describe('Hello.vue', () => {
  it('Publish', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    vm.pub_click(true, 'America')
    vm.pub_click(true, 'Asia')
    vm.pub_click(true, 'Europe')
    vm.pub_click(true, 'Africa')
    vm.Am_click()
    expect(vm.message).to.equal('SJTU SE Group3 did a good job in their project!')
  })
})
