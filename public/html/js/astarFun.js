// 计算astar路径
function astarCreate(star, end, graph) {
    console.log('起点', star, end)
    var maps = new Graph(graph);
    // console.log(maps)
    const s = star.clone()
    const e = end.clone()
    const sx = (s.x)
    const sy = (s.z)
    const ex = (e.x)
    const ey = (e.z)
    console.log(sx, sy, ex, ey)
    var starPosition = maps.grid[sx][sy];
    var endPosition = maps.grid[ex][ey];
    // console.log(starPosition)
    // console.log(endPosition)

    var result = astar.search(maps, starPosition, endPosition);
    return result
}

// 创建一条直线
function createLine(points) {
    var material = new THREE.LineBasicMaterial({
        color: 0x00ffff
    });
    var geometry = new THREE.BufferGeometry().setFromPoints(points);
    var line = new THREE.Line(geometry, material);
    return line
}
function createBox() {
    var geometry = new THREE.BoxGeometry(1, 2, 1);
    var material = new THREE.MeshLambertMaterial({
        color: 0xa0d8ff,
        transparent: true,
        opacity: 1,
    });
    var cube = new THREE.Mesh(geometry, material);
    return cube;
}
function createGround() {
    let ground = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(2000, 2000),
        new THREE.MeshPhongMaterial({
            color: 0x383634,
            side: THREE.DoubleSide
        })
    )
    ground.rotation.x = -Math.PI / 2
    ground.name = 'ground'
    return ground
}

// 创建随机位置的盒子
function createCone(p) {
    var geometry = new THREE.ConeGeometry(0.5, 2, 16);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var cone = new THREE.Mesh(geometry, material);
    cone.position.copy(p)
    return cone
}