import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireMainComponent = require.context(
  '@/components/main',
  false,
  /^[A-Z]\w+\.(vue|js)$/
)

requireMainComponent.keys().forEach((filename) => {
  const componentConfig = requireMainComponent(filename)

  const componentName = upperFirst(
    camelCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const requireLogosComponent = require.context(
  '@/components/logos',
  false,
  /^[A-Z]\w+\.(vue|js)$/
)

requireLogosComponent.keys().forEach((filename) => {
  const componentConfig = requireLogosComponent(filename)

  const componentName = upperFirst(
    camelCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
