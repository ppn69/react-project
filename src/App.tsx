import React, {FunctionComponent, useState} from 'react';

  
const App: FunctionComponent = () => {

// ajout d'un state au composant App
const [name, setName] = useState<String>('React App');

    
 return (
  <h1>Hello, {name} !</h1>
 )
}
  
export default App;