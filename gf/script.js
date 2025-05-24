function toggleNotebook() {
    open = !open;
    notebook.classList.toggle('open', open);
    if (open) {
      notebook.classList.add('expanded');
      nextBtn.style.display = 'inline-block';
      prevBtn.style.display = 'inline-block';
      // Prevent scroll on pages when open
      pages.forEach(page => page.style.overflowY = 'hidden');
    } else {
      notebook.classList.remove('expanded');
      nextBtn.style.display = 'none';
      prevBtn.style.display = 'none';
      // Restore scroll on pages when closed
      pages.forEach(page => page.style.overflowY = 'auto');
    }
  }
  