let intersectionObserver;

function getIntersectionObserver() {
    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
                entry.target.dispatchEvent(new CustomEvent(eventName));
            });
        }
    );
}

export default function viewport(element) {
    getIntersectionObserver();

    intersectionObserver.observe(element);

    return {
        destroy() {
            intersectionObserver.unobserve(element);
        }
    }
}