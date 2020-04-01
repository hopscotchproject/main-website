import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import InProgress from './components/InProgress'
import NotFound from './components/NotFound'

const navBar = {
  'nav-bar': NavBar
}

const footer = {
  footer: Footer
}

export default [{
  path: '/',
  components: {
    ...navBar,
    ...footer,
    default: Main
  }
}, {
  path: '/portfolio',
  components: {
    ...navBar,
    ...footer,
    default: Portfolio
  }
}, {
  path: '/contacts',
  components: {
    ...navBar,
    ...footer,
    default: Contacts
  }
}, {
  path: '/in-progress',
  components: {
    ...navBar,
    default: InProgress
  }
}, {
  path: '*',
  components: {
    ...navBar,
    ...footer,
    default: NotFound
  }
}]
