fetch('videolinks.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch video links');
    }
    return response.text();
  })
  .then(data => {
    const videoLinks = data.split('\n').map(link => link.trim()).filter(link => link);
    const listElement = document.getElementById('videoList');

    videoLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link;
      a.textContent = link;
      a.target = "_blank"; // Opens in new tab
      li.appendChild(a);
      listElement.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error loading video links:', error);
  });