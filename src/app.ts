import moment from 'moment'
import Vue from 'vue'
import { recos } from './data';

export function createRecosComponent(sku: string): Vue {
  console.log(`Moment date from green: ${moment().format()}`)

  return new Vue({
    template: `
      <div>
        <h3>Related Products</h3>
        <img v-for="id in reco"
            :src="'https://micro-frontends.org/1-composition-client-only/team-green/images/reco_' + id + '.jpg'"
            :alt="'Reco ' + id">
      </div>
    `,
    data: {
      reco: recos[sku]
    },
  })
}
