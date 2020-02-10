import NavBar from './components/NavBar'
import Main from './components/Main'
import InProgress from './components/InProgress'
import NotFound from './components/NotFound'

const navBar = {
  'nav-bar': NavBar
}

export default [{
  path: '/',
  components: {
    ...navBar,
    default: Main
  }
},{
  path: '/in-progress',
  components: {
    ...navBar,
    default: InProgress
  }
}, {
  path: '*',
  components: {
    ...navBar,
    default: NotFound
  }
}]
