import React, { useState, useEffect } from 'react';

const App = () => {
   // 1. Use a variável de estado (state) name
   const [name, setName] = useState('Mary');

  //  // 2. Use um efeito para persistir o formulário
  //  useEffect(function persistForm() {
  //    localStorage.setItem('formData', name);
  //   });
 
  // // 2.1 Use um efeito para persistir o formulário
  //  if (name !== '') {
  //   useEffect(function persistForm() {
  //     localStorage.setItem('formData', name);
  //   });
  // }
 
  // 2.1 Use um efeito para persistir o formulário
  useEffect(function persistForm() {
    if (name !== '') {
      localStorage.setItem('formData', name);
    }
  });
 
   // 3. Use a variável de estado (state) surname
   const [surname, setSurname] = useState('Poppins');
 
   // 4. Use um efeito para atualizar o título
   useEffect(function updateTitle() {
     document.title = name + ' ' + surname;
   });

  //  const multiplica = (e) => {
  //   setCount(e.target.value)
  // }

   return (
    // <input type="text" onChange={(e) => multiplica(e)}/>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
   );
}

export default App;
