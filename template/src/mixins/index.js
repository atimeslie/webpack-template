import { mapGetters } from 'vuex'
const mixins = {
  computed: {
    ...mapGetters(['target'])
  }
}
export default mixins
