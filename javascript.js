function area() {
    let radius,area;
    radius=parseInt(document.getElementById('a').value);
    area=radius*radius*3.14;
    document.getElementById('kq').value=area;
}