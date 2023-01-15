import worldMapComponent from '@/components/worldMapComponent'

const myPlugin = {
  install(Vue) {
    Vue.component( "worldMap", worldMapComponent)
  },
};

export default myPlugin;
