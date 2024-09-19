const randomTexts = [
    "Innovative solutions that drive change.",
    "Creating tomorrow’s technology, today.",
    "Empowering businesses through creative strategies.",
    "Transforming ideas into cutting-edge solutions."
  ];
  
  function randomizeText() {
    const dynamicText = document.getElementById('dynamicText');
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    dynamicText.textContent = randomTexts[randomIndex];
  }
  