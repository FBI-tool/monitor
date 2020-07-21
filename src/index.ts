import { MitoVue } from './Vue/index'
import { setupReplace } from './load'
import { breadcrumb, transportData } from 'core'
import { logger } from 'utils'
import { SDK_VERSION, SDK_NAME } from './config'
import { InitOptions } from './types/options'

function init(options: InitOptions = {}): void {
  if (options.disabled) return
  setupReplace(options)
  breadcrumb.bindOptions(options)
  logger.bindOptions(options.debug)
  transportData.bindOptions(options)
}

export default { MitoVue, init, SDK_VERSION, SDK_NAME }
