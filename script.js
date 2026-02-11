(() => {
  const card = document.querySelector('.floating-tr');
  if (!card) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  function onDragStart(e) {
    isDragging = true;
    card.classList.add('dragging');

    const clientX = e.clientX;
    const clientY = e.clientY;
    const rect = card.getBoundingClientRect();

    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;

    // Switch from right to left positioning
    card.style.left = rect.left + 'px';
    card.style.top = rect.top + 'px';
    card.style.bottom = 'auto';
    card.style.right = 'auto';
  }

  function onDragMove(e) {
    if (!isDragging) return;
    e.preventDefault();

    const clientX = e.clientX;
    const clientY = e.clientY

    let newLeft = clientX - offsetX;
    let newTop = clientY - offsetY;

    card.style.left = newLeft + 'px';
    card.style.top = newTop + 'px';
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');
  }

  // Mouse events
  card.addEventListener('mousedown', onDragStart);
  document.addEventListener('mousemove', onDragMove);
  document.addEventListener('mouseup', onDragEnd);
})();

(() => {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // 全コンテンツから active を外す
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

      // クリックされたタブとそのコンテンツに active を付ける
      tab.classList.add('active');
      document.getElementById(tab.dataset.target).classList.add('active');
    })
  });
})();

(() => {
  const btn = document.getElementById('btn-animation-text');
  btn.addEventListener('click', () => {
    const moji = document.getElementById(btn.dataset.target);
    
    if (moji.classList.contains('show')) {
      moji.classList.remove('show');
    } else {
      moji.classList.add('show');
    }
  });
})();