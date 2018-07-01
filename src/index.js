import Store from './lib'

if(process.env.NODE_ENV === 'development') {
  require('./test/index').default(Store)
}
