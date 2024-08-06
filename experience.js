document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function () {
            selectedRating = this.getAttribute('data-value');
            updateStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    document.getElementById('submitReview').addEventListener('click', function () {
        const reviewText = document.getElementById('reviewText').value;

        if (selectedRating > 0 && reviewText.trim() !== '') {
            const reviewList = document.getElementById('reviewsList');
            const newReview = document.createElement('li');
            newReview.innerHTML = `
                <div>
                    ${'★'.repeat(selectedRating)}
                    ${'★'.repeat(5 - selectedRating).replace(/★/g, '☆')}
                </div>
                <p>${reviewText}</p>
            `;
            reviewList.appendChild(newReview);

            // Clear the input fields
            document.getElementById('reviewText').value = '';
            updateStars(0);
        } else {
            alert('Please select a rating and write a review.');
        }
    });
});
