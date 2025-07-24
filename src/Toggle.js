import { useState } from 'react';


function Toggle() {

  const [isVisible, setIsVisible] = useState(false);



  const handleToggle = () => {

    setIsVisible(!isVisible);

  };