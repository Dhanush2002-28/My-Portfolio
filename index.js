window.addEventListener('scroll', () => {
    const documentHeight = document.documentElement.scrollHeight;
    const currentScroll = window.innerHeight + window.pageYOffset;

    if (currentScroll + 100 >= documentHeight) {
        // Fetch more content when nearing the bottom of the page
        loadMoreContent();
    }
});

function loadMoreContent() {
    // Simulate a content fetch (could be an AJAX call)
    const newSection = document.createElement('div');
    newSection.classList.add('section');
    newSection.textContent = 'Dynamically Loaded Content';
    document.body.appendChild(newSection);
}
