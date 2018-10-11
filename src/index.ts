import { Component, StateChanges } from '@mif/core'
import Vue from 'vue'
import { createRecosComponent } from './app'
import { recos } from './data'

export class GreenRecos extends Component<{ sku: string }> {
  instance!: Vue

  onCreate(): HTMLDivElement {
    const host = document.createElement('div')
    this.instance = createRecosComponent('')
    return host
  }

  onAttach(): void {
    this.instance.$mount(this.node as HTMLElement)
  }

  onUpdate({ current }: StateChanges<{ sku: string }>): void {
    this.instance.$data.reco = recos[current.sku!]
  }
}