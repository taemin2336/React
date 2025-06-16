import { Provider } from 'react-redux'
import './App.css'
// import Counter from './NonTooklit/Counter'
// import SotreNonToolkit from './NonTooklit/store'

// import Counter from './UseToolkit/Counter'
// import storeUseToolKit from './UseToolkit/store'
// import User from './UseToolkit/User'

import Counter from './ToolkitCounter/Counter'
import store from './ToolkitCounter/store'

function App() {
   return (
      // <Provider store={storeNonToolKit}>
      //    <Counter></Counter>
      // </Provider>
      // <Provider store={storeUseToolKit}>
      //    <Counter />
      //    <User />
      // </Provider>
      <Provider store={store}>
         <Counter></Counter>
      </Provider>
   )
}

export default App
