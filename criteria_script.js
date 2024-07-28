function submitCriteria() {
    const form = document.getElementById('criteriaForm');
    const area = form.area.value;
    const category = form.category.value;
    const keyword = form.keyword.value;

    const queryString = `?area=${encodeURIComponent(area)}&category=${encodeURIComponent(category)}&keyword=${encodeURIComponent(keyword)}`;
    window.location.href = `category.html${queryString}`;
}
