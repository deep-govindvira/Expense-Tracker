function get_database() {
    return JSON.parse(localStorage.getItem('db')) || {};
}
function set_database(db) {
    localStorage.setItem('db', JSON.stringify(db));
}
function get_cat(key) {
    return get_database()[key] || [];
}
function set_cat(key, b) {
    let dbt = get_database();
    dbt[key] = b;
    set_database(dbt);
}