// Load achievements, hobbies, testimonials from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Achievements
    const achievementsList = document.getElementById('achievements-list');
    achievementsList.innerHTML = ''; // Clear loading text
    data.achievements.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.year ? `${item.title} (${item.year})` : item.title;
      achievementsList.appendChild(li);
    });

    // Hobbies
    const hobbiesList = document.getElementById('hobbies-list');
    hobbiesList.innerHTML = '';
    data.hobbies.forEach(hobby => {
      const li = document.createElement('li');
      li.textContent = hobby;
      hobbiesList.appendChild(li);
    });

    // Testimonials
    const testimonialsList = document.getElementById('testimonials-list');
    testimonialsList.innerHTML = '';
    data.testimonials.forEach(testi => {
      const li = document.createElement('li');
      li.textContent = `"${testi.comment}" — ${testi.name}`;
      testimonialsList.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById('achievements-list').textContent = 'Failed to load achievements.';
    document.getElementById('hobbies-list').textContent = 'Failed to load hobbies.';
    document.getElementById('testimonials-list').textContent = 'Failed to load testimonials.';
  });

// Load random quote from API
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(quoteData => {
    document.getElementById('quote-text').textContent = `"${quoteData.content}"`;
    document.getElementById('quote-author').textContent = `— ${quoteData.author}`;
  })
  .catch(() => {
    document.getElementById('quote-text').textContent = 'Could not load quote at this time.';
  });
