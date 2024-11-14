const images = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1729972128004-c84dcc925966?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1729972128004-c84dcc925966?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 1'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1685009341393-fb74925216a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1685009341393-fb74925216a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 2'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1726607430822-1825ea40e648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1726607430822-1825ea40e648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 3'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1723071507951-5f400356449c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1723071507951-5f400356449c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 4'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1731185249227-3d9a3c9c6709?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1731185249227-3d9a3c9c6709?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 5'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1731332066050-47efac6e884f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1731332066050-47efac6e884f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 6'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1709804889528-66d4e8f269f4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1709804889528-66d4e8f269f4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 7'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1629611589423-665b6a884f76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1629611589423-665b6a884f76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 8'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1695695761339-d844e52c127b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1695695761339-d844e52c127b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 9'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1702750722257-6bc38db1267a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1702750722257-6bc38db1267a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 10'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1707949576610-a373542c77df?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1707949576610-a373542c77df?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 11'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1731252713521-4ce0010f3254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      hd: 'https://images.unsplash.com/photo-1731252713521-4ce0010f3254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Beautiful Landscape 12'
    }
  ];
  
  const gallery = document.querySelector('.gallery');
  
  images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.thumbnail;
    imgElement.alt = image.caption;
    imgElement.dataset.index = index;
    gallery.appendChild(imgElement);
  });
  
  const modal = document.querySelector('.modal');
  const hdImage = document.getElementById('hd-image');
  const imageCaption = document.getElementById('image-caption');
  const closeButton = document.querySelector('.close-button');
  
  function showModal(index) {
    const image = images[index];
    hdImage.src = image.hd;
    hdImage.alt = image.caption;
    imageCaption.textContent = image.caption;
    modal.classList.remove('hidden');
  }
  

  function closeModal() {
    modal.classList.add('hidden');
  }
  

  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const index = e.target.dataset.index;
      showModal(index);
    }
  });
  

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeButton) {
      closeModal();
    }
  });
  

  hdImage.addEventListener('click', closeModal);
  